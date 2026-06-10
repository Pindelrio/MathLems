# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MathLems is an educational math game for kids featuring "Lems", a dragon mascot. Players complete 3 themed worlds of 20 math problems each, earning points and unlocking items. The app is built with Expo (React Native) and is fully standalone (no backend in v1).

See `MathLems.md` for the full product spec (worlds, reward system, mascot story, avatar items, etc.).

Project documentation is located at `C:\Projectes\MathLems\Docs`.

## Active Project: MathLemsApp (Expo)

The Expo app lives in `MathLemsApp/`. The legacy MAUI project (`MathLems/`, `MathLemsAPI/`, `MathLems.Framework/`) is kept as reference but is not the active codebase.

## Build & Run Commands

```powershell
cd MathLemsApp

# Start dev server (scan QR with Expo Go app)
npx expo start

# Android emulator
npx expo start --android

# iOS simulator (macOS only)
npx expo start --ios

# TypeScript check
npx tsc --noEmit

# Install a new package (always use --legacy-peer-deps due to react-dom peer conflict)
npm install <package> --legacy-peer-deps
# or use expo install for SDK-compatible versions:
npx expo install <package>
```

## Architecture

### Tech Stack
- **Expo SDK 54** + **Expo Router 6** (file-based routing)
- **TypeScript** with strict mode
- **Zustand 5** for global state, persisted via `AsyncStorage`
- **NativeWind 4** (Tailwind CSS v3) for styling
- **React Native Reanimated 4** + `Animated` API for animations
- **expo-font** for Quicksand font family

### Key Directories
```
MathLemsApp/
├── app/                    # Expo Router screens (file-based routing)
│   ├── _layout.tsx         # Root: loads fonts, hides splash, StatusBar
│   ├── index.tsx           # Splash animation → redirects based on isOnboarded
│   ├── onboarding.tsx      # First-time: name + avatar selection
│   └── (game)/
│       ├── home.tsx        # World map with WorldCard list
│       ├── world/[id].tsx  # World detail + play button
│       ├── play.tsx        # Core gameplay: 20 questions, lives, streak
│       ├── result.tsx      # Score, badges, items earned
│       └── settings.tsx    # Player profile, avatar, stats, reset
├── components/
│   ├── avatar/AvatarPicker.tsx    # 6-avatar grid selector
│   ├── lems/LemsReaction.tsx      # Dragon mascot with idle/correct/wrong/bonus moods
│   ├── problem/AnswerOption.tsx   # Animated answer button (default/correct/wrong states)
│   ├── problem/LivesBar.tsx       # ❤️ hearts display
│   └── ui/WorldCard.tsx           # World selection card with progress
├── store/
│   ├── playerStore.ts      # name, avatarId, badges, items, totalScore, isOnboarded
│   └── gameStore.ts        # worldProgress, session state (lives, streak, score)
├── data/
│   ├── worlds.ts           # 3 WorldDef objects (id, name, theme, operations, colors)
│   ├── problems.ts         # 60 hardcoded problems (20 per world, in Catalan)
│   └── rewards.ts          # RewardItems + BonusItems + getRewardForWorld()
├── types/index.ts          # Shared TypeScript interfaces
└── constants/theme.ts      # COLORS, FONTS, SIZES constants
```

### Navigation Flow
```
index.tsx (splash animation)
  ├─ first time → onboarding.tsx → (game)/home.tsx
  └─ returning  → (game)/home.tsx

(game)/home.tsx → (game)/world/[id].tsx → (game)/play.tsx → (game)/result.tsx
(game)/home.tsx → (game)/settings.tsx
```

### State Management
- **`playerStore`** (persisted): player profile and long-term progress. Fields: `name`, `avatarId`, `unlockedItems`, `badges`, `totalScore`, `isOnboarded`.
- **`gameStore`** (worldProgress persisted, session state not): `worldProgress` saved across sessions; `lives`, `streak`, `sessionScore`, `collectedItems`, `currentWorldId` are session-only (reset on `startWorld()`).
- World unlock logic: `isWorldUnlocked(id)` — world 1 always unlocked, world N requires world N-1 completed.

### Worlds & Problems
- **World 1** (Illes Pirates): sums + subtractions, units and hundreds
- **World 2** (Bosc Màgic): sums, subtractions, multiplications by units (e.g. 23×2)
- **World 3** (Cova del Drac): sums, subtractions, multiplications and divisions (e.g. 44÷2)
- 20 problems per world in `data/problems.ts`, all in Catalan. IDs: 101-120, 201-220, 301-320.

### Reward System (from MathLems.md)
- Each correct answer gives a `RewardItem` via `getRewardForWorld(worldId)`.
- Every 3 consecutive correct answers (streak % 3 === 0) triggers a `BonusItem`.
- World 1 rewards: 🍖 Cuixa (50pts), 🐟 Peix (30pts).
- World 2-3 rewards: 💎 Cristall (100pts), 🔥 Flama (75pts), 🪨 Carbonsença (40pts).
- Bonus items: 🧇 Gofre (score×), 🥚 Ou de Drac (+vida), 💰 Cofre (cosmètic).

### Styling
- NativeWind classes used alongside `StyleSheet.create()`.
- Fantasy color palette defined in `constants/theme.ts`: `COLORS.bgDark` (#1a0033), `COLORS.gold` (#FFD700), `COLORS.purple` (#6B21A8), etc.
- Each world has its own `bgColor` and `accentColor` for themed UI.
- Font: Quicksand family (Regular, Bold, SemiBold, Medium, Light) in `assets/fonts/`.

### Known npm Issue
There is a persistent `react-dom` peer dependency conflict (react@19.1.0 vs required 19.2.6). Always use `--legacy-peer-deps` when running `npm install` directly. `npx expo install` handles this automatically for Expo SDK packages.

## Legacy Projects (reference only)
- `MathLemsAPI/`: ASP.NET Core REST API with SQLite — not used in v1 standalone.
- `MathLems.Framework/`: Shared C# models — superseded by `types/index.ts`.
- `MathLems/`: Original MAUI app — abandoned.

## Post-MVP Roadmap
- Integrate MathLemsAPI for cloud progress sync
- OAuth login (Google + Microsoft via `expo-auth-session`)
- Supabase for email/password auth
- Lottie animations for Lems (replace Animated API)
- `expo-haptics` feedback on answers
- Expandable problem bank from backend
