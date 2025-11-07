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
      "en": "According to the World Health Organization, the following issue is categorized as a 'pandemic' as it constitutes the tenth leading cause of death worldwide.",
      "ru": "Согласно Всемирной организации здравоохранения, следующая проблема классифицируется как 'пандемия', так как является десятой причиной смерти во всем мире."
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
    "image": "/questions/b1.jpg"
  },
  {
    "id": 2,
    "question": {
      "es": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., ¿cuál es el rango etario con mayor número de víctimas lesionadas y fatales en siniestros viales?",
      "en": "According to the latest statistics from the Road Observatory of the City of Buenos Aires, what is the age range with the highest number of injured and fatal victims in traffic accidents?",
      "ru": "Согласно последним статистическим данным Дорожной службы города Буэнос-Айрес, какой возрастной группе соответствует наибольшее количество пострадавших и погибших в дорожных происшествиях?"
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
          "en": "Young people and adults aged 15 to 34 years.",
          "ru": "Молодежь и взрослые от 15 до 34 лет."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Adultos mayores de 35 años.",
          "en": "Adults over 35 years old.",
          "ru": "Пожилые люди старше 35 лет."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 3,
    "question": {
      "es": "Según las últimas estadísticas del Observatorio Vial de la Ciudad de Bs. As., la tasa más alta de víctimas fatales como consecuencia de incidentes de tránsito (luego de los peatones) son los usuarios de:",
      "en": "According to the latest statistics from the Road Observatory of the City of Buenos Aires, the highest rate of fatal victims as a result of traffic incidents (after pedestrians) are users of:",
      "ru": "Согласно последним статистическим данным Дорожной службы города Буэнос-Айрес, наивысший уровень смертности в результате дорожно-транспортных происшествий (после пешеходов) наблюдается среди пользователей:"
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
    "image": "/questions/b2.jpg"
  },
  {
    "id": 4,
    "question": {
      "es": "La Organización Mundial de la Salud manifiesta que el riesgo en la vía pública surge como resultado de diversos factores, ¿cuáles son?",
      "en": "The World Health Organization states that the risk on public roads arises from various factors, what are they?",
      "ru": "Всемирная организация здравоохранения утверждает, что риск на общественных дорогах возникает в результате различных факторов, какие это факторы?"
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
          "en": "Human, Vehicular, and Environmental.",
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
      "en": "What factor is responsible for most traffic accidents?",
      "ru": "Какому фактору подвержено большинство дорожно-транспортных происшествий?"
    },
    "answers": [
      {
        "text": {
          "es": "Al humano.",
          "en": "Human.",
          "ru": "Человеческому."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al vehicular.",
          "en": "Vehicular.",
          "ru": "Транспортному."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al ambiental.",
          "en": "Environmental.",
          "ru": "Экологическому."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 6,
    "question": {
      "es": "A fin de aumentar la propia seguridad y la de los demás, ¿a qué se debería poner atención durante la circulación?",
      "en": "In order to increase one's own safety and that of others, what should be paid attention to while driving?",
      "ru": "Чтобы повысить собственную безопасность и безопасность других, на что следует обратить внимание во время движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Al estado del pavimento y al clima, en especial.",
          "en": "The condition of the pavement and the weather, in particular.",
          "ru": "На состояние д��рожного покрытия и погоду, в частности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A las condiciones en que se encuentran: el automóvil, la infraestructura vial, las condiciones climáticas y el conductor.",
          "en": "The conditions of: the car, the road infrastructure, the weather conditions, and the driver.",
          "ru": "На условия, в которых находятся: автомобиль, дорожная инфраструктура, погодные условия и водитель."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ninguna de las anteriores.",
          "en": "None of the above.",
          "ru": "Ничего из вышеперечисленного."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 7,
    "question": {
      "es": "El factor ambiental es el principal factor de riesgo ya que las colisiones, en su mayoría, se deben a las condiciones meteorológicas o del camino",
      "en": "The environmental factor is the main risk factor as collisions, for the most part, are due to weather or road conditions.",
      "ru": "Экологический фактор является основным фактором риска, так как столкновения в большинстве случаев происходят из-за погодных условий или состояния дороги."
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
      "en": "Generally, mechanical failures are due to negligent behaviors on the part of vehicle owners, who do not take care of checking the condition of their car.",
      "ru": "Как правило, механические неисправности происходят из-за небрежного поведения владельцев транспортных средств, которые не заботятся о проверке состояния своего автомобиля."
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
      "en": "What is referred to as a traffic incident or road incident?",
      "ru": "Что такое дорожно-транспортное происшествие или инцидент на дороге?"
    },
    "answers": [
      {
        "text": {
          "es": "Hecho que puede ser evitado, en el cual se produce daño a persona o cosa, en ocasión de circulación en la vía pública.",
          "en": "An event that can be avoided, in which damage occurs to a person or thing, while circulating on public roads.",
          "ru": "Событие, которое можно предотвратить, в результате которого причиняется в��ед человеку или имуществу во время движения по общественным дорогам."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Hecho impredecible e inevitable en ocasión de circulación en la vía pública.",
          "en": "An unpredictable and unavoidable event while circulating on public roads.",
          "ru": "Непредсказуемое и неизбежное событие во время движения по общественным дорогам."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hecho, evitable o no, que involucra daños a terceros.",
          "en": "An event, whether avoidable or not, that involves damage to third parties.",
          "ru": "Событие, которое может быть предотвращено или нет, и которое включает в себя ущерб третьим лицам."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 10,
    "question": {
      "es": "¿De qué se trata el “Programa Visión Cero” creado en 1997 en Suecia?",
      "en": "What is the 'Vision Zero' Program created in 1997 in Sweden about?",
      "ru": "О чем идет речь в программе \"Нулевая видимость\", созданной в 1997 году в Швеции?"
    },
    "answers": [
      {
        "text": {
          "es": "Principio ético que establece que no debería existir ningún vehículo particular circulando por calles, ni avenidas urbanas; ya que son los causantes de las víctimas fatales en siniestros de tránsito.",
          "en": "An ethical principle that establishes that there should be no private vehicles circulating on streets or urban avenues; as they are the cause of fatal victims in traffic accidents.",
          "ru": "Этический принцип, который утверждает, что не должно быть ни одного частного автомобиля, движущегося по улицам или городским проспектам; так как они являются причиной смертей в дорожно-транспортных происшествиях."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Principio ético que establece que nadie debería morir ni sufrir lesiones permanentes en siniestros de tránsito.",
          "en": "An ethical principle that establishes that no one should die or suffer permanent injuries in traffic accidents.",
          "ru": "Этический принцип, который утверждает, что никто не должен умирать или получать постоянные травмы в результате дорожно-транспортных происшествий."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Principio ético que busca mejorar la velocidad en el tránsito, al no encontrarse con imprevistos en la vía.",
          "en": "An ethical principle that seeks to improve speed in traffic, by not encountering unforeseen events on the road.",
          "ru": "Этический принцип, который стремится улучшить скорость движения, избегая неожиданных ситуаций на дороге."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 11,
    "question": {
      "es": "“Cada usuario de la vía pública es responsable de una parte del tránsito.” ¿Es correcta ésta premisa?",
      "en": "\"Every user of public roads is responsible for a part of traffic.\" Is this premise correct?",
      "ru": "“Каждый пользователь общественной дороги несет ответственность за часть движения.” Является ли это утверждение правильным?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque los que tienen responsabilidad son aquellos que conducen cualquier tipo de vehículo.",
          "en": "No, because those who are responsible are those who drive any type of vehicle.",
          "ru": "Нет, потому что ответственность несут те, кто управляет любым видом транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, la responsabilidad la asumen aquellos que obtienen una licencia de conducir.",
          "en": "No, responsibility is assumed by those who obtain a driver's license.",
          "ru": "Нет, ответственность берут на себя те, кто получает водительские права."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque se está obligado a no causar peligro ni entorpecer la circulación.",
          "en": "Yes, because one is obliged not to cause danger or hinder traffic.",
          "ru": "Да, потому что обязаны не создавать опасности и не препятствовать движению."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 12,
    "question": {
      "es": "“Como usuarios de la vía pública estamos obligados a no entorpecer injustificadamente la circulación y a no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.” ¿Es correcta esta premisa?",
      "en": "\"As users of public roads, we are obliged not to unjustifiably hinder traffic and not to cause danger, harm, or unnecessary inconvenience to people or damage to property.\" Is this premise correct?",
      "ru": "“Как пользователи общественной дороги, мы обязаны не препятствовать движению без уважительной причины и не создавать опасности, ущерба или ненужных неудобств людям или повреждений имуществу.” Является ли это утверждение правильным?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, independientemente del tipo de movilidad elegido.",
          "en": "Yes, regardless of the type of mobility chosen.",
          "ru": "Да, независимо от выбранного вида передвижения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, los peatones son usuarios de la vía pública y no están obligados.",
          "en": "No, pedestrians are users of public roads and are not obliged.",
          "ru": "Нет, пешеходы являются пользователями общественной дороги и не обязаны."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí pero sólo si estamos conduciendo un vehículo.",
          "en": "Yes, but only if we are driving a vehicle.",
          "ru": "Да, но только если мы управляем транспортным средством."
        },
        "correct": false
      }
    ],
    "image": "/questions/b2.jpg"
  },
  {
    "id": 13,
    "question": {
      "es": "Además de provocar víctimas fatales o lesionados graves, ¿qué otras consecuencias puede generar un siniestro de tránsito?",
      "en": "In addition to causing fatalities or serious injuries, what other consequences can a traffic accident generate?",
      "ru": "Кроме того, что может привести к смертельным случаям или серьезным травмам, какие другие последствия может вызвать дорожно-транспортное происшествие?"
    },
    "answers": [
      {
        "text": {
          "es": "Daños materiales, costos sanitarios y administrativos.",
          "en": "Material damages, health and administrative costs.",
          "ru": "Материальный ущерб, медицинские и административные расходы."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Daños materiales y costos sanitarios.",
          "en": "Material damages and health costs.",
          "ru": "Материальный ущерб и медицинские расходы."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo daños materiales.",
          "en": "Only material damages.",
          "ru": "Только материальный ущерб."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 14,
    "question": {
      "es": "Todo usuario de la vía pública debe, como premisa básica…",
      "en": "Every user of public roads must, as a basic premise…",
      "ru": "Каждый пользователь общественной дороги должен, как основное правило…"
    },
    "answers": [
      {
        "text": {
          "es": "Asumir la obligación de no entorpecer la circulación y no causar peligro, perjuicios o molestias innecesarias a las personas o daños a los bienes.",
          "en": "Assume the obligation not to obstruct traffic and not to cause danger, harm, or unnecessary inconvenience to people or damage to property.",
          "ru": "Брать на себя обязательство не препятствовать движению и не создавать опасности, ущерба или ненужных неудобств людям или ущер��а имуществу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Acreditar experiencia de manejo en vehículos por más de un año.",
          "en": "Demonstrate driving experience in vehicles for more than one year.",
          "ru": "Подтвердить опыт вождения транспортными средствами более одного года."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Concurrir a cursos de actualización en temática vial, con una frecuencia no mayor a seis meses.",
          "en": "Attend updating courses on road topics, with a frequency not greater than six months.",
          "ru": "Посещать курсы повышения квалификации по дорожной тематике с частотой не более одного раза в шесть месяцев."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 15,
    "question": {
      "es": "Los ciclistas no están obligados a respetar todas las normas de tránsito, ya que no utilizan un vehículo que genera altas velocidades.",
      "en": "Cyclists are not required to comply with all traffic regulations, as they do not use a vehicle that generates high speeds.",
      "ru": "Велосипедисты не обязаны соблюдать все правила дорожного движения, так как не используют транспортное средство, которое развивает высокие скорости."
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
      "en": "What law governs when circulating in the City of Buenos Aires?",
      "ru": "Какой закон регулирует движение по городу Буэнос-Айрес?"
    },
    "answers": [
      {
        "text": {
          "es": "La Ley Nacional N° 24.449.",
          "en": "National Law No. 24,449.",
          "ru": "Национальный закон № 24.449."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La Ley de la Ciudad N° 2.148.",
          "en": "City Law No. 2,148.",
          "ru": "Закон города № 2.148."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 17,
    "question": {
      "es": "¿A qué se denomina Movilidad Sustentable?",
      "en": "What is referred to as Sustainable Mobility?",
      "ru": "Что такое Устойчивое Передвижение?"
    },
    "answers": [
      {
        "text": {
          "es": "Forma de trasladarnos de manera más efectiva, priorizando el uso del vehículo particular.",
          "en": "A way of moving more effectively, prioritizing the use of private vehicles.",
          "ru": "Способ передвижения более эффективно, придавая приоритет использованию личного транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Forma de trasladarnos de manera más rápida, independientemente del tipo de movilidad elegida.",
          "en": "A way of moving more quickly, regardless of the type of mobility chosen.",
          "ru": "Способ передвижения более быстро, независимо от выбранного типа передвижения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Forma de trasladarnos de manera rápida, segura y ordenada; haciendo hincapié en los peatones y ciclistas y contribuyendo a una mejor calidad ambiental.",
          "en": "A way of moving quickly, safely, and orderly; emphasizing pedestrians and cyclists and contributing to better environmental quality.",
          "ru": "Способ передвижения быстро, безопасно и упорядоченно; акцентируя внимание на пешеходах и велосипедистах и способствуя улучшению качества окружающей среды."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 18,
    "question": {
      "es": "¿Cuáles son los dos principios básicos de todo sistema de tránsito en el mundo?",
      "en": "What are the two basic principles of every traffic system in the world?",
      "ru": "Каковы два основных принципа любой транспортной системы в мире?"
    },
    "answers": [
      {
        "text": {
          "es": "Velocidad y confort.",
          "en": "Speed and comfort.",
          "ru": "Скорость и комфорт."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Fluidez y seguridad.",
          "en": "Fluidity and safety.",
          "ru": "Плавность и безопасность."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Comodidad y Agilidad.",
          "en": "Comfort and Agility.",
          "ru": "Удобство и быстрота."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 19,
    "question": {
      "es": "Indique cuál es la premisa correcta:",
      "en": "Indicate which is the correct premise:",
      "ru": "Укажите, какое утверждение верно:"
    },
    "answers": [
      {
        "text": {
          "es": "Al tener más alternativas de movilidad no motorizada, como el uso de bicicleta, mayor es la probabilidad de siniestralidad.",
          "en": "Having more alternatives for non-motorized mobility, such as using a bicycle, increases the probability of accidents.",
          "ru": "При наличии большего количества альтернатив немоторизованного передвижения, таких как использование велосипеда, вероятность дорожно-транспортных происшествий выше."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al disminuir la cantidad de vehículos particulares, mayor es la probabilidad de siniestralidad.",
          "en": "By decreasing the number of private vehicles, the probability of accidents increases.",
          "ru": "При уменьшении количества личных транспортных средств вероятность дорожно-транспортных происшествий выше."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A mayor cantidad de vehículos motorizados, mayor probabilidad de siniestralidad.",
          "en": "The greater the number of motorized vehicles, the greater the probability of accidents.",
          "ru": "При большем ко��ичестве моторизованных транспортных средств вероятность дорожно-транспортных происшествий выше."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 20,
    "question": {
      "es": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
      "en": "Indicate which of the following situations carries a higher probability of accidents.",
      "ru": "Укажите, какая из следующих ситуаций имеет большую вероятность дорожно-транспортных происшествий"
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
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/b3.jpg"
  },
  {
    "id": 21,
    "question": {
      "es": "Indique cuál de las siguientes situaciones conlleva mayor probabilidad de siniestralidad",
      "en": "Indicate which of the following situations carries a higher probability of accidents.",
      "ru": "Укажите, какая из следующих ситуаций имеет большую вероятность дорожно-транспортных происшествий"
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
          "en": "It is indifferent.",
          "ru": "Это не имеет значения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b4.jpg"
  },
  {
    "id": 22,
    "question": {
      "es": "Indique cuál es la premisa correcta:",
      "en": "Indicate which is the correct premise:",
      "ru": "Укажите, какое утверждение верно:"
    },
    "answers": [
      {
        "text": {
          "es": "A menor cantidad de vehículos, mayor probabilidad de siniestralidad.",
          "en": "With fewer vehicles, the greater the probability of accidents.",
          "ru": "При меньшем количестве транспортных средств вероятность дорожно-транспортных происшествий выше."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A mayor cantidad de vehículos, menor probabilidad de siniestralidad.",
          "en": "With more vehicles, the lower the probability of accidents.",
          "ru": "При большем количестве транспортных средств вероятность дорожно-транспортных происшествий ниже."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A menor cantidad de vehículos, menor probabilidad de siniestralidad.",
          "en": "With fewer vehicles, the lower the probability of accidents.",
          "ru": "При меньшем количестве транспортных средств вероятность дорожно-транспортных происшествий ниже."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 23,
    "question": {
      "es": "¿Cuál de las siguientes opciones representa a los usuarios de la vía, ordenados de más a menos vulnerable?",
      "en": "Which of the following options represents road users, ordered from most to least vulnerable?",
      "ru": "Какой из следующих вариантов представляет пользователей дороги, упорядоченных от более уязвимых к менее уязвимым?"
    },
    "answers": [
      {
        "text": {
          "es": "Camión - Colectivo - Moto - Ciclista - Peatón - Taxi/Automóvil.",
          "en": "Truck - Bus - Motorcycle - Cyclist - Pedestrian - Taxi/Car.",
          "ru": "Грузовик - Автобус - Мотоцикл - Велосипедист - Пешеход - Такси/Легковой автомобиль."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Peatón - Ciclista - Moto - Colectivo - Taxi/Automóvil - Camión.",
          "en": "Pedestrian - Cyclist - Motorcycle - Bus - Taxi/Car - Truck.",
          "ru": "Пешеход - Велосипедист - Мотоцикл - Автобус - Такси/Легковой автомобиль - Грузовик."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Peatón - Ciclista - Colectivo - Moto - Taxi/Automóvil - Camión.",
          "en": "Pedestrian - Cyclist - Bus - Motorcycle - Taxi/Car - Truck.",
          "ru": "Пешеход - Велосипедист - Автобус - Мотоцикл - Такси/Легковой автомобиль - Грузовик."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 24,
    "question": {
      "es": "¿A qué medio de transporte corresponden todos los siguientes beneficios: ecológico, saludable, económico y rápido?",
      "en": "To which mode of transport do all the following benefits correspond: ecological, healthy, economical, and fast?",
      "ru": "Какому виду транспорта соответствуют все следующие преимущества: экологичность, здоровье, экономичность и быстрота?"
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
    "image": "/questions/b5.jpg"
  },
  {
    "id": 25,
    "question": {
      "es": "¿Es aconsejable circular en bicicleta de esta manera?",
      "en": "Is it advisable to ride a bicycle this way?",
      "ru": "Рекомендуется ли передвигаться на велосипеде таким образом?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque está conduciendo correctamente.",
          "en": "Yes, because you are driving correctly.",
          "ru": "Да, потому что вы управляете правильно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que utilizar auriculares es un factor de distracción que impide conectarse con lo que sucede alrededor.",
          "en": "No, as using headphones is a distraction factor that prevents connecting with what is happening around.",
          "ru": "Нет, так как использование наушников является фактором отвлечения, который мешает сосредоточиться на том, что происходит вокруг."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que tiene las medidas de seguridad necesarias y el uso de los auriculares permite mejorar la calidad del viaje.",
          "en": "Yes, since it has the necessary safety measures and the use of headphones improves the quality of the trip.",
          "ru": "Да, так как у него есть необходимые меры безопасности, и использование наушников позволяет улучшить качество поездки."
        },
        "correct": false
      }
    ],
    "image": "/questions/b6.jpg"
  },
  {
    "id": 26,
    "question": {
      "es": "En cuanto a su indumentaria, ¿cuál de los dos ciclistas presenta menor riesgo de sufrir un siniestro vial?",
      "en": "Regarding their clothing, which of the two cyclists presents a lower risk of suffering a traffic accident?",
      "ru": "Что касается их одежды, какой из двух велосипедистов имеет меньший риск попасть в дорожное происшествие?"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A, ya que al tener ropa clara es más visible.",
          "en": "Option A, since having light-colored clothing makes them more visible.",
          "ru": "Вариант A, так как при наличии светлой одежды он более заметен."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Opción B, ya que al tener ropa oscura no genera distracciones en los demás conductores.",
          "en": "Option B, since having dark clothing does not create distractions for other drivers.",
          "ru": "Вариант B, так как при наличии темной одежды он не отвлекает других водителей."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas opciones presentan el mismo riesgo por igual.",
          "en": "Both options present the same risk equally.",
          "ru": "Оба варианта имеют одинаковый риск."
        },
        "correct": false
      }
    ],
    "image": "/questions/b7.jpg"
  },
  {
    "id": 27,
    "question": {
      "es": "¿Se puede circular en bicicleta por esta vía?",
      "en": "Is it allowed to ride a bicycle on this road?",
      "ru": "Можно ли ездить на велосипеде по этой дороге?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, siempre que se mantenga en el carril derecho.",
          "en": "Yes, as long as you stay in the right lane.",
          "ru": "Да, при условии, что он остается в правом ряду."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido.",
          "en": "No, it is prohibited.",
          "ru": "Нет, это запрещено."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, mientras se respete la velocidad mínima de la arteria.",
          "en": "Yes, as long as the minimum speed of the road is respected.",
          "ru": "Да, при соблюдении минимальной скорости на магистрали."
        },
        "correct": false
      }
    ],
    "image": "/questions/b8.jpg"
  },
  {
    "id": 28,
    "question": {
      "es": "¿Qué se debe evitar al circular en bicicleta?",
      "en": "What should be avoided when riding a bicycle?",
      "ru": "Что следует избегать при езде на велосипеде?"
    },
    "answers": [
      {
        "text": {
          "es": "Usar auriculares y dispositivos electrónicos, que afecten la concentración.",
          "en": "Using headphones and electronic devices that affect concentration.",
          "ru": "Использовать наушники и электронные устройства, которые отвлекают внимание."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Usar ropa oscura y suelta.",
          "en": "Wearing dark and loose clothing.",
          "ru": "Носить темную и свободную одежду."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 29,
    "question": {
      "es": "¿Está permitido llevar carga en una bicicleta?",
      "en": "Is it allowed to carry cargo on a bicycle?",
      "ru": "Разрешено ли перевозить груз на велосипеде?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, lo único que se debe tener en cuenta es que no comprometa la visibilidad.",
          "en": "Yes, the only thing to keep in mind is that it does not compromise visibility.",
          "ru": "Да, единственное, что нужно учитывать, это то, чтобы это не мешало видимости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido ya que puede desestabilizar la bicicleta.",
          "en": "No, it is prohibited as it can destabilize the bicycle.",
          "ru": "Нет, это запрещено, так как может дестабилизировать велосипед."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, debe estar firmemente asegurada, permitiendo maniobrar y no perder la estabilidad.",
          "en": "Yes, it must be securely fastened, allowing for maneuverability and not losing stability.",
          "ru": "Да, он должен быть надежно закреплен, позволяя маневрировать и не терять устойчивость."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 30,
    "question": {
      "es": "El ciclista, ¿tiene permitido llevar un pasajero?",
      "en": "Is the cyclist allowed to carry a passenger?",
      "ru": "Разрешено ли велосипедисту брать с собой пассажира?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, únicamente si no compromete la visibilidad.",
          "en": "Yes, only if it does not compromise visibility.",
          "ru": "Да, только если это не мешает видимости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, mientras que esté ubicado en un asiento adicional detrás del conductor.",
          "en": "Yes, as long as they are seated in an additional seat behind the driver.",
          "ru": "Да, если он сидит на дополнительном сиденье позади водителя."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son incorrectas.",
          "en": "Both answers, A and B, are incorrect.",
          "ru": "Оба ответа, A и B, неверны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 31,
    "question": {
      "es": "¿Está permitido estacionar una bicicleta en este lugar?",
      "en": "Is it allowed to park a bicycle in this place?",
      "ru": "Разрешено ли парковать велосипед в этом месте?"
    },
    "answers": [
      {
        "text": {
          "es": "No, los estacionamientos son exclusivos para usuarios de autos y motos.",
          "en": "No, the parking spaces are exclusive for car and motorcycle users.",
          "ru": "Нет, парковки предназначены исключительно для пользователей автомобилей и мотоциклов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo en algunos estacionamientos está permitido.",
          "en": "Only in some parking areas is it allowed.",
          "ru": "Только на некоторых парковках это разрешено."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, los estacionamientos están obligados a destinar un espacio para bicicletas.",
          "en": "Yes, parking areas are required to allocate a space for bicycles.",
          "ru": "Да, парковки обязаны выделить место для велосипедов."
        },
        "correct": true
      }
    ],
    "image": "/questions/b9.jpg"
  },
  {
    "id": 32,
    "question": {
      "es": "Un menor de 12 años puede circular en bicicleta por…",
      "en": "A child under 12 years old can ride a bicycle on...",
      "ru": "Ребенок младше 12 лет может ездить на велосипеде по…"
    },
    "answers": [
      {
        "text": {
          "es": "La calle, acompañado de un adulto mayor de 18 años.",
          "en": "The street, accompanied by an adult over 18 years old.",
          "ru": "Улице, в сопровождении взрослого старше 18 лет."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Por la vereda, a la menor velocidad posible.",
          "en": "On the sidewalk, at the lowest possible speed.",
          "ru": "По тротуару, на минимальной скорости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 33,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para circular con una bicicleta con asistencia eléctrica?",
      "en": "What is the maximum allowed speed for riding a bicycle with electric assistance?",
      "ru": "Какова максимальная разрешенная скорость для езды на велосипеде с электрической помощью?"
    },
    "answers": [
      {
        "text": {
          "es": "La velocidad máxima permitida en la vía donde se encuentra la ciclovía.",
          "en": "The maximum allowed speed on the road where the bike lane is located.",
          "ru": "Максимальная разрешенная скорость на дороге, где находится велодорожка."
        },
        "correct": false
      },
      {
        "text": {
          "es": "25 km/h.",
          "en": "25 km/h.",
          "ru": "25 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "30 km/h.",
          "en": "30 km/h.",
          "ru": "30 км/ч."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 34,
    "question": {
      "es": "¿Qué distancia lateral debe dejar respecto de este ciclista en caso de querer adelantarlo?",
      "en": "What lateral distance should be left regarding this cyclist in case you want to overtake them?",
      "ru": "Какое боковое расстояние следует оставить относительно этого велосипедиста, если вы хотите его обогнать?"
    },
    "answers": [
      {
        "text": {
          "es": "Al menos, un metro y medio.",
          "en": "At least one and a half meters.",
          "ru": "Не менее полутора метров."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al menos, medio metro.",
          "en": "At least half a meter.",
          "ru": "Не менее полуметра."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Lo suficiente para no tocarlo.",
          "en": "Enough to not touch them.",
          "ru": "Достаточно, чтобы не задеть его."
        },
        "correct": false
      }
    ],
    "image": "/questions/b10.jpg"
  },
  {
    "id": 35,
    "question": {
      "es": "¿Por dónde deben circular los ciclistas en esta calle?",
      "en": "Where should cyclists ride on this street?",
      "ru": "Где должны ездить велосипедисты на этой улице?"
    },
    "answers": [
      {
        "text": {
          "es": "No pueden hacerlo. Únicamente deben circular por ciclovías o bicisendas y los menores de 12 años por la vereda.",
          "en": "They cannot do so. They must only ride on bike lanes or bike paths, and those under 12 years old on the sidewalk.",
          "ru": "Они не могут этого делать. Они должны ездить только по велодорожкам или велосетям, а дети младше 12 лет по тротуару."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cerca del borde derecho de la calzada.",
          "en": "Near the right edge of the roadway.",
          "ru": "Близко к правому краю проезжей части."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cerca del borde izquierdo de la calzada.",
          "en": "Near the left edge of the roadway.",
          "ru": "Близко к левому краю проезжей части."
        },
        "correct": false
      }
    ],
    "image": "/questions/b11.jpg"
  },
  {
    "id": 36,
    "question": {
      "es": "¿Por qué sector de una calle sin demarcación deben circular los ciclistas cuando no existen ciclovías o bicisendas?",
      "en": "Which section of an undemarcated street should cyclists ride on when there are no bike lanes or bike paths?",
      "ru": "По какому участку улицы без разметки должны ездить велосипедисты, когда нет велодорожек или велосетей?"
    },
    "answers": [
      {
        "text": {
          "es": "Cerca del borde derecho de la calzada.",
          "en": "Near the right edge of the roadway.",
          "ru": "Близко к правому краю проезжей части."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cerca del borde izquierdo de la calzada.",
          "en": "Near the left edge of the roadway.",
          "ru": "Близко к левому краю проезжей части."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No pueden circular. Únicamente pueden hacerlo por ciclovías o bicisendas y los menores de 12 años por la vereda.",
          "en": "They cannot circulate. They can only do so on bike lanes or bike paths, and those under 12 years old on the sidewalk.",
          "ru": "Не могут двигаться. Могут это делать только по велодорожкам или велосетям, а дети младше 12 лет - по тротуару."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 37,
    "question": {
      "es": "¿Por dónde tienen permitida la circulación los ciclistas mayores de 12 años?",
      "en": "Where are cyclists over 12 years old allowed to circulate?",
      "ru": "Где разрешено движение велосипедистов старше 12 лет?"
    },
    "answers": [
      {
        "text": {
          "es": "Por bicisendas y ciclovías, en aquellos tramos de arterias donde estén presentes.",
          "en": "On bike paths and bike lanes, in those sections of roads where they are present.",
          "ru": "По велосетям и велодорожкам, на тех участках магистралей, где они присутствуют."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En aquellas vías sin ciclovías deben circular por el sector derecho de la calzada, a excepción de autopistas y otras vías rápidas, donde se encuentra prohibida su circulación.",
          "en": "On those roads without bike lanes, they must circulate on the right side of the roadway, except on highways and other fast roads, where their circulation is prohibited.",
          "ru": "На тех дорогах, где нет велодорожек, они должны двигаться по правой стороне проезжей части, за исключением автомагистралей и других скоростных дорог, где их движение запрещено."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 38,
    "question": {
      "es": "¿Qué indica esta seña?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Giro a la izquierda.",
          "en": "Turn left.",
          "ru": "Поворот налево."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Adelantamiento por la izquierda.",
          "en": "Overtaking on the left.",
          "ru": "Обгон слева."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerse.",
          "en": "Stop.",
          "ru": "Остановиться."
        },
        "correct": false
      }
    ],
    "image": "/questions/b12.jpg"
  },
  {
    "id": 39,
    "question": {
      "es": "¿Qué indica esta seña?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Adelantamiento por la derecha.",
          "en": "Overtaking on the right.",
          "ru": "Обгон справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Giro a la derecha.",
          "en": "Turn right.",
          "ru": "Поворот направо."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Detenerse.",
          "en": "Stop.",
          "ru": "Остановиться."
        },
        "correct": false
      }
    ],
    "image": "/questions/b13.jpg"
  },
  {
    "id": 40,
    "question": {
      "es": "¿Qué indica esta seña?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Giro a la izquierda.",
          "en": "Turn left.",
          "ru": "Поворот налево."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Adelantamiento por la izquierda.",
          "en": "Overtaking on the left.",
          "ru": "Обгон слева."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerse.",
          "en": "Stop.",
          "ru": "Остановиться."
        },
        "correct": true
      }
    ],
    "image": "/questions/b14.jpg"
  },
  {
    "id": 41,
    "question": {
      "es": "Es correcto el desplazamiento del motociclista que circula con el casco puesto y las luces encendidas.",
      "en": "The movement of the motorcyclist wearing a helmet and with the lights on is correct.",
      "ru": "Правильное движение мо��оциклиста, который едет в шлеме и с включенными огнями."
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
    "image": "/questions/a1.jpg"
  },
  {
    "id": 42,
    "question": {
      "es": "Si usted pretende cruzar esta intersección, ¿hacia qué lado debe mirar?",
      "en": "If you intend to cross this intersection, which way should you look?",
      "ru": "Если вы собираетесь пересечь этот перекресток, на какую сторону нужно смотреть?"
    },
    "answers": [
      {
        "text": {
          "es": "Hacia la derecha.",
          "en": "To the right.",
          "ru": "Направо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hacia la izquierda.",
          "en": "To the left.",
          "ru": "Налево."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hacia ambos lados.",
          "en": "To both sides.",
          "ru": "На обе стороны."
        },
        "correct": true
      }
    ],
    "image": "/questions/b15.jpg"
  },
  {
    "id": 43,
    "question": {
      "es": "¿Este ciclorodado con pedaleo asistido eléctricamente (bicicleta eléctrica) puede circular por este carril?",
      "en": "Can this electric-assisted pedaling bicycle circulate in this lane?",
      "ru": "Может ли этот электровелосипед (велосипед с электрическим педалированием) двигаться по этой полосе?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que la circulación de este tipo de vehículos en la vía pública se encuentra prohibida.",
          "en": "No, as the circulation of this type of vehicle on public roads is prohibited.",
          "ru": "Нет, так как движение таких транспортных средств по общественным дорогам запрещено."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, sólo si su potencia disminuye progresivamente hasta interrumpirse al alcanzar una velocidad máxima de 25 km/h.",
          "en": "Yes, only if its power decreases progressively until it stops at a maximum speed of 25 km/h.",
          "ru": "Да, только если его мощность постепенно уменьшается до прекращения при достижении максимальной скорости 25 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, sólo pueden circular por vías donde no haya ciclovías.",
          "en": "No, they can only circulate on roads where there are no bike lanes.",
          "ru": "Нет, они могут двигаться только по дорогам, где нет велодорожек."
        },
        "correct": false
      }
    ],
    "image": "/questions/b16.jpg"
  },
  {
    "id": 44,
    "question": {
      "es": "¿Puede un motovehículo circular por el carril señalizado en esta imagen?",
      "en": "Can a motorcycle circulate in the lane marked in this image?",
      "ru": "Может ли мототранспортное средство двигаться по полосе, обозначенной на этом изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que es de uso exclusivo de bicicletas.",
          "en": "No, as it is for the exclusive use of bicycles.",
          "ru": "Нет, так как она предназначе��а исключительно для велосипедов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que es un vehículo de 2 ruedas.",
          "en": "Yes, as it is a 2-wheeled vehicle.",
          "ru": "Да, так как это транспортное средство с 2 колесами."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre y cuando no circulen bicicletas.",
          "en": "Yes, as long as no bicycles are circulating.",
          "ru": "Да, при условии, что велосипеды не движутся."
        },
        "correct": false
      }
    ],
    "image": "/questions/a2.jpg"
  },
  {
    "id": 45,
    "question": {
      "es": "En esta situación, ¿es correcto que el vehículo avance?",
      "en": "In this situation, is it correct for the vehicle to advance?",
      "ru": "В этой ситуации правильно ли, что транспортное средство движется вперед?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque por allí no circulan peatones y no hay peligro.",
          "en": "Yes, because there are no pedestrians circulating there and there is no danger.",
          "ru": "Да, потому что там не движутся пешеходы и нет опасности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque aún hay peatones cruzando de un lado al otro de la arteria.",
          "en": "No, because there are still pedestrians crossing from one side to the other of the road.",
          "ru": "Нет, потому что все еще есть пешеходы, переходящие с одной стороны на другую."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, aunque haya peatones cruzando tiene el espacio suficiente para avanzar.",
          "en": "Yes, even if there are pedestrians crossing, there is enough space to advance.",
          "ru": "Да, хотя есть пешеходы, переходящие, у него достаточно места, чтобы продвинуться."
        },
        "correct": false
      }
    ],
    "image": "/questions/b17.jpg"
  },
  {
    "id": 46,
    "question": {
      "es": "¿Cómo debe proceder, si al llegar a esta intersección, se desea continuar en línea recta?",
      "en": "How should you proceed if you want to continue straight at this intersection?",
      "ru": "Как следует действовать, если при прибытии на этот перекресток вы хотите продолжить движение прямо?"
    },
    "answers": [
      {
        "text": {
          "es": "Detener el vehículo para que el peatón termine de cruzar y, antes de avanzar, hacer contacto visual con los peatones que aún no comenzaron a cruzar, aun sabiendo que obstruiré por un momento la bocacalle.",
          "en": "Stop the vehicle so that the pedestrian can finish crossing and, before advancing, make eye contact with the pedestrians who have not yet started to cross, even knowing that I will obstruct the intersection for a moment.",
          "ru": "Остановить транспортное средство, чтобы пешеход закончил переход, и перед тем, как продвинуться, установить з��ительный контакт с пешеходами, которые еще не начали переходить, даже зная, что я на мгновение заблокирую перекресток."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar porque la luz verde del semáforo me habilita pero tocando bocina para que los peatones no se distraigan. Es importante no obstruir la bocacalle.",
          "en": "Advance because the green light of the traffic light allows me, but honking the horn so that pedestrians do not get distracted. It is important not to obstruct the intersection.",
          "ru": "Продвигаться, потому что зеленый свет светофора разрешает мне это, но сигналить, чтобы пешеходы не отвлекались. Важно не блокировать перекресток."
        },
        "correct": false
      }
    ],
    "image": "/questions/b18.jpg"
  },
  {
    "id": 47,
    "question": {
      "es": "Desde el punto de vista del conductor frente a esta situación, ¿cuál es la acción adecuada?",
      "en": "From the driver's point of view in this situation, what is the appropriate action?",
      "ru": "С точки зрения водителя в этой ситуации, какое действие является правильным?"
    },
    "answers": [
      {
        "text": {
          "es": "Esquivar a la peatona y tocarle bocina para que no se distraiga.",
          "en": "Dodge the pedestrian and honk the horn so that she does not get distracted.",
          "ru": "Уклониться от пешехода и сигналить, чтобы она не отвлекалась."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Frenar y esperar a que termine de cruzar la peatona, aun sabiendo que el vehículo pueda obstaculizar el flujo vehicular.",
          "en": "Brake and wait for the pedestrian to finish crossing, even knowing that the vehicle may obstruct traffic flow.",
          "ru": "Тормозить и ждать, пока пешеход закончит переход, даже зная, что транспортное средство может препятствовать движению."
        },
        "correct": true
      }
    ],
    "image": "/questions/b19.jpg"
  },
  {
    "id": 48,
    "question": {
      "es": "Dadas las características de esta intersección, ¿el peatón también tiene prioridad?",
      "en": "Given the characteristics of this intersection, does the pedestrian also have priority?",
      "ru": "Учитывая характеристики этого перекрестка, есть ли у пешехода также приоритет?"
    },
    "answers": [
      {
        "text": {
          "es": "No, pero si el peatón se encuentra cruzando, el conductor debe dejarlo pasar para no producir un siniestro vial.",
          "en": "No, but if the pedestrian is crossing, the driver must let them pass to avoid causing a traffic accident.",
          "ru": "Нет, но если пешеход пересекает, водитель должен его пропустить, чтобы не произвест�� дорожно-транспортное происшествие."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre.",
          "en": "Yes, always.",
          "ru": "Да, всегда."
        },
        "correct": true
      }
    ],
    "image": "/questions/b20.jpg"
  },
  {
    "id": 49,
    "question": {
      "es": "Frente a la siguiente situación, ¿qué actitud debe tomar usted como conductor?",
      "en": "In the following situation, what attitude should you take as a driver?",
      "ru": "В следующей ситуации, какое поведение вы должны проявить как водитель?"
    },
    "answers": [
      {
        "text": {
          "es": "Hacer contacto visual con la peatona y en el caso de que comience a cruzar cederle el paso.",
          "en": "Make eye contact with the pedestrian and if she starts to cross, yield to her.",
          "ru": "Установить зрительный контакт с пешеходом и в случае, если она начнет переходить, уступить ей дорогу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar ya que se tiene prioridad sobre la peatona por circular desde la derecha.",
          "en": "Advance since you have priority over the pedestrian by coming from the right.",
          "ru": "Продвигаться, так как у вас есть приоритет над пешеходом, двигаясь справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "Both answers, A and B, are incorrect.",
          "ru": "Обе ответы, A и B, неверны."
        },
        "correct": false
      }
    ],
    "image": "/questions/b21.jpg"
  },
  {
    "id": 50,
    "question": {
      "es": "Si ud. es el conductor del vehículo, ¿qué conducta debe adoptar en la siguiente situación?",
      "en": "If you are the driver of the vehicle, what behavior should you adopt in the following situation?",
      "ru": "Если вы водитель транспортного средства, какое поведение вы должны принять в следующей ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Priorizar la circulación del peatón, indefectiblemente.",
          "en": "Prioritize the pedestrian's right of way, without exception.",
          "ru": "Приоритизировать движение пешехода, безусловно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Realizar una guiñada para advertir su preferencia de avance.",
          "en": "Make a gesture to indicate your preference to proceed.",
          "ru": "Сделать сигнал, чтобы предупредить о своем праве на проезд."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Completar la maniobra como sea posible, para disminuir su tiempo de permanencia sobre la vereda.",
          "en": "Complete the maneuver as best as possible, to reduce your time of stay on the sidewalk.",
          "ru": "Завершить маневр как можно скорее, чтобы сократить время пребывания на тротуаре."
        },
        "correct": false
      }
    ],
    "image": "/questions/b22.jpg"
  },
  {
    "id": 51,
    "question": {
      "es": "En esta intersección, ¿quién tiene prioridad de paso?",
      "en": "At this intersection, who has the right of way?",
      "ru": "На этом перекрестке, кто имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El peatón.",
          "en": "The pedestrian.",
          "ru": "Пешеход."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El conductor.",
          "en": "The driver.",
          "ru": "Водитель."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "It is indifferent.",
          "ru": "Это не имеет значения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b23.jpg"
  },
  {
    "id": 52,
    "question": {
      "es": "Cuando no hay demarcación de la senda peatonal, ¿por dónde deben cruzar los peatones?",
      "en": "When there is no marking for the crosswalk, where should pedestrians cross?",
      "ru": "Когда нет разметки пешеходного перехода, где должны пересекать пешеходы?"
    },
    "answers": [
      {
        "text": {
          "es": "Es indistinto, siempre que miren a ambos lados antes de hacerlo.",
          "en": "It is indifferent, as long as they look both ways before doing so.",
          "ru": "Это не имеет значения, если они смотрят в обе стороны перед тем, как это сделать."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En coincidencia con las paradas de transporte.",
          "en": "In line with the transport stops.",
          "ru": "В соответствии с остановками обществ��нного транспорта."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Por la esquina, por la prolongación longitudinal de la vereda sobre la calle.",
          "en": "At the corner, along the longitudinal extension of the sidewalk onto the street.",
          "ru": "По углу, по продлению тротуара вдоль улицы."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 53,
    "question": {
      "es": "Como conductor, observa que esta luz se encuentra intermitente, ¿qué debería esperar que haga el peatón?",
      "en": "As a driver, you notice that this light is flashing, what should you expect the pedestrian to do?",
      "ru": "Как водитель, вы видите, что этот свет мигает, что вы должны ожидать, что сделает пешеход?"
    },
    "answers": [
      {
        "text": {
          "es": "Que no comience a cruzar la calzada.",
          "en": "Not to start crossing the roadway.",
          "ru": "Что он не начнет пересекать проезжую часть."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si inició el cruce, que lo finalice con mucha precaución.",
          "en": "If they started crossing, to finish it with great caution.",
          "ru": "Если он начал переход, чтобы завершить его с большой осторожностью."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Оба ответа, A и B, верны."
        },
        "correct": true
      }
    ],
    "image": "/questions/b24.jpg"
  },
  {
    "id": 54,
    "question": {
      "es": "¿Qué vehículos pueden circular por el carril señalizado en la imagen?",
      "en": "What vehicles can circulate in the lane marked in the image?",
      "ru": "Какие транспортные средства могут двигаться по полосе, обозначенной на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Todos los transportes de pasajeros.",
          "en": "All passenger transports.",
          "ru": "Все пассажирские перевозки."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo colectivos entre las 07 h y las 21 h.",
          "en": "Only buses between 7 AM and 9 PM.",
          "ru": "Только автобусы с 07:00 до 21:00."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Colectivos autorizados y vehículos destinados al servicio de emergencia en cumplimiento de sus funciones.",
          "en": "Authorized buses and vehicles designated for emergency service in the performance of their functions.",
          "ru": "Разрешенные автобусы и транспортные средства, предназначенные для экстренной службы в исполнении своих функций."
        },
        "correct": true
      }
    ],
    "image": "/questions/b25.jpg"
  },
  {
    "id": 55,
    "question": {
      "es": "¿Cuáles de los motovehículos que se muestran en la imagen circulan en infracción?",
      "en": "Which of the motorcycles shown in the image are in violation?",
      "ru": "Какие из мотоциклов, показанных на изображении, нарушают правила?"
    },
    "answers": [
      {
        "text": {
          "es": "Los motovehículos A y C.",
          "en": "Motorcycles A and C.",
          "ru": "Мотоциклы A и C."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los motovehículos A y B .",
          "en": "Motorcycles A and B.",
          "ru": "Мотоцикл�� A и B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los motovehículos A, B y C.",
          "en": "Motorcycles A, B, and C.",
          "ru": "Мотоциклы A, B и C."
        },
        "correct": true
      }
    ],
    "image": "/questions/a3.jpg"
  },
  {
    "id": 56,
    "question": {
      "es": "Además de colectivos, ¿quiénes pueden circular por este carril?",
      "en": "Besides buses, who else can circulate in this lane?",
      "ru": "Кроме автобусов, кто еще может двигаться по этой полосе?"
    },
    "answers": [
      {
        "text": {
          "es": "Taxis con pasajeros.",
          "en": "Taxis with passengers.",
          "ru": "Такси с пассажирами."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Motos.",
          "en": "Motorcycles.",
          "ru": "Мотоциклы."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "Both answers, A and B, are incorrect.",
          "ru": "Обе ответы, A и B, неверны."
        },
        "correct": true
      }
    ],
    "image": "/questions/b26.jpg"
  },
  {
    "id": 57,
    "question": {
      "es": "El motovehículo que se muestra en la imagen circula correctamente, sin entorpecer la circulación",
      "en": "The motorcycle shown in the image is circulating correctly, without obstructing traffic.",
      "ru": "Мотоцикл, показанный на изображении, движется правильно, не мешая движению."
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
    "image": "/questions/a4.jpg"
  },
  {
    "id": 58,
    "question": {
      "es": "¿La autoridad de tránsito puede retener la licencia de conducir al conductor de un vehículo, que no sea colectivo o de emergencia, por encontrarse circulando por este carril?",
      "en": "Can the traffic authority retain the driver's license of a vehicle driver, who is not in a bus or emergency vehicle, for circulating in this lane?",
      "ru": "Может ли дорожная полиция задержать водительские права водителя транспортного средства, который не является автобусом или экстренным, за то, что он движется по этой полосе?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que constituye una falta de tránsito que amerita esa sanción.",
          "en": "Yes, as it constitutes a traffic violation that warrants that sanction.",
          "ru": "Да, так как это является нарушением правил дорожного движения, за которое предусмотрено такое наказание."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si perjudica la circulación de los colectivos.",
          "en": "Only if it hinders the circulation of the buses.",
          "ru": "Только если это мешает движению автобусов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nunca, ya que la licencia de conducir es un documento personal. Sólo puede labrar un acta de infracción.",
          "en": "Never, as the driver's license is a personal document. They can only issue a violation report.",
          "ru": "Никогда, так как водительские права являются личным документом. Он может только составить протокол о нарушении."
        },
        "correct": false
      }
    ],
    "image": "/questions/b27.jpg"
  },
  {
    "id": 59,
    "question": {
      "es": "¿Qué indica la señal horizontal de color rojo que se encuentra demarcada sobre la calzada?",
      "en": "What does the horizontal red sign marked on the roadway indicate?",
      "ru": "Что указывает горизонтальны�� знак красного цвета, который обозначен на проезжей части?"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce de Metrobús.",
          "en": "Metrobús crossing.",
          "ru": "Перекресток Метробуса."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cruce exclusivo de vehículos de emergencia.",
          "en": "Exclusive crossing for emergency vehicles.",
          "ru": "Эксклюзивный перекресток для экстренных транспортных средств."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cruce de bicicletas.",
          "en": "Bicycle crossing.",
          "ru": "Перекресток для велосипедов."
        },
        "correct": false
      }
    ],
    "image": "/questions/b28.jpg"
  },
  {
    "id": 60,
    "question": {
      "es": "¿Qué indica la señal horizontal que se encuentra demarcada sobre la calzada?",
      "en": "What does the horizontal sign marked on the roadway indicate?",
      "ru": "Что указывает горизонтальный знак, который обозначен на проезжей части?"
    },
    "answers": [
      {
        "text": {
          "es": "Carril exclusivo de colectivo de pasajeros.",
          "en": "Exclusive lane for passenger buses.",
          "ru": "Эксклюзивная полоса для пассажирских автобусов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cruce exclusivo de vehículos de emergencia.",
          "en": "Exclusive crossing for emergency vehicles.",
          "ru": "Эксклюзивный перекресток для экстренных транспортных средств."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ceda el paso.",
          "en": "Yield.",
          "ru": "Уступите дорогу."
        },
        "correct": false
      }
    ],
    "image": "/questions/b29.jpg"
  },
  {
    "id": 61,
    "question": {
      "es": "Si ud. circula en el carril contiguo al carril exclusivo del Metrobús y desea realizar un sobrepaso a otro vehículo que circula más lento, ¿puede utilizar el carril exclusivo para hacer esta maniobra?",
      "en": "If you are driving in the lane adjacent to the exclusive Metrobús lane and wish to overtake another vehicle that is moving slower, can you use the exclusive lane to make this maneuver?",
      "ru": "Если вы движетесь по полосе, соседней с эксклюзивной полосой Метробуса и хотите обогнать другое транспортное средство, движущееся медленнее, можете ли вы использовать эксклюзивную полосу для выполнения этого маневра?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque está prohibido circular de manera permanente o transitoria por dicho carril.",
          "en": "No, because it is prohibited to circulate permanently or temporarily in that lane.",
          "ru": "Нет, потому что запрещено постоянно или временно двигаться по этой полосе."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, sólo cuando la línea longitudinal del lado exterior de este carril sea discontinua.",
          "en": "Yes, only when the longitudinal line on the outer side of this lane is broken.",
          "ru": "Да, только когда продольная линия внешней стороны этой полосы прерывиста."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque sólo se permite su utilización para realizar alguna maniobra.",
          "en": "Yes, because its use is only allowed to perform a maneuver.",
          "ru": "Да, потому что ее использование разрешено только для выполнения маневра."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 62,
    "question": {
      "es": "¿Qué son los carriles exclusivos?",
      "en": "What are exclusive lanes?",
      "ru": "Что такое эксклюзивные полосы?"
    },
    "answers": [
      {
        "text": {
          "es": "Vías con un único sentido de circulación.",
          "en": "Roads with a single direction of traffic.",
          "ru": "Дороги с односторонним движением."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Bandas longitudinales demarcadas en la calzada, destinadas a la circulación de determinados vehículos.",
          "en": "Longitudinal bands marked on the roadway, intended for the circulation of certain vehicles.",
          "ru": "Продольные полосы, обозначенные на проезжей части, предназначенные для движения определенных транспортных средств."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lugar por donde circulan ambulancias, bomberos y/o vehículos policiales, en cumplimiento o no de sus funciones.",
          "en": "Place where ambulances, firefighters, and/or police vehicles circulate, whether or not fulfilling their functions.",
          "ru": "Место, по которому движутся ambulancias, пожарные и/или полицейские автомобили, выполняя или не выполняя свои функции."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 63,
    "question": {
      "es": "El auto señalizado con un círculo rojo, ¿tiene permitido girar a la derecha en el próximo cruce?",
      "en": "Is the car marked with a red circle allowed to turn right at the next intersection?",
      "ru": "Автомобиль, обозначенный красным кругом, имеет право поворачивать направо на следующем перекрестке?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, siempre que señalice la maniobra con anticipación.",
          "en": "Yes, as long as it signals the maneuver in advance.",
          "ru": "Да, при условии, что он зар��нее сигнализирует о маневре."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que para realizarlo debería invadir los carriles exclusivos.",
          "en": "No, as to do so it would have to invade the exclusive lanes.",
          "ru": "Нет, так как для этого ему нужно было бы вторгнуться в эксклюзивные полосы."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si lo realiza fuera del horario de restricción de los carriles exclusivos.",
          "en": "Only if it is done outside the restriction hours of the exclusive lanes.",
          "ru": "Только если он выполнит это вне времени ограничения эксклюзивных полос."
        },
        "correct": true
      }
    ],
    "image": "/questions/b30.jpg"
  },
  {
    "id": 64,
    "question": {
      "es": "¿Qué significa la demarcación horizontal que se visualiza en la imagen?",
      "en": "What does the horizontal marking visible in the image mean?",
      "ru": "Что означает горизонтальная разметка, видимая на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce peligroso por tener poca iluminación.",
          "en": "Dangerous crossing due to low lighting.",
          "ru": "Опасный перекресток из-за плохого освещения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Senda peatonal próxima a centros de salud.",
          "en": "Pedestrian path near health centers.",
          "ru": "Пешеходная дорожка рядом с медицинскими учреждениями."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Senda peatonal próxima a zona escolar.",
          "en": "Pedestrian path near school zones.",
          "ru": "Пешеходная дорожка рядом со школьной зоной."
        },
        "correct": true
      }
    ],
    "image": "/questions/b31.jpg"
  },
  {
    "id": 65,
    "question": {
      "es": "¿Qué indica la demarcación horizontal que se visualiza en la imagen?",
      "en": "What does the horizontal marking visible in the image indicate?",
      "ru": "Что указывает горизонтальная разметка, видимая на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Estacionamiento para micros escolares.",
          "en": "Parking for school buses.",
          "ru": "Парковка для школьных автобусов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Carril de detención para el ascenso y descenso de escolares.",
          "en": "Stopping lane for the boarding and alighting of schoolchildren.",
          "ru": "Полоса остановки для посадки и высадки школьников."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Zona de ascenso y descenso de pasajeros de transporte público.",
          "en": "Zone for the boarding and alighting of public transport passengers.",
          "ru": "Зона посадки и высадки пассажиров общественного транспорта."
        },
        "correct": false
      }
    ],
    "image": "/questions/b32.jpg"
  },
  {
    "id": 66,
    "question": {
      "es": "La siguiente imagen corresponde a:",
      "en": "The following image corresponds to:",
      "ru": "Следующее изображение соответствует:"
    },
    "answers": [
      {
        "text": {
          "es": "Calle Prioridad Peatón.",
          "en": "Priority Pedestrian Street.",
          "ru": "Улица с приоритетом пешеходов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calle con Intervención Peatonal.",
          "en": "Street with Pedestrian Intervention.",
          "ru": "Улица с пешеходным вмешательством."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Calle con Bicisenda.",
          "en": "Street with Bike Lane.",
          "ru": "Улица с велодорожкой."
        },
        "correct": false
      }
    ],
    "image": "/questions/b33.jpg"
  },
  {
    "id": 67,
    "question": {
      "es": "Las intervenciones horizontales señaladas, sirven para…",
      "en": "The marked horizontal interventions serve to...",
      "ru": "Обозначенные горизонтальные вмешательства служат для…"
    },
    "answers": [
      {
        "text": {
          "es": "Incrementar la seguridad de los peatones.",
          "en": "Increase the safety of pedestrians.",
          "ru": "Увеличения безопасности пешеходов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Promover la movilidad vehicular.",
          "en": "Promote vehicular mobility.",
          "ru": "Стимулирования автомобильной мобильности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Colaborar con la rapidez en la movilidad.",
          "en": "Assist with the speed of mobility.",
          "ru": "Содействия быстроте передвижения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b34.jpg"
  },
  {
    "id": 68,
    "question": {
      "es": "¿Cómo se denomina la intervención de color amarillo que se visualiza en la imagen?",
      "en": "What is the name of the yellow intervention visible in the image?",
      "ru": "Как называется вмешательство желтого цвета, видимое на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Intervención Peatonal.",
          "en": "Pedestrian Intervention.",
          "ru": "Пешеходное вмешательство."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Intervención Vehicular.",
          "en": "Vehicular Intervention.",
          "ru": "Автомобильное вмешательство."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Intervención de la Calzada.",
          "en": "Roadway Intervention.",
          "ru": "Вмешательство проезжей части."
        },
        "correct": false
      }
    ],
    "image": "/questions/b35.jpg"
  },
  {
    "id": 69,
    "question": {
      "es": "¿Para qué sirve la demarcación horizontal de color amarillo que se visualiza en la imagen?",
      "en": "What is the purpose of the yellow horizontal marking visible in the image?",
      "ru": "Для чего служит горизонтальная разметка желтого цвета, видимая на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Ampliar la zona permitida de estacionamiento para motos.",
          "en": "Expand the allowed parking area for motorcycles.",
          "ru": "Расширить разрешенную зону парковки для мотоциклов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y radio de giro de los vehículos.",
          "en": "Reduce the speed and turning radius of vehicles.",
          "ru": "Снизить скорость и радиу�� поворота транспортных средств."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ampliar la zona permitida de estacionamiento para vehículos de emergencia.",
          "en": "Expand the allowed parking area for emergency vehicles.",
          "ru": "Расширить разрешенную зону парковки для экстренных транспортных средств."
        },
        "correct": false
      }
    ],
    "image": "/questions/b36.jpg"
  },
  {
    "id": 70,
    "question": {
      "es": "La señal que está presente en la imagen corresponde a las informativas que orientan al peatón.",
      "en": "The sign present in the image corresponds to informative signs that guide pedestrians.",
      "ru": "Знак, присутствующий на изображении, относится к информационным, которые ориентируют пешехода."
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
    "image": "/questions/b37.jpg"
  },
  {
    "id": 71,
    "question": {
      "es": "En la imagen se muestra un cruce exclusivo para ciclistas.",
      "en": "The image shows a crossing exclusive for cyclists.",
      "ru": "На изображении показан перекресток, эксклюзивный для велосипедистов."
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
    "image": "/questions/b38.jpg"
  },
  {
    "id": 72,
    "question": {
      "es": "¿Qué indica el siguiente cruce verde en las intersecciones?",
      "en": "What does the following green crossing at intersections indicate?",
      "ru": "Что указывает следующий зеленый перекресток на пересечениях?"
    },
    "answers": [
      {
        "text": {
          "es": "Advierte a los conductores sobre la existencia de un punto de cruce de ciclovía o bicisenda.",
          "en": "Warns drivers about the existence of a bike lane or bike path crossing point.",
          "ru": "Предупреждает водителей о наличии точки пересечения велодорожки или велосети."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Advierte a los conductores sobre la existencia de un establecimiento escolar cercano.",
          "en": "Warns drivers about the existence of a nearby school.",
          "ru": "Предупреждает водителей о наличии близлежащего учебного заведения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Advierte a los conductores sobre un cruce peligroso por tener poca iluminación.",
          "en": "Warns drivers about a dangerous crossing due to low lighting.",
          "ru": "Предупреждает водителей о опасном перекрестке из-за плохого освещения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b39.jpg"
  },
  {
    "id": 73,
    "question": {
      "es": "¿Qué indica esta demarcación horizontal verde?",
      "en": "What does this green horizontal marking indicate?",
      "ru": "Что указывает эта зеленая горизонтальная разметка?"
    },
    "answers": [
      {
        "text": {
          "es": "Que en esa intersección hay una ciclovía o bicisenda.",
          "en": "That there is a bike lane or bike path at that intersection.",
          "ru": "Что на этом перекрестке есть велодорожка или велосипедная дорожка."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que se aproxima a un cruce ferroviario.",
          "en": "That a railway crossing is approaching.",
          "ru": "Что приближается к железнодорожному переезду."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es un cruce exclusivo de peatones.",
          "en": "That it is an exclusive pedestrian crossing.",
          "ru": "Что это перекресток, предназначенный исключительно для пешеходов."
        },
        "correct": false
      }
    ],
    "image": "/questions/b40.jpg"
  },
  {
    "id": 74,
    "question": {
      "es": "¿Cuál de las siguientes imágenes muestra una bicisenda?",
      "en": "Which of the following images shows a bike path?",
      "ru": "Какое из следующих изображений показывает велосипедную дорожку?"
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
    "image": "/questions/b41.jpg"
  },
  {
    "id": 75,
    "question": {
      "es": "¿Cuál de las siguientes imágenes muestra una ciclovía?",
      "en": "Which of the following images shows a bike lane?",
      "ru": "Какое из следующих изображений показывает велодорожку?"
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
    "image": "/questions/b42.jpg"
  },
  {
    "id": 76,
    "question": {
      "es": "¿Cuál es la principal diferencia entre bicisendas y ciclovías?",
      "en": "What is the main difference between bike paths and bike lanes?",
      "ru": "В чем основное различие между велосипедными дорожками и велодорожками?"
    },
    "answers": [
      {
        "text": {
          "es": "La bicisenda es de uso exclusivo de bicicletas y la ciclovía de uso preferencial.",
          "en": "The bike path is for the exclusive use of bicycles and the bike lane is for preferential use.",
          "ru": "Велосипедная дорожка предназначена исключительно для велосипедов, а велодорожка имеет приоритетно�� использование."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La bicisenda se encuentra sobre la calzada y la ciclovía sobre la vereda.",
          "en": "The bike path is located on the roadway and the bike lane is on the sidewalk.",
          "ru": "Велосипедная дорожка находится на проезжей части, а велодорожка на тротуаре."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La bicisenda se encuentra sobre la vereda y la ciclovía sobre la calzada.",
          "en": "The bike path is located on the sidewalk and the bike lane is on the roadway.",
          "ru": "Велосипедная дорожка находится на тротуаре, а велодорожка на проезжей части."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 77,
    "question": {
      "es": "¿Qué es una ciclovía?",
      "en": "What is a bike lane?",
      "ru": "Что такое велодорожка?"
    },
    "answers": [
      {
        "text": {
          "es": "Sector señalizado especialmente en la calzada para la circulación con carácter preferente de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
          "en": "A specially marked section on the roadway for the preferential circulation of bicycles and personal mobility devices.",
          "ru": "Сектор, специально обозначенный на проезжей части для приоритетного движения велосипедов и средств личной мобильности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sector de la calzada señalizado especialmente con una separación física o demarcación horizontal para la circulación exclusiva de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
          "en": "A section of the roadway specially marked with a physical separation or horizontal marking for the exclusive circulation of bicycles and personal mobility devices.",
          "ru": "Сектор проезжей части, специально обозначенный с физическим разделением или горизонтальной разметкой для исключительного движения велосипедов и средств личной мобильности."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sector señalizado y especialmente acondicionado en aceras y espacios verdes para la circulación de ciclorodados (bicicletas) y dispositivos de movilidad personal.",
          "en": "A marked and specially conditioned area on sidewalks and green spaces for the circulation of bicycles and personal mobility devices.",
          "ru": "Сектор, специально подготовленный на тротуарах и зеленых зонах для движения велосипедов и средств личной мобильности."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 78,
    "question": {
      "es": "En un procedimiento judicial de un siniestro vial, al ser convocados en carácter de testigo, no es obligatorio presentarse a declarar en la Fiscalía correspondiente.",
      "en": "In a judicial procedure of a traffic accident, when summoned as a witness, it is not mandatory to appear to testify at the corresponding Prosecutor's Office.",
      "ru": "В судебном производстве по дорожному происшествию, будучи вызванны�� в качестве свидетеля, не обязательно являться для дачи показаний в соответствующую прокуратуру."
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
      "en": "A person who flees from a traffic accident, leaving someone injured, can be prosecuted for the crime of abandonment of a person.",
      "ru": "Лицо, которое скрывается с места дорожного происшествия, оставив кого-то раненым, может быть осуждено за преступление оставления человека в опасности."
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
      "en": "In case of participating in a traffic accident, how much time is available to notify the vehicle's insurance company about the incident?",
      "ru": "В случае участия в дорожном происшествии, сколько времени отводится для уведомления страховой компании транспортного средства?"
    },
    "answers": [
      {
        "text": {
          "es": "24 horas.",
          "en": "24 hours.",
          "ru": "24 часа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "48 horas.",
          "en": "48 hours.",
          "ru": "48 часов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "72 horas.",
          "en": "72 hours.",
          "ru": "72 часа."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 81,
    "question": {
      "es": "En caso de participar en un siniestro vial, en el que resultaron personas heridas, el personal policial que acuda al lugar se encargará de preservar la escena del hecho, brindando los medios para que los servicios de emergencia atiendan a los heridos y resguardando los vehículos y otras pruebas del incidente para una adecuada resolución del caso.",
      "en": "In case of participating in a traffic accident where people were injured, the police personnel who arrive at the scene will be responsible for preserving the scene of the incident, providing means for emergency services to attend to the injured, and securing the vehicles and other evidence of the incident for an adequate resolution of the case.",
      "ru": "В случае участия в дорожном происшествии, в котором есть раненые, полиция, прибывшая на место, позаботится о сохранении места происшествия, предоставив средства для того, чтобы службы экстренной помощи могли оказать помощь раненым, и охраняя транспортные средства и другие доказ��тельства инцидента для надлежащего разрешения дела."
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
      "en": "In case of participating in a traffic accident, what is recommended to do as the first step?",
      "ru": "В случае участия в дорожном происшествии, что рекомендуется сделать в качестве первого шага?"
    },
    "answers": [
      {
        "text": {
          "es": "Detenerse inmediatamente y permanecer en el lugar del hecho.",
          "en": "Stop immediately and remain at the scene of the incident.",
          "ru": "Немедленно остановиться и остаться на месте происшествия."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Conducir hasta la comisaría más cercana.",
          "en": "Drive to the nearest police station.",
          "ru": "Поехать в ближайший участок полиции."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Llamar al 911 y continuar el viaje.",
          "en": "Call 911 and continue the journey.",
          "ru": "Позвонить в 911 и продолжить движение."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 83,
    "question": {
      "es": "En caso de siniestro, el orden de actuación recomendado es…",
      "en": "In case of an accident, the recommended order of action is...",
      "ru": "В случае происшествия рекомендуемый порядок действий…"
    },
    "answers": [
      {
        "text": {
          "es": "Alertar - Socorrer - Proteger.",
          "en": "Alert - Assist - Protect.",
          "ru": "Предупредить - Помочь - Защитить."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Proteger - Alertar - Socorrer.",
          "en": "Protect - Alert - Assist.",
          "ru": "Защитить - Предупредить - Помочь."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Socorrer - Proteger - Alertar.",
          "en": "Assist - Protect - Alert.",
          "ru": "Помочь - Защитить - Предупредить."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 84,
    "question": {
      "es": "¿Cuáles son los números de emergencia que todo usuario de la vía pública debe conocer con el objetivo de poder llamar y pedir ayuda ante el acontecimiento de algún incidente?",
      "en": "What are the emergency numbers that every road user should know in order to call and ask for help in the event of an incident?",
      "ru": "Какие номера экстренных служб должен знать каждый пользователь общественных дорог, чтобы иметь возможность позвонить и попросить помощь в случае инцидента?"
    },
    "answers": [
      {
        "text": {
          "es": "911 y 109.",
          "en": "911 and 109.",
          "ru": "911 и 109."
        },
        "correct": false
      },
      {
        "text": {
          "es": "103 y 107.",
          "en": "103 and 107.",
          "ru": "103 и 107."
        },
        "correct": false
      },
      {
        "text": {
          "es": "107 y 911.",
          "en": "107 and 911.",
          "ru": "107 и 911."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 85,
    "question": {
      "es": "En caso de participar en un siniestro vial, es recomendable que quien llame por teléfono al servicio de emergencias (107), indique con claridad:",
      "en": "In case of participating in a traffic accident, it is recommended that the person calling the emergency service (107) clearly indicate:",
      "ru": "В сл��чае участия в дорожном происшествии рекомендуется, чтобы тот, кто звонит в службу экстренной помощи (107), четко указал:"
    },
    "answers": [
      {
        "text": {
          "es": "Lugar del hecho, características del incidente, cantidad y estado de las víctimas.",
          "en": "Location of the incident, characteristics of the incident, number and condition of the victims.",
          "ru": "Место происшествия, характеристики инцидента, количество и состояние жертв."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lugar del hecho, número de dominio de los vehículos involucrados, cantidad y estado de las víctimas.",
          "en": "Location of the incident, license plate numbers of the vehicles involved, number and condition of the victims.",
          "ru": "Место происшествия, номер транспортных средств, участвующих в происшествии, количество и состояние жертв."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Únicamente lugar del hecho para ganar tiempo y que el servicio de emergencia llegue lo más rápido posible.",
          "en": "Only the location of the incident to save time and ensure that the emergency service arrives as quickly as possible.",
          "ru": "Только место происшествия, чтобы сэкономить время и чтобы служба экстренной помощи прибыла как можно быстрее."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 86,
    "question": {
      "es": "¿Qué obligaciones impone la ley a aquel conductor que participe de un siniestro?",
      "en": "What obligations does the law impose on a driver who participates in an accident?",
      "ru": "Какие обязательства накладывает закон на водителя, участвующего в происшествии?"
    },
    "answers": [
      {
        "text": {
          "es": "Detenerse inmediatamente, solicitar auxilio para atender a las víctimas si las hubiera y brindar su colaboración para evitar mayores daños para la circulación.",
          "en": "Stop immediately, request assistance to attend to the victims if there are any, and provide their cooperation to prevent further damage to traffic.",
          "ru": "Немедленно остановиться, запросить помощь для оказания помощи жертвам, если таковые имеются, и предоставить свое содействие, чтобы избежать дальнейших повреждений для движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Suministrar sus datos personales, del vehículo, de la licencia de conducir y del seguro obligatorio a los demás siniestrados y a la autoridad interviniente.",
          "en": "Provide their personal information, vehicle details, driver's license, and mandatory insurance to the other parties involved and the intervening authority.",
          "ru": "Предоставить свои личные данные, данные транспортного средства, водительские права и обязательное страхование другим участникам происшествия и вмешивающимся властям."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 87,
    "question": {
      "es": "Si ud. se encuentra involucrado en un siniestro de tránsito en el cual un motociclista resultó herido, pero ud. no es el conductor del vehículo implicado, ¿cómo debería actuar en esta situación?",
      "en": "If you are involved in a traffic accident in which a motorcyclist was injured, but you are not the driver of the vehicle involved, how should you act in this situation?",
      "ru": "Если вы участвуете в дорожно-транспортном происшествии, в котором пострадал мотоциклист, но вы не являетесь водителем вовлеченного транспортного средства, как вы должны действовать в этой ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Brindar colaboración, solicitar auxilio llamando al 107 para que reciba atención médica y contribuir al esclarecimiento de los hechos.",
          "en": "Provide assistance, call for help by dialing 107 so that they can receive medical attention, and contribute to clarifying the facts.",
          "ru": "Предоставить помощь, вызвать помощь, позвонив по номеру 107, чтобы пострадавший получил медицинскую помощь, и способствовать выяснению обстоятельств."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Brindar colaboración, aunque al no ser el conductor no estoy obligado a hacerlo.",
          "en": "Provide assistance, although I am not obligated to do so since I am not the driver.",
          "ru": "Предоставить помощь, хотя, не будучи водителем, я не обязан этого делать."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Antes de llevar a cabo cualquier valoración del estado general de la víctima, retirar el casco para que no se asfixie.",
          "en": "Before carrying out any assessment of the victim's general condition, remove the helmet so they do not suffocate.",
          "ru": "Перед тем как провести какую-либо оценку общего состояния жертвы, снять шлем, чтобы она не задохнулась."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 88,
    "question": {
      "es": "¿Quién es el responsable civil por un incidente de tránsito producido por un menor de edad poseedor de una licencia de conducir?",
      "en": "Who is the civil responsible party for a traffic incident caused by a minor holding a driver's license?",
      "ru": "Кто является гражданским ответственным за дорожно-транспортное пр��исшествие, совершенное несовершеннолетним, имеющим водительские права?"
    },
    "answers": [
      {
        "text": {
          "es": "El que firmó la autorización para obtener la licencia.",
          "en": "The one who signed the authorization to obtain the license.",
          "ru": "Тот, кто подписал разрешение на получение лицензии."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El que lo acompaña.",
          "en": "The one who accompanies them.",
          "ru": "Тот, кто его сопровождает."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El que le autorizó el uso del vehículo.",
          "en": "The one who authorized the use of the vehicle.",
          "ru": "Тот, кто разрешил использование транспортного средства."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 89,
    "question": {
      "es": "En materia de Responsabilidad Civil, ¿qué es lo que se considera como factor determinante para dar inicio a una demanda?",
      "en": "In terms of Civil Liability, what is considered the determining factor to initiate a lawsuit?",
      "ru": "В области гражданской ответственности, что считается определяющим фактором для начала иска?"
    },
    "answers": [
      {
        "text": {
          "es": "La intención de la conducta dañosa.",
          "en": "The intention of the harmful conduct.",
          "ru": "Намерение причинить вред."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La existencia de un daño real, que afecte a algún particular, provocado como consecuencia del incidente.",
          "en": "The existence of real damage affecting an individual, caused as a consequence of the incident.",
          "ru": "Наличие реального ущерба, который затрагивает какого-либо частного лица, вызванного в результате инцидента."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Los antecedentes de la persona que provoca el daño.",
          "en": "The background of the person causing the damage.",
          "ru": "Предыстория лица, причиняющего ущерб."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 90,
    "question": {
      "es": "Frente a un incidente de tránsito, ¿puede transferirse la Responsabilidad Penal del conductor de un vehículo al dueño del mismo?",
      "en": "In the event of a traffic incident, can the Criminal Responsibility of the driver of a vehicle be transferred to the owner of the same?",
      "ru": "В случае дорожно-транспортного происшествия, может ли уголовная ответственность водителя транспортного средства быть передана владельцу?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque la responsabilidad penal es intransferible.",
          "en": "No, because criminal responsibility is non-transferable.",
          "ru": "Нет, потому что уголовная ответственность неп��редаваема."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí. Además, del dueño también puede transferirse a la Compañía de Seguros.",
          "en": "Yes. Additionally, responsibility can also be transferred to the Insurance Company.",
          "ru": "Да. Кроме того, ответственность может быть передана и страховой компании."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Lo resolverá el Juez, en función de la gravedad del incidente y sus consecuencias.",
          "en": "The Judge will resolve it based on the severity of the incident and its consequences.",
          "ru": "Это решит судья, в зависимости от серьезности инцидента и его последствий."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 91,
    "question": {
      "es": "En un incidente de tránsito, ¿qué significa que el conductor sea considerado responsable por negligencia?",
      "en": "In a traffic incident, what does it mean for the driver to be considered responsible for negligence?",
      "ru": "В случае дорожно-транспортного происшествия, что означает, что водитель считается ответственным за неосторожность?"
    },
    "answers": [
      {
        "text": {
          "es": "Que no ha respondido adecuadamente a una circunstancia del tránsito por falta de práctica en la conducción.",
          "en": "That they have not responded adequately to a traffic circumstance due to lack of driving practice.",
          "ru": "Что он не адекватно отреагировал на обстоятельства дорожного движения из-за недостатка практики в вождении."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que ha realizado un acto con su vehículo que las reglas de prudencia indican no hacer, o sea, que ha actuado peligrosamente.",
          "en": "That they have performed an act with their vehicle that the rules of prudence indicate should not be done, meaning they have acted dangerously.",
          "ru": "Что он совершил действие на своем транспортном средстве, которое правила осторожности предписывают не делать, то есть действовал опасно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que ha actuado no conforme a las exigencias de la Ley.",
          "en": "That they have acted contrary to the requirements of the Law.",
          "ru": "Что он действовал не в соответствии с требованиями закона."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 92,
    "question": {
      "es": "Frente a un control de tránsito en CABA, si la autoridad realiza una infracción ante una falta cometida por un conductor, ¿dónde puede efectuarse el pago de la multa por dicha infracción",
      "en": "In the face of a traffic control in CABA, if the authority issues a fine for an infraction committed by a driver, where can the payment for that fine be made?",
      "ru": "При проверке дорожного движения в CABA, если орган власти составляет протокол об административном правонарушении, где можно оплатить штраф за данное правонарушение?"
    },
    "answers": [
      {
        "text": {
          "es": "En ese mismo momento y ante la Autoridad de Control si ésta lo requiere.",
          "en": "At that same moment and before the Control Authority if they require it.",
          "ru": "В тот же момент и перед контрольным органом, если он этого требует."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ante la oficina de la Dirección General de Administración de Infracciones que corresponda.",
          "en": "At the office of the General Directorate of Administration of Infractions that corresponds.",
          "ru": "В офисе Генерального управления по администрированию правонарушений, который соответствует."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 93,
    "question": {
      "es": "Al tener la licencia vencida, ¿por cuánto tiempo puede seguir conduciendo sin estar en infracción?",
      "en": "With an expired license, how long can one continue driving without being in violation?",
      "ru": "При наличии просроченной лицензии, как долго можно продолжать водить, не нарушая закон?"
    },
    "answers": [
      {
        "text": {
          "es": "30 días corridos desde su vencimiento.",
          "en": "30 calendar days from its expiration.",
          "ru": "30 календарных дней с момента истечения срока."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hasta las 00 horas del día de cumpleaños.",
          "en": "Until 00:00 hours on their birthday.",
          "ru": "До 00:00 часов в день рождения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No está permitido conducir con la licencia vencida, excepto que el vencimiento fuese un día inhábil, en cuyo caso se traslada al día hábil siguiente.",
          "en": "It is not allowed to drive with an expired license, except if the expiration was on a non-business day, in which case it is moved to the next business day.",
          "ru": "Не разрешается водить с просроченной лицензией, за исключением случаев, когда истечение срока произошло в нерабочий день, в этом случае переносится на следующий рабочий день."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 94,
    "question": {
      "es": "En caso de comprobar una falta, ¿puede un agente de tránsito retener la licencia de conducir?",
      "en": "In case of confirming an infraction, can a traffic agent retain the driver's license?",
      "ru": "В случае выявления правонарушения, может ли инспектор дорожного движения зад��ржать водительские права?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque es un documento personal.",
          "en": "No, because it is a personal document.",
          "ru": "Нет, потому что это личный документ."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo en los casos que la normativa vigente así lo indique.",
          "en": "Only in cases where current regulations indicate so.",
          "ru": "Только в случаях, когда действующее законодательство это предписывает."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo en casos de incidentes que involucren a terceros.",
          "en": "Only in cases of incidents involving third parties.",
          "ru": "Только в случаях инцидентов, затрагивающих третьих лиц."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 95,
    "question": {
      "es": "Cuando se vence la licencia de conducir, ¿cuánto tiempo puede transcurrir para su renovación antes de que se necesite tramitarla como si fuese un otorgamiento?",
      "en": "When the driver's license expires, how much time can pass for its renewal before it needs to be processed as if it were a new issuance?",
      "ru": "Когда истекает срок действия водительских прав, сколько времени может пройти до их продления, прежде чем их нужно будет оформлять как новые?"
    },
    "answers": [
      {
        "text": {
          "es": "30 días corridos desde su vencimiento.",
          "en": "30 calendar days from its expiration.",
          "ru": "30 календарных дней с момента истечения срока."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Para que se la pueda renovar, siempre debe hacerse antes de su vencimiento. Una vez vencida se la debe tramitar como licencia nueva.",
          "en": "To be renewed, it must always be done before its expiration. Once expired, it must be processed as a new license.",
          "ru": "Для продления их всегда нужно оформлять до истечения срока. После истечения срока их нужно оформлять как новые права."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No debe superar el año desde su vencimiento.",
          "en": "It must not exceed one year from its expiration.",
          "ru": "Не должно превышать одного года с момента истечения срока."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 96,
    "question": {
      "es": "¿Cuánto dura en su totalidad la condición de principiante?",
      "en": "How long does the beginner's condition last in total?",
      "ru": "Как долго в целом длится статус новичка?"
    },
    "answers": [
      {
        "text": {
          "es": "2 años, sólo en el caso de los menores de 21 años de edad.",
          "en": "2 years, only in the case of individuals under 21 years of age.",
          "ru": "2 года, только в случае лиц младше 21 года."
        },
        "correct": false
      },
      {
        "text": {
          "es": "6 meses, sólo para quien la tramita por primera vez.",
          "en": "6 months, only for those processing it for the first time.",
          "ru": "6 месяцев, только для тех, кто оформляет впервые."
        },
        "correct": false
      },
      {
        "text": {
          "es": "2 años, independientemente a la edad.",
          "en": "2 years, regardless of age.",
          "ru": "2 года, неза��исимо от возраста."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 97,
    "question": {
      "es": "En un motovehículo, ¿dónde debe transportar la siguiente documentación?",
      "en": "In a motorcycle, where should the following documentation be transported?",
      "ru": "На мотоцикле, где необходимо хранить следующую документацию?"
    },
    "answers": [
      {
        "text": {
          "es": "Debe exhibirla en el parabrisas de la moto.",
          "en": "It must be displayed on the motorcycle's windshield.",
          "ru": "Должен выставить ее на лобовом стекле мотоцикла."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe exhibirla en el tanque.",
          "en": "It must be displayed on the tank.",
          "ru": "Должен выставить ее на баке."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe llevarla consigo mientras conduce, como el resto de la documentación obligatoria.",
          "en": "You must carry it with you while driving, like the rest of the mandatory documentation.",
          "ru": "Должен иметь ее при себе во время вождения, как и остальную обязательную документацию."
        },
        "correct": true
      }
    ],
    "image": "/questions/a5.jpg"
  },
  {
    "id": 98,
    "question": {
      "es": "Un conductor principiante de motovehículo, ¿tiene obligación de llevar la siguiente documentación?",
      "en": "Does a beginner motorcycle driver have to carry the following documentation?",
      "ru": "Обязан ли начинающий водитель мотоцикла иметь следующую документацию?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que esa es una obligación que afecta únicamente a los conductores de automóviles.",
          "en": "No, as that is an obligation that only affects car drivers.",
          "ru": "Нет, так как это обязательство касается только водителей автомобилей."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, hasta cumplirse los 6 meses.",
          "en": "Yes, until 6 months have passed.",
          "ru": "Да, до истечения 6 месяцев."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, hasta que se renueve la licencia de conducir.",
          "en": "Yes, until the driver's license is renewed.",
          "ru": "Да, до тех пор, пока не будет обновлена водительская лицензия."
        },
        "correct": false
      }
    ],
    "image": "/questions/a6.jpg"
  },
  {
    "id": 99,
    "question": {
      "es": "Con esta documentación, ¿quién está autorizado a conducir el motovehículo?",
      "en": "With this documentation, who is authorized to drive the motorcycle?",
      "ru": "С этой документацией, кто имеет право управлять мотоциклом?"
    },
    "answers": [
      {
        "text": {
          "es": "Nadie, porque está vencida y debe renovarse.",
          "en": "No one, because it is expired and must be renewed.",
          "ru": "Никто, потому что она просрочена и должна быть обновлена."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo el titular.",
          "en": "Only the owner.",
          "ru": "Только владелец."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El titular y sus familiares directos, por tener el mismo apellido.",
          "en": "The owner and their immediate family members, due to having the same last name.",
          "ru": "Владелец и его ближайшие родственники, так как у них одна фамилия."
        },
        "correct": false
      }
    ],
    "image": "/questions/a7.jpg"
  },
  {
    "id": 100,
    "question": {
      "es": "¿Cuántas “cédulas para autorizados a conducir” podrán otorgarse para un mismo vehículo?",
      "en": "How many 'licenses for authorized drivers' can be issued for the same vehicle?",
      "ru": "Сколько \"удостоверений для уполномоченных водителей\" может быть выдано для одного и того же транспортного средства?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo una.",
          "en": "Only one.",
          "ru": "Только одно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La cantidad que solicite el titular del vehículo.",
          "en": "The number requested by the vehicle owner.",
          "ru": "Количество, которое запросит владелец транспортного средства."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Hasta cinco.",
          "en": "Up to five.",
          "ru": "До пяти."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 101,
    "question": {
      "es": "¿Se puede manejar un vehículo con “cédula para autorizado a conducir” a nombre de otra persona?",
      "en": "Can you drive a vehicle with a 'license for authorized drivers' in someone else's name?",
      "ru": "Можно ли управлять транспортным средством с \"удостоверением для уполномоченного водителя\" на имя другого человека?"
    },
    "answers": [
      {
        "text": {
          "es": "Siempre y cuando se encuentre vigente.",
          "en": "As long as it is valid.",
          "ru": "При условии, что оно действительно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si es un familiar directo o tiene una relación laboral.",
          "en": "Only if it is a direct family member or has a work relationship.",
          "ru": "Только если это ближайший родственник или есть трудовые отношения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En ningún caso.",
          "en": "In no case.",
          "ru": "В любом случае нет."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 102,
    "question": {
      "es": "El certificado del seguro de responsabilidad civil es obligatorio llevarlo ÚNICAMENTE cuando se conduce por vías interurbanas.",
      "en": "The civil liability insurance certificate is mandatory to carry ONLY when driving on intercity roads.",
      "ru": "Сертификат обязательного страхования гражданской ответственности необходимо иметь ТОЛЬКО при вождении по межгородским дорогам."
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
      "en": "Every vehicle must be covered by insurance, what minimum damages must it cover?",
      "ru": "Каждое транспортное средство должно быть застраховано, какие минимальные убытки оно должно покрывать?"
    },
    "answers": [
      {
        "text": {
          "es": "Eventuales daños causados a terceros transportados únicamente.",
          "en": "Potential damages caused to third parties transported only.",
          "ru": "Возможные убытки, причиненные третьим лицам, только транспортируемым."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Eventuales daños causados a terceros transportados o no.",
          "en": "Potential damages caused to third parties transported or not.",
          "ru": "Возможные убытки, причиненные третьим лицам, транспортируемым или нет."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Daños causados a los vehículos únicamente.",
          "en": "Damages caused to vehicles only.",
          "ru": "Убытки, причиненные только транспортным средствам."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 104,
    "question": {
      "es": "NO está prohibido circular con la placa de dominio del motovehículo de esta forma.",
      "en": "It is NOT prohibited to drive with the motorcycle's license plate in this way.",
      "ru": "Не запрещено передвигаться с номерным знаком мотоцикла таким образом."
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
    "image": "/questions/a8.jpg"
  },
  {
    "id": 105,
    "question": {
      "es": "Para la circulación de motovehículos, la placa de dominio trasera…",
      "en": "For the circulation of motorcycles, the rear license plate...",
      "ru": "Для передвижения мотоциклов задний номерной знак…"
    },
    "answers": [
      {
        "text": {
          "es": "Puede sustituirse por la inscripción de la matrícula pintada en los guardabarros traseros.",
          "en": "Can be replaced by the registration number painted on the rear fenders.",
          "ru": "Может быть заменен на надпись номера, нанесенную на задние крылья."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No es obligatoria.",
          "en": "It is not mandatory.",
          "ru": "Не является обязательным."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe estar colocada centrada respecto al eje longitudinal medio del motovehículo.",
          "en": "It must be placed centered with respect to the vehicle's median longitudinal axis.",
          "ru": "Должен быть установлен по центру относительно средней продольной оси мотоцикла."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 106,
    "question": {
      "es": "¿Cuántas placas de dominio deben llevar los motovehículos?",
      "en": "How many license plates must motorcycles have?",
      "ru": "Сколько номерных знаков должны иметь мотоциклы?"
    },
    "answers": [
      {
        "text": {
          "es": "Una, colocada en la parte trasera, centrada en el eje longitudinal medio del motovehículo.",
          "en": "One, placed at the rear, centered on the vehicle's median longitudinal axis.",
          "ru": "Один, установленный сзади, по центру средней продольной оси мотоцикла."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Dos, una en la parte delantera y otra en la parte trasera.",
          "en": "Two, one at the front and another at the rear.",
          "ru": "Два, один спереди и другой сзади."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Una, colocada del lado izquierdo del motovehículo.",
          "en": "One, placed on the left side of the motorcycle.",
          "ru": "Один, установленный с левой стороны мотоцикла."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 107,
    "question": {
      "es": "¿Se encuentra permitido circular con esta impresión de placa de dominio?",
      "en": "Is it allowed to drive with this printed license plate?",
      "ru": "Разрешено ли передвигаться с этой распечаткой номерного знака?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que cumple la función de identificar al motovehículo.",
          "en": "Yes, as it serves to identify the motorcycle.",
          "ru": "Да, так как она выполняет функцию идентификации мотоцикла."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que la válida es la entregada por la autoridad competente de nivel nacional (DNRPA) y debe estar colocada en el lugar y de forma reglamentaria.",
          "en": "No, as the valid one is the one issued by the competent national authority (DNRPA) and must be placed in the proper location and manner.",
          "ru": "Нет, так как действительным является тот, который выдан компетентным национальным органом (DNRPA) и должен быть установлен в установленном месте и порядке."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que es una placa provisoria.",
          "en": "Yes, as it is a temporary plate.",
          "ru": "Да, так как это временный номерной знак."
        },
        "correct": false
      }
    ],
    "image": "/questions/a9.jpg"
  },
  {
    "id": 108,
    "question": {
      "es": "Al sufrir la pérdida de la placa de dominio de un vehículo, ¿dónde se puede solicitar su reposición?",
      "en": "If the license plate of a vehicle is lost, where can you request its replacement?",
      "ru": "При утрате номерного знака транспортного средства, где можно запросить его замену?"
    },
    "answers": [
      {
        "text": {
          "es": "Se la puede solicitar en cualquier establecimiento comercial que la realice.",
          "en": "It can be requested at any commercial establishment that provides it.",
          "ru": "Его можно запросить в любом коммерческом учреждении, которое это делает."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se la debe solicitar en el Registro Nacional de la Propiedad del Automotor que corresponde al vehículo.",
          "en": "It must be requested at the National Registry of Motor Vehicle Property corresponding to the vehicle.",
          "ru": "Его необходимо запросить в Национальном реестре собственности на автомобили, который соответствует транспортному средству."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 109,
    "question": {
      "es": "La ubicación y posición de las placas de dominio del vehículo, ¿puede sufrir algún tipo de modificación?",
      "en": "Can the location and position of the vehicle's license plates be modified in any way?",
      "ru": "Может ли местоположение и положение номерных знаков автомобиля подвергаться каким-либо изменениям?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo pueden, eventualmente, ampliarse para mejorar su visibilidad.",
          "en": "They can only be expanded eventually to improve visibility.",
          "ru": "Они могут быть, в конечном итоге, расширены для улучшения видимости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, deben estar colocadas en el lugar y de forma reglamentaria.",
          "en": "No, they must be placed in the correct location and in a regulatory manner.",
          "ru": "Нет, они должны быть установлены в установленном месте и в соответствии с правилами."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo está prohibido modificar la placa de dominio trasera, no así la delantera.",
          "en": "Only the rear license plate is prohibited from being modified, not the front one.",
          "ru": "Запрещено изменять только задний номерной знак, передний - нет."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 110,
    "question": {
      "es": "¿Cuál es el objetivo de la Verificación Técnica Vehicular?",
      "en": "What is the objective of the Vehicle Technical Verification?",
      "ru": "Какова цель Технической Проверки Транспортных Средств?"
    },
    "answers": [
      {
        "text": {
          "es": "Reducir la contaminación y mejorar la calidad del medio ambiente.",
          "en": "To reduce pollution and improve the quality of the environment.",
          "ru": "Снизить загрязнение и улучшить качество окружающей среды."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Garantizar el cumplimiento de las normas de seguridad de los vehículos.",
          "en": "To ensure compliance with vehicle safety standards.",
          "ru": "Гарантировать соблюдение норм безопасности транспортных средств."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 111,
    "question": {
      "es": "¿Cuál de las siguientes opciones está directamente vinculada a la prevención y reducción de siniestros viales?",
      "en": "Which of the following options is directly linked to the prevention and reduction of traffic accidents?",
      "ru": "Какой из следующих вариантов непосредственно связан с предотвращением и снижением дорожно-транспортных происшествий?"
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
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/b48.jpg"
  },
  {
    "id": 112,
    "question": {
      "es": "En el caso de tener que realizar una reverificación de la VTV, por motivos de una desaprobación original, ¿cuál es el plazo de tiempo para que ésta sea gratuita?",
      "en": "If a re-verification of the VTV is required due to an original disapproval, what is the time frame for it to be free?",
      "ru": "В случае необходимости повторной проверки Технической Проверки Транспортных Средств (VTV) по причине первоначального отказа, какой срок для бесплатной проверки?"
    },
    "answers": [
      {
        "text": {
          "es": "No hay plazo. Si llegase a desaprobar se deberá volver a abonar el arancel correspondiente, aunque se realice al otro día.",
          "en": "There is no time frame. If it fails, the corresponding fee must be paid again, even if done the next day.",
          "ru": "Срока нет. Если будет отказ, необходимо будет снова оплатить соответствующий сбор, даже если проверка будет проведена на следующий день."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si se realiza dentro de los 60 días corridos a partir de efectuada la verificación.",
          "en": "If done within 60 calendar days from the verification.",
          "ru": "Если проверка проводится в течение 60 календарных дней с момента проведения проверки."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si se realiza dentro de los 60 días hábiles de efectuada la verificación.",
          "en": "If done within 60 business days from the verification.",
          "ru": "Если проверка проводится в течение 60 рабочих дней с момента проведения проверки."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 113,
    "question": {
      "es": "¿Cada cuánto tiempo deben realizar la VTV los motovehículos?",
      "en": "How often must motorcycles undergo the VTV?",
      "ru": "Как часто мотоциклы должны проходить VTV?"
    },
    "answers": [
      {
        "text": {
          "es": "Cada 6 meses.",
          "en": "Every 6 months.",
          "ru": "Каждые 6 месяцев."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los motovehículos están exceptuados de esta obligación.",
          "en": "Motorcycles are exempt from this obligation.",
          "ru": "Мотоциклы освобождены от этого обязательства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La revisión es anual.",
          "en": "The review is annual.",
          "ru": "Проверка проводится раз в год."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 114,
    "question": {
      "es": "¿Cuándo debe realizar la primer VTV un motovehículo?",
      "en": "When should a motorcycle undergo its first VTV?",
      "ru": "Когда мотоцикл должен пройти первую VTV?"
    },
    "answers": [
      {
        "text": {
          "es": "A los 5 años.",
          "en": "At 5 years.",
          "ru": "Через 5 лет."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A los 2 años.",
          "en": "At 2 years.",
          "ru": "Через 2 года."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al año.",
          "en": "After 1 year.",
          "ru": "Через год."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 115,
    "question": {
      "es": "Según el Sistema de Evaluación Permanente de Conductores (Scoring), ¿cuántos puntos se otorgan al conductor que obtiene la licencia de conducir por primera vez?",
      "en": "According to the Permanent Driver Evaluation System (Scoring), how many points are awarded to a driver obtaining a driver's license for the first time?",
      "ru": "Согласно Системе Постоянной Оценки Водителей (Scoring), сколько баллов получает водитель, который впервые получает водительские права?"
    },
    "answers": [
      {
        "text": {
          "es": "10 puntos.",
          "en": "10 points.",
          "ru": "10 баллов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "20 puntos.",
          "en": "20 points.",
          "ru": "20 баллов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "5 puntos.",
          "en": "5 points.",
          "ru": "5 баллов."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 116,
    "question": {
      "es": "¿En qué consiste el Sistema de Evaluación Permanente de Conductores (Scoring)?",
      "en": "What does the Permanent Driver Evaluation System (Scoring) consist of?",
      "ru": "В чем заключается Система Постоянной Оценки Водителей (Scoring)?"
    },
    "answers": [
      {
        "text": {
          "es": "En la asignación de un puntaje para cada conductor, al que se le irá restando puntos por infracciones cometidas.",
          "en": "It consists of assigning a score to each driver, from which points will be deducted for infractions committed.",
          "ru": "В присвоении баллов каждому водителю, у которого будут вычитаться баллы за совершенные нарушения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La obligación de los conductores a realizar un curso vial anual.",
          "en": "The obligation for drivers to take an annual traffic course.",
          "ru": "Обязанность водителей проходить ежегодный курс по безопасности дорожного движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "Both answers, A and B, are incorrect.",
          "ru": "Обе ответы, A и B, неверны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 117,
    "question": {
      "es": "¿Consumir cuál de estas sustancias pueden afectar la capacidad para conducir?",
      "en": "Which of these substances can affect the ability to drive?",
      "ru": "Употребление каких из этих веществ может повлиять на способность управлять автомобилем?"
    },
    "answers": [
      {
        "text": {
          "es": "Las drogas ilegales y algunas legales (como el alcohol y algunos medicamentos).",
          "en": "Illegal drugs and some legal ones (like alcohol and certain medications).",
          "ru": "Незаконные наркотики и некоторые легальные (такие как алкоголь и некоторые лекарства)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo las drogas ilegales.",
          "en": "Only illegal drugs.",
          "ru": "Только незаконные наркотики."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Todo tipo de drogas (las legales e ilegales).",
          "en": "All types of drugs (both legal and illegal).",
          "ru": "Все виды наркотиков (легальные и незаконные)."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 118,
    "question": {
      "es": "La persona que conduce bajo los efectos de estupefacientes…",
      "en": "A person driving under the influence of narcotics...",
      "ru": "Человек, который управляет автомобилем под воздействием наркотиков..."
    },
    "answers": [
      {
        "text": {
          "es": "Se pone en grave riesgo a sí mismo y a todos los que lo rodean.",
          "en": "Puts themselves and everyone around them at serious risk.",
          "ru": "Ставит под серьезный риск себя и всех, кто его окружает."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo pone en riesgo su propia vida.",
          "en": "Only puts their own life at risk.",
          "ru": "Только ставит под риск свою собственную жизнь."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al estar desinhibido, asume menos riesgos.",
          "en": "By being uninhibited, they take fewer risks.",
          "ru": "Будучи раскрепощенным, он принимает меньше рисков."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 119,
    "question": {
      "es": "¿Cuál de estas sustancias pueden afectar negativamente la capacidad de conducir?",
      "en": "Which of these substances can negatively affect the ability to drive?",
      "ru": "Какие из этих веществ могут негативно повлиять на способность управлять автомобилем?"
    },
    "answers": [
      {
        "text": {
          "es": "Todos los medicamentos, de venta libre, que no necesitan receta.",
          "en": "All medications, over-the-counter, that do not require a prescription.",
          "ru": "Все лекарства, отпускаемые без рецепта, которые не требуют рецепта."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Todos los medicamentos con efectos sedantes.",
          "en": "All medications with sedative effects.",
          "ru": "Все лекарства с седативным эффектом."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 120,
    "question": {
      "es": "El consumo de medicamentos, ¿puede afectar la capacidad de conducir?",
      "en": "Can the consumption of medications affect the ability to drive?",
      "ru": "Может ли употребление лекарств повлиять на способность управлять автомобилем?"
    },
    "answers": [
      {
        "text": {
          "es": "Siempre.",
          "en": "Always.",
          "ru": "Всегда."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nunca.",
          "en": "Never.",
          "ru": "Никогда."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Depende del tipo de medicamento.",
          "en": "It depends on the type of medication.",
          "ru": "Это зависит от типа лекарства."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 121,
    "question": {
      "es": "Por los efectos que provoca, el consumo de drogas ilegales no está permitido al momento de conducir; mientras que las drogas legales nunca afectan negativamente la capacidad de conducir.",
      "en": "Due to the effects it causes, the consumption of illegal drugs is not allowed while driving; whereas legal drugs never negatively affect driving ability.",
      "ru": "Из-за эффектов, которые он вызывает, употребление незаконных наркотиков не разрешено во время вождения; в то время как легальные наркотики никогда не оказывают негативного влияния на способность водить."
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
      "en": "When alcohol is consumed, can vision impairments occur?",
      "ru": "При употреблении алкоголя могут ли возникнуть изменения в зрении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí.",
          "en": "Yes.",
          "ru": "Да."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, solamente afecta a la capacidad motora.",
          "en": "No, it only affects motor skills.",
          "ru": "Нет, это только влияет на моторные способности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo cuando se tiene más de 1 gramo de alcohol por litro de sangre.",
          "en": "Only when there is more than 1 gram of alcohol per liter of blood.",
          "ru": "Только когда в крови больше 1 грамма алкоголя на литр."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 123,
    "question": {
      "es": "Una vez que dejó de ingerir alcohol, ¿qué sucede con la concentración de alcohol que tiene en su organismo?",
      "en": "Once you stop consuming alcohol, what happens to the concentration of alcohol in your body?",
      "ru": "Как только вы перестаете употреблять алкоголь, что происходит с концентрацией алкоголя в вашем организме?"
    },
    "answers": [
      {
        "text": {
          "es": "Comienza a disminuir de forma inmediata.",
          "en": "It begins to decrease immediately.",
          "ru": "Она начинает снижаться немедленно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Continúa subiendo durante 1 hora y luego comienza a descender paulatinamente.",
          "en": "It continues to rise for 1 hour and then starts to gradually decrease.",
          "ru": "Она продолжает расти в течение 1 часа, а затем начинает постепенно снижаться."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se mantiene en el mismo valor durante 1 hora y luego comienza a descender.",
          "en": "It remains at the same level for 1 hour and then begins to decrease.",
          "ru": "Она остается на том же уровне в течение 1 часа, а затем начинает снижаться."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 124,
    "question": {
      "es": "Beber cerveza, ¿puede influir en la conducción de un motovehículo?",
      "en": "Does drinking beer influence the operation of a motorcycle?",
      "ru": "Употребление пива может повлиять на управление мотоциклом?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque es una bebida con bajo contenido de alcohol y no afecta al equilibrio.",
          "en": "No, because it is a beverage with low alcohol content and does not affect balance.",
          "ru": "Нет, потому что это напиток с низким содержанием алкоголя и он не влияет на равновесие."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque contiene alcohol y reduce la capacidad de reacción, aumentando el tiempo necesario para responder ante un estímulo.",
          "en": "Yes, because it contains alcohol and reduces reaction capacity, increasing the time needed to respond to a stimulus.",
          "ru": "Да, потому что он содержит алкоголь и снижает реакцию, увеличивая время, необходимое для ответа на стимул."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La cerveza, al tener poca graduación alcohólica, no afecta la conducción si se está habituado a tomarla.",
          "en": "Beer, having low alcohol content, does not affect driving if one is used to drinking it.",
          "ru": "Пиво, имея низкую алкогольную крепость, не влияет на вождение, если вы привыкли его пить."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 125,
    "question": {
      "es": "Conducir al día siguiente de una noche de consumo excesivo de alcohol es riesgoso porque:",
      "en": "Driving the day after a night of excessive alcohol consumption is risky because:",
      "ru": "Вождение на следующий день после ночи чрезмерного употребления алкоголя рискованно, потому что:"
    },
    "answers": [
      {
        "text": {
          "es": "Los efectos del alcohol no terminan con la ingesta, sino que se extienden hasta haberlo eliminado del organismo.",
          "en": "The effects of alcohol do not end with consumption, but extend until it has been eliminated from the body.",
          "ru": "Эффекты алкоголя не заканчиваются с его употреблением, а продолжаются до тех пор, пока он не будет выведен из организма."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Conducir con resaca es equiparable, por sus efectos en el organismo, a conducir alcoholizado.",
          "en": "Driving with a hangover is comparable, due to its effects on the body, to driving while intoxicated.",
          "ru": "Вождение с похмельем сопоставимо, по своим эффектам на организм, с вождением в состоянии алкогольного опьянения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 126,
    "question": {
      "es": "¿La resaca tiene efectos en el organismo que puedan afectar la conducción?",
      "en": "Does a hangover have effects on the body that can affect driving?",
      "ru": "Есть ли у похмелья эффекты на организм, которые могут повлиять на вождение?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero sólo cuando la bebida alcohólica que se ingirió tiene un alto grado de concentración.",
          "en": "Yes, but only when the alcoholic beverage consumed has a high concentration.",
          "ru": "Да, но только если употребленный алкоголь имеет высокий уровень концентрации."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, el nivel de alcohol se ve reducido en cuestión de horas, por ello conducir con resaca no altera las percepciones.",
          "en": "No, the level of alcohol decreases within hours, so driving with a hangover does not alter perceptions.",
          "ru": "Нет, уровень алкоголя снижается за считанные часы, поэтому вождение с похмельем не изменяет восприятие."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, puede afectar la coordinación, la atención y el tiempo de reacción.",
          "en": "Yes, it can affect coordination, attention, and reaction time.",
          "ru": "Да, это может повлиять на координацию, внимание и время реакции."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 127,
    "question": {
      "es": "¿Es peligroso conducir con resaca?",
      "en": "Is it dangerous to drive with a hangover?",
      "ru": "Опасно ли водить с похмельем?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, es peligroso porque tiene efectos en el organismo.",
          "en": "Yes, it is dangerous because it has effects on the body.",
          "ru": "Да, это опасно, потому что это влияет на организм."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que los efectos del alcohol aparecen durante las primeras horas de su ingesta.",
          "en": "No, since the effects of alcohol appear during the first hours of consumption.",
          "ru": "Нет, так как эффекты алкоголя проявляются в первые часы после его упот��ебления."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que los efectos de la resaca no intervienen en la conducción.",
          "en": "No, since the effects of a hangover do not interfere with driving.",
          "ru": "Нет, так как эффекты похмелья не влияют на вождение."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 128,
    "question": {
      "es": "Si un conductor de un automóvil particular obtiene el siguiente resultado en un control de alcoholemia realizado en la Ciudad Autónoma de Buenos Aires, ¿cómo debe proceder la autoridad de control de tránsito?",
      "en": "If a driver of a private car obtains the following result in a breathalyzer test conducted in the Autonomous City of Buenos Aires, how should the traffic control authority proceed?",
      "ru": "Если водитель легкового автомобиля получает следующий результат на тесте на алкоголь в Автономном городе Буэнос-Айрес, как должны действовать органы контроля дорожного движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sancionar la falta administrativa y contravencional, retener la licencia de conducir y remitir el vehículo.",
          "en": "Sanction the administrative and contravention offense, revoke the driver's license, and impound the vehicle.",
          "ru": "Наложить административный и уголовный штраф, отобрать водительские права и эвакуировать автомобиль."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Esperar un tiempo prudencial y realizar una contraprueba, a la espera de que descienda la graduación alcohólica.",
          "en": "Wait a reasonable amount of time and conduct a retest, waiting for the blood alcohol level to decrease.",
          "ru": "Подождать разумное время и провести повторное тестирование, ожидая снижения уровня алкоголя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Darle la opción al conductor de llamar a un tercero para que se haga responsable de la conducción del vehículo.",
          "en": "Give the driver the option to call a third party to take responsibility for driving the vehicle.",
          "ru": "Дать водителю возможность вызвать третье лицо, чтобы оно взяло на себя ответственность за управление автомобилем."
        },
        "correct": false
      }
    ],
    "image": "/questions/b52.jpg"
  },
  {
    "id": 129,
    "question": {
      "es": "Si el conductor de un vehículo se niega a realizar este test, ¿constituye ésto una falta?",
      "en": "If the driver of a vehicle refuses to take this test, does this constitute an offense?",
      "ru": "Если водитель автомобиля отказывается пройти этот тест, является ли это нарушением?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo si se ha participado de un siniestro vial.",
          "en": "Only if involved in a traffic accident.",
          "ru": "Только если он участвовал в дорожно-т��анспортном происшествии."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Sólo la prueba positiva, efectivamente realizada, se considera una falta.",
          "en": "No. Only a positive test, effectively conducted, is considered an offense.",
          "ru": "Нет. Только положительный тест, фактически проведенный, считается нарушением."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, la misma se toma como una presunción de alcoholemia positiva.",
          "en": "Yes, it is taken as a presumption of positive blood alcohol content.",
          "ru": "Да, это рассматривается как предположение о положительном уровне алкоголя."
        },
        "correct": true
      }
    ],
    "image": "/questions/b53.jpg"
  },
  {
    "id": 130,
    "question": {
      "es": "Frente a la negativa por parte del conductor a realizar una prueba de alcoholemia, ¿el agente de control podrá prohibirle continuar conduciendo?",
      "en": "In the event of the driver refusing to take a breathalyzer test, can the control agent prohibit them from continuing to drive?",
      "ru": "В случае отказа водителя пройти тест на алкоголь, может ли контролирующий агент запретить ему продолжать вождение?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que se presume el estado de alcoholemia positiva.",
          "en": "Yes, as a positive blood alcohol content is presumed.",
          "ru": "Да, так как предполагается положительный уровень алкоголя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, deberá ordenar la remoción del vehículo.",
          "en": "Yes, they must order the removal of the vehicle.",
          "ru": "Да, он должен приказать эвакуировать автомобиль."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 131,
    "question": {
      "es": "Si la conductora que se señaliza en la imagen es principiante, ¿cuál es el nivel máximo de alcoholemia que tiene admitido por normativa?",
      "en": "If the driver indicated in the image is a beginner, what is the maximum blood alcohol level allowed by regulation?",
      "ru": "Если водитель, указанный на изображении, является новичком, каков максимальный уровень алкоголя, который ему разрешен по нормам?"
    },
    "answers": [
      {
        "text": {
          "es": "0,0 gramos de alcohol por litro de sangre.",
          "en": "0.0 grams of alcohol per liter of blood.",
          "ru": "0,0 грамм алкоголя на литр крови."
        },
        "correct": true
      },
      {
        "text": {
          "es": "0,2 gramos de alcohol por litro de sangre.",
          "en": "0.2 grams of alcohol per liter of blood.",
          "ru": "0,2 грамма алкоголя на литр крови."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,5 gramos de alcohol por litro de sangre.",
          "en": "0.5 grams of alcohol per liter of blood.",
          "ru": "0,5 грамма алкоголя на литр крови."
        },
        "correct": false
      }
    ],
    "image": "/questions/a10.jpg"
  },
  {
    "id": 132,
    "question": {
      "es": "¿Cuál es el límite de alcohol en sangre permitido para la persona que está señalada en la foto con un círculo rojo?",
      "en": "What is the legal blood alcohol limit for the person indicated in the photo with a red circle?",
      "ru": "Каков допустимый предел алкоголя в крови для человека, изображенного на фото с красным кругом?"
    },
    "answers": [
      {
        "text": {
          "es": "No tiene un límite máximo de alcohol por Ley.",
          "en": "There is no maximum alcohol limit by law.",
          "ru": "По закону нет максимального предела алкоголя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,2 gramos de alcohol por litro de sangre.",
          "en": "0.2 grams of alcohol per liter of blood.",
          "ru": "0,2 грамма алкоголя на литр крови."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,5 gramos de alcohol por litro de sangre.",
          "en": "0.5 grams of alcohol per liter of blood.",
          "ru": "0,5 грамма алкоголя на литр крови."
        },
        "correct": true
      }
    ],
    "image": "/questions/a11.jpg"
  },
  {
    "id": 133,
    "question": {
      "es": "Si la conductora que se señaliza en la imagen no es principiante, ¿cuál es el nivel máximo de alcoholemia que tiene admitido por normativa?",
      "en": "If the driver indicated in the image is not a beginner, what is the maximum blood alcohol level allowed by regulation?",
      "ru": "Если водитель, указанный на изображении, не новичок, каков максимальный уровень алкоголя, допустимый по нормативам?"
    },
    "answers": [
      {
        "text": {
          "es": "0,0 gramos de alcohol por litro de sangre.",
          "en": "0.0 grams of alcohol per liter of blood.",
          "ru": "0,0 грамм алкоголя на литр крови."
        },
        "correct": false
      },
      {
        "text": {
          "es": "0,2 gramos de alcohol por litro de sangre.",
          "en": "0.2 grams of alcohol per liter of blood.",
          "ru": "0,2 грамма алкоголя на литр крови."
        },
        "correct": true
      },
      {
        "text": {
          "es": "0,5 gramos de alcohol por litro de sangre.",
          "en": "0.5 grams of alcohol per liter of blood.",
          "ru": "0,5 грамма алкоголя на литр крови."
        },
        "correct": false
      }
    ],
    "image": "/questions/a12.jpg"
  },
  {
    "id": 134,
    "question": {
      "es": "Si se va a conducir por un largo tiempo, lo recomendable es dormir la noche anterior...",
      "en": "If you are going to drive for a long time, it is advisable to sleep the night before...",
      "ru": "Если вы собираетесь водить долгое время, рекомендуется поспать накануне..."
    },
    "answers": [
      {
        "text": {
          "es": "Aproximadamente 8 horas.",
          "en": "Approximately 8 hours.",
          "ru": "Приблизительно 8 часов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al menos 4 horas.",
          "en": "At least 4 hours.",
          "ru": "Не менее 4 часов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Algunas horas, su cantidad no influye en la conducción ya que lo importante es realizar paradas de descanso.",
          "en": "A few hours, its amount does not influence driving as the important thing is to take rest breaks.",
          "ru": "Несколько часов, их количество не влияет на вождение, так как важно делать перерывы для отдыха."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 135,
    "question": {
      "es": "¿Estar 17 horas despierto provoca tener el mismo nivel de reacción que una persona con un nivel de alcohol en sangre mayor al permitido por Ley?",
      "en": "Does being awake for 17 hours cause the same level of reaction as a person with a blood alcohol level higher than the legal limit?",
      "ru": "Быть бодрствующим 17 часов вызывает такой же уровень реакции, как у чело��ека с уровнем алкоголя в крови выше допустимого по закону?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que ambas condiciones aumentan el tiempo de reacción.",
          "en": "Yes, as both conditions increase reaction time.",
          "ru": "Да, так как оба состояния увеличивают время реакции."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que sólo tener alcoholemia positiva aumenta el tiempo de reacción.",
          "en": "No, as only having a positive blood alcohol level increases reaction time.",
          "ru": "Нет, так как только наличие положительного алкоголя увеличивает время реакции."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, el descanso no tiene nada que ver con el consumo de alcohol.",
          "en": "No, rest has nothing to do with alcohol consumption.",
          "ru": "Нет, отдых не имеет ничего общего с потреблением алкоголя."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 136,
    "question": {
      "es": "El cansancio puede verse inducido por ingerir:",
      "en": "Fatigue can be induced by consuming:",
      "ru": "Усталость может быть вызвана употреблением:"
    },
    "answers": [
      {
        "text": {
          "es": "Bebidas alcohólicas.",
          "en": "Alcoholic beverages.",
          "ru": "Алкогольных напитков."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comidas abundantes.",
          "en": "Heavy meals.",
          "ru": "Обильной пищи."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 137,
    "question": {
      "es": "¿Cuáles de éstos son los síntomas que advierten sobre la fatiga en la conducción?",
      "en": "Which of these are symptoms that warn about fatigue while driving?",
      "ru": "Какие из этих симптомов предупреждают о fatigue при вождении?"
    },
    "answers": [
      {
        "text": {
          "es": "La sensación de euforia.",
          "en": "The feeling of euphoria.",
          "ru": "Чувство эйфории."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La visión borrosa y el aumento del número y duración de parpadeos.",
          "en": "Blurred vision and increased number and duration of blinks.",
          "ru": "Размытое зрение и увеличение количества и продолжительности морганий."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No realizar movimientos en el asiento, ni cambios de postura.",
          "en": "Not making movements in the seat, nor changing posture.",
          "ru": "Не делать движений на сиденье и не менять позу."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 138,
    "question": {
      "es": "Un conductor principiante, ¿puede sentirse más fácilmente fatigado?",
      "en": "Can a beginner driver feel more easily fatigued?",
      "ru": "Может ли начинающий водитель быстрее уставать?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, por la falta de experiencia en la conducción.",
          "en": "Yes, due to lack of experience in driving.",
          "ru": "Да, из-за недостатка опыта в вождении."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque todos somos iguales ante la Ley.",
          "en": "No, because we are all equal under the law.",
          "ru": "Нет, потому что мы все равны перед законом."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Únicamente cuando se trata de una persona que padece de fatiga crónica.",
          "en": "Only when it is a person suffering from chronic fatigue.",
          "ru": "Только если это человек, страдающий хронической усталостью."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 139,
    "question": {
      "es": "¿Por qué es peligroso conducir cansado?",
      "en": "Why is it dangerous to drive tired?",
      "ru": "Почему опасно водить уставшим?"
    },
    "answers": [
      {
        "text": {
          "es": "Porque reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
          "en": "Because it reduces reaction capacity and increases the time needed to respond to a stimulus.",
          "ru": "Потому что это снижает способность к реакции и увеличивает время, необходимое для ответа на стимул."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Porque se circula más rápido.",
          "en": "Because you drive faster.",
          "ru": "Потому что скорость увеличивается."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Porque el viaje dura más.",
          "en": "Because the trip takes longer.",
          "ru": "Потому что поездка длится дольше."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 140,
    "question": {
      "es": "¿Qué consecuencias tiene conducir habiendo dormido pocas horas previamente?",
      "en": "What are the consequences of driving after having slept few hours beforehand?",
      "ru": "Каковы последствия вождения после недостаточного сна?"
    },
    "answers": [
      {
        "text": {
          "es": "Reduce la capacidad de reacción y el estado de alerta.",
          "en": "It reduces reaction capacity and alertness.",
          "ru": "Снижает способность к реакции и состояние бдительности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Predispone a tomar malas decisiones, poniendo en riesgo la vida.",
          "en": "It predisposes to make poor decisions, putting life at risk.",
          "ru": "Предрасполагает к принятию плохих решений, ставя под угрозу жизнь."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 141,
    "question": {
      "es": "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor:",
      "en": "To avoid or delay the onset of fatigue, it is advisable for the driver to:",
      "ru": "Чтобы избежать или отложить появление усталости, рекомендуется, чтобы водитель:"
    },
    "answers": [
      {
        "text": {
          "es": "Escuche música a alto volúmen.",
          "en": "Listen to music at high volume.",
          "ru": "Слушал музыку на высокой громкости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mantenga el interior del vehículo a una temperatura superior a 25 °C.",
          "en": "Keep the interior of the vehicle at a temperature above 25 °C.",
          "ru": "Поддерживал температуру в сало��е автомобиля выше 25 °C."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mantenga bien ventilado el interior del vehículo.",
          "en": "Keep the interior of the vehicle well ventilated.",
          "ru": "Поддерживал хороший воздухообмен в салоне автомобиля."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 142,
    "question": {
      "es": "¿Puede afectar negativamente la conducción, si el acompañante comienza una discusión con el conductor o con otra persona de la vía pública?",
      "en": "Can driving be negatively affected if the passenger starts a discussion with the driver or with another person in public?",
      "ru": "Может ли негативно повлиять на вождение, если пассажир начинает спорить с водителем или с другим человеком на улице?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo si es con el conductor. Si la discusión es con otra persona, lo mantiene en alerta ya que la tensión evita la somnolencia.",
          "en": "Only if it is with the driver. If the discussion is with another person, it keeps them alert as tension prevents drowsiness.",
          "ru": "Только если это с водителем. Если спор с другим человеком, это держит его в напряжении, так как напряжение предотвращает сонливость."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, puede entorpecer su capacidad de atención al contexto, ya que las discusiones generan un estado de estrés.",
          "en": "Yes, it can hinder their ability to pay attention to the context, as arguments generate a state of stress.",
          "ru": "Да, это может затруднить его способность обращать внимание на окружающую обстановку, так как споры вызывают стресс."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No genera ningún efecto, siempre y cuando el conductor esté en condiciones legales para conducir.",
          "en": "It has no effect, as long as the driver is legally fit to drive.",
          "ru": "Не оказывает никакого эффекта, если только водитель находится в законных условиях для вождения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 143,
    "question": {
      "es": "Bajo los efectos del estrés, la conducción se vuelve:",
      "en": "Under the effects of stress, driving becomes:",
      "ru": "Под воздействием стресса вождение становится:"
    },
    "answers": [
      {
        "text": {
          "es": "Más temeraria.",
          "en": "More reckless.",
          "ru": "Более рискованным."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Menos segura.",
          "en": "Less safe.",
          "ru": "Менее безопасно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 144,
    "question": {
      "es": "El estrés no necesariamente puede alterar las capacidades para conducir de manera segura.",
      "en": "Stress does not necessarily alter the ability to drive safely.",
      "ru": "Стресс не обязательно может изменить способности к безопасному вождению."
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
      "en": "What is the average reaction time of a driver from the moment they perceive a danger until they apply the brake?",
      "ru": "Каково среднее время реакции водителя с момента восприятия опасности до нажатия на тормоза?"
    },
    "answers": [
      {
        "text": {
          "es": "Aproximadamente 1 segundo.",
          "en": "Approximately 1 second.",
          "ru": "Приблизительно 1 секунда."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Entre 2 y 3 segundos.",
          "en": "Between 2 and 3 seconds.",
          "ru": "От 2 до 3 секунд."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es inmediato, no transcurre tiempo entre estas acciones.",
          "en": "It is immediate; there is no time elapsed between these actions.",
          "ru": "Это мгновенно, между этими действиями не проходит времени."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 146,
    "question": {
      "es": "Durante esta situación, ¿es riesgoso que el conductor utilice el teléfono celular?",
      "en": "During this situation, is it risky for the driver to use a cell phone?",
      "ru": "В данной ситуации рискованно ли водителю использовать мобильный телефон?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que no hay otros vehículos junto a él.",
          "en": "No, since there are no other vehicles next to them.",
          "ru": "Нет, так как рядом нет других транспортных средств."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que a pesar de estar detenido, está en la vía de circulación y su atención no está dirigida al contexto.",
          "en": "Yes, because despite being stopped, they are in the traffic lane and their attention is not directed to the context.",
          "ru": "Да, так как, несмотря на то, что он остановился, он находится на проезжей части, и его внимание не направлено на окружающую обстановку."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que el vehículo no está en movimiento.",
          "en": "No, since the vehicle is not in motion.",
          "ru": "Нет, так как транспортное средство не движется."
        },
        "correct": false
      }
    ],
    "image": "/questions/b57.jpg"
  },
  {
    "id": 147,
    "question": {
      "es": "La siguiente acción del conductor, ¿es considerada un factor de riesgo?",
      "en": "Is the driver's next action considered a risk factor?",
      "ru": "Следующее действие водителя считается фактором риска?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que el conductor no está utilizando sus manos para mantener una comunicación telefónica.",
          "en": "No, since the driver is not using their hands to maintain a phone conversation.",
          "ru": "Нет, так как водитель не использует руки для поддержания телефонного разговора."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, sólo cuando circula a altas velocidades.",
          "en": "Yes, only when driving at high speeds.",
          "ru": "Да, только когда он движется на высокой скорости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque interfiere en su atención al contexto.",
          "en": "Yes, because it interferes with their attention to the context.",
          "ru": "Да, потому что это отвлекает его внимание от окружающей обстановки."
        },
        "correct": true
      }
    ],
    "image": "/questions/b59.jpg"
  },
  {
    "id": 148,
    "question": {
      "es": "La siguiente acción del conductor es riesgosa porque:",
      "en": "The driver's next action is risky because:",
      "ru": "Следующее действие водителя рискованно, потому что:"
    },
    "answers": [
      {
        "text": {
          "es": "Disminuye su capacidad atencional, limita el sentido de la audición, reduce la capacidad de reacción y aumenta el tiempo necesario para responder ante un estímulo.",
          "en": "It decreases their attentional capacity, limits the sense of hearing, reduces reaction capacity, and increases the time needed to respond to a stimulus.",
          "ru": "Снижает его внимательность, ограничивает слух, уменьшает реакцию и увеличивает время, необходимое для ответа на стимул."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El conductor debe mantener ambas manos comprometidas en la acción de conducir y al manipularlo, reduciría su capacidad para maniobrar.",
          "en": "The driver must keep both hands engaged in the act of driving, and manipulating it would reduce their ability to maneuver.",
          "ru": "Водитель должен держать обе руки занятыми в процессе вождения, и при манипуляциях он уменьшит свою способность маневрировать."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ],
    "image": "/questions/b60.jpg"
  },
  {
    "id": 149,
    "question": {
      "es": "¿Se encuentra prohibida la acción de la persona señalada con el círculo rojo?",
      "en": "Is the action of the person marked with the red circle prohibited?",
      "ru": "Запрещено ли действие лица, обознач��нного красным кругом?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque se encuentra en el asiento delantero.",
          "en": "Yes, because they are in the front seat.",
          "ru": "Да, потому что он находится на переднем сиденье."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque la prohibición del uso de telefonía celular alcanza sólo al conductor del vehículo.",
          "en": "No, because the prohibition on using cell phones only applies to the driver of the vehicle.",
          "ru": "Нет, потому что запрет на использование мобильного телефона касается только водителя транспортного средства."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, su uso se encuentra prohibido para todos los ocupantes del vehículo.",
          "en": "Yes, its use is prohibited for all occupants of the vehicle.",
          "ru": "Да, его использование запрещено для всех пассажиров транспортного средства."
        },
        "correct": false
      }
    ],
    "image": "/questions/b61.jpg"
  },
  {
    "id": 150,
    "question": {
      "es": "Si un conductor necesita realizar una llamada de urgencia con el teléfono celular, ¿qué debe hacer para no generar una situación de riesgo en la vía pública?",
      "en": "If a driver needs to make an emergency call with a cell phone, what should they do to avoid creating a risky situation on public roads?",
      "ru": "Если водителю необходимо сделать экстренный звонок с мобильного телефона, что он должен сделать, чтобы не создать рискованную ситуацию на дороге?"
    },
    "answers": [
      {
        "text": {
          "es": "Colocar balizas y detenerse en un lugar donde esté permitido.",
          "en": "Turn on hazard lights and stop in a place where it is allowed.",
          "ru": "Включить аварийные сигналы и остановиться в разрешенном месте."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ocupar el carril derecho, para circular a baja velocidad, y utilizar las balizas.",
          "en": "Use the right lane to drive at low speed and use the hazard lights.",
          "ru": "Занять правую полосу, чтобы двигаться на низкой скорости, и использовать аварийные сигналы."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tratarse de una llamada de urgencia, no importa donde se realice.",
          "en": "Since it is an emergency call, it does not matter where it is made.",
          "ru": "Поскольку это экстренный звонок, не имеет значения, где он осуществляется."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 151,
    "question": {
      "es": "La presente conducta, ¿es riesgosa al momento de conducir?",
      "en": "Is this behavior risky while driving?",
      "ru": "Является ли данное поведе��ие рискованным во время вождения?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque es considerado un factor de distracción.",
          "en": "Yes, because it is considered a distraction factor.",
          "ru": "Да, потому что это считается фактором отвлечения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Únicamente si se circula a altas velocidades.",
          "en": "Only if driving at high speeds.",
          "ru": "Только если он движется на высокой скорости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al contrario, ayuda a mantener la atención en la conducción.",
          "en": "On the contrary, it helps maintain attention on driving.",
          "ru": "Наоборот, это помогает поддерживать внимание на вождении."
        },
        "correct": false
      }
    ],
    "image": "/questions/b62.jpg"
  },
  {
    "id": 152,
    "question": {
      "es": "La acción que se presenta en la imagen es considerada riesgosa para la conducción de un vehículo.",
      "en": "The action presented in the image is considered risky for driving a vehicle.",
      "ru": "Действие, представленное на изображении, считается рискованным для управления транспортным средством."
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
    "image": "/questions/b63.jpg"
  },
  {
    "id": 153,
    "question": {
      "es": "Indique el orden de prioridad normativo que debe respetar (de mayor a menor jerarquía):",
      "en": "Indicate the order of regulatory priority that must be respected (from highest to lowest hierarchy):",
      "ru": "Укажите порядок приоритетности норм, который необходимо соблюдать (от высшего к низшему):"
    },
    "answers": [
      {
        "text": {
          "es": "Normas legales de carácter general; Señalización; Indicaciones de la autoridad competente.",
          "en": "General legal norms; Signage; Instructions from the competent authority.",
          "ru": "Общие правовые нормы; Дорожные знаки; Указания компетентного органа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indicaciones de la autoridad competente; Señalización; Normas legales de carácter general.",
          "en": "Instructions from the competent authority; Signage; General legal norms.",
          "ru": "Указания компетентного органа; Дорожные знаки; Общие правовые нормы."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Señalización; Normas legales de carácter general; Indicaciones de la autoridad competente.",
          "en": "Signage; General legal norms; Instructions from the competent authority.",
          "ru": "Дорожные знаки; Общие правовые нормы; Указания компетентного органа."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 154,
    "question": {
      "es": "Si al llegar a un cruce se presentan estas 3 señales, ¿cuál de ellas tiene prioridad normativa por sobre las demás?",
      "en": "If these 3 signs appear at an intersection, which one has regulatory priority over the others?",
      "ru": "Если при подъезде к перекрестку появляются эти 3 знака, какой из ни�� имеет приоритет над остальными?"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La opción C.",
          "en": "Option C.",
          "ru": "Вариант C."
        },
        "correct": true
      }
    ],
    "image": "/questions/b66.jpg"
  },
  {
    "id": 155,
    "question": {
      "es": "Como conductor, ¿qué debe realizar frente a la siguiente situación?",
      "en": "As a driver, what should you do in the following situation?",
      "ru": "Как водителю следует действовать в следующей ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Avanzar porque la luz verde del semáforo lo habilita.",
          "en": "Proceed because the green light of the traffic signal allows it.",
          "ru": "Продолжить движение, потому что зеленый свет светофора это позволяет."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerse y esperar a la indicación del agente de tránsito para avanzar.",
          "en": "Stop and wait for the traffic agent's indication to proceed.",
          "ru": "Остановиться и ждать указания сотрудника дорожной полиции для продолжения движения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar sólo si no pasan vehículos en la intersección.",
          "en": "Proceed only if no vehicles are passing through the intersection.",
          "ru": "Продвигаться только если в перекрестке не проезжают автомобили."
        },
        "correct": false
      }
    ],
    "image": "/questions/b67.jpg"
  },
  {
    "id": 156,
    "question": {
      "es": "¿Qué está indicando el agente de tránsito al realizar esta señal a un conductor?",
      "en": "What is the traffic agent indicating to a driver by making this signal?",
      "ru": "Что указывает сотрудник дорожной полиции, делая этот жест водителю?"
    },
    "answers": [
      {
        "text": {
          "es": "Que circule con precaución.",
          "en": "To proceed with caution.",
          "ru": "Что следует двигаться с осторожностью."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que detenga el vehículo.",
          "en": "To stop the vehicle.",
          "ru": "Что следует остановить транспортное средство."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que continúe avanzando.",
          "en": "To continue moving forward.",
          "ru": "Что следует продолжать движение."
        },
        "correct": false
      }
    ],
    "image": "/questions/b68.jpg"
  },
  {
    "id": 157,
    "question": {
      "es": "Los Agentes de Tránsito pueden proceder a la detención de un vehículo únicamente con la presencia de personal policial.",
      "en": "Traffic Agents can only proceed to stop a vehicle in the presence of police personnel.",
      "ru": "Сотрудники дорожной полиции могут остановить транспортное средство только в присутствии полицейских."
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
      "en": "If while driving on a road the indicated person tells you to stop, are you obligated to obey?",
      "ru": "Если, двигаясь по дороге, указанное лицо указывает вам остановиться, обязаны ли вы подчиниться?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque al ser personal de obra está autorizado a regular el paso de vehículos en el tramo donde están trabajando.",
          "en": "Yes, because as construction personnel they are authorized to regulate the passage of vehicles in the section where they are working.",
          "ru": "Да, потому что, будучи рабочим, он уполномочен регулировать движение транспортных средств на участке, где они работают."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si se percibe una situación riesgosa ya que el personal de obra no tiene la autoridad legal para realizar dicha indicación.",
          "en": "Only if a risky situation is perceived since construction personnel do not have the legal authority to give such an indication.",
          "ru": "Только если возникает рискованная ситуация, так как рабочий не имеет юридических полномочий для такого указания."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque no tiene autoridad ya que la Ley sólo delega dicha función a los agentes de tránsito.",
          "en": "No, because they do not have authority as the law only delegates that function to traffic agents.",
          "ru": "Нет, потому что у него нет полномочий, так как Закон делегирует эту функцию только сотрудникам дорожной полиции."
        },
        "correct": false
      }
    ],
    "image": "/questions/b69.jpg"
  },
  {
    "id": 159,
    "question": {
      "es": "Si se encuentra en esta situación y el personal ferroviario le indica que avance, ¿qué debe hacer?",
      "en": "If you find yourself in this situation and the railway personnel indicates that you should proceed, what should you do?",
      "ru": "Если вы находитесь в этой ситуации и работник железной дороги указывает вам двигаться вперед, что вы должны сделать?"
    },
    "answers": [
      {
        "text": {
          "es": "Avanzar porque el personal ferroviario está autorizado a regular el paso de vehículos.",
          "en": "Proceed because railway personnel are authorized to regulate the passage of vehicles.",
          "ru": "Продвигаться, потому что работник железной дороги уполномочен регулировать движение транспортных средств."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Detenerme y esperar hasta que la barrera se levante porque el personal ferroviario no tiene la autoridad legal para realizar dicha indicación.",
          "en": "Stop and wait until the barrier is lifted because railway personnel do not have the legal authority to give such an indication.",
          "ru": "Остановиться и ждать, пока шлагбаум поднимется, потому что работник железной дороги не имеет юридических полномочий для такого указания."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Detenerme y esperar hasta que la barrera se levante, salvo que la indicación sea realizada por un agente de tránsito ya que es la única autoridad competente.",
          "en": "Stop and wait until the barrier is lifted, unless the indication is given by a traffic agent as they are the only competent authority.",
          "ru": "Остановиться и ждать, пока шлагбаум поднимется, если только указание не сделано сотрудником дорожной полиции, так как это единственный компетентный орган."
        },
        "correct": false
      }
    ],
    "image": "/questions/b70.jpg"
  },
  {
    "id": 160,
    "question": {
      "es": "¿Qué indican las señales transitorias naranjas ubicadas en la calzada de la presente imagen?",
      "en": "What do the orange temporary signs located on the roadway in this image indicate?",
      "ru": "Что указывают временные оранжевые знаки, расположенные на проезжей части на данном изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Refuerzan el significado de las líneas discontinuas del carril porque es una zona peligrosa.",
          "en": "They reinforce the meaning of the dashed lines of the lane because it is a dangerous area.",
          "ru": "Уточняют значение прерывистых линий полосы, потому что это опасная зона."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nada, no son señales de circulación y es ilegal su colocación.",
          "en": "Nothing, they are not traffic signs and their placement is illegal.",
          "ru": "Ничего, это не дорожные знаки, и их установка незаконна."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La prohibición de sobrepasar la línea imaginaria que las une.",
          "en": "The prohibition of crossing the imaginary line that connects them.",
          "ru": "Запрет на пересечение воображаемой линии, соединяющей их."
        },
        "correct": true
      }
    ],
    "image": "/questions/b71.jpg"
  },
  {
    "id": 161,
    "question": {
      "es": "Las señales transitorias señalizan la ejecución de trabajos de construcción y mantenimiento en la vía, o en zonas próximas a las mismas:",
      "en": "Temporary signs indicate the execution of construction and maintenance work on the road, or in areas close to them:",
      "ru": "Временные знаки сигнализируют о проведении строительных и ремонтных работ на дороге или в близлежащих зонах:"
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
      "en": "Temporary signage takes precedence over traffic lights if it modifies the normal usage of the road.",
      "ru": "Временная сигнализация имеет приоритет над светофорами, если она изменяет нормальный режим испо��ьзования дороги."
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
      "en": "If while driving a vehicle you find yourself at an intersection with this flashing signal, what attitude should you take?",
      "ru": "Если, управляя транспортным средством, вы находитесь на перекрестке с этой мигающей сигнализацией, какое поведение вы должны принять?"
    },
    "answers": [
      {
        "text": {
          "es": "Tengo la obligación de detener la marcha y cuando no haya más vehículos circulando por la arteria que cruza, puedo reiniciarla.",
          "en": "I am obligated to stop, and when there are no more vehicles circulating on the artery that crosses, I can resume.",
          "ru": "Я обязан остановить движение, и когда больше не будет проезжающих автомобилей по пересекаемой артерии, я могу его возобновить."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
          "en": "Since I have priority, I must cross quickly to avoid obstructing the road.",
          "ru": "Имея приоритет, я должен быстро пересечь, чтобы не препятствовать движению."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Efectuar el cruce con máxima precaución.",
          "en": "Cross with maximum caution.",
          "ru": "Пересекать с максимальной осторожностью."
        },
        "correct": true
      }
    ],
    "image": "/questions/b73.jpg"
  },
  {
    "id": 164,
    "question": {
      "es": "Si al conducir un vehículo se encuentra en una intersección con esta señalización intermitente, ¿qué actitud debe tomar?",
      "en": "If while driving a vehicle you find yourself at an intersection with this flashing signal, what attitude should you take?",
      "ru": "Если, управляя транспортным средством, вы находитесь на перекрестке с этой мигающей сигнализацией, какое поведение вы должны принять?"
    },
    "answers": [
      {
        "text": {
          "es": "Detener la marcha y realizar el cruce cuando se tenga la certeza de que no existe riesgo alguno.",
          "en": "Stop and cross when certain that there is no risk.",
          "ru": "Остановить движение и пересекать, когда есть уверенность, что нет никакого риска."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al tener prioridad, debo atravesarla rápidamente para no obstaculizar la vía.",
          "en": "Since I have priority, I must cross quickly to avoid obstructing the road.",
          "ru": "Имея приоритет, я должен быстро пересечь, чтобы не препятствовать движению."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Extremar precauciones al cruzar sin la necesidad de detenerme.",
          "en": "Exercise extreme caution when crossing without the need to stop.",
          "ru": "Усиливать осторожность при пересечении без необходимости останавливаться."
        },
        "correct": false
      }
    ],
    "image": "/questions/b74.jpg"
  },
  {
    "id": 165,
    "question": {
      "es": "Frente a esta situación, ¿qué debe hacer el conductor del vehículo señalado con el círculo rojo?",
      "en": "In this situation, what should the driver of the vehicle marked with the red circle do?",
      "ru": "В данной ситуации что должен сделать водитель транспортного средства, отмеченного красным кругом?"
    },
    "answers": [
      {
        "text": {
          "es": "Avanzar si es que el vehículo que cruza lo hace lentamente porque la prioridad de paso está dada por la luz verde.",
          "en": "Proceed if the crossing vehicle is moving slowly because the right of way is given by the green light.",
          "ru": "Продвигаться, если пересекающий автомобиль движется медленно, потому что приоритет прохода определяется зеленым светом."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No iniciar el cruce, hasta que el otro vehículo haya completado el suyo.",
          "en": "Do not start crossing until the other vehicle has completed its crossing.",
          "ru": "Не начинать пересечение, пока другой автомобиль не завершит свое."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar rápidamente si el vehículo que cruza todavía no llegó a mitad del cruce, de esa manera se deja libre la intersección.",
          "en": "Advance quickly if the crossing vehicle has not yet reached the midpoint of the crossing, thus clearing the intersection.",
          "ru": "Продвигаться быстро, если пересекающий автомобиль еще не достиг середины перекрестка, таким образом, перекресток освобождается."
        },
        "correct": false
      }
    ],
    "image": "/questions/b75.jpg"
  },
  {
    "id": 166,
    "question": {
      "es": "Cuando un semáforo cambia de luz roja a verde, está habilitando a reiniciar la marcha; no obstante ello, ¿qué precauciones se deben adoptar?",
      "en": "When a traffic light changes from red to green, it allows you to resume movement; however, what precautions should be taken?",
      "ru": "Когда светофор меняет цвет с красного на зеленый, он разрешает возобновить движение; однако, какие меры предосторожности следует принять?"
    },
    "answers": [
      {
        "text": {
          "es": "No iniciar el cruce si no hay espacio para ubicar el vehículo del otro lado sin obstruir la circulación transversal.",
          "en": "Do not start crossing if there is no space to place the vehicle on the other side without obstructing cross traffic.",
          "ru": "Не начинать пересечение, если нет места для размещения автомобиля с другой стороны, не препятствуя поперечному движению."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Permitir, antes de avanzar, que complete el cruce otro vehículo o peatón que ya lo haya iniciado.",
          "en": "Allow, before proceeding, another vehicle or pedestrian that has already started crossing to complete their crossing.",
          "ru": "Разрешить, прежде чем продвигаться, завершить пересечение другому автомобилю или пешеходу, который уже его начал."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 167,
    "question": {
      "es": "Una indicación puede estar expresada con una señal vertical o con una demarcación horizontal, ya que ambas tienen el mismo significado y orden jerárquico.",
      "en": "An indication can be expressed with a vertical sign or with a horizontal marking, as both have the same meaning and hierarchical order.",
      "ru": "Указание может быть выражено вертикальным знаком или горизонтальной разметкой, так как оба имеют одинаковое значение и иерархический порядок."
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
      "en": "What does this yellow marking on the roadway indicate?",
      "ru": "Что указывает эта желтая разметка на проезжей части?"
    },
    "answers": [
      {
        "text": {
          "es": "Que es un sector destinado a la detención y al estacionamiento de vehículos.",
          "en": "That it is an area designated for stopping and parking vehicles.",
          "ru": "Что это сектор, предназначенный для остановки и парковки транспортных средств."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que se debe circular lentamente por su sector central.",
          "en": "That you should drive slowly through its central section.",
          "ru": "Что следует двигаться медленно по его центральному сектору."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que no se debe circular sobre ella.",
          "en": "That you should not drive over it.",
          "ru": "Что не следует двигаться по ней."
        },
        "correct": true
      }
    ],
    "image": "/questions/b76.jpg"
  },
  {
    "id": 169,
    "question": {
      "es": "En materia de señalamiento horizontal, ¿qué se entiende por “isleta”?",
      "en": "In terms of horizontal signaling, what is understood by 'island'?",
      "ru": "В области горизонтальной сигнализации, что понимается под \"островком\"?"
    },
    "answers": [
      {
        "text": {
          "es": "Son las rotondas.",
          "en": "They are roundabouts.",
          "ru": "Это круговые развязки."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son los espacios reservados para estacionamiento exclusivo de motovehículos.",
          "en": "They are spaces reserved for the exclusive parking of motorcycles.",
          "ru": "Это места, зарезервированные для парковки исключительно мотоциклов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son las marcas canalizadoras de tránsito. No se puede traspasar o circular sobre ellas.",
          "en": "They are channeling markings for traffic. They cannot be crossed or driven over.",
          "ru": "Это направляющие дорожные знаки. Нельзя пересекать или двигаться по ним."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 170,
    "question": {
      "es": "¿Qué significa esta demarcación amarilla en la calzada?",
      "en": "What does this yellow marking on the roadway mean?",
      "ru": "Что означает эта желтая разметка на проезжей части?"
    },
    "answers": [
      {
        "text": {
          "es": "Es una señalización que se utiliza únicamente para dividir los carriles de la vía.",
          "en": "It is a marking used solely to divide the lanes of the road.",
          "ru": "Это разметка, которая используется исключительно для разделения полос движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica, para ambos sentidos de circulación, que no debe ser traspasada ni se puede circular sobre ella.",
          "en": "It indicates, for both directions of traffic, that it must not be crossed or driven over.",
          "ru": "Указывает, что для обоих направлений движения нельзя пересекать и нельзя двигаться по ней."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Significa que sólo pueden circular vehículos particulares.",
          "en": "It means that only private vehicles may circulate.",
          "ru": "Это означает, что могут двигаться только частные автомобили."
        },
        "correct": false
      }
    ],
    "image": "/questions/b77.jpg"
  },
  {
    "id": 171,
    "question": {
      "es": "En la siguiente imagen, ¿qué indican las líneas centrales de la calzada señaladas?",
      "en": "In the following image, what do the central lines of the marked roadway indicate?",
      "ru": "На следующем изображении, что указывают центральные линии проезжей части?"
    },
    "answers": [
      {
        "text": {
          "es": "Que se pueden traspasar.",
          "en": "That they can be crossed.",
          "ru": "Что их можно пересекать."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que está prohibido traspasarlas.",
          "en": "That crossing them is prohibited.",
          "ru": "Что их пересекать запрещено."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es una zona de máximo peligro.",
          "en": "That it is a high-risk area.",
          "ru": "Что это зона максимальной опасности."
        },
        "correct": false
      }
    ],
    "image": "/questions/b78.jpg"
  },
  {
    "id": 172,
    "question": {
      "es": "¿Qué significa la demarcación horizontal señalada?",
      "en": "What does the marked horizontal demarcation mean?",
      "ru": "Что означает указанная горизонтальная разметка?"
    },
    "answers": [
      {
        "text": {
          "es": "Carril exclusivo para motos.",
          "en": "Exclusive lane for motorcycles.",
          "ru": "Полоса, предназначенная исключительно для мотоциклов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona de estacionamiento para motos.",
          "en": "Parking area for motorcycles.",
          "ru": "Зона парковки для мотоциклов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona de detención segura de motos.",
          "en": "Safe stopping area for motorcycles.",
          "ru": "Зона безопасной остановки для мотоциклов."
        },
        "correct": true
      }
    ],
    "image": "/questions/a13.jpg"
  },
  {
    "id": 173,
    "question": {
      "es": "¿Para qué sirve la demarcación horizontal señalada?",
      "en": "What is the purpose of the marked horizontal demarcation?",
      "ru": "Для чего служит указанная горизонтальная разметка?"
    },
    "answers": [
      {
        "text": {
          "es": "Mejorar la visibilidad de los motovehículos e indicar la presencia de una zona de detención exclusiva de los mismos.",
          "en": "To improve the visibility of motorcycles and indicate the presence of an exclusive stopping area for them.",
          "ru": "Улучшить видимость мотоциклов и указать на наличие зоны остановки, предназначенной исключительно для них."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Permitir la circulación exclusiva de los motovehículos por un carril.",
          "en": "To allow the exclusive circulation of motorcycles in a lane.",
          "ru": "Позволить движение мотоциклов по одной полосе."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Señalizar que por allí está prohibida la circulación de motovehículos.",
          "en": "To signal that the circulation of motorcycles is prohibited there.",
          "ru": "Указать, что движение мотоциклов там запрещено."
        },
        "correct": false
      }
    ],
    "image": "/questions/a14.jpg"
  },
  {
    "id": 174,
    "question": {
      "es": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
      "en": "According to Law No. 2148, what does the following horizontal demarcation indicate?",
      "ru": "Согласно Закону № 2148, что указывает следующая горизонтальная разметка?"
    },
    "answers": [
      {
        "text": {
          "es": "Que está prohibido estacionar, pudiendo efectuarse la detención para ascenso y descenso de pasajeros.",
          "en": "That parking is prohibited, but stopping is allowed for the boarding and alighting of passengers.",
          "ru": "Что парковка запрещена, но остановка разрешена для посадки и высадки пассажиров."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es un espacio reservado al estacionamiento exclusivo de vehículos destinados al servicio de emergencia.",
          "en": "That it is a space reserved for the exclusive parking of vehicles intended for emergency service.",
          "ru": "Что это место, зарезервированное для парковки исключительно автомобилей, предназначенных для экстренной службы."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que está prohibido estacionar o detenerse paralelo al cordón.",
          "en": "That parking or stopping parallel to the curb is prohibited.",
          "ru": "Что парковка или остановка параллельно бордюру запрещена."
        },
        "correct": true
      }
    ],
    "image": "/questions/b79.jpg"
  },
  {
    "id": 175,
    "question": {
      "es": "Según la Ley N° 2148, ¿qué indica un cordón pintado de este color?",
      "en": "According to Law No. 2148, what does a curb painted this color indicate?",
      "ru": "Согласно Закону № 2148, что указывает бордюр, окрашенный в этот цвет?"
    },
    "answers": [
      {
        "text": {
          "es": "Área reservada de estacionamiento exclusivo de ciclorodados (bicicletas) y motovehículos.",
          "en": "Area reserved for the exclusive parking of bicycles and motorcycles.",
          "ru": "Зона, зарезервированная для парковки исключительно велосипедов и мотоциклов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lugar reservado para ascenso y descenso de pasajeros.",
          "en": "Place reserved for the boarding and alighting of passengers.",
          "ru": "Место, зарезервированное для посадки и высадки пассажиров."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona exclusiva para carga y descarga de mercaderías.",
          "en": "Exclusive area for loading and unloading goods.",
          "ru": "Зона, предназначенная исключительно для погрузки и разгрузки товаров."
        },
        "correct": false
      }
    ],
    "image": "/questions/b80.jpg"
  },
  {
    "id": 176,
    "question": {
      "es": "Según la Ley Nº 2148, ¿qué indica la siguiente demarcación horizontal?",
      "en": "According to Law No. 2148, what does the following horizontal demarcation indicate?",
      "ru": "Согласно Закону № 2148, что указывает следующая горизонтальная разметка?"
    },
    "answers": [
      {
        "text": {
          "es": "Que sólo está prohibido estacionar, pudiendo efectuarse detenciones.",
          "en": "That only parking is prohibited, but stopping is allowed.",
          "ru": "Что только парковка запрещена, но остановки разрешены."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que es un lugar reservado para el estacionamiento exclusivo de vehículos destinados al transporte de pasajeros.",
          "en": "That it is a place reserved for the exclusive parking of vehicles intended for passenger transport.",
          "ru": "Что это место, зарезервированное для парковки исключительно автомобилей, предназначенных для перевозки пассажиров."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que está prohibido estacionar o detenerse al costado de la vereda.",
          "en": "That parking or stopping next to the sidewalk is prohibited.",
          "ru": "Что парковка или остановка у тротуара запрещена."
        },
        "correct": false
      }
    ],
    "image": "/questions/b81.jpg"
  },
  {
    "id": 177,
    "question": {
      "es": "¿Cuál es la importancia del color de las señales viales?",
      "en": "What is the importance of the color of traffic signs?",
      "ru": "Какова важность цвета дорожных знаков?"
    },
    "answers": [
      {
        "text": {
          "es": "El color es para llamar la atención al conductor de categoría particular.",
          "en": "The color is to attract the attention of the private driver.",
          "ru": "Цвет предназначен для привлечения внимания водителя частного автомобиля."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El color es irrelevante para el conductor particular pero sí para el conductor profesional.",
          "en": "The color is irrelevant for the private driver but is important for the professional driver.",
          "ru": "Цвет не имеет значения для частного водителя, но важен для профессионального водителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El color, además de su forma, brinda información al conductor sobre el trayecto de la vía por la cual circula.",
          "en": "The color, in addition to its shape, provides information to the driver about the route of the road they are traveling on.",
          "ru": "Цвет, помимо своей формы, предоставляет информацию водителю о маршруте дороги, по которой он движется."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 178,
    "question": {
      "es": "¿Cuáles son las señales preventivas?",
      "en": "What are preventive signs?",
      "ru": "Какие знаки являются предупредительными?"
    },
    "answers": [
      {
        "text": {
          "es": "Aquellas que advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
          "en": "Those that warn of the proximity of a circumstance or variation in the normality of the road that may be surprising or dangerous to traffic.",
          "ru": "Те, которые предупреждают о близости обстоятельства или изменении нормальности дороги, которое может быть неожиданным или опасным для движения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Aquellas que no transmiten órdenes ni previenen sobre irregularidades o riesgos en la vía. Identifican, orientan y hacen referencia a servicios, lugares, etc.",
          "en": "Those that do not convey orders or warn about irregularities or risks on the road. They identify, orient, and refer to services, places, etc.",
          "ru": "Те, которые не передают команды и не предупреждают о нарушениях или рисках на дороге. Они идентифицируют, ориентируют и ссылаются на услуги, места и т.д."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Aquellas que transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.",
          "en": "Those that convey specific orders, which are mandatory to comply with in the place for which they are intended.",
          "ru": "Те, которые передают конкретные команды, обязательные для выполнения в месте, для которого они предназначены."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 179,
    "question": {
      "es": "¿Qué indican las señales reglamentarias?",
      "en": "What do regulatory signs indicate?",
      "ru": "Что указывают регламентирующие знаки?"
    },
    "answers": [
      {
        "text": {
          "es": "Advierten la proximidad de una circunstancia o variación de la normalidad de la vía que puede resultar sorpresiva o peligrosa a la circulación.",
          "en": "They warn of the proximity of a circumstance or variation in the normality of the road that may be surprising or dangerous to traffic.",
          "ru": "Предупреждают о близости обстоятельства или изменении нормальности дороги, которое может быть неожиданным или опасным для движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Identifican, orientan y hacen referencia a servicios, lugares, etc.",
          "en": "They identify, guide, and refer to services, places, etc.",
          "ru": "Идентифицируют, ориентируют и ссылаются на услуги, места и т.д."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Transmiten órdenes específicas, de cumplimiento obligatorio en el lugar para el cual están destinadas.",
          "en": "They transmit specific orders, which are mandatory to comply with in the place for which they are intended.",
          "ru": "Передают конкретные указания, обязательные для выполнения в месте, для которого они предназначены."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 180,
    "question": {
      "es": "¿Cuál de estas señales comunica “Prevención”?",
      "en": "Which of these signs communicates 'Prevention'?",
      "ru": "Какой из этих знаков сообщает о \"Предотвращении\"?"
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
    "image": "/questions/b82.jpg"
  },
  {
    "id": 181,
    "question": {
      "es": "¿De qué color es la cartelería de Permitido Estacionar?",
      "en": "What color is the signage for 'Parking Allowed'?",
      "ru": "Какого цвета знак \"Разрешено парковаться\"?"
    },
    "answers": [
      {
        "text": {
          "es": "Azul.",
          "en": "Blue.",
          "ru": "Синий."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Blanco.",
          "en": "White.",
          "ru": "Белый."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Rojo.",
          "en": "Red.",
          "ru": "Красный."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 182,
    "question": {
      "es": "¿Cuál de estas señales es Reglamentaria?",
      "en": "Which of these signs is Regulatory?",
      "ru": "Какой из этих знаков является Регламентированным?"
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
    "image": "/questions/b83.jpg"
  },
  {
    "id": 183,
    "question": {
      "es": "¿Cuál de estas señales es una señal reglamentaria?",
      "en": "Which of these signs is a regulatory sign?",
      "ru": "Какой из этих знаков является регламентированным знаком?"
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
    "image": "/questions/b84.jpg"
  },
  {
    "id": 184,
    "question": {
      "es": "¿Cuál de estas señales es Informativa?",
      "en": "Which of these signs is Informative?",
      "ru": "Какой из этих знаков является Информационным?"
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
    "image": "/questions/b85.jpg"
  },
  {
    "id": 185,
    "question": {
      "es": "Indique qué tipo de señal es la que a continuación se muestra:",
      "en": "Indicate what type of sign is shown below:",
      "ru": "Укажите, какой тип знака показан ниже:"
    },
    "answers": [
      {
        "text": {
          "es": "Preventiva",
          "en": "Preventive",
          "ru": "Пр��дупредительный"
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reglamentaria.",
          "en": "Regulatory.",
          "ru": "Регламентированный."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Informativa.",
          "en": "Informative.",
          "ru": "Информационный."
        },
        "correct": true
      }
    ],
    "image": "/questions/b86.jpg"
  },
  {
    "id": 186,
    "question": {
      "es": "¿Cuál de las siguientes imágenes , por forma y color, corresponde a la señal indicativa de una rotonda o pendiente pronunciada?",
      "en": "Which of the following images, by shape and color, corresponds to the indicative sign of a roundabout or steep slope?",
      "ru": "Какое из следующих изображений по форме и цвету соответствует знаку, указывающему на круговое движение или крутой склон?"
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
    "image": "/questions/b87.jpg"
  },
  {
    "id": 187,
    "question": {
      "es": "¿Cuál de las siguientes imágenes, por forma y color, corresponde a la señal indicativa de estar próximo a una zona afectada por obras?",
      "en": "Which of the following images, by shape and color, corresponds to the indicative sign of being near a construction zone?",
      "ru": "Какое из следующих изображений по форме и цвету соответствует знаку, указывающему на приближение к зоне, затронутой работами?"
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
    "image": "/questions/b88.jpg"
  },
  {
    "id": 188,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
      "en": "In the following emergency situation, what should drivers in proximity do?",
      "ru": "В следующей ситуации экстренной помощи, что должны сделать водители, которые находятся поблизости?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
          "en": "Increase speed to avoid being an obstacle to this vehicle.",
          "ru": "Увеличить скорость, чтобы не стать препятствием для этого автомобиля."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
          "en": "Notify other drivers of the presence of this vehicle by repeatedly honking the horn.",
          "ru": "Предупредить других водителей о наличии этого автомобиля, многократно сигналя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.",
          "en": "Yield to this vehicle, clear the emergency lane, and if necessary, stop.",
          "ru": "Уступить дорогу этому автомобилю, освободить полосу для экс��ренных случаев и, если необходимо, остановиться."
        },
        "correct": true
      }
    ],
    "image": "/questions/b89.jpg"
  },
  {
    "id": 189,
    "question": {
      "es": "El siguiente símbolo indica que se trata de un carril que debe ser liberado cuando se aproxima un vehículo en emergencia.",
      "en": "The following symbol indicates that it is a lane that must be cleared when an emergency vehicle approaches.",
      "ru": "Следующий символ указывает, что это полоса, которую необходимо освободить, когда приближается экстренный автомобиль."
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
    "image": "/questions/b90.jpg"
  },
  {
    "id": 190,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
      "en": "In the following emergency situation, which direction is it advisable for the vehicles in the image to move to facilitate the passage of the ambulance?",
      "ru": "В следующей ситуации экстренной помощи, в какой сектор рекомендуется отъехать автомобилям на изображении, чтобы облегчить проезд скорой помощи?"
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
          "en": "The only one that should move aside is car 2 to its right.",
          "ru": "Единственный, кто должен отъехать, это автомобиль 2 вправо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El auto 1 hacia su izquierda y el 2 hacia su derecha.",
          "en": "Car 1 to its left and car 2 to its right.",
          "ru": "Автомобиль 1 влево, а 2 вправо."
        },
        "correct": true
      }
    ],
    "image": "/questions/b91.jpg"
  },
  {
    "id": 191,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿hacia qué sector es recomendable que se aparten los vehículos de la imagen para facilitar el paso a la ambulancia?",
      "en": "In the following emergency situation, which direction is it advisable for the vehicles in the image to move to facilitate the passage of the ambulance?",
      "ru": "В следующей ситуации экстренной помощи, в какой сектор рекомендуется отъехать автомобилям на изображении, чтобы облегчить проезд скорой помощи?"
    },
    "answers": [
      {
        "text": {
          "es": "El único que debería apartarse es el auto 2 hacia su derecha.",
          "en": "The only one that should move aside is car 2 to its right.",
          "ru": "Единственный, кто должен отъехать, это автомобиль 2 вправо."
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
          "ru": "Автомобиль 1 влево, в то время как 2 и 3 вправо."
        },
        "correct": true
      }
    ],
    "image": "/questions/b92.jpg"
  },
  {
    "id": 192,
    "question": {
      "es": "Frente a la siguiente situación de emergencia, ¿qué deben hacer los conductores que circulen en su proximidad?",
      "en": "In the following emergency situation, what should drivers in proximity do?",
      "ru": "В следующей ситуации экстренной помощи, что должны сделать водители, которые находятся поблизости?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para no ser un obstáculo a este vehículo.",
          "en": "Increase speed to avoid being an obstacle to this vehicle.",
          "ru": "Увеличить скорость, чтобы не стать препятствием для этого автомобиля."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Avisar a otros conductores de la presencia de este vehículo, usando repetidamente la bocina.",
          "en": "Notify other drivers of the presence of this vehicle by repeatedly honking the horn.",
          "ru": "Предупредить других водителей о наличии этого автомобиля, многократно сигналя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dar lugar a este vehículo, despejar el carril de emergencias y si fuera necesario detenerse.",
          "en": "Yield to this vehicle, clear the emergency lane, and if necessary, stop.",
          "ru": "Уступить дорогу этому автомобилю, освободить полосу для экс��ренных случаев и, если необходимо, остановиться."
        },
        "correct": true
      }
    ],
    "image": "/questions/b93.jpg"
  },
  {
    "id": 193,
    "question": {
      "es": "Ud. se encuentra frente a la siguiente situación donde el conductor toca repetidamente la bocina, ¿qué debe hacer si se encuentra conduciendo en su proximidad?",
      "en": "You are facing the following situation where the driver is honking repeatedly, what should you do if you are driving in proximity?",
      "ru": "Вы находитесь перед следующей ситуацией, где водитель многократно сигналит, что вы должны сделать, если находитесь за рулем поблизости?"
    },
    "answers": [
      {
        "text": {
          "es": "Cederle el paso, ya que está indicando que se encuentra en emergencia.",
          "en": "Yield to him, as he is indicating that he is in an emergency.",
          "ru": "Уступить дорогу, так как он указывает, что находится в экстренной ситуации."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico.",
          "en": "Offer my assistance, as he is indicating that the vehicle has a mechanical failure.",
          "ru": "Предоставить свою помощь, так как он указывает, что у автомобиля есть механическая неисправность."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Alertar a otros conductores, tocando repetidamente la bocina, que ese vehículo cruzará un semáforo en rojo.",
          "en": "Alert other drivers by honking repeatedly that this vehicle will run a red light.",
          "ru": "Предупредить других водителей, многократно сигналя, что этот автомобиль проедет на красный свет."
        },
        "correct": false
      }
    ],
    "image": "/questions/b94.jpg"
  },
  {
    "id": 194,
    "question": {
      "es": "En esta intersección sin semáforos, donde el conductor del vehículo realiza un giro a la derecha, ¿quién tiene prioridad de paso?",
      "en": "At this intersection without traffic lights, where the driver of the vehicle makes a right turn, who has the right of way?",
      "ru": "На этом перекрестке без светофоров, где водитель автомобиля поворачивает направо, кто имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El automóvil, porque circula por la mano derecha.",
          "en": "The car, because it is traveling on the right side.",
          "ru": "Автомобиль, потому что движется по правой стороне."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El ciclista, porque el automóvil pierde la prioridad al querer girar.",
          "en": "The cyclist, because the car loses priority when it wants to turn.",
          "ru": "Велосипедист, потому что автомобиль теряет приоритет, когда хочет повернуть."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El ciclista, porque al circular por la ciclovía siempre tiene prioridad.",
          "en": "The cyclist, because when riding on the bike lane, he always has priority.",
          "ru": "Велосипедист, потому что, двигаясь по велодорожке, всегда имеет приоритет."
        },
        "correct": false
      }
    ],
    "image": "/questions/b95.jpg"
  },
  {
    "id": 195,
    "question": {
      "es": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
      "en": "At an intersection of two streets without a traffic light, in the following situation, who has the right of way?",
      "ru": "На перекрестке двух улиц без светофора, в следующей ситуации, кто имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A, ya que está circulando por la derecha",
          "en": "Vehicle A, since it is traveling on the right.",
          "ru": "Транспортное средство A, так как оно движется справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los vehículos B, ya que son varios los que circulan por esa calle.",
          "en": "Vehicles B, since there are several traveling on that street.",
          "ru": "Транспортные средства B, так как их несколько, движущихся по этой улице."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo A, ya que está saliendo del paso a nivel ferroviario.",
          "en": "Vehicle A, since it is exiting the railway level crossing.",
          "ru": "Транспортное средство A, так как оно выезжает с железнодорожного переезда."
        },
        "correct": true
      }
    ],
    "image": "/questions/b96.jpg"
  },
  {
    "id": 196,
    "question": {
      "es": "En un cruce de dos calles sin semáforo, frente a la siguiente situación, ¿quién tiene prioridad de paso?",
      "en": "At an intersection of two streets without a traffic light, in the following situation, who has the right of way?",
      "ru": "На перекрестке двух улиц без светофора, в следующей ситуации, кто имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "Vehicle A.",
          "ru": "Транспортное средство A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "Vehicle B.",
          "ru": "Транспортное средство B."
        },
        "correct": true
      }
    ],
    "image": "/questions/b97.jpg"
  },
  {
    "id": 197,
    "question": {
      "es": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
      "en": "Who has the right of way at the intersection of these two streets?",
      "ru": "Кто имеет приоритет проезда на перекрестке этих двух улиц?"
    },
    "answers": [
      {
        "text": {
          "es": "Los vehículos que circulan por la calle A.",
          "en": "The vehicles traveling on street A.",
          "ru": "Транспортные средства, движущиеся по улице A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Los vehículos que circulan por la calle B.",
          "en": "The vehicles traveling on street B.",
          "ru": "Транспортные средства, движущиеся по улице B."
        },
        "correct": false
      }
    ],
    "image": "/questions/b98.jpg"
  },
  {
    "id": 198,
    "question": {
      "es": "¿Quién tiene prioridad de paso en el cruce de estas dos calles?",
      "en": "Who has the right of way at the intersection of these two streets?",
      "ru": "Кто имеет приоритет проезда на перекрестке этих двух улиц?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "Vehicle A.",
          "ru": "Транспортное средство A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "Vehicle B.",
          "ru": "Транспортное средство B."
        },
        "correct": true
      }
    ],
    "image": "/questions/b99.jpg"
  },
  {
    "id": 199,
    "question": {
      "es": "¿Qué vehículo tiene prioridad de paso en esta intersección sin semáforo?",
      "en": "Which vehicle has the right of way at this intersection without a traffic light?",
      "ru": "Какое транспортное средство имеет приоритет проезда на этом перекрестке без светофора?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A porque circula por una avenida.",
          "en": "Vehicle A because it is traveling on an avenue.",
          "ru": "Транспортное средство A, потому что оно движется по проспекту."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El vehículo B porque circula por la derecha.",
          "en": "Vehicle B because it is traveling on the right.",
          "ru": "Транспортное средство B, потому что оно движется справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto ya que es una esquina sin semáforo.",
          "en": "It is indifferent since it is a corner without a traffic light.",
          "ru": "Это не имеет значения, так как это угол без светофора."
        },
        "correct": false
      }
    ],
    "image": "/questions/b100.jpg"
  },
  {
    "id": 200,
    "question": {
      "es": "Al conducir un vehículo y llegar a esta intersección, ¿cómo debe proceder frente a esta señal?",
      "en": "When driving a vehicle and reaching this intersection, how should you proceed in front of this sign?",
      "ru": "При управлении транспортным средством и приближении к этому перекрестку, как следует действовать перед этим знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
          "en": "Slightly reduce speed and check that no vehicles are approaching from the road you are going to join.",
          "ru": "Уменьшить скорость и посмотреть, не приближаются ли транспортные средства по дороге, к которой собираетесь присоединиться."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
          "en": "Reduce speed and stop the vehicle before the pedestrian crossing.",
          "ru": "Снизить скорость и остановить транспортное средство перед пешеходным переходом."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar.",
          "en": "Proceed.",
          "ru": "Продолжить движение."
        },
        "correct": false
      }
    ],
    "image": "/questions/b101.jpg"
  },
  {
    "id": 201,
    "question": {
      "es": "Como conductor de un vehículo, ¿cómo debe proceder frente a esta señal horizontal?",
      "en": "As a driver of a vehicle, how should you proceed in front of this horizontal sign?",
      "ru": "Как водитель транспортного средства, как следует действовать перед этим горизонтальным знаком?"
    },
    "answers": [
      {
        "text": {
          "es": "Disminuir un poco la velocidad y mirar que no se acerquen vehículos por la vía a la que se va a incorporar.",
          "en": "Slightly reduce speed and check that no vehicles are approaching from the road you are going to join.",
          "ru": "Уменьшить скорость и посмотреть, не приближаются ли транспортные средства по дороге, к которой собираетесь присоединиться."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y detener el vehículo antes de la senda peatonal.",
          "en": "Reduce speed and stop the vehicle before the pedestrian crossing.",
          "ru": "Снизить скорость и остановить транспортное средство перед пешеходным переходом."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Avanzar.",
          "en": "Proceed.",
          "ru": "Продолжить движение."
        },
        "correct": false
      }
    ],
    "image": "/questions/b102.jpg"
  },
  {
    "id": 202,
    "question": {
      "es": "Estas señales son las únicas que indican que se pierde la prioridad de paso en una bocacalle sin semáforo.",
      "en": "These signs are the only ones that indicate that priority is lost at an intersection without a traffic light.",
      "ru": "Эти знаки являются единственными, которые указывают на потерю приоритета проезда на боковой улице без светофора."
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
    "image": "/questions/b103.jpg"
  },
  {
    "id": 203,
    "question": {
      "es": "De acuerdo a la Ley N° 2148, en encrucijadas sin semáforos, ¿cuál es el orden de prioridad de paso según el tipo de arteria?",
      "en": "According to Law No. 2148, at intersections without traffic lights, what is the order of priority according to the type of road?",
      "ru": "Согласно Закону № 2148, на перекрестках без светофоров, каков порядок приоритета проезда в зависимости от типа дороги?"
    },
    "answers": [
      {
        "text": {
          "es": "1° Pasaje - 2° Calle - 3° Avenida.",
          "en": "1st Passage - 2nd Street - 3rd Avenue.",
          "ru": "1° Проезд - 2° Улица - 3° Проспект."
        },
        "correct": false
      },
      {
        "text": {
          "es": "1° Avenida - 2° Calle - 3° Pasaje.",
          "en": "1st Avenue - 2nd Street - 3rd Passage.",
          "ru": "1° Проспект - 2° Улица - 3° Проезд."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto, ya que el vehículo que circula por la derecha siempre tiene prioridad.",
          "en": "It is indifferent, since the vehicle traveling on the right always has priority.",
          "ru": "Это не имеет значения, так как транспортное средство, движущееся справа, всегда имеет приоритет."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 204,
    "question": {
      "es": "Como norma de carácter general, ¿quién tiene prioridad de paso en una encrucijada sin semáforos?",
      "en": "As a general rule, who has the right of way at an intersection without traffic lights?",
      "ru": "Как общее правило, кто имеет приоритет проезда на перекрестке без светофоров?"
    },
    "answers": [
      {
        "text": {
          "es": "Los vehículos de transporte de pasajero.",
          "en": "Passenger transport vehicles.",
          "ru": "Транспортные средства пассажирского транспорта."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo de menor tamaño.",
          "en": "The smaller vehicle.",
          "ru": "Транспортное средство меньшего размера."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que se presenta por el lado derecho.",
          "en": "The vehicle that presents itself from the right side.",
          "ru": "��ранспортное средство, которое появляется справа."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 205,
    "question": {
      "es": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
      "en": "In the following situation, who has the right of way?",
      "ru": "В следующей ситуации, кому принадлежит приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "Al automóvil.",
          "en": "The car.",
          "ru": "Автомобилю."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al colectivo.",
          "en": "The bus.",
          "ru": "Автобусу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "It is indifferent.",
          "ru": "Это не имеет значения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b104.jpg"
  },
  {
    "id": 206,
    "question": {
      "es": "Frente a esta situación de obstrucción de vía, ¿qué debe hacer el conductor del vehículo señalado?",
      "en": "In front of this obstruction situation, what should the driver of the indicated vehicle do?",
      "ru": "Перед этой ситуацией препятствия на дороге, что должен сделать водитель указанного транспортного средства?"
    },
    "answers": [
      {
        "text": {
          "es": "Debe ceder el paso al vehículo que circula en el sentido contrario.",
          "en": "He must yield to the vehicle traveling in the opposite direction.",
          "ru": "Он должен уступить дорогу транспортному средству, движущемуся навстречу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Tiene prioridad de paso sobre el otro vehículo.",
          "en": "He has priority over the other vehicle.",
          "ru": "Он имеет приоритет проезда над другим транспортным средством."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La normativa no establece prioridad de paso ante esta situación.",
          "en": "The regulations do not establish priority in this situation.",
          "ru": "Нормативные акты не устанавливают приоритет проезда в этой ситуации."
        },
        "correct": false
      }
    ],
    "image": "/questions/b105.jpg"
  },
  {
    "id": 207,
    "question": {
      "es": "En la siguiente situación, ¿a quién le corresponde la prioridad de paso?",
      "en": "In the following situation, who has the right of way?",
      "ru": "В следующей ситуации, кому принадлежит приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "Al vehículo A, ya que circula por la derecha.",
          "en": "To vehicle A, since it is traveling on the right.",
          "ru": "Транспортному средству A, так как оно движется справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al vehículo B, ya que circula por una avenida.",
          "en": "To vehicle B, since it is traveling on an avenue.",
          "ru": "Транспортному средству B, так как оно движется по проспекту."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "It is indifferent.",
          "ru": "Это не имеет значения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b106.jpg"
  },
  {
    "id": 208,
    "question": {
      "es": "¿Quién tiene prioridad de paso en una rotonda?",
      "en": "Who has the right of way in a roundabout?",
      "ru": "Кто имеет приоритет проезда на круговом движении?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo que circule por la derecha.",
          "en": "The vehicle that is traveling on the right.",
          "ru": "Транспортное средство, дв��жущееся справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que pretende acceder a la rotonda.",
          "en": "The vehicle that intends to enter the roundabout.",
          "ru": "Транспортное средство, которое намеревается заехать на круг."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que se encuentra dentro de la calzada circular.",
          "en": "The vehicle that is on the roundabout.",
          "ru": "Транспортное средство, находящееся на круговом движении."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 209,
    "question": {
      "es": "En esta situación, donde hay una calzada circular, ¿quién tiene la prioridad de paso?",
      "en": "In this situation, where there is a roundabout, who has the right of way?",
      "ru": "В этой ситуации, где есть круговое движение, кто имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "Vehicle A.",
          "ru": "Транспортное средство A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "Vehicle B.",
          "ru": "Транспортное средство B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto.",
          "en": "It is indifferent.",
          "ru": "Это не имеет значения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b107.jpg"
  },
  {
    "id": 210,
    "question": {
      "es": "Como norma general, en una arteria de doble circulación, con pendiente pronunciada y con un ancho que no permite la circulación simultánea de dos vehículos, ¿quién tiene la prioridad de paso?",
      "en": "As a general rule, in a two-way street with a steep slope and a width that does not allow the simultaneous circulation of two vehicles, who has the right of way?",
      "ru": "Как правило, на магистрали с двусторонним движением, с крутым уклоном и шириной, не позволяющей одновременному движению двух транспортных средств, кто имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo que desciende.",
          "en": "The vehicle that is descending.",
          "ru": "Транспортное средство, спускающееся."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo que asciende.",
          "en": "The vehicle that is ascending.",
          "ru": "Транспортное средство, поднимающееся."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No hay prioridad, cualquiera de ellos.",
          "en": "There is no priority, either of them.",
          "ru": "Приоритета нет, любое из них."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 211,
    "question": {
      "es": "En esta pendiente estrecha, ¿cuál de los dos vehículos tiene prioridad de paso?",
      "en": "In this narrow slope, which of the two vehicles has the right of way?",
      "ru": "На этом узком склоне, какое из двух транспортных средств имеет приоритет проезда?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "Vehicle A.",
          "ru": "Транспортное средство A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "Vehicle B.",
          "ru": "Транспортное средство B."
        },
        "correct": true
      }
    ],
    "image": "/questions/b108.jpg"
  },
  {
    "id": 212,
    "question": {
      "es": "¿Cuándo se debe ceder el paso a los vehículos que desean incorporarse al tránsito desde el lugar donde estaban estacionados o desde un garaje?",
      "en": "When should you yield to vehicles that wish to merge into traffic from where they were parked or from a garage?",
      "ru": "Когда необходимо уступить дорогу транспортным средствам, которые хотят влиться в движение с места, где они были припаркованы или из гаража?"
    },
    "answers": [
      {
        "text": {
          "es": "Siempre, independientemente de cómo se encuentre el tránsito vehicular.",
          "en": "Always, regardless of how traffic is.",
          "ru": "Всегда, независимо от того, каково состояние дорожного движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cuando el tránsito se encuentra interrumpido por cualquier razón.",
          "en": "When traffic is interrupted for any reason.",
          "ru": "Когда движение прервано по любой причине."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Nunca, independientemente de cómo se encuentre el tránsito vehicular.",
          "en": "Never, regardless of how traffic is.",
          "ru": "Никогда, независимо от того, каково состояние дорожного движения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 213,
    "question": {
      "es": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están circulando por esta arteria?",
      "en": "The indicated vehicle wants to merge into traffic, does it have the right of way over the other vehicles that are circulating on this street?",
      "ru": "Транспортное средство с сигнализацией хочет влиться в движение, имеет ли оно приоритет проезда над другими транспортными средствами, которые движутся по этой магистрали?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque los vehículos de la arteria, a la que se pretende ingresar, están circulando.",
          "en": "No, because the vehicles on the street that it intends to enter are circulating.",
          "ru": "Нет, потому что транспортные средства на магистрали, в которую предполагается въезд, движутся."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, porque se encuentra a la derecha.",
          "en": "Yes, because it is on the right.",
          "ru": "Да, потому что оно находится справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque señalizó su maniobra.\t",
          "en": "Yes, because it signaled its maneuver.",
          "ru": "Да, потому что оно сигнализировало о своем маневре."
        },
        "correct": false
      }
    ],
    "image": "/questions/b109.jpg"
  },
  {
    "id": 214,
    "question": {
      "es": "El vehículo señalizado quiere incorporarse al tránsito, ¿tiene prioridad de paso sobre los otros vehículos que están detenidos en la arteria?",
      "en": "The indicated vehicle wants to merge into traffic, does it have the right of way over the other vehicles that are stopped on the street?",
      "ru": "Транспортное средство с сигнализацией хочет влиться в движение, имеет ли оно приоритет проезда над другими транспортными средствами, которые остановились на магистрали?"
    },
    "answers": [
      {
        "text": {
          "es": "No. La prioridad es de los otros vehículos, independientemente si están detenidos o circulando.",
          "en": "No. The priority is for the other vehicles, regardless of whether they are stopped or circulating.",
          "ru": "Нет. Приоритет у других транспортных средств, независимо от того, остановлены они или движутся."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque se encuentra el tránsito detenido y deben cederle el paso.",
          "en": "Yes, because traffic is stopped and they must yield.",
          "ru": "Да, потому что движение остановлено, и они должны уступить дорогу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No. La Ley no menciona nada al respecto, sólo se expresa sobre las prioridades en intersecciones no semaforizadas.",
          "en": "No. The law does not mention anything about this, it only expresses priorities at unregulated intersections.",
          "ru": "Нет. Закон ничего не говорит об этом, он только касается приоритетов на нерегулируемых перекрестках."
        },
        "correct": false
      }
    ],
    "image": "/questions/b110.jpg"
  },
  {
    "id": 215,
    "question": {
      "es": "En la siguiente situación, el motovehículo…",
      "en": "In the following situation, the motorcycle...",
      "ru": "В следующей ситуации мотоцикл…"
    },
    "answers": [
      {
        "text": {
          "es": "Puede adelantarse, pero utilizando la luz intermitente de giro izquierda.",
          "en": "Can overtake, but using the left turn signal.",
          "ru": "Может обогнать, но используя левый поворотник."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Puede adelantarse, pero tocando la bocina.",
          "en": "Can overtake, but by honking the horn.",
          "ru": "Может обогнать, но сигналя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No puede realizar el sobrepaso.",
          "en": "Cannot overtake.",
          "ru": "Не может выполнить обгон."
        },
        "correct": true
      }
    ],
    "image": "/questions/a15.jpg"
  },
  {
    "id": 216,
    "question": {
      "es": "En la siguiente situación, ¿el vehículo B puede sobrepasar al vehículo A?",
      "en": "In the following situation, can vehicle B overtake vehicle A?",
      "ru": "В следующей ситуации, может ли транспортное средство B обогнать транспортное средство A?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, salvo que se acerque un vehículo en el sentido contrario.",
          "en": "Yes, unless a vehicle approaches from the opposite direction.",
          "ru": "Да, если только не приближается т��анспортное средство в противоположном направлении."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que está prohibido por la demarcación horizontal.",
          "en": "No, as it is prohibited by the horizontal marking.",
          "ru": "Нет, так как это запрещено горизонтальной разметкой."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, haciendo las señales de luces correspondientes y si el vehículo que circula en sentido contrario está lejos.",
          "en": "Yes, by signaling appropriately and if the vehicle coming from the opposite direction is far away.",
          "ru": "Да, делая соответствующие сигналы света и если транспортное средство, движущееся в противоположном направлении, далеко."
        },
        "correct": false
      }
    ],
    "image": "/questions/b111.jpg"
  },
  {
    "id": 217,
    "question": {
      "es": "¿Cuáles de los siguientes vehículos NO se encuentran en infracción?",
      "en": "Which of the following vehicles are NOT in violation?",
      "ru": "Какие из следующих транспортных средств НЕ нарушают правила?"
    },
    "answers": [
      {
        "text": {
          "es": "Los vehículos A y B.",
          "en": "Vehicles A and B.",
          "ru": "Транспортные средства A и B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los vehículos A y C.",
          "en": "Vehicles A and C.",
          "ru": "Транспортные средства A и C."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los vehículos B y C.",
          "en": "Vehicles B and C.",
          "ru": "Транспортные средства B и C."
        },
        "correct": true
      }
    ],
    "image": "/questions/b112.jpg"
  },
  {
    "id": 218,
    "question": {
      "es": "El vehículo A pretende cambiar de carril hacia su derecha, ¿cuál de los dos vehículos tiene prioridad?",
      "en": "Vehicle A intends to change lanes to its right, which of the two vehicles has priority?",
      "ru": "Транспортное средство A намеревается сменить полосу движения вправо, какое из двух транспортных средств имеет приоритет?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "Vehicle A.",
          "ru": "Транспортное средство A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "Vehicle B.",
          "ru": "Транспортное средство B."
        },
        "correct": true
      }
    ],
    "image": "/questions/b113.jpg"
  },
  {
    "id": 219,
    "question": {
      "es": "En este tipo de arteria, ¿quién tiene prioridad cuando se desea realizar un cambio de carril?",
      "en": "In this type of street, who has priority when a lane change is desired?",
      "ru": "На этом типе магистрали, кто имеет приоритет, когда хотят выполнить смену полосы?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo que circula por el carril que se pretende ocupar.",
          "en": "The vehicle that is in the lane that is intended to be occupied.",
          "ru": "Транспортное средство, движущееся по полосе, которую предполагается занять."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El vehículo que realiza el cambio de carril.",
          "en": "The vehicle that is changing lanes.",
          "ru": "Транспортное средство, выполняющее смену полосы."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo del carril más lento.",
          "en": "The vehicle in the slower lane.",
          "ru": "Транспортное средство с более медленным движением."
        },
        "correct": false
      }
    ],
    "image": "/questions/b114.jpg"
  },
  {
    "id": 220,
    "question": {
      "es": "Es obligatorio al finalizar un adelantamiento...",
      "en": "It is mandatory at the end of an overtaking...",
      "ru": "Обязательно по завершении обгона..."
    },
    "answers": [
      {
        "text": {
          "es": "Permanecer en el carril ocupado, independientemente de la fluidez del tránsito.",
          "en": "To remain in the occupied lane, regardless of the flow of traffic.",
          "ru": "Остаться на занятой полосе, независимо от плавности движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Incorporarse al carril derecho, si éste se encuentra libre, de forma gradual y sin obstaculizar la fluidez de tránsito.",
          "en": "To merge into the right lane, if it is free, gradually and without obstructing the flow of traffic.",
          "ru": "Влиться в правую полосу, если она свободна, постепенно и не препятствуя плавности движения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Incorporarse al carril derecho, aunque ésto implique que otro vehículo deba modificar su velocidad.",
          "en": "To merge into the right lane, even if this means that another vehicle must adjust its speed.",
          "ru": "Влиться в правую полосу, даже если это подразумевает, что другому транспортному средству придется изменить свою скорость."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 221,
    "question": {
      "es": "¿Cuál de estos carriles es el llamado ''carril de sobrepaso''?",
      "en": "Which of these lanes is called the 'passing lane'?",
      "ru": "Какой из этих полос называется ''полосой для обгона''?"
    },
    "answers": [
      {
        "text": {
          "es": "Cualquiera de ellos.",
          "en": "Any of them.",
          "ru": "Любая из них."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo el carril señalado como A.",
          "en": "Only the lane marked as A.",
          "ru": "Только полоса, обозначенная как A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo el carril señalado como F.",
          "en": "Only the lane marked as F.",
          "ru": "Только полоса, обозначенная как F."
        },
        "correct": false
      }
    ],
    "image": "/questions/b115.jpg"
  },
  {
    "id": 222,
    "question": {
      "es": "El vehículo, que circula por el carril destinado al tránsito lento, no puede abandonarlo para sobrepasar a otro vehículo que transita más lento.",
      "en": "The vehicle that is traveling in the lane designated for slow traffic cannot leave it to overtake another vehicle that is traveling slower.",
      "ru": "Транспортное средство, движущееся по полосе, предназначенной для медленного движения, не может покинуть её, чтобы обогнать другое транспортное средство, движущееся медленнее."
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
      "en": "The driver of vehicle A wants to quickly return to the right lane because he sees a dangerous situation ahead, what should the driver of vehicle B do?",
      "ru": "Водитель транспортного средства A хочет быстро вернуться на правую полосу, потому что перед ним возникла опасная ситуация, что должен сделать водитель транспортного средства B?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para que realice la maniobra detrás suyo.",
          "en": "Increase speed so that he can maneuver behind you.",
          "ru": "Увеличить скорость, чтобы он мог выполнить маневр за ним."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad para facilitarle el retorno al carril.",
          "en": "Reduce speed to facilitate his return to the lane.",
          "ru": "Снизить скорость, чтобы облегчить ему возвращение на полосу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Tocar bocina y hacer guiño de luces para indicarle que no debe realizar la maniobra.",
          "en": "Honk and flash lights to indicate that he should not make the maneuver.",
          "ru": "Подать сигнал звуковым сигналом и включить поворотники, чтобы указать, что он не должен выполнять маневр."
        },
        "correct": false
      }
    ],
    "image": "/questions/b116.jpg"
  },
  {
    "id": 224,
    "question": {
      "es": "En este tramo de la vía no se puede realizar un sobrepaso",
      "en": "In this section of the road, overtaking is not allowed.",
      "ru": "На этом участке дороги нельзя выполнять обгон."
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
    "image": "/questions/b117.jpg"
  },
  {
    "id": 225,
    "question": {
      "es": "Al advertir que está por ser sobrepasado, ¿cuál debería ser su actitud?",
      "en": "Upon noticing that you are about to be overtaken, what should your attitude be?",
      "ru": "Увидев, что вас собираются обогнать, какова должна быть ваша реакция?"
    },
    "answers": [
      {
        "text": {
          "es": "Circular por la banquina.",
          "en": "Drive on the shoulder.",
          "ru": "Двигаться по обочине."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular por la derecha de la calzada y mantenerse. En el caso de ser necesario, reducir la velocidad.",
          "en": "Drive on the right side of the road and maintain your position. If necessary, reduce speed.",
          "ru": "Двигаться по правой стороне проезжей части и оставаться там. В случае необходимости снизить скорость."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 226,
    "question": {
      "es": "¿Está permitido sobrepasar a otro vehículo en este lugar?",
      "en": "Is it allowed to overtake another vehicle in this place?",
      "ru": "Разрешено ли обгонять другое транспортное средство в этом месте?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, salvo que haya una señal que indique lo contrario.",
          "en": "Yes, unless there is a sign indicating otherwise.",
          "ru": "Да, если нет знака, указывающего на обратное."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido por normativa.",
          "en": "No, it is prohibited by regulation.",
          "ru": "Нет, это запрещено правилами."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo en el caso de que no perjudique la circulación de otros vehículos.",
          "en": "Only if it does not hinder the circulation of other vehicles.",
          "ru": "Только в том случае, если это не помешает движению других транспортных средств."
        },
        "correct": false
      }
    ],
    "image": "/questions/b118.jpg"
  },
  {
    "id": 227,
    "question": {
      "es": "Cuando varios vehículos circulan encolumnados, ¿cuál de ellos tiene prioridad para realizar el sobrepaso?",
      "en": "When several vehicles are lined up, which one has priority to overtake?",
      "ru": "Когда несколько транспортных средств движутся в колонне, какое из них имеет приоритет для выполнения обгона?"
    },
    "answers": [
      {
        "text": {
          "es": "El que lo intente primero.",
          "en": "The one that attempts it first.",
          "ru": "То, которое попытается сделать это первым."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El último de la fila.",
          "en": "The last in line.",
          "ru": "Последнее в колонне."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El que circula más próximo al vehículo que se desea sobrepasar.",
          "en": "The one closest to the vehicle to be overtaken.",
          "ru": "То, которое движется ближе к транспортному средству, которое нужно обогнать."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 228,
    "question": {
      "es": "Según la Ley N°2148, ¿qué significa el término sobrepaso?",
      "en": "According to Law No. 2148, what does the term overtaking mean?",
      "ru": "Согласно Закону №2148, что означает термин обгон?"
    },
    "answers": [
      {
        "text": {
          "es": "Sobrepasar la línea de otro vehículo en circulación, sin necesidad de cambiar de carril.",
          "en": "To overtake the line of another vehicle in motion, without the need to change lanes.",
          "ru": "Обогнать линию другого движущегося транспортного средства, не меняя полосу."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sobrepasar la línea de otro vehículo en circulación, cambiando de carril.",
          "en": "To overtake the line of another vehicle in motion, changing lanes.",
          "ru": "Обогнать линию другого движущегося транспортного средства, меняя полосу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Exceder el límite de velocidad máxima.",
          "en": "To exceed the maximum speed limit.",
          "ru": "Превысить предел максимальной скорости."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 229,
    "question": {
      "es": "¿Qué peligro debe preverse al sobrepasar un colectivo detenido?",
      "en": "What danger should be anticipated when overtaking a stopped bus?",
      "ru": "Какую опасность следует предусмотреть при обгоне остановленного автобуса?"
    },
    "answers": [
      {
        "text": {
          "es": "Que los peatones, ocultos por el colectivo, puedan cruzar por delante o por detrás de éste.",
          "en": "That pedestrians, hidden by the bus, may cross in front of or behind it.",
          "ru": "Что пешеходы, скрытые автобусом, могут перейти перед ним или за ним."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que los pasajeros bajen por la parte izquierda del colectivo detenido.",
          "en": "That passengers may get off on the left side of the stopped bus.",
          "ru": "Что пассажиры ��огут выйти с левой стороны остановленного автобуса."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ninguno, mientras no sobrepase la velocidad máxima permitida por la Ley.",
          "en": "None, as long as the maximum speed limit set by law is not exceeded.",
          "ru": "Никакой, если не превышается максимальная скорость, разрешенная законом."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 230,
    "question": {
      "es": "En esta situación, ¿quién tiene prioridad para realizar el sobrepaso al camión?",
      "en": "In this situation, who has priority to overtake the truck?",
      "ru": "В этой ситуации, кто имеет приоритет для обгона грузовика?"
    },
    "answers": [
      {
        "text": {
          "es": "El vehículo A.",
          "en": "Vehicle A.",
          "ru": "Транспортное средство A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo B.",
          "en": "Vehicle B.",
          "ru": "Транспортное средство B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El vehículo C.",
          "en": "Vehicle C.",
          "ru": "Транспортное средство C."
        },
        "correct": true
      }
    ],
    "image": "/questions/b119.jpg"
  },
  {
    "id": 231,
    "question": {
      "es": "Si al llegar a una intersección sin semáforos, se encuentra que el vehículo que está delante suyo está detenido esperando poder doblar hacia la izquierda, ¿qué debe hacer si ud. desea continuar en línea recta?",
      "en": "If upon reaching an intersection without traffic lights, you find that the vehicle in front of you is stopped waiting to turn left, what should you do if you wish to continue straight?",
      "ru": "Если, подъезжая к перекрестку без светофоров, вы видите, что транспортное средство перед вами остановилось, ожидая возможности повернуть налево, что вы должны сделать, если хотите продолжить движение прямо?"
    },
    "answers": [
      {
        "text": {
          "es": "Sobrepasarlo por la derecha de manera segura, colocando luz de giro y observando por los espejos retrovisores.",
          "en": "Overtake it safely on the right, signaling with your turn signal and checking the rearview mirrors.",
          "ru": "Обогнать его справа безопасно, включив поворотник и проверяя зеркала заднего вида."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sobrepaso por la izquierda, colocando la luz de giro y observando por los espejos retrovisores.",
          "en": "Overtake on the left, signaling with your turn signal and checking the rearview mirrors.",
          "ru": "Обгон слева, включив поворотник и проверяя зеркала заднего вида."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Tocarle bocina para indicarle que debe seguir.",
          "en": "Honk to indicate that he should proceed.",
          "ru": "Подать сигнал звуковым сигналом, чтобы указать, что он должен продолжать."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 232,
    "question": {
      "es": "¿Se puede traspasar la siguiente señal horizontal?",
      "en": "Can you cross the next horizontal sign?",
      "ru": "Можно ли пересекать следующий горизонтальный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque ordena la circulación de carriles e indica que se puede sobrepasar a otro vehículo.",
          "en": "Yes, because it regulates lane circulation and indicates that you can overtake another vehicle.",
          "ru": "Да, потому что он регулирует движение по полосам и указывает, что можно обгонять другое транспортное средство."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo cuando la vía tiene dos carriles por sentido de circulación.",
          "en": "Only when the road has two lanes in each direction.",
          "ru": "Только когда дорога имеет две полосы в каждом направлении."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque indica prohibición de sobrepaso.",
          "en": "No, because it indicates a prohibition on overtaking.",
          "ru": "Нет, потому что он указывает на запрет обгона."
        },
        "correct": false
      }
    ],
    "image": "/questions/b120.jpg"
  },
  {
    "id": 233,
    "question": {
      "es": "Como norma general, ¿dónde está prohibido el sobrepaso de un vehículo?",
      "en": "As a general rule, where is overtaking a vehicle prohibited?",
      "ru": "Как правило, где запрещен обгон транспортного средства?"
    },
    "answers": [
      {
        "text": {
          "es": "Donde la delimitación de carriles es de trazo continuo.",
          "en": "Where the lane delimitation is a solid line.",
          "ru": "Где разметка полос непрерывная."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En curvas, encrucijadas, pasos a nivel o puentes.",
          "en": "In curves, intersections, level crossings, or bridges.",
          "ru": "На поворотах, перекрестках, железнодорожных переездах или мостах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 234,
    "question": {
      "es": "En un túnel, con ambos sentidos de circulación, ¿está permitido sobrepasar a un vehículo?",
      "en": "In a tunnel, with both directions of traffic, is it allowed to overtake a vehicle?",
      "ru": "В туннеле, с двусторонним движением, разрешено ли обгонять транспортное средство?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, cuando no haya señal que lo prohíba.",
          "en": "Yes, when there is no sign prohibiting it.",
          "ru": "Да, если нет знака, запрещающего это."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que está prohibido por normativa.",
          "en": "No, as it is prohibited by regulation.",
          "ru": "Нет, так как это запрещено правилами."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, si hay suficiente visibilidad.",
          "en": "Yes, if there is sufficient visibility.",
          "ru": "Да, если видимость достаточная."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 235,
    "question": {
      "es": "En una vía de doble sentido de circulación, ¿qué deberá comprobar antes de iniciar un sobrepaso?",
      "en": "On a two-way road, what should you check before starting an overtaking maneuver?",
      "ru": "На дороге с двусторонним движением, что необходимо проверить перед началом обгона?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo que antecede, no tenga las luces intermitentes encendidas y que ningún vehículo circule en sentido contrario, mientras dure la maniobra de sobrepaso.",
          "en": "That the vehicle ahead does not have its turn signals on and that no vehicle is coming from the opposite direction while the overtaking maneuver is in progress.",
          "ru": "Что предшествующее транспортное средство не включило поворотники и что ни одно транспортное средство не движется навстречу во время маневра обгона."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que ningún otro vehículo esté realizando la maniobra de sobrepaso.",
          "en": "That no other vehicle is performing the overtaking maneuver.",
          "ru": "Что ни одно другое транспортное средство не выполняет маневр обгона."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 236,
    "question": {
      "es": "En este lugar, ¿está permitido sobrepasar a otro vehículo?",
      "en": "In this place, is it allowed to overtake another vehicle?",
      "ru": "В этом месте разрешено обгонять другое транспортное средство?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, salvo que haya una señal que indique lo contrario.",
          "en": "Yes, unless there is a sign indicating otherwise.",
          "ru": "Да, если нет знака, указывающего на обратное."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido por normativa.",
          "en": "No, it is prohibited by regulation.",
          "ru": "Нет, это запрещено правилами."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si no se perjudica la circulación de otros vehículos.",
          "en": "Only if it does not hinder the circulation of other vehicles.",
          "ru": "Только если это не мешает движению других транспортных средств."
        },
        "correct": false
      }
    ],
    "image": "/questions/b121.jpg"
  },
  {
    "id": 237,
    "question": {
      "es": "Frente a la demarcación central de la calzada señalada, ¿cuál es la conducta a seguir?",
      "en": "In front of the central demarcation of the roadway indicated, what is the behavior to follow?",
      "ru": "Перед центральной разметкой проезжей части, какое поведение следует соблюдать?"
    },
    "answers": [
      {
        "text": {
          "es": "Se debe respetar lo que rige con respecto a la línea más próxima; si es continua no traspasarla y si es discontinua está permitido hacerlo.",
          "en": "You must respect what applies regarding the nearest line; if it is solid, do not cross it, and if it is broken, it is allowed to do so.",
          "ru": "Необходимо соблюдать правила относительно ближайшей линии; если она непрерывная, не пересекать ее, а если прерывистая, это разрешено."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se debe respetar lo que rige con respecto a la línea más próxima; si es discontinua no traspasarla y si es continua está permitido hacerlo.",
          "en": "You must respect what applies regarding the nearest line; if it is broken, do not cross it, and if it is solid, it is allowed to do so.",
          "ru": "Необходимо соблюдать правила относительно ближайшей линии; если она прерывистая, не пересекать ее, а если непрерывная, это разрешено."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No debe traspasarse ninguna de ellas.",
          "en": "None of them should be crossed.",
          "ru": "Нельзя пересекать ни одну из них."
        },
        "correct": false
      }
    ],
    "image": "/questions/b122.jpg"
  },
  {
    "id": 238,
    "question": {
      "es": "¿Qué indica esta demarcación amarilla en la calzada?",
      "en": "What does this yellow marking on the roadway indicate?",
      "ru": "Что указывает эта желтая разметка на проезжей части?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica que se puede traspasar.",
          "en": "Indicates that it can be crossed.",
          "ru": "Указывает, что можно пересекать."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Divide sentidos opuestos de circulación e indica que está prohibido traspasarla.",
          "en": "Divides opposing directions of traffic and indicates that crossing it is prohibited.",
          "ru": "Разделяет противоположные направления движения и указывает, что пересекать ее запрещено."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que es una zona que se puede circular sobre ella.",
          "en": "That it is an area where you can drive on it.",
          "ru": "Что это зона, по которой можно двигаться."
        },
        "correct": false
      }
    ],
    "image": "/questions/b123.jpg"
  },
  {
    "id": 239,
    "question": {
      "es": "El carril de sobrepaso en una autopista sirve para...",
      "en": "The overtaking lane on a highway is used to...",
      "ru": "Полоса обгона на автомагистрали предназначена для..."
    },
    "answers": [
      {
        "text": {
          "es": "Circular por él cuando a la derecha existe otro carril disponible.",
          "en": "Drive on it when there is another lane available to the right.",
          "ru": "Движения по ней, когда справа есть другая доступная полоса."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular por él siempre que se conduzca a la mayor velocidad permitida.",
          "en": "Drive on it as long as you are driving at the maximum allowed speed.",
          "ru": "Движения по ней, если скорость максимальная разрешенная."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Realizar maniobras de sobrepaso.",
          "en": "Perform overtaking maneuvers.",
          "ru": "Выполнения маневров обгона."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 240,
    "question": {
      "es": "¿A qué se denomina 'carril de aceleración'?",
      "en": "What is referred to as an 'acceleration lane'?",
      "ru": "Что называется 'полосой ускорения'?"
    },
    "answers": [
      {
        "text": {
          "es": "Es el carril de incorporación a una autopista.",
          "en": "It is the lane for merging onto a highway.",
          "ru": "Это полоса для вхождения на автомагистраль."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es el carril derecho de una autopista.",
          "en": "It is the right lane of a highway.",
          "ru": "Это правая полоса автомагистрали."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es el carril izquierdo de una autopista.",
          "en": "It is the left lane of a highway.",
          "ru": "Это левая полоса автомагистрали."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 241,
    "question": {
      "es": "El motovehículo señalado con el círculo rojo, ¿circula correctamente?",
      "en": "Does the motorcycle indicated with the red circle circulate correctly?",
      "ru": "Мотоцикл, обозначенный красным кругом, движется правильно?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque circula paralelo con otros vehículos y no en zig zag.",
          "en": "Yes, because it is traveling parallel to other vehicles and not zigzagging.",
          "ru": "Да, потому что он движется параллельно другим транспортным средствам и не зигзагом."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque tiene la luz encendida.",
          "en": "Yes, because it has its light on.",
          "ru": "Да, потому что у него включен свет."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque está prohibido circular por esa zona.",
          "en": "No, because it is prohibited to drive in that area.",
          "ru": "Нет, потому что движение в этой зоне запрещено."
        },
        "correct": true
      }
    ],
    "image": "/questions/a16.jpg"
  },
  {
    "id": 242,
    "question": {
      "es": "Un vehículo podrá circular por la franja paralela a la calzada, indicada en la imagen, sólo cuando el flujo vehicular esté absolutamente congestionado.",
      "en": "A vehicle may drive in the lane parallel to the roadway, indicated in the image, only when the vehicle flow is absolutely congested.",
      "ru": "Транспортное средство может двигаться по полосе, параллельной проезжей части, указанной на изображении, только когда поток транспортных средств абсолютно загружен."
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
    "image": "/questions/b125.jpg"
  },
  {
    "id": 243,
    "question": {
      "es": "El vehículo señalizado tiene permitido girar a la izquierda en este cruce que no tiene semáforo.",
      "en": "The indicated vehicle is allowed to turn left at this intersection that does not have a traffic light.",
      "ru": "Обозначенное транспортное средство имеет право поворачивать налево на этом перекрестке, где нет светофора."
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
    "image": "/questions/b126.jpg"
  },
  {
    "id": 244,
    "question": {
      "es": "Ud. viene circulando por una avenida de doble mano y al llegar a la bocacalle, precisa girar a la izquierda para tomar una calle de único sentido. De acuerdo a la Ley Nº 2148, ¿en qué condiciones puede efectuar esa maniobra?",
      "en": "You are driving on a two-way avenue and upon reaching the intersection, you need to turn left to take a one-way street. According to Law No. 2148, under what conditions can you make that maneuver?",
      "ru": "Вы движетесь по улице с двусторонним движением и, подъезжая к перекрестку, вам нужно повернуть налево, чтобы попасть на улицу с односторонним движением. В соответствии с Законом № 2148, при каких условиях вы можете выполнить этот маневр?"
    },
    "answers": [
      {
        "text": {
          "es": "Si hay un semáforo de giro que me habilite (en verde).",
          "en": "If there is a turn signal that allows me (in green).",
          "ru": "Если есть светофор поворота, который меня разрешает (зеленый)."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Si es un cruce sin semáforos y no se acerca ningún vehículo por la mano de circulación contraria a la de mi avance.",
          "en": "If it is an intersection without traffic lights and no vehicle is approaching from the direction opposite to my advance.",
          "ru": "Если это перекресток без светофоров и никакое транспортное средство не приближается по встречной полосе."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 245,
    "question": {
      "es": "En un cruce sin semáforos, un vehículo que se encuentra circulando por una avenida doble mano, tiene permitido girar a su izquierda para tomar una calle de único sentido.",
      "en": "At an intersection without traffic lights, a vehicle that is driving on a two-way avenue is allowed to turn left to take a one-way street.",
      "ru": "На перекрестке без светофоров транспортное средство, движущееся по улице с двусторонним движением, имеет право повернуть налево, чтобы попасть на улицу с односторонним движением."
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
      "en": "According to Law No. 2148, is the following turn allowed?",
      "ru": "В соответствии с Законом № 2148, разрешено ли выполнять следующий поворот?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que sólo está permitido hacer ese giro si existe un semáforo que lo habilita.",
          "en": "No, as that turn is only allowed if there is a traffic light that permits it.",
          "ru": "Нет, так как этот поворот разрешен только при наличии светофора, который его разрешает."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que es una intersección no semaforizada.",
          "en": "Yes, as it is an unregulated intersection.",
          "ru": "Да, так как это перекресток без светофоров."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que es una vía de doble sentido de circulación.",
          "en": "No, as it is a two-way road.",
          "ru": "Нет, так как это дорога с двусторонним движением."
        },
        "correct": false
      }
    ],
    "image": "/questions/b127.jpg"
  },
  {
    "id": 247,
    "question": {
      "es": "De acuerdo a la Ley N° 2148, ¿está permitido realizar este giro?",
      "en": "According to Law No. 2148, is it allowed to make this turn?",
      "ru": "Согласно Закону № 2148, разрешено ли выполнять этот поворот?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque al ser una intersección semaforizada pero sin giro, no está permitido realizar esa maniobra.",
          "en": "No, because being a signalized intersection but without a turn, that maneuver is not allowed.",
          "ru": "Нет, потому что это светофорный перекресток, но без поворота, выполнять этот маневр не разрешено."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que el semáforo está en verde.",
          "en": "Yes, since the traffic light is green.",
          "ru": "Да, так как светофор зеленый."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que es una vía de doble sentido de circulación.",
          "en": "No, as it is a two-way road.",
          "ru": "Нет, так как это дорога с двусторонним движением."
        },
        "correct": false
      }
    ],
    "image": "/questions/b128.jpg"
  },
  {
    "id": 248,
    "question": {
      "es": "El vehículo con un círculo de color rojo quería girar a la derecha y, por error continuó en línea recta, de modo que:",
      "en": "The vehicle with a red circle wanted to turn right and, by mistake, continued straight, so:",
      "ru": "Транспортное средство с красным кругом хотело повернуть направо и по ошибке продолжило движение прямо, таким образом:"
    },
    "answers": [
      {
        "text": {
          "es": "Puede circular marcha atrás, porque es un tramo corto el que tiene que recorrer, y efectuar el giro.",
          "en": "It can reverse, because it is a short distance it has to cover, and make the turn.",
          "ru": "Можно двигаться задним ходом, потому что это короткий участок, который нужно проехать, и выполнить поворот."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Puede dar la vuelta en U para tomar el sentido contrario y así efectuar el giro programado.",
          "en": "It can make a U-turn to take the opposite direction and thus make the planned turn.",
          "ru": "Можно развернуться, чтобы взять противоположное направление и таким образом выполнить запланированный поворот."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son incorrectas.",
          "en": "Both answers, A and B, are incorrect.",
          "ru": "Оба ответа, A и B, неверны."
        },
        "correct": true
      }
    ],
    "image": "/questions/b129.jpg"
  },
  {
    "id": 249,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima permitida en esta calle?",
      "en": "According to general rules, what is the maximum speed allowed on this street?",
      "ru": "Согласно общим правилам, какова максимальная разрешенная скорость на этой улице?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "70 km/h.",
          "ru": "70 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b130.jpg"
  },
  {
    "id": 250,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad mínima permitida en esta calle?",
      "en": "According to general rules, what is the minimum speed allowed on this street?",
      "ru": "Согласно общим правилам, какова минимальная разрешенная скорость на этой улице?"
    },
    "answers": [
      {
        "text": {
          "es": "30 km/h.",
          "en": "30 km/h.",
          "ru": "30 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "20 km/h.",
          "en": "20 km/h.",
          "ru": "20 км/ч."
        },
        "correct": true
      }
    ],
    "image": "/questions/b131.jpg"
  },
  {
    "id": 251,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima permitida para un motovehículo en esta avenida?",
      "en": "According to general rules, what is the maximum speed allowed for a motorcycle on this avenue?",
      "ru": "Согласно общим правилам, какова максимальная разрешенная скорость для мотоциклов на этом проспекте?"
    },
    "answers": [
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "70 km/h.",
          "ru": "70 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": true
      }
    ],
    "image": "/questions/b132.jpg"
  },
  {
    "id": 252,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para un motovehículo en este tramo de la avenida?",
      "en": "What is the maximum speed allowed for a motorcycle on this section of the avenue?",
      "ru": "Какова максимальная разрешенная скорость для мотоциклов на этом участке проспекта?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "50 km/h.",
          "en": "50 km/h.",
          "ru": "50 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": true
      }
    ],
    "image": "/questions/b133.jpg"
  },
  {
    "id": 253,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para motovehículos en la Avenida Costanera Rafael Obligado que se visualiza en la imagen?",
      "en": "What is the maximum speed allowed for motorcycles on Avenida Costanera Rafael Obligado as seen in the image?",
      "ru": "Какова максимальная разрешенная скорость для мотоциклов на проспекте Костанера Рафаэль Облигадо, который виден на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "70 km/h.",
          "ru": "70 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "50 km/h.",
          "en": "50 km/h.",
          "ru": "50 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b134.jpg"
  },
  {
    "id": 254,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para motovehículos en este tramo de la Av. Costanera Rafael Obligado?",
      "en": "What is the maximum speed allowed for motorcycles on this section of Av. Costanera Rafael Obligado?",
      "ru": "Какова максимальная разрешенная скорость для мотоциклов на этом участке проспекта Костанера Рафаэль Облигадо?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "70 km/h.",
          "en": "70 km/h.",
          "ru": "70 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b135.jpg"
  },
  {
    "id": 255,
    "question": {
      "es": "Según la Ley 2148, los límites de velocidad para un motovehículos que circula por esta arteria son de 30 km/h (mínima) y 60 km/h (máxima).",
      "en": "According to Law 2148, the speed limits for motorcycles traveling on this artery are 30 km/h (minimum) and 60 km/h (maximum).",
      "ru": "Согласно Закону 2148, пределы скорости для мотоциклов, движущихся по этой артерии, составляют 30 км/ч (минимум) и 60 км/ч (максимум)."
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
    "image": "/questions/b136.jpg"
  },
  {
    "id": 256,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima permitida para motovehículos en esta zona de la ruta?",
      "en": "According to general rules, what is the maximum speed allowed for motorcycles in this area of the road?",
      "ru": "Согласно общим правилам, какова максимальная разрешенная скорость для мотоциклов в этой зоне дороги?"
    },
    "answers": [
      {
        "text": {
          "es": "110 km/h.",
          "en": "110 km/h.",
          "ru": "110 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "130 km/h.",
          "en": "130 km/h.",
          "ru": "130 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "80 km/h.",
          "ru": "80 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b137.jpg"
  },
  {
    "id": 257,
    "question": {
      "es": "Según las normas generales, ¿cuál es la velocidad máxima que puede alcanzar un vehículo, al circular por ruta cuando atraviesa una zona urbana?",
      "en": "According to general rules, what is the maximum speed a vehicle can reach when traveling on a road that crosses an urban area?",
      "ru": "Согласно общим правилам, какова максимальная скорость, которую может развить транспортное средство, двигаясь по дороге, когда пересекает городскую зону?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "80 km/h.",
          "ru": "80 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "90 km/h.",
          "en": "90 km/h.",
          "ru": "90 км/ч."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 258,
    "question": {
      "es": "Al circular por una ruta a la velocidad máxima permitida sólo se está habilitado a superarla en el momento del sobrepaso.",
      "en": "When traveling on a road at the maximum allowed speed, one is only authorized to exceed it at the moment of overtaking.",
      "ru": "При движении по дороге с максимальной разрешенной скоростью разрешается превышать ее только в момент обгона."
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
      "en": "What is the maximum speed allowed on this section of the street?",
      "ru": "Какова максимальная разрешенная скорость на этом участке улицы?"
    },
    "answers": [
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "20 km/h.",
          "en": "20 km/h.",
          "ru": "20 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "30 km/h.",
          "en": "30 km/h.",
          "ru": "30 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b138.jpg"
  },
  {
    "id": 260,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida en este tramo de calle?",
      "en": "What is the maximum speed allowed on this section of the street?",
      "ru": "Какова максимальная разрешенная скорость на этом участке улицы?"
    },
    "answers": [
      {
        "text": {
          "es": "20 km/h.",
          "en": "20 km/h.",
          "ru": "20 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 km/h.",
          "en": "30 km/h.",
          "ru": "30 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b139.jpg"
  },
  {
    "id": 261,
    "question": {
      "es": "Al pretender abandonar una autopista o semiautopista, ¿cuándo se debe reducir la velocidad?",
      "en": "When intending to leave a highway or semi-highway, when should speed be reduced?",
      "ru": "При намерении покинуть автомагистраль или полумагистраль, когда следует снизить скорость?"
    },
    "answers": [
      {
        "text": {
          "es": "Poco antes de abandonar la misma.",
          "en": "Shortly before leaving it.",
          "ru": "Незадолго до выхода с нее."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cuando se haya entrado en el carril de desaceleración.",
          "en": "When entering the deceleration lane.",
          "ru": "Когда заехали в полосу замедления."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cuando se ingresa a la nueva vía de circulación.",
          "en": "When entering the new traffic lane.",
          "ru": "Когда заезжаете на новую проезжую часть."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 262,
    "question": {
      "es": "Según Ley N° 2148, ¿cuál es la velocidad máxima permitida para motovehículos en los carriles centrales de la Av. Gral. Paz, en el tramo entre Autopista Ingeniero Pascual Palazzo y Av. 27 de Febrero?",
      "en": "According to Law No. 2148, what is the maximum speed allowed for motorcycles in the central lanes of Av. Gral. Paz, in the section between Autopista Ingeniero Pascual Palazzo and Av. 27 de Febrero?",
      "ru": "Согласно Закону № 2148, какова максимальная разрешенная скорость для мотоциклов на центральных полосах проспекта Генерал Паз, на участке между автомагистралью Инженера Паскуаля Палаццо и проспектом 27 Февраля?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "80 km/h.",
          "ru": "80 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "100 km/h.",
          "en": "100 km/h.",
          "ru": "100 км/ч."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 263,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para un motovehículo en Av. Intendente Cantilo, salvo señalización que indique otra velocidad?",
      "en": "What is the maximum speed allowed for a motorcycle on Av. Intendente Cantilo, unless signage indicates another speed?",
      "ru": "Какова максимальная разрешенная скорость для мотоцикла на проспекте Интенденто Кантило, если нет знаков, указывающих другую скорость?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "110 km/h.",
          "en": "110 km/h.",
          "ru": "110 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "100 km/h.",
          "en": "100 km/h.",
          "ru": "100 км/ч."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 264,
    "question": {
      "es": "Según la Ley Nacional N° 24.449, ¿cuál es la velocidad máxima permitida para motovehículos en semiautopistas?",
      "en": "According to National Law No. 24.449, what is the maximum speed allowed for motorcycles on semi-highways?",
      "ru": "Согласно Национальному закону № 24.449, какова максимальная разрешенная скорость для мотоциклов на полумагистралях?"
    },
    "answers": [
      {
        "text": {
          "es": "130 km/h.",
          "en": "130 km/h.",
          "ru": "130 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "120 km/h.",
          "en": "120 km/h.",
          "ru": "120 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "110 km/h.",
          "en": "110 km/h.",
          "ru": "110 км/ч."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 265,
    "question": {
      "es": "Según la Ley Nacional N º 24.449, en carácter general, ¿cuál es la velocidad mínima permitida en las semiautopistas?",
      "en": "According to National Law No. 24.449, in general, what is the minimum speed allowed on semi-highways?",
      "ru": "Согласно Национальному закону № 24.449, в общем, какова минимальная разрешенная скорость на полумагистралях?"
    },
    "answers": [
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "50 km/h.",
          "en": "50 km/h.",
          "ru": "50 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 266,
    "question": {
      "es": "¿Qué se conoce como velocidad precautoria?",
      "en": "What is known as precautionary speed?",
      "ru": "Что понимается под предостерегающей скоростью?"
    },
    "answers": [
      {
        "text": {
          "es": "A la velocidad adecuada a las circunstancias (dentro de los límites establecidos) que permite mantener el total dominio del vehículo sin generar riesgo.",
          "en": "The speed appropriate to the circumstances (within the established limits) that allows maintaining full control of the vehicle without generating risk.",
          "ru": "Скорость, соответствующая обстоятельствам (в пределах установленных лимитов), которая позволяет полностью контролировать транспортное средство без создания риска."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La circulación a la velocidad mínima establecida para una vía.",
          "en": "Traveling at the minimum speed established for a road.",
          "ru": "Движение с установленной минимальной скоростью для дороги."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La circulación a no más de 30 km/h en calles y de 45 km/h en avenidas.",
          "en": "Traveling at no more than 30 km/h on streets and 45 km/h on avenues.",
          "ru": "Движение не более 30 км/ч по улицам и 45 км/ч по проспектам."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 267,
    "question": {
      "es": "En este cruce de dos calles sin semáforos, ¿cuál es el límite superior de la velocidad precautoria establecida por ley?",
      "en": "At this intersection of two streets without traffic lights, what is the upper limit of the precautionary speed established by law?",
      "ru": "На этом перекрестке двух улиц без светофоров, каков верхний предел осторожной скорости, установленный законом?"
    },
    "answers": [
      {
        "text": {
          "es": "20 kilómetros por hora.",
          "en": "20 kilometers per hour.",
          "ru": "20 километров в час."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 kilómetros por hora.",
          "en": "40 kilometers per hour.",
          "ru": "40 километров в час."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 kilómetros por hora.",
          "en": "30 kilometers per hour.",
          "ru": "30 километров в час."
        },
        "correct": true
      }
    ],
    "image": "/questions/b142.jpg"
  },
  {
    "id": 268,
    "question": {
      "es": "Según la Ley N° 2148, ¿cuál es la velocidad precautoria frente a establecimientos escolares durante los horarios de ingreso y egreso?",
      "en": "According to Law No. 2148, what is the precautionary speed in front of school establishments during entry and exit times?",
      "ru": "Согласно Закону № 2148, какова осторожная скорость перед учебными заведениями в часы входа и выхода?"
    },
    "answers": [
      {
        "text": {
          "es": "Es de 20 km/h para todas las arterias.",
          "en": "It is 20 km/h for all arteries.",
          "ru": "Она составляет 20 км/ч для всех магистралей."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No más de 30 km/h en calles y de 45 km/h en avenidas.",
          "en": "No more than 30 km/h on streets and 45 km/h on avenues.",
          "ru": "Не более 30 км/ч на улицах и 45 км/ч на проспектах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es igual a la mínima establecida para el tipo de arteria correspondiente.",
          "en": "It is equal to the minimum established for the corresponding type of artery.",
          "ru": "Она равна минимальной, установленной для соответствующего типа магистрали."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 269,
    "question": {
      "es": "Según la Ley N° 2148, ¿cuál es el límite superior de la velocidad precautoria en un paso nivel?",
      "en": "According to Law No. 2148, what is the upper limit of the precautionary speed at a level crossing?",
      "ru": "Согласно Закону № 2148, каков верхний предел осторожной скорости на железнодорожном переезде?"
    },
    "answers": [
      {
        "text": {
          "es": "20 kilómetros por hora.",
          "en": "20 kilometers per hour.",
          "ru": "20 километров в час."
        },
        "correct": true
      },
      {
        "text": {
          "es": "40 kilómetros por hora.",
          "en": "40 kilometers per hour.",
          "ru": "40 километров в час."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 kilómetros por hora.",
          "en": "30 kilometers per hour.",
          "ru": "30 километров в час."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 270,
    "question": {
      "es": "Los vehículos que circulan por la siguiente avenida, al llegar a esta bocacalle sin semáforos, ¿cuál es el límite superior de velocidad precautoria que deben respetar?",
      "en": "Vehicles traveling on the following avenue, upon reaching this intersection without traffic lights, what is the upper limit of precautionary speed they must respect?",
      "ru": "Транспортные средства, движущиеся по следующему проспекту, при подъезде к этому перекрестку без светофоров, каков верхний предел осторожной скорости, который они должны соблюдать?"
    },
    "answers": [
      {
        "text": {
          "es": "20 kilómetros por hora.",
          "en": "20 kilometers per hour.",
          "ru": "20 километров в час."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 kilómetros por hora.",
          "en": "40 kilometers per hour.",
          "ru": "40 километров в час."
        },
        "correct": true
      },
      {
        "text": {
          "es": "30 kilómetros por hora.\t",
          "en": "30 kilometers per hour.",
          "ru": "30 километров в час."
        },
        "correct": false
      }
    ],
    "image": "/questions/b143.jpg"
  },
  {
    "id": 271,
    "question": {
      "es": "¿A qué se denomina “distancia de seguridad”?",
      "en": "What is meant by 'safety distance'?",
      "ru": "Что называется \"дистанцией безопасности\"?"
    },
    "answers": [
      {
        "text": {
          "es": "A la distancia mínima que se debe mantener con el vehículo que circula adelante para tener un mayor margen de reacción y en caso de frenada repentina no se colisione con él.",
          "en": "It is the minimum distance that must be maintained with the vehicle ahead to have a greater margin of reaction and in case of sudden braking to avoid colliding with it.",
          "ru": "Это минимальное расстояние, которое должно поддерживаться с транспортным средством, движущимся впереди, чтобы иметь больший запас времени для реакции и в случае резкого торможения не столкнуться с ним."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A la distancia que se debe mantener con el vehículo que circula en el carril paralelo, para realizar un sobrepaso seguro.",
          "en": "It is the distance that must be maintained with the vehicle traveling in the parallel lane to make a safe overtaking.",
          "ru": "Это расстояние, которое должно поддерживаться с транспортным средством, движущимся в параллельной полосе, для безопасного обгона."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la distancia que recorre el vehículo desde que el conductor percibe una situación de peligro hasta que acciona el freno.",
          "en": "It is the distance a vehicle travels from the moment the driver perceives a dangerous situation until the brake is applied.",
          "ru": "Это расстояние, которое проходит транспортное средство с момента, когда водитель замечает опасную ситуацию, до момента, когда он нажимает на тормоза."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 272,
    "question": {
      "es": "¿A qué se denomina “tiempo de reacción”?",
      "en": "What is meant by 'reaction time'?",
      "ru": "Что называется \"временем реакции\"?"
    },
    "answers": [
      {
        "text": {
          "es": "Al tiempo que pasa desde que se empieza una maniobra hasta que se termina.",
          "en": "It is the time that passes from the beginning of a maneuver until it is completed.",
          "ru": "Это время, которое проходит с момента начала маневра до его завершения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tiempo que pasa desde que se enciende el vehículo hasta que se empieza a circular.",
          "en": "It is the time that passes from when the vehicle is started until it begins to move.",
          "ru": "Это время, которое проходит с момента включения транспортного средства до начала движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al tiempo que pasa desde que se advierte una situación de riesgo hasta que se toma una decisión.",
          "en": "It is the time that passes from when a risk situation is noticed until a decision is made.",
          "ru": "Это время, которое проходит с момента обнаружения ситуации риска до принятия решения."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 273,
    "question": {
      "es": "¿A qué se denomina 'distancia de reacción'?",
      "en": "What is meant by 'reaction distance'?",
      "ru": "Что называется 'дистанцией реакции'?"
    },
    "answers": [
      {
        "text": {
          "es": "A la distancia que recorre un vehículo hasta su detención.",
          "en": "It is the distance a vehicle travels until it comes to a stop.",
          "ru": "Это расстояние, которое проходит транспортное средство до его остановки."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la distancia que debe guardar un vehículo, respecto de otro, para poder maniobrar.",
          "en": "It is the distance that must be kept by a vehicle, regarding another, to be able to maneuver.",
          "ru": "Это расстояние, которое должен соблюдать один транспортное средство относительно другого, чтобы иметь возможность маневрировать."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la distancia que recorre un vehículo desde que el conductor percibe un peligro hasta que toma una decisión.",
          "en": "It is the distance a vehicle travels from the moment the driver perceives a danger until a decision is made.",
          "ru": "Это расстояние, которое проходит транспортное средство с момента, когда водитель замечает опасность, до момента, когда он принимает решение."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 274,
    "question": {
      "es": "Según la Ley 2148, al circular con un motovehículo detrás de este camión, ¿cuál es la distancia mínima de seguridad que debe mantener respecto de él? La distancia que resulte de una separación de por lo menos…?",
      "en": "According to Law 2148, when riding a motorcycle behind this truck, what is the minimum safety distance that must be maintained from it? The distance resulting from a separation of at least...?",
      "ru": "Согласно Закону 2148, при движении на мотоцикле за этим грузовиком, каково минимальное расстояние безопасности, которое он должен соблюдать относительно него? Расстояние, которое составляет как минимум…?"
    },
    "answers": [
      {
        "text": {
          "es": "Un segundo.",
          "en": "One second.",
          "ru": "Одна секунда."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dos segundos.",
          "en": "Two seconds.",
          "ru": "Две секунды."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cinco segundos.",
          "en": "Five seconds.",
          "ru": "Пять секунд."
        },
        "correct": false
      }
    ],
    "image": "/questions/a17.jpg"
  },
  {
    "id": 275,
    "question": {
      "es": "Circular por debajo del límite mínimo de velocidad puede causar incidentes.",
      "en": "Driving below the minimum speed limit can cause incidents.",
      "ru": "Движение ниже минимального предела скорости может вызвать инциденты."
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
      "en": "What relationship exists between speed and the driver's field of vision?",
      "ru": "Какова связь между скоростью и полем зрения водителя?"
    },
    "answers": [
      {
        "text": {
          "es": "A mayor velocidad, menor campo visual.",
          "en": "At higher speeds, the field of vision is smaller.",
          "ru": "При большей скорости поле зрения меньше."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A menor velocidad, menor campo visual.",
          "en": "At lower speeds, the field of vision is smaller.",
          "ru": "При меньшей скорости поле зрения меньше."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A mayor velocidad, mayor campo visual.",
          "en": "At higher speeds, the field of vision is larger.",
          "ru": "При большей скорости поле зрения больше."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 277,
    "question": {
      "es": "Los excesos de velocidad...",
      "en": "Speeding...",
      "ru": "Превышение скорости..."
    },
    "answers": [
      {
        "text": {
          "es": "En la actualidad apenas tienen incidencia en los incidentes, debido a la seguridad de los vehículos.",
          "en": "Currently has little impact on incidents, due to vehicle safety.",
          "ru": "В настоящее время почти не влияет на инциденты, благодаря безоп��сности транспортных средств."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son responsables de la mayoría de los incidentes solamente en vías de doble sentido.",
          "en": "Is responsible for most incidents only on two-way roads.",
          "ru": "Они ответственны за большинство инцидентов только на двусторонних дорогах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Son responsables de la mayoría de los incidentes fatales cualquiera sea la vía de circulación.",
          "en": "Is responsible for most fatal incidents regardless of the road type.",
          "ru": "Они ответственны за большинство смертельных инцидентов независимо от дороги."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 278,
    "question": {
      "es": "Circular a velocidad constante y dentro de los límites establecidos por la Ley, además de minimizar las posibilidades de provocar un siniestro vial, puede optimizar el consumo de combustible en un vehículo.",
      "en": "Driving at a constant speed and within the limits established by law, in addition to minimizing the chances of causing a traffic accident, can optimize fuel consumption in a vehicle.",
      "ru": "Движение с постоянной скоростью и в пределах, установленных законом, помимо минимизации возможностей вызвать дорожное происшествие, может оптимизировать расход топлива в транспортном средстве."
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
      "en": "Driving at a speed higher than the precautionary limit increases the chances of a traffic accident being more serious.",
      "ru": "Движение с большей скоростью, чем осторожная, увеличивает вероятность того, что дорожное происшествие будет более серьезным."
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
      "en": "What is the most appropriate way to drive a vehicle on this stretch of the road?",
      "ru": "Каков наиболее подходящий способ управления транспортным средством на этом участке дороги?"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad gradualmente antes de ingresar en la curva.",
          "en": "Gradually increase speed before entering the curve.",
          "ru": "Постепенно увеличивать скорость перед входом в поворот."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Desacelerar antes de ingresar a la curva.",
          "en": "Decelerate before entering the curve.",
          "ru": "Снижать скорость перед входом в поворот."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Mantener la misma velocidad antes de la curva y acelerar mientras se circula en ella.",
          "en": "Maintain the same speed before the curve and accelerate while driving through it.",
          "ru": "Сохранять ту же скорость перед поворотом и ускоряться, пока движешься в нем."
        },
        "correct": false
      }
    ],
    "image": "/questions/b145.jpg"
  },
  {
    "id": 281,
    "question": {
      "es": "Si al circular por ruta, el vehículo sale involuntariamente de la calzada, es recomendable:",
      "en": "If while driving on the road, the vehicle unintentionally leaves the roadway, it is advisable to:",
      "ru": "Если при движении по дороге транспортное средство непроизвольно покинет проезжую часть, рекомендуется:"
    },
    "answers": [
      {
        "text": {
          "es": "Usar el freno de mano.",
          "en": "Use the handbrake.",
          "ru": "Использовать ручной тормоз."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Desacelerar (no frenar).",
          "en": "Decelerate (do not brake).",
          "ru": "Снижать скорость (не тормозить)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Accionar fuertemente el pedal de freno.",
          "en": "Press the brake pedal hard.",
          "ru": "Сильно нажать на тормоза."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 282,
    "question": {
      "es": "Si ve esta señal mientras conduce, usted debe…",
      "en": "If you see this sign while driving, you must...",
      "ru": "Если вы видите этот знак во время вождения, вы должны…"
    },
    "answers": [
      {
        "text": {
          "es": "Reducir la velocidad del vehículo",
          "en": "Reduce the speed of the vehicle.",
          "ru": "Снизить скорость транспортного средства."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Incrementar la velocidad del vehículo",
          "en": "Increase the speed of the vehicle.",
          "ru": "Увеличить скорость транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dar vuelta a la izquierda y después a la derecha",
          "en": "Turn left and then right.",
          "ru": "Повернуть налево, а затем направо."
        },
        "correct": false
      }
    ],
    "image": "/questions/b146.jpg"
  },
  {
    "id": 283,
    "question": {
      "es": "Si al circular en ruta se encuentra con esta señal, ¿qué conducta debe seguir?",
      "en": "If while driving on the road you encounter this sign, what behavior should you follow?",
      "ru": "Если при движении по дороге вы встретите этот знак, какое поведение вы должны соблюдать?"
    },
    "answers": [
      {
        "text": {
          "es": "Se debe disminuir la velocidad y prestar atención a la posible aproximación de trenes.",
          "en": "You should reduce speed and pay attention to the possible approach of trains.",
          "ru": "Необходимо снизить скорость и обратить внимание на возможное приближение поездов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se continúa con la misma velocidad, salvo que se haga efectiva la aproximación del tren.",
          "en": "Continue at the same speed, unless the train's approach is made effective.",
          "ru": "Продолжать с той же скоростью, если не происходит приближение поезда."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se indica al resto de los conductores, la precaución sobre la aproximación de trenes, colocando balizas.",
          "en": "It indicates to the other drivers the caution about the approach of trains by placing beacons.",
          "ru": "Остальным водителям указывается на необходимость осторожности в связи с приближением поездов, устанавливая сигнальные знаки."
        },
        "correct": false
      }
    ],
    "image": "/questions/b147.jpg"
  },
  {
    "id": 284,
    "question": {
      "es": "¿Cuál es la velocidad máxima permitida para motovehículos en este tramo de la Av. Gral Roca, por encontrarse cerca de un establecimiento escolar?",
      "en": "What is the maximum speed allowed for motorcycles in this section of Av. Gral Roca, due to being near a school?",
      "ru": "Какова максимальная разрешенная скорость для мотоциклов на этом участке авеню Гр. Рока, так как он находится рядом с учебным заведением?"
    },
    "answers": [
      {
        "text": {
          "es": "30 km/h.",
          "en": "30 km/h.",
          "ru": "30 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b140.jpg"
  },
  {
    "id": 285,
    "question": {
      "es": "¿El límite de velocidad máxima de 20 km/h en este tramo de calle se debe respetar sólo en el horario de funcionamiento escolar?",
      "en": "Should the maximum speed limit of 20 km/h in this section of the street be respected only during school hours?",
      "ru": "Должен ли соблюдаться предел максимальной скорости 20 км/ч на этом участке улицы только в часы работы учебного заведения?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que el límite de la señal de tránsito rige independientemente del día y horario.",
          "en": "No, since the limit of the traffic sign applies regardless of the day and time.",
          "ru": "Нет, так как предел дорожного знака действует независимо от дня и времени."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que la Ley 2148 establece que esta restricción es durante el horario de funcionamiento escolar.",
          "en": "Yes, since Law 2148 establishes that this restriction is during school hours.",
          "ru": "Да, так как Закон 2148 устанавливает, что это ограничение действует в часы работы учебного заведения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b141.jpg"
  },
  {
    "id": 286,
    "question": {
      "es": "El motovehículo de la imagen, ¿se encuentra correctamente estacionado?",
      "en": "Is the motorcycle in the image parked correctly?",
      "ru": "На изображении мотоцикл правильно припаркован?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque la vereda tiene más de tres metros y no obstruye el paso peatonal.",
          "en": "Yes, because the sidewalk is more than three meters wide and does not obstruct pedestrian passage.",
          "ru": "Да, потому что тротуар шире трех метров и не препятствует пешеходному движению."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Sólo puede estacionarse sobre la vereda si existe una señalización que lo autorice.",
          "en": "No. You can only park on the sidewalk if there is signage that authorizes it.",
          "ru": "Нет. Можно парковаться на тротуаре только при наличии знака, разрешающего это."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, sólo los motovehículos pueden estacionarse sobre cualquier vereda.",
          "en": "Yes, only motorcycles can park on any sidewalk.",
          "ru": "Да, только мотоциклы могут парковаться на любом тротуаре."
        },
        "correct": false
      }
    ],
    "image": "/questions/a18.jpg"
  },
  {
    "id": 287,
    "question": {
      "es": "Según la Ley N° 2148, ¿está permitido estacionar un motovehículo del modo que se visualiza en la imagen?",
      "en": "According to Law No. 2148, is it allowed to park a motorcycle in the manner shown in the image?",
      "ru": "Согласно Закону № 2148, разрешено ли парковать мотоцикл так, как показано на изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "No, salvo que exista señalización que lo permita.",
          "en": "No, unless there is signage that allows it.",
          "ru": "Нет, если только нет знака, разрешающего это."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, de 07 a 21 horas durante días no hábiles.",
          "en": "Yes, from 7 AM to 9 PM during non-working days.",
          "ru": "Да, с 07:00 до 21:00 в нерабочие дни."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, de 21 a 07 horas durante los días hábiles.",
          "en": "Yes, from 9 PM to 7 AM during working days.",
          "ru": "Да, с 21:00 до 07:00 в рабочие дни."
        },
        "correct": false
      }
    ],
    "image": "/questions/a19.jpg"
  },
  {
    "id": 288,
    "question": {
      "es": "Si su motovehículo no funciona, ud. puede estacionarlo durante unos días hasta que sea reparado, tal como se muestra en la imagen.",
      "en": "If your motorcycle is not working, you can park it for a few days until it is repaired, as shown in the image.",
      "ru": "Если ваш мотоцикл не работает, вы можете оставить его на несколько дней до ремонта, как показано на изображении."
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
    "image": "/questions/a20.jpg"
  },
  {
    "id": 289,
    "question": {
      "es": "¿Qué línea debe tomarse de referencia cuando se detiene o estaciona en proximidad de una esquina?",
      "en": "What line should be taken as a reference when stopping or parking near a corner?",
      "ru": "Какую линию следует использовать в качестве ориентира, когда останавливаешься или паркуешься вблизи угла?"
    },
    "answers": [
      {
        "text": {
          "es": "La línea peatonal.",
          "en": "The pedestrian line.",
          "ru": "Пешеходная линия."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La línea imaginaria de prolongación de ochava.",
          "en": "The imaginary line extending the corner.",
          "ru": "Воображаемая линия продолжения угла."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La línea de edificación transversal.",
          "en": "The cross-building line.",
          "ru": "Линия поперечного строительства."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 290,
    "question": {
      "es": "Como norma general, ¿qué distancia debe dejarse libre cuando se va a estacionar frente a este tipo de instituciones?",
      "en": "As a general rule, what distance should be kept clear when parking in front of this type of institution?",
      "ru": "Какое расстояние должно оставаться свободным, когда вы собираетесь припарковаться перед такими учреждениями?"
    },
    "answers": [
      {
        "text": {
          "es": "Todo el frente del edificio.",
          "en": "The entire front of the building.",
          "ru": "Весь фасад здания."
        },
        "correct": false
      },
      {
        "text": {
          "es": "10 metros de cada lado de la entrada.",
          "en": "10 meters on each side of the entrance.",
          "ru": "10 метров с каждой стороны входа."
        },
        "correct": true
      },
      {
        "text": {
          "es": "5 metros de cada lado de la entrada.",
          "en": "5 meters on each side of the entrance.",
          "ru": "5 метров с каждой стороны входа."
        },
        "correct": false
      }
    ],
    "image": "/questions/b152.jpg"
  },
  {
    "id": 291,
    "question": {
      "es": "Para poder estacionar en esta zona, se deben dejar libre al menos de 5 metros para cada lado de la entrada.",
      "en": "To be able to park in this area, at least 5 meters must be kept clear on each side of the entrance.",
      "ru": "Чтобы припарковаться в этой зоне, необходимо оставить свободными как минимум 5 метров с каждой стороны входа."
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
    "image": "/questions/b153.jpg"
  },
  {
    "id": 292,
    "question": {
      "es": "En estas zonas, está permitido estacionar a partir de los 20 metros para cada lado.",
      "en": "In these areas, parking is allowed starting from 20 meters on each side.",
      "ru": "В этих зонах разрешено парковаться начиная с 20 метров с каждой стороны."
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
    "image": "/questions/b155.jpg"
  },
  {
    "id": 293,
    "question": {
      "es": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos...",
      "en": "Law No. 2148 establishes as a general rule that in avenues of this type, it is prohibited to park vehicles...",
      "ru": "Закон № 2148 устанавливает в качестве общег�� правила, что на таких авеню запрещено парковать транспортные средства..."
    },
    "answers": [
      {
        "text": {
          "es": "Junto a ambas aceras los días hábiles entre las 7 y las 21 horas.",
          "en": "Next to both sidewalks on working days between 7 AM and 9 PM.",
          "ru": "У обеих тротуаров в рабочие дни с 7 до 21 часов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
          "en": "Next to the right sidewalk on working days between 7 AM and 9 PM.",
          "ru": "У правого тротуара в рабочие дни с 7 до 21 часов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
          "en": "Next to the left sidewalk on weekdays between 7 AM and 9 PM.",
          "ru": "У левой обочины в будние дни с 7 до 21 часов."
        },
        "correct": false
      }
    ],
    "image": "/questions/b156.jpg"
  },
  {
    "id": 294,
    "question": {
      "es": "La Ley Nº 2148 establece como norma general que en avenidas de este tipo, está prohibido estacionar vehículos…",
      "en": "Law No. 2148 establishes as a general rule that in avenues of this type, parking vehicles is prohibited...",
      "ru": "Закон № 2148 устанавливает в качестве общего правила, что на таких проспектах запрещено парковать транспортные средства..."
    },
    "answers": [
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles durante las 24 horas.",
          "en": "Next to the left sidewalk on weekdays for 24 hours.",
          "ru": "У левой обочины в будние дни в течение 24 часов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
          "en": "Next to the left sidewalk on weekdays between 7 AM and 9 PM.",
          "ru": "У левой обочины в будние дни с 7 до 21 часов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Junto a la acera derecha los días hábiles entre las 7 y las 21 horas.",
          "en": "Next to the right sidewalk on working days between 7 AM and 9 PM.",
          "ru": "У правого тротуара в рабочие дни с 7 до 21 часов."
        },
        "correct": false
      }
    ],
    "image": "/questions/b157.jpg"
  },
  {
    "id": 295,
    "question": {
      "es": "La Ley Nº 2148 establece como norma general que en este tipo de calles está prohibido estacionar vehículos...",
      "en": "Law No. 2148 establishes as a general rule that in this type of street, parking vehicles is prohibited...",
      "ru": "Закон № 2148 устанавливает в качестве общего правила, что на таких улицах запрещено парковать транспортные средства..."
    },
    "answers": [
      {
        "text": {
          "es": "Junto a la acera derecha los días hábiles durante las 24 horas.",
          "en": "Next to the right sidewalk on weekdays for 24 hours.",
          "ru": "У правой обочины в будние дни в течение 24 часов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda los días hábiles entre las 7 y las 21 horas.",
          "en": "Next to the left sidewalk on weekdays between 7 AM and 9 PM.",
          "ru": "У левой обочины в будние дни с 7 до 21 часов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Junto a la acera izquierda todos los días durante las 24 horas.",
          "en": "Next to the left sidewalk every day for 24 hours.",
          "ru": "У левой обочины каждый день в течение 24 часов."
        },
        "correct": true
      }
    ],
    "image": "/questions/b158.jpg"
  },
  {
    "id": 296,
    "question": {
      "es": "En el siguiente espacio, se encuentra permitido detenerse pero no estacionar.",
      "en": "In the following space, stopping is allowed but parking is not.",
      "ru": "В следующем месте разрешено остановиться, но не парковаться."
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
    "image": "/questions/b159.jpg"
  },
  {
    "id": 297,
    "question": {
      "es": "Si va a detenerse o estacionar en las cercanías de esta esquina, ¿dónde sería correcto hacerlo?",
      "en": "If you are going to stop or park near this corner, where would it be correct to do so?",
      "ru": "Если вы собираетесь остановиться или припарковаться вблизи этого угла, где будет правильно это с��елать?"
    },
    "answers": [
      {
        "text": {
          "es": "Detrás de la prolongación de la línea imaginaria de la ochava, de modo que la esquina quede libre, sin obstaculizar la visibilidad de los conductores.",
          "en": "Behind the extension of the imaginary line of the corner, so that the corner remains clear, without obstructing the visibility of drivers.",
          "ru": "Позади продолжения воображаемой линии угла, чтобы угол оставался свободным, не препятствуя видимости водителей."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Es indistinto siempre que quede la senda peatonal libre, para no obstaculizar el cruce del peatón.",
          "en": "It is indifferent as long as the pedestrian path remains clear, to not obstruct the pedestrian crossing.",
          "ru": "Не имеет значения, если пешеходная дорожка остается свободной, чтобы не препятствовать переходу пешехода."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dentro de la intersección.",
          "en": "Within the intersection.",
          "ru": "Внутри перекрестка."
        },
        "correct": false
      }
    ],
    "image": "/questions/b163.jpg"
  },
  {
    "id": 298,
    "question": {
      "es": "Según la Ley Nº 24.449, en el caso de detener un vehículo en esta zona, ¿cuál es la distancia mínima que se debe mantener?",
      "en": "According to Law No. 24.449, in the case of stopping a vehicle in this area, what is the minimum distance that must be maintained?",
      "ru": "Согласно Закону № 24.449, в случае остановки транспортного средства в этой зоне, какое минимальное расстояние должно быть соблюдено?"
    },
    "answers": [
      {
        "text": {
          "es": "5 metros respecto de los rieles.",
          "en": "5 meters from the rails.",
          "ru": "5 метров от рельсов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "2 metros respecto de los rieles.",
          "en": "2 meters from the rails.",
          "ru": "2 метра от рельсов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No existe una distancia mínima.",
          "en": "There is no minimum distance.",
          "ru": "Минимального расстояния не существует."
        },
        "correct": false
      }
    ],
    "image": "/questions/b164.jpg"
  },
  {
    "id": 299,
    "question": {
      "es": "¿Se está habilitado a detener un vehículo en este lugar?",
      "en": "Are you allowed to stop a vehicle in this place?",
      "ru": "Разрешено ли останавливать транспортное средство в этом месте?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, siempre y cuando no entorpezca la circulación.",
          "en": "Yes, as long as it does not hinder traffic.",
          "ru": "Да, при условии, что это не мешает движению."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido estacionar y detenerse por normativa.",
          "en": "No, it is prohibited to park and stop by regulation.",
          "ru": "Нет, парковка и остановка запрещены по правилам."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Si, a menos que haya una señal que lo prohíba expresamente.",
          "en": "Yes, unless there is a sign that expressly prohibits it.",
          "ru": "Да, если только нет знака, который это прямо запрещает."
        },
        "correct": false
      }
    ],
    "image": "/questions/b168.jpg"
  },
  {
    "id": 300,
    "question": {
      "es": "Si el vehículo que lo precede, circula con estas luces intermitentes encendidas, ¿qué podría estar indicando el conductor?",
      "en": "If the vehicle in front of you is driving with these flashing lights on, what could the driver be indicating?",
      "ru": "Если транспортное средство, которое вас предшествует, движется с включенными мигающими огнями, что может указывать водитель?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo circula lentamente.",
          "en": "That the vehicle is moving slowly.",
          "ru": "Что транспортное средство движется медленно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que el vehículo próximamente ingresará a un garage o se detendrá.",
          "en": "That the vehicle will soon enter a garage or will stop.",
          "ru": "Что транспортное средство вскоре заедет в гараж или остановится."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que el vehículo realizará un giro en la próxima intersección.",
          "en": "That the vehicle will make a turn at the next intersection.",
          "ru": "Что транспортное средство выполнит поворот на следующем перекрестке."
        },
        "correct": false
      }
    ],
    "image": "/questions/b169.jpg"
  },
  {
    "id": 301,
    "question": {
      "es": "¿Qué indica el uso de este tipo de luces?",
      "en": "What does the use of this type of lights indicate?",
      "ru": "Что указывает использование этого типа огней?"
    },
    "answers": [
      {
        "text": {
          "es": "Cuando se utilizan por separado sirven para preanunciar maniobras.",
          "en": "When used separately, they serve to announce maneuvers.",
          "ru": "Когда они используются по отдельности, они служат для предварительного объявления маневров."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cuando se utilizan a la vez sirven para anunciar situaciones de emergencias o que se está por detener.",
          "en": "When used together, they serve to announce emergency situations or that the vehicle is about to stop.",
          "ru": "Когда они используются одновременно, они служат для объявления экстренных ситуаций или того, что собираются остановиться."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ],
    "image": "/questions/b170.jpg"
  },
  {
    "id": 302,
    "question": {
      "es": "Si el vehículo de la imagen se dispone a ingresar a un garaje, está anticipando su maniobra, utilizando las luces correctas.",
      "en": "If the vehicle in the image is about to enter a garage, it is anticipating its maneuver, using the correct lights.",
      "ru": "Если транспортное средство на изображении собирается заехать в гараж, оно предвосхищает свой маневр, используя правильные огни."
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
    "image": "/questions/b171.jpg"
  },
  {
    "id": 303,
    "question": {
      "es": "Si el vehículo de la imagen se dispone a ingresar a un garaje ubicado a su derecha, está anticipando su maniobra utilizando las luces correctas.",
      "en": "If the vehicle in the image is about to enter a garage located to its right, it is anticipating its maneuver using the correct lights.",
      "ru": "Если транспортное средство на изображении собирается заехать в гараж, расположенный справа, оно предвосхищает свой маневр, используя правильные огни."
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
    "image": "/questions/b172.jpg"
  },
  {
    "id": 304,
    "question": {
      "es": "El ingreso hacia un garaje o estacionamiento, ¿cómo debe ser indicado por el conductor?",
      "en": "How should the entrance to a garage or parking lot be indicated by the driver?",
      "ru": "Как водитель должен указывать вход в гараж или парковку?"
    },
    "answers": [
      {
        "text": {
          "es": "Con la luz de giro hacia el lado donde se irá a ingresar.",
          "en": "With the turn signal towards the side where it will enter.",
          "ru": "С помощью поворотника в сторону, в которую будет производиться заезд."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Con la luz de giro hacia el lado opuesto donde se irá a ingresar.",
          "en": "With the turn signal towards the opposite side where it will enter.",
          "ru": "С помощью поворотника в противоположную сторону, в которую будет производиться заезд."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Con las luces intermitentes (balizas).",
          "en": "With the flashing lights (hazards).",
          "ru": "С помощью мигающих огней (аварийных сигналов)."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 305,
    "question": {
      "es": "Si usted está conduciendo y va a girar al llegar a una intersección, debe anticipar su maniobra utilizando la luz de giro correspondiente por lo menos...",
      "en": "If you are driving and are going to turn when you reach an intersection, you must anticipate your maneuver using the appropriate turn signal at least...",
      "ru": "Если вы управляете автомобилем и собираетесь повернуть, когда достигнете перекрестка, вы должны заранее указать свой маневр, используя соответствующий поворотник как минимум..."
    },
    "answers": [
      {
        "text": {
          "es": "20 metros antes de realizar la maniobra.",
          "en": "20 meters before making the maneuver.",
          "ru": "20 метров до выполнения маневра."
        },
        "correct": false
      },
      {
        "text": {
          "es": "10 metros antes de realizar la maniobra.",
          "en": "10 meters before making the maneuver.",
          "ru": "10 метров до выполнения маневра."
        },
        "correct": false
      },
      {
        "text": {
          "es": "30 metros antes de realizar la maniobra.",
          "en": "30 meters before making the maneuver.",
          "ru": "30 метров до выполнения маневра."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 306,
    "question": {
      "es": "Para realizar correctamente un giro en una intersección se debe indicar...",
      "en": "To correctly make a turn at an intersection, you must indicate...",
      "ru": "Чтобы правильно выполнить поворот на перекрестке, необходимо указать..."
    },
    "answers": [
      {
        "text": {
          "es": "Tocando bocina.",
          "en": "Honk the horn.",
          "ru": "Сигналя гудком."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Utilizando la luz de giro del lado correspondiente, al menos 30 metros antes.",
          "en": "Using the turn signal on the corresponding side, at least 30 meters before.",
          "ru": "Используя поворотник с соответствующей стороны, как минимум за 30 метров до."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Utilizando ambos giros, metros antes de llegar a la intersección.",
          "en": "Using both turn signals, meters before reaching the intersection.",
          "ru": "Используя оба поворотника, метров до достижения перекрестка."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 307,
    "question": {
      "es": "¿Son válidas este tipo de señas?",
      "en": "Are these types of signals valid?",
      "ru": "Являются ли эти знаки действительными?"
    },
    "answers": [
      {
        "text": {
          "es": "Como acompañamiento al uso de balizas y/o en caso de emergencia.",
          "en": "As a complement to the use of hazard lights and/or in case of emergency.",
          "ru": "В качестве дополнения к использованию маячков и/или в случае чрезвычайной ситуации."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Nunca.",
          "en": "Never.",
          "ru": "Никогда."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo cuando se utilicen en calles.",
          "en": "Only when used on streets.",
          "ru": "Только когда они используются на улицах."
        },
        "correct": false
      }
    ],
    "image": "/questions/b173.jpg"
  },
  {
    "id": 308,
    "question": {
      "es": "Los motovehículos, ¿cuándo están obligados a circular con la luz baja encendida?",
      "en": "When are motorcycles required to ride with their low beam lights on?",
      "ru": "Когда мотоциклы обязаны двигаться с включенным ближним светом?"
    },
    "answers": [
      {
        "text": {
          "es": "Durante las 24 hs y en todo tipo de vía.",
          "en": "During 24 hours and on all types of roads.",
          "ru": "В течение 24 часов и на всех типах дорог."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al circular por autopistas, semiautopistas o rutas, aunque sea de día.",
          "en": "When driving on highways, semi-highways, or routes, even during the day.",
          "ru": "При движении по автомагистралям, полумагистралям или маршрутам, даже днем."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo durante la noche o con días de poca visibilidad, por cualquier vía.",
          "en": "Only at night or on days with low visibility, on any road.",
          "ru": "Только ночью или в дни с плохой видимостью, на любых дорогах."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 309,
    "question": {
      "es": "Circular con la luz alta encendida está prohibido en zonas urbanas.",
      "en": "Driving with high beam lights on is prohibited in urban areas.",
      "ru": "Двигаться с включенным дальним светом запрещено в городских зонах."
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
      "en": "Regarding the regulatory use of lights, does this motorcycle operate correctly?",
      "ru": "Что касается регламентированного использования света, правильно ли движется этот мотоцикл?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que las luces sólo deben utilizarse en condiciones meteorológicas adversas.",
          "en": "Yes, as lights should only be used in adverse weather conditions.",
          "ru": "Да, так как свет должен использоваться только в неблагоприятных метеорологических условиях."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que las luces sólo deben utilizarse por autopistas, semiautopistas y rutas.",
          "en": "Yes, as lights should only be used on highways, semi-highways, and routes.",
          "ru": "Да, так как свет должен использоваться только на автомагистралях, полумагистралях и маршрутах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Es obligatorio el uso de la luz baja las 24 horas del día y en todo tipo de vía.",
          "en": "No. The use of low beam lights is mandatory 24 hours a day on all types of roads.",
          "ru": "Нет. Использование ближнего света обязательно 24 часа в сутки и на всех типах дорог."
        },
        "correct": true
      }
    ],
    "image": "/questions/a21.jpg"
  },
  {
    "id": 311,
    "question": {
      "es": "Al observar las luces de este vehículo, ¿qué significado tienen en cuanto al sentido de circulación?",
      "en": "When observing the lights of this vehicle, what do they indicate regarding the direction of travel?",
      "ru": "При наблюдении за огнями этого транспортного средства, какое значение они имеют в отношении направления движения?"
    },
    "answers": [
      {
        "text": {
          "es": "Que está circulando en mí mismo sentido.",
          "en": "That it is traveling in the same direction as me.",
          "ru": "Что он движется в том же направлении, что и я."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que está circulando en el sentido contrario al mío.",
          "en": "That it is traveling in the opposite direction to mine.",
          "ru": "Что он движется в противоположном направлении от моего."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No indican sentido de circulación sino que está descompuesto.",
          "en": "They do not indicate direction of travel but that it is broken down.",
          "ru": "Не указывает направление движения, а означает, что он неисправен."
        },
        "correct": false
      }
    ],
    "image": "/questions/b175.jpg"
  },
  {
    "id": 312,
    "question": {
      "es": "¿Para qué sirven estas luces intermitentes?",
      "en": "What are these flashing lights for?",
      "ru": "Для чего нужны эти мигающие огни?"
    },
    "answers": [
      {
        "text": {
          "es": "Para advertir a los demás conductores, frente a malas condiciones climáticas, que el vehículo circula a baja velocidad.",
          "en": "To warn other drivers, in bad weather conditions, that the vehicle is moving at low speed.",
          "ru": "Чтобы предупредить других ��одителей о плохих погодных условиях, что транспортное средство движется с низкой скоростью."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Para señalizar y advertir a los demás conductores que el vehículo se encuentra detenido o próximo a una maniobra de detención, estacionamiento o emergencia.",
          "en": "To signal and warn other drivers that the vehicle is stopped or about to perform a stopping, parking, or emergency maneuver.",
          "ru": "Чтобы сигнализировать и предупреждать других водителей, что транспортное средство остановлено или готовится к маневру остановки, парковки или экстренной ситуации."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/b176.jpg"
  },
  {
    "id": 313,
    "question": {
      "es": "Cuando se circula de día y con suficiente luz natural por la Av. Cantilo, ¿qué luces debe llevar encendidas en su motovehículo?",
      "en": "When driving during the day with sufficient natural light on Av. Cantilo, what lights should your motorcycle have on?",
      "ru": "Когда вы движетесь днем и при достаточном естественном освещении по авеню Кантило, какие огни должен включить ваш мотоцикл?"
    },
    "answers": [
      {
        "text": {
          "es": "Solamente la luz de posición.",
          "en": "Only the position light.",
          "ru": "Только габаритные огни."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La luz baja.",
          "en": "The low beam light.",
          "ru": "Ближний свет."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ninguna, dado que las condiciones de visibilidad son suficientes.",
          "en": "None, as visibility conditions are sufficient.",
          "ru": "Никакие, так как условия видимости достаточны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 314,
    "question": {
      "es": "Un motovehículo, ¿puede estar provisto de luz rompeniebla delantero?",
      "en": "Can a motorcycle be equipped with front fog lights?",
      "ru": "Может ли мотоцикл быть оснащен передним противотуманным светом?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, aunque no es obligatorio.",
          "en": "Yes, although it is not mandatory.",
          "ru": "Да, хотя это и не обязательно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, en ningún caso.",
          "en": "No, in no case.",
          "ru": "Нет, ни в коем случае."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, sólo puede disponer de la luz antiniebla trasera.",
          "en": "No, it can only have rear fog lights.",
          "ru": "Нет, он может иметь только задний противотуманный свет."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 315,
    "question": {
      "es": "El sistema de luces que posee un vehículo, además de iluminar, brinda información que permite la comunicación entre vehículos y también peatones.",
      "en": "The lighting system of a vehicle, in addition to illuminating, provides information that allows communication between vehicles and also pedestrians.",
      "ru": "Си��тема огней, установленная на транспортном средстве, помимо освещения, предоставляет информацию, позволяющую общение между транспортными средствами и пешеходами."
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
      "en": "What is referred to as 'aquaplaning'?",
      "ru": "Что такое «аквапланирование»?"
    },
    "answers": [
      {
        "text": {
          "es": "Cuando la cantidad de agua caída en una lluvia es abundante.",
          "en": "When the amount of water fallen in a rain is abundant.",
          "ru": "Когда количество выпавшей воды во время дождя велико."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A la pérdida de adherencia del neumático al piso a causa de la capa de agua acumulada en el pavimento, que es mayor a la cantidad que se puede expulsar a través de los dibujos de los neumáticos.",
          "en": "The loss of tire grip on the road due to the layer of water accumulated on the pavement, which is greater than the amount that can be expelled through the tire treads.",
          "ru": "Потеря сцепления шины с дорогой из-за слоя воды, накопившегося на асфальте, который превышает количество, которое можно удалить через протекторы шин."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Al estado resbaladizo en el que se encuentra la calzada luego de una llovizna.",
          "en": "The slippery state of the road after a drizzle.",
          "ru": "Состояние скользкой дороги после моросящего дождя."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 317,
    "question": {
      "es": "En cuanto a la velocidad frente a esta situación, ¿qué debería considerar un conductor?",
      "en": "Regarding speed in this situation, what should a driver consider?",
      "ru": "Что должен учитывать водитель в отношении скорости в данной ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Debería circular a la mitad de la velocidad máxima establecida por Ley.",
          "en": "They should drive at half the maximum speed established by law.",
          "ru": "Он должен двигаться на половину максимальной скорости, установленной законом."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debería adecuar la velocidad de acuerdo a las condiciones climáticas y de dicha vía de circulación.",
          "en": "They should adjust their speed according to the weather conditions and the type of road.",
          "ru": "Он должен адаптировать скорость в соответствии с погодными условиями и состоянием дороги."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo único que debería hacer es respetar es la velocidad máxima de la arteria por la que circula.",
          "en": "The only thing they should do is respect the maximum speed of the road they are on.",
          "ru": "Единственное, что он должен делать, это соблюдать максимальную скорость на артерии, по которой он движется."
        },
        "correct": false
      }
    ],
    "image": "/questions/b179.jpg"
  },
  {
    "id": 318,
    "question": {
      "es": "¿Cómo se define el efecto que ocurre en la siguiente imagen?",
      "en": "How is the effect that occurs in the following image defined?",
      "ru": "Как определяется эффект, происходящий на следующем изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Aquaplaning.",
          "en": "Aquaplaning.",
          "ru": "Аквапланирование."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Off tracking.",
          "en": "Off tracking.",
          "ru": "Скользящий след."
        },
        "correct": false
      }
    ],
    "image": "/questions/b180.jpg"
  },
  {
    "id": 319,
    "question": {
      "es": "Cuando hay agua en el camino, debe reducir su velocidad para evitar…",
      "en": "When there is water on the road, you must reduce your speed to avoid...",
      "ru": "Когда на дороге есть вода, необходимо снизить скорость, чтобы избежать..."
    },
    "answers": [
      {
        "text": {
          "es": "Desgastar las llantas.",
          "en": "Wearing out the tires.",
          "ru": "Изнашивать шины."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sobrecalentar las llantas.",
          "en": "Overheating the tires.",
          "ru": "Перегревать шины."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El aquaplaning.",
          "en": "Aquaplaning.",
          "ru": "Аквапланирование."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 320,
    "question": {
      "es": "Si la calzada está mojada y hay charcos, ¿pueden perder eficacia los frenos?",
      "en": "If the roadway is wet and there are puddles, can the brakes lose effectiveness?",
      "ru": "Если дорожное покрытие мокрое и есть лужи, могут ли тормоза потерять эффективность?"
    },
    "answers": [
      {
        "text": {
          "es": "No, al contrario, se mejora la adherencia porque los neumáticos se limpian.",
          "en": "No, on the contrary, grip improves because the tires are cleaned.",
          "ru": "Нет, наоборот, сцепление улучшается, потому что шины очищаются."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque al mojarse pueden no funcionar eficazmente.",
          "en": "Yes, because when wet, they may not work effectively.",
          "ru": "Да, потому что при намокании они могут не работать эффективно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque justamente los frenos sirven para contrarrestar los efectos de la calzada resbaladiza.",
          "en": "No, because brakes are meant to counteract the effects of a slippery roadway.",
          "ru": "Нет, потому что тормоза как раз предназначены для противодействия эффектам скользкой дороги."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 321,
    "question": {
      "es": "Con esta condición climática, el motovehículo se adhiere mejor a la calzada si...",
      "en": "In this weather condition, the motorcycle adheres better to the roadway if...",
      "ru": "При таких климатических условиях мотоцикл лучше сцепляется с дорогой, если..."
    },
    "answers": [
      {
        "text": {
          "es": "Se aumenta la presión de aire del neumático..",
          "en": "The air pressure of the tire is increased.",
          "ru": "Увеличить давление воздуха в шине."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El neumático conserva el dibujo en toda la superficie.",
          "en": "The tire maintains its tread across the entire surface.",
          "ru": "Шина сохраняет рисунок по всей поверхности."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se baja la presión de aire del neumático.",
          "en": "The air pressure of the tire is decreased.",
          "ru": "Снизить давление воздуха в шине."
        },
        "correct": false
      }
    ],
    "image": "/questions/a22.jpg"
  },
  {
    "id": 322,
    "question": {
      "es": "Si se encuentra conduciendo un motovehículo con la calzada mojada porque llovió, en el caso de frenada, esta situación provocará...",
      "en": "If you are riding a motorcycle on a wet roadway because it rained, in the case of braking, this situation will cause...",
      "ru": "Если вы управляете мотоциклом по мокрой дороге из-за дождя, в случае торможения эта ситуация приведет к..."
    },
    "answers": [
      {
        "text": {
          "es": "Una disminución del tiempo de reacción.",
          "en": "A decrease in reaction time.",
          "ru": "Уменьшению времени реакции."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Un aumento de la distancia de reacción.",
          "en": "An increase in reaction distance.",
          "ru": "Увеличению расстояния реакции."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Un aumento de la distancia de frenado.",
          "en": "An increase in braking distance.",
          "ru": "Увеличению тормозного расстояния."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 323,
    "question": {
      "es": "Si al conducir un motovehículo por una calzada mojada con charcos y los frenos se mojan, perdiendo su eficacia. ¿Qué resultaría conveniente hacer para secarlos?",
      "en": "If while riding a motorcycle on a wet roadway with puddles and the brakes get wet, losing their effectiveness. What would be advisable to do to dry them?",
      "ru": "Если при управлении мотоциклом по мокрой дороге с лужами тормоза намокают и теряют свою эффективность. Что было бы целесообразно сделать, чтобы их высушить?"
    },
    "answers": [
      {
        "text": {
          "es": "Acelerar progresivamente.",
          "en": "Accelerate gradually.",
          "ru": "Постепенно ускоряться."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Frenar con fuerza.",
          "en": "Brake hard.",
          "ru": "Тормозить резко."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Frenar suavemente y de forma repetida, mientras se mantiene la aceleración.",
          "en": "Brake gently and repeatedly while maintaining acceleration.",
          "ru": "Тормозить плавно и повторно, сохраняя ускорение."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 324,
    "question": {
      "es": "Al conducir por un largo lapso de tiempo y en esta condición climática…",
      "en": "When driving for a long period of time in this weather condition...",
      "ru": "При длительном вождении в таких климатических условиях..."
    },
    "answers": [
      {
        "text": {
          "es": "Es menos probable que aparezca la fatiga, ya que aumenta la atención.",
          "en": "It is less likely that fatigue will appear, as attention increases.",
          "ru": "Менее вероятно появление усталости, так как внимание увеличивается."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es necesario descansar con más frecuencia, para evitar la fatiga.",
          "en": "It is necessary to rest more frequently to avoid fatigue.",
          "ru": "Необходимо чаще отдыхать, чтобы избежать усталости."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No influye en la aparición de fatiga, siempre y cuando se mantenga una velocidad prudente.",
          "en": "It does not influence the appearance of fatigue, as long as a prudent speed is maintained.",
          "ru": "Не влияет на появление усталости, при условии, что скорость остается разумной."
        },
        "correct": false
      }
    ],
    "image": "/questions/b182.jpg"
  },
  {
    "id": 325,
    "question": {
      "es": "Bajo esta condición climática, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?",
      "en": "Under this weather condition, is it advisable to increase the safety distance and reduce speed?",
      "ru": "При таких климатических условиях рекомендуется увеличить дистанцию безопасности и снизить скорость?"
    },
    "answers": [
      {
        "text": {
          "es": "No, al reducir la velocidad, mayor es la proporción de agua en el asfalto.",
          "en": "No, by reducing speed, the proportion of water on the asphalt increases.",
          "ru": "Нет, при снижении скорости увеличивается доля воды на асфальте."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, con lluvia la adherencia es menor.",
          "en": "Yes, with rain, grip is lower.",
          "ru": "Да, при дожде сцепление меньше."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No. La distancia de seguridad debe ser siempre la misma.",
          "en": "No. The safety distance should always be the same.",
          "ru": "Нет. Дистанция безопасности всегда должна быть одинаковой."
        },
        "correct": false
      }
    ],
    "image": "/questions/b183.jpg"
  },
  {
    "id": 326,
    "question": {
      "es": "Conducir de noche aumenta el riesgo de sufrir un incidente.",
      "en": "Driving at night increases the risk of an incident.",
      "ru": "Вождение ночью увеличивает риск возникновения инцидента."
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
      "en": "When driving under this weather condition, by how much should the 2-second rule for safety distance be increased?",
      "ru": "Когда вы водите в таких климатических условиях, на сколько нужно увеличить правило 2 секунд в дистанции безопасности?"
    },
    "answers": [
      {
        "text": {
          "es": "A 4 segundos.",
          "en": "To 4 seconds.",
          "ru": "До 4 секунд."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A 3 segundos.",
          "en": "To 3 seconds.",
          "ru": "До 3 секунд."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A 5 segundos.",
          "en": "To 5 seconds.",
          "ru": "До 5 секунд."
        },
        "correct": false
      }
    ],
    "image": "/questions/b184.jpg"
  },
  {
    "id": 328,
    "question": {
      "es": "Al conducir sobre una calzada en estas condiciones, la distancia de frenado será...",
      "en": "When driving on a roadway in these conditions, the braking distance will be...",
      "ru": "При вождении по дороге в таких условиях тормозной пу��ь будет..."
    },
    "answers": [
      {
        "text": {
          "es": "Igual que cuando la calzada se encuentra seca.",
          "en": "The same as when the roadway is dry.",
          "ru": "Таким же, как когда дорога сухая."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Menor que cuando la calzada se encuentra seca.",
          "en": "Less than when the roadway is dry.",
          "ru": "Меньше, чем когда дорога сухая."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mayor que cuando la calzada se encuentra seca.",
          "en": "Greater than when the roadway is dry.",
          "ru": "Больше, чем когда дорога сухая."
        },
        "correct": true
      }
    ],
    "image": "/questions/b185.jpg"
  },
  {
    "id": 329,
    "question": {
      "es": "En estas condiciones, ¿una incorrecta regulación de la altura de las luces bajas puede producir encandilamiento?",
      "en": "In these conditions, can incorrect adjustment of the low beam height cause glare?",
      "ru": "В этих условиях неправильная регулировка высоты ближнего света может вызвать ослепление?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque este efecto se produce por cambios bruscos en la intensidad de la luz.",
          "en": "Yes, because this effect is caused by sudden changes in light intensity.",
          "ru": "Да, потому что этот эффект возникает из-за резких изменений в интенсивности света."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque este efecto se produce sólo por el uso de la luz alta.",
          "en": "No, because this effect is caused only by the use of high beams.",
          "ru": "Нет, потому что этот эффект возникает только при использовании дальнего света."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque este efecto se produce en rutas con poca iluminación.",
          "en": "No, because this effect occurs on poorly lit roads.",
          "ru": "Нет, потому что этот эффект возникает на плохо освещенных дорогах."
        },
        "correct": false
      }
    ],
    "image": "/questions/b186.jpg"
  },
  {
    "id": 330,
    "question": {
      "es": "¿Cuál es el límite de velocidad máxima en esta situación?",
      "en": "What is the maximum speed limit in this situation?",
      "ru": "Каков максимальный лимит скорости в данной ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "60 km/h.",
          "en": "60 km/h.",
          "ru": "60 км/ч."
        },
        "correct": true
      },
      {
        "text": {
          "es": "80 km/h.",
          "en": "80 km/h.",
          "ru": "80 км/ч."
        },
        "correct": false
      },
      {
        "text": {
          "es": "40 km/h.",
          "en": "40 km/h.",
          "ru": "40 км/ч."
        },
        "correct": false
      }
    ],
    "image": "/questions/b187.jpg"
  },
  {
    "id": 331,
    "question": {
      "es": "Frente a estas condiciones climáticas si el conductor reduce la velocidad de circulación de su motovehículo, ¿disminuiría la posibilidad de participar de un siniestro?",
      "en": "In these weather conditions, if the driver reduces the speed of their motorcycle, would it decrease the likelihood of being involved in an accident?",
      "ru": "В этих климатических условиях, если водитель снижает скорость своего мотоцикла, уменьшит ли это вероятность участия в аварии?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo en la medida en que el conductor circule con las balizas encendidas.",
          "en": "Only to the extent that the driver travels with the hazard lights on.",
          "ru": "Только в том случае, если водитель движется с включенными аварийными огнями."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Siempre, ya que el exceso de velocidad es en sí mismo un factor esencial en la producción de incidentes de tránsito.",
          "en": "Always, since speeding is in itself an essential factor in the occurrence of traffic incidents.",
          "ru": "Всегда, так как превышение скорости само по себе является основным фактором, способствующим возникновению дорожно-транспортных происшествий."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo más recomendable es detenerse sobre el margen derecho de la calzada y esperar que pase el banco de niebla.",
          "en": "The most advisable thing is to stop on the right shoulder of the road and wait for the fog bank to pass.",
          "ru": "Наиболее рекомендуется остановиться на правом краю дороги и ждать, пока пройдет туман."
        },
        "correct": false
      }
    ],
    "image": "/questions/a23.jpg"
  },
  {
    "id": 332,
    "question": {
      "es": "Con estas condiciones climáticas, ¿qué luces debe utilizar para poder circular en esta ruta?",
      "en": "In these weather conditions, what lights should you use to drive on this road?",
      "ru": "В этих климатических условиях, какие огни следует использовать для безопасного движения по этому маршруту?"
    },
    "answers": [
      {
        "text": {
          "es": "Las luces altas, durante todo el recorrido mientras continúe la niebla.",
          "en": "High beams, throughout the journey while the fog continues.",
          "ru": "Дальний свет на протяжении всего пути, пока продолжается туман."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Las luces bajas y las rompeniebla (en el caso de tenerlas).",
          "en": "Low beams and fog lights (if available).",
          "ru": "Ближний свет и противотуманные фары (если они есть)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Las luces bajas, las rompenieblas (en caso de tenerlas) y las balizas.",
          "en": "Low beams, fog lights (if available), and hazard lights.",
          "ru": "Ближний свет, противотуманные фары (в случае их наличия) и аварийные огни."
        },
        "correct": false
      }
    ],
    "image": "/questions/a24.jpg"
  },
  {
    "id": 333,
    "question": {
      "es": "Si se encuentra en esta vía bajo estas condiciones climáticas, ¿lo más conveniente es detenerse en la banquina?",
      "en": "If you are on this road under these weather conditions, is it most convenient to stop on the shoulder?",
      "ru": "Если вы находитесь на этом участке дороги в этих климатических условиях, наиболее целесообразно остановиться на обочине?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, cuando el banco de niebla es muy denso.",
          "en": "Yes, when the fog bank is very dense.",
          "ru": "Да, когда туман очень густой."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre y cuando se coloquen las luces altas para ser más visibles.",
          "en": "Yes, as long as high beams are used to be more visible.",
          "ru": "Да, при условии, что включены дальние огни для большей видимости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Si no hay posibilidad de circular, debe alejarse lo más posible de la calzada y de la banquina.",
          "en": "No. If there is no possibility of driving, you should move as far away from the road and the shoulder as possible.",
          "ru": "Нет. Если нет возможности двигаться, нужно отдалиться как можно дальше от дороги и обочины."
        },
        "correct": true
      }
    ],
    "image": "/questions/a25.jpg"
  },
  {
    "id": 334,
    "question": {
      "es": "La niebla, como factor de riesgo, produce modificaciones en…",
      "en": "Fog, as a risk factor, produces changes in...",
      "ru": "Туман, как фактор риска, вызывает изменения в…"
    },
    "answers": [
      {
        "text": {
          "es": "El campo visual del conductor, su percepción del entorno, la capacidad lumínica del vehículo y la adherencia de las cubiertas.",
          "en": "The driver's field of vision, their perception of the environment, the vehicle's lighting capacity, and the tire grip.",
          "ru": "Поле зрения водителя, его восприятие окружающей среды, световая мощ��ость автомобиля и сцепление шин."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El campo visual del conductor y la capacidad lumínica del vehículo.",
          "en": "The driver's field of vision and the vehicle's lighting capacity.",
          "ru": "Поле зрения водителя и световая мощность автомобиля."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo afecta la capacidad lumínica del vehículo.",
          "en": "It only affects the vehicle's lighting capacity.",
          "ru": "Только влияет на световую мощность автомобиля."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 335,
    "question": {
      "es": "Si circula con un motovehículo en una calzada en estas condiciones, ¿qué técnica de conducción debe emplear?",
      "en": "If you are riding a motorcycle on a road in these conditions, what driving technique should you employ?",
      "ru": "Если вы движетесь на мотоцикле по дороге в этих условиях, какую технику вождения следует применять?"
    },
    "answers": [
      {
        "text": {
          "es": "Utilizar una velocidad reducida, evitando aceleraciones y frenadas bruscas.",
          "en": "Use a reduced speed, avoiding sudden accelerations and braking.",
          "ru": "Использовать сниженные скорости, избегая резких ускорений и торможений."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Dar aceleraciones y frenadas frecuentes para evitar quedar atascado.",
          "en": "Make frequent accelerations and braking to avoid getting stuck.",
          "ru": "Давать частые ускорения и торможения, чтобы не застрять."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular a medio embrague, manteniendo permanentemente frenada la rueda delantera.",
          "en": "Ride with the clutch partially engaged, keeping the front wheel constantly braked.",
          "ru": "Двигаться на полусцеплении, постоянно удерживая переднее колесо в торможении."
        },
        "correct": false
      }
    ],
    "image": "/questions/a26.jpg"
  },
  {
    "id": 336,
    "question": {
      "es": "En condiciones de viento fuerte, es recomendable realizar los sobrepasos de un camión con una diferencia de velocidad no demasiado elevada.",
      "en": "In strong wind conditions, it is advisable to overtake a truck with a speed difference that is not too high.",
      "ru": "В условиях сильного ветра рекомендуется обгонять грузовик с не слишком высокой разницей в скорости."
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
      "en": "Under these weather conditions, what should you do to ride a moped safely?",
      "ru": "В этих климатических условиях что следует делать для безопасного движения на скутере?"
    },
    "answers": [
      {
        "text": {
          "es": "Circular más cerca de los vehículos que van delante, para reducir la resistencia del viento.",
          "en": "Ride closer to the vehicles in front to reduce wind resistance.",
          "ru": "Двигаться ближе к впереди идущим транспортным средствам, чтобы уменьшить сопротивление ветра."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zigzaguear con el ciclomotor para corregir las desviaciones.",
          "en": "Zigzag with the moped to correct deviations.",
          "ru": "Зигзагом двигаться на скутере, чтобы исправить отклонения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sujetar firmemente el manubrio del ciclomotor y reducir la velocidad.",
          "en": "Hold the moped's handlebars firmly and reduce speed.",
          "ru": "Крепко держать руль скутера и снижать скорость."
        },
        "correct": true
      }
    ],
    "image": "/questions/a27.jpg"
  },
  {
    "id": 338,
    "question": {
      "es": "Frente a esta situación, ¿qué precaución especial se debería adoptar al conducir un motovehículo?",
      "en": "In this situation, what special precaution should be taken when riding a motorcycle?",
      "ru": "В этой ситуации какую особую осторожность следует проявлять при управлении мотоциклом?"
    },
    "answers": [
      {
        "text": {
          "es": "Utilizar el alumbrado delantero de niebla.",
          "en": "Use the front fog lights.",
          "ru": "Использовать передние противотуманные фары."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Disminuir la velocidad y aumentar la distancia de seguridad cuando circule detrás de un vehículo.",
          "en": "Reduce speed and increase the safety distance when traveling behind a vehicle.",
          "ru": "Снижать скорость и увеличивать дистанцию безопасности, когда движетесь за автомобилем."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Disminuir la distancia de seguridad cuando circule detrás de un vehículo.",
          "en": "Reduce the safety distance when traveling behind a vehicle.",
          "ru": "Снижать дистанцию безопасности, когда движетесь за автомобилем."
        },
        "correct": false
      }
    ],
    "image": "/questions/a28.jpg"
  },
  {
    "id": 339,
    "question": {
      "es": "Si ud. circula por la ruta y observa esta situación, debe…",
      "en": "If you are traveling on the road and observe this situation, you should...",
      "ru": "Если вы движетесь по дороге и наблюдаете эту ситуацию, вы должны…"
    },
    "answers": [
      {
        "text": {
          "es": "Aumentar la velocidad para sobrepasar al animal rápidamente.",
          "en": "Increase speed to quickly overtake the animal.",
          "ru": "Увеличить скорость, чтобы быстро обогнать животное."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Usar la bocina para ahuyentar al animal y mantener su velocidad.",
          "en": "Use the horn to scare the animal away and maintain your speed.",
          "ru": "Использовать сигнал, чтобы прогнать животное и поддерживать свою ск��рость."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la velocidad y si es necesario detenerse.",
          "en": "Reduce speed and if necessary, stop.",
          "ru": "Снизить скорость и, если необходимо, остановиться."
        },
        "correct": true
      }
    ],
    "image": "/questions/b193.jpg"
  },
  {
    "id": 340,
    "question": {
      "es": "Si el conductor de un vehículo circula con las balizas encendidas, toca repetidamente la bocina y el acompañante saca el brazo agitando un pañuelo. ¿Qué está indicando?",
      "en": "If the driver of a vehicle is traveling with the hazard lights on, repeatedly honks the horn, and the passenger waves a handkerchief out the window. What is being indicated?",
      "ru": "Если водитель автомобиля движется с включенными аварийными огнями, многократно сигналит и пассажир высовывает руку, размахивая платком. Что это означает?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo tiene un desperfecto.",
          "en": "That the vehicle has a malfunction.",
          "ru": "Что у автомобиля есть неисправность."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que se encuentra en emergencia, transportando a una persona en grave estado de salud.",
          "en": "That they are in an emergency, transporting a person in serious health condition.",
          "ru": "Что он находится в экстренной ситуации, перевозя человека в тяжелом состоянии."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 341,
    "question": {
      "es": "Si al conducir por una autopista advierte que el vehículo presenta una falla grave, pero a pesar de ella puede seguir circulando; ¿qué se recomienda hacer en estos casos?",
      "en": "If while driving on a highway you notice that the vehicle has a serious malfunction, but despite it, you can continue driving; what is recommended to do in these cases?",
      "ru": "Если при движении по автомагистрали вы замечаете, что у автомобиля серьезная неисправность, но, несмотря на это, можете продолжать движение; что рекомендуется делать в таких случаях?"
    },
    "answers": [
      {
        "text": {
          "es": "Seguir circulando por la autopista pero por el carril de desaceleración, destinado a los vehículos lentos.",
          "en": "Continue driving on the highway but in the deceleration lane, designated for slow vehicles.",
          "ru": "Продолжать движение по автомагистрали, но по полосе замедления, предназначенной для медленных автомобилей."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circular por el carril derecho y en la próxima salida abandonar la autopista para llamar al auxilio del vehículo.",
          "en": "Drive in the right lane and at the next exit leave the highway to call for vehicle assistance.",
          "ru": "Двигаться по правой полосе и на следующем съезде покинут�� автомагистраль, чтобы вызвать помощь для автомобиля."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Continuar a baja velocidad, manteniéndose en el carril, independientemente de cuál fuera.",
          "en": "Continue at low speed, staying in the lane, regardless of which it was.",
          "ru": "Продолжать движение на низкой скорости, оставаясь в полосе, независимо от того, какая она была."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 342,
    "question": {
      "es": "¿Qué vehículo puede realizar el acarreo de otro en esta vía?",
      "en": "Which vehicle can tow another on this road?",
      "ru": "Какое транспортное средство может буксировать другое на этой дороге?"
    },
    "answers": [
      {
        "text": {
          "es": "Cualquier vehículo que posea potencia suficiente para remolcar a otro vehículo y un elemento para sujetarlo firmemente.",
          "en": "Any vehicle that has sufficient power to tow another vehicle and an element to secure it firmly.",
          "ru": "Любое транспортное средство, обладающее достаточной мощностью для буксировки другого транспортного средства и элементом для надежного крепления."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cualquier vehículo utilizando la cuarta de enganche para que quede sujeto firmemente sin riesgo.",
          "en": "Any vehicle using the hitch to ensure it is secured firmly without risk.",
          "ru": "Любое транспортное средство, использующее четвертую точку крепления, чтобы оно было надежно зафиксировано без риска."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo los vehículos destinados a ese fin.",
          "en": "Only vehicles intended for that purpose.",
          "ru": "Только транспортные средства, предназначенные для этой цели."
        },
        "correct": true
      }
    ],
    "image": "/questions/b195.jpg"
  },
  {
    "id": 343,
    "question": {
      "es": "En este tipo de vía, ¿está permitido remolcar con su motovehículo a otro que se encuentra descompuesto?",
      "en": "On this type of road, is it allowed to tow another vehicle that is broken down with your motorcycle?",
      "ru": "На этом типе дороги разрешено ли буксировать с помощью вашего мотоцикла другое, которое находится в неисправном состоянии?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que es riesgoso que quede detenido pero sólo puede hacerse hasta el lugar más próximo donde pueda quedar inmovilizado.",
          "en": "Yes, since it is risky for it to remain stopped, but it can only be done to the nearest place where it can be immobilized.",
          "ru": "Да, так как рискованно, чтобы оно оставалось остановленным, но это можно сделать только до ближайшего места, где оно может быть остановлено."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, pero sólo si soy titular de una licencia que autoriza a conducir vehículos con remolque.",
          "en": "Yes, but only if I hold a license that authorizes me to drive vehicles with a trailer.",
          "ru": "Да, но только если я являюсь владельцем лицензии, разрешающей управлять транспортными средствами с прицепом."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, sólo pueden hacerlo los vehículos autorizados a tal fin.",
          "en": "No, only vehicles authorized for that purpose can do so.",
          "ru": "Нет, это могут делать только транспортные средства, уполномоченные для этой цели."
        },
        "correct": true
      }
    ],
    "image": "/questions/b196.jpg"
  },
  {
    "id": 344,
    "question": {
      "es": "¿Es correcta esta manera de acarrear a un motovehículo?",
      "en": "Is this method of towing a motorcycle correct?",
      "ru": "Правильна ли эта манера буксировки мотоцикла?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero se deberá mantener una distancia de 1,50 metros entre ambos motovehículos.",
          "en": "Yes, but a distance of 1.50 meters must be maintained between both motorcycles.",
          "ru": "Да, но необходимо поддерживать расстояние в 1,50 метра между обоими мотоциклами."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, los motovehículos deben ser acarreados sólo por un vehículo autorizado a tal fin.",
          "en": "No, motorcycles must only be towed by a vehicle authorized for that purpose.",
          "ru": "Нет, мотоциклы должны буксироваться только уполномоченным для этой цели транспортным средством."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo si el motovehículo remolcado es de menor cilindrada.",
          "en": "Only if the towed motorcycle has a smaller engine displacement.",
          "ru": "Только если буксируемый мотоцикл имеет меньший объем двигателя."
        },
        "correct": false
      }
    ],
    "image": "/questions/a29.jpg"
  },
  {
    "id": 345,
    "question": {
      "es": "¿A qué se denomina conducción preventiva?",
      "en": "What is meant by preventive driving?",
      "ru": "Что называется профилактическим вождением?"
    },
    "answers": [
      {
        "text": {
          "es": "A controlar el buen funcionamiento del vehículo, los niveles de combustible, aceite e inflado de neumáticos.",
          "en": "To check the proper functioning of the vehicle, fuel levels, oil, and tire inflation.",
          "ru": "Контролировать правильную работу транспортного средства, уровни топлива, масла и давление в шинах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A adoptar conductas cautelosas al conducir, que consideran la responsabilidad por los actos que se llevan a cabo y a anticipar la conducta de los demás.",
          "en": "To adopt cautious behaviors while driving, considering responsibility for the actions taken and anticipating the behavior of others.",
          "ru": "Принимать осторожные меры при вождении, учитывая ответственность за действия и предвидя поведение других."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A realizar cursos viales cada seis meses.",
          "en": "To take traffic courses every six months.",
          "ru": "Проходить дорожные курсы каждые шесть месяцев."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 346,
    "question": {
      "es": "Una conducción preventiva o anticipada prevé que todos podemos cometer errores, a pesar de conocer la normativa y la concientización gubernamental.",
      "en": "Preventive or anticipatory driving assumes that we can all make mistakes, despite knowing the regulations and government awareness.",
      "ru": "Профилактическое или предвосхищающее вождение предполагает, что все мы можем совершать ошибки, несмотря на знание правил и правительственную осведомленность."
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
      "en": "What is meant by efficient driving?",
      "ru": "Что называется эффективным вождением?"
    },
    "answers": [
      {
        "text": {
          "es": "A una conducción que disminuya los riesgos de seguridad vial y logre un menor consumo de combustible.",
          "en": "Driving that reduces road safety risks and achieves lower fuel consumption.",
          "ru": "Вождением, которое снижает риски дорожной безопасности и достигает меньшего расхода топлива."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A una conducción que logre llegar a destino en el menor tiempo posible.",
          "en": "Driving that reaches the destination in the shortest time possible.",
          "ru": "Вождением, которое достигает места назначения в кратчайшие сроки."
        },
        "correct": false
      },
      {
        "text": {
          "es": "A una conducción que mantenga durante todo el trayecto la misma velocidad.",
          "en": "Driving that maintains the same speed throughout the journey.",
          "ru": "Вождением, которое поддерживает одинаковую скорость на протяжении всего пути."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 348,
    "question": {
      "es": "De los factores citados, ¿cuál interviene en el exceso de consumo de combustible?",
      "en": "Of the factors mentioned, which one contributes to excessive fuel consumption?",
      "ru": "Из перечисленных факторов, какой влияет на избыточный расход топлива?"
    },
    "answers": [
      {
        "text": {
          "es": "La resistencia aerodinámica.",
          "en": "Aerodynamic resistance.",
          "ru": "Аэродинамическое сопротивление."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La velocidad.",
          "en": "Speed.",
          "ru": "Скорость."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 349,
    "question": {
      "es": "De acuerdo a la Ley N°2148 durante la siguiente circunstancia, ¿qué acción está prohibida realizar?",
      "en": "According to Law No. 2148, during the following circumstance, what action is prohibited?",
      "ru": "Согласно Закону № 2148, в следующей ситуации, какое действие запрещено?"
    },
    "answers": [
      {
        "text": {
          "es": "Ubicarse cerca del surtidor.",
          "en": "Positioning oneself near the pump.",
          "ru": "Находиться близко к колонке."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dejar el motor y las luces encendidas.",
          "en": "Leaving the engine and lights on.",
          "ru": "Оставлять двигатель и фары включенными."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo dejar el motor encendido.",
          "en": "Only leaving the engine on.",
          "ru": "Только оставлять двигатель включенным."
        },
        "correct": false
      }
    ],
    "image": "/questions/b197.jpg"
  },
  {
    "id": 350,
    "question": {
      "es": "¿Para qué sirve esta varilla metálica?",
      "en": "What is this metal rod used for?",
      "ru": "Для чего служит эта металлическая палочка?"
    },
    "answers": [
      {
        "text": {
          "es": "Para comprobar la temperatura del aceite.",
          "en": "To check the oil temperature.",
          "ru": "Для проверки температуры масла."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Para comprobar el nivel del aceite.",
          "en": "To check the oil level.",
          "ru": "Для проверки уровня масла."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Para comprobar la presión del aceite y del líquido de frenos.",
          "en": "To check the oil pressure and brake fluid.",
          "ru": "Для проверки давления масла и тормозной жидкости."
        },
        "correct": false
      }
    ],
    "image": "/questions/b199.jpg"
  },
  {
    "id": 351,
    "question": {
      "es": "Es importante realizar un correcto mantenimiento vehicular porque...",
      "en": "It is important to perform proper vehicle maintenance because...",
      "ru": "Важно проводить правильное техническое обслуживание автомобиля, потому что..."
    },
    "answers": [
      {
        "text": {
          "es": "Evita desperfectos del motor y ayuda a reducir el consumo de combustible.",
          "en": "It prevents engine malfunctions and helps reduce fuel consumption.",
          "ru": "Это предотвращает неисправности двигателя и помогает снизить расход топлива."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ayuda a reducir el factor de riesgo vehicular involucrado en los siniestros viales.",
          "en": "It helps reduce the vehicular risk factor involved in traffic accidents.",
          "ru": "Это помогает снизить риск дорожных происшествий."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 352,
    "question": {
      "es": "¿Con qué se lubrica un motor?",
      "en": "What is used to lubricate an engine?",
      "ru": "Чем смазывается двигатель?"
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
    "image": "/questions/b201.jpg"
  },
  {
    "id": 353,
    "question": {
      "es": "¿Cuál de las siguientes imágenes muestra el sector correcto por dónde debe circular un motovehículo?",
      "en": "Which of the following images shows the correct area where a motorcycle should circulate?",
      "ru": "Какое из следующих изображений показывает правильный сектор, по которому должен двигаться мотоцикл?"
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
    "image": "/questions/a30.jpg"
  },
  {
    "id": 354,
    "question": {
      "es": "Para que un motovehículo circule correctamente, ¿qué sector del carril debe utilizar?",
      "en": "For a motorcycle to circulate correctly, which part of the lane should it use?",
      "ru": "Чтобы мотоцикл двигался правильно, какой сектор полосы он должен использовать?"
    },
    "answers": [
      {
        "text": {
          "es": "El más cercano a las líneas horizontales que ordenan la circulación de carriles.",
          "en": "The one closest to the horizontal lines that order the circulation of lanes.",
          "ru": "Ближайший к горизонтальным линиям, которые регулируют движение полос."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Por el centro del carril.",
          "en": "In the center of the lane.",
          "ru": "По центру полосы."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 355,
    "question": {
      "es": "Esta manera de circular se puede realizar sólo si se hace a baja velocidad y se recorren distancias cortas",
      "en": "This way of driving can only be done if it is at low speed and covers short distances.",
      "ru": "Такой способ движения можно осуществлять только на низкой скорости и на короткие расстояния."
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
    "image": "/questions/a31.jpg"
  },
  {
    "id": 356,
    "question": {
      "es": "Si se encuentra conduciendo un motovehículo a excesiva velocidad en este tramo de la ruta, ¿cómo es recomendable que actúe para controlar el mismo?",
      "en": "If you are riding a motorcycle at excessive speed in this section of the road, how is it advisable to act to control it?",
      "ru": "Если вы управляете мотоциклом на слишком высокой скорости в этом участке дороги, как рекомендуется действовать, чтобы контролировать его?"
    },
    "answers": [
      {
        "text": {
          "es": "Frenando bruscamente y, al mismo tiempo, inclinándome lo más posible.",
          "en": "By braking sharply and at the same time leaning as much as possible.",
          "ru": "Резко тормозя и одновременно наклоняясь как можно больше."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Enderezando rápidamente el motovehículo y acelerando.",
          "en": "By quickly straightening the motorcycle and accelerating.",
          "ru": "Быстро выпрямляя мотоцикл и ускоряясь."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Desacelerando e inclinándome lo más posible hacia el interior de la curva.",
          "en": "By decelerating and leaning as much as possible towards the inside of the curve.",
          "ru": "Замедляя скорость и наклоняясь как можно больше внутрь поворота."
        },
        "correct": true
      }
    ],
    "image": "/questions/a32.jpg"
  },
  {
    "id": 357,
    "question": {
      "es": "Conduciendo un motovehículo, ante una frenada de emergencia, nunca se debe frenar única y bruscamente con el freno delantero.",
      "en": "When riding a motorcycle, in the event of an emergency stop, you should never brake only and sharply with the front brake.",
      "ru": "Управляя мотоциклом, при экстренном торможении никогда не следует тормозить только резко передним тормозом."
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
      "en": "In general, for this light to be activated, it will be necessary to…",
      "ru": "В общем, чтобы включить этот свет, необходимо..."
    },
    "answers": [
      {
        "text": {
          "es": "Accionar siempre y al mismo tiempo el freno delantero y el trasero.",
          "en": "Always and simultaneously apply the front and rear brakes.",
          "ru": "Всегда одновременно нажимать на передний и задний тормоза."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Accionar cualquiera de los dos frenos, ya sea de forma simultánea o por separado.",
          "en": "Apply either of the two brakes, whether simultaneously or separately.",
          "ru": "Нажимать на любой из двух тормозов, как одновременно, так и по отдельности."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Únicamente accionar el freno trasero.",
          "en": "Only apply the rear brake.",
          "ru": "Только нажимать на задний тормоз."
        },
        "correct": false
      }
    ],
    "image": "/questions/a33.jpg"
  },
  {
    "id": 359,
    "question": {
      "es": "Si los espejos retrovisores de su vehículo están bien orientados, igualmente es posible que se produzcan puntos ciegos cuando observe por los mismos.",
      "en": "If the rearview mirrors of your vehicle are well adjusted, it is still possible for blind spots to occur when observing them.",
      "ru": "Если зеркала заднего вида вашего автомобиля правильно настроены, все равно могут возникать слепые зоны, когда вы смотрите в них."
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
      "en": "How can blind spots be reduced when driving a vehicle?",
      "ru": "Как можно уменьшить слепые зоны при управлении автомобилем?"
    },
    "answers": [
      {
        "text": {
          "es": "Acomodar correctamente los espejos retrovisores antes de iniciar la marcha. Mientras se circula, además de revisar los espejos retrovisores, utilizar la visión periférica dando vistazos por encima de los hombros cuando sea necesario.",
          "en": "Properly adjust the rearview mirrors before starting to drive. While driving, in addition to checking the rearview mirrors, use peripheral vision by glancing over your shoulders when necessary.",
          "ru": "Правильно настроить зеркала заднего вида перед началом движения. Во время движения, помимо проверки зеркал заднего вида, использовать периферийное зрение, бросая взгляды через плечи, когда это необходимо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Antes de realizar una maniobra se debe disminuir la velocidad de circulación, colocar la luz de giro y mirar por los espejos realizando un pequeño movimiento corporal hacia adelante para ampliar el ángulo de visión.",
          "en": "Before making a maneuver, you should reduce your speed, signal with your turn signal, and look in the mirrors while making a small forward body movement to widen your field of vision.",
          "ru": "Перед выполнением маневра необходимо снизить скорость, включить поворотник и посмотреть в зеркала, сделав неб��льшое движение телом вперед, чтобы увеличить угол обзора."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, A y B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 361,
    "question": {
      "es": "¿A qué se llama “Punto Ciego”?",
      "en": "What is referred to as a 'Blind Spot'?",
      "ru": "Что называется «слепой зоной»?"
    },
    "answers": [
      {
        "text": {
          "es": "Al área de visión del entorno, a la que el conductor no tiene acceso ya sea de manera directa o porque los espejos retrovisores no la reflejan.",
          "en": "The area of the environment that the driver does not have access to either directly or because the rearview mirrors do not reflect it.",
          "ru": "Область видимости окружающей среды, к которой водитель не имеет доступа, либо напрямую, либо потому, что зеркала заднего вида ее не отражают."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo al área de visión que no es cubierta por los espejos retrovisores.",
          "en": "Only the area of vision that is not covered by the rearview mirrors.",
          "ru": "Только область видимости, которая не покрыта зеркалами заднего вида."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Al punto imaginario ubicado en el horizonte de una ruta.",
          "en": "The imaginary point located on the horizon of a road.",
          "ru": "Воображаемая точка, расположенная на горизонте дороги."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 362,
    "question": {
      "es": "Un motovehículo, ¿puede circular sin espejos?",
      "en": "Can a motorcycle operate without mirrors?",
      "ru": "Может ли мотоцикл двигаться без зеркал?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero se debe observar hacia los costados antes de hacer alguna maniobra.",
          "en": "Yes, but you must look to the sides before making any maneuver.",
          "ru": "Да, но необходимо смотреть по сторонам перед выполнением маневра."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si es de una cilindrada inferior a 150 CC.",
          "en": "Only if it has a displacement of less than 150 CC.",
          "ru": "Только если его объем меньше 150 куб. см."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, está prohibido.",
          "en": "No, it is prohibited.",
          "ru": "Нет, это запрещено."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 363,
    "question": {
      "es": "Un ciclomotor, con respecto a los espejos retrovisores…",
      "en": "A moped, regarding rearview mirrors…",
      "ru": "Что касается зеркал заднего вида, мопед..."
    },
    "answers": [
      {
        "text": {
          "es": "No está obligado a llevar ninguno.",
          "en": "Is not required to have any.",
          "ru": "Не обязан иметь ни одного."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo está obligado a llevar el del lado izquierdo.",
          "en": "Is only required to have the left one.",
          "ru": "Обязан иметь только левое зеркало."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe llevar ambos espejos retrovisores.",
          "en": "Must have both rearview mirrors.",
          "ru": "Должен иметь оба зеркала заднего вида."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 364,
    "question": {
      "es": "Para realizar una conducción segura, ¿cuándo es recomendable verificar la orientación de los espejos retrovisores?",
      "en": "To ensure safe driving, when is it advisable to check the orientation of the rearview mirrors?",
      "ru": "Для безопасного вождения, когда рекомендуется проверять ориентацию зеркал заднего вида?"
    },
    "answers": [
      {
        "text": {
          "es": "Antes de iniciar la marcha.",
          "en": "Before starting to drive.",
          "ru": "Перед началом движения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Durante la conducción, para poder hacer una prueba real.",
          "en": "During driving, to be able to do a real test.",
          "ru": "Во время вождения, чтобы провести реальную проверку."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Con el vehículo inmovilizado y el conductor fuera del mismo.",
          "en": "With the vehicle immobilized and the driver outside of it.",
          "ru": "Когда автомобиль остановлен, а водитель вне его."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 365,
    "question": {
      "es": "Al conducir un motovehículo, ¿es obligatorio utilizar un chaleco reflectivo?",
      "en": "When riding a motorcycle, is it mandatory to wear a reflective vest?",
      "ru": "При управлении мотоциклом, обязательно ли использовать светоотражающий жилет?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, es obligatorio el uso del chaleco reflectivo con el número de dominio impreso en la parte delantera y trasera.",
          "en": "Yes, wearing a reflective vest with the license plate number printed on the front and back is mandatory.",
          "ru": "Да, использование светоотражающего жилета с номером регистрации, напечатанным спереди и сзади, обязательно."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, para utilizarlo en caso de lluvia.",
          "en": "Yes, to use it in case of rain.",
          "ru": "Да, чтобы использовать его в случае дождя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No es obligatorio, aunque es recomendable llevar ropa reflectiva para ser vistos por el resto de los conductores.",
          "en": "It is not mandatory, although it is recommended to wear reflective clothing to be seen by other drivers.",
          "ru": "Не обязательно, хотя рекомендуется носить светоотражающую одежду, чтобы быть видимым для других водителей."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 366,
    "question": {
      "es": "¿El conductor de un motovehículo está obligado a utilizar el siguiente elemento de seguridad?",
      "en": "Is the driver of a motorcycle required to use the following safety item?",
      "ru": "Обязан ли водитель мотоцикла использовать следующий элемент безопасности?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, es obligatorio cuando el motovehículo no tiene parabrisas y el casco utilizado no tiene visor.",
          "en": "Yes, it is mandatory when the motorcycle does not have a windshield and the helmet used does not have a visor.",
          "ru": "Да, это обязательно, когда у мотоцикла нет лобового стекла, а шлем не имеет визора."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Su uso no es obligatorio, sólo está recomendado en cualquier circunstancia para proteger los ojos.",
          "en": "Its use is not mandatory, it is only recommended in any circumstance to protect the eyes.",
          "ru": "Его использование не обязательно, только рекомендуется в любых обстоятельствах для защиты глаз."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Su uso es obligatorio siempre, en cualquier circunstancia.",
          "en": "Its use is mandatory at all times, in any circumstance.",
          "ru": "Его использование обязательно всегда, при любых обстоятельствах."
        },
        "correct": false
      }
    ],
    "image": "/questions/a33.jpg"
  },
  {
    "id": 367,
    "question": {
      "es": "De acuerdo a la Ley 2148, ¿es correcta la manera de circular del acompañante respecto a la protección ocular?",
      "en": "According to Law 2148, is the way the passenger circulates regarding eye protection correct?",
      "ru": "Согласно Закону 2148, правильна ли манера движения пассажира в отношении защиты глаз?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque sólo el conductor está obligado a usar protección ocular.",
          "en": "Yes, because only the driver is required to use eye protection.",
          "ru": "Да, потому что только водитель обязан использовать защиту глаз."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque el acompañante siempre está obligado a usar protección para sus ojos.",
          "en": "No, because the passenger is always required to wear eye protection.",
          "ru": "Нет, потому что пассажир всегда обязан использовать защиту для глаз."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque el acompañante debe usar protección ocular cuando el motovehículo no cuenta con parabrisas.",
          "en": "No, because the passenger must wear eye protection when the motorcycle does not have a windshield.",
          "ru": "Нет, потому что пассажир должен использовать защиту для глаз, когда мотоцикл не оборудован ветровым стеклом."
        },
        "correct": false
      }
    ],
    "image": "/questions/a34.jpg"
  },
  {
    "id": 368,
    "question": {
      "es": "Cuando un motovehículo no tiene parabrisas, el conductor está obligado a usar protección para los ojos (visor en el casco o anteojos de seguridad). ¿Esta obligación rige también para el acompañante?",
      "en": "When a motorcycle does not have a windshield, the driver is required to wear eye protection (visor in the helmet or safety glasses). Does this obligation also apply to the passenger?",
      "ru": "Когда мотоцикл не имеет ветрового стекла, водитель обязан использовать защиту для глаз (визор на шлеме или защитные очки). Эта обязанность также распространяется на пассажира?"
    },
    "answers": [
      {
        "text": {
          "es": "No, no está obligado aunque es recomendable.",
          "en": "No, they are not required, although it is recommended.",
          "ru": "Нет, он не обязан, хотя это рекомендуется."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, cuando hay mucho viento.",
          "en": "Yes, when there is a lot of wind.",
          "ru": "Да, когда сильный ветер."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, cuando circula por caminos de tierra.",
          "en": "Yes, when traveling on dirt roads.",
          "ru": "Да, когда он движется по грунтовым дорогам."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 369,
    "question": {
      "es": "No es aconsejable que los conductores de motovehículos lleven siempre colocados guantes de moto en sus manos.",
      "en": "It is not advisable for motorcycle drivers to always wear motorcycle gloves on their hands.",
      "ru": "Не рекомендуется, чтобы водители мотоциклов всегда носили мотоциклетные перчатки."
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
      "en": "This motorcyclist has the 3 main safety elements recommended for a motorcycle driver.",
      "ru": "Этот мотоциклист имеет 3 основных элемента безопасности, рекомендованных для водителя мотоцикла."
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
    "image": "/questions/a35.jpg"
  },
  {
    "id": 371,
    "question": {
      "es": "¿Es aconsejable que los conductores de motovehículos usen guantes de protección?",
      "en": "Is it advisable for motorcycle drivers to wear protective gloves?",
      "ru": "Рекомендуется ли водителям мотоциклов использовать защитные перчатки?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque perjudica la adherencia al manillar.",
          "en": "No, because it hinders grip on the handlebars.",
          "ru": "Нет, потому что это ухудшает сцепление с рулем."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, ya que ayudan a proteger sus manos y muñecas frente a una colisión o caída.",
          "en": "Yes, as they help protect their hands and wrists in the event of a collision or fall.",
          "ru": "Да, так как они помогают защитить руки и запястья от столкновений или падений."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo en viajes largos, ya sea en vía urbana o rural.",
          "en": "Only on long trips, whether on urban or rural roads.",
          "ru": "Только в длительных поездках, как в городских, так и в сельских условиях."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 372,
    "question": {
      "es": "¿Cuál es la vestimenta recomendada para conducir un motovehículo?",
      "en": "What is the recommended clothing for riding a motorcycle?",
      "ru": "Какова рекомендуемая одежда для управления мотоциклом?"
    },
    "answers": [
      {
        "text": {
          "es": "Debería ser holgada para conducir más cómodo y tener colores que no encandilen al resto de los conductores.",
          "en": "It should be loose-fitting for more comfort and have colors that do not dazzle other drivers.",
          "ru": "Она должна быть свободной для более комфортного вождения и иметь цвета, которые не ослепляют других водителей."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debería ser de tela resistente, de colores claros y/o con bandas reflectantes.",
          "en": "It should be made of durable fabric, in light colors and/or with reflective bands.",
          "ru": "Она должна быть из прочной ткани, светлых цветов и/или с отражающими полосами."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No existe recomendación sobre el tema ya que no influye en su seguridad.",
          "en": "There is no recommendation on the subject as it does not influence their safety.",
          "ru": "Рекомендаций по этому вопросу не существует, так как это не влияет на безопасность."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 373,
    "question": {
      "es": "En función a la seguridad vial, ¿tiene importancia la ropa que utilicen los conductores y acompañantes de motovehículos?",
      "en": "In terms of road safety, is the clothing worn by motorcycle drivers and passengers important?",
      "ru": "С точки зрения дорожной безопасности, имеет ли значение одежда, которую носят водители и пассажиры мотоциклов?"
    },
    "answers": [
      {
        "text": {
          "es": "No, es indistinto siempre que lleven los cascos homologados y bien colocados.",
          "en": "No, it is irrelevant as long as they wear approved helmets and wear them properly.",
          "ru": "Нет, это не имеет значения, если они носят сертифицированные шлемы и правильно их надевают."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque colabora con su visibilidad, resguarda el cuerpo de las inclemencias del tiempo y puede brindar protección en caso de caídas.",
          "en": "Yes, because it helps with their visibility, protects the body from the elements, and can provide protection in case of falls.",
          "ru": "Да, потому что это способствует их видимости, защищает тело от неблагоприятных погодных условий и может обеспечить защиту в случае падений."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo el chaleco reflectante es importante.",
          "en": "Only the reflective vest is important.",
          "ru": "Только светоотражающий жилет важен."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 374,
    "question": {
      "es": "Al conducir un motovehículo, utilizar ropa de protección...",
      "en": "When riding a motorcycle, wearing protective clothing...",
      "ru": "При управлении мотоциклом следует использовать защитную одежду..."
    },
    "answers": [
      {
        "text": {
          "es": "Resulta eficaz porque, en caso de siniestro, evita o reduce la gravedad de ciertas lesiones.",
          "en": "Is effective because, in the event of an accident, it prevents or reduces the severity of certain injuries.",
          "ru": "Это эффективно, потому что в случае аварии это предотвращает или снижает тяжесть определенных травм."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No es recomendable en zona urbana porque quita libertad de movimientos al conductor.",
          "en": "It is not advisable in urban areas because it restricts the driver's freedom of movement.",
          "ru": "Не рекомендуется в городской зоне, потому что это ограничивает свободу движений водителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo debe utilizarse en trayectos largos por ruta.",
          "en": "It should only be used on long trips on highways.",
          "ru": "Должно использоваться только на длинных маршрутах по трассе."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 375,
    "question": {
      "es": "La vestimenta con protecciones para conducir motovehículos debe ser...",
      "en": "Clothing with protections for riding motorcycles should be...",
      "ru": "Одежда с защитой для управления мотоциклами должна быть..."
    },
    "answers": [
      {
        "text": {
          "es": "De colores claros o con bandas reflectantes para que se pueda distinguir al conductor a suficiente distancia.",
          "en": "In light colors or with reflective bands so that the driver can be distinguished from a sufficient distance.",
          "ru": "Светлых цветов или с отражающими полосами, чтобы водителя можно было различить на достаточном расстоянии."
        },
        "correct": true
      },
      {
        "text": {
          "es": "De colores oscuros, para así no distraer a los conductores.",
          "en": "In dark colors, so as not to distract other drivers.",
          "ru": "Темных цветов, чтобы не отвлекать водителей."
        },
        "correct": false
      },
      {
        "text": {
          "es": "De cualquier color siempre que sea de material sintético.",
          "en": "In any color as long as it is made of synthetic material.",
          "ru": "Любого цвета, если она из синтетического материала."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 376,
    "question": {
      "es": "Para tener seguridad y control sobre los mandos de un motovehículo conviene que el conductor utilice botas que…",
      "en": "To have safety and control over the controls of a motorcycle, it is advisable for the driver to wear boots that...",
      "ru": "Для обеспечения безопасности и контроля над управлением мотоциклом водителю следует носить ботинки, которые..."
    },
    "answers": [
      {
        "text": {
          "es": "Tengan tacón, queden ajustadas y sean altas.",
          "en": "Have a heel, fit snugly, and are high.",
          "ru": "Имеют каблук, плотно сидят и высокие."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sean bajas, preferentemente acordonadas y con puntera reforzada de acero.",
          "en": "Are low, preferably laced, and have a reinforced steel toe.",
          "ru": "Низкие, предпочтительно на шнуровке и с усиленным стальным носком."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Queden sujetas, sin tacón ni cordones.",
          "en": "They should stay secure, without heels or laces.",
          "ru": "Чтобы держались (плотно сидели), без каблука и без шнурков."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 377,
    "question": {
      "es": "¿Qué se entiende por casco homologado?",
      "en": "What is meant by an approved helmet?",
      "ru": "Что понимается под сертифицированным шлемом?"
    },
    "answers": [
      {
        "text": {
          "es": "Se refiere a la certificación que debe cumplir un casco, confirmando que es apto y seguro para usarlo.",
          "en": "It refers to the certification that a helmet must meet, confirming that it is suitable and safe to use.",
          "ru": "Это относится к сертификации, которую должен про��ти шлем, подтверждая, что он подходит и безопасен для использования."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica la marca del fabricante.",
          "en": "It indicates the manufacturer's brand.",
          "ru": "Указывает на марку производителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se refiere a la procedencia y fecha de vencimiento del mismo.",
          "en": "It refers to the origin and expiration date of the helmet.",
          "ru": "Относится к происхождению и дате истечения срока действия."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 378,
    "question": {
      "es": "¿A qué tipo de seguridad pertenece el siguiente elemento?",
      "en": "What type of safety does the following element belong to?",
      "ru": "К какому типу безопасности относится следующий элемент?"
    },
    "answers": [
      {
        "text": {
          "es": "A la seguridad pasiva.",
          "en": "To passive safety.",
          "ru": "К пассивной безопасности."
        },
        "correct": true
      },
      {
        "text": {
          "es": "A la seguridad activa.",
          "en": "To active safety.",
          "ru": "К активной безопасности."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Оба ответа, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/a36.jpg"
  },
  {
    "id": 379,
    "question": {
      "es": "Un requisito obligatorio que debe cumplir el casco para motociclista es que…",
      "en": "A mandatory requirement that a motorcycle helmet must meet is that…",
      "ru": "Обязательное требование, которому должен соответствовать шлем для мотоциклиста, заключается в том, что…"
    },
    "answers": [
      {
        "text": {
          "es": "Debe estar homologado o certificado para su uso específico.",
          "en": "It must be homologated or certified for its specific use.",
          "ru": "Должен быть одобрен или сертифицирован для конкретного использования."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Debe ser de uso exclusivo de motovehículos.",
          "en": "It must be for the exclusive use of motorcycles.",
          "ru": "Должен использоваться исключительно для мотоциклов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe poseer visor.",
          "en": "It must have a visor.",
          "ru": "Должен иметь визор."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 380,
    "question": {
      "es": "¿Está permitido circular en un motovehículo con este tipo de casco?",
      "en": "Is it allowed to ride a motorcycle with this type of helmet?",
      "ru": "Разрешено ли ездить на мотоцикле с таким шлемом?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, sólo en distancias cortas y siempre que esté correctamente ajustado.",
          "en": "Yes, only for short distances and as long as it is properly adjusted.",
          "ru": "Да, только на короткие расстояния и при условии, что он правильно отрегулирован."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, sólo ante una emergencia y siempre que esté correctamente ajustado.",
          "en": "Yes, only in an emergency and as long as it is properly adjusted.",
          "ru": "Да, только в экстренной ситуации и при условии, что он правильно отрегулирован."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Nunca, ya que éste no es un casco homologado.",
          "en": "Never, as this is not a homologated helmet.",
          "ru": "Никогда, так как это не одобренный шлем."
        },
        "correct": true
      }
    ],
    "image": "/questions/a37.jpg"
  },
  {
    "id": 381,
    "question": {
      "es": "¿Cuál de los siguientes cascos brinda mayor protección?",
      "en": "Which of the following helmets provides greater protection?",
      "ru": "Какой из следующих шлемов обеспечивает большую защиту?"
    },
    "answers": [
      {
        "text": {
          "es": "El casco A.",
          "en": "Helmet A.",
          "ru": "Шлем A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El casco B.",
          "en": "Helmet B.",
          "ru": "Шлем B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los dos brindan idéntica protección.",
          "en": "Both provide identical protection.",
          "ru": "Оба обеспечивают одинаковую защиту."
        },
        "correct": false
      }
    ],
    "image": "/questions/a38.jpg"
  },
  {
    "id": 382,
    "question": {
      "es": "El casco homologado que brinda mayor protección es del tipo:",
      "en": "The homologated helmet that provides the greatest protection is of the type:",
      "ru": "Одобренный шлем, который обеспечивает большую защиту, это:"
    },
    "answers": [
      {
        "text": {
          "es": "Abierto.",
          "en": "Open.",
          "ru": "Открытый."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Integral.",
          "en": "Full face.",
          "ru": "Интегральный."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Abierto o Integral. Ambos brindan idéntica protección.",
          "en": "Open or Full face. Both provide identical protection.",
          "ru": "Открытый или Интегральный. Оба обеспечивают одинаковую защиту."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 383,
    "question": {
      "es": "En la siguiente imagen ¿el casco A brinda mayor protección que el B?",
      "en": "In the following image, does helmet A provide greater protection than B?",
      "ru": "На следующем изображении шлем A обеспечивает большую защиту, чем B?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, porque es el que usan los corredores profesionales de automovilismo.",
          "en": "Yes, because it is the one used by professional racing drivers.",
          "ru": "Да, потому что его используют профессиональные гонщики."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque con éste está protegida la mandíbula.",
          "en": "Yes, because with this one the jaw is protected.",
          "ru": "Да, потому что с ним защищена челюсть."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, no hay pruebas de que sea más seguro.",
          "en": "No, there is no evidence that it is safer.",
          "ru": "Нет, нет доказательств, что он безопаснее."
        },
        "correct": false
      }
    ],
    "image": "/questions/a39.jpg"
  },
  {
    "id": 384,
    "question": {
      "es": "Una de las principales causas de mortalidad en siniestros de tránsito donde los motovehículos están involucrados, es…",
      "en": "One of the main causes of mortality in traffic accidents involving motorcycles is...",
      "ru": "Одна из основных причин смертности в дорожно-транспортных происшествиях с участием мотоциклов — это..."
    },
    "answers": [
      {
        "text": {
          "es": "El peso del vehículo.",
          "en": "The weight of the vehicle.",
          "ru": "Вес транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La no utilización correcta del casco.",
          "en": "The incorrect use of the helmet.",
          "ru": "Неправильное использование шлема."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La fricción con el asfalto.",
          "en": "The friction with the asphalt.",
          "ru": "Трение о асфальт."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 385,
    "question": {
      "es": "En caso de siniestro con un motovehículo, la importancia del uso correcto del casco es…",
      "en": "In the event of an accident with a motorcycle, the importance of correctly using the helmet is...",
      "ru": "В случае аварии с мотоциклом важность правильного использования шлема..."
    },
    "answers": [
      {
        "text": {
          "es": "Mayor para el acompañante que para el conductor, porque sus lesiones serán de mayor gravedad.",
          "en": "Greater for the passenger than for the driver, because their injuries will be more severe.",
          "ru": "Боль��е для пассажира, чем для водителя, потому что его травмы будут более серьезными."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mayor para el conductor que para el acompañante, porque caerá primero.",
          "en": "Greater for the driver than for the passenger, because they will fall first.",
          "ru": "Больше для водителя, чем для пассажира, потому что он упадет первым."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Igual para el conductor y el acompañante, porque la posibilidad de lesiones es idéntica en ambos.",
          "en": "The same for the driver and the passenger, because the possibility of injuries is identical for both.",
          "ru": "Одинакова для водителя и пассажира, потому что вероятность травм одинакова для обоих."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 386,
    "question": {
      "es": "Circulando en un motovehículo, ¿cuándo debe usar este elemento de protección?",
      "en": "When riding a motorcycle, when should you use this protective element?",
      "ru": "Езда на мотоцикле, когда нужно использовать этот элемент защиты?"
    },
    "answers": [
      {
        "text": {
          "es": "Sólo en días de lluvia u horarios nocturnos.",
          "en": "Only on rainy days or at night.",
          "ru": "Только в дождливые дни или в ночное время."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo en distancias largas.",
          "en": "Only for long distances.",
          "ru": "Только на длинные расстояния."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son incorrectas.",
          "en": "Both answers, A and B, are incorrect.",
          "ru": "Обе ответы, A и B, неверны."
        },
        "correct": true
      }
    ],
    "image": "/questions/a40.jpg"
  },
  {
    "id": 387,
    "question": {
      "es": "En un motovehículo, cuando se usa correctamente el casco se tiene un...",
      "en": "On a motorcycle, when the helmet is used correctly, there is a...",
      "ru": "На мотоцикле, когда шлем используется правильно, вероятность..."
    },
    "answers": [
      {
        "text": {
          "es": "44% menos de probabilidades de lesiones graves.",
          "en": "44% lower chance of serious injuries.",
          "ru": "на 44% меньше серьезных травм."
        },
        "correct": false
      },
      {
        "text": {
          "es": "62% menos de probabilidades de lesiones graves.",
          "en": "62% lower chance of serious injuries.",
          "ru": "на 62% меньше серьезных травм."
        },
        "correct": false
      },
      {
        "text": {
          "es": "85% menos de probabilidades de lesiones graves.",
          "en": "85% lower chance of serious injuries.",
          "ru": "на 85% меньше серьезных травм."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 388,
    "question": {
      "es": "Ante la caída de un motociclista que circula a 25 km/h sin casco, ¿pueden producirse lesiones de gravedad, como fractura de cráneo y daños cerebrales?",
      "en": "In the event of a fall from a motorcyclist traveling at 25 km/h without a helmet, can serious injuries occur, such as skull fractures and brain damage?",
      "ru": "При падении мотоциклиста, движущегося со скоростью 25 км/ч без шлема, могут ли возникнуть серьезные травмы, такие как чере��ная травма и повреждение мозга?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que a esa velocidad sufrir un impacto en la cabeza o en otra parte del cuerpo, no tendría consecuencias.",
          "en": "No, because at that speed suffering an impact to the head or another part of the body would not have consequences.",
          "ru": "Нет, так как на этой скорости удар по голове или другой части тела не приведет к последствиям."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, podrían producirse ya que al no tener casco no está protegido ante un impacto.",
          "en": "Yes, serious injuries could occur since without a helmet there is no protection against an impact.",
          "ru": "Да, могут возникнуть, так как без шлема он не защищен от удара."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sólo puede existir riesgo de fractura de cráneo, pero nunca lesiones cerebrales.",
          "en": "There can only be a risk of skull fracture, but never brain injuries.",
          "ru": "Может существовать риск черепной травмы, но никогда не травм мозга."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 389,
    "question": {
      "es": "Usar el visor del casco rayado, ¿ puede afectar negativamente la conducción de un motovehículo?",
      "en": "Using a scratched helmet visor, can it negatively affect the riding of a motorcycle?",
      "ru": "Использование поцарапанного визора шлема может негативно повлиять на управление мотоциклом?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, ya que produce fatiga visual.",
          "en": "Yes, as it causes visual fatigue.",
          "ru": "Да, так как это вызывает зрительное утомление."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, de noche produce reflejos que distorsionan la visión.",
          "en": "Yes, at night it produces reflections that distort vision.",
          "ru": "Да, ночью он создает блики, которые искажают зрение."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 390,
    "question": {
      "es": "Su casco de protección ha sufrido un golpe pero no se observa ningún deterioro, ¿este golpe pudo haber afectado su eficacia?",
      "en": "Your protective helmet has suffered a blow but no deterioration is observed, could this blow have affected its effectiveness?",
      "ru": "Ваш защитный шлем получил удар, но никаких повреждений не наблюдается, мог ли этот удар повлиять на его эффективность?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, aunque no se observen daños en su exterior.",
          "en": "Yes, although no damage is observed on its exterior.",
          "ru": "Да, хотя внешних повреждений не видно."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque sólo se ve afectado si se observan abolladuras en el exterior.",
          "en": "No, because it is only affected if dents are observed on the exterior.",
          "ru": "Нет, потому что он повреждается только в случае, если на внешней стороне видны вмятины."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si se aprecian grietas en el interior.",
          "en": "Only if cracks are appreciated on the interior.",
          "ru": "Только если внутри видны трещины."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 391,
    "question": {
      "es": "El conductor del motovehículo que se muestra en la imagen NO está en infracción.",
      "en": "The driver of the motorcycle shown in the image is NOT in violation.",
      "ru": "Водитель мотоцикла, изображенный на картинке, не нарушает правила."
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
    "image": "/questions/a41.jpg"
  },
  {
    "id": 392,
    "question": {
      "es": "El uso adecuado del casco implica que la correa de sujeción debe llevarse abrochada según las circunstancias del tránsito.",
      "en": "The proper use of the helmet implies that the retention strap must be fastened according to traffic conditions.",
      "ru": "Правильное использование шлема подразумевает, что ремень должен быть застегнут в зависимости от условий движения."
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
      "en": "When using the helmet on a motorcycle, it is essential…",
      "ru": "При использовании шлема на мотоцикле важно..."
    },
    "answers": [
      {
        "text": {
          "es": "Que la correa de sujeción esté correctamente abrochada.",
          "en": "That the retention strap is correctly fastened.",
          "ru": "Чтобы ремень был правильно застегнут."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que exteriormente no presente abolladuras, aunque haya sufrido alguna caída anterior.",
          "en": "That externally it does not show dents, even if it has suffered a previous fall.",
          "ru": "Чтобы снаружи не было вмятин, даже если он уже падал ранее."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que quede holgado porque así brinda mayor comodidad para conducir.",
          "en": "That it remains loose because it provides greater comfort for driving.",
          "ru": "Чтобы он был свободным, так как это обеспечивает больший комфорт при вождении."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 394,
    "question": {
      "es": "Para que el uso del casco de un motovehículo cumpla su función protectora...",
      "en": "For the use of a motorcycle helmet to fulfill its protective function…",
      "ru": "Чтобы использование шлема на мотоцикле выполняло свою защитную функцию..."
    },
    "answers": [
      {
        "text": {
          "es": "La correa de sujeción debe estar siempre abrochada.",
          "en": "The retention strap must always be fastened.",
          "ru": "Ремень всегда должен быть застегнут."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Debe quedar bastante holgado, ya que resulta más cómodo para el conductor.",
          "en": "It should be quite loose, as it is more comfortable for the driver.",
          "ru": "Он должен быть достаточно свободным, так как это более удобно для водителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe encontrarse en buenas condiciones. El modo en que se encuentra sujetado no influye en la protección que brinda.",
          "en": "It must be in good condition. The way it is secured does not influence the protection it provides.",
          "ru": "Он должен быть в хорошем состоянии. Способ его крепления не влияет на защиту, которую он обеспечивает."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 395,
    "question": {
      "es": "¿Es igual de seguro si el casco para conducir un motovehículo está abrochado con la correa apretada al mentón o floja?",
      "en": "Is it equally safe if the helmet for riding a motorcycle is fastened with the strap tight to the chin or loose?",
      "ru": "Безопасно ли, если шлем для вождения мотоцикла застегнут с ремнем, плотно прижатым к подбородку или свободным?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, no tiene importancia mientras que esté abrochado.",
          "en": "Yes, it does not matter as long as it is fastened.",
          "ru": "Да, это не имеет значения, пока он застегнут."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. El casco debe estar abrochado pero es mejor si queda holgado ya que resulta más cómodo para el conductor.",
          "en": "No. The helmet must be fastened but it is better if it is loose as it is more comfortable for the driver.",
          "ru": "Нет. Шлем должен быть застегнут, но лучш��, если он будет свободным, так как это более удобно для водителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. El casco debe estar abrochado de modo que un dedo pueda pasar entre la correa y el mentón.",
          "en": "No. The helmet must be fastened in such a way that a finger can pass between the strap and the chin.",
          "ru": "Нет. Шлем должен быть застегнут так, чтобы палец мог пройти между ремнем и подбородком."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 396,
    "question": {
      "es": "Un casco de protección para motovehículos que participó en un siniestro vial, no pierde su eficacia si es que no se observan abolladuras o daños en su exterior.",
      "en": "A protective helmet for motorcycles that was involved in a traffic accident does not lose its effectiveness if no dents or damage are observed on its exterior.",
      "ru": "Защитный шлем для мотоциклов, который участвовал в дорожном происшествии, не теряет своей эффективности, если на его внешней стороне не наблюдаются вмятины или повреждения."
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
      "en": "Do protective helmets for motorcycles have an expiration date?",
      "ru": "Есть ли срок годности у защитных шлемов для мотоциклов?"
    },
    "answers": [
      {
        "text": {
          "es": "No, tienen vigencia mientras se encuentren en buen estado.",
          "en": "No, they are valid as long as they are in good condition.",
          "ru": "Нет, они действительны, пока находятся в хорошем состоянии."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, la fecha la especifica el fabricante.",
          "en": "Yes, the date is specified by the manufacturer.",
          "ru": "Да, дату указывает производитель."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, a los 10 años.",
          "en": "Yes, after 10 years.",
          "ru": "Да, через 10 лет."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 398,
    "question": {
      "es": "¿Cómo puede saber cuál es la medida del casco de protección que corresponde al usuario de un motovehículo?",
      "en": "How can you know what the correct size of the protective helmet is for a motorcycle user?",
      "ru": "Как можно узнать, какой размер защитного шлема соответствует пользователю мотоцикла?"
    },
    "answers": [
      {
        "text": {
          "es": "Midiendo la circunferencia de la cabeza a la altura de la frente y por sobre las orejas.",
          "en": "By measuring the circumference of the head at the height of the forehead and over the ears.",
          "ru": "Измерив окружность головы на уровне лба и над уш��ми."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El que sea más cómodo para el conductor.",
          "en": "The one that is more comfortable for the driver.",
          "ru": "Чтобы он был более удобным для водителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Midiendo la distancia desde el mentón hasta la zona superior de la cabeza.",
          "en": "By measuring the distance from the chin to the top of the head.",
          "ru": "Измерив расстояние от подбородка до верхней части головы."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 399,
    "question": {
      "es": "No todos los cascos de protección de motovehículos que están homologados, permiten identificar visiblemente el talle del mismo.",
      "en": "Not all protective helmets for motorcycles that are approved allow for the visible identification of the size.",
      "ru": "Не все сертифицированные защитные шлемы для мотоциклов позволяют визуально определить их размер."
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
      "en": "The safe way to use a motorcycle rider's protective helmet is for it to be…",
      "ru": "Безопасный способ использования защитного шлема мотоциклиста заключается в том, что он должен быть..."
    },
    "answers": [
      {
        "text": {
          "es": "Holgado.",
          "en": "Loose.",
          "ru": "Свободным."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Justo.",
          "en": "Just right.",
          "ru": "В刚."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Muy apretado.",
          "en": "Very tight.",
          "ru": "Очень тугим."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 401,
    "question": {
      "es": "Al cruzar con un motovehículo por un paso a nivel, existirá menos riesgo de caída si se atraviesa de forma que las ruedas y la vía queden como la imagen:.",
      "en": "When crossing a level crossing with a motorcycle, there will be less risk of falling if you cross in such a way that the wheels and the track are like the image:",
      "ru": "При пересечении с мотоциклом через железнодорожный переезд риск падения будет меньше, если проехать так, чтобы колеса и путь были как на изображении:"
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
    "image": "/questions/a42.jpg"
  },
  {
    "id": 402,
    "question": {
      "es": "Frente a la siguiente situación, existirá menos riesgo de caída si se atraviesa con el motovehículo de forma que las ruedas y la vía formen un ángulo…",
      "en": "In the following situation, there will be less risk of falling if you cross with the motorcycle in such a way that the wheels and the track form an angle…",
      "ru": "В следующей ситуации риск падения будет меньше, если проехать на мотоцикле так, чтобы колеса и путь образовывали угол..."
    },
    "answers": [
      {
        "text": {
          "es": "Lo más cerrado posible.",
          "en": "As closed as possible.",
          "ru": "Как можно более закрытый."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Lo más recto posible.",
          "en": "As straight as possible.",
          "ru": "Как можно ��олее прямой."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/a43.jpg"
  },
  {
    "id": 403,
    "question": {
      "es": "En caso de un siniestro vial, el conductor de un motovehículo que utiliza todas las medidas de seguridad presenta en relación al conductor de un automóvil…",
      "en": "In the event of a traffic accident, the driver of a motorcycle who uses all safety measures presents in relation to the driver of a car…",
      "ru": "В случае дорожного происшествия водитель мотоцикла, использующий все меры безопасности, имеет по сравнению с водителем автомобиля..."
    },
    "answers": [
      {
        "text": {
          "es": "Igual riesgo de resultar herido.",
          "en": "Equal risk of being injured.",
          "ru": "Такой же риск получить травму."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Menor riesgo de resultar herido.",
          "en": "Lower risk of being injured.",
          "ru": "Меньший риск получить травму."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Mayor riesgo de resultar herido.",
          "en": "Greater risk of being injured.",
          "ru": "Более высокий риск получить травму."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 404,
    "question": {
      "es": "La imagen que se visualiza representa…",
      "en": "The image displayed represents…",
      "ru": "Изображение, которое отображается, представляет…"
    },
    "answers": [
      {
        "text": {
          "es": "El riesgo que implica la conducción de un motovehículo porque circula a más velocidad que los automóviles.",
          "en": "The risk involved in driving a motorcycle because it travels faster than cars.",
          "ru": "Риск, связанный с управлением мотоциклом, так как он движется быстрее, чем автомобили."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que el motovehículo se encuentra ubicado en un punto ciego del espejo retrovisor.",
          "en": "That the motorcycle is located in a blind spot of the rearview mirror.",
          "ru": "Что мотоцикл находится в слепой зоне зеркала заднего вида."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que el motovehículo no se encuentra ubicado en un punto ciego del espejo retrovisor.",
          "en": "That the motorcycle is not located in a blind spot of the rearview mirror.",
          "ru": "Что мотоцикл не находится в слепой зоне зеркала заднего вида."
        },
        "correct": true
      }
    ],
    "image": "/questions/a44.jpg"
  },
  {
    "id": 405,
    "question": {
      "es": "Al acelerar un motovehículo, ¿hacia dónde se desplaza la masa?",
      "en": "When accelerating a motorcycle, where does the mass move?",
      "ru": "При ускорении мотоцикла, куда перемещается масса?"
    },
    "answers": [
      {
        "text": {
          "es": "Se distribuirá de forma pareja sobre cada rueda.",
          "en": "It will be distributed evenly over each wheel.",
          "ru": "Она распределится равномерно по каждому колесу."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Hacia la rueda trasera.",
          "en": "Towards the rear wheel.",
          "ru": "К заднему колесу."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Hacia la rueda delantera pudiendo provocar, incluso, pérdida de adherencia de la rueda trasera a la calzada.",
          "en": "Towards the front wheel, which can even cause loss of grip of the rear wheel on the road.",
          "ru": "К переднему колесу, что может даже привести к потере сцепления заднего колеса с дорогой."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 406,
    "question": {
      "es": "Al frenar correctamente un motovehículo…",
      "en": "When braking a motorcycle correctly…",
      "ru": "При правильном торможении мотоцикла…"
    },
    "answers": [
      {
        "text": {
          "es": "La rueda trasera soporta el mayor esfuerzo de frenado, ya que es la directriz.",
          "en": "The rear wheel bears the greatest braking effort, as it is the directive.",
          "ru": "��аднее колесо испытывает наибольшее усилие торможения, так как оно является направляющим."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La rueda delantera soporta el mayor esfuerzo de frenado.",
          "en": "The front wheel bears the greatest braking effort.",
          "ru": "Переднее колесо испытывает наибольшее усилие торможения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Las dos ruedas soportan el mismo esfuerzo de frenado.",
          "en": "Both wheels bear the same braking effort.",
          "ru": "Оба колеса испытывают одинаковое усилие торможения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 407,
    "question": {
      "es": "La posición de conducción en un motovehículo debe ser…",
      "en": "The riding position on a motorcycle should be…",
      "ru": "Положение водителя на мотоцикле должно быть…"
    },
    "answers": [
      {
        "text": {
          "es": "Lo más distante posible al centro de gravedad.",
          "en": "As far away as possible from the center of gravity.",
          "ru": "Как можно дальше от центра тяжести."
        },
        "correct": false
      },
      {
        "text": {
          "es": "En la parte más próxima al centro de gravedad.",
          "en": "In the part closest to the center of gravity.",
          "ru": "В самой близкой к центру тяжести части."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo más avanzada posible.",
          "en": "As far forward as possible.",
          "ru": "Как можно ближе к передней части."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 408,
    "question": {
      "es": "La posición corporal de este acompañante no es recomendable.",
      "en": "The body position of this passenger is not recommended.",
      "ru": "Положение тела этого пассажира не рекомендуется."
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
    "image": "/questions/a45.jpg"
  },
  {
    "id": 409,
    "question": {
      "es": "¿Cúal de las siguientes opciones muestra la posición correcta del pasajero de un motovehículo?",
      "en": "Which of the following options shows the correct position of a motorcycle passenger?",
      "ru": "Какой из следующих вариантов показывает правильное положение пассажира на мотоцикле?"
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
    "image": "/questions/a46.jpg"
  },
  {
    "id": 410,
    "question": {
      "es": "Mientras un motovehículo está detenido, es recomendable que el acompañante…",
      "en": "While a motorcycle is stopped, it is advisable for the passenger to…",
      "ru": "Пока мотоцикл стоит, рекомендуется, чтобы пассажир…"
    },
    "answers": [
      {
        "text": {
          "es": "Mantenga los pies en los apoyapies.",
          "en": "Keep their feet on the footrests.",
          "ru": "Держал ноги на подножках."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Coloque los pies en el suelo para contribuir al equilibrio del vehículo.",
          "en": "Place their feet on the ground to help balance the vehicle.",
          "ru": "Ставил ноги на землю, чтобы способствовать равновесию транспортного средства."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Coloque un pie en el suelo y otro en el apoyapié.",
          "en": "Place one foot on the ground and the other on the footrest.",
          "ru": "Ставил одну ногу на землю, а другую на подножку."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 411,
    "question": {
      "es": "En general, los mandos accionados con la mano señalada son:",
      "en": "In general, the controls operated with the indicated hand are:",
      "ru": "В общем, органы управления, управляемые указанной рукой, это:"
    },
    "answers": [
      {
        "text": {
          "es": "El acelerador y la maneta del freno delantero.",
          "en": "The throttle and the front brake lever.",
          "ru": "Дроссель и ручка переднего тормоза."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La maneta de embrague, la bocina y las luces de giro.",
          "en": "The clutch lever, the horn, and the turn signals.",
          "ru": "Ручка сцепления, сигнал и поворотники."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La maneta de embrague y se acciona el acelerador.",
          "en": "The clutch lever and the throttle is operated.",
          "ru": "Ручка сцепления и дроссель."
        },
        "correct": false
      }
    ],
    "image": "/questions/a47.jpg"
  },
  {
    "id": 412,
    "question": {
      "es": "Generalmente, ¿qué elemento de la motocicleta se acciona con el pie señalado?",
      "en": "Generally, which element of the motorcycle is operated with the indicated foot?",
      "ru": "Какой элемент мотоцикла обычно управляется указанной ногой?"
    },
    "answers": [
      {
        "text": {
          "es": "El embrague.",
          "en": "The clutch.",
          "ru": "Сцепление."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El cambio de marchas.",
          "en": "The gear shift.",
          "ru": "Переключение передач."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El pedal de freno de la rueda trasera.",
          "en": "The rear brake pedal.",
          "ru": "Педаль тормоза заднего колеса."
        },
        "correct": true
      }
    ],
    "image": "/questions/a48.jpg"
  },
  {
    "id": 413,
    "question": {
      "es": "Si su motovehículo dispone de mandos independientes para frenar cada rueda, uno en el manillar y otro en el pedal, ¿que rueda frena el mando situado en el manillar?",
      "en": "If your motorcycle has independent controls to brake each wheel, one on the handlebar and another on the pedal, which wheel does the control on the handlebar brake?",
      "ru": "Если ваш мотоцикл имеет независимые органы управления для торможения каждого колеса, один на руле и другой на педали, какое колесо тормозит орган управления, расположенный на руле?"
    },
    "answers": [
      {
        "text": {
          "es": "La trasera.",
          "en": "The rear.",
          "ru": "Заднее."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La delantera.",
          "en": "The front.",
          "ru": "Переднее."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B, son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Обе ответы, A и B, верны."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 414,
    "question": {
      "es": "En relación al peso, ¿qué debe tener en cuenta en la siguiente situación?",
      "en": "Regarding weight, what should you consider in the following situation?",
      "ru": "Что следует учитывать в следующей ситуации относительно веса?"
    },
    "answers": [
      {
        "text": {
          "es": "Que la distancia de frenado será menor.",
          "en": "That the braking distance will be shorter.",
          "ru": "Что тормозной путь будет меньше."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que la distancia de frenado será mayor.",
          "en": "That the braking distance will be longer.",
          "ru": "Что тормозной путь будет больше."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Nada, ya que el peso de un acompañante no interviene en la conducción.",
          "en": "Nothing, as the weight of a passenger does not affect driving.",
          "ru": "Ничего, так как вес пассажира не влияет на управление."
        },
        "correct": false
      }
    ],
    "image": "/questions/a49.jpg"
  },
  {
    "id": 415,
    "question": {
      "es": "¿Cúal es la función principal del siguiente elemento?",
      "en": "What is the main function of the following element?",
      "ru": "Какова основная функция следующего элемента?"
    },
    "answers": [
      {
        "text": {
          "es": "Regular el paso de nafta del depósito a la cuba del carburador.",
          "en": "Regulate the flow of fuel from the tank to the carburetor bowl.",
          "ru": "Регулировать подачу бензина из бака в карбюратор."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Regular el paso del líquido refrigerante del carburador a los cilindros.",
          "en": "Regulate the flow of coolant from the carburetor to the cylinders.",
          "ru": "Регулировать подачу охлаждающей жидкости от карбюратора к цилиндрам."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Controlar el correcto engrase y mantenimiento de los elementos del sistema de transmisión.",
          "en": "Check the proper lubrication and maintenance of the transmission system components.",
          "ru": "Контролировать правильную смазку и обслуживание элементов трансмиссионной системы."
        },
        "correct": false
      }
    ],
    "image": "/questions/a50.jpg"
  },
  {
    "id": 416,
    "question": {
      "es": "En general, el cambio de velocidades de una motocicleta, ¿con qué pie se acciona?",
      "en": "In general, the gear shift of a motorcycle, which foot is used to operate it?",
      "ru": "В общем, как переключается скорость на мотоцикле, какой ногой?"
    },
    "answers": [
      {
        "text": {
          "es": "Pie Izquierdo.",
          "en": "Left Foot.",
          "ru": "Левой ногой."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Pie Derecho.",
          "en": "Right Foot.",
          "ru": "Правой ногой."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No se acciona con el pie.",
          "en": "It is not operated with the foot.",
          "ru": "Не управляется ногой."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 417,
    "question": {
      "es": "La postura corporal del conductor de un motovehículo, en condiciones de conducción urbana, debe ser…",
      "en": "The body posture of the driver of a motorcycle, in urban driving conditions, should be…",
      "ru": "Положение тела водителя мототранспортного средства в условиях городского вождения должно быть…"
    },
    "answers": [
      {
        "text": {
          "es": "Un poco forzada, porque permite mejor maniobrabilidad.",
          "en": "A little forced, as it allows for better maneuverability.",
          "ru": "Немного напряженным, так как это обеспечивает лучшую маневренность."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Relajada, sin encorvar el cuerpo más de lo necesario.",
          "en": "Relaxed, without hunching the body more than necessary.",
          "ru": "Расслабленным, без излишнего наклона тела."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Encorvando el cuerpo, lo más aerodinámica posible.",
          "en": "Hunched over, as aerodynamic as possible.",
          "ru": "С наклоном тела, как можно более аэродинамичным."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 418,
    "question": {
      "es": "La posición corporal para conducir un motovehículo recomendada es…",
      "en": "The recommended body position for driving a motorcycle is…",
      "ru": "Рекомендуемое положение тела для управления мототранспортным средством…"
    },
    "answers": [
      {
        "text": {
          "es": "Erguida y forzada.",
          "en": "Upright and forced.",
          "ru": "Прямым и напряженным."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Centrada y relajada.",
          "en": "Centered and relaxed.",
          "ru": "Центрированным и расслабленным."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Lo más avanzada posible.",
          "en": "As far forward as possible.",
          "ru": "Как можно ближе к передней части."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 419,
    "question": {
      "es": "¿Cómo deben encontrarse los neumáticos para comprobar la correcta presión de aire?",
      "en": "How should the tires be to check the correct air pressure?",
      "ru": "Как должны находиться шины для проверки правильного давления воздуха?"
    },
    "answers": [
      {
        "text": {
          "es": "Fríos.",
          "en": "Cold.",
          "ru": "Холодными."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calientes.",
          "en": "Hot.",
          "ru": "Горячими."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es indistinto, al ser de caucho se mantienen aislados de la temperatura.",
          "en": "It is indifferent, as they are made of rubber and remain insulated from temperature.",
          "ru": "Не имеет значения, так как резина изолирует от температуры."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 420,
    "question": {
      "es": "¿En qué momento es necesario renovar el siguiente elemento de seguridad? Cuando la profundidad del dibujo es menor de…",
      "en": "When is it necessary to renew the following safety element? When the tread depth is less than…",
      "ru": "Когда необходимо заменить следующий элемент безопасности? Когда глубина протектора меньше…"
    },
    "answers": [
      {
        "text": {
          "es": "1,6 mm.",
          "en": "1.6 mm.",
          "ru": "1,6 мм."
        },
        "correct": false
      },
      {
        "text": {
          "es": "1,0 mm.",
          "en": "1.0 mm.",
          "ru": "1,0 мм."
        },
        "correct": true
      },
      {
        "text": {
          "es": "0,5 mm.",
          "en": "0.5 mm.",
          "ru": "0,5 мм."
        },
        "correct": false
      }
    ],
    "image": "/questions/a51.jpg"
  },
  {
    "id": 421,
    "question": {
      "es": "¿Cuál es la rueda motriz del siguiente vehículo?",
      "en": "What is the driving wheel of the following vehicle?",
      "ru": "Какое колесо является ведущим у следующего транспортного средства?"
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
          "en": "Both answers, A and B, are correct.",
          "ru": "Оба ответа, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/a52.jpg"
  },
  {
    "id": 422,
    "question": {
      "es": "En relación al peso transportado en este vehículo, ¿qué debe realizar el conductor antes de circular?",
      "en": "Regarding the weight carried in this vehicle, what should the driver do before driving?",
      "ru": "В связи с весом, перевозимым этим транспортным средством, что должен сделать водитель перед движением?"
    },
    "answers": [
      {
        "text": {
          "es": "Adecuar la presión según indicación del fabricante del motovehículo.",
          "en": "Adjust the pressure according to the manufacturer's indication for the motorcycle.",
          "ru": "Отрегулировать давление в соответствии с указаниями производ��теля мототранспортного средства."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Duplicar la presión en las cubiertas, para tener mayor adherencia.",
          "en": "Double the pressure in the tires for better grip.",
          "ru": "Удвоить давление в шинах для лучшего сцепления."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducir la presión en las cubiertas, para tener mayor adherencia.",
          "en": "Reduce the pressure in the tires for better grip.",
          "ru": "Снизить давление в шинах для лучшего сцепления."
        },
        "correct": false
      }
    ],
    "image": "/questions/a53.jpg"
  },
  {
    "id": 423,
    "question": {
      "es": "El siguiente elemento de seguridad, ¿debe ser sustituido?",
      "en": "Should the following safety element be replaced?",
      "ru": "Следующий элемент безопасности, должен быть заменен?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, por otro en buen estado.",
          "en": "Yes, with another in good condition.",
          "ru": "Да, на другой в хорошем состоянии."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, ya que la única prohibición es circular con neumáticos que presenten cortes o deformaciones.",
          "en": "No, as the only prohibition is to drive with tires that have cuts or deformations.",
          "ru": "Нет, так как единственное запрещение - это движение на шинах с порезами или деформациями."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque así el vehículo se desliza mejor y consume menos combustible.",
          "en": "No, because this way the vehicle slides better and consumes less fuel.",
          "ru": "Нет, потому что так транспортное средство лучше скользит и потребляет меньше топлива."
        },
        "correct": false
      }
    ],
    "image": "/questions/a54.jpg"
  },
  {
    "id": 424,
    "question": {
      "es": "Cuando la cubierta de un motovehículo tiene más presión que la adecuada…",
      "en": "When the tire of a motorcycle has more pressure than appropriate…",
      "ru": "Когда шина мототранспортного средства имеет больше давления, чем необходимо…"
    },
    "answers": [
      {
        "text": {
          "es": "El motovehículo podrá doblar mejor.",
          "en": "The motorcycle will be able to turn better.",
          "ru": "Мототранспортное средство сможет лучше поворачивать."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El motovehículo podrá frena mejor.",
          "en": "The motorcycle will be able to brake better.",
          "ru": "Мототранспортное средство сможет лучше тормозить."
        },
        "correct": false
      },
      {
        "text": {
          "es": "El motovehículo tiene menor adherencia a la calzada.",
          "en": "The motorcycle has less grip on the road.",
          "ru": "У мототранспортного средства меньше сцепление с дорогой."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 425,
    "question": {
      "es": "¿Qué neumático sufre mayor desgaste en este vehículo?",
      "en": "Which tire suffers more wear in this vehicle?",
      "ru": "Какая ши��а изнашивается быстрее на этом транспортном средстве?"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Оба ответа, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/a55.jpg"
  },
  {
    "id": 426,
    "question": {
      "es": "Al realizar con un motovehículo un giro muy cerrado, a una velocidad de 30 km/h, ¿qué puede suceder si en dicho giro aprieta fuertemente el freno delantero?",
      "en": "When making a very tight turn with a motorcycle at a speed of 30 km/h, what can happen if the front brake is applied hard during that turn?",
      "ru": "При выполнении очень резкого поворота на мотоцикле со скоростью 30 км/ч, что может произойти, если в этом повороте сильно нажать на передний тормоз?"
    },
    "answers": [
      {
        "text": {
          "es": "Nada, debido a que a esa velocidad el efecto giroscópico estabilizará el motovehículo.",
          "en": "Nothing, because at that speed the gyroscopic effect will stabilize the motorcycle.",
          "ru": "Ничего, так как на этой скорости гироскопический эффект стабилизирует мототранспортное средство."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que la rueda delantera quede bloqueada y produzca una caída.",
          "en": "The front wheel may lock and cause a fall.",
          "ru": "Переднее колесо заблокируется и произойдет падение."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que la rueda trasera quede bloqueada por la fuerza cinética y se produzca una caída.",
          "en": "The rear wheel may lock due to kinetic force and cause a fall.",
          "ru": "Заднее колесо заблокируется за счет кинетической силы и произойдет падение."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 427,
    "question": {
      "es": "Generalmente, el freno delantero de una moto se acciona con…",
      "en": "Generally, the front brake of a motorcycle is operated with…",
      "ru": "В общем, передний тормоз мотоцикла управляется…"
    },
    "answers": [
      {
        "text": {
          "es": "La opción A.",
          "en": "Option A.",
          "ru": "Вариант A."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La opción B.",
          "en": "Option B.",
          "ru": "Вариант B."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ambas respuestas, la A y la B son correctas.",
          "en": "Both answers, A and B, are correct.",
          "ru": "Оба ответа, A и B, верны."
        },
        "correct": false
      }
    ],
    "image": "/questions/a56.jpg"
  },
  {
    "id": 428,
    "question": {
      "es": "Si frena un motovehículo en línea recta y mantiene apretadas sus rodillas contra el depósito de combustible, conseguirá que…",
      "en": "If a motorcycle brakes in a straight line and keeps its knees pressed against the fuel tank, it will achieve...",
      "ru": "Если мотоцикл тормозит на прямой и держит колени прижатыми к топливному баку, он добьется того, что…"
    },
    "answers": [
      {
        "text": {
          "es": "El motovehículo, gracias a la fuerza centrífuga, no salga de la calzada.",
          "en": "The motorcycle, thanks to centrifugal force, will not leave the roadway.",
          "ru": "Мотоцикл, благодаря центробежной силе, не выйдет за пределы дороги."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Su cuerpo se mantenga más estable y no se deslice hacia adelante.",
          "en": "Your body will remain more stable and will not slide forward.",
          "ru": "Ваше тело будет более устойчивым и не соскользнет вперед."
        },
        "correct": true
      },
      {
        "text": {
          "es": "El freno trasero sea más eficaz que el delantero.",
          "en": "The rear brake will be more effective than the front one.",
          "ru": "Задний тормоз будет более эффективным, чем передний."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 429,
    "question": {
      "es": "Si se tiene una distancia corta para detenerse, ¿cómo debería frenar un motovehículo para que sea seguro?",
      "en": "If there is a short distance to stop, how should a motorcycle brake to be safe?",
      "ru": "Если у вас короткое расстояние для остановки, как следует тормозить мотоцикл, чтобы это было безопасно?"
    },
    "answers": [
      {
        "text": {
          "es": "Usando sólo el freno trasero.",
          "en": "By using only the rear brake.",
          "ru": "Используя только задний тормоз."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Usando correctamente ambos frenos.",
          "en": "By correctly using both brakes.",
          "ru": "Правильно используя оба тормоза."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Accionando fuertemente el freno delantero.",
          "en": "By strongly applying the front brake.",
          "ru": "Сильно нажимая на передний тормоз."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 430,
    "question": {
      "es": "Según la Ley 2148, ¿los motovehículos deben estar provistos de un dispositivo que asegure un frenado eficaz, rápido o progresivo en TODAS las ruedas?",
      "en": "According to Law 2148, must motorcycles be equipped with a device that ensures effective, quick, or progressive braking on ALL wheels?",
      "ru": "Согласно Закону 2148, должны ли мотоц��клы быть оснащены устройством, обеспечивающим эффективное, быстрое или прогрессивное торможение на ВСЕХ колесах?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí. Aplica a todos los modelos independientemente al número de ruedas que tenga.",
          "en": "Yes. It applies to all models regardless of the number of wheels they have.",
          "ru": "Да. Это касается всех моделей независимо от количества колес."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, salvo los triciclos y cuatriciclos a quienes la Ley los exceptúa de que sea en todas sus ruedas.",
          "en": "Yes, except for tricycles and quadricycles, which the law exempts from having it on all their wheels.",
          "ru": "Да, за исключением трициклов и квадрициклов, которые Закон освобождает от этого требования на всех их колесах."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, salvo los ciclomotores que tienen dicha obligación en la rueda trasera.",
          "en": "Yes, except for mopeds, which have this obligation on the rear wheel.",
          "ru": "Да, за исключением мопедов, которые обязаны иметь такое устройство на заднем колесе."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 431,
    "question": {
      "es": "Es obligatorio que los motovehículos tengan…",
      "en": "It is mandatory for motorcycles to have...",
      "ru": "Обязательно, чтобы мотоциклы имели…"
    },
    "answers": [
      {
        "text": {
          "es": "Un dispositivo que asegure el frenado en todas las ruedas.",
          "en": "A device that ensures braking on all wheels.",
          "ru": "Устройство, обеспечивающее торможение на всех колесах."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Un único freno, en la parte trasera.",
          "en": "A single brake, at the rear.",
          "ru": "Один тормоз, на задней части."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Un único freno, en la parte delantera.",
          "en": "A single brake, at the front.",
          "ru": "Один тормоз, на передней части."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 432,
    "question": {
      "es": "En un motovehículo, la distancia del asiento al piso…",
      "en": "In a motorcycle, the distance from the seat to the floor...",
      "ru": "На мотоцикле расстояние от сиденья до пола…"
    },
    "answers": [
      {
        "text": {
          "es": "Incide en la estabilidad y el equilibrio.",
          "en": "Affects stability and balance.",
          "ru": "Влияет на устойчивость и равновесие."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No tiene relevancia.",
          "en": "Is not relevant.",
          "ru": "Не имеет значения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Es fundamental para el frenado.",
          "en": "Is essential for braking.",
          "ru": "Это важно для ��орможения."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 433,
    "question": {
      "es": "Si el sistema de amortiguación delantero de su vehículo se encuentra en mal estado, ¿puede afectar esta anomalía la conducción?",
      "en": "If the front suspension system of your vehicle is in poor condition, can this anomaly affect driving?",
      "ru": "Если передняя подвеска вашего транспортного средства находится в плохом состоянии, может ли эта аномалия повлиять на управление?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque al ser el sistema de suspensión delantero el deteriorado, éste no influirá en la conducción.",
          "en": "No, because if the front suspension system is deteriorated, it will not influence driving.",
          "ru": "Нет, потому что если передняя подвеска повреждена, это не повлияет на управление."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, puede afectar al correcto control del vehículo.",
          "en": "Yes, it can affect the proper control of the vehicle.",
          "ru": "Да, это может повлиять на правильное управление транспортным средством."
        },
        "correct": true
      },
      {
        "text": {
          "es": "No, porque si se encuentra correctamente la suspensión trasera, ésta asegurará el contacto adecuado de las ruedas con la calzada.",
          "en": "No, because if the rear suspension is in good condition, it will ensure proper contact of the wheels with the roadway.",
          "ru": "Нет, потому что если задняя подвеска в порядке, она обеспечит надлежащий контакт колес с дорогой."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 434,
    "question": {
      "es": "Si tiene que conducir un motovehículo por una zona resbaladiza, ¿qué precauciones debe tomar?",
      "en": "If you have to ride a motorcycle in a slippery area, what precautions should you take?",
      "ru": "Если вам нужно управлять мотоциклом по скользкой поверхности, какие меры предосторожности следует принять?"
    },
    "answers": [
      {
        "text": {
          "es": "Frenar en la zona para controlar la trayectoria.",
          "en": "Brake in the area to control the trajectory.",
          "ru": "Тормозить в зоне, чтобы контролировать траекторию."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Acelerar para pasar por la zona en el menor tiempo posible.",
          "en": "Accelerate to pass through the area in the shortest time possible.",
          "ru": "Ускориться, чтобы пройти через зону за минимальное время."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Disminuir la velocidad antes de llegar y mantener la moto vertical al pasar sobre ella.",
          "en": "Reduce speed before arriving and keep the motorcycle upright while passing over it.",
          "ru": "Снизить скорость перед тем, как подъехать, и держат�� мотоцикл вертикально, проезжая через нее."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 435,
    "question": {
      "es": "Si al conducir un motovehículo, usted sufre una caída que no le produce lesión alguna, ¿qué comportamiento debería adoptar si desea proseguir el viaje?",
      "en": "If while riding a motorcycle, you fall without sustaining any injury, what behavior should you adopt if you wish to continue the journey?",
      "ru": "Если при управлении мотоциклом вы упали и не получили травм, какое поведение следует принять, если вы хотите продолжить поездку?"
    },
    "answers": [
      {
        "text": {
          "es": "Reanudar inmediatamente la marcha para no entorpecer la circulación.",
          "en": "Resume immediately to avoid obstructing traffic.",
          "ru": "Немедленно возобновить движение, чтобы не мешать движению."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Esperar por lo menos una hora antes de reanudar la marcha.",
          "en": "Wait at least an hour before resuming.",
          "ru": "Подождать как минимум час перед возобновлением движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Antes de continuar circulando, realizar las comprobaciones necesarias para valorar el estado en el que se encuentra el motovehículo.",
          "en": "Before continuing to ride, perform the necessary checks to assess the condition of the motorcycle.",
          "ru": "Перед тем как продолжить движение, провести необходимые проверки, чтобы оценить состояние мотоцикла."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 436,
    "question": {
      "es": "Frente a la siguiente situación, ¿qué posición debe adoptar el acompañante de un motovehículo?",
      "en": "In the following situation, what position should the passenger of a motorcycle adopt?",
      "ru": "В следующей ситуации, какую позицию должен занять пассажир мотоцикла?"
    },
    "answers": [
      {
        "text": {
          "es": "La misma que adopte el conductor pero anticipándose a él.",
          "en": "The same as the driver but anticipating their movements.",
          "ru": "Такую же, как и водитель, но предвосхищая его."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La contraria a la que adopte el conductor, para así contrarrestar la fuerza centrífuga.",
          "en": "The opposite of what the driver adopts, to counteract centrifugal force.",
          "ru": "Противоположную той, которую занимает водитель, чтобы компенсировать центробежную силу."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La misma posición e inclinación que adopte el conductor.",
          "en": "The same position and inclination as the driver.",
          "ru": "Такую же позицию и наклон, как у водителя."
        },
        "correct": true
      }
    ],
    "image": "/questions/a57.jpg"
  },
  {
    "id": 437,
    "question": {
      "es": "Si un motovehículo dispone de 2 baúles laterales para llevar carga, ¿cómo es recomendable utilizarlas?",
      "en": "If a motorcycle has 2 side trunks for carrying cargo, how is it advisable to use them?",
      "ru": "Если у мотоцикла есть 2 боковых кофра для груза, как рекомендуется их использовать?"
    },
    "answers": [
      {
        "text": {
          "es": "Cargarlas, de modo que ambas maletas queden aproximadamente con el mismo peso, para colaborar con la estabilidad.",
          "en": "Load them so that both bags have approximately the same weight, to assist with stability.",
          "ru": "Загружать их так, чтобы оба кофра имели примерно одинаковый вес, чтобы способствовать устойчивости."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cargar más la maleta del lado derecho, para contrarrestar el peso al realizar un sobrepaso.",
          "en": "Load more on the right bag, to counterbalance the weight when overtaking.",
          "ru": "Больше загружать кофр с правой стороны, чтобы компенсировать вес при обгоне."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cargar con más peso el baúl del lado izquierdo, para favorecer la reincorporación en caso de realizar un sobrepaso.",
          "en": "Load the left trunk with more weight, to aid in rejoining the lane when overtaking.",
          "ru": "Больше загружать кофр с левой стороны, чтобы облегчить возвращение в ряд при обгоне."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 438,
    "question": {
      "es": "Este motociclista y sus acompañantes están circulando de manera segura y correcta.",
      "en": "This motorcyclist and their passengers are riding safely and correctly.",
      "ru": "Этот мотоциклист и его пассажиры движутся безопасно и правильно."
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
    "image": "/questions/a58.jpg"
  },
  {
    "id": 439,
    "question": {
      "es": "La manera de circular de esta niña de 5 años es incorrecta.",
      "en": "The way this 5-year-old girl is riding is incorrect.",
      "ru": "Способ передвижения этой 5-летней девочки неправильный."
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
    "image": "/questions/a59.jpg"
  },
  {
    "id": 440,
    "question": {
      "es": "Según la Ley 2148, el niño de 10 años de edad que se observa detrás del conductor, se encuentra circulando de manera segura y correcta.",
      "en": "According to Law 2148, the 10-year-old child observed behind the driver is riding safely and correctly.",
      "ru": "Согласно Закону 2148, 10-летний ребенок, который наблюдается за водителем, движется безопасно и правильно."
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
    "image": "/questions/a60.jpg"
  },
  {
    "id": 441,
    "question": {
      "es": "El niño que se observa delante del conductor, se encuentra circulando de manera segura y correcta.",
      "en": "The child observed in front of the driver is riding safely and correctly.",
      "ru": "Ребенок, который наблюдается перед водителем, движется безопасно и правильно."
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
    "image": "/questions/a61.jpg"
  },
  {
    "id": 442,
    "question": {
      "es": "Según la Ley 2148, ¿es correcta la manera de circular del acompañante?",
      "en": "According to Law 2148, is the way the passenger is riding correct?",
      "ru": "Согласно Закону 2148, правильный ли способ передвижения у пассажира?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, pero sólo cuando el conductor sea el padre, la madre o tutor encargado.",
          "en": "Yes, but only when the driver is the father, mother, or responsible guardian.",
          "ru": "Да, но только если водитель - отец, мать или опекун."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, siempre y cuando utilice un casco adecuado a su talla y no se interponga en el campo visual del conductor.",
          "en": "Yes, as long as they wear a helmet that fits properly and do not obstruct the driver's field of vision.",
          "ru": "Да, при условии, что он использует шлем, подходящий по размеру, и не мешает полю зрения водителя."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, porque los acompañantes deben ser mayores de 16 años y circular en el asiento trasero.",
          "en": "No, because passengers must be over 16 years old and ride in the back seat.",
          "ru": "Нет, потому что пассажиры должны быть старше 16 ле�� и находиться на заднем сиденье."
        },
        "correct": true
      }
    ],
    "image": "/questions/a62.jpg"
  },
  {
    "id": 443,
    "question": {
      "es": "Este niño, menor de 12 años, circula de manera segura y correcta ya que está utilizando un sistema de retención infantil (SRI).",
      "en": "This child, under 12 years old, is riding safely and correctly as they are using a child restraint system (SRI).",
      "ru": "Этот ребенок младше 12 лет движется безопасно и правильно, так как использует детское удерживающее устройство (ДУУ)."
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
    "image": "/questions/a63.jpg"
  },
  {
    "id": 444,
    "question": {
      "es": "La Ley de tránsito en Argentina exige el uso de Dispositivos de Retención Infantil (SRI) para llevar menores de edad en motovehículos.",
      "en": "The traffic law in Argentina requires the use of Child Restraint Devices (SRI) to carry minors on motorcycles.",
      "ru": "Закон о дорожном движении в Аргентине требует использования детских удерживающих устройств (ДУУ) для перевозки несовершеннолетних на мотоциклах."
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
      "en": "Up to two people can ride on a motorcycle, only if it has a double seat, footrests, and handgrips.",
      "ru": "На мотоцикле могут находиться до двух человек, только если он оборудован двойным сиденьем, подножками и ручками."
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
      "en": "To ride in C.A.B.A., is the driver of a motorcycle required to have the license plate number printed on the reflective vest?",
      "ru": "Для передвижения в C.A.B.A. обязан ли водитель мотоцикла носить номерной знак, напечатанный на светоотражающем жилете?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, en la parte delantera y trasera.",
          "en": "Yes, on the front and back.",
          "ru": "Да, спереди и сзади."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. El uso del chaleco es obligatorio pero no la impresión de la patente.",
          "en": "No. The use of the vest is mandatory but not the printing of the license plate.",
          "ru": "Нет. Использование жилета обязательно, но печать номера не обязательна."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No. Sólo es obligatorio para el acompañante.",
          "en": "No. It is only mandatory for the passenger.",
          "ru": "Нет. Это обязательно только для пассажира."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 447,
    "question": {
      "es": "En relación al chaleco reflectante y de acuerdo al Código de Tránsito y Transporte de CABA, ¿es correcta la manera de circular observada en la siguiente imagen?",
      "en": "Regarding the reflective vest and according to the Traffic and Transport Code of CABA, is the way of riding observed in the following image correct?",
      "ru": "Что касается светоотражающего жилета и в соответствии с Кодексом дорожного движения и транспорта CABA, правильный ли способ передвижения, наблюдаемый на следующем изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Sí, su uso es obligatorio sólo en caso de escasa visibilidad.",
          "en": "Yes, its use is mandatory only in cases of low visibility.",
          "ru": "Да, его использование обязательно только в условиях плохой видимости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, su uso es obligatorio sólo si se circula en la zona del Microcentro porteño..",
          "en": "Yes, its use is mandatory only if riding in the Microcentro area.",
          "ru": "Да, его использование обязательно только если движение происходит в зоне Микроцентра."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, su uso es obligatorio para el acompañante.",
          "en": "Yes, its use is mandatory for the passenger.",
          "ru": "Да, его использование обязательно для пассажира."
        },
        "correct": true
      }
    ],
    "image": "/questions/a64.jpg"
  },
  {
    "id": 448,
    "question": {
      "es": "Según el Código de Tránsito y Transporte de CABA, los conductores de motovehículos son responsables…",
      "en": "According to the Traffic and Transport Code of CABA, motorcycle drivers are responsible…",
      "ru": "Согласно Кодексу дорожного движения и транспорта CABA, водители мотоциклов несут ответственность…"
    },
    "answers": [
      {
        "text": {
          "es": "De que su eventual acompañante no posea antecedentes penales.",
          "en": "For ensuring that their potential passenger has no criminal record.",
          "ru": "За то, что их возможный пассажир не имеет судимости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "De que su eventual acompañante utilice el casco protector homologado o certificado, el chaleco reflectante con el número de dominio impreso y que no tenga un dosaje de alcohol superior a 0,5 g/l de sangre.",
          "en": "For ensuring that their potential passenger wears an approved or certified helmet, the reflective vest with the license plate number printed, and that they do not have a blood alcohol level exceeding 0.5 g/l.",
          "ru": "За то, что их возможный пассажир использует сертифицированный защитный шлем, светоотражающий жилет с напечатанным номером и что уровень алкоголя в крови не превышает 0,5 г/л."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ambas respuestas (A y B) son correctas.",
          "en": "Both answers (A and B) are correct.",
          "ru": "Оба ответа (A и B) правильные."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 449,
    "question": {
      "es": "El conductor de un motovehículo, ¿es responsable de que el acompañante que traslada tenga debidamente colocado el casco protector?",
      "en": "Is the driver of a motorcycle responsible for ensuring that the passenger they are transporting is properly wearing the helmet?",
      "ru": "Водитель мотоцикла несет ответственность за то, чтобы пассажир, которого он перевозит, правильно носил защитный шлем?"
    },
    "answers": [
      {
        "text": {
          "es": "No, porque cada persona adulta es responsable de sus propios actos.",
          "en": "No, because each adult is responsible for their own actions.",
          "ru": "Нет, потому что каждый взрослый несет ответственность за свои собственные действия."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sólo si es menor de edad.",
          "en": "Only if they are a minor.",
          "ru": "Только если он несовершеннолетний."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Sí, porque es responsable de lo que respecta a ese vehículo y sus usuarios.",
          "en": "Yes, because they are responsible for what pertains to that vehicle and its users.",
          "ru": "Да, потому что он отвечает за этот транспорт и его пользователей."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 450,
    "question": {
      "es": "En relación a los elementos de seguridad obligatorios de un motociclista, ¿qué deben hacer los agentes de control de tránsito frente a esta situación?",
      "en": "Regarding the mandatory safety equipment for a motorcyclist, what should traffic control agents do in this situation?",
      "ru": "Что должны делать контролирующие органы в отношении обязательных средств безопасности мотоциклиста в данной ситуации?"
    },
    "answers": [
      {
        "text": {
          "es": "Deben labrar un acta de infracción al motociclista.",
          "en": "They must issue an infringement report to the motorcyclist.",
          "ru": "Они должны составить протокол нарушения для мотоциклиста."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Deben labrar un acta de infracción al motociclista y retener el motovehículo.",
          "en": "They must issue an infringement report to the motorcyclist and seize the motorcycle.",
          "ru": "Они должны составить протокол нарушения для мотоциклиста и задержать мотоцикл."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Deben labrar un acta de infracción al motociclista, retener la licencia de conducir y remitir el motovehículo.",
          "en": "They must issue an infringement report to the motorcyclist, seize the driver's license, and impound the motorcycle.",
          "ru": "Они должны с��ставить протокол нарушения для мотоциклиста, задержать водительские права и отправить мотоцикл."
        },
        "correct": true
      }
    ],
    "image": "/questions/a65.jpg"
  },
  {
    "id": 451,
    "question": {
      "es": "Según la Ley 2148, el acompañante de un motovehículo…",
      "en": "According to Law 2148, the passenger of a motorcycle…",
      "ru": "Согласно Закону 2148, пассажир мотоцикла…"
    },
    "answers": [
      {
        "text": {
          "es": "Debe circular con el casco con la numeración del dominio, correctamente colocado.",
          "en": "Must ride with the helmet with the license plate number properly placed.",
          "ru": "Должен передвигаться в шлеме с номером, правильно надетым."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe circular con el casco correctamente colocado y un chaleco reflectante; ambos deberán tener el número de dominio del motovehículo.",
          "en": "Must ride with the helmet properly placed and a reflective vest; both must have the motorcycle's license plate number.",
          "ru": "Должен передвигаться в шлеме, правильно надетом, и светоотражающем жилете; оба должны иметь номер мотоцикла."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Debe circular con el casco correctamente colocado y un chaleco reflectante con el número de dominio del motovehículo.",
          "en": "Must ride with the helmet properly placed and a reflective vest with the motorcycle's license plate number.",
          "ru": "Должен передвигаться в шлеме, правильно надетом, и светоотражающем жилете с номером мотоцикла."
        },
        "correct": true
      }
    ]
  },
  {
    "id": 452,
    "question": {
      "es": "La edad mínima para obtener una licencia de conducir motovehículos, excepto ciclomotores, es de 17 años.",
      "en": "The minimum age to obtain a motorcycle driver's license, except for mopeds, is 17 years.",
      "ru": "Минимальный возраст для получения водительских прав на мотоциклы, кроме мопедов, составляет 17 лет."
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
      "en": "What is the minimum age required to obtain a moped driver's license?",
      "ru": "Какой минимальный возраст требуется для получения водительских прав на мопеды?"
    },
    "answers": [
      {
        "text": {
          "es": "18 años.",
          "en": "18 years.",
          "ru": "18 лет."
        },
        "correct": false
      },
      {
        "text": {
          "es": "16 años.",
          "en": "16 years.",
          "ru": "16 лет."
        },
        "correct": true
      },
      {
        "text": {
          "es": "21 años.",
          "en": "21 years.",
          "ru": "21 год."
        },
        "correct": false
      }
    ]
  },
  {
    "id": 454,
    "question": {
      "es": "Según la Ley Nº 2148, ¿está permitido el faro delantero de este motovehículo?",
      "en": "According to Law No. 2148, is the front headlight of this motorcycle allowed?",
      "ru": "Согласно Закону № 2148, разрешено ли использование переднего фары этого мототранспортного средства?"
    },
    "answers": [
      {
        "text": {
          "es": "No, ya que debería tener dos faros.",
          "en": "No, as it should have two headlights.",
          "ru": "Нет, так как должно быть две фары."
        },
        "correct": false
      },
      {
        "text": {
          "es": "No, ya que debería ser blanco.",
          "en": "No, as it should be white.",
          "ru": "Нет, так как она должна быть белой."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Sí, ya que la Ley sólo indica la obligación del uso de un faro pero no especifica su color.",
          "en": "Yes, as the law only indicates the obligation to use one headlight but does not specify its color.",
          "ru": "Да, так как Закон только указывает на обязательность использования фары, но не уточняет ее цвет."
        },
        "correct": false
      }
    ],
    "image": "/questions/a66.jpg"
  },
  {
    "id": 455,
    "question": {
      "es": "¿Qué tipo de señal es la siguiente imagen?",
      "en": "What type of sign is the following image?",
      "ru": "Какой тип знака изображен на следующем изображении?"
    },
    "answers": [
      {
        "text": {
          "es": "Senda peatonal.",
          "en": "Pedestrian crossing.",
          "ru": "Пешеходный переход."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Personas trabajando.",
          "en": "People working.",
          "ru": "Люди, работающие."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Cruce peatonal de máximo peligro.",
          "en": "Pedestrian crossing of maximum danger.",
          "ru": "Пешеходный переход с максимальной опасностью."
        },
        "correct": false
      }
    ],
    "image": "/questions/b72.jpg"
  },
  {
    "id": 456,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibido estacionar por la existencia de un aeropuerto cercano.",
          "en": "No parking due to the existence of a nearby airport.",
          "ru": "Запрещено парковаться из-за близости аэропорта."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Vuelos a baja altura de aviones sobre la vía, por la proximidad de aeródromo o aeropuerto.",
          "en": "Low-flying aircraft over the road, due to the proximity of an airfield or airport.",
          "ru": "Низколетящие самолеты над дорогой из-за близости аэродрома или аэропорта."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibido estacionar y detenerse por la existencia de un aeropuerto cercano.",
          "en": "No parking and stopping due to the existence of a nearby airport.",
          "ru": "Запрещено парковаться и останавливаться из-за близости аэропорта."
        },
        "correct": false
      }
    ],
    "image": "/questions/b223.jpg"
  },
  {
    "id": 457,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Proximidad de bosques.",
          "en": "Proximity of forests.",
          "ru": "Близость лесов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zonas de palmeras.",
          "en": "Palm tree areas.",
          "ru": "Зоны пальм."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Vientos fuertes laterales.",
          "en": "Strong lateral winds.",
          "ru": "Сильные боковые ветры."
        },
        "correct": true
      }
    ],
    "image": "/questions/b224.jpg"
  },
  {
    "id": 458,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce de jinetes.",
          "en": "Horse crossing.",
          "ru": "Перекресток для всадников."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de circular con animales.",
          "en": "Prohibition of traveling with animals.",
          "ru": "Запрет на движение с животными."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Camino peligroso por presencia de animales sueltos.",
          "en": "Dangerous road due to the presence of loose animals.",
          "ru": "Опасная дорога из-за наличия бродячих животных."
        },
        "correct": false
      }
    ],
    "image": "/questions/b225.jpg"
  },
  {
    "id": 459,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Camino resbaladizo.",
          "en": "Slippery road.",
          "ru": "Скользкая дорога."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Camino sinuoso.",
          "en": "Winding road.",
          "ru": "Извилистая дорога."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Camino cuesta arriba.",
          "en": "Uphill road.",
          "ru": "Подъемная дорога."
        },
        "correct": false
      }
    ],
    "image": "/questions/b226.jpg"
  },
  {
    "id": 460,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Aproximación a un puente levadizo, rotatorio o flotante.",
          "en": "Approach to a drawbridge, rotary, or floating bridge.",
          "ru": "Приближение к подъемному, вращающемуся или плавучему мосту."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Presencia de un puente de menor ancho que el resto de la vía.",
          "en": "Presence of a bridge narrower than the rest of the road.",
          "ru": "Наличие моста меньшей ширины, чем остальная часть дороги."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Proximidad de un paso a nivel.",
          "en": "Proximity of a level crossing.",
          "ru": "Близость железнодорожного переезда."
        },
        "correct": false
      }
    ],
    "image": "/questions/b227.jpg"
  },
  {
    "id": 461,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de doble mano.",
          "en": "Start of two-way traffic.",
          "ru": "Начало двустороннего движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Estrechamiento (en una sola mano).",
          "en": "Narrowing (in one direction).",
          "ru": "Сужение (в одну сторону)."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Encrucijada (bifurcación).",
          "en": "Intersection (fork).",
          "ru": "Перекресток (разветвление)."
        },
        "correct": true
      }
    ],
    "image": "/questions/b228.jpg"
  },
  {
    "id": 462,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de doble mano.",
          "en": "Start of two-way traffic.",
          "ru": "Начало двустороннего движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Encrucijada (bifurcación).",
          "en": "Intersection (fork).",
          "ru": "Перекресток (разветвление)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estrechamiento (en una sola mano).",
          "en": "Narrowing (in one direction).",
          "ru": "Сужение (в одну сторону)."
        },
        "correct": false
      }
    ],
    "image": "/questions/b229.jpg"
  },
  {
    "id": 463,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Túnel.",
          "en": "Tunnel.",
          "ru": "Туннель."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Puente angosto.",
          "en": "Narrow bridge.",
          "ru": "Узкий мост."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Altura mínima.",
          "en": "Minimum height.",
          "ru": "Минимальная высота."
        },
        "correct": false
      }
    ],
    "image": "/questions/b230.jpg"
  },
  {
    "id": 464,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Encrucijada.",
          "en": "Intersection.",
          "ru": "Перекресток."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cruce de caminos.",
          "en": "Crossroads.",
          "ru": "Перекресток дорог."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Incorporación de tránsito lateral.",
          "en": "Incorporation of lateral traffic.",
          "ru": "Включение бокового движения."
        },
        "correct": true
      }
    ],
    "image": "/questions/b231.jpg"
  },
  {
    "id": 465,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de doble circulación.",
          "en": "Start of two-way circulation.",
          "ru": "Начало двустороннего движения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "Divided roadway.",
          "ru": "Разделенная проезжая часть."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Camino sinuoso.",
          "en": "Winding road.",
          "ru": "Извилистая дорога."
        },
        "correct": false
      }
    ],
    "image": "/questions/b232.jpg"
  },
  {
    "id": 466,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Rotonda.",
          "en": "Roundabout.",
          "ru": "Кольцо."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Peligro extremo de rotonda.",
          "en": "Extreme danger of roundabout.",
          "ru": "Экстремальная опасность кольца."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Preferencia de avance.",
          "en": "Right of way.",
          "ru": "Предпочтение проезда."
        },
        "correct": false
      }
    ],
    "image": "/questions/b233.jpg"
  },
  {
    "id": 467,
    "question": {
      "es": "¿Qué indica esta señal preventiva?",
      "en": "What does this preventive sign indicate?",
      "ru": "Что указывает этот предупредительный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica que de la elevación próxima a la ruta, pueden desprenderse rocas o partes que ruedan sobre la calzada.",
          "en": "Indicates that rocks or parts may detach from the elevation near the road and roll onto the roadway.",
          "ru": "Указывает, что с близлежащей высоты к дороге могут срываться камни или части, которые катятся по проезжей части."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica que circulamos por una zona selvática.",
          "en": "Indicates that we are traveling through a jungle area.",
          "ru": "Указывает, что мы движемся по лесной зоне."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica que por la vía en la que se circula, la calzada presenta irregularidades.",
          "en": "Indicates that the roadway has irregularities on the route being traveled.",
          "ru": "Указывает, что на дороге, по которой мы движемся, имеются неровности."
        },
        "correct": false
      }
    ],
    "image": "/questions/b234.jpg"
  },
  {
    "id": 468,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Niños jugando.",
          "en": "Children playing.",
          "ru": "Дети играют."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Zona escolar.",
          "en": "School zone.",
          "ru": "Школьная зона."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calle peatonal.",
          "en": "Pedestrian street.",
          "ru": "Пешеходная улица."
        },
        "correct": false
      }
    ],
    "image": "/questions/b235.jpg"
  },
  {
    "id": 469,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Estrechamiento (en las dos manos).",
          "en": "Narrowing (in both directions).",
          "ru": "Сужение (в обе стороны)."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "Divided roadway.",
          "ru": "Разделенная проезжая часть."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Inicio doble mano.",
          "en": "Start of two-way traffic.",
          "ru": "Начало двустороннего движения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b236.jpg"
  },
  {
    "id": 470,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Estrechamiento (en una mano).",
          "en": "Narrowing (in one direction).",
          "ru": "Сужение (в одну сторону)."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "Divided roadway.",
          "ru": "Разделенная проезжая часть."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Estrechamiento (en las dos manos).",
          "en": "Narrowing (in both directions).",
          "ru": "Сужение (в обе стороны)."
        },
        "correct": true
      }
    ],
    "image": "/questions/b237.jpg"
  },
  {
    "id": 471,
    "question": {
      "es": "Determine qué indica la señal vertical que a continuación se presenta:",
      "en": "Determine what the following vertical sign indicates:",
      "ru": "Определите, что указывает вертикальный знак, который будет представлен далее:"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce de peatones (Peligro máximo).",
          "en": "Pedestrian crossing (maximum danger).",
          "ru": "Пешеходный переход (максимальная опасность)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Peatones a la izquierda.",
          "en": "Pedestrians to the left.",
          "ru": "Пешеходы слева."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de circular. Zona exclusiva peatonal.",
          "en": "Prohibition of circulation. Pedestrian-only zone.",
          "ru": "Запрет на движение. Исключительно пешеходная зона."
        },
        "correct": false
      }
    ],
    "image": "/questions/b238.jpg"
  },
  {
    "id": 472,
    "question": {
      "es": "¿Cuál de estas señales indica “Cruce de Peatones (máximo peligro)”?",
      "en": "Which of these signs indicates 'Pedestrian Crossing (maximum danger)'?",
      "ru": "Какой из этих знаков указывает \"Пешеходный переход (максимальная опасность)\"?"
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
    "image": "/questions/b239.jpg"
  },
  {
    "id": 473,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce ferroviario.",
          "en": "Railroad crossing.",
          "ru": "Железнодорожный переезд."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estación ferroviaria.",
          "en": "Train station.",
          "ru": "Железнодорожная станция."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circulación exclusiva (ferrocarril).",
          "en": "Exclusive circulation (railroad).",
          "ru": "Исключительное движение (железная дорога)."
        },
        "correct": false
      }
    ],
    "image": "/questions/b240.jpg"
  },
  {
    "id": 474,
    "question": {
      "es": "Al visualizar esta señal de prevención, usted sabe que:",
      "en": "Upon seeing this warning sign, you know that:",
      "ru": "Увидев этот предупредительный знак, вы знаете, что:"
    },
    "answers": [
      {
        "text": {
          "es": "Se advierte la aproximación de una curva con pendiente ascendente.",
          "en": "It warns of the approach of a curve with an ascending slope.",
          "ru": "Предупреждается о приближении к повороту с восходящим уклоном."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se aproxima una curva cerrada.",
          "en": "A sharp curve is approaching.",
          "ru": "Приближается крутой поворот."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se aproxima un camino sinuoso.",
          "en": "A winding road is approaching.",
          "ru": "Приближается извилистая дорога."
        },
        "correct": false
      }
    ],
    "image": "/questions/b241.jpg"
  },
  {
    "id": 475,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce Ferroviario (Más de dos vías).",
          "en": "Railroad Crossing (More than two tracks).",
          "ru": "Железнодорожный переезд (более двух путей)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estación Ferroviaria.",
          "en": "Train Station.",
          "ru": "Железнодорожная станция."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Atención a Ferrocarril.",
          "en": "Attention to Railroad.",
          "ru": "Внимание к железной дороге."
        },
        "correct": false
      }
    ],
    "image": "/questions/b242.jpg"
  },
  {
    "id": 476,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Paneles de prevención.",
          "en": "Warning panels.",
          "ru": "Предупредительные панели."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de circular.",
          "en": "Prohibition of circulation.",
          "ru": "Запрет на движение."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Reducción de velocidad.",
          "en": "Speed reduction.",
          "ru": "Снижение скорости."
        },
        "correct": false
      }
    ],
    "image": "/questions/b243.jpg"
  },
  {
    "id": 477,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Panel de Prevención (Objeto Rígido).",
          "en": "Warning Panel (Rigid Object).",
          "ru": "Предупредительный знак (жестк��й объект)."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calzada Reducida.",
          "en": "Reduced roadway.",
          "ru": "Суженная проезжая часть."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Contramano.",
          "en": "Wrong way.",
          "ru": "Противоположное движение."
        },
        "correct": false
      }
    ],
    "image": "/questions/b244.jpg"
  },
  {
    "id": 478,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Cruce Ferroviario (por la derecha).",
          "en": "Railroad Crossing (to the right).",
          "ru": "Железнодорожный переезд (справа)."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de Girar.",
          "en": "Prohibition to Turn.",
          "ru": "Запрет на поворот."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Panel de Prevención (Curva).",
          "en": "Warning Panel (Curve).",
          "ru": "Предупредительный знак (поворот)."
        },
        "correct": true
      }
    ],
    "image": "/questions/b245.jpg"
  },
  {
    "id": 479,
    "question": {
      "es": "La señal que se muestra es una señal preventiva, de máximo peligro, que anuncia la existencia de un tramo de vía con fuerte pendiente descendente.",
      "en": "The sign shown is a preventive sign, of maximum danger, announcing the existence of a section of road with a steep descending slope.",
      "ru": "Знак, который показан, является предупредительным знаком, максимальной опасности, который сообщает о наличии участка дороги с сильным нисходящим уклоном."
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
    "image": "/questions/b246.jpg"
  },
  {
    "id": 480,
    "question": {
      "es": "Frente a esta señal, ¿qué sucede con la prioridad de avance en esa vía?",
      "en": "In front of this sign, what happens to the right of way on that road?",
      "ru": "Перед этим знаком, что происходит с приоритетом движения на этой дороге?"
    },
    "answers": [
      {
        "text": {
          "es": "Se tiene la prioridad de avance.",
          "en": "Right of way is maintained.",
          "ru": "Приоритет движения сохраняется."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Se pierde la prioridad de avance.",
          "en": "Right of way is lost.",
          "ru": "Приоритет движения теряется."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Esta señal no es indicativa de prioridad de avance.",
          "en": "This sign does not indicate right of way.",
          "ru": "Этот знак не указывает на приоритет движения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b247.jpg"
  },
  {
    "id": 481,
    "question": {
      "es": "¿Qué significa esta señal?",
      "en": "What does this sign mean?",
      "ru": "Что означает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica la prohibición de estacionamiento en el frente de entidades bancarias.",
          "en": "Indicates the prohibition of parking in front of banking institutions.",
          "ru": "Указывает на запрет парковки перед банковскими учреждениями."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica que la vía ante la cual se encuentra tiene sentido de circulación opuesto, y por lo tanto no se puede ingresar.",
          "en": "Indicates that the road ahead has an opposite direction of traffic, and therefore entry is not allowed.",
          "ru": "Указывает, что дорога, перед которой она находится, имеет противоположное направление движения, и, следовательно, нельзя заезжать."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica la prohibición de circulación de vehículos sin permiso de ingreso.",
          "en": "Indicates the prohibition of vehicle circulation without entry permission.",
          "ru": "Указывает на запрет движения транспортных средств без разрешения на въезд."
        },
        "correct": false
      }
    ],
    "image": "/questions/b248.jpg"
  },
  {
    "id": 482,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Que existe la opción de doblar hacia la derecha.",
          "en": "That there is an option to turn right.",
          "ru": "Что есть возможность повернуть направо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que hay un giro obligatorio hacia la derecha.",
          "en": "That there is a mandatory turn to the right.",
          "ru": "Что есть обязательный поворот направо."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que se aproxima una curva peligrosa con inclinación hacia la derecha.",
          "en": "That a dangerous curve is approaching with an incline to the right.",
          "ru": "Что приближается опасный поворот с наклоном вправо."
        },
        "correct": false
      }
    ],
    "image": "/questions/b249.jpg"
  },
  {
    "id": 483,
    "question": {
      "es": "La señal representada precede a una intersección con la OBLIGACIÓN de girar a la derecha.",
      "en": "The represented sign precedes an intersection with the OBLIGATION to turn right.",
      "ru": "Представленный знак предшествует перекрестку с ОБЯЗАТЕЛЬНЫМ поворотом направо."
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
    "image": "/questions/b250.jpg"
  },
  {
    "id": 484,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "No avanzar.",
          "en": "Do not proceed.",
          "ru": "Не продвигаться."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de doble mano.",
          "en": "Beginning of two-way traffic.",
          "ru": "Начало двустороннего движения."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de sentido único.",
          "en": "Beginning of one-way traffic.",
          "ru": "Начало одностороннего движения."
        },
        "correct": true
      }
    ],
    "image": "/questions/b251.jpg"
  },
  {
    "id": 485,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Sobrepasos por la derecha.",
          "en": "Overtaking on the right.",
          "ru": "Обгон справа."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Circulación exclusiva (camión).",
          "en": "Exclusive circulation (truck).",
          "ru": "Эксклюзивное движение (грузовик)."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Tránsito pesado a la derecha.",
          "en": "Heavy traffic to the right.",
          "ru": "Тяжелый транспорт справа."
        },
        "correct": true
      }
    ],
    "image": "/questions/b252.jpg"
  },
  {
    "id": 486,
    "question": {
      "es": "Esta señal vertical reglamentaria indica…",
      "en": "This regulatory vertical sign indicates…",
      "ru": "Этот вертикальный регламентированный знак указывает…"
    },
    "answers": [
      {
        "text": {
          "es": "Que es un carril preferencial para ciclistas.",
          "en": "That it is a preferential lane for cyclists.",
          "ru": "Что это предпочтительная полоса для велосипедистов."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que es un carril de uso exclusivo para ciclistas.",
          "en": "That it is a lane exclusively for cyclists.",
          "ru": "Что это полоса, предназначенная исключительно для велосипедистов."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que los ciclistas no pueden circular por este carril.",
          "en": "That cyclists cannot ride in this lane.",
          "ru": "Что велосипедисты не могут двигаться по этой полосе."
        },
        "correct": false
      }
    ],
    "image": "/questions/b253.jpg"
  },
  {
    "id": 487,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "What does this regulatory sign indicate?",
      "ru": "Что указывает этот регламентированный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Que sólo está permitido circular en bicicleta a partir de donde se encuentra la señal.",
          "en": "That it is only allowed to ride a bicycle from where the sign is located.",
          "ru": "Что разрешено двигаться на велосипеде только с того места, где находится знак."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica al ciclista que es obligatorio descender de la bicicleta a partir de donde se encuentra la señal.",
          "en": "Indicates to the cyclist that it is mandatory to dismount from the bicycle from where the sign is located.",
          "ru": "Указывает велосипедисту, что обязательно сойти с велосипеда с того места, где находится знак."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que comienza una ciclovía.",
          "en": "That a bike lane begins.",
          "ru": "Что начинается велодорожка."
        },
        "correct": false
      }
    ],
    "image": "/questions/b254.jpg"
  },
  {
    "id": 488,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "What does this regulatory sign indicate?",
      "ru": "Что указывает этот регламентированный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Que el vehículo no puede continuar su marcha sin detenerse.",
          "en": "That the vehicle cannot continue moving without stopping.",
          "ru": "Что транспортное средство не может продолжать движение без остановки."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Presencia de reductor de velocidad.",
          "en": "Presence of speed reducer.",
          "ru": "Наличие устройства для снижения скорости."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de sentido opuesto de circulación.",
          "en": "Beginning of opposite direction of traffic.",
          "ru": "На��ало противоположного направления движения."
        },
        "correct": false
      }
    ],
    "image": "/questions/b255.jpg"
  },
  {
    "id": 489,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "What does this regulatory sign indicate?",
      "ru": "Что указывает этот регламентированный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Inicio de calle de convivencia.",
          "en": "Start of shared street.",
          "ru": "Начало улицы совместного использования."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los peatones no deben circular por esa zona.",
          "en": "Pedestrians should not walk in that area.",
          "ru": "Пешеходы не должны двигаться по этой зоне."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Los peatones deben circular obligatoriamente por la derecha.",
          "en": "Pedestrians must walk on the right.",
          "ru": "Пешеходы обязаны двигаться строго справа."
        },
        "correct": true
      }
    ],
    "image": "/questions/b256.jpg"
  },
  {
    "id": 490,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "What does this regulatory sign indicate?",
      "ru": "Что указывает этот регламентированный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Indica que el carril sobre el que se encuentra la señal, no puede ser utilizado por motocicletas y ciclomotores.",
          "en": "Indicates that the lane where the sign is located cannot be used by motorcycles and mopeds.",
          "ru": "Указывает, что полоса, на которой находится знак, не может использоваться мотоциклами и скутерами."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para motocicletas y ciclomotores.",
          "en": "Indicates that the lane where the sign is located is exclusively for motorcycles and mopeds.",
          "ru": "Указывает, что полоса, на которой находится знак, предназначена исключительно для мотоциклов и скутеров."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Indica que el carril sobre el que se encuentra la señal, es de uso exclusivo para bicicletas.",
          "en": "Indicates that the lane where the sign is located is exclusively for bicycles.",
          "ru": "Указывает, что полоса, на которой находится знак, предназначена исключительно для велосипедов."
        },
        "correct": false
      }
    ],
    "image": "/questions/b257.jpg"
  },
  {
    "id": 491,
    "question": {
      "es": "¿Qué indica esta señal reglamentaria?",
      "en": "What does this regulatory sign indicate?",
      "ru": "Что указывает этот регламентированный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Que no se puede circular a una velocidad inferior a 35 km/h en esa vía.",
          "en": "That it is not allowed to travel at a speed lower than 35 km/h on that road.",
          "ru": "Что нельзя двигаться со скоростью ниже 35 км/ч на этой дороге."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Que la velocidad máxima es de 35 km/h en esa vía.",
          "en": "That the maximum speed is 35 km/h on that road.",
          "ru": "Что максимальная скорость составляет 35 км/ч на этой дороге."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Que la velocidad precautoria es de 35 km/h en esa vía.",
          "en": "That the precautionary speed is 35 km/h on that road.",
          "ru": "Что предостерегающая скорость составляет 35 км/ч на этой дороге."
        },
        "correct": false
      }
    ],
    "image": "/questions/b258.jpg"
  },
  {
    "id": 492,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibición de Girar a la Derecha.",
          "en": "Prohibition of turning right.",
          "ru": "Запрет поворота направо."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de Cambiar de Carril.",
          "en": "Prohibition of changing lanes.",
          "ru": "Запрет смены полосы."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de Adelantar.",
          "en": "Prohibition of overtaking.",
          "ru": "Запрет на обгон."
        },
        "correct": false
      }
    ],
    "image": "/questions/b259.jpg"
  },
  {
    "id": 493,
    "question": {
      "es": "La señal que se muestra indica un camino sin salida:",
      "en": "The sign shown indicates a dead end:",
      "ru": "Знак, который показан, указывает на тупик:"
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
    "image": "/questions/b260.jpg"
  },
  {
    "id": 494,
    "question": {
      "es": "Indique qué representa la siguiente señal:",
      "en": "Indicate what the following sign represents:",
      "ru": "Укажите, что представляет следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Dirección obligatoria en ambos sentidos.",
          "en": "Mandatory direction in both directions.",
          "ru": "Обязательное направление в обоих направлениях."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dirección permitida en ambos sentidos.",
          "en": "Allowed direction in both directions.",
          "ru": "Разрешенное направление в обоих направлениях."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Giros permitidos.",
          "en": "Permitted turns.",
          "ru": "Разрешенные повороты."
        },
        "correct": false
      }
    ],
    "image": "/questions/b261.jpg"
  },
  {
    "id": 495,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Desvío por cambio de sentido de circulación.",
          "en": "Detour due to change of traffic direction.",
          "ru": "Объезд из-за изменения направления движения."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Calzada dividida.",
          "en": "Divided roadway.",
          "ru": "Разделенная проезжая часть."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Cruce Peligroso.",
          "en": "Dangerous crossing.",
          "ru": "Опасный перекресток."
        },
        "correct": false
      }
    ],
    "image": "/questions/b262.jpg"
  },
  {
    "id": 496,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Comienzo de autopista.",
          "en": "Beginning of highway.",
          "ru": "Начало автомагистрали."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Comienzo de ruta.",
          "en": "Beginning of road.",
          "ru": "Начало дороги."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Comienzo de semiautopista.",
          "en": "Beginning of semi-highway.",
          "ru": "Начало полудороги."
        },
        "correct": false
      }
    ],
    "image": "/questions/b263.jpg"
  },
  {
    "id": 497,
    "question": {
      "es": "Determine qué indica la señal que a continuación se presenta:",
      "en": "Determine what the following sign indicates:",
      "ru": "Определите, что указывает следующий знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Fin de semiautopista.",
          "en": "End of semi-highway.",
          "ru": "Конец полудороги."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Fin de ruta.",
          "en": "End of road.",
          "ru": "Конец дороги."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Fin de autopista.",
          "en": "End of highway.",
          "ru": "Конец автомагистрали."
        },
        "correct": true
      }
    ],
    "image": "/questions/b264.jpg"
  },
  {
    "id": 498,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Permitido girar hacia la izquierda.",
          "en": "Left turn allowed.",
          "ru": "Разрешено поворачивать налево."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dirección obligatoria hacia la izquierda.",
          "en": "Mandatory direction to the left.",
          "ru": "Обязательное направление налево."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Dirección permitida hacia la izquierda.",
          "en": "Direction permitted to the left.",
          "ru": "Разрешенное направление налево."
        },
        "correct": true
      }
    ],
    "image": "/questions/b265.jpg"
  },
  {
    "id": 499,
    "question": {
      "es": "Esta señal advierte que en el lugar ocurrió un siniestro vial que produjo una víctima fatal.",
      "en": "This sign warns that a traffic accident occurred at this location that resulted in a fatality.",
      "ru": "Этот знак предупреждает, что в этом месте произошло дорожно-транспортное происшествие, в результате которого есть погибший."
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
    "image": "/questions/b266.jpg"
  },
  {
    "id": 500,
    "question": {
      "es": "¿Qué indica esta señal vertical de información?",
      "en": "What does this vertical information sign indicate?",
      "ru": "Что указывает этот вертикальный информационный знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Una encrucijada peligrosa.",
          "en": "A dangerous intersection.",
          "ru": "Опасное пересечение."
        },
        "correct": false
      },
      {
        "text": {
          "es": "La existencia de un puesto sanitario o de socorro.",
          "en": "The existence of a health or rescue post.",
          "ru": "Наличие санитарного или спасательного поста."
        },
        "correct": true
      },
      {
        "text": {
          "es": "La existencia de un templo religioso.",
          "en": "The existence of a religious temple.",
          "ru": "Наличие религиозного храма."
        },
        "correct": false
      }
    ],
    "image": "/questions/b267.jpg"
  },
  {
    "id": 501,
    "question": {
      "es": "¿A qué punto de referencia hace alusión la señal que a continuación se presenta?",
      "en": "What point of reference does the following sign refer to?",
      "ru": "На какой ориентир ссылается знак, который будет представлен далее?"
    },
    "answers": [
      {
        "text": {
          "es": "Servicio mecánico.",
          "en": "Mechanical service.",
          "ru": "Механический сервис."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Gomería.",
          "en": "Tire shop.",
          "ru": "Шиномонтаж."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Estación de servicio.",
          "en": "Service station.",
          "ru": "Автозаправочная станция."
        },
        "correct": false
      }
    ],
    "image": "/questions/b268.jpg"
  },
  {
    "id": 502,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Existencia de un teatro, en las inmediaciones.",
          "en": "Existence of a theater in the vicinity.",
          "ru": "Наличие театра в окрестностях."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de estacionar en la puerta de un teatro.",
          "en": "Prohibition of parking in front of a theater.",
          "ru": "Запрет на парковку у входа в театр."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de detenerse en la puerta de un teatro.",
          "en": "Prohibition of stopping in front of a theater.",
          "ru": "Запрет на остановку у входа в театр."
        },
        "correct": false
      }
    ],
    "image": "/questions/b269.jpg"
  },
  {
    "id": 503,
    "question": {
      "es": "¿Qué significa esta señal?",
      "en": "What does this sign mean?",
      "ru": "Что означает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibición de estacionar en la entrada de terminal de ómnibus.",
          "en": "Prohibition of parking at the bus terminal entrance.",
          "ru": "Запрет на парковку у входа на автовокзал."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Existencia de terminal de ómnibus, en las inmediaciones.",
          "en": "Existence of a bus terminal in the vicinity.",
          "ru": "Наличие автовокзала в окрестностях."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Prohibición de detenerse en la entrada de terminal de ómnibus.",
          "en": "Prohibition of stopping at the bus terminal entrance.",
          "ru": "Запрет на остановку у входа на автовокзал."
        },
        "correct": false
      }
    ],
    "image": "/questions/b270.jpg"
  },
  {
    "id": 504,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Prohibición de detenerse en las inmediaciones a la plaza.",
          "en": "Prohibition of stopping near the square.",
          "ru": "Запрет на остановку в окрестностях площади."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Prohibición de estacionar en las inmediaciones a la plaza.",
          "en": "Prohibition of parking near the square.",
          "ru": "Запрет на парковку в окрестностях площади."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Existencia de una plaza, en las inmediaciones.",
          "en": "Existence of a square in the vicinity.",
          "ru": "Наличие площади в окрестностях."
        },
        "correct": true
      }
    ],
    "image": "/questions/b271.jpg"
  },
  {
    "id": 505,
    "question": {
      "es": "¿Qué indica esta señal?",
      "en": "What does this sign indicate?",
      "ru": "Что указывает этот знак?"
    },
    "answers": [
      {
        "text": {
          "es": "Se encuentra permitido detenerse en esa vía.",
          "en": "Stopping is allowed on this road.",
          "ru": "Остановка на этой дороге разрешена."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Existencia de un estacionamiento vehicular, en las inmediaciones.",
          "en": "Existence of a parking lot in the vicinity.",
          "ru": "��аличие парковки для автомобилей в окрестностях."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Se encuentra permitido estacionar en esa vía.",
          "en": "Parking is allowed on this road.",
          "ru": "Парковка на этой дороге разрешена."
        },
        "correct": false
      }
    ],
    "image": "/questions/b272.jpg"
  },
  {
    "id": 506,
    "question": {
      "es": "¿Cuál de la tres señales indica que la ruta es provincial?",
      "en": "Which of the three signs indicates that the road is provincial?",
      "ru": "Какой из трех знаков указывает, что дорога является провинциальной?"
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
    "image": "/questions/b273.jpg"
  },
  {
    "id": 507,
    "question": {
      "es": "Indique qué significa esta señal:",
      "en": "Indicate what this sign means:",
      "ru": "Укажите, что означает этот знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Ruta Nacional N°5.",
          "en": "National Route No. 5.",
          "ru": "Национальная дорога №5."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ruta Provincial N°5.",
          "en": "Provincial Route No. 5.",
          "ru": "Провинциальная дорога №5."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ruta Panamericana N°5.",
          "en": "Pan-American Route No. 5.",
          "ru": "Панамская дорога №5."
        },
        "correct": false
      }
    ],
    "image": "/questions/b274.jpg"
  },
  {
    "id": 508,
    "question": {
      "es": "Indique qué significa esta señal:",
      "en": "Indicate what this sign means:",
      "ru": "Укажите, что означает этот знак:"
    },
    "answers": [
      {
        "text": {
          "es": "Ruta Nacional N°3.",
          "en": "National Route No. 3.",
          "ru": "Национальная дорога №3."
        },
        "correct": true
      },
      {
        "text": {
          "es": "Ruta Provincial N°3.",
          "en": "Provincial Route No. 3.",
          "ru": "Провинциальная дорога №3."
        },
        "correct": false
      },
      {
        "text": {
          "es": "Ruta Panamericana N°3.",
          "en": "Pan-American Route No. 3.",
          "ru": "Панамская дорога №3."
        },
        "correct": false
      }
    ],
    "image": "/questions/b275.jpg"
  }
];
