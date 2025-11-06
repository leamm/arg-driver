export interface Question {
  id: number;
  question: {
    es: string;
    en: string;
    ru: string;
  };
  image?: string;
  answers: {
    text: {
      es: string;
      en: string;
      ru: string;
    };
    correct: boolean;
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: {
      es: "¿Qué indica esta demarcación amarilla en la calzada?",
      en: "What does this yellow marking on the road indicate?",
      ru: "Что означает эта желтая разметка на дороге?",
    },
    image: "https://www.testdeconducir.com.ar/images/preguntas/b76.jpg",
    answers: [
      {
        text: {
          es: "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
          en: "That it is an area for stopping and parking vehicles.",
          ru: "Это зона для остановки и парковки транспортных средств.",
        },
        correct: false,
      },
      {
        text: {
          es: "Que se debe circular lentamente por su sector central.",
          en: "That you should drive slowly through its central section.",
          ru: "Что следует ехать медленно через центральную часть.",
        },
        correct: false,
      },
      {
        text: {
          es: "Que no se debe circular sobre ella.",
          en: "That you should not drive over it.",
          ru: "Что по ней нельзя ездить.",
        },
        correct: true,
      },
    ],
  },
  {
    id: 2,
    question: {
      es: "¿Cuál es la velocidad máxima permitida en zona urbana para motocicletas?",
      en: "What is the maximum speed allowed in urban areas for motorcycles?",
      ru: "Какая максимальная скорость разрешена в городских зонах для мотоциклов?",
    },
    answers: [
      {
        text: {
          es: "40 km/h",
          en: "40 km/h",
          ru: "40 км/ч",
        },
        correct: true,
      },
      {
        text: {
          es: "60 km/h",
          en: "60 km/h",
          ru: "60 км/ч",
        },
        correct: false,
      },
      {
        text: {
          es: "80 km/h",
          en: "80 km/h",
          ru: "80 км/ч",
        },
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: {
      es: "¿Es obligatorio el uso de casco para conducir motocicletas?",
      en: "Is wearing a helmet mandatory when riding motorcycles?",
      ru: "Обязательно ли носить шлем при езде на мотоцикле?",
    },
    answers: [
      {
        text: {
          es: "Sí, siempre es obligatorio.",
          en: "Yes, it is always mandatory.",
          ru: "Да, это всегда обязательно.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo en autopistas.",
          en: "Only on highways.",
          ru: "Только на автомагистралях.",
        },
        correct: false,
      },
      {
        text: {
          es: "No es obligatorio.",
          en: "It is not mandatory.",
          ru: "Это не обязательно.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: {
      es: "¿Qué significa una señal triangular con borde rojo?",
      en: "What does a triangular sign with a red border mean?",
      ru: "Что означает треугольный знак с красной каймой?",
    },
    answers: [
      {
        text: {
          es: "Prohibición",
          en: "Prohibition",
          ru: "Запрет",
        },
        correct: false,
      },
      {
        text: {
          es: "Advertencia de peligro",
          en: "Danger warning",
          ru: "Предупреждение об опасности",
        },
        correct: true,
      },
      {
        text: {
          es: "Información",
          en: "Information",
          ru: "Информация",
        },
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: {
      es: "¿Se puede adelantar en una curva?",
      en: "Can you overtake on a curve?",
      ru: "Можно ли обгонять на повороте?",
    },
    answers: [
      {
        text: {
          es: "Sí, si hay buena visibilidad.",
          en: "Yes, if there is good visibility.",
          ru: "Да, если есть хорошая видимость.",
        },
        correct: false,
      },
      {
        text: {
          es: "No, está prohibido.",
          en: "No, it is prohibited.",
          ru: "Нет, это запрещено.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo a otros motociclistas.",
          en: "Only other motorcyclists.",
          ru: "Только других мотоциклистов.",
        },
        correct: false,
      },
    ],
  },
];
