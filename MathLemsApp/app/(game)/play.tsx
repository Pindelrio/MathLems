import { useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';
import { useGameStore } from '@/store/gameStore';
import { usePlayerStore } from '@/store/playerStore';
import { getProblemsForWorld } from '@/data/problems';
import { getRewardForWorld, BONUS_ITEMS } from '@/data/rewards';
import { WORLDS } from '@/data/worlds';
import { COLORS } from '@/constants/theme';
import AnswerOption from '@/components/problem/AnswerOption';
import LivesBar from '@/components/problem/LivesBar';
import LemsReaction from '@/components/lems/LemsReaction';
import { Answer } from '@/types';

type AnswerState = 'default' | 'correct' | 'wrong' | 'disabled';
type Mood = 'idle' | 'correct' | 'wrong' | 'bonus';

const NEXT_DELAY = 1200;

export default function PlayScreen() {
  const {
    currentWorldId,
    currentQuestionIndex,
    lives,
    streak,
    sessionScore,
    answerCorrect,
    answerWrong,
    nextQuestion,
    completeWorld,
    addCollectedItem,
  } = useGameStore();
  const { addScore, addBadge } = usePlayerStore();

  const worldId = currentWorldId ?? 1;
  const world   = WORLDS.find((w) => w.id === worldId)!;
  const problems = getProblemsForWorld(worldId);
  const problem  = problems[currentQuestionIndex];
  const total    = problems.length;

  const [answerStates, setAnswerStates] = useState<AnswerState[]>(['default', 'default', 'default', 'default']);
  const [mood, setMood]                 = useState<Mood>('idle');
  const [bonusShown, setBonusShown]     = useState(false);

  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // If no world started, go home
    if (currentWorldId === null) { router.replace('/(game)/home'); return; }
    // Game over: no lives
    if (lives <= 0) {
      setTimeout(() => router.replace('/(game)/result'), 800);
    }
  }, [lives, currentWorldId]);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: (currentQuestionIndex / total) * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentQuestionIndex]);

  const handleAnswer = useCallback(
    (answer: Answer, index: number) => {
      if (answerStates[index] !== 'default') return;

      const correct = answer.isCorrect;
      const newStates: AnswerState[] = problem.answers.map((a, i) =>
        i === index
          ? correct ? 'correct' : 'wrong'
          : a.isCorrect ? 'correct' : 'disabled'
      );
      setAnswerStates(newStates);

      if (correct) {
        const reward   = getRewardForWorld(worldId);
        const points   = reward.points;
        const newStreak = streak + 1;

        answerCorrect(points);
        addCollectedItem(reward.id);

        if (newStreak > 0 && newStreak % 3 === 0) {
          setMood('bonus');
          setBonusShown(true);
          const bonus = BONUS_ITEMS[Math.floor(Math.random() * BONUS_ITEMS.length)];
          addCollectedItem(bonus.id);
          if (bonus.effect === 'extra_life') {
            // handled via store
          }
        } else {
          setMood('correct');
        }
      } else {
        answerWrong();
        setMood('wrong');
      }

      // Advance after delay
      setTimeout(() => {
        setMood('idle');
        setBonusShown(false);
        const nextIdx = currentQuestionIndex + 1;

        if (nextIdx >= total || (correct ? false : lives - 1 <= 0)) {
          const badge = `world_${worldId}_badge`;
          const finalScore = sessionScore + (correct ? getRewardForWorld(worldId).points : 0);
          completeWorld(worldId, finalScore, badge);
          addScore(finalScore);
          addBadge(badge);
          router.replace('/(game)/result');
        } else {
          nextQuestion();
          setAnswerStates(['default', 'default', 'default', 'default']);
        }
      }, NEXT_DELAY);
    },
    [answerStates, problem, streak, lives, currentQuestionIndex, total, worldId, sessionScore]
  );

  if (!problem) return null;

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container, { backgroundColor: world.bgColor }]}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <LivesBar lives={lives} />
        <Text style={[styles.progress, { color: world.accentColor }]}>
          {currentQuestionIndex + 1}/{total}
        </Text>
        <Text style={styles.streakText}>
          {streak >= 3 ? `🔥 ×${streak}` : streak > 0 ? `×${streak}` : ''}
        </Text>
      </View>

      {/* Progress bar */}
      <View style={styles.progressBar}>
        <Animated.View
          style={[styles.progressFill, { width: progressWidth, backgroundColor: world.accentColor }]}
        />
      </View>

      {/* Lems */}
      <View style={styles.lemsArea}>
        <LemsReaction mood={mood} />
        {bonusShown && (
          <View style={styles.bonusBadge}>
            <Text style={styles.bonusText}>🎁 Bonus!</Text>
          </View>
        )}
      </View>

      {/* Problem */}
      <View style={styles.problemCard}>
        <Text style={styles.problemText}>{problem.statement}</Text>
      </View>

      {/* Answers */}
      <View style={styles.answers}>
        {problem.answers.map((ans, i) => (
          <AnswerOption
            key={i}
            content={ans.content}
            state={answerStates[i]}
            onPress={() => handleAnswer(ans, i)}
          />
        ))}
      </View>

      {/* Score */}
      <Text style={[styles.sessionScore, { color: world.accentColor }]}>
        🏆 {sessionScore} pts
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 56,
    paddingBottom: 8,
  },
  progress: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
  },
  streakText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 16,
    color: COLORS.fire,
    minWidth: 40,
    textAlign: 'right',
  },

  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 12,
  },
  progressFill: { height: 6, borderRadius: 3 },

  lemsArea: {
    alignItems: 'center',
    marginVertical: 12,
    height: 100,
    justifyContent: 'center',
  },
  bonusBadge: {
    position: 'absolute',
    right: 20,
    top: 0,
    backgroundColor: COLORS.gold,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  bonusText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 13,
    color: COLORS.bgDark,
  },

  problemCard: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 20,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  problemText: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 24,
    color: COLORS.text,
    textAlign: 'center',
  },

  answers: { flex: 1 },

  sessionScore: {
    fontFamily: 'Quicksand-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 12,
  },
});
