export interface QuestionStat {
  questionId: number;
  attempts: number;
  correctAnswers: number;
  lastAnswered: string; // ISO date string
}

export interface QuestionAttempt {
  questionId: number;
  date: string; // ISO date string
  correct: boolean;
}

export interface TestStat {
  date: string; // ISO date string
  totalQuestions: number;
  correctAnswers: number;
  score: number; // percentage
}

const QUESTION_STATS_KEY = 'questionStats';
const QUESTION_ATTEMPTS_KEY = 'questionAttempts';
const TEST_STATS_KEY = 'testStats';

// Get all question statistics
export const getQuestionStats = (): QuestionStat[] => {
  const stats = localStorage.getItem(QUESTION_STATS_KEY);
  return stats ? JSON.parse(stats) : [];
};

// Get attempts history (all attempts across questions)
export const getAllQuestionAttempts = (): QuestionAttempt[] => {
  const raw = localStorage.getItem(QUESTION_ATTEMPTS_KEY);
  return raw ? JSON.parse(raw) : [];
};

// Get attempts history for a question
export const getQuestionAttempts = (questionId: number): QuestionAttempt[] => {
  return getAllQuestionAttempts().filter(a => a.questionId === questionId);
};

// Update statistics for a question
export const updateQuestionStat = (
  questionId: number,
  isCorrect: boolean
): void => {
  const stats = getQuestionStats();
  const now = new Date().toISOString();

  const existingStat = stats.find(stat => stat.questionId === questionId);

  if (existingStat) {
    existingStat.attempts += 1;
    if (isCorrect) {
      existingStat.correctAnswers += 1;
    }
    existingStat.lastAnswered = now;
  } else {
    stats.push({
      questionId,
      attempts: 1,
      correctAnswers: isCorrect ? 1 : 0,
      lastAnswered: now
    });
  }

  localStorage.setItem(QUESTION_STATS_KEY, JSON.stringify(stats));

  // Also append to attempts history (for detailed timeline)
  const attempts = getAllQuestionAttempts();
  attempts.push({ questionId, date: now, correct: isCorrect });
  localStorage.setItem(QUESTION_ATTEMPTS_KEY, JSON.stringify(attempts));
};

// Get all test statistics
export const getTestStats = (): TestStat[] => {
  const stats = localStorage.getItem(TEST_STATS_KEY);
  return stats ? JSON.parse(stats) : [];
};

// Add a new test result
export const addTestStat = (
  totalQuestions: number,
  correctAnswers: number
): void => {
  const stats = getTestStats();
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  stats.push({
    date: new Date().toISOString(),
    totalQuestions,
    correctAnswers,
    score
  });

  localStorage.setItem(TEST_STATS_KEY, JSON.stringify(stats));
};

// Get questions that need practice (never answered or more wrong than right)
export const getQuestionsForPractice = (): number[] => {
  const stats = getQuestionStats();

  // Questions that have never been answered or have more wrong answers than correct
  return stats
    .filter(stat =>
      stat.attempts === 0 ||
      stat.correctAnswers < stat.attempts / 2
    )
    .map(stat => stat.questionId);
};

// Clear all statistics
export const clearAllStats = (): void => {
  localStorage.removeItem(QUESTION_STATS_KEY);
  localStorage.removeItem(TEST_STATS_KEY);
  localStorage.removeItem(QUESTION_ATTEMPTS_KEY);
};