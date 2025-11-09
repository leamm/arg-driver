import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  getQuestionStats, 
  getTestStats, 
  getAllQuestionAttempts,
  QuestionStat, 
  TestStat,
  QuestionAttempt,
  clearAllStats
} from "@/utils/statistics";
import { questions } from "@/data/questions";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';
import { format } from 'date-fns';
import { FeedbackFooter } from "@/components/FeedbackFooter";

const Statistics = () => {
  const [questionStats, setQuestionStats] = useState<QuestionStat[]>([]);
  const [testStats, setTestStats] = useState<TestStat[]>([]);
  const [questionAttempts, setQuestionAttempts] = useState<QuestionAttempt[]>([]);
  const [language, setLanguage] = useState<"es" | "en" | "ru">("es");

  useEffect(() => {
    setQuestionStats(getQuestionStats());
    setTestStats(getTestStats());
    setQuestionAttempts(getAllQuestionAttempts());
  }, []);

  const handleClearStats = () => {
    if (window.confirm("Are you sure you want to clear all statistics?")) {
      clearAllStats();
      setQuestionStats([]);
      setTestStats([]);
    }
  };

  const chartData = testStats.map(stat => ({
    date: format(new Date(stat.date), 'dd/MM/yyyy'),
    score: stat.score
  }));

  const answersTrendMap = questionAttempts.reduce((acc, attempt) => {
    const attemptDate = new Date(attempt.date);
    const dayKey = format(attemptDate, 'yyyy-MM-dd');

    if (!acc[dayKey]) {
      acc[dayKey] = {
        dayKey,
        label: format(attemptDate, 'dd/MM/yyyy'),
        correct: 0,
        incorrect: 0
      };
    }

    if (attempt.correct) {
      acc[dayKey].correct += 1;
    } else {
      acc[dayKey].incorrect += 1;
    }

    return acc;
  }, {} as Record<string, { dayKey: string; label: string; correct: number; incorrect: number }>);

  const correctIncorrectData = Object.values(answersTrendMap)
    .sort((a, b) => a.dayKey.localeCompare(b.dayKey))
    .map(item => ({
      date: item.label,
      correct: item.correct,
      incorrect: item.incorrect
    }));

  const averageScore = testStats.length > 0 
    ? Math.round(testStats.reduce((sum, stat) => sum + stat.score, 0) / testStats.length) 
    : 0;

  const totalAttempts = questionStats.reduce((sum, stat) => sum + stat.attempts, 0);
  const totalCorrect = questionStats.reduce((sum, stat) => sum + stat.correctAnswers, 0);
  const overallAccuracy = totalAttempts > 0 
    ? Math.round((totalCorrect / totalAttempts) * 100) 
    : 0;
  const avgAttemptsPerTicket = questionStats.length > 0 
    ? (totalAttempts / questionStats.length) 
    : 0;

  const lastAnswerMap = questionAttempts.reduce((acc, attempt) => {
    const existing = acc.get(attempt.questionId);
    if (!existing || new Date(attempt.date).getTime() > new Date(existing.date).getTime()) {
      acc.set(attempt.questionId, attempt);
    }
    return acc;
  }, new Map<number, QuestionAttempt>());

  const totalTickets = questions.length;
  const answeredTickets = lastAnswerMap.size;
  const notAnsweredTickets = Math.max(totalTickets - answeredTickets, 0);
  const lastCorrectTickets = Array.from(lastAnswerMap.values()).filter(attempt => attempt.correct).length;
  const lastIncorrectTickets = answeredTickets - lastCorrectTickets;

  const lastAttemptTimestamp = questionAttempts.reduce((latest, attempt) => {
    const time = new Date(attempt.date).getTime();
    return Math.max(latest, time);
  }, 0);
  const lastActivityDisplay = lastAttemptTimestamp
    ? format(new Date(lastAttemptTimestamp), 'dd/MM/yyyy HH:mm')
    : null;

  const languageTexts = {
    title: {
      es: "Estadísticas",
      en: "Statistics",
      ru: "Статистика"
    },
    overview: {
      es: "Resumen",
      en: "Overview",
      ru: "Обзор"
    },
    testsCompleted: {
      es: "Tests completados",
      en: "Tests completed",
      ru: "Завершенных тестов"
    },
    averageScore: {
      es: "Puntuación media",
      en: "Average score",
      ru: "Средний балл"
    },
    accuracy: {
      es: "Precisión general",
      en: "Overall accuracy",
      ru: "Общая точность"
    },
    history: {
      es: "Historial de puntuaciones",
      en: "Score history",
      ru: "История баллов"
    },
    answerBreakdown: {
      es: "Correctas vs incorrectas por fecha",
      en: "Correct vs incorrect by date",
      ru: "Правильные и неправильные по датам"
    },
    noAnswerData: {
      es: "Todavía no hay intentos registrados.",
      en: "No attempts recorded yet.",
      ru: "Попыток пока нет."
    },
    ticketsOverview: {
      es: "Resumen de tickets",
      en: "Tickets overview",
      ru: "Сводка по тикетам"
    },
    ticketsTotal: {
      es: "Tickets totales",
      en: "Total tickets",
      ru: "Всего тикетов"
    },
    ticketsUnanswered: {
      es: "Sin responder",
      en: "Not answered",
      ru: "Без ответа"
    },
    ticketsIncorrect: {
      es: "Última incorrecta",
      en: "Last incorrect",
      ru: "Последний неправильный"
    },
    ticketsCorrect: {
      es: "Última correcta",
      en: "Last correct",
      ru: "Последний правильный"
    },
    avgAttempts: {
      es: "Intentos promedio/ticket",
      en: "Avg attempts/ticket",
      ru: "Сред. попыток/тикет"
    },
    lastActivity: {
      es: "Última actividad",
      en: "Last activity",
      ru: "Последняя активность"
    },
    correctLabel: {
      es: "Correctas",
      en: "Correct",
      ru: "Правильные"
    },
    incorrectLabel: {
      es: "Incorrectas",
      en: "Incorrect",
      ru: "Неправильные"
    },
    clearStats: {
      es: "Borrar estadísticas",
      en: "Clear statistics",
      ru: "Очистить статистику"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-8">{languageTexts.title[language]}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">{languageTexts.testsCompleted[language]}</h2>
            <p className="text-4xl font-bold">{testStats.length}</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">{languageTexts.averageScore[language]}</h2>
            <p className="text-4xl font-bold">{averageScore}%</p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">{languageTexts.accuracy[language]}</h2>
            <p className="text-4xl font-bold">{overallAccuracy}%</p>
          </Card>
        </div>
        
        {testStats.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">{languageTexts.history[language]}</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        )}
        
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{languageTexts.answerBreakdown[language]}</h2>
          
          {correctIncorrectData.length > 0 ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={correctIncorrectData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="correct"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={false}
                    name={languageTexts.correctLabel[language]}
                  />
                  <Line
                    type="monotone"
                    dataKey="incorrect"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                    name={languageTexts.incorrectLabel[language]}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <p className="text-muted-foreground">{languageTexts.noAnswerData[language]}</p>
          )}
        </Card>

        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">{languageTexts.ticketsOverview[language]}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">{languageTexts.ticketsTotal[language]}</p>
              <p className="text-3xl font-bold">{totalTickets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{languageTexts.ticketsUnanswered[language]}</p>
              <p className="text-3xl font-bold">{notAnsweredTickets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{languageTexts.ticketsIncorrect[language]}</p>
              <p className="text-3xl font-bold">{lastIncorrectTickets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{languageTexts.ticketsCorrect[language]}</p>
              <p className="text-3xl font-bold">{lastCorrectTickets}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{languageTexts.avgAttempts[language]}</p>
              <p className="text-3xl font-bold">{avgAttemptsPerTicket.toFixed(1)}</p>
            </div>
          </div>
          {lastActivityDisplay && (
            <p className="text-sm text-muted-foreground mt-6">
              {languageTexts.lastActivity[language]}: {lastActivityDisplay}
            </p>
          )}
        </Card>
        
        <div className="flex justify-end">
          <Button variant="destructive" onClick={handleClearStats}>
            {languageTexts.clearStats[language]}
          </Button>
        </div>
      </main>
      <FeedbackFooter language={language} />
    </div>
  );
};

export default Statistics;
