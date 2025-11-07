import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  getQuestionStats, 
  getTestStats, 
  QuestionStat, 
  TestStat,
  clearAllStats
} from "@/utils/statistics";
import { questions } from "@/data/questions";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

const Statistics = () => {
  const [questionStats, setQuestionStats] = useState<QuestionStat[]>([]);
  const [testStats, setTestStats] = useState<TestStat[]>([]);
  const [language, setLanguage] = useState<"es" | "en" | "ru">("es");
  const navigate = useNavigate();

  useEffect(() => {
    setQuestionStats(getQuestionStats());
    setTestStats(getTestStats());
  }, []);

  const handleClearStats = () => {
    if (window.confirm("Are you sure you want to clear all statistics?")) {
      clearAllStats();
      setQuestionStats([]);
      setTestStats([]);
    }
  };

  const handleStartPractice = () => {
    // Navigate to the practice page (we'll implement this later)
    navigate("/");
  };

  const chartData = testStats.map(stat => ({
    date: format(new Date(stat.date), 'dd/MM/yyyy'),
    score: stat.score
  }));

  // Get questions that need practice (never answered or more wrong than right)
  const questionsForPractice = questionStats
    .filter(stat => stat.correctAnswers < stat.attempts / 2)
    .map(stat => {
      const question = questions.find(q => q.id === stat.questionId);
      return {
        ...stat,
        question
      };
    })
    .filter(item => item.question); // Filter out any undefined questions

  const averageScore = testStats.length > 0 
    ? Math.round(testStats.reduce((sum, stat) => sum + stat.score, 0) / testStats.length) 
    : 0;

  const totalAttempts = questionStats.reduce((sum, stat) => sum + stat.attempts, 0);
  const totalCorrect = questionStats.reduce((sum, stat) => sum + stat.correctAnswers, 0);
  const overallAccuracy = totalAttempts > 0 
    ? Math.round((totalCorrect / totalAttempts) * 100) 
    : 0;

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
    practice: {
      es: "Preguntas para practicar",
      en: "Questions to practice",
      ru: "Вопросы для практики"
    },
    noPractice: {
      es: "No hay preguntas para practicar",
      en: "No questions to practice",
      ru: "Нет вопросов для практики"
    },
    startPractice: {
      es: "Comenzar práctica",
      en: "Start practice",
      ru: "Начать практику"
    },
    clearStats: {
      es: "Borrar estadísticas",
      en: "Clear statistics",
      ru: "Очистить статистику"
    },
    attempts: {
      es: "Intentos",
      en: "Attempts",
      ru: "Попытки"
    },
    correct: {
      es: "Correctas",
      en: "Correct",
      ru: "Правильно"
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
          <h2 className="text-xl font-semibold mb-4">{languageTexts.practice[language]}</h2>
          
          {questionsForPractice.length > 0 ? (
            <div className="space-y-4">
              {questionsForPractice.map((item) => (
                <Card key={item.questionId} className="p-4 border">
                  <p className="font-medium mb-2">{item.question?.question[language]}</p>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{languageTexts.attempts[language]}: {item.attempts}</span>
                    <span>{languageTexts.correct[language]}: {item.correctAnswers}</span>
                  </div>
                </Card>
              ))}
              
              <Button onClick={handleStartPractice} className="w-full mt-4">
                {languageTexts.startPractice[language]}
              </Button>
            </div>
          ) : (
            <p className="text-muted-foreground">{languageTexts.noPractice[language]}</p>
          )}
        </Card>
        
        <div className="flex justify-end">
          <Button variant="destructive" onClick={handleClearStats}>
            {languageTexts.clearStats[language]}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Statistics;