export interface QuestionStat {
  questionId: number;
  attempts: number;
  correctAnswers: number;
  lastAnswered: string; // ISO date string
}

export interface TestStat {
  date: string; // ISO date string
  totalQuestions: number;
  correctAnswers: number;
  score: number; // percentage
}

// Get all question statistics
export const getQuestionStats = (): QuestionStat[] => {
  const stats = localStorage.getItem('questionStats');
  return stats ? JSON.parse(stats) : [];
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
  
  localStorage.setItem('questionStats', JSON.stringify(stats));
};

// Get all test statistics
export const getTestStats = (): TestStat[] => {
  const stats = localStorage.getItem('testStats');
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
  
  localStorage.setItem('testStats', JSON.stringify(stats));
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
  localStorage.removeItem('questionStats');
  localStorage.removeItem('testStats');
};