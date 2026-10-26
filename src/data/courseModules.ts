import { CourseModule } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'modulo-1',
    order: 1,
    title: 'La Trampa del Silencio y el Reflejo Corrector',
    subtitle: 'Por qué nos congelamos ante el dolor y cómo salir de la parálisis',
    icon: 'Brain',
    badge: 'Fundamentos',
    estimatedHours: '45 min de lectura y práctica',
    description: 'Descubre por qué tu mente se queda en blanco cuando alguien sufre frente a ti, desmonta el mito de "tener que dar una solución sabia", y aprende a transformar la incomodidad en un refugio seguro.',
    lessons: [
      {
        id: 'les-1-1',
        title: '1.1 La anatomía del congelamiento: ¿Por qué te quedas callado?',
        readingTimeMinutes: 8,
        summary: 'Entiende los 3 disparadores psicológicos que te hacen enmudecer y cómo recalibrar tu expectativa interna.',
        content: `### ¿Por qué te quedas paralizado?

Cuando un amigo, pareja o familiar te dice: *"No puedo más, siento que mi vida se desmorona"* o rompe en llanto desconsolado, en tu cerebro ocurre una respuesta de estrés inmediata. 

Casi todas las personas que "se quedan calladas" no lo hacen por falta de amor o empatía, sino por **tres bloqueos psicológicos comunes**:

#### 1. El Mito del Oráculo Sabio
Crees erróneamente que para hablar necesitas tener una respuesta brillante que resuelva mágicamente el problema del otro o una frase de película que le quite las lágrimas al instante. Como sabes que no tienes esa frase mágica, el miedo a "meter la pata" te paraliza.

> **Regla de Oro:** La persona que sufre **no busca un genio que le resuelva la vida**, busca un testigo compasivo que no huya de su dolor.

#### 2. La Incomodidad con el Sufrimiento sin Salida Inmediata
Nuestra sociedad está obsesionada con la productividad y la felicidad obligatoria. Cuando vemos dolor crudo (una muerte, una infidelidad, una enfermedad), nuestro cerebro busca escapar del malestar. El silencio tenso es a menudo un intento involuntario de no abrir una "caja de Pandora" que no sabemos cómo cerrar.

#### 3. El Terror a Empeorar las Cosas
*"¿Y si digo algo insensible?", "¿Y si se pone a llorar más fuerte?", "¿Y si piensa que no me importa?"*. Este parloteo mental te roba el 90% de tu atención, impidiéndote escuchar con el corazón.

### La transformación del paradigma
* **Antes pensabas:** *"Tengo que encontrar las palabras perfectas para que deje de estar triste."*
* **Ahora sabrás:** *"Mi único trabajo es hacerle saber que no está solo/a en este momento oscuro."*
`,
        keyTakeaways: [
          'Quedarte en blanco no es falta de cariño, es sobrecarga de ansiedad por querer "hacerlo perfecto".',
          'Consolar no es borrar el dolor; es acompañar mientras la persona lo procesa.',
          'El 80% del alivio que siente el otro proviene de saberse escuchado sin prisa, no del consejo que le des.'
        ],
        tactics: [
          {
            name: 'La Declaración de Vulnerabilidad Compartida',
            description: 'Qué decir en voz alta cuando tu mente se queda en blanco total para romper la tensión sin falsedades.',
            stepByStep: [
              'Respira hondo y baja los hombros.',
              'Haz contacto visual suave (no inquisitivo).',
              'Admite que la situación te conmueve y que no tienes fórmulas mágicas, pero que estás 100% allí.'
            ],
            example: '"No tengo las palabras perfectas para quitarte este dolor ahora mismo, y no quiero decirte frases vacías. Pero quiero que sepas que estoy aquí contigo, escuchándote y que no me voy a ir."'
          }
        ],
        dialogue: {
          context: 'Un amigo te dice con la voz quebrada que le acaban de diagnosticar una enfermedad crónica a su madre.',
          poorApproach: {
            said: '(Silencio prolongado incómodo mientras miras al suelo) ... Bueno... pero seguro que con los avances de la medicina todo sale bien. No te preocupes antes de tiempo.',
            problem: 'El silencio transmitió frialdad y luego el falso optimismo minimizó la angustia real.',
            otherReaction: 'El amigo se siente incomprendido, traga saliva y cambia de tema sintiéndose solo.'
          },
          masterApproach: {
            said: 'Dios mío, Carlos... Me dejas helado. No puedo ni imaginar el susto y la angustia que debes tener en el pecho ahora mismo. No tengo palabras para arreglar esto, pero aquí me tienes, tómate el tiempo que necesites. ¿Cómo estás respirando esto hoy?',
            tactic: 'Nombrar el impacto, admitir la falta de palabras mágicas y abrir espacio para el desahogo.',
            whyItWorks: 'Legitima el susto sin juzgarlo ni meter optimismo forzado, transmitiendo presencia incondicional.',
            otherReaction: 'Carlos suspira con alivio, sus hombros bajan y empieza a desahogarse en confianza.'
          }
        }
      },
      {
        id: 'les-1-2',
        title: '1.2 El "Reflejo Corrector": Por qué tus ganas de ayudar a veces arruinan el consuelo',
        readingTimeMinutes: 10,
        summary: 'Aprende a desactivar el impulso natural de dar consejos rápidos, juzgar o buscar el lado positivo apresurado.',
        content: `### ¿Qué es el "Reflejo Corrector"?
El *Reflejo Corrector* (Righting Reflex) es un término acuñado en psicología clínica (Entrevista Motivacional). Describe la tendencia casi irresistible que tenemos los seres humanos de **reparar lo roto, dar soluciones lógicas y señalar cómo arreglar las cosas** cuando alguien nos plantea un conflicto.

### Por qué el Reflejo Corrector lastima a quien sufre:

1. **Invalida el proceso emocional:** Cuando alguien está devastado y le dices: *"Lo que tienes que hacer es demandarlo"* o *"Descárgate Tinder para olvidarlo"*, le estás diciendo implícitamente: *"Tu emoción es un estorbo inútil, salte de ahí ya"*.
2. **Lo infantiliza:** Asumes que la otra persona es incapaz de pensar en soluciones obvias. En el 95% de los casos, la persona ya sabe qué opciones lógicas existen; lo que le falta es energía emocional y claridad para procesar la herida.
3. **Crea desconexión:** Dar un consejo rápido suele ser una forma encubierta de nosotros para apagar su llanto y sentirnos útiles y cómodos.

### Las 3 Formas de Positividad Tóxica que debes erradicar:
* ❌ *"Todo pasa por algo."* (Provoca rabia e incomprensión ante tragedias injustas).
* ❌ *"Al menos tienes salud / Al menos no fue peor."* (Genera culpa en la víctima por sentirse mal).
* ❌ *"No llores, tienes que ser fuerte."* (Reprime el desahogo natural del sistema nervioso).
`,
        keyTakeaways: [
          'Nunca des un consejo en los primeros 15 minutos de un desahogo agudo a menos que te lo pidan explícitamente.',
          'La positividad tóxica es un analgésico falso que deja a la persona más sola de lo que estaba.',
          'Diferencia entre "Reparar" (resolver un problema técnico) y "Sostener" (abrazar una herida emocional).'
        ],
        tactics: [
          {
            name: 'La Pregunta del Semáforo (¿Desahogo o Estrategia?)',
            description: 'Cómo saber exactamente qué espera la otra persona de ti sin jugar a las adivinanzas.',
            stepByStep: [
              'Escucha atentamente el primer desahogo sin interrumpir.',
              'Valida brevemente la pesadez de la situación.',
              'Haz la pregunta de permiso directo con voz serena.'
            ],
            example: '"Te escucho y veo lo agotador que es esto. Para saber cómo cuidarte mejor hoy: ¿necesitas solo desahogarte y soltar todo lo que llevas dentro, o te gustaría que en algún momento pensemos opciones juntos? Lo que tú prefieras está bien."'
          }
        ],
        dialogue: {
          context: 'Tu pareja llega del trabajo llorando de frustración porque la regañaron injustamente en una reunión.',
          poorApproach: {
            said: 'Pero amor, no llores por eso. Mañana hablas con recursos humanos y dejas una constancia formal. Además, ya te dije que deberías actualizar tu currículum y mandar solicitudes a otra empresa.',
            problem: 'Se saltó el dolor de la humillación pública y saltó a ser el "gerente de proyectos" de su vida.',
            otherReaction: 'La pareja se enoja: "¡Nunca me entiendes, no quiero tus planes de acción, solo quiero que me abraces!"'
          },
          masterApproach: {
            said: 'Qué momento tan injusto y amargo te hicieron pasar, cariño... Ven aquí. Deja que salga toda esa rabia y dolor. Tienen cero derecho a tratarte así. Estoy contigo.',
            tactic: 'Validación de la indignación, contención afectiva física y posponer soluciones hasta que el sistema nervioso se calme.',
            whyItWorks: 'Sacia la necesidad primaria de protección y validación antes de requerir pensamiento lógico.',
            otherReaction: 'Se apoya en tu hombro, llora unos minutos y luego dice: "Gracias, necesitaba escuchar eso. Ahora sí me siento con fuerzas de pensar qué hacer".'
          }
        }
      },
      {
        id: 'les-1-3',
        title: '1.3 Corregulación: Cómo tu cuerpo y respiración comunican más que tus palabras',
        readingTimeMinutes: 7,
        summary: 'La neurobiología de la presencia: el tono vagal, la mirada y cómo calmar la angustia del otro desde tu propio cuerpo.',
        content: `### Somos mamíferos de manada: El poder del sistema nervioso
Según la Teoría Polivagal (Dr. Stephen Porges), nuestro sistema nervioso evalúa constantemente si el entorno es seguro o peligroso.

Cuando una persona está desbordada de dolor o llanto, su sistema de alerta simpático (lucha o huida) o dorsal (colapso) está encendido. En ese estado, **la corteza prefrontal (la lógica) está apagada**. No procesa argumentos elaborados. Lo que procesa es:

1. **Tu prosodia (tono de voz):** Si hablas rápido y agudo, contagias alarma. Si hablas lento, grave y suave, mandas señales biológicas de seguridad.
2. **Tu ritmo respiratorio:** Si tú respiras pausado y profundo con exhalaciones largas, el sistema nervioso del otro tenderá a sincronizarse (corregulación biológica).
3. **Tu postura corporal:** Estar rígido, cruzar los brazos o mirar el móvil/reloj comunica "tengo prisa por salir de aquí". Inclinarse ligeramente hacia adelante con manos abiertas y relajadas comunica refugio.
`,
        keyTakeaways: [
          'Antes de abrir la boca, exhala profundamente y relaja tu mandíbula y hombros.',
          'Baja el volumen y la velocidad de tus palabras a la mitad de tu ritmo habitual.',
          'El silencio acompañado con una mirada tierna es mil veces más sanador que un monólogo de autoayuda.'
        ],
        tactics: [
          {
            name: 'El Anclaje Corporal del Acompañante (Técnica T-R-P)',
            description: 'Tono, Ritmo y Postura para generar seguridad inmediata.',
            stepByStep: [
              'T (Tono): Baja un tono a tu voz, hazla cálida y aterciopelada.',
              'R (Ritmo): Habla en oraciones cortas con pausas de 2 a 3 segundos entre ideas.',
              'P (Postura): Descruza brazos y piernas, mantén el pecho abierto y asiente con suavidad cada tanto.'
            ],
            example: '"(Pausa de 3 segundos... respiración suave)... Estoy aquí. Tómate tu tiempo. Respira a tu ritmo."'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'Cuando alguien se derrumba emocionalmente frente a ti, ¿cuál es el error más frecuente y dañino que cometemos creyendo que ayudamos?',
        options: [
          {
            id: 'o1',
            text: 'Guardar silencio con calidez mientras termina de desahogarse.',
            isCorrect: false,
            explanation: 'Guardar silencio cálido es en realidad una de las mejores tácticas para dar espacio.'
          },
          {
            id: 'o2',
            text: 'Activar el "Reflejo Corrector": dar consejos inmediatos o exigirle ver el lado positivo ("todo pasa por algo").',
            isCorrect: true,
            explanation: '¡Exacto! El reflejo corrector invalida la emoción cruda y deja a la persona sintiéndose incomprendida o culpable.'
          },
          {
            id: 'o3',
            text: 'Preguntarle con ternura qué es lo que más le duele en ese instante.',
            isCorrect: false,
            explanation: 'Indagar con ternura es una táctica recomendada de escucha activa.'
          }
        ]
      },
      {
        id: 'q1-2',
        question: '¿Por qué la frase "Tienes que ser fuerte, todo pasa por algo" resulta perjudicial para alguien en pleno duelo?',
        options: [
          {
            id: 'o1',
            text: 'Porque le impone una lección moral y le prohíbe expresar su dolor y desolación legítima.',
            isCorrect: true,
            explanation: 'Correcto. La positividad tóxica bloquea la necesidad de llorar y tramitar la pérdida.'
          },
          {
            id: 'o2',
            text: 'Porque es una frase demasiado larga de recordar.',
            isCorrect: false,
            explanation: 'No tiene nada que ver con la longitud, sino con la invalidación afectiva.'
          },
          {
            id: 'o3',
            text: 'Porque la persona prefiere que le cuentes una anécdota personal sobre ti.',
            isCorrect: false,
            explanation: 'Hablar de uno mismo es robar protagonismo y es otro error clásico.'
          }
        ]
      },
      {
        id: 'q1-3',
        question: 'Si tu mente se queda completamente en blanco y temes no saber qué decir, ¿qué puedes hacer?',
        options: [
          {
            id: 'o1',
            text: 'Inventarte una solución rápida para que no se note que no sabes del tema.',
            isCorrect: false,
            explanation: 'Inventar soluciones apresuradas suele generar consejos pésimos y desconexión.'
          },
          {
            id: 'o2',
            text: 'Mirar el móvil discretamente esperando a que se calme el momento.',
            isCorrect: false,
            explanation: 'Eso transmite abandono y desinterés rotundo.'
          },
          {
            id: 'o3',
            text: 'Admitir con honestidad y cariño tu falta de palabras, asegurándole tu presencia y apoyo incondicional.',
            isCorrect: true,
            explanation: '¡Excelente! Decir "No tengo las palabras perfectas para quitarte este dolor, pero estoy aquí contigo" genera enorme conexión y confianza.'
          }
        ]
      }
    ]
  },
  {
    id: 'modulo-2',
    order: 2,
    title: 'Los 4 Pilares de la Escucha Compasiva',
    subtitle: 'Cómo escuchar de verdad para que la otra persona se sienta profundamente comprendida',
    icon: 'Ear',
    badge: 'Técnicas de Escucha',
    estimatedHours: '50 min de lectura y práctica',
    description: 'Aprende a usar el silencio fértil de 4 segundos, la técnica del reflejo emocional para descifrar el sentimiento real, y las preguntas puente que limpian la carga emocional.',
    lessons: [
      {
        id: 'les-2-1',
        title: '2.1 El Silencio Fértil: El arte de no interrumpir los puntos suspensivos',
        readingTimeMinutes: 8,
        summary: 'Cómo aguantar las ganas de intervenir cuando la otra persona se detiene a tomar aire o pensar.',
        content: `### El poder de los "Puntos Suspensivos"
Cuando alguien está contando algo doloroso y de pronto se queda callado, ¿qué haces?
La mayoría de las personas no tolera ni 1.5 segundos de silencio antes de soltar un comentario: *"¿Y entonces?", "Bueno, pero...", "Yo creo que..."*.

En psicología del consuelo, existe un concepto vital: **El Silencio Fértil**.
Cuando la persona hace una pausa, en su mente están ocurriendo tres cosas cruciales:
1. Está reuniendo valor para decir la parte más vergonzosa o dolorosa de la historia.
2. Está tomando aire porque el llanto le corta la respiración.
3. Está procesando por primera vez en voz alta sus propios pensamientos.

Si intervienes en ese instante, **cortas el cordón umbilical de su desahogo profundo**.

### La Regla de los 4 Segundos
Cuando la otra persona termine una frase o haga una pausa:
* Cuenta mentalmente: *1... 2... 3... 4...*
* Mantén tu mirada tierna y haz un suave asentimiento con la cabeza.
* Observarás un fenómeno asombroso: en el 85% de los casos, en el segundo 3 o 4 la persona respira y añade: *"Y lo que más me duele de verdad es..."*. Ese es el verdadero núcleo del problema.
`,
        keyTakeaways: [
          'El silencio no es ausencia de comunicación; es el espacio donde germina la verdad más íntima.',
          'Cuenta hasta 4 antes de responder a una pausa emocional.',
          'Aprende a acompañar con la mirada sin la urgencia de rellenar el aire.'
        ],
        tactics: [
          {
            name: 'Micro-validadores de continuidad',
            description: 'Sonidos y palabras mínimas que le confirman que estás conectado sin robar el hilo.',
            stepByStep: [
              'No formules oraciones completas mientras narra.',
              'Usa monosílabos con entonación empática: "Mmm", "Te sigo", "Claro", "Ya veo".',
              'Deja caer los hombros para proyectar tranquilidad receptiva.'
            ],
            example: '"(Asintiendo suavemente)... Te escucho... continúa."'
          }
        ]
      },
      {
        id: 'les-2-2',
        title: '2.2 El Reflejo Emocional: Nombrar el monstruo para quitarle poder',
        readingTimeMinutes: 10,
        summary: 'La técnica inspirada en Carl Rogers para actuar como un espejo limpio de las emociones profundas.',
        content: `### ¿Qué es el Reflejo Emocional?
El reflejo emocional no consiste en repetir lo que el otro dijo como una grabadora, sino en **captar la emoción subterránea detrás de los hechos y ponerla en palabras gentiles**.

Cuando las personas sufren, a menudo se pierden en la maraña de detalles logísticos:
*"Y entonces mi hermana me dijo que yo tenía que pagar la clínica, y mi tío no vino a la cena, y el abogado no contesta..."*

Si respondes sobre los detalles logísticos (*"¿Y cuánto te cobró el abogado?"*), desvías la conversación al plano administrativo.
Si en cambio aplicas un **Reflejo Emocional**:
*"Suena a que no es solo el tema del dinero... te sientes completamente solo/a cargando con toda la responsabilidad de tu familia sin que nadie te eche una mano."*

La persona sentirá un estremecimiento de alivio y dirá: **"¡Exacto! ¡Eso es exactamente lo que siento!"**. Cuando alguien se siente entendido en ese nivel, la carga de su soledad se reduce a la mitad.

### Fórmulas maestras de Reflejo Emocional:
1. *"Por lo que me cuentas, parece que debajo de esa rabia lo que hay es una decepción tremenda con..."*
2. *"Suena a que te sientes atrapado/a entre querer hacer lo correcto y no lastimarte a ti mismo/a."*
3. *"Tiene todo el sentido del mundo que sientas impotencia cuando ves que diste el 100% y no dependía de ti."*
`,
        keyTakeaways: [
          'La gente no necesita que discutas los hechos; necesita que valides el impacto emocional de los hechos.',
          'Usa palabras tentativas ("Suena a que...", "Pareciera que...") en lugar de afirmaciones categóricas.',
          'Lograr que el otro diga "¡Exacto, eso es!" es el indicador supremo de éxito en la escucha activa.'
        ],
        tactics: [
          {
            name: 'La Fórmula del Reflejo Hipotético',
            description: 'Estructura infalible para reflejar emociones sin sonar presuntuoso o invasivo.',
            stepByStep: [
              'Paso 1: Abrir con un suavizante ("Si entiendo bien...", "Corrígeme si me equivoco, pero suena a...")',
              'Paso 2: Nombrar la emoción raíz (no el síntoma superficial).',
              'Paso 3: Conectar la emoción con el motivo central.'
            ],
            example: '"Corrígeme si me equivoco, pero suena a que más que enfado con la empresa, lo que tienes es una sensación muy amarga de traición después de todos los años que les dedicaste."'
          }
        ],
        dialogue: {
          context: 'Tu hermano te cuenta que su mejor amigo de la infancia se va a casar y no lo invitó a la boda.',
          poorApproach: {
            said: 'Bueno, pero seguro que es una boda pequeña por el presupuesto, no te lo tomes tan a pecho. ¿Cuántos invitados son?',
            problem: 'Cuestionó y justificó a la otra persona, centrándose en el dinero y no en el desgarro del vínculo.',
            otherReaction: 'Tu hermano se cierra: "Olvídalo, no importa", y se guarda el dolor.'
          },
          masterApproach: {
            said: 'Uf, hermano... qué puñalada tan dolorosa. Después de crecer juntos, que te deje fuera tiene que sentirse como si de repente borrara toda su historia de un plumazo. Es normal que te sientas muy dolido y desconcertado. ¿Estás pudiendo asimilarlo?',
            tactic: 'Reflejo empático del duelo por la amistad rota y legitimación del impacto.',
            whyItWorks: 'Le da permiso para admitir que le dolió en el alma sin tener que fingir orgullo o indiferencia.',
            otherReaction: 'Los ojos se le aguan: "Sí, me dolió muchísimo... pensé que éramos como hermanos".'
          }
        }
      },
      {
        id: 'les-2-3',
        title: '2.3 Las Preguntas Puente vs Las Preguntas Inquisitivas',
        readingTimeMinutes: 8,
        summary: 'Aprende a preguntar para abrir compuertas emocionales sin que la persona se sienta interrogada en un juicio.',
        content: `### No todas las preguntas ayudan
Existen dos tipos de preguntas cuando alguien sufre:

| Preguntas Inquisitivas (Juicio / Curiosidad morbosa) | Preguntas Puente (Compasión / Desahogo) |
| :--- | :--- |
| *"¿Y por qué no le dijiste nada antes?"* | *"¿Qué fue lo más duro de sostener en esa conversación?"* |
| *"¿Pero tú estás seguro de que no fue tu culpa?"* | *"¿Qué parte de todo esto es la que más te pesa cuando estás a solas?"* |
| *"¿Y qué vas a hacer ahora con la hipoteca?"* | *"¿Cómo te estás cuidando hoy con todo este caos?"* |

### La anatomía de una Pregunta Puente:
* **Nunca empiezan con "¿Por qué...?":** La palabra "por qué" en español activa de inmediato los mecanismos de defensa (el cerebro siente que debe justificar su conducta).
* **Empiezan con "Qué" o "Cómo":** Invitan a explorar la experiencia interna sin exigir una tesis argumentativa.
`,
        keyTakeaways: [
          'Evita los "por qué": sustitúyelos por "¿Qué te llevó a...?" o "¿Cómo fue para ti...?"',
          'No preguntes por morbo o curiosidad; pregunta solo si la respuesta ayuda al otro a desahogarse.',
          'Las mejores preguntas son aquellas que ayudan a la persona a ordenar su propio laberinto interno.'
        ],
        tactics: [
          {
            name: 'La Pregunta del Desahogo Nuclear',
            description: 'Una pregunta suave para cuando la persona está abrumada por mil pensamientos dispersos.',
            stepByStep: [
              'Valida la maraña de problemas.',
              'Invita a desempacar solo la pieza más pesada del día de hoy.'
            ],
            example: '"Veo que tienes mil fuegos encendidos al mismo tiempo. Si tuvieras que señalar solo una cosa... ¿qué es lo que más te está quitando el sueño esta noche?"'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q2-1',
        question: '¿Qué es el "Silencio Fértil" y cómo se aplica?',
        options: [
          {
            id: 'o1',
            text: 'Ignorar a la persona durante varios minutos para que aprenda a solucionar sus problemas sola.',
            isCorrect: false,
            explanation: 'Eso sería frialdad y abandono afectivo.'
          },
          {
            id: 'o2',
            text: 'Esperar 3 a 4 segundos tras una pausa del otro antes de hablar, permitiéndole profundizar en la raíz de su dolor.',
            isCorrect: true,
            explanation: '¡Excelente! En ese lapso la persona suele soltar el núcleo más vulnerable de lo que siente.'
          },
          {
            id: 'o3',
            text: 'Poner música instrumental de fondo para no tener que hablar.',
            isCorrect: false,
            explanation: 'La música puede ser agradable pero no define el silencio fértil en la conversación.'
          }
        ]
      },
      {
        id: 'q2-2',
        question: '¿Cuál de las siguientes es una formulación correcta de "Reflejo Emocional"?',
        options: [
          {
            id: 'o1',
            text: '"Deberías calmarte porque enfadado no vas a conseguir nada."',
            isCorrect: false,
            explanation: 'Es un juicio y una orden, lo opuesto a un reflejo compasivo.'
          },
          {
            id: 'o2',
            text: '"A mí me pasó algo idéntico con mi jefe en 2021 y lo que yo hice fue..."',
            isCorrect: false,
            explanation: 'Esto es robar protagonismo y hablar de ti mismo.'
          },
          {
            id: 'o3',
            text: '"Por lo que dices, más que enfado, parece que sientes una tremenda decepción al ver que tu esfuerzo no fue valorado."',
            isCorrect: true,
            explanation: '¡Perfecto! Captura la emoción de fondo y la valida con gentileza.'
          }
        ]
      }
    ]
  },
  {
    id: 'modulo-3',
    order: 3,
    title: 'El Modelo V.A.L.I.D.A. (El Protocolo Definitivo)',
    subtitle: 'El paso a paso estructurado para consolar con maestría en cualquier situación',
    icon: 'ShieldCheck',
    badge: 'Metodología Exclusiva',
    estimatedHours: '1 h de lectura y práctica',
    description: 'Aprende y domina el acrónimo V.A.L.I.D.A.: un mapa mental claro y memorable para saber exactamente qué hacer y decir paso a paso.',
    lessons: [
      {
        id: 'les-3-1',
        title: '3.1 Desglosando el Modelo V.A.L.I.D.A.',
        readingTimeMinutes: 12,
        summary: 'Aprende los 6 pasos del protocolo para nunca más quedarte sin dirección en una conversación difícil.',
        content: `### El mapa mental que te acompañará toda la vida
Cuando estamos frente al sufrimiento, el pánico a equivocarnos nos nubla la mente. Para eso existe el **Modelo V.A.L.I.D.A.**, una estructura de 6 pasos probada en acompañamiento en crisis y psicología humanista:

---

### **V** - Visibilizar el impacto
* **Propósito:** Reconocer explícitamente la magnitud de lo que está ocurriendo.
* **La frase tipo:** *"Veo lo pesado y agotador que esto ha sido para ti."* / *"Te veo los ojitos y noto la carga tan inmensa que llevas."*

---

### **A** - Aceptar sin juzgar la emoción
* **Propósito:** Normalizar la emoción, incluso si es incómoda (rabia, ganas de huir, celos, tristeza profunda). Validar el sentimiento **no significa aprobar conductas destructivas**, significa darle derecho a sentir lo que siente.
* **La frase tipo:** *"Es completamente natural y humano que sientas rabia después de lo ocurrido."* / *"Tienes todo el derecho del mundo a llorar y sentirte así."*

---

### **L** - Limpiar juicios y comparaciones
* **Propósito:** Blindar la conversación contra las 3 plagas:
  1. No competir con tu propio sufrimiento (*"Pues a mí me fue peor..."*).
  2. No minimizar (*"Bueno, pero no te me deprimas por eso..."*).
  3. No buscar culpables precipitados.

---

### **I** - Indagar con ternura
* **Propósito:** Hacer preguntas puente abiertas que permitan al otro desenredar su madeja mental.
* **La frase tipo:** *"¿Qué es lo que más te asusta de lo que viene ahora?"* / *"¿Qué necesitas que pase hoy para sentir un poco de paz?"*

---

### **D** - Devolver la dignidad y presencia
* **Propósito:** Recordarle a la persona que no la ves como una "víctima rota" o una molestia, sino como un ser humano valioso y fuerte que está atravesando una tormenta.
* **La frase tipo:** *"No tienes que disculparte por llorar conmigo; no eres una carga en lo más mínimo."* / *"Aquí no hay prisa. No tienes que demostrarme que estás bien."*

---

### **A** - Abrir apoyo concreto
* **Propósito:** Ofrecer ayuda específica y accionable en lugar del vago *"Cualquier cosita me avisas"*, que el 99% de las personas que sufren jamás se atreven a solicitar.
* **La frase tipo:** *"Hoy no te preocupes por la comida, yo te llevo la cena esta noche."* / *"Si quieres mañana te acompaño a la cita y me quedo en la sala de espera sin hablar si prefieres estar solo/a."*
`,
        keyTakeaways: [
          'V: Visibilizar | A: Aceptar | L: Limpiar juicios | I: Indagar | D: Devolver dignidad | A: Abrir apoyo concreto.',
          'Nunca le digas a alguien que llora "No llores, perdona que te hice llorar". Llorar desintoxica el cortisol.',
          'La ayuda concreta (traer comida, pasear al perro, acompañar en silencio) vale 100 veces más que las promesas ambiguas.'
        ],
        tactics: [
          {
            name: 'El Reemplazo del "Cualquier cosa me avisas"',
            description: 'Cómo ofrecer ayuda real sin poner la carga burocrática sobre la persona afligida.',
            stepByStep: [
              'Identifica una tarea doméstica o logística básica.',
              'Haz una oferta de opción binaria sencilla donde decir que sí no dé vergüenza.',
              'Da una salida airosa por si prefiere soledad.'
            ],
            example: '"Sé que hoy estás agotada. Pensaba pedir comida india o pizza esta noche; ¿te parece bien si te dejo una porción en tu puerta para que no cocines? Si prefieres silencio absoluto, te la dejo en la puerta y no te timbro. Cero presión."'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'En el modelo V.A.L.I.D.A., ¿a qué se refiere la letra "D" (Devolver la dignidad)?',
        options: [
          {
            id: 'o1',
            text: 'Decirle a la persona que la vida continúa y que debe vestirse elegante.',
            isCorrect: false,
            explanation: 'No tiene nada que ver con aspectos superficiales.'
          },
          {
            id: 'o2',
            text: 'Hacerle saber que no es una carga por llorar y que su dolor no disminuye su valor como persona.',
            isCorrect: true,
            explanation: '¡Exacto! La persona vulnerable a menudo siente vergüenza de su desborde; recordarle que es bienvenida y digna es sanador.'
          },
          {
            id: 'o3',
            text: 'Pedirle dinero por tus servicios de consejería.',
            isCorrect: false,
            explanation: 'Totalmente inapropiado.'
          }
        ]
      },
      {
        id: 'q3-2',
        question: '¿Por qué la típica frase "Cualquier cosita que necesites me avisas" casi nunca funciona?',
        options: [
          {
            id: 'o1',
            text: 'Porque le traslada la pesada carga de pedir auxilio a quien no tiene energía ni para levantarse de la cama.',
            isCorrect: true,
            explanation: '¡Muy bien! Las ofertas específicas y pequeñas reducen la fricción y la vergüenza de pedir ayuda.'
          },
          {
            id: 'o2',
            text: 'Porque a la gente no le gusta recibir favores.',
            isCorrect: false,
            explanation: 'En crisis la gente sí necesita apoyo, pero le da vergüenza pedir favores ambiguos.'
          },
          {
            id: 'o3',
            text: 'Porque es mejor cobrar por el apoyo prestado.',
            isCorrect: false,
            explanation: 'Falso.'
          }
        ]
      }
    ]
  },
  {
    id: 'modulo-4',
    order: 4,
    title: 'El Botiquín Táctico ante Crisis Específicas',
    subtitle: 'Protocolos de respuesta inmediata para Duelo, Ruptura, Ataques de Pánico y Fracasos',
    icon: 'FolderHeart',
    badge: 'Casos Reales',
    estimatedHours: '1 h 15 min de lectura y práctica',
    description: 'Aprende los protocolos especializados según el tipo de herida: no se consuela igual a quien pierde un padre que a quien sufre una infidelidad o un ataque de pánico.',
    lessons: [
      {
        id: 'les-4-1',
        title: '4.1 Duelo y Muerte: El territorio sagrado donde sobran las explicaciones',
        readingTimeMinutes: 10,
        summary: 'Cómo acompañar la pérdida sin caer en clichés espirituales forzados ni evasivas.',
        content: `### La regla cardinal del duelo
La muerte es definitiva; no tiene solución, arreglo ni negociación. Todo intento de buscarle una "explicación positiva" suena como una burla para el doliente.

### Frases Prohibidas en el Duelo:
* ❌ *"Ya descansó / Ahora está en un lugar mejor."* (A quien sufre no le importa eso hoy: lo que quiere es a su ser querido aquí).
* ❌ *"Sé fuerte por tus hijos / por tu familia."* (Le prohíbe desplomarse cuando más necesita drenar).
* ❌ *"Eres joven, podrás rehacer tu vida / tener más hijos."* (Un ser humano jamás es un repuesto intercambiable).
* ❌ *"Sé exactamente cómo te sientes."* (Nadie vive el duelo del mismo modo).

### Frases Sanadoras de Duelo:
* ✅ *"No hay palabras en este mundo que alcancen para describir esta pérdida. Me duele en el alma verte pasar por esto."*
* ✅ *"Aquí estoy. No tienes que fingir fuerza, ni sonreír, ni hablar si no quieres. Me quedo a tu lado en silencio todo el tiempo que haga falta."*
* ✅ *"Recuerdo mucho cómo él/ella siempre [contar una memoria entrañable y breve]. Dejó una huella hermosa en nosotros."*
`,
        keyTakeaways: [
          'En el duelo, tu presencia física y el silencio silencioso y leal valen más que 10 discursos.',
          'Hablar del fallecido por su nombre y recordar anécdotas lindas reconforta mucho más que fingir que no existió para no hacer llorar.',
          'El llanto del doliente no debe ser sofocado.'
        ],
        tactics: [
          {
            name: 'La Presencia Silenciosa en el Duelo',
            description: 'Cómo estar físicamente con alguien en duelo sin incomodidad.',
            stepByStep: [
              'Llega, dale un abrazo largo y firme con ambas manos en la espalda.',
              'Di una frase simple: "Aquí estoy contigo."',
              'Siéntate a su lado, ofrece un vaso de agua sin exigir que hable.',
              'Acepta los silencios largos sin mirar nerviosamente el teléfono.'
            ],
            example: '"No tengo nada sabio que decirte, amigo mío. Solo que te quiero y que aquí tienes mi hombro hoy, mañana y las semanas que vienen."'
          }
        ]
      },
      {
        id: 'les-4-2',
        title: '4.2 Rupturas Amorosas, Infidelidades y Rechazo',
        readingTimeMinutes: 10,
        summary: 'Cómo apoyar sin caer en el error de despotricar contra la expareja ni alentar falsas esperanzas.',
        content: `### El duelo invisible del desamor
Una ruptura activa en el cerebro los mismos centros de dolor que una abstinencia química de drogas (dopamina y oxitocina cortadas en seco). La persona siente dolor físico real en el pecho.

### Los dos errores comunes del mal amigo:
1. **El Ataque Despiadado:** *"Esa persona era una basura, nunca me cayó bien, no valía la pena."*
   * *El problema:* La víctima aún ama a esa persona. Si atacas despiadadamente a su ex, la obligas internamente a defenderlo/a o le generas culpa por haberlo amado.
2. **El Falso Consuelo de 'Volverán':** *"Seguro se arrepiente y te busca en dos semanas."*
   * *El problema:* Alimenta la fantasía y retrasa el proceso de sanación.

### El enfoque empático certero:
Valida el choque emocional, la desilusión del proyecto de vida que se esfumó y el miedo a empezar de cero.
`,
        keyTakeaways: [
          'No destruyas a la ex pareja de inmediato; enfócate en el corazón roto de tu amigo/a, no en el villano de la historia.',
          'No alimentes esperanzas mágicas de reconciliación si no tienes certeza.',
          'Reconoce la pérdida del futuro que habían construido juntos en su mente.'
        ],
        tactics: [
          {
            name: 'Validación del Choque Identitario',
            description: 'Enfocar el consuelo en la reconstrucción del yo.',
            stepByStep: [
              'Reconoce lo desgarrador que es desacostumbrarse a la rutina de a dos.',
              'Valida la sensación de vacío en el pecho.',
              'Asegúrale que sus años compartidos no fueron en vano aunque hayan terminado.'
            ],
            example: '"Duele muchísimo porque tú te entregaste de verdad y creíste en este proyecto con todo tu corazón. Despertar sin esos planes compartidos deja un vacío inmenso. Llora todo lo que tengas que llorar, no estás loco/a por sentir que el mundo se paró."'
          }
        ]
      },
      {
        id: 'les-4-3',
        title: '4.3 Crisis de Ansiedad y Pánico Agudo',
        readingTimeMinutes: 8,
        summary: 'El protocolo de choque: palabras directas, comandos cortos y anclaje somático.',
        content: `### Durante un ataque de pánico: Menos psicología, más cuerpo
Cuando alguien tiene un ataque de pánico, cree que se va a morir o asfixiar. Explicar filosofías o pedirle "que piense en cosas bonitas" es inútil.

### Frases que EMPEORAN el pánico:
* ❌ *"¡Cálmate, tranquilízate!"* (Nadie en la historia de la humanidad se ha calmado porque le griten "¡cálmate!").
* ❌ *"No pasa nada, es solo tu mente."* (Para la persona es 100% físico y real).

### Protocolo de Oro (3 Pasos):
1. **Comandos de anclaje claros:** *"Mírame a los ojos. Pon tus pies planos en el suelo. Siente la silla debajo de ti."*
2. **Respiración 4-7-8 guiada:** *"Respira conmigo. Inhala por la nariz... 1, 2, 3, 4. Sostén... Ahora suelta despacio por la boca haciendo ruido de viento... 1, 2, 3, 4, 5, 6."*
3. **Garantía biológica:** *"Tu cuerpo está teniendo una oleada de adrenalina. Da mucho miedo, pero no te vas a morir ni te va a dar un infarto. Va a pasar. Yo no te suelto."*
`,
        keyTakeaways: [
          'Nunca digas "cálmate". Di: "Estoy contigo, estás a salvo, esto va a pasar".',
          'Usa el cuerpo: contacto con la tierra, manos apoyadas, respiración rítmica.',
          'Sé el ancla firme que no se asusta con el terror del otro.'
        ],
        tactics: [
          {
            name: 'Técnica de Conteo Somático 5-4-3-2-1',
            description: 'Devolver la mente al presente a través de los sentidos.',
            stepByStep: [
              'Pídele que nombre 5 cosas que ve a su alrededor.',
              '4 cosas que pueda tocar físicamente (su pantalón, la mesa, etc.).',
              '3 cosas que pueda escuchar.',
              '2 cosas que pueda oler.',
              '1 cosa que pueda saborear.'
            ],
            example: '"Dime cinco cosas que veas en esta habitación que sean de color azul. Vamos juntos."'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'Si un amigo te cuenta desesperado que su pareja le fue infiel y rompió con él, ¿qué actitud es la más prudente y compasiva?',
        options: [
          {
            id: 'o1',
            text: 'Decirle: "Esa persona era un asco, yo siempre supe que era mala gente, te salvaste de una buena".',
            isCorrect: false,
            explanation: 'Atacar ferozmente a su ex suele generar culpa o necesidad defensiva en el afectado.'
          },
          {
            id: 'o2',
            text: 'Enfocarte en su corazón roto y en el dolor de la traición, sin juzgar sus sentimientos encontrados.',
            isCorrect: true,
            explanation: '¡Exacto! El foco debe estar 100% en cuidar la herida de tu amigo, no en protagonizar el rencor.'
          },
          {
            id: 'o3',
            text: 'Recomendarle que esa misma noche salga de fiesta para despejarse y olvidar.',
            isCorrect: false,
            explanation: 'Evadir el dolor con distracciones forzadas suele amplificar la resaca emocional al día siguiente.'
          }
        ]
      },
      {
        id: 'q4-2',
        question: 'Durante un ataque de pánico de un compañero, ¿cuál es la mejor intervención?',
        options: [
          {
            id: 'o1',
            text: 'Gritarle "¡Cálmate, que te estás volviendo loco por nada!".',
            isCorrect: false,
            explanation: 'Aumentará drásticamente su terror.'
          },
          {
            id: 'o2',
            text: 'Voz pausada y firme: "Mírame, pon los pies en el suelo, respira conmigo; es adrenalina, da miedo pero estás a salvo y va a pasar".',
            isCorrect: true,
            explanation: '¡Excelente! Regulación fisiológica, contacto visual y certeza biológica de supervivencia.'
          },
          {
            id: 'o3',
            text: 'Dejarlo solo en una habitación oscura para que no se sienta observado.',
            isCorrect: false,
            explanation: 'El aislamiento en pleno pánico puede agravar la sensación de muerte inminente.'
          }
        ]
      }
    ]
  },
  {
    id: 'modulo-5',
    order: 5,
    title: 'Sostener el Llanto y las Emociones Crudas',
    subtitle: 'El protocolo segundo a segundo cuando las lágrimas caen sin freno',
    icon: 'HeartHandshake',
    badge: 'Presencia Física',
    estimatedHours: '45 min de lectura y práctica',
    description: 'Aprende qué hacer con tus manos, con los pañuelos, con el contacto físico con permiso y cómo evitar la incomodidad cuando alguien llora intensamente.',
    lessons: [
      {
        id: 'les-5-1',
        title: '5.1 El Protocolo del Llanto: El dilema del pañuelo de papel',
        readingTimeMinutes: 8,
        summary: 'Por qué apresurarse a dar un pañuelo puede comunicar "tápate y deja de llorar ya".',
        content: `### El significado oculto de un pañuelo
¿Sabías que en terapia gestalt y counseling se estudia el momento exacto en que se entrega un pañuelo?

Si una persona empieza a sollozar y en menos de 3 segundos le pones un pañuelo en la cara, el cerebro lo interpreta inconscientemente como:
*"Límpiate eso rápido, me incomoda ver tus lágrimas, vuelve a recomponerte."*

### El protocolo compasivo del llanto:
1. **Los primeros 30 segundos son sagrados:** Deja que las lágrimas rueden por sus mejillas. No te abalances con el paquete de pañuelos.
2. **La entrega sutil:** Coloca el paquete de pañuelos suavemente sobre la mesa o cerca de su mano, sin interrumpir con un *"Toma, toma, no llores"*. Permite que sea la persona quien decida cuándo secarse.
3. **Normaliza el agua:** Di en voz baja: *"Deja que salga todo lo que tenga que salir. Llorar no es debilidad, es limpiar la herida."*
`,
        keyTakeaways: [
          'No cortes el llanto con un pañuelo apresurado; déjalo al alcance con delicadeza.',
          'Nunca digas "¡Ay no llores, que me vas a hacer llorar a mí!". Eso vuelve la conversación sobre ti.',
          'Tolerar el llanto del otro sin incomodarte te convierte en un gigante emocional.'
        ],
        tactics: [
          {
            name: 'El Contacto Físico con Consentimiento Tácito o Explícito',
            description: 'Cómo usar el tacto para contener sin invadir el espacio personal.',
            stepByStep: [
              'No te lances a abrazar violentamente si no conoces su estilo de apego.',
              'Coloca tu mano suavemente sobre la mesa con la palma hacia arriba a unos centímetros de la suya.',
              'O pregunta con tono muy dulce: "¿Te ayudaría un abrazo o prefieres un poco de espacio? Lo que sientas mejor."'
            ],
            example: '"¿Te viene bien que te tome la mano o prefieres tu espacio? Dime sin pena."'
          }
        ]
      },
      {
        id: 'les-5-2',
        title: '5.2 El Salvavidas Universal: Tu escudo para cuando tu cerebro se apaga',
        readingTimeMinutes: 7,
        summary: 'La fórmula de emergencia de 3 frases que puedes memorizar hoy y usar por el resto de tu vida.',
        content: `### Memoriza esta tripleta salvavidas:
Si alguna vez la vida te pone ante una situación terrible (una tragedia que no sabes cómo abordar, un secreto doloroso que te cuentan) y sientes que tu mente se congela... **no inventes nada**. Solo pronuncia estas tres frases con pausa de 3 segundos entre ellas:

1. **Frase 1 (Aceptación del impacto):**
   > *"No sé muy bien qué decirte para arreglar esto, y no quiero soltarte frases hechas."*
2. **Frase 2 (Validación afectiva):**
   > *"Pero veo lo mucho que te está doliendo y me parte el alma verte así."*
3. **Frase 3 (Garantía de permanencia):**
   > *"Aquí me tienes. No tienes que fingir que estás bien conmigo. Estoy a tu lado."*

### Por qué esta tripleta nunca falla:
* Es 100% honesta: elimina la hipocresía.
* No promete milagros imposibles.
* Brinda exactamente lo único que un ser humano herido anhela: **compañía incondicional sin exigencia de rendimiento**.
`,
        keyTakeaways: [
          'Guarda en tu memoria la tripleta salvavidas: Honestidad + Afecto + Permanencia.',
          'Decir "no sé qué decir pero te quiero y aquí me quedo" tiene 100 veces más poder que cualquier cita de autoayuda.',
          'El mejor consuelo no es una respuesta inteligente, es un corazón dispuesto a compartir el peso.'
        ],
        tactics: [
          {
            name: 'La Tripleta Salvavidas',
            description: 'El recurso de emergencia definitivo.',
            stepByStep: [
              'Reconoce tu falta de palabras sin culpa.',
              'Valida la intensidad de su dolor.',
              'Promete presencia incondicional.'
            ],
            example: '"No sé qué decirte que alcance para aliviar esto, pero me duele en el alma verte sufrir así. Aquí me tienes, no me voy a ninguna parte."'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q5-1',
        question: '¿Por qué no es recomendable colocarle de inmediato un pañuelo en la cara a alguien que acaba de romper a llorar?',
        options: [
          {
            id: 'o1',
            text: 'Porque los pañuelos son costosos.',
            isCorrect: false,
            explanation: 'No tiene sentido.'
          },
          {
            id: 'o2',
            text: 'Porque puede interpretarse inconscientemente como "tápate, límpiate y deja de incomodarme con tus lágrimas ya".',
            isCorrect: true,
            explanation: '¡Correcto! Es mejor dejar el paquete cerca a su alcance para que la persona decida cuándo secarse.'
          },
          {
            id: 'o3',
            text: 'Porque las lágrimas no se deben secar nunca.',
            isCorrect: false,
            explanation: 'Tampoco es un mandamiento extremo.'
          }
        ]
      }
    ]
  },
  {
    id: 'modulo-6',
    order: 6,
    title: 'Autocuidado, Límites y Cuándo Derivar',
    subtitle: 'Cómo ser un faro sin quemarte y reconocer señales de alarma clínica',
    icon: 'BatteryCharging',
    badge: 'Sostenibilidad Emocional',
    estimatedHours: '40 min de lectura y práctica',
    description: 'Aprende a diferenciar entre empatía sana y desgaste por compasión, cómo poner límites a vampiros de quejas crónicas, y cómo derivar a salud mental con cariño.',
    lessons: [
      {
        id: 'les-6-1',
        title: '6.1 Esponja vs Contenedor: Cómo no llevarte la angustia a la cama',
        readingTimeMinutes: 9,
        summary: 'Aprende a sostener el dolor del otro sin absorberlo como si fuera tuyo propio.',
        content: `### Ser un Contenedor, no una Esponja
* **La Esponja Emocional:** Absorbe el líquido sucio y lo retiene en sus fibras. Si tu amigo está deprimido, tú te vas a tu casa con opresión en el pecho, insomnio y mal humor. A eso se le llama *Fatiga por Compasión*.
* **El Contenedor Emocional:** Es como un cuenco de cerámica resistente. Sostiene el agua caliente de la sopa del otro mientras se enfría, pero la cerámica no absorbe la sopa. Cuando la conversación termina, puedes enjuagar el cuenco y guardarlo.

### El Ritual de Cierre Post-Consuelo:
1. **Lávate las manos y la cara con agua fría:** Es un ancla somática clásica para indicarle a tu sistema nervioso que el rol de contención concluyó.
2. **Exhalación de liberación:** Haz 3 respiraciones profundas sacando el aire por la boca como un suspiro sonoro.
3. **Recuerda la soberanía del otro:** Su camino de dolor le pertenece a él/ella; no puedes ni debes vivir su lección de vida en su lugar.
`,
        keyTakeaways: [
          'Si te enfermas tú, no sirves de ayuda a nadie.',
          'Consolar bien exige tener tu propia batería recargada.',
          'Practica un ritual físico de desconexión tras una charla emocionalmente pesada.'
        ],
        tactics: [
          {
            name: 'El Límite con Ternura para Quejas en Bucle',
            description: 'Cómo frenar a alguien que solo se desahoga sin parar durante semanas sin querer cambiar nada.',
            stepByStep: [
              'Valida su cansancio acumulado.',
              'Marca tu límite de energía o tiempo con sinceridad amorosa.',
              'Invita a mover la conversación a la acción o a un profesional.'
            ],
            example: '"Te quiero mucho y sabes que siempre estoy para ti. Hoy me siento con la cabeza muy cargada y no quiero darte una atención a medias porque mereces lo mejor. ¿Te parece si hoy desconectamos un rato de este tema y nos damos un paseo, o prefieres que busquemos a alguien especializado que te dé herramientas más profundas?"'
          }
        ]
      },
      {
        id: 'les-6-2',
        title: '6.2 Señales de Alerta Roja: Cuándo el dolor supera la ayuda entre amigos',
        readingTimeMinutes: 8,
        summary: 'Identificar riesgo suicida, depresión severa y cómo recomendar un psicólogo o línea de crisis sin sonar frío.',
        content: `### Tu amor es medicina, pero no es psicoterapia
Hay momentos donde el consuelo de amigos no basta y se necesita atención profesional urgente.

### Banderas Rojas Inmediatas:
* Expresiones de desear desaparecer: *"Ojalá me durmiera y no despertara más"*, *"La gente estaría mejor sin mí"*.
* Regalar posesiones queridas repentinamente.
* Aislamiento total durante semanas y abandono del autocuidado básico.

### Cómo sugerir ayuda profesional con inmenso amor:
* ❌ Evita: *"Deberías ir al loquero / estás mal de la cabeza."*
* ✅ Di: *"Veo cuánto te está costando esto y me duele ver que estás sufriendo tanto. Así como cuando nos rompemos un hueso vamos al traumatólogo, cuando el corazón y la mente cargan con tanto peso, merecemos que un profesional con las mejores herramientas nos acompañe. Yo te ayudo a buscarlo y si quieres te acompaño a la puerta de la primera sesión."*
`,
        keyTakeaways: [
          'No asumas el rol de salvador único de la vida de nadie.',
          'Normaliza la salud mental: ir al psicólogo es como ir al fisioterapeuta de las emociones.',
          'Ofrécete como puente logístico para buscar ayuda profesional.'
        ],
        tactics: [
          {
            name: 'El Acompañamiento Puente a Terapia',
            description: 'Derivar sin que la persona sienta que te la estás quitando de encima.',
            stepByStep: [
              'Reitera tu amor incondicional.',
              'Admite las limitaciones de tus herramientas.',
              'Ofrécete a investigar o acompañar físicamente.'
            ],
            example: '"No te digo esto para desentenderme, todo lo contrario: quiero verte bien y sé que esto es demasiado pesado para cargarlo solo entre nosotros. ¿Me dejas ayudarte a buscar dos o tres opciones de profesionales buenos y te acompaño el día de la cita?"'
          }
        ]
      }
    ],
    quiz: [
      {
        id: 'q6-1',
        question: '¿Cuál es la diferencia entre ser una "esponja emocional" y ser un "contenedor emocional"?',
        options: [
          {
            id: 'o1',
            text: 'La esponja absorbe la angustia ajena y se enferma; el contenedor sostiene el espacio para el otro sin perder sus propios límites.',
            isCorrect: true,
            explanation: '¡Exacto! El contenedor brinda refugio firme sin destrozar su propia salud emocional en el proceso.'
          },
          {
            id: 'o2',
            text: 'La esponja habla mucho y el contenedor no habla nada.',
            isCorrect: false,
            explanation: 'No tiene que ver con la cantidad de palabras sino con la absorción psicológica de la angustia.'
          },
          {
            id: 'o3',
            text: 'Son términos de cocina que no tienen relación con la empatía.',
            isCorrect: false,
            explanation: 'Falso.'
          }
        ]
      }
    ]
  }
];
