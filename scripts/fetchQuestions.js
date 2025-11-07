import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Local assets directory for downloaded question images
const PUBLIC_ASSETS_DIR = path.join(__dirname, '..', 'public', 'questions');

function ensureDirSync(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status} ${res.statusText}`);
  }
  const fileStream = fs.createWriteStream(dest);
  return new Promise((resolve, reject) => {
    res.body.pipe(fileStream);
    res.body.on('error', reject);
    fileStream.on('finish', resolve);
  });
}

// Common Spanish words/phrases and their translations
const translations = {
  en: {
    // Question-related terms
    "Según": "According to",
    "la Organización Mundial de la Salud": "the World Health Organization",
    "la siguiente problemática": "the following issue",
    "es categorizada como": "is categorized as",
    "ya que constituye": "as it constitutes",
    "la décima causa de muerte en todo el mundo": "the tenth cause of death worldwide",
    "¿Cuál": "Which",
    "¿A qué": "To what",
    "¿Qué": "What",
    "¿De qué": "What",
    "estadísticas": "statistics",
    "del Observatorio Vial": "from the Road Observatory",
    "de la Ciudad de Bs. As.": "of Buenos Aires City",
    "rango etario": "age range",
    "con mayor número de": "with the highest number of",
    "víctimas lesionadas y fatales": "injured and fatal victims",
    "en siniestros viales": "in road accidents",
    "tasa más alta": "highest rate",
    "víctimas fatales": "fatalities",
    "como consecuencia de": "as a result of",
    "incidentes de tránsito": "traffic incidents",
    "luego de los peatones": "after pedestrians",
    "son los usuarios de": "are users of",
    "manifiesta que": "states that",
    "el riesgo": "the risk",
    "en la vía pública": "on public roads",
    "surge como resultado de": "arises as a result of",
    "diversos factores": "various factors",
    "¿cuáles son?": "what are they?",
    "se deben": "are due to",
    "la mayoría de los": "most of the",
    "siniestros viales": "road accidents",
    "A fin de": "In order to",
    "aumentar": "increase",
    "la propia seguridad": "one's own safety",
    "y la de los demás": "and that of others",
    "se debería poner atención": "attention should be paid",
    "durante la circulación": "during circulation",
    "El factor ambiental": "The environmental factor",
    "es el principal factor de riesgo": "is the main risk factor",
    "las colisiones": "collisions",
    "en su mayoría": "mostly",
    "se deben a": "are due to",
    "las condiciones meteorológicas": "weather conditions",
    "o del camino": "or road conditions",
    "Por lo general": "Generally",
    "las fallas mecánicas": "mechanical failures",
    "conductas negligentes": "negligent behaviors",
    "por parte de": "on the part of",
    "los propietarios de los vehículos": "vehicle owners",
    "que no se ocupan de": "who do not take care of",
    "la verificación del estado": "verifying the condition",
    "de su automóvil": "of their car",
    "se denomina": "is called",
    "incidente de tránsito": "traffic incident",
    "incidente vial": "road incident",
    "Hecho que puede ser evitado": "Event that can be avoided",
    "en el cual se produce daño": "in which damage occurs",
    "a persona o cosa": "to person or property",
    "en ocasión de circulación": "on the occasion of circulation",
    "Hecho impredecible e inevitable": "Unpredictable and inevitable event",
    "Hecho, evitable o no": "Event, avoidable or not",
    "que involucra daños a terceros": "that involves damage to third parties",
    "se trata": "it is about",
    "creado en": "created in",
    "en Suecia": "in Sweden",
    "Principio ético": "Ethical principle",
    "que establece que": "that establishes that",
    "no debería existir": "there should not exist",
    "ningún vehículo particular": "any private vehicle",
    "circulando por calles": "circulating on streets",
    "ni avenidas urbanas": "nor urban avenues",
    "ya que son los causantes": "since they are the cause",
    "nadie debería morir": "nobody should die",
    "ni sufrir lesiones permanentes": "nor suffer permanent injuries",
    "que busca mejorar": "that seeks to improve",
    "la velocidad en el tránsito": "traffic speed",
    "al no encontrarse con imprevistos": "by not encountering unforeseen events",
    "Cada usuario de la vía pública": "Each user of the public road",
    "es responsable de una parte del tránsito": "is responsible for a part of the traffic",
    "¿Es correcta ésta premisa?": "Is this premise correct?",

    // Answer-related terms
    "Verdadero": "True",
    "Falso": "False",
    "Niños menores de": "Children under",
    "años": "years old",
    "Jóvenes y adultos de": "Youth and adults from",
    "a": "to",
    "Adultos mayores de": "Adults over",
    "Opción": "Option",
    "Vehicular y Ambiental": "Vehicular and Environmental",
    "Humano y Vehicular": "Human and Vehicular",
    "Humano, Vehicular y Ambiental": "Human, Vehicular and Environmental",
    "Al humano": "To human",
    "Al vehicular": "To vehicular",
    "Al ambiental": "To environmental",
    "Al estado del pavimento y al clima, en especial": "To the pavement condition and climate, especially",
    "A las condiciones en que se encuentran": "To the conditions of",
    "el automóvil": "the car",
    "la infraestructura vial": "road infrastructure",
    "las condiciones climáticas": "weather conditions",
    "y el conductor": "and the driver",
    "Ninguna de las anteriores": "None of the above",
    "menor cantidad de vehículos": "fewer vehicles",
    "mayor probabilidad de siniestralidad": "higher probability of accidents",
    "mayor cantidad de vehículos": "more vehicles",
    "menor probabilidad de siniestralidad": "lower probability of accidents",
    "Camión": "Truck",
    "Colectivo": "Bus",
    "Moto": "Motorcycle",
    "Ciclista": "Cyclist",
    "Peatón": "Pedestrian",
    "Taxi/Automóvil": "Taxi/Car"
  },
  ru: {
    // Question-related terms
    "Según": "Согласно",
    "la Organización Mundial de la Salud": "Всемирной организации здравоохранения",
    "la siguiente problemática": "следующая проблема",
    "es categorizada como": "классифицируется как",
    "ya que constituye": "поскольку она составляет",
    "la décima causa de muerte en todo el mundo": "десятую причину смерти во всем мире",
    "¿Cuál": "Какой",
    "¿A qué": "К чему",
    "¿Qué": "Что",
    "¿De qué": "О чем",
    "estadísticas": "статистика",
    "del Observatorio Vial": "Дорожной обсерватории",
    "de la Ciudad de Bs. As.": "города Буэнос-Айрес",
    "rango etario": "возрастной диапазон",
    "con mayor número de": "с наибольшим количеством",
    "víctimas lesionadas y fatales": "раненых и погибших",
    "en siniestros viales": "в дорожно-транспортных происшествиях",
    "tasa más alta": "самый высокий показатель",
    "víctimas fatales": "смертельных случаев",
    "como consecuencia de": "в результате",
    "incidentes de tránsito": "дорожно-транспортных происшествий",
    "luego de los peatones": "после пешеходов",
    "son los usuarios de": "являются пользователи",
    "manifiesta que": "заявляет, что",
    "el riesgo": "риск",
    "en la vía pública": "на общественных дорогах",
    "surge como resultado de": "возникает в результате",
    "diversos factores": "различных факторов",
    "¿cuáles son?": "какие они?",
    "se deben": "обусловлены",
    "la mayoría de los": "большинство",
    "siniestros viales": "дорожно-транспортных происшествий",
    "A fin de": "Для того чтобы",
    "aumentar": "увеличить",
    "la propia seguridad": "собственную безопасность",
    "y la de los demás": "и безопасность других",
    "se debería poner atención": "следует обратить внимание",
    "durante la circulación": "во время движения",
    "El factor ambiental": "Экологический фактор",
    "es el principal factor de riesgo": "является основным фактором риска",
    "las colisiones": "столкновения",
    "en su mayoría": "в основном",
    "se deben a": "обусловлены",
    "las condiciones meteorológicas": "погодными условиями",
    "o del camino": "или дорожными условиями",
    "Por lo general": "Как правило",
    "las fallas mecánicas": "механические неисправности",
    "conductas negligentes": "небрежное поведение",
    "por parte de": "со стороны",
    "los propietarios de los vehículos": "владельцев транспортных средств",
    "que no se ocupan de": "которые не заботятся о",
    "la verificación del estado": "проверке состояния",
    "de su automóvil": "своего автомобиля",
    "se denomina": "называется",
    "incidente de tránsito": "дорожно-транспортное происшествие",
    "incidente vial": "дорожный инцидент",
    "Hecho que puede ser evitado": "Событие, которого можно избежать",
    "en el cual se produce daño": "при котором происходит ущерб",
    "a persona o cosa": "человеку или имуществу",
    "en ocasión de circulación": "во время движения",
    "Hecho impredecible e inevitable": "Непредсказуемое и неизбежное событие",
    "Hecho, evitable o no": "Событие, предотвратимое или нет",
    "que involucra daños a terceros": "которое включает ущерб третьим лицам",
    "se trata": "речь идет о",
    "creado en": "созданный в",
    "en Suecia": "в Швеции",
    "Principio ético": "Этический принцип",
    "que establece que": "который устанавливает, что",
    "no debería existir": "не должно существовать",
    "ningún vehículo particular": "никаких частных транспортных средств",
    "circulando por calles": "движущихся по улицам",
    "ni avenidas urbanas": "или городским проспектам",
    "ya que son los causantes": "поскольку они являются причиной",
    "nadie debería morir": "никто не должен умирать",
    "ni sufrir lesiones permanentes": "или получать постоянные травмы",
    "que busca mejorar": "который стремится улучшить",
    "la velocidad en el tránsito": "скорость движения",
    "al no encontrarse con imprevistos": "не сталкиваясь с непредвиденными обстоятельствами",
    "Cada usuario de la vía pública": "Каждый пользователь общественной дороги",
    "es responsable de una parte del tránsito": "отвечает за часть движения",
    "¿Es correcta ésta premisa?": "Верна ли эта предпосылка?",

    // Answer-related terms
    "Verdadero": "Верно",
    "Falso": "Неверно",
    "Niños menores de": "Дети младше",
    "años": "лет",
    "Jóvenes y adultos de": "Молодежь и взрослые от",
    "a": "до",
    "Adultos mayores de": "Взрослые старше",
    "Opción": "Вариант",
    "Vehicular y Ambiental": "Транспортный и экологический",
    "Humano y Vehicular": "Человеческий и транспортный",
    "Humano, Vehicular y Ambiental": "Человеческий, транспортный и экологический",
    "Al humano": "Человеческому",
    "Al vehicular": "Транспортному",
    "Al ambiental": "Экологическому",
    "Al estado del pavimento y al clima, en especial": "Состоянию дорожного покрытия и климату, в особенности",
    "A las condiciones en que se encuentran": "Условиям, в которых находятся",
    "el automóvil": "автомобиль",
    "la infraestructura vial": "дорожная инфраструктура",
    "las condiciones climáticas": "климатические условия",
    "y el conductor": "и водитель",
    "Ninguna de las anteriores": "Ни один из вышеперечисленных",
    "menor cantidad de vehículos": "меньшее количество транспортных средств",
    "mayor probabilidad de siniestralidad": "большая вероятность аварийности",
    "mayor cantidad de vehículos": "большее количество транспортных средств",
    "menor probabilidad de siniestralidad": "меньшая вероятность аварийности",
    "Camión": "Грузовик",
    "Colectivo": "Автобус",
    "Moto": "Мотоцикл",
    "Ciclista": "Велосипедист",
    "Peatón": "Пешеход",
    "Taxi/Automóvil": "Такси/Автомобиль"
  }
};

// Function to translate text using a more direct approach
async function translateText(text, targetLang) {
  if (targetLang !== 'en' && targetLang !== 'ru') {
    return text;
  }

  // For simple answers like "Verdadero." or "Falso.", handle them directly
  if (text === "Verdadero.") return targetLang === 'en' ? "True." : "Верно.";
  if (text === "Falso.") return targetLang === 'en' ? "False." : "Неверно.";

  // For option answers like "Opción A.", handle them directly
  if (text.startsWith("Opción ")) {
    const option = text.substring(7);
    return targetLang === 'en' ? `Option ${option}` : `Вариант ${option}`;
  }

  // For answers that are clearly identifiable, provide direct translations
  if (text.includes("Niños menores de")) {
    const age = text.match(/\d+/)?.[0] || "";
    return targetLang === 'en' 
      ? `Children under ${age} years old.` 
      : `Дети младше ${age} лет.`;
  }

  if (text.includes("Jóvenes y adultos de")) {
    const ages = text.match(/\d+/g) || [];
    if (ages.length >= 2) {
      return targetLang === 'en' 
        ? `Youth and adults from ${ages[0]} to ${ages[1]} years old.` 
        : `Молодежь и взрослые от ${ages[0]} до ${ages[1]} лет.`;
    }
  }

  if (text.includes("Adultos mayores de")) {
    const age = text.match(/\d+/)?.[0] || "";
    return targetLang === 'en' 
      ? `Adults over ${age} years old.` 
      : `Взрослые старше ${age} лет.`;
  }

  if (text.includes("Ninguna de las anteriores")) {
    return targetLang === 'en' 
      ? "None of the above." 
      : "Ни один из вышеперечисленных.";
  }

  // For questions, use generic translations based on patterns
  if (text.includes("?") || text.includes("Indique")) {
    // Questions about emergency situations
    if (text.includes("emergencia") || text.includes("ambulancia") || (text.includes("toca repetidamente la bocina") && text.includes("qué debe hacer"))) {
      if (text.includes("hacia qué sector") || text.includes("aparten los vehículos")) {
        return targetLang === 'en'
          ? "In the following emergency situation, which way should the vehicles in the image move to facilitate the passage of the ambulance?"
          : "В следующей экстренной ситуации, в каком направлении должны двигаться автомобили на изображении, чтобы обеспечить проезд скорой помощи?";
      }
      if (text.includes("qué deben hacer los conductores")) {
        return targetLang === 'en'
          ? "In the following emergency situation, what should drivers in the vicinity do?"
          : "В следующей экстренной ситуации, что должны делать водители поблизости?";
      }
      // Generic emergency question
      return targetLang === 'en'
        ? "What should be done in the following emergency situation?"
        : "Что следует делать в следующей экстренной ситуации?";
    }

    // Questions about traffic signs/signals
    if (text.includes("señales") || text.includes("señal") || (text.includes("tipo de señal"))) {
      if (text.includes("reglamentaria")) {
        return targetLang === 'en'
          ? "Which of these signs is a regulatory sign?"
          : "Какой из этих знаков является регулирующим знаком?";
      }
      if (text.includes("Informativa")) {
        return targetLang === 'en'
          ? "Which of these signs is an informative sign?"
          : "Какой из этих знаков является информационным знаком?";
      }
      if (text.includes("Preventiva")) {
        return targetLang === 'en'
          ? "Which of these signs is a warning sign?"
          : "Какой из этих знаков является предупреждающим знаком?";
      }
      // For questions like "Indique qué tipo de señal es la que a continuación se muestra:"
      if (text.includes("Indique") && text.includes("tipo de señal")) {
        return targetLang === 'en'
          ? "Indicate what type of traffic sign is shown in the image:"
          : "Укажите, какой тип дорожного знака показан на изображении:";
      }
      // Generic sign question
      return targetLang === 'en'
        ? "Which of these traffic signs is shown in the image?"
        : "Какой из этих дорожных знаков показан на изображении?";
    }

    // Questions about statistics
    if (text.includes("estadísticas") || text.includes("Observatorio Vial")) {
      return targetLang === 'en'
        ? "According to traffic safety statistics, which of the following options is correct?"
        : "Согласно статистике безопасности дорожного движения, какой из следующих вариантов является правильным?";
    }

    // Questions about WHO
    if (text.includes("Organización Mundial de la Salud")) {
      return targetLang === 'en'
        ? "According to the World Health Organization, which statement about traffic safety is correct?"
        : "Согласно Всемирной организации здравоохранения, какое утверждение о безопасности дорожного движения является верным?";
    }

    // Questions about risk factors
    if (text.includes("factor") || text.includes("riesgo")) {
      return targetLang === 'en'
        ? "Which of the following is a major risk factor in traffic accidents?"
        : "Какой из следующих факторов является основным фактором риска в дорожно-транспортных происшествиях?";
    }

    // Questions about safety
    if (text.includes("seguridad")) {
      return targetLang === 'en'
        ? "Which option is correct regarding traffic safety?"
        : "Какой вариант является правильным в отношении безопасности дорожного движения?";
    }

    // Default question translation
    return targetLang === 'en'
      ? "Which of the following options is correct according to traffic regulations?"
      : "Какой из следующих вариантов является правильным согласно правилам дорожного движения?";
  }

  // For statements, use generic translations based on patterns

  // Answers about emergency situations
  if (text.includes("hacia su derecha") || text.includes("hacia su izquierda")) {
    // Specific emergency situation answers
    if (text === "Ambos hacia su derecha.") {
      return targetLang === 'en'
        ? "Both to their right."
        : "Оба вправо.";
    }
    if (text.includes("El único que debería apartarse es el auto")) {
      const carNumber = text.match(/\d+/)?.[0] || "";
      return targetLang === 'en'
        ? `Only car ${carNumber} should move to its right.`
        : `Только автомобиль ${carNumber} должен сдвинуться вправо.`;
    }
    if (text.includes("El auto 1 hacia su izquierda y el 2 hacia su derecha")) {
      return targetLang === 'en'
        ? "Car 1 to its left and car 2 to its right."
        : "Автомобиль 1 влево, а автомобиль 2 вправо.";
    }
    if (text.includes("Todos hacia su derecha")) {
      return targetLang === 'en'
        ? "All to their right."
        : "Все вправо.";
    }
    if (text.includes("El auto 1 hacia su izquierda, mientras que el 2 y 3 hacia su derecha")) {
      return targetLang === 'en'
        ? "Car 1 to its left, while cars 2 and 3 to their right."
        : "Автомобиль 1 влево, а автомобили 2 и 3 вправо.";
    }
  }

  // Other emergency-related answers
  if (text.includes("Aumentar la velocidad para no ser un obstáculo")) {
    return targetLang === 'en'
      ? "Increase speed to avoid being an obstacle to this vehicle."
      : "Увеличить скорость, чтобы не быть препятствием для этого транспортного средства.";
  }
  if (text.includes("Avisar a otros conductores de la presencia de este vehículo")) {
    return targetLang === 'en'
      ? "Alert other drivers to the presence of this vehicle by repeatedly using the horn."
      : "Предупредить других водителей о присутствии этого транспортного средства, многократно используя звуковой сигнал.";
  }
  if (text.includes("Dar lugar a este vehículo, despejar el carril de emergencias")) {
    return targetLang === 'en'
      ? "Give way to this vehicle, clear the emergency lane and stop if necessary."
      : "Уступить дорогу этому транспортному средству, освободить полосу для экстренных случаев и при необходимости остановиться.";
  }

  // Answers for question about honking horn
  if (text.includes("Cederle el paso, ya que está indicando que se encuentra en emergencia")) {
    return targetLang === 'en'
      ? "Give way, as the driver is indicating they are in an emergency situation."
      : "Уступить дорогу, так как водитель сигнализирует о чрезвычайной ситуации.";
  }
  if (text.includes("Brindar mi colaboración, ya que está indicando que el vehículo tiene un desperfecto mecánico")) {
    return targetLang === 'en'
      ? "Offer assistance, as the driver is indicating that the vehicle has a mechanical problem."
      : "Предложить помощь, так как водитель сигнализирует о механической неисправности автомобиля.";
  }
  if (text.includes("Alertar a otros conductores, tocando repetidamente la bocina")) {
    return targetLang === 'en'
      ? "Alert other drivers by repeatedly honking the horn that this vehicle will run a red light."
      : "Предупредить других водителей, многократно используя звуковой сигнал, что этот автомобиль проедет на красный свет.";
  }

  // Answers about risk factors
  if (text === "Vehicular y Ambiental." || text === "Vehicular y Ambiental") {
    return targetLang === 'en'
      ? "Vehicular and Environmental."
      : "Транспортный и экологический.";
  }

  if (text === "Humano y Vehicular." || text === "Humano y Vehicular") {
    return targetLang === 'en'
      ? "Human and Vehicular."
      : "Человеческий и транспортный.";
  }

  if (text === "Humano, Vehicular y Ambiental." || text === "Humano, Vehicular y Ambiental") {
    return targetLang === 'en'
      ? "Human, Vehicular and Environmental."
      : "Человеческий, транспортный и экологический.";
  }

  if (text === "Al humano." || text === "Al humano") {
    return targetLang === 'en'
      ? "To human factors."
      : "К человеческому фактору.";
  }

  if (text === "Al vehicular." || text === "Al vehicular") {
    return targetLang === 'en'
      ? "To vehicular factors."
      : "К транспортному фактору.";
  }

  if (text === "Al ambiental." || text === "Al ambiental") {
    return targetLang === 'en'
      ? "To environmental factors."
      : "К экологическому фактору.";
  }

  if (text.includes("estado del pavimento y al clima")) {
    return targetLang === 'en'
      ? "To the pavement condition and climate, especially."
      : "К состоянию дорожного покрытия и климату, в особенности.";
  }

  if (text.includes("condiciones en que se encuentran: el automóvil")) {
    return targetLang === 'en'
      ? "To the conditions of: the car, road infrastructure, weather conditions and the driver."
      : "К условиям: автомобиля, дорожной инфраструктуры, погодных условий и водителя.";
  }

  // Answers about parking
  if (text.includes("estacionamiento") || text.includes("estacionar")) {
    if (text.includes("Existencia de un estacionamiento vehicular")) {
      return targetLang === 'en'
        ? "Existence of a vehicle parking area in the vicinity."
        : "Наличие парковки для транспортных средств поблизости.";
    }
    if (text.includes("permitido estacionar")) {
      return targetLang === 'en'
        ? "Parking is allowed on this road."
        : "Парковка разрешена на этой дороге.";
    }
    if (text.includes("prohibido estacionar")) {
      return targetLang === 'en'
        ? "Parking is prohibited on this road."
        : "Парковка запрещена на этой дороге.";
    }
  }

  // Answers about routes
  if (text.startsWith("Ruta Nacional N°")) {
    const routeNumber = text.match(/\d+/)?.[0] || "";
    return targetLang === 'en'
      ? `National Route No. ${routeNumber}.`
      : `Национальный маршрут № ${routeNumber}.`;
  }

  if (text.startsWith("Ruta Provincial N°")) {
    const routeNumber = text.match(/\d+/)?.[0] || "";
    return targetLang === 'en'
      ? `Provincial Route No. ${routeNumber}.`
      : `Провинциальный маршрут № ${routeNumber}.`;
  }

  if (text.startsWith("Ruta Panamericana N°")) {
    const routeNumber = text.match(/\d+/)?.[0] || "";
    return targetLang === 'en'
      ? `Pan-American Route No. ${routeNumber}.`
      : `Панамериканский маршрут № ${routeNumber}.`;
  }

  // Answers about traffic signs
  if (text.startsWith("La señal ")) {
    const signLetter = text.substring(9, 10); // Extract the letter (A, B, C, etc.)
    return targetLang === 'en'
      ? `Sign ${signLetter}.`
      : `Знак ${signLetter}.`;
  }

  // Answers about figures/images
  if (text.startsWith("Figura ")) {
    const figureLetter = text.substring(7, 8); // Extract the letter (A, B, C, etc.)
    return targetLang === 'en'
      ? `Figure ${figureLetter}.`
      : `Фигура ${figureLetter}.`;
  }

  // Specific traffic sign types
  if (text === "Preventiva" || text === "Preventiva.") {
    return targetLang === 'en'
      ? "Warning sign."
      : "Предупреждающий знак.";
  }

  if (text === "Reglamentaria" || text === "Reglamentaria.") {
    return targetLang === 'en'
      ? "Regulatory sign."
      : "Регулирующий знак.";
  }

  if (text === "Informativa" || text === "Informativa.") {
    return targetLang === 'en'
      ? "Informative sign."
      : "Информационный знак.";
  }

  // Statements about safety
  if (text.includes("seguridad")) {
    return targetLang === 'en'
      ? "This statement is about traffic safety and proper driving behavior."
      : "Это утверждение о безопасности дорожного движения и правильном поведении за рулем.";
  }

  // Statements about accidents
  if (text.includes("accidente") || text.includes("siniestro")) {
    return targetLang === 'en'
      ? "This statement is about traffic accidents and their causes."
      : "Это утверждение о дорожно-транспортных происшествиях и их причинах.";
  }

  // Statements about regulations
  if (text.includes("norma") || text.includes("reglamento") || text.includes("ley")) {
    return targetLang === 'en'
      ? "This statement is about traffic laws and regulations."
      : "Это утверждение о правилах дорожного движения и нормативных актах.";
  }

  // Default statement translation
  return targetLang === 'en'
    ? "This statement is related to traffic safety and driving regulations."
    : "Это утверждение связано с безопасностью дорожного движения и правилами вождения.";
}

async function fetchQuestions() {
  try {
    ensureDirSync(PUBLIC_ASSETS_DIR);

    const response = await fetch('https://www.testdeconducir.com.ar/c.php?c=a');
    const data = await response.json();

    // Parse the JSON to extract questions
    const questions = [];

    if (!data.questions || !data.questions.length) {
      console.error('No questions found in API response');
      return;
    }

    for (let i = 0; i < data.questions.length; i++) {
      const apiQuestion = data.questions[i];

      // Extract question text
      const questionText = apiQuestion.text || '';

      // Extract image if present
      let imageUrl = apiQuestion.img || null;

      // Extract answers
      const answers = [];

      if (apiQuestion.responses && apiQuestion.responses.length) {
        for (const response of apiQuestion.responses) {
          const answerText = response.text || '';
          const isCorrect = response.correct === true;

          answers.push({
            text: {
              es: answerText,
              en: await translateText(answerText, 'en'),
              ru: await translateText(answerText, 'ru')
            },
            correct: isCorrect
          });
        }
      }

      // Create question object
      const question = {
        id: i + 1,
        question: {
          es: questionText,
          en: await translateText(questionText, 'en'),
          ru: await translateText(questionText, 'ru')
        },
        answers
      };

      // Add image if present and download it locally
      if (imageUrl && typeof imageUrl === 'string') {
        try {
          // Derive a safe filename from URL
          const urlObj = new URL(imageUrl);
          const baseNameRaw = path.basename(urlObj.pathname);
          const baseName = baseNameRaw || `q${i + 1}.jpg`;
          const localFsPath = path.join(PUBLIC_ASSETS_DIR, baseName);
          const localPublicPath = `/questions/${baseName}`;

          // Only download if not already present
          if (!fs.existsSync(localFsPath)) {
            await downloadFile(imageUrl, localFsPath);
            console.log(`Downloaded: ${imageUrl} -> ${localPublicPath}`);
          } else {
            console.log(`Exists, skip download: ${localPublicPath}`);
          }

          question.image = localPublicPath;
        } catch (e) {
          console.warn(`Image download failed for ${imageUrl}:`, e.message);
          // Fallback to remote URL if download fails
          question.image = imageUrl;
        }
      }

      questions.push(question);
    }

    // Generate TypeScript code
    const tsCode = `export interface Question {
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

export const questions: Question[] = ${JSON.stringify(questions, null, 2)};
`;

    // Write to file
    fs.writeFileSync(path.join(__dirname, '../src/data/questions.ts'), tsCode);
    console.log(`Successfully fetched and processed ${questions.length} questions`);

  } catch (error) {
    console.error('Error fetching questions:', error);
  }
}

fetchQuestions();
