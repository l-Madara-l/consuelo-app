import { PhraseItem } from '../types';

export const PHRASES_BANK: PhraseItem[] = [
  // --- SALVAVIDAS (Cuando tu mente se queda en blanco total) ---
  {
    id: 'salv-1',
    category: 'salvavidas',
    situation: 'Te has quedado en blanco total y no sabes qué decir para no meter la pata',
    phrase: 'No tengo las palabras perfectas para quitarte este dolor ahora mismo, y no quiero decirte frases hechas. Pero quiero que sepas que estoy aquí contigo, escuchándote y que no me voy a ir a ninguna parte.',
    intention: 'Reconocer honestamente tu falta de sabiduría mágica mientras brindas 100% de presencia incondicional.',
    toneTip: 'Voz baja, ritmo pausado, mirada suave y serena a los ojos.',
    forbiddenAlternative: 'Bueno... todo pasa por algo. Ya verás que mañana es otro día.',
    whyAvoid: 'Las frases hechas transmiten pereza afectiva y hacen que el otro sienta que su tragedia es un trámite sin importancia.'
  },
  {
    id: 'salv-2',
    category: 'salvavidas',
    situation: 'La persona acaba de romper en un llanto inconsolable y te asusta el silencio',
    phrase: 'Tómate todo el tiempo que necesites. No tienes que fingir que estás bien conmigo. Aquí me tienes para sostener lo que haga falta.',
    intention: 'Normalizar las lágrimas y disipar cualquier vergüenza que la persona sienta por llorar.',
    toneTip: 'Voz muy suave, casi susurro cariñoso, hombros relajados.',
    forbiddenAlternative: '¡No llores, no llores! Mira que me vas a hacer llorar a mí.',
    whyAvoid: 'Le ordena cortar su desahogo fisiológico y traslada la atención a tu incomodidad.'
  },
  {
    id: 'salv-3',
    category: 'salvavidas',
    situation: 'No sabes si dar un consejo o solo escuchar',
    phrase: 'Veo la carga tan grande que llevas encima. Para cuidarte mejor hoy: ¿necesitas que solo te escuche y desahogarte, o quieres que busquemos ideas juntos? Lo que tú prefieras está perfecto.',
    intention: 'Darle el control a la persona afligida sobre el tipo de apoyo que necesita.',
    toneTip: 'Tono neutro, cálido, sin exigencia de rapidez.',
    forbiddenAlternative: 'Lo que tú tienes que hacer de inmediato es...',
    whyAvoid: 'Invade su autonomía y asume que no sabe pensar por sí misma.'
  },

  // --- DUELO Y PÉRDIDA ---
  {
    id: 'due-1',
    category: 'duelo',
    situation: 'Fallecimiento de un ser querido (padre, madre, pareja, hijo)',
    phrase: 'No hay palabras en este mundo que alcancen para describir esta pérdida tan inmensa. Me duele en el alma verte pasar por esto. Aquí tienes mi hombro y mi silencio el tiempo que haga falta.',
    intention: 'Validar la irreparabilidad del dolor sin inventar consuelos místicos o baratos.',
    toneTip: 'Abrazo firme con ambas manos en la espalda antes de hablar.',
    forbiddenAlternative: 'Ya descansó, Dios sabe lo que hace / Ahora es un angelito en el cielo.',
    whyAvoid: 'Genera indignación silenciosa; quien ama al fallecido lo quería con vida aquí en la tierra.'
  },
  {
    id: 'due-2',
    category: 'duelo',
    situation: 'Cuando la persona en duelo siente culpa por reírse o por no haber hecho más',
    phrase: 'Tu amor por él/ella fue inmenso y real cada día. Lo que estás sintiendo hoy es el peso de ese amor tan profundo. Trátate con la misma piedad y ternura con la que él/ella te miraba.',
    intention: 'Aliviar la culpa del sobreviviente y renombrar el dolor como una manifestación de amor.',
    toneTip: 'Mirada afectuosa, cabeza ligeramente inclinada.',
    forbiddenAlternative: 'No te sientas culpable, de nada sirve ya.',
    whyAvoid: 'Invalidar la culpa racionalmente no la borra; se necesita compasión.'
  },
  {
    id: 'due-3',
    category: 'duelo',
    situation: 'Semanas o meses después de la muerte, cuando todos los demás ya se olvidaron',
    phrase: 'He estado pensando mucho en ti estos días. Sé que cuando pasa el funeral el mundo sigue su marcha y es cuando más se siente la soledad en la casa. Solo quería recordarte que sigo aquí para ti.',
    intention: 'Hacerle saber que su duelo no ha caducado en tu memoria.',
    toneTip: 'Mensaje de voz tranquilo o llamada sin exigencia de respuesta inmediata.',
    forbiddenAlternative: '¿Ya estás mejor? Tienes que salir a distraerte para superarlo.',
    whyAvoid: 'El duelo no se "supera" como una gripe; se aprende a vivir alrededor de la ausencia.'
  },

  // --- RUPTURA AMOROSA Y DESAMOR ---
  {
    id: 'rup-1',
    category: 'ruptura',
    situation: 'Acaba de terminar una relación larga o sufrió una traición/infidelidad',
    phrase: 'Duele tanto porque tú te entregaste de verdad y creíste en esa historia con todo tu ser. Que se rompa un proyecto de vida así deja un vacío desgarrador. Llora todo lo que necesites, tienes derecho a estar devastado/a.',
    intention: 'Validar la pureza de su entrega sin que sienta vergüenza por haber confiado.',
    toneTip: 'Contacto visual empático, asintiendo con comprensión.',
    forbiddenAlternative: 'Esa persona nunca te mereció, te hiciste un favor, hay más peces en el mar.',
    whyAvoid: 'Anula los años de amor sincero y hace que la persona se sienta tonta por haber amado.'
  },
  {
    id: 'rup-2',
    category: 'ruptura',
    situation: 'La persona siente ganas de rogarle a su expareja o escribirle de madrugada',
    phrase: 'Entiendo perfectamente esa desesperación en el pecho; tu cerebro está pasando por un síndrome de abstinencia brutal. Antes de mandarle ese mensaje, ¿quieres decirme a mí todo lo que le escribirías a él/ella?',
    intention: 'Ofrecerte como amortiguador para que drene la urgencia sin lastimar su dignidad.',
    toneTip: 'Voz protectora y comprensiva, sin juzgar su debilidad momentánea.',
    forbiddenAlternative: '¡Si le escribes eres una persona sin amor propio y ya no te escucho más!',
    whyAvoid: 'La amenaza y el juicio solo logran que la persona te oculte lo que hace y sufra a escondidas.'
  },

  // --- ANSIEDAD Y ATAQUES DE PÁNICO ---
  {
    id: 'ans-1',
    category: 'ansiedad',
    situation: 'Alguien está hiperventilando o temblando en pleno ataque de pánico',
    phrase: 'Mírame a los ojos. Pon tus dos pies firmes en el suelo. Tu cuerpo tiene un pico de adrenalina y da muchísimo miedo, pero estás a salvo y no te vas a morir. Respira conmigo: dentro... y fuera despacio. No te voy a soltar.',
    intention: 'Proporcionar anclaje somático y certeza neurobiológica de supervivencia.',
    toneTip: 'Voz grave, firme, pausada, sin mostrar desesperación.',
    forbiddenAlternative: '¡Cálmate, cálmate! ¡No pasa nada, es solo tu mente, respira bien!',
    whyAvoid: 'Gritarle "cálmate" aumenta la sensación de peligro y sobrecarga el sistema límbico.'
  },
  {
    id: 'ans-2',
    category: 'ansiedad',
    situation: 'Sobrecarga mental crónica: siente que todo colapsará si para un segundo',
    phrase: 'Llevas demasiado tiempo sosteniendo el mundo entero sobre tus hombros sin pedir relevo. El cansancio que sientes no es pereza; es tu cuerpo gritando que ya no da más. ¿Qué es lo único indispensable hoy y qué podemos soltar?',
    intention: 'Legitimar el agotamiento y ayudar a discriminar prioridades.',
    toneTip: 'Tono cálido de complicidad y cuidado.',
    forbiddenAlternative: 'El que quiere puede, organízate mejor con una agenda.',
    whyAvoid: 'Añade una capa de culpa por "no ser lo bastante eficiente".'
  },

  // --- FRACASO, DESPIDO Y VERGÜENZA ---
  {
    id: 'fra-1',
    category: 'fracaso',
    situation: 'Despido laboral injusto o suspensión de un proyecto en el que dejó la piel',
    phrase: 'Qué golpe tan duro e injusto. Pusiste meses de desvelo y talento en esto y que termine así da una rabia e impotencia enormes. Quiero que sepas que esto habla de las fallas del sistema o de la empresa, no de tu valor y capacidad como profesional.',
    intention: 'Separar el resultado externo de la valía e identidad intrínseca de la persona.',
    toneTip: 'Firmeza y convicción en el reconocimiento de su talento.',
    forbiddenAlternative: 'Bueno, cuando una puerta se cierra una ventana se abre, ya encontrarás algo mejor.',
    whyAvoid: 'Cierra prematuramente el espacio para procesar la rabia legítima y el duelo profesional.'
  },
  {
    id: 'fra-2',
    category: 'fracaso',
    situation: 'Reprobó un examen crucial o cometió un error grave del que se avergüenza',
    phrase: 'Sé que ahora mismo te estás dando latigazos mentales durísimos. Un tropezón grande asusta, pero equivocarse es la condición de los que se atreven a intentarlo de verdad. Aquí estoy contigo para levantar el polvo cuando estés listo/a.',
    intention: 'Frenar la autocrítica destructiva y devolver la dignidad.',
    toneTip: 'Tono fraternal, mano en el hombro si hay confianza.',
    forbiddenAlternative: 'Te lo dije... si me hubieras hecho caso esto no pasaba.',
    whyAvoid: 'El "te lo dije" es un acto de ego para demostrar superioridad a costa del dolor ajeno.'
  },

  // --- RABIA E INDIGNACIÓN ---
  {
    id: 'rab-1',
    category: 'rabia',
    situation: 'La persona está furiosa por una injusticia o maltrato',
    phrase: 'Tienes toda la razón del mundo para estar furioso/a. Yo también estaría hirviendo en tu lugar. Suelta todo lo que tengas que decir, este espacio es seguro para que descargues esa rabia.',
    intention: 'Permitir la catarsis sin reprender la emoción de la ira.',
    toneTip: 'Energía acorde pero contenida, validando la fuerza del enojo.',
    forbiddenAlternative: 'Estando enfadado/a no solucionas nada, baja la voz y sé razonable.',
    whyAvoid: 'Silencia la rabia justa y hace que la persona se sienta amordazada.'
  },

  // --- VACÍO Y SENSACIÓN DE INVALIDEZ ---
  {
    id: 'vac-1',
    category: 'vacio',
    situation: 'Te dice: "Siento que no sirvo para nada / A nadie le importaría si desaparezco"',
    phrase: 'Me estremece escuchar lo solo/a y desconectado/a que te sientes por dentro ahora mismo. A mí me importas muchísimo, tu presencia en mi vida es un tesoro y no quiero un mundo sin ti. Estoy aquí para caminar a tu lado en esta oscuridad.',
    intention: 'Ofrecer anclaje vital inmediato, afecto explícito y derribar la sensación de invisibilidad.',
    toneTip: 'Contacto visual total, cercanía física suave, voz profundamente sentida.',
    forbiddenAlternative: '¡Cómo dices esas tonterías! Con todo lo que tienes, desagradecido/a.',
    whyAvoid: 'Acusa a la persona con depresión de ser "desagradecida", empujándola al aislamiento mortal.'
  }
];

