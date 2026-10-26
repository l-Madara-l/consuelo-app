export interface EmergencyCard {
  id: string;
  category: string;
  title: string;
  urgentAction: string;
  sayThis: string;
  avoidThis: string;
  quickCheck: string[];
}

export const EMERGENCY_CARDS: EmergencyCard[] = [
  {
    id: 'sos-silencio',
    category: 'Mente en Blanco',
    title: '¡Me he quedado sin palabras y hay un silencio tenso!',
    urgentAction: 'No entres en pánico. Respira profundo por la nariz y suelta los hombros. No tienes que arreglar nada.',
    sayThis: '"No tengo las palabras perfectas para quitarte este dolor ahora mismo, y no quiero decirte frases hechas. Pero quiero que sepas que estoy aquí contigo, escuchándote y que no me voy a ir."',
    avoidThis: '"Bueno... ya verás que todo pasa por algo..." o cambiar de tema de golpe.',
    quickCheck: [
      'Haz contacto visual cálido sin fruncir el ceño.',
      'Asiente despacio para mostrar que la escuchas.',
      'Deja pasar al menos 4 segundos antes de hablar.'
    ]
  },
  {
    id: 'sos-llanto',
    category: 'Llanto Intenso',
    title: 'La persona rompió a llorar desconsolada',
    urgentAction: 'NO le metas un pañuelo en la cara de inmediato. Deja el paquete a su lado con suavidad.',
    sayThis: '"Tómate todo el tiempo que necesites. Deja que salga. No tienes que fingir que estás bien conmigo. Aquí me tienes."',
    avoidThis: '"¡No llores, que me vas a hacer llorar a mí!" o "Ya, ya pasó, no llores más".',
    quickCheck: [
      'Normaliza el llanto: no es debilidad, es drenar cortisol.',
      'Si hay confianza, ofrece tu mano con la palma hacia arriba.',
      'Tolera el silencio con calma mientras se desahoga.'
    ]
  },
  {
    id: 'sos-panico',
    category: 'Pánico / Ansiedad',
    title: 'Hiperventilando o con miedo a morir/infarto',
    urgentAction: 'Cero sermones lógicos. Tráelo al presente a través del cuerpo y los sentidos.',
    sayThis: '"Mírame a los ojos. Pon los pies bien planos en el suelo. Tu cuerpo tiene un pico de adrenalina y asusta mucho, pero estás a salvo y no te vas a morir. Respira conmigo despacio."',
    avoidThis: '"¡Cálmate, tranquilízate que te estás poniendo histérico/a!"',
    quickCheck: [
      'Usa un tono de voz firme, pausado y protector.',
      'Guía respiraciones: 4 segundos inhalar, 6 segundos exhalar.',
      'Pídele que nombre 3 cosas que ve en la habitación.'
    ]
  },
  {
    id: 'sos-duelo',
    category: 'Duelo / Muerte',
    title: 'Acaba de perder a un ser querido',
    urgentAction: 'No busques explicaciones teológicas o positivas a la muerte.',
    sayThis: '"No hay palabras en este mundo que alcancen para describir esta pérdida. Me duele en el alma verte pasar por esto. Aquí tienes mi hombro y mi cariño incondicional."',
    avoidThis: '"Ya descansó / Dios necesitaba un angelito / Tienes que ser fuerte por tus hijos."',
    quickCheck: [
      'Un abrazo largo y en silencio vale más que mil frases.',
      'No tengas miedo de nombrar al ser querido si la persona quiere hablar de él/ella.',
      'Ofrécete para una tarea práctica concreta (comida, trámites).'
    ]
  },
  {
    id: 'sos-rabia',
    category: 'Furia / Injusticia',
    title: 'Está furioso/a y despotricando contra alguien',
    urgentAction: 'No le digas que se calme ni defiendas al causante de la ofensa en ese momento.',
    sayThis: '"Tienes toda la razón del mundo para estar que hierves. Yo también estaría furioso en tu lugar. Suelta todo lo que tengas dentro, aquí puedes desahogarte con libertad."',
    avoidThis: '"Baja la voz, que enfadado no ganas nada" o "Quizás él no lo hizo con mala intención".',
    quickCheck: [
      'Permite la ventilación de la rabia sin asustarte.',
      'Valida la dignidad ofendida.',
      'Pospon el análisis estratégico hasta que baje la adrenalina.'
    ]
  }
];
