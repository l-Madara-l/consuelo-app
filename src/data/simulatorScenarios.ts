import { Scenario } from '../types';

export const SIMULATOR_SCENARIOS: Scenario[] = [
  {
    id: 'scen-carlos',
    name: 'Carlos',
    personAge: 31,
    relation: 'Tu mejor amigo desde la universidad',
    emotion: 'ruptura',
    difficulty: 'Principiante',
    title: 'La boda cancelada y la traición',
    backgroundStory: 'Carlos y su prometida llevaban 6 años juntos y tenían la boda pagada para dentro de 3 meses. Ayer ella le confesó que ya no lo ama y que se va de la casa.',
    bodyLanguage: 'Sentado en el borde del sofá, con la mirada clavada en el suelo, las manos entrelazadas temblando y lágrimas cayendo sobre sus pantalones.',
    openingStatement: 'No entiendo nada... Todo estaba listo, las invitaciones, los boletos de avión... ¿Cómo puede alguien con quien te dormías ayer mirarte a los ojos hoy y decirte que ya no siente nada por ti? Siento que mi vida entera era una mentira y no sé cómo voy a levantarme mañana.',
    internalNeed: 'Necesita sentir que sus 6 años de amor fueron valiosos y reales, que no está loco por estar devastado y que no tiene que fingir entereza frente a ti.',
    commonPitfalls: [
      'Decirle: "Ella era una interesada / nunca me cayó bien". (Carlos aún la ama y eso le causará culpa o necesidad de defenderla)',
      'Decirle: "Mejor ahora que después de casados con hijos". (Minimiza el dolor catastrófico actual)',
      'Aconsejarle de inmediato qué hacer con el dinero de las reservas de la boda.'
    ],
    idealKeyPoints: [
      'Validar el shock y la desgarradora sensación de vértigo e incredulidad.',
      'Asegurarle que su dolor tiene todo el sentido del mundo.',
      'Ofrecerle presencia incondicional para la noche de hoy.'
    ]
  },
  {
    id: 'scen-elena',
    name: 'Elena',
    personAge: 64,
    relation: 'Tu tía favorita',
    emotion: 'duelo',
    difficulty: 'Intermedio',
    title: 'El vacío de la casa tras la pérdida',
    backgroundStory: 'Su esposo durante 38 años falleció hace tres semanas de un infarto repentino. Todos los familiares fueron al funeral y ya volvieron a sus vidas cotidianas, dejándola sola en la casa.',
    bodyLanguage: 'Sosteniendo una taza de té fría que no ha probado, con ojeras profundas y la voz apagada, mirando hacia la silla vacía donde su esposo solía leer.',
    openingStatement: 'Todos me dicen en los mensajes que "sea fuerte", que "el tiempo lo cura todo" y que "tengo que salir a caminar"... Pero no quiero ser fuerte. Abro los ojos por la mañana y el silencio de esta casa me corta la respiración. Desearía no tener que despertar.',
    internalNeed: 'Necesita que alguien le dé permiso absoluto de NO ser fuerte, de llorar a su compañero y de no fingir que el tiempo cura mágicamente una ausencia tan profunda.',
    commonPitfalls: [
      'Repetirle que "al menos no sufrió" o que "está descansando en el cielo".',
      'Presionarla para que salga a distraerse o cambie las cosas de la casa.',
      'Asustarse con su deseo de no despertar y sermonearla sobre el valor de la vida.'
    ],
    idealKeyPoints: [
      'Validar que tiene derecho a no ser fuerte y que el dolor de 38 años de amor es inmenso.',
      'Acompañar el silencio de la casa sin prisas por marcharse.',
      'Recordar al fallecido con cariño y ofrecer apoyo logístico real.'
    ]
  },
  {
    id: 'scen-mateo',
    name: 'Mateo',
    personAge: 23,
    relation: 'Tu primo menor',
    emotion: 'ansiedad',
    difficulty: 'Intermedio',
    title: 'Crisis de pánico ante un examen decisivo',
    backgroundStory: 'Mañana rinde el examen final de medicina que ha reprobado dos veces. Si no aprueba, queda fuera de la carrera. Está encerrado en su cuarto con taquicardia.',
    bodyLanguage: 'Respirando rápido por la boca, caminando de un lado a otro tocándose el pecho, con las manos sudorosas y la pupila dilatada.',
    openingStatement: 'No puedo... no me entra nada en la cabeza, se me nubló la vista. Siento el corazón en la garganta, me va a dar algo... Voy a arruinar todo mi futuro, mis papás sacrificaron tanto por esto...',
    internalNeed: 'Anclaje somático urgente: necesita que lo calmes a nivel físico, que desaceleres su respiración y que desactives la profecía de catástrofe.',
    commonPitfalls: [
      'Decirle: "¡Tranquilízate, que así te va a dar un patatús!".',
      'Ponerte a repasar con él las preguntas del examen.',
      'Decirle "si no apruebas no pasa nada", cuando para él sí es el fin del mundo.'
    ],
    idealKeyPoints: [
      'Poner los pies en el suelo, contacto visual firme y respiración guiada.',
      'Asegurarle que es adrenalina, que su cuerpo está a salvo y que no le dará un ataque.',
      'Separar su valor como ser humano de una nota de examen.'
    ]
  },
  {
    id: 'scen-sofia',
    name: 'Sofía',
    personAge: 29,
    relation: 'Tu compañera de trabajo y amiga',
    emotion: 'despido',
    difficulty: 'Avanzado',
    title: 'El mérito robado y la humillación laboral',
    backgroundStory: 'Pasó 4 meses trabajando fines de semana en la presentación que cerró una cuenta de 2 millones de dólares. Hoy en la reunión global, su jefe presentó el proyecto como exclusivamente suyo y la criticó públicamente por un detalle irrelevante.',
    bodyLanguage: 'Temblando de rabia y vergüenza en el baño de la oficina, secándose las lágrimas con rabia mientras aprieta los puños.',
    openingStatement: 'Me tragué todas las noches, no vi a mi familia en semanas, y el cínico de Marcos dijo frente al director general que yo solo fui la asistente de apoyo. Me humilló en frente de todos. Me quiero morir de la impotencia, siento ganas de renunciar e irme a los gritos.',
    internalNeed: 'Necesita que valides su indignación absoluta, que le confirmes que lo que hicieron es una canallada intolerable y que le permitas descargar la rabia sin juzgarla.',
    commonPitfalls: [
      'Decirle: "Cálmate porque si gritas te van a despedir".',
      'Decirle: "Bueno, al menos tienes empleo en esta crisis".',
      'Ponerte a redactar una carta a Recursos Humanos en ese mismo instante.'
    ],
    idealKeyPoints: [
      'Validar al 100% su furia: cualquier persona sentiría rabia salvaje ante semejante robo.',
      'Reconocer su talento indiscutible y el esfuerzo gigantesco que puso.',
      'Contenerla para que no tome decisiones impulsivas en caliente, prometiendo acompañarla a planear la respuesta estratégica más tarde.'
    ]
  },
  {
    id: 'scen-valeria',
    name: 'Valeria',
    personAge: 27,
    relation: 'Una buena amiga de tu grupo',
    emotion: 'depresion',
    difficulty: 'Avanzado',
    title: 'La sensación de no importarle a nadie',
    backgroundStory: 'Valeria lleva meses aislándose. Tuvo que cancelar una salida por no tener energía y nadie en el chat grupal le preguntó cómo estaba. Siente que es invisible.',
    bodyLanguage: 'Sentada en un rincón con un abrigo puesto a pesar de no hacer frío, abrazando sus rodillas y mirando al vacío con una sonrisa triste y amarga.',
    openingStatement: 'No tienes que venir a hacerme compañía por compromiso, en serio. Me di cuenta de que si mañana desaparezco o me borro de todas partes, a nadie le haría ninguna falta. La gente solo se acuerda de mí cuando necesita un favor.',
    internalNeed: 'Necesita una prueba inequívoca de afecto genuino, ser vista y saber que tu presencia allí no es lástima ni obligación, sino verdadero amor por quien es.',
    commonPitfalls: [
      'Enfadarte y decirle: "¡Qué injusta eres, nosotros siempre te queremos!".',
      'Justificar al resto del grupo con excusas de agenda.',
      'Decirle "tienes depresión, ve al psiquiatra" con tono de descarte.'
    ],
    idealKeyPoints: [
      'Aclarar de inmediato con amor sincero que estás ahí porque la quieres a ella, no por obligación.',
      'Validar el dolor tan desgarrador que provoca sentirse invisible.',
      'Recordarle anécdotas o detalles concretos de por qué su vida y su risa iluminan tu mundo.'
    ]
  }
];