export const TACTICS_GUIDE = [
  {
    id: 'tac-1',
    name: 'El Silencio de 4 Segundos',
    tagline: 'El secreto para que la otra persona comparta su dolor más profundo',
    howToApply: 'Cuando la persona termine una frase o haga una pausa con la mirada perdida, no te apresures a responder. Cuenta mentalmente "uno... dos... tres... cuatro". Mantén tus ojos conectados con cariño.',
    whyItWorks: 'En esos 4 segundos, la persona reúne el coraje para decir lo que de verdad le quema por dentro.'
  },
  {
    id: 'tac-2',
    name: 'La Pregunta del Semáforo',
    tagline: 'Desactiva el reflejo de dar consejos no deseados',
    howToApply: 'Pregunta con calma: "¿Para saber cómo acompañarte mejor hoy: necesitas solo desahogarte y que te escuche, o quieres que luego pensemos soluciones juntos?"',
    whyItWorks: 'El 80% elegirá "solo desahogarme", quitándote de inmediato la presión de tener que resolver su problema.'
  },
  {
    id: 'tac-3',
    name: 'El Reflejo Emocional Subterráneo',
    tagline: 'Nombrar la emoción que no se atreve a pronunciar',
    howToApply: 'Identifica la emoción oculta y di: "Suena a que más que tristeza, lo que sientes es una profunda sensación de abandono después de todo lo que diste".',
    whyItWorks: 'Al escuchar su dolor nombrado con precisión milimétrica, la persona siente que por primera vez en su vida alguien la entiende de verdad.'
  },
  {
    id: 'tac-4',
    name: 'El Ofrecimiento Concreto (No "cualquier cosa")',
    tagline: 'Cómo ayudar sin poner la carga burocrática sobre la víctima',
    howToApply: 'En vez de "Cualquier cosa me avisas", ofrece algo específico: "Hoy paso por el súper; ¿te dejo fruta y pan en la puerta a las 7? No te preocupes por salir a recibirme".',
    whyItWorks: 'Elimina la vergüenza de pedir ayuda y alivia una carga doméstica real.'
  }
];
