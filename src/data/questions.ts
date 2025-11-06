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
  {
    id: 6,
    question: {
      es: "¿A qué distancia debe circular de otro vehículo?",
      en: "At what distance should you drive from another vehicle?",
      ru: "На каком расстоянии следует ехать от другого транспортного средства?",
    },
    answers: [
      {
        text: {
          es: "A una distancia que me permita detenerme en caso de emergencia.",
          en: "At a distance that allows me to stop in case of emergency.",
          ru: "На расстоянии, которое позволит остановиться в случае чрезвычайной ситуации.",
        },
        correct: true,
      },
      {
        text: {
          es: "Lo más cerca posible para ahorrar combustible.",
          en: "As close as possible to save fuel.",
          ru: "Как можно ближе, чтобы сэкономить топливо.",
        },
        correct: false,
      },
      {
        text: {
          es: "A 5 metros exactamente.",
          en: "Exactly 5 meters.",
          ru: "Ровно 5 метров.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question: {
      es: "¿Cuándo debe usar las luces de giro?",
      en: "When should you use turn signals?",
      ru: "Когда следует использовать сигналы поворота?",
    },
    answers: [
      {
        text: {
          es: "Solo de noche.",
          en: "Only at night.",
          ru: "Только ночью.",
        },
        correct: false,
      },
      {
        text: {
          es: "Siempre que vaya a girar o cambiar de carril.",
          en: "Always when turning or changing lanes.",
          ru: "Всегда при повороте или смене полосы движения.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo en intersecciones.",
          en: "Only at intersections.",
          ru: "Только на перекрестках.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: {
      es: "¿Puede circular una motocicleta entre dos carriles de vehículos detenidos?",
      en: "Can a motorcycle ride between two lanes of stopped vehicles?",
      ru: "Может ли мотоцикл ехать между двумя полосами остановившихся транспортных средств?",
    },
    answers: [
      {
        text: {
          es: "Sí, siempre está permitido.",
          en: "Yes, it is always allowed.",
          ru: "Да, это всегда разрешено.",
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
          es: "Solo si hay espacio suficiente.",
          en: "Only if there is enough space.",
          ru: "Только если есть достаточно места.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: {
      es: "¿Qué debe hacer al llegar a una esquina sin señalización?",
      en: "What should you do when reaching a corner without signage?",
      ru: "Что следует делать, подъезжая к углу без знаков?",
    },
    answers: [
      {
        text: {
          es: "Acelerar para pasar rápido.",
          en: "Speed up to pass quickly.",
          ru: "Ускориться, чтобы быстро проехать.",
        },
        correct: false,
      },
      {
        text: {
          es: "Reducir la velocidad y ceder el paso a vehículos que vienen por la derecha.",
          en: "Slow down and yield to vehicles coming from the right.",
          ru: "Снизить скорость и уступить дорогу транспортным средствам справа.",
        },
        correct: true,
      },
      {
        text: {
          es: "Mantener la velocidad.",
          en: "Maintain speed.",
          ru: "Поддерживать скорость.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: {
      es: "¿Está permitido usar el teléfono celular mientras conduce?",
      en: "Is it allowed to use a cell phone while driving?",
      ru: "Разрешено ли использовать мобильный телефон во время вождения?",
    },
    answers: [
      {
        text: {
          es: "Sí, si es una llamada corta.",
          en: "Yes, if it's a short call.",
          ru: "Да, если это короткий звонок.",
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
          es: "Solo con manos libres.",
          en: "Only with hands-free.",
          ru: "Только с hands-free.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: {
      es: "¿Qué indica una línea continua amarilla?",
      en: "What does a continuous yellow line indicate?",
      ru: "Что означает сплошная желтая линия?",
    },
    answers: [
      {
        text: {
          es: "Prohibición de estacionar.",
          en: "No parking.",
          ru: "Запрет парковки.",
        },
        correct: true,
      },
      {
        text: {
          es: "Zona de carga y descarga.",
          en: "Loading and unloading zone.",
          ru: "Зона погрузки и разгрузки.",
        },
        correct: false,
      },
      {
        text: {
          es: "Estacionamiento permitido.",
          en: "Parking allowed.",
          ru: "Парковка разрешена.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: {
      es: "¿Puede transportar un acompañante en una motocicleta?",
      en: "Can you transport a passenger on a motorcycle?",
      ru: "Можно ли перевозить пассажира на мотоцикле?",
    },
    answers: [
      {
        text: {
          es: "Sí, si la moto está diseñada para ello y ambos usan casco.",
          en: "Yes, if the motorcycle is designed for it and both wear helmets.",
          ru: "Да, если мотоцикл предназначен для этого и оба носят шлемы.",
        },
        correct: true,
      },
      {
        text: {
          es: "No, nunca está permitido.",
          en: "No, it is never allowed.",
          ru: "Нет, это никогда не разрешено.",
        },
        correct: false,
      },
      {
        text: {
          es: "Solo en rutas.",
          en: "Only on highways.",
          ru: "Только на шоссе.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: {
      es: "¿Qué significa una señal circular con borde rojo y fondo blanco?",
      en: "What does a circular sign with a red border and white background mean?",
      ru: "Что означает круглый знак с красной каймой и белым фоном?",
    },
    answers: [
      {
        text: {
          es: "Advertencia.",
          en: "Warning.",
          ru: "Предупреждение.",
        },
        correct: false,
      },
      {
        text: {
          es: "Prohibición u obligación.",
          en: "Prohibition or obligation.",
          ru: "Запрет или обязательство.",
        },
        correct: true,
      },
      {
        text: {
          es: "Información.",
          en: "Information.",
          ru: "Информация.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: {
      es: "¿Cuál es la tasa de alcoholemia permitida para conductores de motocicletas?",
      en: "What is the permitted blood alcohol level for motorcycle riders?",
      ru: "Какой разрешенный уровень алкоголя в крови для мотоциклистов?",
    },
    answers: [
      {
        text: {
          es: "0 gramos por litro de sangre.",
          en: "0 grams per liter of blood.",
          ru: "0 грамм на литр крови.",
        },
        correct: true,
      },
      {
        text: {
          es: "0.5 gramos por litro de sangre.",
          en: "0.5 grams per liter of blood.",
          ru: "0,5 грамма на литр крови.",
        },
        correct: false,
      },
      {
        text: {
          es: "1 gramo por litro de sangre.",
          en: "1 gram per liter of blood.",
          ru: "1 грамм на литр крови.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: {
      es: "¿Debe encender las luces de la motocicleta durante el día?",
      en: "Should you turn on motorcycle lights during the day?",
      ru: "Следует ли включать фары мотоцикла днем?",
    },
    answers: [
      {
        text: {
          es: "No, solo de noche.",
          en: "No, only at night.",
          ru: "Нет, только ночью.",
        },
        correct: false,
      },
      {
        text: {
          es: "Sí, siempre deben estar encendidas.",
          en: "Yes, they should always be on.",
          ru: "Да, они всегда должны быть включены.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo en días nublados.",
          en: "Only on cloudy days.",
          ru: "Только в пасмурные дни.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: {
      es: "¿Qué debe hacer antes de cambiar de carril?",
      en: "What should you do before changing lanes?",
      ru: "Что следует сделать перед сменой полосы движения?",
    },
    answers: [
      {
        text: {
          es: "Mirar los espejos, señalizar y verificar el punto ciego.",
          en: "Check mirrors, signal, and verify blind spot.",
          ru: "Проверить зеркала, подать сигнал и проверить слепую зону.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo mirar adelante.",
          en: "Only look ahead.",
          ru: "Только смотреть вперед.",
        },
        correct: false,
      },
      {
        text: {
          es: "Acelerar rápidamente.",
          en: "Accelerate quickly.",
          ru: "Быстро ускориться.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 17,
    question: {
      es: "¿Está permitido circular en contramano?",
      en: "Is it allowed to drive in the wrong direction?",
      ru: "Разрешено ли ехать в обратном направлении?",
    },
    answers: [
      {
        text: {
          es: "Sí, en emergencias.",
          en: "Yes, in emergencies.",
          ru: "Да, в чрезвычайных ситуациях.",
        },
        correct: false,
      },
      {
        text: {
          es: "No, nunca está permitido.",
          en: "No, it is never allowed.",
          ru: "Нет, это никогда не разрешено.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo en calles de un solo sentido.",
          en: "Only on one-way streets.",
          ru: "Только на улицах с односторонним движением.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 18,
    question: {
      es: "¿Qué indica una señal rectangular azul?",
      en: "What does a rectangular blue sign indicate?",
      ru: "Что означает прямоугольный синий знак?",
    },
    answers: [
      {
        text: {
          es: "Prohibición.",
          en: "Prohibition.",
          ru: "Запрет.",
        },
        correct: false,
      },
      {
        text: {
          es: "Información o servicio.",
          en: "Information or service.",
          ru: "Информация или услуга.",
        },
        correct: true,
      },
      {
        text: {
          es: "Advertencia.",
          en: "Warning.",
          ru: "Предупреждение.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: {
      es: "¿Puede estacionar en una esquina?",
      en: "Can you park on a corner?",
      ru: "Можно ли парковаться на углу?",
    },
    answers: [
      {
        text: {
          es: "Sí, si no hay señalización.",
          en: "Yes, if there is no signage.",
          ru: "Да, если нет знаков.",
        },
        correct: false,
      },
      {
        text: {
          es: "No, está prohibido estacionar a menos de 5 metros de la esquina.",
          en: "No, it is prohibited to park within 5 meters of the corner.",
          ru: "Нет, запрещено парковаться ближе 5 метров от угла.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo de noche.",
          en: "Only at night.",
          ru: "Только ночью.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 20,
    question: {
      es: "¿Qué debe hacer al ver una luz amarilla intermitente en un semáforo?",
      en: "What should you do when you see a flashing yellow light on a traffic light?",
      ru: "Что следует делать, увидев мигающий желтый свет на светофоре?",
    },
    answers: [
      {
        text: {
          es: "Detenerse completamente.",
          en: "Stop completely.",
          ru: "Полностью остановиться.",
        },
        correct: false,
      },
      {
        text: {
          es: "Continuar con precaución.",
          en: "Continue with caution.",
          ru: "Продолжать с осторожностью.",
        },
        correct: true,
      },
      {
        text: {
          es: "Acelerar para pasar rápido.",
          en: "Speed up to pass quickly.",
          ru: "Ускориться, чтобы быстро проехать.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 21,
    question: {
      es: "¿Cuándo es obligatorio usar chaleco reflectante?",
      en: "When is it mandatory to wear a reflective vest?",
      ru: "Когда обязательно носить светоотражающий жилет?",
    },
    answers: [
      {
        text: {
          es: "Al bajar de la moto en la ruta o autopista.",
          en: "When getting off the motorcycle on a road or highway.",
          ru: "При выходе из мотоцикла на дороге или шоссе.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo de noche.",
          en: "Only at night.",
          ru: "Только ночью.",
        },
        correct: false,
      },
      {
        text: {
          es: "Nunca es obligatorio.",
          en: "It is never mandatory.",
          ru: "Это никогда не обязательно.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 22,
    question: {
      es: "¿Puede circular por la banquina?",
      en: "Can you drive on the shoulder?",
      ru: "Можно ли ехать по обочине?",
    },
    answers: [
      {
        text: {
          es: "Sí, para adelantar.",
          en: "Yes, to overtake.",
          ru: "Да, чтобы обогнать.",
        },
        correct: false,
      },
      {
        text: {
          es: "No, salvo emergencia.",
          en: "No, except in emergencies.",
          ru: "Нет, кроме чрезвычайных ситуаций.",
        },
        correct: true,
      },
      {
        text: {
          es: "Sí, siempre está permitido.",
          en: "Yes, it is always allowed.",
          ru: "Да, это всегда разрешено.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 23,
    question: {
      es: "¿Qué significa una luz roja fija en el semáforo?",
      en: "What does a solid red light on a traffic light mean?",
      ru: "Что означает постоянный красный свет на светофоре?",
    },
    answers: [
      {
        text: {
          es: "Reducir la velocidad.",
          en: "Slow down.",
          ru: "Снизить скорость.",
        },
        correct: false,
      },
      {
        text: {
          es: "Detenerse completamente.",
          en: "Stop completely.",
          ru: "Полностью остановиться.",
        },
        correct: true,
      },
      {
        text: {
          es: "Continuar con precaución.",
          en: "Continue with caution.",
          ru: "Продолжать с осторожностью.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 24,
    question: {
      es: "¿Es obligatorio tener seguro para circular en motocicleta?",
      en: "Is it mandatory to have insurance to ride a motorcycle?",
      ru: "Обязательно ли иметь страховку для езды на мотоцикле?",
    },
    answers: [
      {
        text: {
          es: "No, es opcional.",
          en: "No, it is optional.",
          ru: "Нет, это необязательно.",
        },
        correct: false,
      },
      {
        text: {
          es: "Sí, es obligatorio.",
          en: "Yes, it is mandatory.",
          ru: "Да, это обязательно.",
        },
        correct: true,
      },
      {
        text: {
          es: "Solo para motos de alta cilindrada.",
          en: "Only for high-displacement motorcycles.",
          ru: "Только для мотоциклов большого объема.",
        },
        correct: false,
      },
    ],
  },
  {
    id: 25,
    question: {
      es: "¿Puede girar a la izquierda en una esquina con semáforo en verde?",
      en: "Can you turn left at a corner with a green light?",
      ru: "Можно ли повернуть налево на углу при зеленом свете?",
    },
    answers: [
      {
        text: {
          es: "Sí, pero debo ceder el paso a los vehículos que vienen de frente.",
          en: "Yes, but I must yield to oncoming vehicles.",
          ru: "Да, но я должен уступить дорогу встречным транспортным средствам.",
        },
        correct: true,
      },
      {
        text: {
          es: "No, debo esperar la flecha verde.",
          en: "No, I must wait for the green arrow.",
          ru: "Нет, я должен ждать зеленой стрелки.",
        },
        correct: false,
      },
      {
        text: {
          es: "Sí, tengo prioridad total.",
          en: "Yes, I have total priority.",
          ru: "Да, у меня полный приоритет.",
        },
        correct: false,
      },
    ],
  },
];
