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
    "id": 1,
    "question": {
      "es": "Según la Organización Mundial de la Salud, la siguiente problemática es categorizada como 'pandemia' ya que constituye la décima causa de muerte en todo el mundo.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b1.jpg"
  },
  {
    "id": 2,
    "question": {
      "es": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?",
      "en": "According to traffic safety statistics, which of the following options is correct?",
      "ru": "Согласно статистике безопасности дорожного движения, какой из следующих вариантов является правильным?"
    },
    "answers": [
      {
        "text": {
          "es": "Niños menores de 15 años.",
          "en": "Children under 15 years old.",
          "ru": "Дети младше 15 лет."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Jóvenes y adultos de 15 a 34 años.",
          "en": "Youth and adults from 15 to 34 years old.",
          "ru": "Молодежь и взрослые от 15 до 34 лет."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Adultos mayores de 35 años.",
          "en": "Adults over 35 years old.",
          "ru": "Взрослые старше 35 лет."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 3,
    "question": {
      "es": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b2.jpg"
  },
  {
    "id": 4,
    "question": {
      "es": "La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?",
      "en": "According to the World Health Organization, which statement about traffic safety is correct?",
      "ru": "Согласно Всемирной организации здравоохранения, какое утверждение о безопасности дорожного движения является верным?"
    },
    "answers": [
      {
        "text": {
          "es": "Vehicular y Ambiental.",
          "en": "Vehicular and Environmental.",
          "ru": "Транспортный и экологический."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Humano y Vehicular.",
          "en": "Human and Vehicular.",
          "ru": "Человеческий и транспортный."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Humano, Vehicular y Ambiental.",
          "en": "Human, Vehicular and Environmental.",
          "ru": "Человеческий, транспортный и экологический."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 5,
    "question": {
      "es": "¿A qué factor se deben la mayoría de los siniestros viales?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "Al humano.",
          "en": "To human factors.",
          "ru": "К человеческому фактору."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al vehicular.",
          "en": "To vehicular factors.",
          "ru": "К транспортному фактору."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al ambiental.",
          "en": "To environmental factors.",
          "ru": "К экологическому фактору."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 6,
    "question": {
      "es": "A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al estado del pavimento y al clima, en especial.",
          "en": "To the pavement condition and climate, especially.",
          "ru": "К состоянию дорожного покрытия и климату, в особенности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.",
          "en": "To the conditions of: the car, road infrastructure, weather conditions and the driver.",
          "ru": "К условиям: автомобиля, дорожной инфраструктуры, погодных условий и водителя."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ninguna de las anteriores.",
          "en": "None of the above.",
          "ru": "Ни один из вышеперечисленных."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 7,
    "question": {
      "es": "El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 8,
    "question": {
      "es": "Por lo general, las fallas mecánicas se deben a conductas negligentes por parte de los propietarios de los vehículos, que no se ocupan de la verificación del estado de su automóvil",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 9,
    "question": {
      "es": "¿A qué se denomina incidente de tránsito o incidente vial?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Hecho impredecible e inevitable en ocasión de circulación en la vía pública.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hecho, evitable o no, que involucra daños a terceros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 10,
    "question": {
      "es": "¿De qué se trata el “Programa Visión Cero” creado en 1997 en Suecia?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Principio ético que establece que no debería existir ningún vehículo particular circulando por calles, ni avenidas urbanas; ya que son los causantes de las víctimas fatales en siniestros de tránsito.",
          "en": "This statement is about traffic accidents and their causes.",
          "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.",
          "en": "This statement is about traffic accidents and their causes.",
          "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 11,
    "question": {
      "es": "“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque se está obligado a no causar peligro ni entorpecer la circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 12,
    "question": {
      "es": "“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, independientemente del tipo de movilidad elegido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, los peatones son usuarios de la vía pública y no están obligados.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí pero sólo si estamos conduciendo un vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b2.jpg"
  },
  {
    "id": 13,
    "question": {
      "es": "Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Daños materiales, costos sanitarios y administrativos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Daños materiales y costos sanitarios.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo daños materiales.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 14,
    "question": {
      "es": "Todo usuario de la vía pública debe, como premisa básica…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Acreditar experiencia de manejo en vehículos por más de un año.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 15,
    "question": {
      "es": "Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades.",
      "en": "This statement is about traffic laws and regulations.",
      "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 16,
    "question": {
      "es": "¿Qué Ley rige al momento de circular por la Ciudad de Buenos Aires?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La Ley Nacional N° 24.449.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La Ley de la Ciudad N° 2.148.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 17,
    "question": {
      "es": "¿A qué se denomina Movilidad Sustentable?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 18,
    "question": {
      "es": "¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Velocidad y confort.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Fluidez y seguridad.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Comodidad y Agilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 19,
    "question": {
      "es": "Indique cuál es la premisa correcta:",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 20,
    "question": {
      "es": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b3.jpg"
  },
  {
    "id": 21,
    "question": {
      "es": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b4.jpg"
  },
  {
    "id": 22,
    "question": {
      "es": "Indique cuál es la premisa correcta:",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A menor cantidad de vehículos, mayor probabilidad de siniestralidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A mayor cantidad de vehículos, menor probabilidad de siniestralidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A menor cantidad de vehículos, menor probabilidad de siniestralidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 23,
    "question": {
      "es": "¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 24,
    "question": {
      "es": "¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b5.jpg"
  },
  {
    "id": 25,
    "question": {
      "es": "¿Es aconsejable circular en bicicleta de esta manera?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque está conduciendo correctamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b6.jpg"
  },
  {
    "id": 26,
    "question": {
      "es": "En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A, ya que al tener ropa clara es más visible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores.",
          "en": "Option B, ya que al tener ropa oscura no genera distracciones en los demás conductores.",
          "ru": "Вариант B, ya que al tener ropa oscura no genera distracciones en los demás conductores."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas opciones presentan el mismo riesgo por igual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b7.jpg"
  },
  {
    "id": 27,
    "question": {
      "es": "¿Se puede circular en bicicleta por esta vía?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, siempre que se mantenga en el carril derecho.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, mientras se respete la velocidad mínima de la arteria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b8.jpg"
  },
  {
    "id": 28,
    "question": {
      "es": "¿Qué se debe evitar al circular en bicicleta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Usar auriculares y dispositivos electrónicos, que afecten la concentración.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Usar ropa oscura y suelta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 29,
    "question": {
      "es": "¿Está permitido llevar carga en una bicicleta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido ya que puede desestabilizar la bicicleta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 30,
    "question": {
      "es": "El ciclista, ¿tiene permitido llevar un pasajero?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, únicamente si no compromete la visibilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son incorrectas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 31,
    "question": {
      "es": "¿Está permitido estacionar una bicicleta en este lugar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, los estacionamientos son exclusivos para usuarios de autos y motos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo en algunos estacionamientos está permitido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, los estacionamientos están obligados a destinar un espacio para bicicletas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b9.jpg"
  },
  {
    "id": 32,
    "question": {
      "es": "Un menor de 12 años puede circular en bicicleta por…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "La calle, acompañado de un adulto mayor de 18 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Por la vereda, a la menor velocidad posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 33,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La velocidad máxima permitida en la vía donde se encuentra la ciclovía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "25 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "30 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 34,
    "question": {
      "es": "¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al menos, un metro y medio.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al menos, medio metro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Lo suficiente para no tocarlo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b10.jpg"
  },
  {
    "id": 35,
    "question": {
      "es": "¿Por dónde deben circular los ciclistas en esta calle?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cerca del borde derecho de la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cerca del borde izquierdo de la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b11.jpg"
  },
  {
    "id": 36,
    "question": {
      "es": "¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cerca del borde derecho de la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cerca del borde izquierdo de la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 37,
    "question": {
      "es": "¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida su circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 38,
    "question": {
      "es": "¿Qué indica esta seña?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Giro a la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Adelantamiento por la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerse.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b12.jpg"
  },
  {
    "id": 39,
    "question": {
      "es": "¿Qué indica esta seña?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Adelantamiento por la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Giro a la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Detenerse.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b13.jpg"
  },
  {
    "id": 40,
    "question": {
      "es": "¿Qué indica esta seña?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Giro a la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Adelantamiento por la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerse.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b14.jpg"
  },
  {
    "id": 41,
    "question": {
      "es": "Es correcto el desplazamiento del motociclista que circula con el casco puesto y las luces encendidas.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a1.jpg"
  },
  {
    "id": 42,
    "question": {
      "es": "Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Hacia la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hacia la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hacia ambos lados.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b15.jpg"
  },
  {
    "id": 43,
    "question": {
      "es": "¿Este ciclorodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, sólo pueden circular por vías donde no haya ciclovías.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b16.jpg"
  },
  {
    "id": 44,
    "question": {
      "es": "¿Puede un motovehículo circular por el carril señalizado en esta imagen?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que es de uso exclusivo de bicicletas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que es un vehículo de 2 ruedas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre y cuando no circulen bicicletas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a2.jpg"
  },
  {
    "id": 45,
    "question": {
      "es": "En esta situación, ¿es correcto que el vehículo avance?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque por allí no circulan peatones y no hay peligro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque aún hay peatones cruzando de un lado al otro de la arteria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b17.jpg"
  },
  {
    "id": 46,
    "question": {
      "es": "¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b18.jpg"
  },
  {
    "id": 47,
    "question": {
      "es": "Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Esquivar a la peatona y tocarle bocina para que no se distraiga.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b19.jpg"
  },
  {
    "id": 48,
    "question": {
      "es": "Dadas las características de esta intersección, ¿el peatón también tiene prioridad?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial.",
          "en": "This statement is about traffic accidents and their causes.",
          "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b20.jpg"
  },
  {
    "id": 49,
    "question": {
      "es": "Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b21.jpg"
  },
  {
    "id": 50,
    "question": {
      "es": "Si ud. es el conductor del vehículo, ¿qué conducta debe adoptar en la siguiente situación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Priorizar la circulación del peatón, indefectiblemente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Realizar una guiñada para advertir su preferencia de avance.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b22.jpg"
  },
  {
    "id": 51,
    "question": {
      "es": "En esta intersección, ¿quién tiene prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El peatón.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b23.jpg"
  },
  {
    "id": 52,
    "question": {
      "es": "Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Es indistinto, siempre que miren a ambos lados antes de hacerlo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En coincidencia con las paradas de transporte.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Por la esquina, por la prolongación longitudinal de la vereda sobre la calle.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 53,
    "question": {
      "es": "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que no comience a cruzar la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si inició el cruce, que lo finalice con mucha precaución.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b24.jpg"
  },
  {
    "id": 54,
    "question": {
      "es": "¿Qué vehículos pueden circular por el carril señalizado en la imagen?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Todos los transportes de pasajeros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo colectivos entre las 07 h y las 21 h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b25.jpg"
  },
  {
    "id": 55,
    "question": {
      "es": "¿Cuáles de los motovehículos que se muestran en la imagen circulan en infracción?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Los motovehículos A y C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los motovehículos A y B .",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los motovehículos A, B y C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a3.jpg"
  },
  {
    "id": 56,
    "question": {
      "es": "Además de colectivos, ¿quiénes pueden circular por este carril?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Taxis con pasajeros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Motos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b26.jpg"
  },
  {
    "id": 57,
    "question": {
      "es": "El motovehículo que se muestra en la imagen circula correctamente, sin entorpecer la circulación",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a4.jpg"
  },
  {
    "id": 58,
    "question": {
      "es": "¿La autoridad de tránsito puede retener la licencia de conducir al conductor de un vehículo, que no sea colectivo o de emergencia, por encontrarse circulando por este carril?",
      "en": "What should be done in the following emergency situation?",
      "ru": "Что следует делать в следующей экстренной ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que constituye una falta de tránsito que amerita esa sanción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si perjudica la circulación de los colectivos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nunca, ya que la licencia de conducir es un documento personal. Sólo puede labrar un acta de infracción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b27.jpg"
  },
  {
    "id": 59,
    "question": {
      "es": "¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce de Metrobús.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cruce exclusivo de vehículos de emergencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cruce de bicicletas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b28.jpg"
  },
  {
    "id": 60,
    "question": {
      "es": "¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Carril exclusivo de colectivo de pasajeros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cruce exclusivo de vehículos de emergencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ceda el paso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b29.jpg"
  },
  {
    "id": 61,
    "question": {
      "es": "Si ud. circula en el carril contiguo al carril exclusivo del Metrobús y desea realizar un sobrepaso a otro vehículo que circula más lento, ¿puede utilizar el carril exclusivo para hacer esta maniobra?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque está prohibido circular de manera permanente o transitoria por dicho carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, sólo cuando la línea longitudinal del lado exterior de este carril sea discontinua.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque sólo se permite su utilización para realizar alguna maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 62,
    "question": {
      "es": "¿Qué son los carriles exclusivos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Vías con un único sentido de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 63,
    "question": {
      "es": "El auto señalizado con un círculo rojo, ¿tiene permitido girar a la derecha en el próximo cruce?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, siempre que señalice la maniobra con anticipación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que para realizarlo debería invadir los carriles exclusivos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b30.jpg"
  },
  {
    "id": 64,
    "question": {
      "es": "¿Qué significa la demarcación horizontal que se visualiza en la imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce peligroso por tener poca iluminación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Senda peatonal próxima a centros de salud.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Senda peatonal próxima a zona escolar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b31.jpg"
  },
  {
    "id": 65,
    "question": {
      "es": "¿Qué indica la demarcación horizontal que se visualiza en la imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Estacionamiento para micros escolares.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Carril de detención para el ascenso y descenso de escolares.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Zona de ascenso y descenso de pasajeros de transporte público.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b32.jpg"
  },
  {
    "id": 66,
    "question": {
      "es": "La siguiente imagen corresponde a:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Calle Prioridad Peatón.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calle con Intervención Peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Calle con Bicisenda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b33.jpg"
  },
  {
    "id": 67,
    "question": {
      "es": "Las intervenciones horizontales señaladas, sirven para…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Incrementar la seguridad de los peatones.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Promover la movilidad vehicular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Colaborar con la rapidez en la movilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b34.jpg"
  },
  {
    "id": 68,
    "question": {
      "es": "¿Cómo se denomina la intervención de color amarillo que se visualiza en la imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Intervención Peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Intervención Vehicular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Intervención de la Calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b35.jpg"
  },
  {
    "id": 69,
    "question": {
      "es": "¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Ampliar la zona permitida de estacionamiento para motos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y radio de giro de los vehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ampliar la zona permitida de estacionamiento para vehículos de emergencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b36.jpg"
  },
  {
    "id": 70,
    "question": {
      "es": "La señal que está presente en la imagen corresponde a las informativas que orientan al peatón.",
      "en": "Sign q.",
      "ru": "Знак q."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b37.jpg"
  },
  {
    "id": 71,
    "question": {
      "es": "En la imagen se muestra un cruce exclusivo para ciclistas.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b38.jpg"
  },
  {
    "id": 72,
    "question": {
      "es": "¿Qué indica el siguiente cruce verde en las intersecciones?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Advierte a los conductores sobre la existencia de un establecimiento escolar cercano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Advierte a los conductores sobre un cruce peligroso por tener poca iluminación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b39.jpg"
  },
  {
    "id": 73,
    "question": {
      "es": "¿Qué indica esta demarcación horizontal verde?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que en esa intersección hay una ciclovía o bicisenda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que se aproxima a un cruce ferroviario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es un cruce exclusivo de peatones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b40.jpg"
  },
  {
    "id": 74,
    "question": {
      "es": "¿Cuál de las siguientes imágenes muestra una bicisenda?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b41.jpg"
  },
  {
    "id": 75,
    "question": {
      "es": "¿Cuál de las siguientes imágenes muestra una ciclovía?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b42.jpg"
  },
  {
    "id": 76,
    "question": {
      "es": "¿Cuál es la principal diferencia entre bicisendas y ciclovías?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La bicisenda es de uso exclusivo de bicicletas y la ciclovía de uso preferencial.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La bicisenda se encuentra sobre la calzada y la ciclovía sobre la vereda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 77,
    "question": {
      "es": "¿Qué es una ciclovía?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 78,
    "question": {
      "es": "En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 79,
    "question": {
      "es": "La persona que se da a la fuga en un siniestro vial, dejando a alguien herido, puede ser juzgada por el delito de abandono de persona.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 80,
    "question": {
      "es": "En caso de participar de un siniestro vial, ¿de cuánto tiempo se dispone para dar aviso sobre el hecho a la compañía aseguradora del vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "24 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "48 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "72 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 81,
    "question": {
      "es": "En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los medios para que los servicios de emergencia atiendan a los heridos y resguardando los vehículos y otras pruebas del incidente para una adecuada resolución del caso.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 82,
    "question": {
      "es": "En caso de participar en un siniestro vial, ¿qué es recomendable hacer como primer paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Detenerse inmediatamente y permanecer en el lugar del hecho.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Conducir hasta la comisaría más cercana.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Llamar al 911 y continuar el viaje.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 83,
    "question": {
      "es": "En caso de siniestro, el orden de actuación recomendado es…",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Alertar - Socorrer - Proteger.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Proteger - Alertar - Socorrer.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Socorrer - Proteger - Alertar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 84,
    "question": {
      "es": "¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante el acontecimiento de algún incidente?",
      "en": "What should be done in the following emergency situation?",
      "ru": "Что следует делать в следующей экстренной ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "911 y 109.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "103 y 107.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "107 y 911.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 85,
    "question": {
      "es": "En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias (107), indique con claridad:",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Lugar del hecho, características del incidente, cantidad y estado de las víctimas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 86,
    "question": {
      "es": "¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y brindar su colaboración para evitar mayores daños para la circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro obligatorio a los demás siniestrados y a la autoridad interviniente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 87,
    "question": {
      "es": "Si ud. se encuentra involucrado en un siniestro de tránsito en el cual un motociclista resultó herido, pero ud. no es el conductor del vehículo implicado, ¿cómo debería actuar en esta situación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Brindar colaboración, solicitar auxilio llamando al 107 para que reciba atención médica y contribuir al esclarecimiento de los hechos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Brindar colaboración, aunque al no ser el conductor no estoy obligado a hacerlo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Antes de llevar a cabo cualquier valoración del estado general de la víctima, retirar el casco para que no se asfixie.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 88,
    "question": {
      "es": "¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El que firmó la autorización para obtener la licencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El que lo acompaña.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El que le autorizó el uso del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 89,
    "question": {
      "es": "En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "La intención de la conducta dañosa.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Los antecedentes de la persona que provoca el daño.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 90,
    "question": {
      "es": "Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño del mismo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque la responsabilidad penal es intransferible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí. Además, del dueño también puede transferirse a la Compañía de Seguros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 91,
    "question": {
      "es": "En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que ha actuado no conforme a las exigencias de la Ley.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 92,
    "question": {
      "es": "Frente a un control de tránsito en CABA, si la autoridad realiza una infracción ante una falta cometida por un conductor, ¿dónde puede efectuarse el pago de la multa por dicha infracción",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "En ese mismo momento y ante la Autoridad de Control si ésta lo requiere.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ante la oficina de la Dirección General de Administración de Infracciones que corresponda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 93,
    "question": {
      "es": "Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "30 días corridos desde su vencimiento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hasta las 00 horas del día de cumpleaños.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 94,
    "question": {
      "es": "En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque es un documento personal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo en los casos que la normativa vigente así lo indique.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo en casos de incidentes que involucren a terceros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 95,
    "question": {
      "es": "Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "30 días corridos desde su vencimiento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No debe superar el año desde su vencimiento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 96,
    "question": {
      "es": "¿Cuánto dura en su totalidad la condición de principiante?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "2 años, sólo en el caso de los menores de 21 años de edad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "6 meses, sólo para quien la tramita por primera vez.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "2 años, independientemente a la edad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 97,
    "question": {
      "es": "En un motovehículo, ¿dónde debe transportar la siguiente documentación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Debe exhibirla en el parabrisas de la moto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe exhibirla en el tanque.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe llevarla consigo mientras conduce, como el resto de la documentación obligatoria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a5.jpg"
  },
  {
    "id": 98,
    "question": {
      "es": "Un conductor principiante de motovehículo, ¿tiene obligación de llevar la siguiente documentación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que esa es una obligación que afecta únicamente a los conductores de automóviles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, hasta cumplirse los 6 meses.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, hasta que se renueve la licencia de conducir.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a6.jpg"
  },
  {
    "id": 99,
    "question": {
      "es": "Con esta documentación, ¿quién está autorizado a conducir el motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Nadie, porque está vencida y debe renovarse.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo el titular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El titular y sus familiares directos, por tener el mismo apellido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a7.jpg"
  },
  {
    "id": 100,
    "question": {
      "es": "¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo una.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La cantidad que solicite el titular del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Hasta cinco.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 101,
    "question": {
      "es": "¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Siempre y cuando se encuentre vigente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si es un familiar directo o tiene una relación laboral.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En ningún caso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 102,
    "question": {
      "es": "El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE cuando se conduce por vías interurbanas.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 103,
    "question": {
      "es": "Todo vehículo debe estar cubierto por un seguro, ¿qué daños mínimamente debe cubrir?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Eventuales daños causados a terceros transportados únicamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Eventuales daños causados a terceros transportados o no.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Daños causados a los vehículos únicamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 104,
    "question": {
      "es": "NO está prohibido circular con la placa de dominio del motovehículo de esta forma.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a8.jpg"
  },
  {
    "id": 105,
    "question": {
      "es": "Para la circulación de motovehículos, la placa de dominio trasera…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Puede sustituirse por la inscripción de la matrícula pintada en los guardabarros traseros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No es obligatoria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe estar colocada centrada respecto al eje longitudinal medio del motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 106,
    "question": {
      "es": "¿Cuántas placas de dominio deben llevar los motovehículos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Una, colocada en la parte trasera, centrada en el eje longitudinal medio del motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Dos, una en la parte delantera y otra en la parte trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Una, colocada del lado izquierdo del motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 107,
    "question": {
      "es": "¿Se encuentra permitido circular con esta impresión de placa de dominio?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que cumple la función de identificar al motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que la válida es la entregada por la autoridad competente de nivel nacional (DNRPA) y debe estar colocada en el lugar y de forma reglamentaria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que es una placa provisoria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a9.jpg"
  },
  {
    "id": 108,
    "question": {
      "es": "Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Se la puede solicitar en cualquier establecimiento comercial que la realice.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 109,
    "question": {
      "es": "La ubicación y posición de las placas de dominio del vehículo, ¿puede sufrir algún tipo de modificación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo pueden, eventualmente, ampliarse para mejorar su visibilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, deben estar colocadas en el lugar y de forma reglamentaria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo está prohibido modificar la placa de dominio trasera, no así la delantera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 110,
    "question": {
      "es": "¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Reducir la contaminación y mejorar la calidad del medio ambiente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Garantizar el cumplimiento de las normas de seguridad de los vehículos.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 111,
    "question": {
      "es": "¿Cuál de las siguientes opciones está directamente vinculada a la prevención y reducción de siniestros viales?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b48.jpg"
  },
  {
    "id": 112,
    "question": {
      "es": "En el caso de tener que realizar una reverificación de la VTV, por motivos de una desaprobación original, ¿cuál es el plazo de tiempo para que ésta sea gratuita?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No hay plazo. Si llegase a desaprobar se deberá volver a abonar el arancel correspondiente, aunque se realice al otro día.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si se realiza dentro de los 60 días corridos a partir de efectuada la verificación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si se realiza dentro de los 60 días hábiles de efectuada la verificación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 113,
    "question": {
      "es": "¿Cada cuánto tiempo deben realizar la VTV los motovehículos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cada 6 meses.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los motovehículos están exceptuados de esta obligación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La revisión es anual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 114,
    "question": {
      "es": "¿Cuándo debe realizar la primer VTV un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A los 5 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A los 2 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al año.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 115,
    "question": {
      "es": "Según el Sistema de Evaluación Permanente de Conductores (Scoring), ¿cuántos puntos se otorgan al conductor que obtiene la licencia de conducir por primera vez?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "10 puntos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "20 puntos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "5 puntos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 116,
    "question": {
      "es": "¿En qué consiste el Sistema de Evaluación Permanente de Conductores (Scoring)?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La obligación de los conductores a realizar un curso vial anual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 117,
    "question": {
      "es": "¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo las drogas ilegales.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Todo tipo de drogas (las legales e ilegales).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 118,
    "question": {
      "es": "La persona que conduce bajo los efectos de estupefacientes…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Se pone en grave riesgo a sí mismo y a todos los que lo rodean.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo pone en riesgo su propia vida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al estar desinhibido, asume menos riesgos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 119,
    "question": {
      "es": "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Todos los medicamentos, de venta libre, que no necesitan receta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Todos los medicamentos con efectos sedantes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 120,
    "question": {
      "es": "El consumo de medicamentos, ¿puede afectar la capacidad de conducir?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Siempre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nunca.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Depende del tipo de medicamento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 121,
    "question": {
      "es": "Por los efectos que provoca, el consumo de drogas ilegales no está permitido al momento de conducir; mientras que las drogas legales nunca afectan negativamente la capacidad de conducir.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 122,
    "question": {
      "es": "Cuando se consume alcohol, ¿se pueden producir alteraciones en la visión?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, solamente afecta a la capacidad motora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 123,
    "question": {
      "es": "Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Comienza a disminuir de forma inmediata.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se mantiene en el mismo valor durante 1 hora y luego comienza a descender.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 124,
    "question": {
      "es": "Beber cerveza, ¿puede influir en la conducción de un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque es una bebida con bajo contenido de alcohol y no afecta al equilibrio.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque contiene alcohol y reduce la capacidad de reacción, aumentando el tiempo necesario para responder ante un estímulo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La cerveza, al tener poca graduación alcohólica, no afecta la conducción si se está habituado a tomarla.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 125,
    "question": {
      "es": "Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 126,
    "question": {
      "es": "¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, puede afectar la coordinación, la atención y el tiempo de reacción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 127,
    "question": {
      "es": "¿Es peligroso conducir con resaca?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, es peligroso porque tiene efectos en el organismo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que los efectos de la resaca no intervienen en la conducción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 128,
    "question": {
      "es": "Si un conductor de un automóvil particular obtiene el siguiente resultado en un control de alcoholemia realizado en la Ciudad Autónoma de Buenos Aires, ¿cómo debe proceder la autoridad de control de tránsito?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Esperar un tiempo prudencial y realizar una contraprueba, a la espera de que descienda la graduación alcohólica.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Darle la opción al conductor de llamar a un tercero para que se haga responsable de la conducción del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b52.jpg"
  },
  {
    "id": 129,
    "question": {
      "es": "Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo si se ha participado de un siniestro vial.",
          "en": "This statement is about traffic accidents and their causes.",
          "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Sólo la prueba positiva, efectivamente realizada, se considera una falta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, la misma se toma como una presunción de alcoholemia positiva.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b53.jpg"
  },
  {
    "id": 130,
    "question": {
      "es": "Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que se presume el estado de alcoholemia positiva.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, deberá ordenar la remoción del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 131,
    "question": {
      "es": "Si la conductora que se señaliza en la imagen es principiante, ¿cuál es el nivel máximo de alcoholemia que tiene admitido por normativa?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "0,0 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "0,2 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,5 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a10.jpg"
  },
  {
    "id": 132,
    "question": {
      "es": "¿Cuál es el límite de alcohol en sangre permitido para la persona que está señalada en la foto con un círculo rojo?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No tiene un límite máximo de alcohol por Ley.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,2 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,5 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a11.jpg"
  },
  {
    "id": 133,
    "question": {
      "es": "Si la conductora que se señaliza en la imagen no es principiante, ¿cuál es el nivel máximo de alcoholemia que tiene admitido por normativa?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "0,0 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,2 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "0,5 gramos de alcohol por litro de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a12.jpg"
  },
  {
    "id": 134,
    "question": {
      "es": "Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Aproximadamente 8 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al menos 4 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 135,
    "question": {
      "es": "¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con un nivel de alcohol en sangre mayor al permitido por Ley?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que ambas condiciones aumentan el tiempo de reacción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, el descanso no tiene nada que ver con el consumo de alcohol.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 136,
    "question": {
      "es": "El cansancio puede verse inducido por ingerir:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Bebidas alcohólicas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comidas abundantes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 137,
    "question": {
      "es": "¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La sensación de euforia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La visión borrosa y el aumento del número y duración de parpadeos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No realizar movimientos en el asiento, ni cambios de postura.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 138,
    "question": {
      "es": "Un conductor principiante, ¿puede sentirse más fácilmente fatigado?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, por la falta de experiencia en la conducción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque todos somos iguales ante la Ley.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Únicamente cuando se trata de una persona que padece de fatiga crónica.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 139,
    "question": {
      "es": "¿Por qué es peligroso conducir cansado?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Porque se circula más rápido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Porque el viaje dura más.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 140,
    "question": {
      "es": "¿Qué consecuencias tiene conducir habiendo dormido pocas horas previamente?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Reduce la capacidad de reacción y el estado de alerta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Predispone a tomar malas decisiones, poniendo en riesgo la vida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 141,
    "question": {
      "es": "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Escuche música a alto volúmen.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mantenga el interior del vehículo a una temperatura superior a 25 °C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mantenga bien ventilado el interior del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 142,
    "question": {
      "es": "¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión con el conductor o con otra persona de la vía pública?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya que la tensión evita la somnolencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 143,
    "question": {
      "es": "Bajo los efectos del estrés, la conducción se vuelve:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Más temeraria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Menos segura.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 144,
    "question": {
      "es": "El estrés no necesariamente puede alterar las capacidades para conducir de manera segura.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 145,
    "question": {
      "es": "¿Cuál es el tiempo promedio de reacción de un conductor desde que percibe un peligro hasta que acciona el freno?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Aproximadamente 1 segundo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Entre 2 y 3 segundos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es inmediato, no transcurre tiempo entre estas acciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 146,
    "question": {
      "es": "Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que no hay otros vehículos junto a él.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que el vehículo no está en movimiento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b57.jpg"
  },
  {
    "id": 147,
    "question": {
      "es": "La siguiente acción del conductor, ¿es considerada un factor de riesgo?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que el conductor no está utilizando sus manos para mantener una comunicación telefónica.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, sólo cuando circula a altas velocidades.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque interfiere en su atención al contexto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b59.jpg"
  },
  {
    "id": 148,
    "question": {
      "es": "La siguiente acción del conductor es riesgosa porque:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b60.jpg"
  },
  {
    "id": 149,
    "question": {
      "es": "¿Se encuentra prohibida la acción de la persona señalada con el círculo rojo?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque se encuentra en el asiento delantero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque la prohibición del uso de telefonía celular alcanza sólo al conductor del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, su uso se encuentra prohibido para todos los ocupantes del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b61.jpg"
  },
  {
    "id": 150,
    "question": {
      "es": "Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué debe hacer para no generar una situación de riesgo en la vía pública?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "Colocar balizas y detenerse en un lugar donde esté permitido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tratarse de una llamada de urgencia, no importa donde se realice.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 151,
    "question": {
      "es": "La presente conducta, ¿es riesgosa al momento de conducir?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque es considerado un factor de distracción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Únicamente si se circula a altas velocidades.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al contrario, ayuda a mantener la atención en la conducción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b62.jpg"
  },
  {
    "id": 152,
    "question": {
      "es": "La acción que se presenta en la imagen es considerada riesgosa para la conducción de un vehículo.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b63.jpg"
  },
  {
    "id": 153,
    "question": {
      "es": "Indique el orden de prioridad normativo que debe respetar (de mayor a menor jerarquía):",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Normas legales de carácter general; Señalización; Indicaciones de la autoridad competente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Señalización; Normas legales de carácter general; Indicaciones de la autoridad competente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 154,
    "question": {
      "es": "Si al llegar a un cruce se presentan estas 3 señales, ¿cuál de ellas tiene prioridad normativa por sobre las demás?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La opción B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La opción C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b66.jpg"
  },
  {
    "id": 155,
    "question": {
      "es": "Como conductor, ¿qué debe realizar frente a la siguiente situación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Avanzar porque la luz verde del semáforo lo habilita.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerse y esperar a la indicación del agente de tránsito para avanzar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar sólo si no pasan vehículos en la intersección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b67.jpg"
  },
  {
    "id": 156,
    "question": {
      "es": "¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Que circule con precaución.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que detenga el vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que continúe avanzando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b68.jpg"
  },
  {
    "id": 157,
    "question": {
      "es": "Los Agentes de Tránsito pueden proceder a la detención de un vehículo únicamente con la presencia de personal policial.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 158,
    "question": {
      "es": "Si al circular por una vía y la persona señalada le indica detenerse, ¿está obligado usted a obedecer?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad legal para realizar dicha indicación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b69.jpg"
  },
  {
    "id": 159,
    "question": {
      "es": "Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no tiene la autoridad legal para realizar dicha indicación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea realizada por un agente de tránsito ya que es la única autoridad competente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b70.jpg"
  },
  {
    "id": 160,
    "question": {
      "es": "¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nada, no son señales de circulación y es ilegal su colocación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La prohibición de sobrepasar la línea imaginaria que las une.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b71.jpg"
  },
  {
    "id": 161,
    "question": {
      "es": "Las señales transitorias señalizan la ejecución de trabajos de construcción y mantenimiento en la vía, o en zonas próximas a las mismas:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 162,
    "question": {
      "es": "La señalización transitoria se encuentra como prioridad normativa sobre los semáforos, si es que modifica el régimen normal de uso de la vía.",
      "en": "This statement is about traffic laws and regulations.",
      "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 163,
    "question": {
      "es": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por la arteria que cruza, puedo reiniciarla.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Efectuar el cruce con máxima precaución.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b73.jpg"
  },
  {
    "id": 164,
    "question": {
      "es": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Extremar precauciones al cruzar sin la necesidad de detenerme.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b74.jpg"
  },
  {
    "id": 165,
    "question": {
      "es": "Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso está dada por la luz verde.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa manera se deja libre la intersección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b75.jpg"
  },
  {
    "id": 166,
    "question": {
      "es": "Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no obstante ello, ¿qué precauciones se deben adoptar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la circulación transversal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya iniciado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 167,
    "question": {
      "es": "Una indicación puede estar expresada con una señal vertical o con una demarcación horizontal, ya que ambas tienen el mismo significado y orden jerárquico.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 168,
    "question": {
      "es": "¿Qué indica esta demarcación amarilla en la calzada?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que se debe circular lentamente por su sector central.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que no se debe circular sobre ella.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b76.jpg"
  },
  {
    "id": 169,
    "question": {
      "es": "En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Son las rotondas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son los espacios reservados para estacionamiento exclusivo de motovehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 170,
    "question": {
      "es": "¿Qué significa esta demarcación amarilla en la calzada?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Es una señalización que se utiliza únicamente para dividir los carriles de la vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Significa que sólo pueden circular vehículos particulares.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b77.jpg"
  },
  {
    "id": 171,
    "question": {
      "es": "En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Que se pueden traspasar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que está prohibido traspasarlas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es una zona de máximo peligro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b78.jpg"
  },
  {
    "id": 172,
    "question": {
      "es": "¿Qué significa la demarcación horizontal señalada?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Carril exclusivo para motos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona de estacionamiento para motos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona de detención segura de motos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a13.jpg"
  },
  {
    "id": 173,
    "question": {
      "es": "¿Para qué sirve la demarcación horizontal señalada?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Mejorar la visibilidad de los motovehículos e indicar la presencia de una zona de detención exclusiva de los mismos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Permitir la circulación exclusiva de los motovehículos por un carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Señalizar que por allí está prohibida la circulación de motovehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a14.jpg"
  },
  {
    "id": 174,
    "question": {
      "es": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
          "en": "Parking is prohibited on this road.",
          "ru": "Парковка запрещена на этой дороге."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es un espacio reservado al estacionamiento exclusivo de vehículos destinados al servicio de emergencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que está prohibido estacionar o detenerse paralelo al cordón.",
          "en": "Parking is prohibited on this road.",
          "ru": "Парковка запрещена на этой дороге."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b79.jpg"
  },
  {
    "id": 175,
    "question": {
      "es": "Según la Ley N° 2148, ¿qué indica un cordón pintado de este color?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lugar reservado para ascenso y descenso de pasajeros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona exclusiva para carga y descarga de mercaderías.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b80.jpg"
  },
  {
    "id": 176,
    "question": {
      "es": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que sólo está prohibido estacionar, pudiendo efectuarse detenciones.",
          "en": "Parking is prohibited on this road.",
          "ru": "Парковка запрещена на этой дороге."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que es un lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que está prohibido estacionar o detenerse al costado de la vereda.",
          "en": "Parking is prohibited on this road.",
          "ru": "Парковка запрещена на этой дороге."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b81.jpg"
  },
  {
    "id": 177,
    "question": {
      "es": "¿Cuál es la importancia del color de las señales viales?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "El color es para llamar la atención al conductor de categoría particular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El color es irrelevante para el conductor particular pero sí para el conductor profesional.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 178,
    "question": {
      "es": "¿Cuáles son las señales preventivas?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la vía. Identifican, orientan y hacen referencia a servicios, lugares, etc.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 179,
    "question": {
      "es": "¿Qué indican las señales reglamentarias?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Identifican, orientan y hacen referencia a servicios, lugares, etc.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 180,
    "question": {
      "es": "¿Cuál de estas señales comunica “Prevención”?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "La señal A.",
          "en": "Sign A.",
          "ru": "Знак A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal B.",
          "en": "Sign B.",
          "ru": "Знак B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La señal C.",
          "en": "Sign C.",
          "ru": "Знак C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b82.jpg"
  },
  {
    "id": 181,
    "question": {
      "es": "¿De qué color es la cartelería de Permitido Estacionar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Azul.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Blanco.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Rojo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 182,
    "question": {
      "es": "¿Cuál de estas señales es Reglamentaria?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "La señal A.",
          "en": "Sign A.",
          "ru": "Знак A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal B.",
          "en": "Sign B.",
          "ru": "Знак B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La señal C.",
          "en": "Sign C.",
          "ru": "Знак C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b83.jpg"
  },
  {
    "id": 183,
    "question": {
      "es": "¿Cuál de estas señales es una señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "La señal A.",
          "en": "Sign A.",
          "ru": "Знак A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal B.",
          "en": "Sign B.",
          "ru": "Знак B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal C.",
          "en": "Sign C.",
          "ru": "Знак C."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b84.jpg"
  },
  {
    "id": 184,
    "question": {
      "es": "¿Cuál de estas señales es Informativa?",
      "en": "Which of these signs is an informative sign?",
      "ru": "Какой из этих знаков является информационным знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "La señal A.",
          "en": "Sign A.",
          "ru": "Знак A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La señal B.",
          "en": "Sign B.",
          "ru": "Знак B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal C.",
          "en": "Sign C.",
          "ru": "Знак C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b85.jpg"
  },
  {
    "id": 185,
    "question": {
      "es": "Indique qué tipo de señal es la que a continuación se muestra:",
      "en": "Indicate what type of traffic sign is shown in the image:",
      "ru": "Укажите, какой тип дорожного знака показан на изображении:"
    },
    "answers": [
      {
        "text": {
          "es": "Preventiva",
          "en": "Warning sign.",
          "ru": "Предупреждающий знак."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reglamentaria.",
          "en": "Regulatory sign.",
          "ru": "Регулирующий знак."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Informativa.",
          "en": "Informative sign.",
          "ru": "Информационный знак."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b86.jpg"
  },
  {
    "id": 186,
    "question": {
      "es": "¿Cuál de las siguientes imágenes , por forma y color, corresponde a la señal indicativa de una rotonda o pendiente pronunciada?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Figura A.",
          "en": "Figure A.",
          "ru": "Фигура A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Figura B.",
          "en": "Figure B.",
          "ru": "Фигура B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Figura C.",
          "en": "Figure C.",
          "ru": "Фигура C."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b87.jpg"
  },
  {
    "id": 187,
    "question": {
      "es": "¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de estar próximo a una zona afectada por obras?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Figura A.",
          "en": "Figure A.",
          "ru": "Фигура A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Figura B.",
          "en": "Figure B.",
          "ru": "Фигура B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Figura C.",
          "en": "Figure C.",
          "ru": "Фигура C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b88.jpg"
  },
  {
    "id": 188,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
      "en": "In the following emergency situation, what should drivers in the vicinity do?",
      "ru": "В следующей экстренной ситуации, что должны делать водители поблизости?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
          "en": "Increase speed to avoid being an obstacle to this vehicle.",
          "ru": "Увеличить скорость, чтобы не быть препятствием для этого транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
          "en": "Alert other drivers to the presence of this vehicle by repeatedly using the horn.",
          "ru": "Предупредить других водителей о присутствии этого транспортного средства, многократно используя звуковой сигнал."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.",
          "en": "Give way to this vehicle, clear the emergency lane and stop if necessary.",
          "ru": "Уступить дорогу этому транспортному средству, освободить полосу для экстренных случаев и при необходимости остановиться."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b89.jpg"
  },
  {
    "id": 189,
    "question": {
      "es": "El siguiente símbolo indica que se trata de un carril que debe ser liberado cuando se aproxima un vehículo en emergencia.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b90.jpg"
  },
  {
    "id": 190,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
      "en": "In the following emergency situation, which way should the vehicles in the image move to facilitate the passage of the ambulance?",
      "ru": "В следующей экстренной ситуации, в каком направлении должны двигаться автомобили на изображении, чтобы обеспечить проезд скорой помощи?"
    },
    "answers": [
      {
        "text": {
          "es": "Ambos hacia su derecha.",
          "en": "Both to their right.",
          "ru": "Оба вправо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El único que debería apartarse es el auto 2 hacia su derecha.",
          "en": "Only car 2 should move to its right.",
          "ru": "Только автомобиль 2 должен сдвинуться вправо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El auto 1 hacia su izquierda y el 2 hacia su derecha.",
          "en": "Car 1 to its left and car 2 to its right.",
          "ru": "Автомобиль 1 влево, а автомобиль 2 вправо."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b91.jpg"
  },
  {
    "id": 191,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
      "en": "In the following emergency situation, which way should the vehicles in the image move to facilitate the passage of the ambulance?",
      "ru": "В следующей экстренной ситуации, в каком направлении должны двигаться автомобили на изображении, чтобы обеспечить проезд скорой помощи?"
    },
    "answers": [
      {
        "text": {
          "es": "El único que debería apartarse es el auto 2 hacia su derecha.",
          "en": "Only car 2 should move to its right.",
          "ru": "Только автомобиль 2 должен сдвинуться вправо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Todos hacia su derecha.",
          "en": "All to their right.",
          "ru": "Все вправо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha.",
          "en": "Car 1 to its left, while cars 2 and 3 to their right.",
          "ru": "Автомобиль 1 влево, а автомобили 2 и 3 вправо."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b92.jpg"
  },
  {
    "id": 192,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
      "en": "In the following emergency situation, what should drivers in the vicinity do?",
      "ru": "В следующей экстренной ситуации, что должны делать водители поблизости?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
          "en": "Increase speed to avoid being an obstacle to this vehicle.",
          "ru": "Увеличить скорость, чтобы не быть препятствием для этого транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
          "en": "Alert other drivers to the presence of this vehicle by repeatedly using the horn.",
          "ru": "Предупредить других водителей о присутствии этого транспортного средства, многократно используя звуковой сигнал."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.",
          "en": "Give way to this vehicle, clear the emergency lane and stop if necessary.",
          "ru": "Уступить дорогу этому транспортному средству, освободить полосу для экстренных случаев и при необходимости остановиться."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b93.jpg"
  },
  {
    "id": 193,
    "question": {
      "es": "Ud. se encuentra frente a la siguiente situación donde el conductor toca repetidamente la bocina, ¿qué debe hacer si se encuentra conduciendo en su proximidad?",
      "en": "What should be done in the following emergency situation?",
      "ru": "Что следует делать в следующей экстренной ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Cederle el paso, ya que está indicando que se encuentra en emergencia.",
          "en": "Give way, as the driver is indicating they are in an emergency situation.",
          "ru": "Уступить дорогу, так как водитель сигнализирует о чрезвычайной ситуации."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico.",
          "en": "Offer assistance, as the driver is indicating that the vehicle has a mechanical problem.",
          "ru": "Предложить помощь, так как водитель сигнализирует о механической неисправности автомобиля."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Alertar a otros conductores, tocando repetidamente la bocina, que ese vehículo cruzará un semáforo en rojo.",
          "en": "Alert other drivers by repeatedly honking the horn that this vehicle will run a red light.",
          "ru": "Предупредить других водителей, многократно используя звуковой сигнал, что этот автомобиль проедет на красный свет."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b94.jpg"
  },
  {
    "id": 194,
    "question": {
      "es": "En esta intersección sin semáforos, donde el conductor del vehículo realiza un giro a la derecha, ¿quién tiene prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El automóvil, porque circula por la mano derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El ciclista, porque el automóvil pierde la prioridad al querer girar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El ciclista, porque al circular por la ciclovía siempre tiene prioridad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b95.jpg"
  },
  {
    "id": 195,
    "question": {
      "es": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A, ya que está circulando por la derecha",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los vehículos B, ya que son varios los que circulan por esa calle.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo A, ya que está saliendo del paso a nivel ferroviario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b96.jpg"
  },
  {
    "id": 196,
    "question": {
      "es": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b97.jpg"
  },
  {
    "id": 197,
    "question": {
      "es": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Los vehículos que circulan por la calle A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Los vehículos que circulan por la calle B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b98.jpg"
  },
  {
    "id": 198,
    "question": {
      "es": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b99.jpg"
  },
  {
    "id": 199,
    "question": {
      "es": "¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A porque circula por una avenida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El vehículo B porque circula por la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto ya que es una esquina sin semáforo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b100.jpg"
  },
  {
    "id": 200,
    "question": {
      "es": "Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b101.jpg"
  },
  {
    "id": 201,
    "question": {
      "es": "Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b102.jpg"
  },
  {
    "id": 202,
    "question": {
      "es": "Estas señales son las únicas que indican que se pierde la prioridad de paso en una bocacalle sin semáforo.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b103.jpg"
  },
  {
    "id": 203,
    "question": {
      "es": "De acuerdo a la Ley N° 2148, en encrucijadas sin semáforos, ¿cuál es el orden de prioridad de paso según el tipo de arteria?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "1° Pasaje - 2° Calle - 3° Avenida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "1° Avenida - 2° Calle - 3° Pasaje.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto, ya que el vehículo que circula por la derecha siempre tiene prioridad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 204,
    "question": {
      "es": "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin semáforos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Los vehículos de transporte de pasajero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo de menor tamaño.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que se presenta por el lado derecho.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 205,
    "question": {
      "es": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al automóvil.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al colectivo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b104.jpg"
  },
  {
    "id": 206,
    "question": {
      "es": "Frente a esta situación de obstrucción de vía, ¿qué debe hacer el conductor del vehículo señalado?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Debe ceder el paso al vehículo que circula en el sentido contrario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Tiene prioridad de paso sobre el otro vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La normativa no establece prioridad de paso ante esta situación.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b105.jpg"
  },
  {
    "id": 207,
    "question": {
      "es": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al vehículo A, ya que circula por la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al vehículo B, ya que circula por una avenida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b106.jpg"
  },
  {
    "id": 208,
    "question": {
      "es": "¿Quién tiene prioridad de paso en una rotonda?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo que circule por la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que pretende acceder a la rotonda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que se encuentra dentro de la calzada circular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 209,
    "question": {
      "es": "En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b107.jpg"
  },
  {
    "id": 210,
    "question": {
      "es": "Como norma general, en una arteria de doble circulación, con pendiente pronunciada y con un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo que desciende.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que asciende.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No hay prioridad, cualquiera de ellos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 211,
    "question": {
      "es": "En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b108.jpg"
  },
  {
    "id": 212,
    "question": {
      "es": "¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde el lugar donde estaban estacionados o desde un garaje?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Siempre, independientemente de cómo se encuentre el tránsito vehicular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cuando el tránsito se encuentra interrumpido por cualquier razón.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Nunca, independientemente de cómo se encuentre el tránsito vehicular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 213,
    "question": {
      "es": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están circulando por esta arteria?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, porque se encuentra a la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque señalizó su maniobra.\t",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b109.jpg"
  },
  {
    "id": 214,
    "question": {
      "es": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están detenidos en la arteria?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No. La prioridad es de los otros vehículos, independientemente si están detenidos o circulando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque se encuentra el tránsito detenido y deben cederle el paso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No. La Ley no menciona nada al respecto, sólo se expresa sobre las prioridades en intersecciones no semaforizadas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b110.jpg"
  },
  {
    "id": 215,
    "question": {
      "es": "En la siguiente situación, el motovehículo…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Puede adelantarse, pero utilizando la luz intermitente de giro izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Puede adelantarse, pero tocando la bocina.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No puede realizar el sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a15.jpg"
  },
  {
    "id": 216,
    "question": {
      "es": "En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, salvo que se acerque un vehículo en el sentido contrario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que está prohibido por la demarcación horizontal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido contrario está lejos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b111.jpg"
  },
  {
    "id": 217,
    "question": {
      "es": "¿Cuáles de los siguientes vehículos NO se encuentran en infracción?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Los vehículos A y B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los vehículos A y C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los vehículos B y C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b112.jpg"
  },
  {
    "id": 218,
    "question": {
      "es": "El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene prioridad?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b113.jpg"
  },
  {
    "id": 219,
    "question": {
      "es": "En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de carril?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo que circula por el carril que se pretende ocupar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El vehículo que realiza el cambio de carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo del carril más lento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b114.jpg"
  },
  {
    "id": 220,
    "question": {
      "es": "Es obligatorio al finalizar un adelantamiento...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Permanecer en el carril ocupado, independientemente de la fluidez del tránsito.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar su velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 221,
    "question": {
      "es": "¿Cuál de estos carriles es el llamado ''carril de sobrepaso''?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cualquiera de ellos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo el carril señalado como A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo el carril señalado como F.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b115.jpg"
  },
  {
    "id": 222,
    "question": {
      "es": "El vehículo, que circula por el carril destinado al tránsito lento, no puede abandonarlo para sobrepasar a otro vehículo que transita más lento.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 223,
    "question": {
      "es": "El conductor del vehículo A quiere volver rápidamente al carril derecho porque ve ante él una situación de peligro, ¿qué debe hacer el conductor del vehículo B?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para que realice la maniobra detrás suyo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad para facilitarle el retorno al carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b116.jpg"
  },
  {
    "id": 224,
    "question": {
      "es": "En este tramo de la vía no se puede realizar un sobrepaso",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b117.jpg"
  },
  {
    "id": 225,
    "question": {
      "es": "Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Circular por la banquina.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 226,
    "question": {
      "es": "¿Está permitido sobrepasar a otro vehículo en este lugar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, salvo que haya una señal que indique lo contrario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido por normativa.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo en el caso de que no perjudique la circulación de otros vehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b118.jpg"
  },
  {
    "id": 227,
    "question": {
      "es": "Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar el sobrepaso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El que lo intente primero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El último de la fila.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El que circula más próximo al vehículo que se desea sobrepasar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 228,
    "question": {
      "es": "Según la Ley N°2148, ¿qué significa el término sobrepaso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sobrepasar la línea de otro vehículo en circulación, sin necesidad de cambiar de carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sobrepasar la línea de otro vehículo en circulación, cambiando de carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Exceder el límite de velocidad máxima.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 229,
    "question": {
      "es": "¿Qué peligro debe preverse al sobrepasar un colectivo detenido?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que los pasajeros bajen por la parte izquierda del colectivo detenido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ninguno, mientras no sobrepase la velocidad máxima permitida por la Ley.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 230,
    "question": {
      "es": "En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo C.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b119.jpg"
  },
  {
    "id": 231,
    "question": {
      "es": "Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante suyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea continuar en línea recta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos retrovisores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Tocarle bocina para indicarle que debe seguir.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 232,
    "question": {
      "es": "¿Se puede traspasar la siguiente señal horizontal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo cuando la vía tiene dos carriles por sentido de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque indica prohibición de sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b120.jpg"
  },
  {
    "id": 233,
    "question": {
      "es": "Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Donde la delimitación de carriles es de trazo continuo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En curvas, encrucijadas, pasos a nivel o puentes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 234,
    "question": {
      "es": "En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, cuando no haya señal que lo prohíba.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que está prohibido por normativa.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, si hay suficiente visibilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 235,
    "question": {
      "es": "En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un sobrepaso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún vehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que ningún otro vehículo esté realizando la maniobra de sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 236,
    "question": {
      "es": "En este lugar, ¿está permitido sobrepasar a otro vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, salvo que haya una señal que indique lo contrario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido por normativa.",
          "en": "This statement is about traffic laws and regulations.",
          "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si no se perjudica la circulación de otros vehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b121.jpg"
  },
  {
    "id": 237,
    "question": {
      "es": "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No debe traspasarse ninguna de ellas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b122.jpg"
  },
  {
    "id": 238,
    "question": {
      "es": "¿Qué indica esta demarcación amarilla en la calzada?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica que se puede traspasar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que es una zona que se puede circular sobre ella.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b123.jpg"
  },
  {
    "id": 239,
    "question": {
      "es": "El carril de sobrepaso en una autopista sirve para...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Circular por él cuando a la derecha existe otro carril disponible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular por él siempre que se conduzca a la mayor velocidad permitida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Realizar maniobras de sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 240,
    "question": {
      "es": "¿A qué se denomina 'carril de aceleración'?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Es el carril de incorporación a una autopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es el carril derecho de una autopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es el carril izquierdo de una autopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 241,
    "question": {
      "es": "El motovehículo señalado con el círculo rojo, ¿circula correctamente?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque circula paralelo con otros vehículos y no en zig zag.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque tiene la luz encendida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque está prohibido circular por esa zona.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a16.jpg"
  },
  {
    "id": 242,
    "question": {
      "es": "Un vehículo podrá circular por la franja paralela a la calzada, indicada en la imagen, sólo cuando el flujo vehicular esté absolutamente congestionado.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b125.jpg"
  },
  {
    "id": 243,
    "question": {
      "es": "El vehículo señalizado tiene permitido girar a la izquierda en este cruce que no tiene semáforo.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b126.jpg"
  },
  {
    "id": 244,
    "question": {
      "es": "Ud. viene circulando por una avenida de doble mano y al llegar a la bocacalle, precisa girar a la izquierda para tomar una calle de único sentido. De acuerdo a la Ley Nº 2148, ¿en qué condiciones puede efectuar esa maniobra?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Si hay un semáforo de giro que me habilite (en verde).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si es un cruce sin semáforos y no se acerca ningún vehículo por la mano de circulación contraria a la de mi avance.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 245,
    "question": {
      "es": "En un cruce sin semáforos, un vehículo que se encuentra circulando por una avenida doble mano, tiene permitido girar a su izquierda para tomar una calle de único sentido.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 246,
    "question": {
      "es": "De acuerdo a la Ley N° 2148, ¿está permitido realizar el siguiente giro?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que sólo está permitido hacer ese giro si existe un semáforo que lo habilita.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que es una intersección no semaforizada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que es una vía de doble sentido de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b127.jpg"
  },
  {
    "id": 247,
    "question": {
      "es": "De acuerdo a la Ley N° 2148, ¿está permitido realizar este giro?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que el semáforo está en verde.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que es una vía de doble sentido de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b128.jpg"
  },
  {
    "id": 248,
    "question": {
      "es": "El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en línea recta, de modo que:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y efectuar el giro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son incorrectas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b129.jpg"
  },
  {
    "id": 249,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima permitida en esta calle?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b130.jpg"
  },
  {
    "id": 250,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "30 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "20 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b131.jpg"
  },
  {
    "id": 251,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima permitida para un motovehículo en esta avenida?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b132.jpg"
  },
  {
    "id": 252,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para un motovehículo en este tramo de la avenida?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "50 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b133.jpg"
  },
  {
    "id": 253,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para motovehículos en la Avenida Costanera Rafael Obligado que se visualiza en la imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "50 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b134.jpg"
  },
  {
    "id": 254,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para motovehículos en este tramo de la Av. Costanera Rafael Obligado?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b135.jpg"
  },
  {
    "id": 255,
    "question": {
      "es": "Según la Ley 2148, los límites de velocidad para un motovehículos que circula por esta arteria son de 30 km/h (mínima) y 60 km/h (máxima).",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b136.jpg"
  },
  {
    "id": 256,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima permitida para motovehículos en esta zona de la ruta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "110 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "130 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b137.jpg"
  },
  {
    "id": 257,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima que puede alcanzar un vehículo, al circular por ruta cuando atraviesa una zona urbana?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "90 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 258,
    "question": {
      "es": "Al circular por una ruta a la velocidad máxima permitida sólo se está habilitado a superarla en el momento del sobrepaso.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 259,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "20 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "30 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b138.jpg"
  },
  {
    "id": 260,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "20 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b139.jpg"
  },
  {
    "id": 261,
    "question": {
      "es": "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Poco antes de abandonar la misma.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cuando se haya entrado en el carril de desaceleración.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cuando se ingresa a la nueva vía de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 262,
    "question": {
      "es": "Según Ley N° 2148, ¿cuál es la velocidad máxima permitida para motovehículos en los carriles centrales de la Av. Gral. Paz, en el tramo entre Autopista Ingeniero Pascual Palazzo y Av. 27 de Febrero?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "100 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 263,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para un motovehículo en Av. Intendente Cantilo, salvo señalización que indique otra velocidad?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "110 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "100 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 264,
    "question": {
      "es": "Según la Ley Nacional N° 24.449, ¿cuál es la velocidad máxima permitida para motovehículos en semiautopistas?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "130 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "120 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "110 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 265,
    "question": {
      "es": "Según la Ley Nacional N º 24.449, en carácter general, ¿cuál es la velocidad mínima permitida en las semiautopistas?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "50 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 266,
    "question": {
      "es": "¿Qué se conoce como velocidad precautoria?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La circulación a la velocidad mínima establecida para una vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 267,
    "question": {
      "es": "En este cruce de dos calles sin semáforos, ¿cuál es el límite superior de la velocidad precautoria establecida por ley?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "20 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b142.jpg"
  },
  {
    "id": 268,
    "question": {
      "es": "Según la Ley N° 2148, ¿cuál es la velocidad precautoria frente a establecimientos escolares durante los horarios de ingreso y egreso?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Es de 20 km/h para todas las arterias.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No más de 30 km/h en calles y de 45 km/h en avenidas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es igual a la mínima establecida para el tipo de arteria correspondiente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 269,
    "question": {
      "es": "Según la Ley N° 2148, ¿cuál es el límite superior de la velocidad precautoria en un paso nivel?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "20 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "40 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 270,
    "question": {
      "es": "Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos, ¿cuál es el límite superior de velocidad precautoria que deben respetar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "20 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 kilómetros por hora.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "30 kilómetros por hora.\t",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b143.jpg"
  },
  {
    "id": 271,
    "question": {
      "es": "¿A qué se denomina “distancia de seguridad”?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para realizar un sobrepaso seguro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la distancia que recorre el vehículo desde que el conductor percibe una situación de peligro hasta que acciona el freno.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 272,
    "question": {
      "es": "¿A qué se denomina “tiempo de reacción”?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al tiempo que pasa desde que se empieza una maniobra hasta que se termina.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 273,
    "question": {
      "es": "¿A qué se denomina 'distancia de reacción'?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A la distancia que recorre un vehículo hasta su detención.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 274,
    "question": {
      "es": "Según la Ley 2148, al circular con un motovehículo detrás de este camión, ¿cuál es la distancia mínima de seguridad que debe mantener respecto de él? La distancia que resulte de una separación de por lo menos…?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Un segundo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dos segundos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cinco segundos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a17.jpg"
  },
  {
    "id": 275,
    "question": {
      "es": "Circular por debajo del límite mínimo de velocidad puede causar incidentes.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 276,
    "question": {
      "es": "¿Qué relación existe entre la velocidad y el campo visual del conductor?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A mayor velocidad, menor campo visual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A menor velocidad, menor campo visual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A mayor velocidad, mayor campo visual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 277,
    "question": {
      "es": "Los excesos de velocidad...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los vehículos.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son responsables de la mayoría de los incidentes solamente en vías de doble sentido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 278,
    "question": {
      "es": "Circular a velocidad constante y dentro de los límites establecidos por la Ley, además de minimizar las posibilidades de provocar un siniestro vial, puede optimizar el consumo de combustible en un vehículo.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 279,
    "question": {
      "es": "Circular a mayor velocidad de la precautoria implica que aumenten las posibilidades de que un siniestro vial sea más grave.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 280,
    "question": {
      "es": "¿Cuál es la manera más adecuada de conducir un vehículo en este tramo de la ruta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad gradualmente antes de ingresar en la curva.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Desacelerar antes de ingresar a la curva.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b145.jpg"
  },
  {
    "id": 281,
    "question": {
      "es": "Si al circular por ruta, el vehículo sale involuntariamente de la calzada, es recomendable:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Usar el freno de mano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Desacelerar (no frenar).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Accionar fuertemente el pedal de freno.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 282,
    "question": {
      "es": "Si ve esta señal mientras conduce, usted debe…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Reducir la velocidad del vehículo",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Incrementar la velocidad del vehículo",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dar vuelta a la izquierda y después a la derecha",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b146.jpg"
  },
  {
    "id": 283,
    "question": {
      "es": "Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se indica al resto de los conductores, la precaución sobre la aproximación de trenes, colocando balizas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b147.jpg"
  },
  {
    "id": 284,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para motovehículos en este tramo de la Av. Gral Roca, por encontrarse cerca de un establecimiento escolar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "30 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b140.jpg"
  },
  {
    "id": 285,
    "question": {
      "es": "¿El límite de velocidad máxima de 20 km/h en este tramo de calle se debe respetar sólo en el horario de funcionamiento escolar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que el límite de la señal de tránsito rige independientemente del día y horario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que la Ley 2148 establece que esta restricción es durante el horario de funcionamiento escolar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b141.jpg"
  },
  {
    "id": 286,
    "question": {
      "es": "El motovehículo de la imagen, ¿se encuentra correctamente estacionado?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque la vereda tiene más de tres metros y no obstruye el paso peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Sólo puede estacionarse sobre la vereda si existe una señalización que lo autorice.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, sólo los motovehículos pueden estacionarse sobre cualquier vereda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a18.jpg"
  },
  {
    "id": 287,
    "question": {
      "es": "Según la Ley N° 2148, ¿está permitido estacionar un motovehículo del modo que se visualiza en la imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, salvo que exista señalización que lo permita.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, de 07 a 21 horas durante días no hábiles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, de 21 a 07 horas durante los días hábiles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a19.jpg"
  },
  {
    "id": 288,
    "question": {
      "es": "Si su motovehículo no funciona, ud. puede estacionarlo durante unos días hasta que sea reparado, tal como se muestra en la imagen.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a20.jpg"
  },
  {
    "id": 289,
    "question": {
      "es": "¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de una esquina?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La línea peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La línea imaginaria de prolongación de ochava.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La línea de edificación transversal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 290,
    "question": {
      "es": "Como norma general, ¿qué distancia debe dejarse libre cuando se va a estacionar frente a este tipo de instituciones?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Todo el frente del edificio.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "10 metros de cada lado de la entrada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "5 metros de cada lado de la entrada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b152.jpg"
  },
  {
    "id": 291,
    "question": {
      "es": "Para poder estacionar en esta zona, se deben dejar libre al menos de 5 metros para cada lado de la entrada.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b153.jpg"
  },
  {
    "id": 292,
    "question": {
      "es": "En estas zonas, está permitido estacionar a partir de los 20 metros para cada lado.",
      "en": "Parking is allowed on this road.",
      "ru": "Парковка разрешена на этой дороге."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b155.jpg"
  },
  {
    "id": 293,
    "question": {
      "es": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos...",
      "en": "Parking is prohibited on this road.",
      "ru": "Парковка запрещена на этой дороге."
    },
    "answers": [
      {
        "text": {
          "es": "Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b156.jpg"
  },
  {
    "id": 294,
    "question": {
      "es": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos…",
      "en": "Parking is prohibited on this road.",
      "ru": "Парковка запрещена на этой дороге."
    },
    "answers": [
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles durante las 24 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b157.jpg"
  },
  {
    "id": 295,
    "question": {
      "es": "La Ley Nº 2148 establece como norma general que en este tipo de calles está prohibido estacionar vehículos...",
      "en": "Parking is prohibited on this road.",
      "ru": "Парковка запрещена на этой дороге."
    },
    "answers": [
      {
        "text": {
          "es": "Junto a la acera derecha los días hábiles durante las 24 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda todos los días durante las 24 horas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b158.jpg"
  },
  {
    "id": 296,
    "question": {
      "es": "En el siguiente espacio, se encuentra permitido detenerse pero no estacionar.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b159.jpg"
  },
  {
    "id": 297,
    "question": {
      "es": "Si va a detenerse o estacionar en las cercanías de esta esquina, ¿dónde sería correcto hacerlo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto siempre que quede la senda peatonal libre, para no obstaculizar el cruce del peatón.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dentro de la intersección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b163.jpg"
  },
  {
    "id": 298,
    "question": {
      "es": "Según la Ley Nº 24.449, en el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "5 metros respecto de los rieles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "2 metros respecto de los rieles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No existe una distancia mínima.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b164.jpg"
  },
  {
    "id": 299,
    "question": {
      "es": "¿Se está habilitado a detener un vehículo en este lugar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, siempre y cuando no entorpezca la circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido estacionar y detenerse por normativa.",
          "en": "Parking is prohibited on this road.",
          "ru": "Парковка запрещена на этой дороге."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Si, a menos que haya una señal que lo prohíba expresamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b168.jpg"
  },
  {
    "id": 300,
    "question": {
      "es": "Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría estar indicando el conductor?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo circula lentamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que el vehículo próximamente ingresará a un garage o se detendrá.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que el vehículo realizará un giro en la próxima intersección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b169.jpg"
  },
  {
    "id": 301,
    "question": {
      "es": "¿Qué indica el uso de este tipo de luces?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cuando se utilizan por separado sirven para preanunciar maniobras.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se está por detener.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b170.jpg"
  },
  {
    "id": 302,
    "question": {
      "es": "Si el vehículo de la imagen se dispone a ingresar a un garaje, está anticipando su maniobra, utilizando las luces correctas.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b171.jpg"
  },
  {
    "id": 303,
    "question": {
      "es": "Si el vehículo de la imagen se dispone a ingresar a un garaje ubicado a su derecha, está anticipando su maniobra utilizando las luces correctas.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b172.jpg"
  },
  {
    "id": 304,
    "question": {
      "es": "El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Con la luz de giro hacia el lado donde se irá a ingresar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Con la luz de giro hacia el lado opuesto donde se irá a ingresar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Con las luces intermitentes (balizas).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 305,
    "question": {
      "es": "Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su maniobra utilizando la luz de giro correspondiente por lo menos...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "20 metros antes de realizar la maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "10 metros antes de realizar la maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 metros antes de realizar la maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 306,
    "question": {
      "es": "Para realizar correctamente un giro en una intersección se debe indicar...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Tocando bocina.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Utilizando ambos giros, metros antes de llegar a la intersección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 307,
    "question": {
      "es": "¿Son válidas este tipo de señas?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Como acompañamiento al uso de balizas y/o en caso de emergencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Nunca.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo cuando se utilicen en calles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b173.jpg"
  },
  {
    "id": 308,
    "question": {
      "es": "Los motovehículos, ¿cuándo están obligados a circular con la luz baja encendida?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Durante las 24 hs y en todo tipo de vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al circular por autopistas, semiautopistas o rutas, aunque sea de día.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo durante la noche o con días de poca visibilidad, por cualquier vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 309,
    "question": {
      "es": "Circular con la luz alta encendida está prohibido en zonas urbanas.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 310,
    "question": {
      "es": "En cuanto al uso reglamentario de luces, ¿este motovehículo circula correctamente?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que las luces sólo deben utilizarse en condiciones meteorológicas adversas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que las luces sólo deben utilizarse por autopistas, semiautopistas y rutas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Es obligatorio el uso de la luz baja las 24 horas del día y en todo tipo de vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a21.jpg"
  },
  {
    "id": 311,
    "question": {
      "es": "Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de circulación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que está circulando en mí mismo sentido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que está circulando en el sentido contrario al mío.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No indican sentido de circulación sino que está descompuesto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b175.jpg"
  },
  {
    "id": 312,
    "question": {
      "es": "¿Para qué sirven estas luces intermitentes?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Para advertir a los demás conductores, frente a malas condiciones climáticas, que el vehículo circula a baja velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b176.jpg"
  },
  {
    "id": 313,
    "question": {
      "es": "Cuando se circula de día y con suficiente luz natural por la Av. Cantilo, ¿qué luces debe llevar encendidas en su motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Solamente la luz de posición.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La luz baja.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ninguna, dado que las condiciones de visibilidad son suficientes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 314,
    "question": {
      "es": "Un motovehículo, ¿puede estar provisto de luz rompeniebla delantero?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, aunque no es obligatorio.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, en ningún caso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, sólo puede disponer de la luz antiniebla trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 315,
    "question": {
      "es": "El sistema de luces que posee un vehículo, además de iluminar, brinda información que permite la comunicación entre vehículos y también peatones.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 316,
    "question": {
      "es": "¿A qué se denomina “aquaplaning”?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cuando la cantidad de agua caída en una lluvia es abundante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 317,
    "question": {
      "es": "En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Debería circular a la mitad de la velocidad máxima establecida por Ley.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que circula.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b179.jpg"
  },
  {
    "id": 318,
    "question": {
      "es": "¿Cómo se define el efecto que ocurre en la siguiente imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Aquaplaning.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Off tracking.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b180.jpg"
  },
  {
    "id": 319,
    "question": {
      "es": "Cuando hay agua en el camino, debe reducir su velocidad para evitar…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Desgastar las llantas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sobrecalentar las llantas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El aquaplaning.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 320,
    "question": {
      "es": "Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque al mojarse pueden no funcionar eficazmente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada resbaladiza.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 321,
    "question": {
      "es": "Con esta condición climática, el motovehículo se adhiere mejor a la calzada si...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Se aumenta la presión de aire del neumático..",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El neumático conserva el dibujo en toda la superficie.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se baja la presión de aire del neumático.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a22.jpg"
  },
  {
    "id": 322,
    "question": {
      "es": "Si se encuentra conduciendo un motovehículo con la calzada mojada porque llovió, en el caso de frenada, esta situación provocará...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Una disminución del tiempo de reacción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Un aumento de la distancia de reacción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Un aumento de la distancia de frenado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 323,
    "question": {
      "es": "Si al conducir un motovehículo por una calzada mojada con charcos y los frenos se mojan, perdiendo su eficacia. ¿Qué resultaría conveniente hacer para secarlos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Acelerar progresivamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Frenar con fuerza.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Frenar suavemente y de forma repetida, mientras se mantiene la aceleración.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 324,
    "question": {
      "es": "Al conducir por un largo lapso de tiempo y en esta condición climática…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Es menos probable que aparezca la fatiga, ya que aumenta la atención.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es necesario descansar con más frecuencia, para evitar la fatiga.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b182.jpg"
  },
  {
    "id": 325,
    "question": {
      "es": "Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, al reducir la velocidad, mayor es la proporción de agua en el asfalto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, con lluvia la adherencia es menor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No. La distancia de seguridad debe ser siempre la misma.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b183.jpg"
  },
  {
    "id": 326,
    "question": {
      "es": "Conducir de noche aumenta el riesgo de sufrir un incidente.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 327,
    "question": {
      "es": "Cuando conduce bajo esta condición climática, ¿a cuánto se debe incrementar la regla de 2 segundos en la distancia de seguridad?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A 4 segundos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A 3 segundos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A 5 segundos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b184.jpg"
  },
  {
    "id": 328,
    "question": {
      "es": "Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Igual que cuando la calzada se encuentra seca.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Menor que cuando la calzada se encuentra seca.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mayor que cuando la calzada se encuentra seca.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b185.jpg"
  },
  {
    "id": 329,
    "question": {
      "es": "En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede producir encandilamiento?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque este efecto se produce sólo por el uso de la luz alta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque este efecto se produce en rutas con poca iluminación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b186.jpg"
  },
  {
    "id": 330,
    "question": {
      "es": "¿Cuál es el límite de velocidad máxima en esta situación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b187.jpg"
  },
  {
    "id": 331,
    "question": {
      "es": "Frente a estas condiciones climáticas si el conductor reduce la velocidad de circulación de su motovehículo, ¿disminuiría la posibilidad de participar de un siniestro?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo en la medida en que el conductor circule con las balizas encendidas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Siempre, ya que el exceso de velocidad es en sí mismo un factor esencial en la producción de incidentes de tránsito.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo más recomendable es detenerse sobre el margen derecho de la calzada y esperar que pase el banco de niebla.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a23.jpg"
  },
  {
    "id": 332,
    "question": {
      "es": "Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Las luces altas, durante todo el recorrido mientras continúe la niebla.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Las luces bajas y las rompeniebla (en el caso de tenerlas).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a24.jpg"
  },
  {
    "id": 333,
    "question": {
      "es": "Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es detenerse en la banquina?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, cuando el banco de niebla es muy denso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre y cuando se coloquen las luces altas para ser más visibles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a25.jpg"
  },
  {
    "id": 334,
    "question": {
      "es": "La niebla, como factor de riesgo, produce modificaciones en…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El campo visual del conductor y la capacidad lumínica del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo afecta la capacidad lumínica del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 335,
    "question": {
      "es": "Si circula con un motovehículo en una calzada en estas condiciones, ¿qué técnica de conducción debe emplear?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Utilizar una velocidad reducida, evitando aceleraciones y frenadas bruscas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Dar aceleraciones y frenadas frecuentes para evitar quedar atascado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular a medio embrague, manteniendo permanentemente frenada la rueda delantera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a26.jpg"
  },
  {
    "id": 336,
    "question": {
      "es": "En condiciones de viento fuerte, es recomendable realizar los sobrepasos de un camión con una diferencia de velocidad no demasiado elevada.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 337,
    "question": {
      "es": "Bajo estas condiciones climáticas ¿qué debe hacer para circular con seguridad con un ciclomotor?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Circular más cerca de los vehículos que van delante, para reducir la resistencia del viento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zigzaguear con el ciclomotor para corregir las desviaciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sujetar firmemente el manubrio del ciclomotor y reducir la velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a27.jpg"
  },
  {
    "id": 338,
    "question": {
      "es": "Frente a esta situación, ¿qué precaución especial se debería adoptar al conducir un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Utilizar el alumbrado delantero de niebla.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Disminuir la velocidad y aumentar la distancia de seguridad cuando circule detrás de un vehículo.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Disminuir la distancia de seguridad cuando circule detrás de un vehículo.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a28.jpg"
  },
  {
    "id": 339,
    "question": {
      "es": "Si ud. circula por la ruta y observa esta situación, debe…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para sobrepasar al animal rápidamente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Usar la bocina para ahuyentar al animal y mantener su velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y si es necesario detenerse.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b193.jpg"
  },
  {
    "id": 340,
    "question": {
      "es": "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo tiene un desperfecto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que se encuentra en emergencia, transportando a una persona en grave estado de salud.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 341,
    "question": {
      "es": "Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a pesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los vehículos lentos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál fuera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 342,
    "question": {
      "es": "¿Qué vehículo puede realizar el acarreo de otro en esta vía?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para sujetarlo firmemente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cualquier vehículo utilizando la cuarta de enganche para que quede sujeto firmemente sin riesgo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo los vehículos destinados a ese fin.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b195.jpg"
  },
  {
    "id": 343,
    "question": {
      "es": "En este tipo de vía, ¿está permitido remolcar con su motovehículo a otro que se encuentra descompuesto?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más próximo donde pueda quedar inmovilizado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, sólo pueden hacerlo los vehículos autorizados a tal fin.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b196.jpg"
  },
  {
    "id": 344,
    "question": {
      "es": "¿Es correcta esta manera de acarrear a un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero se deberá mantener una distancia de 1,50 metros entre ambos motovehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, los motovehículos deben ser acarreados sólo por un vehículo autorizado a tal fin.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si el motovehículo remolcado es de menor cilindrada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a29.jpg"
  },
  {
    "id": 345,
    "question": {
      "es": "¿A qué se denomina conducción preventiva?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e inflado de neumáticos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A realizar cursos viales cada seis meses.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 346,
    "question": {
      "es": "Una conducción preventiva o anticipada prevé que todos podemos cometer errores, a pesar de conocer la normativa y la concientización gubernamental.",
      "en": "This statement is about traffic laws and regulations.",
      "ru": "Это утверждение о правилах дорожного движения и нормативных актах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 347,
    "question": {
      "es": "¿A qué se denomina conducción eficiente?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A una conducción que logre llegar a destino en el menor tiempo posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A una conducción que mantenga durante todo el trayecto la misma velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 348,
    "question": {
      "es": "De los factores citados, ¿cuál interviene en el exceso de consumo de combustible?",
      "en": "Which of the following is a major risk factor in traffic accidents?",
      "ru": "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?"
    },
    "answers": [
      {
        "text": {
          "es": "La resistencia aerodinámica.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 349,
    "question": {
      "es": "De acuerdo a la Ley N°2148 durante la siguiente circunstancia, ¿qué acción está prohibida realizar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Ubicarse cerca del surtidor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dejar el motor y las luces encendidas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo dejar el motor encendido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b197.jpg"
  },
  {
    "id": 350,
    "question": {
      "es": "¿Para qué sirve esta varilla metálica?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Para comprobar la temperatura del aceite.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Para comprobar el nivel del aceite.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Para comprobar la presión del aceite y del líquido de frenos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b199.jpg"
  },
  {
    "id": 351,
    "question": {
      "es": "Es importante realizar un correcto mantenimiento vehicular porque...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Evita desperfectos del motor y ayuda a reducir el consumo de combustible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ayuda a reducir el factor de riesgo vehicular involucrado en los siniestros viales.",
          "en": "This statement is about traffic accidents and their causes.",
          "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 352,
    "question": {
      "es": "¿Con qué se lubrica un motor?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b201.jpg"
  },
  {
    "id": 353,
    "question": {
      "es": "¿Cuál de las siguientes imágenes muestra el sector correcto por dónde debe circular un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a30.jpg"
  },
  {
    "id": 354,
    "question": {
      "es": "Para que un motovehículo circule correctamente, ¿qué sector del carril debe utilizar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El más cercano a las líneas horizontales que ordenan la circulación de carriles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Por el centro del carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 355,
    "question": {
      "es": "Esta manera de circular se puede realizar sólo si se hace a baja velocidad y se recorren distancias cortas",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a31.jpg"
  },
  {
    "id": 356,
    "question": {
      "es": "Si se encuentra conduciendo un motovehículo a excesiva velocidad en este tramo de la ruta, ¿cómo es recomendable que actúe para controlar el mismo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Frenando bruscamente y, al mismo tiempo, inclinándome lo más posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Enderezando rápidamente el motovehículo y acelerando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Desacelerando e inclinándome lo más posible hacia el interior de la curva.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a32.jpg"
  },
  {
    "id": 357,
    "question": {
      "es": "Conduciendo un motovehículo, ante una frenada de emergencia, nunca se debe frenar única y bruscamente con el freno delantero.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 358,
    "question": {
      "es": "En líneas generales, para que se accione esta luz, será preciso…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Accionar siempre y al mismo tiempo el freno delantero y el trasero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Accionar cualquiera de los dos frenos, ya sea de forma simultánea o por separado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Únicamente accionar el freno trasero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a33.jpg"
  },
  {
    "id": 359,
    "question": {
      "es": "Si los espejos retrovisores de su vehículo están bien orientados, igualmente es posible que se produzcan puntos ciegos cuando observe por los mismos.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 360,
    "question": {
      "es": "¿Cómo se pueden reducir los puntos ciegos al conducir un vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras se circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando vistazos por encima de los hombros cuando sea necesario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar la luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia adelante para ampliar el ángulo de visión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 361,
    "question": {
      "es": "¿A qué se llama “Punto Ciego”?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo al área de visión que no es cubierta por los espejos retrovisores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al punto imaginario ubicado en el horizonte de una ruta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 362,
    "question": {
      "es": "Un motovehículo, ¿puede circular sin espejos?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero se debe observar hacia los costados antes de hacer alguna maniobra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si es de una cilindrada inferior a 150 CC.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 363,
    "question": {
      "es": "Un ciclomotor, con respecto a los espejos retrovisores…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "No está obligado a llevar ninguno.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo está obligado a llevar el del lado izquierdo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe llevar ambos espejos retrovisores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 364,
    "question": {
      "es": "Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de los espejos retrovisores?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Antes de iniciar la marcha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Durante la conducción, para poder hacer una prueba real.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Con el vehículo inmovilizado y el conductor fuera del mismo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 365,
    "question": {
      "es": "Al conducir un motovehículo, ¿es obligatorio utilizar un chaleco reflectivo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, es obligatorio el uso del chaleco reflectivo con el número de dominio impreso en la parte delantera y trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, para utilizarlo en caso de lluvia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No es obligatorio, aunque es recomendable llevar ropa reflectiva para ser vistos por el resto de los conductores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 366,
    "question": {
      "es": "¿El conductor de un motovehículo está obligado a utilizar el siguiente elemento de seguridad?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, es obligatorio cuando el motovehículo no tiene parabrisas y el casco utilizado no tiene visor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Su uso no es obligatorio, sólo está recomendado en cualquier circunstancia para proteger los ojos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Su uso es obligatorio siempre, en cualquier circunstancia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a33.jpg"
  },
  {
    "id": 367,
    "question": {
      "es": "De acuerdo a la Ley 2148, ¿es correcta la manera de circular del acompañante respecto a la protección ocular?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque sólo el conductor está obligado a usar protección ocular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque el acompañante siempre está obligado a usar protección para sus ojos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque el acompañante debe usar protección ocular cuando el motovehículo no cuenta con parabrisas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a34.jpg"
  },
  {
    "id": 368,
    "question": {
      "es": "Cuando un motovehículo no tiene parabrisas, el conductor está obligado a usar protección para los ojos (visor en el casco o anteojos de seguridad). ¿Esta obligación rige también para el acompañante?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, no está obligado aunque es recomendable.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, cuando hay mucho viento.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, cuando circula por caminos de tierra.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 369,
    "question": {
      "es": "No es aconsejable que los conductores de motovehículos lleven siempre colocados guantes de moto en sus manos.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 370,
    "question": {
      "es": "Este motociclista tiene los 3 principales elementos de seguridad recomendados para un conductor de motovehículo.",
      "en": "This statement is about traffic safety and proper driving behavior.",
      "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a35.jpg"
  },
  {
    "id": 371,
    "question": {
      "es": "¿Es aconsejable que los conductores de motovehículos usen guantes de protección?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque perjudica la adherencia al manillar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que ayudan a proteger sus manos y muñecas frente a una colisión o caída.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo en viajes largos, ya sea en vía urbana o rural.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 372,
    "question": {
      "es": "¿Cuál es la vestimenta recomendada para conducir un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Debería ser holgada para conducir más cómodo y tener colores que no encandilen al resto de los conductores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debería ser de tela resistente, de colores claros y/o con bandas reflectantes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No existe recomendación sobre el tema ya que no influye en su seguridad.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 373,
    "question": {
      "es": "En función a la seguridad vial, ¿tiene importancia la ropa que utilicen los conductores y acompañantes de motovehículos?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, es indistinto siempre que lleven los cascos homologados y bien colocados.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque colabora con su visibilidad, resguarda el cuerpo de las inclemencias del tiempo y puede brindar protección en caso de caídas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo el chaleco reflectante es importante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 374,
    "question": {
      "es": "Al conducir un motovehículo, utilizar ropa de protección...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Resulta eficaz porque, en caso de siniestro, evita o reduce la gravedad de ciertas lesiones.",
          "en": "This statement is about traffic accidents and their causes.",
          "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No es recomendable en zona urbana porque quita libertad de movimientos al conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo debe utilizarse en trayectos largos por ruta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 375,
    "question": {
      "es": "La vestimenta con protecciones para conducir motovehículos debe ser...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "De colores claros o con bandas reflectantes para que se pueda distinguir al conductor a suficiente distancia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "De colores oscuros, para así no distraer a los conductores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "De cualquier color siempre que sea de material sintético.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 376,
    "question": {
      "es": "Para tener seguridad y control sobre los mandos de un motovehículo conviene que el conductor utilice botas que…",
      "en": "This statement is about traffic safety and proper driving behavior.",
      "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
    },
    "answers": [
      {
        "text": {
          "es": "Tengan tacón, queden ajustadas y sean altas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sean bajas, preferentemente acordonadas y con puntera reforzada de acero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Queden sujetas, sin tacón ni cordones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 377,
    "question": {
      "es": "¿Qué se entiende por casco homologado?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Se refiere a la certificación que debe cumplir un casco, confirmando que es apto y seguro para usarlo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica la marca del fabricante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se refiere a la procedencia y fecha de vencimiento del mismo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 378,
    "question": {
      "es": "¿A qué tipo de seguridad pertenece el siguiente elemento?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "A la seguridad pasiva.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A la seguridad activa.",
          "en": "This statement is about traffic safety and proper driving behavior.",
          "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a36.jpg"
  },
  {
    "id": 379,
    "question": {
      "es": "Un requisito obligatorio que debe cumplir el casco para motociclista es que…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Debe estar homologado o certificado para su uso específico.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Debe ser de uso exclusivo de motovehículos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe poseer visor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 380,
    "question": {
      "es": "¿Está permitido circular en un motovehículo con este tipo de casco?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, sólo en distancias cortas y siempre que esté correctamente ajustado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, sólo ante una emergencia y siempre que esté correctamente ajustado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nunca, ya que éste no es un casco homologado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a37.jpg"
  },
  {
    "id": 381,
    "question": {
      "es": "¿Cuál de los siguientes cascos brinda mayor protección?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "El casco A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El casco B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los dos brindan idéntica protección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a38.jpg"
  },
  {
    "id": 382,
    "question": {
      "es": "El casco homologado que brinda mayor protección es del tipo:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Abierto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Integral.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Abierto o Integral. Ambos brindan idéntica protección.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 383,
    "question": {
      "es": "En la siguiente imagen ¿el casco A brinda mayor protección que el B?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque es el que usan los corredores profesionales de automovilismo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque con éste está protegida la mandíbula.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, no hay pruebas de que sea más seguro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a39.jpg"
  },
  {
    "id": 384,
    "question": {
      "es": "Una de las principales causas de mortalidad en siniestros de tránsito donde los motovehículos están involucrados, es…",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "El peso del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La no utilización correcta del casco.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La fricción con el asfalto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 385,
    "question": {
      "es": "En caso de siniestro con un motovehículo, la importancia del uso correcto del casco es…",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Mayor para el acompañante que para el conductor, porque sus lesiones serán de mayor gravedad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mayor para el conductor que para el acompañante, porque caerá primero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Igual para el conductor y el acompañante, porque la posibilidad de lesiones es idéntica en ambos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 386,
    "question": {
      "es": "Circulando en un motovehículo, ¿cuándo debe usar este elemento de protección?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo en días de lluvia u horarios nocturnos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo en distancias largas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a40.jpg"
  },
  {
    "id": 387,
    "question": {
      "es": "En un motovehículo, cuando se usa correctamente el casco se tiene un...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "44% menos de probabilidades de lesiones graves.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "62% menos de probabilidades de lesiones graves.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "85% menos de probabilidades de lesiones graves.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 388,
    "question": {
      "es": "Ante la caída de un motociclista que circula a 25 km/h sin casco, ¿pueden producirse lesiones de gravedad, como fractura de cráneo y daños cerebrales?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que a esa velocidad sufrir un impacto en la cabeza o en otra parte del cuerpo, no tendría consecuencias.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, podrían producirse ya que al no tener casco no está protegido ante un impacto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo puede existir riesgo de fractura de cráneo, pero nunca lesiones cerebrales.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 389,
    "question": {
      "es": "Usar el visor del casco rayado, ¿ puede afectar negativamente la conducción de un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que produce fatiga visual.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, de noche produce reflejos que distorsionan la visión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 390,
    "question": {
      "es": "Su casco de protección ha sufrido un golpe pero no se observa ningún deterioro, ¿este golpe pudo haber afectado su eficacia?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, aunque no se observen daños en su exterior.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque sólo se ve afectado si se observan abolladuras en el exterior.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si se aprecian grietas en el interior.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 391,
    "question": {
      "es": "El conductor del motovehículo que se muestra en la imagen NO está en infracción.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a41.jpg"
  },
  {
    "id": 392,
    "question": {
      "es": "El uso adecuado del casco implica que la correa de sujeción debe llevarse abrochada según las circunstancias del tránsito.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 393,
    "question": {
      "es": "Al utilizar el casco en un motovehículo es fundamental…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Que la correa de sujeción esté correctamente abrochada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que exteriormente no presente abolladuras, aunque haya sufrido alguna caída anterior.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que quede holgado porque así brinda mayor comodidad para conducir.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 394,
    "question": {
      "es": "Para que el uso del casco de un motovehículo cumpla su función protectora...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "La correa de sujeción debe estar siempre abrochada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Debe quedar bastante holgado, ya que resulta más cómodo para el conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe encontrarse en buenas condiciones. El modo en que se encuentra sujetado no influye en la protección que brinda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 395,
    "question": {
      "es": "¿Es igual de seguro si el casco para conducir un motovehículo está abrochado con la correa apretada al mentón o floja?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, no tiene importancia mientras que esté abrochado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. El casco debe estar abrochado pero es mejor si queda holgado ya que resulta más cómodo para el conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. El casco debe estar abrochado de modo que un dedo pueda pasar entre la correa y el mentón.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 396,
    "question": {
      "es": "Un casco de protección para motovehículos que participó en un siniestro vial, no pierde su eficacia si es que no se observan abolladuras o daños en su exterior.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 397,
    "question": {
      "es": "¿Los cascos de protección para motovehículos tienen vencimiento?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, tienen vigencia mientras se encuentren en buen estado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, la fecha la especifica el fabricante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, a los 10 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 398,
    "question": {
      "es": "¿Cómo puede saber cuál es la medida del casco de protección que corresponde al usuario de un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Midiendo la circunferencia de la cabeza a la altura de la frente y por sobre las orejas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El que sea más cómodo para el conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Midiendo la distancia desde el mentón hasta la zona superior de la cabeza.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 399,
    "question": {
      "es": "No todos los cascos de protección de motovehículos que están homologados, permiten identificar visiblemente el talle del mismo.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 400,
    "question": {
      "es": "La manera segura de utilizar el casco protector de un motociclista, es que éste quede...",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Holgado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Justo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Muy apretado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 401,
    "question": {
      "es": "Al cruzar con un motovehículo por un paso a nivel, existirá menos riesgo de caída si se atraviesa de forma que las ruedas y la vía queden como la imagen:.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a42.jpg"
  },
  {
    "id": 402,
    "question": {
      "es": "Frente a la siguiente situación, existirá menos riesgo de caída si se atraviesa con el motovehículo de forma que las ruedas y la vía formen un ángulo…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Lo más cerrado posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Lo más recto posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a43.jpg"
  },
  {
    "id": 403,
    "question": {
      "es": "En caso de un siniestro vial, el conductor de un motovehículo que utiliza todas las medidas de seguridad presenta en relación al conductor de un automóvil…",
      "en": "This statement is about traffic safety and proper driving behavior.",
      "ru": "Это утверждение о безопасности дорожного движения и правильном поведении за рулем."
    },
    "answers": [
      {
        "text": {
          "es": "Igual riesgo de resultar herido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Menor riesgo de resultar herido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mayor riesgo de resultar herido.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 404,
    "question": {
      "es": "La imagen que se visualiza representa…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "El riesgo que implica la conducción de un motovehículo porque circula a más velocidad que los automóviles.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que el motovehículo se encuentra ubicado en un punto ciego del espejo retrovisor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que el motovehículo no se encuentra ubicado en un punto ciego del espejo retrovisor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a44.jpg"
  },
  {
    "id": 405,
    "question": {
      "es": "Al acelerar un motovehículo, ¿hacia dónde se desplaza la masa?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Se distribuirá de forma pareja sobre cada rueda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hacia la rueda trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Hacia la rueda delantera pudiendo provocar, incluso, pérdida de adherencia de la rueda trasera a la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 406,
    "question": {
      "es": "Al frenar correctamente un motovehículo…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "La rueda trasera soporta el mayor esfuerzo de frenado, ya que es la directriz.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La rueda delantera soporta el mayor esfuerzo de frenado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Las dos ruedas soportan el mismo esfuerzo de frenado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 407,
    "question": {
      "es": "La posición de conducción en un motovehículo debe ser…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Lo más distante posible al centro de gravedad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En la parte más próxima al centro de gravedad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo más avanzada posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 408,
    "question": {
      "es": "La posición corporal de este acompañante no es recomendable.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a45.jpg"
  },
  {
    "id": 409,
    "question": {
      "es": "¿Cúal de las siguientes opciones muestra la posición correcta del pasajero de un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a46.jpg"
  },
  {
    "id": 410,
    "question": {
      "es": "Mientras un motovehículo está detenido, es recomendable que el acompañante…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Mantenga los pies en los apoyapies.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Coloque los pies en el suelo para contribuir al equilibrio del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Coloque un pie en el suelo y otro en el apoyapié.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 411,
    "question": {
      "es": "En general, los mandos accionados con la mano señalada son:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "El acelerador y la maneta del freno delantero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La maneta de embrague, la bocina y las luces de giro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La maneta de embrague y se acciona el acelerador.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a47.jpg"
  },
  {
    "id": 412,
    "question": {
      "es": "Generalmente, ¿qué elemento de la motocicleta se acciona con el pie señalado?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "El embrague.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El cambio de marchas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El pedal de freno de la rueda trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a48.jpg"
  },
  {
    "id": 413,
    "question": {
      "es": "Si su motovehículo dispone de mandos independientes para frenar cada rueda, uno en el manillar y otro en el pedal, ¿que rueda frena el mando situado en el manillar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La delantera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 414,
    "question": {
      "es": "En relación al peso, ¿qué debe tener en cuenta en la siguiente situación?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que la distancia de frenado será menor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que la distancia de frenado será mayor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Nada, ya que el peso de un acompañante no interviene en la conducción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a49.jpg"
  },
  {
    "id": 415,
    "question": {
      "es": "¿Cúal es la función principal del siguiente elemento?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Regular el paso de nafta del depósito a la cuba del carburador.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Regular el paso del líquido refrigerante del carburador a los cilindros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Controlar el correcto engrase y mantenimiento de los elementos del sistema de transmisión.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a50.jpg"
  },
  {
    "id": 416,
    "question": {
      "es": "En general, el cambio de velocidades de una motocicleta, ¿con qué pie se acciona?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Pie Izquierdo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Pie Derecho.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No se acciona con el pie.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 417,
    "question": {
      "es": "La postura corporal del conductor de un motovehículo, en condiciones de conducción urbana, debe ser…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Un poco forzada, porque permite mejor maniobrabilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Relajada, sin encorvar el cuerpo más de lo necesario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Encorvando el cuerpo, lo más aerodinámica posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 418,
    "question": {
      "es": "La posición corporal para conducir un motovehículo recomendada es…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Erguida y forzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Centrada y relajada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo más avanzada posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 419,
    "question": {
      "es": "¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Fríos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calientes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto, al ser de caucho se mantienen aislados de la temperatura.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 420,
    "question": {
      "es": "¿En qué momento es necesario renovar el siguiente elemento de seguridad? Cuando la profundidad del dibujo es menor de…",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "1,6 mm.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "1,0 mm.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "0,5 mm.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a51.jpg"
  },
  {
    "id": 421,
    "question": {
      "es": "¿Cuál es la rueda motriz del siguiente vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a52.jpg"
  },
  {
    "id": 422,
    "question": {
      "es": "En relación al peso transportado en este vehículo, ¿qué debe realizar el conductor antes de circular?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Adecuar la presión según indicación del fabricante del motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Duplicar la presión en las cubiertas, para tener mayor adherencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la presión en las cubiertas, para tener mayor adherencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a53.jpg"
  },
  {
    "id": 423,
    "question": {
      "es": "El siguiente elemento de seguridad, ¿debe ser sustituido?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, por otro en buen estado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que la única prohibición es circular con neumáticos que presenten cortes o deformaciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque así el vehículo se desliza mejor y consume menos combustible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a54.jpg"
  },
  {
    "id": 424,
    "question": {
      "es": "Cuando la cubierta de un motovehículo tiene más presión que la adecuada…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "El motovehículo podrá doblar mejor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El motovehículo podrá frena mejor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El motovehículo tiene menor adherencia a la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 425,
    "question": {
      "es": "¿Qué neumático sufre mayor desgaste en este vehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La opción B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a55.jpg"
  },
  {
    "id": 426,
    "question": {
      "es": "Al realizar con un motovehículo un giro muy cerrado, a una velocidad de 30 km/h, ¿qué puede suceder si en dicho giro aprieta fuertemente el freno delantero?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Nada, debido a que a esa velocidad el efecto giroscópico estabilizará el motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que la rueda delantera quede bloqueada y produzca una caída.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que la rueda trasera quede bloqueada por la fuerza cinética y se produzca una caída.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 427,
    "question": {
      "es": "Generalmente, el freno delantero de una moto se acciona con…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "La opción A.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La opción B.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a56.jpg"
  },
  {
    "id": 428,
    "question": {
      "es": "Si frena un motovehículo en línea recta y mantiene apretadas sus rodillas contra el depósito de combustible, conseguirá que…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "El motovehículo, gracias a la fuerza centrífuga, no salga de la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Su cuerpo se mantenga más estable y no se deslice hacia adelante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El freno trasero sea más eficaz que el delantero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 429,
    "question": {
      "es": "Si se tiene una distancia corta para detenerse, ¿cómo debería frenar un motovehículo para que sea seguro?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Usando sólo el freno trasero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Usando correctamente ambos frenos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Accionando fuertemente el freno delantero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 430,
    "question": {
      "es": "Según la Ley 2148, ¿los motovehículos deben estar provistos de un dispositivo que asegure un frenado eficaz, rápido o progresivo en TODAS las ruedas?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí. Aplica a todos los modelos independientemente al número de ruedas que tenga.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, salvo los triciclos y cuatriciclos a quienes la Ley los exceptúa de que sea en todas sus ruedas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, salvo los ciclomotores que tienen dicha obligación en la rueda trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 431,
    "question": {
      "es": "Es obligatorio que los motovehículos tengan…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Un dispositivo que asegure el frenado en todas las ruedas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Un único freno, en la parte trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Un único freno, en la parte delantera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 432,
    "question": {
      "es": "En un motovehículo, la distancia del asiento al piso…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Incide en la estabilidad y el equilibrio.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No tiene relevancia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es fundamental para el frenado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 433,
    "question": {
      "es": "Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado, ¿puede afectar esta anomalía la conducción?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en la conducción.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, puede afectar al correcto control del vehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el contacto adecuado de las ruedas con la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 434,
    "question": {
      "es": "Si tiene que conducir un motovehículo por una zona resbaladiza, ¿qué precauciones debe tomar?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Frenar en la zona para controlar la trayectoria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Acelerar para pasar por la zona en el menor tiempo posible.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Disminuir la velocidad antes de llegar y mantener la moto vertical al pasar sobre ella.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 435,
    "question": {
      "es": "Si al conducir un motovehículo, usted sufre una caída que no le produce lesión alguna, ¿qué comportamiento debería adoptar si desea proseguir el viaje?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Reanudar inmediatamente la marcha para no entorpecer la circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Esperar por lo menos una hora antes de reanudar la marcha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Antes de continuar circulando, realizar las comprobaciones necesarias para valorar el estado en el que se encuentra el motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 436,
    "question": {
      "es": "Frente a la siguiente situación, ¿qué posición debe adoptar el acompañante de un motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "La misma que adopte el conductor pero anticipándose a él.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La contraria a la que adopte el conductor, para así contrarrestar la fuerza centrífuga.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La misma posición e inclinación que adopte el conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a57.jpg"
  },
  {
    "id": 437,
    "question": {
      "es": "Si un motovehículo dispone de 2 baúles laterales para llevar carga, ¿cómo es recomendable utilizarlas?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Cargarlas, de modo que ambas maletas queden aproximadamente con el mismo peso, para colaborar con la estabilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cargar más la maleta del lado derecho, para contrarrestar el peso al realizar un sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cargar con más peso el baúl del lado izquierdo, para favorecer la reincorporación en caso de realizar un sobrepaso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 438,
    "question": {
      "es": "Este motociclista y sus acompañantes están circulando de manera segura y correcta.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a58.jpg"
  },
  {
    "id": 439,
    "question": {
      "es": "La manera de circular de esta niña de 5 años es incorrecta.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a59.jpg"
  },
  {
    "id": 440,
    "question": {
      "es": "Según la Ley 2148, el niño de 10 años de edad que se observa detrás del conductor, se encuentra circulando de manera segura y correcta.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a60.jpg"
  },
  {
    "id": 441,
    "question": {
      "es": "El niño que se observa delante del conductor, se encuentra circulando de manera segura y correcta.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a61.jpg"
  },
  {
    "id": 442,
    "question": {
      "es": "Según la Ley 2148, ¿es correcta la manera de circular del acompañante?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero sólo cuando el conductor sea el padre, la madre o tutor encargado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre y cuando utilice un casco adecuado a su talla y no se interponga en el campo visual del conductor.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque los acompañantes deben ser mayores de 16 años y circular en el asiento trasero.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a62.jpg"
  },
  {
    "id": 443,
    "question": {
      "es": "Este niño, menor de 12 años, circula de manera segura y correcta ya que está utilizando un sistema de retención infantil (SRI).",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a63.jpg"
  },
  {
    "id": 444,
    "question": {
      "es": "La Ley de tránsito en Argentina exige el uso de Dispositivos de Retención Infantil (SRI) para llevar menores de edad en motovehículos.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 445,
    "question": {
      "es": "En un motovehículo pueden circular hasta dos personas, sólo si cuenta con doble asiento, reposapiés y agarradera.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 446,
    "question": {
      "es": "Para circular en C.A.B.A., ¿el conductor de un motovehículo está obligado a llevar el número de la patente impreso en el chaleco reflectivo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, en la parte delantera y trasera.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. El uso del chaleco es obligatorio pero no la impresión de la patente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Sólo es obligatorio para el acompañante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 447,
    "question": {
      "es": "En relación al chaleco reflectante y de acuerdo al Código de Tránsito y Transporte de CABA, ¿es correcta la manera de circular observada en la siguiente imagen?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, su uso es obligatorio sólo en caso de escasa visibilidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, su uso es obligatorio sólo si se circula en la zona del Microcentro porteño..",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, su uso es obligatorio para el acompañante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a64.jpg"
  },
  {
    "id": 448,
    "question": {
      "es": "Según el Código de Tránsito y Transporte de CABA, los conductores de motovehículos son responsables…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "De que su eventual acompañante no posea antecedentes penales.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "De que su eventual acompañante utilice el casco protector homologado o certificado, el chaleco reflectante con el número de dominio impreso y que no tenga un dosaje de alcohol superior a 0,5 g/l de sangre.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas (A y B) son correctas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 449,
    "question": {
      "es": "El conductor de un motovehículo, ¿es responsable de que el acompañante que traslada tenga debidamente colocado el casco protector?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque cada persona adulta es responsable de sus propios actos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si es menor de edad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque es responsable de lo que respecta a ese vehículo y sus usuarios.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 450,
    "question": {
      "es": "En relación a los elementos de seguridad obligatorios de un motociclista, ¿qué deben hacer los agentes de control de tránsito frente a esta situación?",
      "en": "Which option is correct regarding traffic safety?",
      "ru": "Какой вариант является правильным в отношении безопасности дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Deben labrar un acta de infracción al motociclista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Deben labrar un acta de infracción al motociclista y retener el motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Deben labrar un acta de infracción al motociclista, retener la licencia de conducir y remitir el motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a65.jpg"
  },
  {
    "id": 451,
    "question": {
      "es": "Según la Ley 2148, el acompañante de un motovehículo…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Debe circular con el casco con la numeración del dominio, correctamente colocado.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe circular con el casco correctamente colocado y un chaleco reflectante; ambos deberán tener el número de dominio del motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe circular con el casco correctamente colocado y un chaleco reflectante con el número de dominio del motovehículo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 452,
    "question": {
      "es": "La edad mínima para obtener una licencia de conducir motovehículos, excepto ciclomotores, es de 17 años.",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 453,
    "question": {
      "es": "¿Cuál es la edad mínima que se requiere para obtener la licencia de conducir ciclomotores?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "18 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "16 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "21 años.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 454,
    "question": {
      "es": "Según la Ley Nº 2148, ¿está permitido el faro delantero de este motovehículo?",
      "en": "Which of the following options is correct according to traffic regulations?",
      "ru": "Какой из следующих вариантов является правильным согласно правилам дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que debería tener dos faros.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que debería ser blanco.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que la Ley sólo indica la obligación del uso de un faro pero no especifica su color.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/a66.jpg"
  },
  {
    "id": 455,
    "question": {
      "es": "¿Qué tipo de señal es la siguiente imagen?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Senda peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Personas trabajando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cruce peatonal de máximo peligro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b72.jpg"
  },
  {
    "id": 456,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibido estacionar por la existencia de un aeropuerto cercano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibido estacionar y detenerse por la existencia de un aeropuerto cercano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b223.jpg"
  },
  {
    "id": 457,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Proximidad de bosques.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zonas de palmeras.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Vientos fuertes laterales.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b224.jpg"
  },
  {
    "id": 458,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Cruce de jinetes.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de circular con animales.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Camino peligroso por presencia de animales sueltos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b225.jpg"
  },
  {
    "id": 459,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Camino resbaladizo.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Camino sinuoso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Camino cuesta arriba.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b226.jpg"
  },
  {
    "id": 460,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Aproximación a un puente levadizo, rotatorio o flotante.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Presencia de un puente de menor ancho que el resto de la vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Proximidad de un paso a nivel.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b227.jpg"
  },
  {
    "id": 461,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de doble mano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Estrechamiento (en una sola mano).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Encrucijada (bifurcación).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b228.jpg"
  },
  {
    "id": 462,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de doble mano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Encrucijada (bifurcación).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estrechamiento (en una sola mano).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b229.jpg"
  },
  {
    "id": 463,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Túnel.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Puente angosto.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Altura mínima.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b230.jpg"
  },
  {
    "id": 464,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Encrucijada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cruce de caminos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Incorporación de tránsito lateral.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b231.jpg"
  },
  {
    "id": 465,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de doble circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Camino sinuoso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b232.jpg"
  },
  {
    "id": 466,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Rotonda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Peligro extremo de rotonda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Preferencia de avance.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b233.jpg"
  },
  {
    "id": 467,
    "question": {
      "es": "¿Qué indica esta señal preventiva?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica que circulamos por una zona selvática.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica que por la vía en la que se circula, la calzada presenta irregularidades.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b234.jpg"
  },
  {
    "id": 468,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Niños jugando.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona escolar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calle peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b235.jpg"
  },
  {
    "id": 469,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Estrechamiento (en las dos manos).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Inicio doble mano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b236.jpg"
  },
  {
    "id": 470,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Estrechamiento (en una mano).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Estrechamiento (en las dos manos).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b237.jpg"
  },
  {
    "id": 471,
    "question": {
      "es": "Determine qué indica la señal vertical que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Cruce de peatones (Peligro máximo).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Peatones a la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de circular. Zona exclusiva peatonal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b238.jpg"
  },
  {
    "id": 472,
    "question": {
      "es": "¿Cuál de estas señales indica “Cruce de Peatones (máximo peligro)”?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "La señal A.",
          "en": "Sign A.",
          "ru": "Знак A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La señal B.",
          "en": "Sign B.",
          "ru": "Знак B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal C.",
          "en": "Sign C.",
          "ru": "Знак C."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b239.jpg"
  },
  {
    "id": 473,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Cruce ferroviario.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estación ferroviaria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circulación exclusiva (ferrocarril).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b240.jpg"
  },
  {
    "id": 474,
    "question": {
      "es": "Al visualizar esta señal de prevención, usted sabe que:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Se advierte la aproximación de una curva con pendiente ascendente.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se aproxima una curva cerrada.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se aproxima un camino sinuoso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b241.jpg"
  },
  {
    "id": 475,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Cruce Ferroviario (Más de dos vías).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estación Ferroviaria.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Atención a Ferrocarril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b242.jpg"
  },
  {
    "id": 476,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Paneles de prevención.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de circular.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducción de velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b243.jpg"
  },
  {
    "id": 477,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Panel de Prevención (Objeto Rígido).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calzada Reducida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Contramano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b244.jpg"
  },
  {
    "id": 478,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Cruce Ferroviario (por la derecha).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de Girar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Panel de Prevención (Curva).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b245.jpg"
  },
  {
    "id": 479,
    "question": {
      "es": "La señal que se muestra es una señal preventiva, de máximo peligro, que anuncia la existencia de un tramo de vía con fuerte pendiente descendente.",
      "en": "Sign q.",
      "ru": "Знак q."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b246.jpg"
  },
  {
    "id": 480,
    "question": {
      "es": "Frente a esta señal, ¿qué sucede con la prioridad de avance en esa vía?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Se tiene la prioridad de avance.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se pierde la prioridad de avance.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Esta señal no es indicativa de prioridad de avance.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b247.jpg"
  },
  {
    "id": 481,
    "question": {
      "es": "¿Qué significa esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica la prohibición de estacionamiento en el frente de entidades bancarias.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica la prohibición de circulación de vehículos sin permiso de ingreso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b248.jpg"
  },
  {
    "id": 482,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Que existe la opción de doblar hacia la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que hay un giro obligatorio hacia la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que se aproxima una curva peligrosa con inclinación hacia la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b249.jpg"
  },
  {
    "id": 483,
    "question": {
      "es": "La señal representada precede a una intersección con la OBLIGACIÓN de girar a la derecha.",
      "en": "Sign r.",
      "ru": "Знак r."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b250.jpg"
  },
  {
    "id": 484,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No avanzar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de doble mano.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de sentido único.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b251.jpg"
  },
  {
    "id": 485,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Sobrepasos por la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circulación exclusiva (camión).",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Tránsito pesado a la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b252.jpg"
  },
  {
    "id": 486,
    "question": {
      "es": "Esta señal vertical reglamentaria indica…",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Que es un carril preferencial para ciclistas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es un carril de uso exclusivo para ciclistas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que los ciclistas no pueden circular por este carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b253.jpg"
  },
  {
    "id": 487,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Que sólo está permitido circular en bicicleta a partir de donde se encuentra la señal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que comienza una ciclovía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b254.jpg"
  },
  {
    "id": 488,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo no puede continuar su marcha sin detenerse.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Presencia de reductor de velocidad.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de sentido opuesto de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b255.jpg"
  },
  {
    "id": 489,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de calle de convivencia.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los peatones no deben circular por esa zona.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los peatones deben circular obligatoriamente por la derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b256.jpg"
  },
  {
    "id": 490,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica que el carril sobre el que se encuentra la señal, no puede ser utilizado por motocicletas y ciclomotores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para bicicletas.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b257.jpg"
  },
  {
    "id": 491,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регулирующим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Que no se puede circular a una velocidad inferior a 35 km/h en esa vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que la velocidad máxima es de 35 km/h en esa vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que la velocidad precautoria es de 35 km/h en esa vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b258.jpg"
  },
  {
    "id": 492,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Prohibición de Girar a la Derecha.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de Cambiar de Carril.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de Adelantar.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b259.jpg"
  },
  {
    "id": 493,
    "question": {
      "es": "La señal que se muestra indica un camino sin salida:",
      "en": "Sign q.",
      "ru": "Знак q."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b260.jpg"
  },
  {
    "id": 494,
    "question": {
      "es": "Indique qué representa la siguiente señal:",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Dirección obligatoria en ambos sentidos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dirección permitida en ambos sentidos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Giros permitidos.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b261.jpg"
  },
  {
    "id": 495,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Desvío por cambio de sentido de circulación.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cruce Peligroso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b262.jpg"
  },
  {
    "id": 496,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Comienzo de autopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Comienzo de ruta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de semiautopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b263.jpg"
  },
  {
    "id": 497,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "This statement is related to traffic safety and driving regulations.",
      "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
    },
    "answers": [
      {
        "text": {
          "es": "Fin de semiautopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Fin de ruta.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Fin de autopista.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b264.jpg"
  },
  {
    "id": 498,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Permitido girar hacia la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dirección obligatoria hacia la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dirección permitida hacia la izquierda.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b265.jpg"
  },
  {
    "id": 499,
    "question": {
      "es": "Esta señal advierte que en el lugar ocurrió un siniestro vial que produjo una víctima fatal.",
      "en": "This statement is about traffic accidents and their causes.",
      "ru": "Это утверждение о дорожно-транспортных происшествиях и их причинах."
    },
    "answers": [
      {
        "text": {
          "es": "Verdadero.",
          "en": "True.",
          "ru": "Верно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Falso.",
          "en": "False.",
          "ru": "Неверно."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b266.jpg"
  },
  {
    "id": 500,
    "question": {
      "es": "¿Qué indica esta señal vertical de información?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Una encrucijada peligrosa.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La existencia de un puesto sanitario o de socorro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La existencia de un templo religioso.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b267.jpg"
  },
  {
    "id": 501,
    "question": {
      "es": "¿A qué punto de referencia hace alusión la señal que a continuación se presenta?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Servicio mecánico.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Gomería.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estación de servicio.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b268.jpg"
  },
  {
    "id": 502,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Existencia de un teatro, en las inmediaciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de estacionar en la puerta de un teatro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de detenerse en la puerta de un teatro.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b269.jpg"
  },
  {
    "id": 503,
    "question": {
      "es": "¿Qué significa esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibición de estacionar en la entrada de terminal de ómnibus.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Existencia de terminal de ómnibus, en las inmediaciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de detenerse en la entrada de terminal de ómnibus.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b270.jpg"
  },
  {
    "id": 504,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibición de detenerse en las inmediaciones a la plaza.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de estacionar en las inmediaciones a la plaza.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Existencia de una plaza, en las inmediaciones.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b271.jpg"
  },
  {
    "id": 505,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Se encuentra permitido detenerse en esa vía.",
          "en": "This statement is related to traffic safety and driving regulations.",
          "ru": "Это утверждение связано с безопасностью дорожного движения и правилами вождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Existencia de un estacionamiento vehicular, en las inmediaciones.",
          "en": "Existence of a vehicle parking area in the vicinity.",
          "ru": "Наличие парковки для транспортных средств поблизости."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se encuentra permitido estacionar en esa vía.",
          "en": "Parking is allowed on this road.",
          "ru": "Парковка разрешена на этой дороге."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b272.jpg"
  },
  {
    "id": 506,
    "question": {
      "es": "¿Cuál de la tres señales indica que la ruta es provincial?",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "La señal A.",
          "en": "Sign A.",
          "ru": "Знак A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal B.",
          "en": "Sign B.",
          "ru": "Знак B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La señal C.",
          "en": "Sign C.",
          "ru": "Знак C."
        },
        "correct": true
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b273.jpg"
  },
  {
    "id": 507,
    "question": {
      "es": "Indique qué significa esta señal:",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Ruta Nacional N°5.",
          "en": "National Route No. 5.",
          "ru": "Национальный маршрут № 5."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ruta Provincial N°5.",
          "en": "Provincial Route No. 5.",
          "ru": "Провинциальный маршрут № 5."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ruta Panamericana N°5.",
          "en": "Pan-American Route No. 5.",
          "ru": "Панамериканский маршрут № 5."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b274.jpg"
  },
  {
    "id": 508,
    "question": {
      "es": "Indique qué significa esta señal:",
      "en": "Which of these traffic signs is shown in the image?",
      "ru": "Какой из этих дорожных знаков показан на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Ruta Nacional N°3.",
          "en": "National Route No. 3.",
          "ru": "Национальный маршрут № 3."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ruta Provincial N°3.",
          "en": "Provincial Route No. 3.",
          "ru": "Провинциальный маршрут № 3."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ruta Panamericana N°3.",
          "en": "Pan-American Route No. 3.",
          "ru": "Панамериканский маршрут № 3."
        },
        "correct": false
      }
    ],
    "image": "https://www.testdeconducir.com.ar/images/preguntas/b275.jpg"
  }
];
