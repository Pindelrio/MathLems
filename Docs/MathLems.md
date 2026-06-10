# MathLems — Especificació del producte

MathLems és una aplicació per a nens i nenes que fa les matemàtiques més divertides. L'objectiu és millorar en sumes, restes, multiplicacions i divisions, acompanyant a **Lems** —un petit drac— en el seu viatge de tornada al seu planeta.

L'estètica és de joc de rol de fantasia gamificat: colors foscos i màgics, progrés visible, recompenses i insignies.

---

## Mascota: Lems

Lems és un petit drac verd apassionat per les matemàtiques. La seva missió és tornar al seu planeta (el **Planeta Lems**) i el jugador l'acompanya resolent reptes.

- **Arxiu d'icona:** `MathLems.png` (1024×1024, usada com a icona de l'app i splash)
- **Arxiu de mascota aïllada:** `assets/lems-mascot2.png` (fons transparent, usada a l'app)
- La mascota apareix en totes les pantalles principals: splash, intro, selecció de planeta, pantalla d'inici i durant el joc (amb animacions de reacció).

---

## Flux de navegació

```
Splash (animació de l'ou → Lems neix)
  ├─ Primer cop  → Intro (història de Lems) → Onboarding → Planet Select → Home
  └─ Usuari existent → Planet Select → Home

Home → World Detail → Play → Result
Home → Settings → Avatar Editor
```

---

## Splash Screen

L'splash és espectacular i succeeix cada vegada que s'obre l'app:

1. **L'ou apareix** amb una animació d'escala i bounce.
2. **L'ou tremola** dues vegades (anticipació).
3. **Apareix l'esquerda** (💥) mentre l'ou torna a tremolar.
4. **L'ou desapareix** i **Lems surt de l'ou** (spring bounce amb la imatge real de la mascota).
5. **El títol "MathLems" apareix** des de baix.
6. Redirigeix: primer cop → Intro | usuari existent → Planet Select.

---

## Intro (primer cop únicament)

Quan un nou usuari obre l'app per primera vegada, Lems explica la seva història en 3 diapositives (fade entre elles):

| Diapositiva | Títol | Contingut |
|-------------|-------|-----------|
| 1 | Hola! Sóc en Lems! 👋 | Presentació: petit drac del planeta màgic |
| 2 | M'he perdut per l'univers! 😟 | Un forat negre l'ha allunyat del seu planeta |
| 3 | Necessito la teva ajuda! 🚀 | Resolent reptes de matemàtiques l'ajudarem a tornar |

Botó final: **"T'ajudo, Lems! 🚀"** → va a l'Onboarding.

---

## Onboarding (primer cop)

El jugador configura el seu perfil:
- **Nom** (text lliure)
- **Avatar** (selector de base: mag, pirata, etc.)

→ Redirigeix a Planet Select.

---

## Selecció de Planeta

Pantalla que apareix **cada cop** que s'obre l'app (després del splash). El jugador escull on vol jugar:

| Planeta | Icona | Descripció |
|---------|-------|-----------|
| **Planeta Maths** | 🌍 | Càlcul mental: sumes, restes, multiplicacions i divisions |
| **Planeta Lems** | 🧩 | Descobreix quina operació cal fer (problemes de la vida real) |

L'últim planeta escollit es guarda i es mostra com a "Última sessió ⭐". Des de la pantalla d'inici es pot canviar de planeta en qualsevol moment.

---

## Planeta Maths

El joc original. El jugador veu una operació matemàtica i ha de triar la resposta numèrica correcta entre 4 opcions.

### Mons del Planeta Maths

| ID | Nom | Tema | Operacions | Problemes |
|----|-----|------|------------|-----------|
| 1 | Illes Pirates 🏴‍☠️ | Pirata | Suma, Resta (unitats i centenes) | 20 (IDs 101–120) |
| 2 | Bosc Màgic 🌲 | Bosc | Suma, Resta, Multiplicació (×unitats) | 20 (IDs 201–220) |
| 3 | Cova del Drac 🐉 | Cova | Suma, Resta, Multiplicació, Divisió | 20 (IDs 301–320) |

Exemples de problemes: `3 + 5`, `23 × 2`, `44 ÷ 2`

---

## Planeta Lems

Joc de resolució de problemes. El jugador llegeix un enunciat en català i ha de triar **quina operació cal fer** (no el resultat numèric). Les 4 opcions sempre són: **Suma / Resta / Multiplicació / Divisió**.

### Mons del Planeta Lems

| ID | Nom | Tema | Operacions a identificar | Problemes |
|----|-----|------|--------------------------|-----------|
| 4 | Mar dels Problemes ⛵ | Marí | Suma, Resta | 20 (IDs 401–420) |
| 5 | Selva dels Enigmes 🌴 | Selva | Suma, Resta, Multiplicació | 20 (IDs 501–520) |
| 6 | Cova dels Misteris 🔮 | Cova | Suma, Resta, Multiplicació, Divisió | 20 (IDs 601–620) |

Exemple de problema (Món 4): *"En Joan té 3 pomes i l'Anna en té 4. Quantes pomes hi ha entre els dos?"* → **Suma**

Exemple de problema (Món 6): *"Tens 12 pomes i les vols repartir a parts iguals entre 4 nens. Quantes toca a cadascú?"* → **Divisió**

### Desbloqueig de mons Lems
- Món 4: sempre desbloquejat (és el primer del planeta).
- Món 5: requereix completar el Món 4.
- Món 6: requereix completar el Món 5.

---

## Mecànica de joc (comú als dos planetes)

- **20 preguntes** per món.
- **5 vides** per partida (cors). Cada error en resta una.
- **Ratxa (streak):** cada resposta correcta consecutiva suma a la ratxa.
- Cada 3 respostes correctes seguides s'activa un **Bonus Item**.
- L'usuari veu: barra de progrés, vides, ratxa, puntuació de sessió i la reacció de Lems.
- Lems reacciona: idle / correcte (bot) / error (sacsejada) / bonus (bot gran + estrelletes).

---

## Sistema de recompenses

### Ítems de recompensa (per resposta correcta)

| Ítem | Emoji | Punts | Mons |
|------|-------|-------|------|
| Cuixa de Carn | 🍖 | 50 | Planeta Maths — Món 1 |
| Peix Gros | 🐟 | 30 | Planeta Maths — Món 1 |
| Cristall de Foc | 💎 | 100 | Planeta Maths — Mons 2, 3 |
| Flama Flotant | 🔥 | 75 | Planeta Maths — Mons 2, 3 |
| Carbonsença | 🪨 | 40 | Planeta Maths — Mons 2, 3 |
| Mapa del Tresor | 🗺️ | 50 | Planeta Lems — Món 4 |
| Àncora d'Or | ⚓ | 30 | Planeta Lems — Món 4 |
| Peça d'Enigma | 🧩 | 100 | Planeta Lems — Mons 5, 6 |
| Orbe Màgic | 🔮 | 75 | Planeta Lems — Mons 5, 6 |
| Estel Brillant | 🌟 | 40 | Planeta Lems — Mons 5, 6 |

### Ítems Bonus (cada 3 respostes correctes seguides)

| Ítem | Emoji | Efecte |
|------|-------|--------|
| Gofre Daurat | 🧇 | Multiplicador de punts |
| Ou de Drac | 🥚 | Vida extra |
| Cofre de Gemmes | 💰 | Ítem cosmètic |

---

## Pantalla de resultat

En acabar un món (20 preguntes o sense vides):

- **Victòria** (🏆): mostra la insignia del món, puntuació de sessió, ítems guanyats i si s'ha desbloquejat el mon següent.
- **Derrota** (💔): invita a repetir.
- Botons: *Tornar al mapa* | *Repetir món*.
- La puntuació de la sessió s'afegeix al total acumulat del jugador.
- Les insignies de Planeta Lems mostren "Repte N" (p.ex. "Insignia del Repte 1").

---

## Avatar del jugador

- Base configurable a l'Onboarding: mag, pirata, etc.
- A mesura que es guanyen punts es desbloquegen ítems cosmètics per a l'avatar: ulleres, barret, barba, cabell...
- L'avatar es pot editar des de Configuració.
- (Post-MVP) Ampliar bases d'avatar i catàleg d'ítems.

---

## Pantalla d'inici (Home)

- Capçalera: avatar + nom del jugador + punts totals acumulats + botó de configuració.
- Etiqueta del planeta actiu (🌍 Planeta Maths / 🧩 Planeta Lems) amb botó *"canviar"*.
- Mascota Lems amb bombolla de diàleg contextual.
- Llista de WorldCards del planeta actiu (progrés, desbloquejat/bloquejat).

---

## Configuració (Settings)

- Editar nom.
- Previsualització i edició de l'avatar.
- Estadístiques: punts totals, mons completats, insignies.
- Zona de perill: restablir tot el progrés.

---

## Estat del joc (persistència)

| Dada | Persitència | On |
|------|-------------|-----|
| Nom, avatar, punts totals, insignies, isOnboarded | Permanent | `playerStore` (AsyncStorage) |
| Planeta actiu (maths/lems) | Permanent | `playerStore` |
| Progrés per món (completat, puntuació, rècord) | Permanent | `gameStore` |
| Vides, ratxa, puntuació de sessió | Sessió | `gameStore` (reset a `startWorld`) |

---

## Identitat visual

- **Paleta:** fons fosc morat (`#1a0033`), or (`#FFD700`), morat (`#6B21A8`), vermell fosc, verd.
- **Tipografia:** família Quicksand (Regular, SemiBold, Bold, Medium, Light).
- Cada món té el seu `bgColor` i `accentColor` propis.
- Planeta Lems: tons blau marí (Món 4), verd selva (Món 5), morat místic (Món 6).

---

## Post-MVP / Roadmap

- Integrar `MathLemsAPI` per sincronització de progrés al núvol.
- Login amb OAuth (Google + Microsoft via `expo-auth-session`).
- Supabase per autenticació per correu i contrasenya.
- Animacions Lottie per a Lems (substituir l'API Animated actual).
- `expo-haptics` per feedback tàctil en respostes.
- Banc de problemes ampliable des del backend.
- Ampliar catàleg d'avatars i ítems cosmètics.
- Mapa de progrés visual que mostri el viatge de Lems fins al seu planeta.
- Modo multijugador o reptes entre amics.
