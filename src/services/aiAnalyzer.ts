import { AIAnalysisResult, Scenario } from '../types';

// Negative clichés and toxic patterns
const TOXIC_PATTERNS = [
  { regex: /todo pasa por algo/i, text: 'Todo pasa por algo', explanation: 'Impone un falso propósito cósmico al sufrimiento injusto.' },
  { regex: /no llores/i, text: 'No llores', explanation: 'Intenta reprimir la desintoxicación fisiológica del llanto.' },
  { regex: /no te preocupes/i, text: 'No te preocupes', explanation: 'Minimiza la gravedad real que la persona está viviendo.' },
  { regex: /échale ganas|echale ganas/i, text: 'Échale ganas', explanation: 'Insinúa que la persona sufre por falta de voluntad.' },
  { regex: /tienes que ser fuerte|sé fuerte|se fuerte/i, text: 'Tienes que ser fuerte', explanation: 'Le prohíbe desplomarse y descansar en su vulnerabilidad.' },
  { regex: /al menos no fue peor|al menos tienes/i, text: 'Al menos...', explanation: 'Compara el dolor y hace sentir culpable al doliente.' },
  { regex: /lo que tienes que hacer es|deber[ií]as hacer/i, text: 'Lo que tienes que hacer...', explanation: 'Activa el reflejo corrector prematuro sin antes validar.' },
  { regex: /hay gente que est[aá] peor/i, text: 'Hay gente peor', explanation: 'Invalida el sufrimiento personal usando sufrimiento ajeno.' },
  { regex: /ya pasar[aá]|ya se te pasar[aá]/i, text: 'Ya se te pasará', explanation: 'Desestima la intensidad del presente como si fuera trivial.' },
  { regex: /no es para tanto/i, text: 'No es para tanto', explanation: 'Invalidación directa del valor de sus emociones.' },
  { regex: /ella nunca te convino|ese tipo era una basura/i, text: 'Ataque despiadado al ex', explanation: 'Genera disonancia y culpa si la persona aún guarda amor.' }
];

// Positive empathy markers
const POSITIVE_MARKERS = [
  { regex: /estoy aqu[íi]|aqu[íi] estoy|aqu[íi] me tienes/i, text: 'Presencia incondicional ("Aquí estoy")' },
  { regex: /t[oó]mate (todo )?el tiempo/i, text: 'Respeto al ritmo ajeno ("Tómate tu tiempo")' },
  { regex: /no tienes que fingir|no tienes que ser fuerte/i, text: 'Permiso de vulnerabilidad' },
  { regex: /tiene (todo el )?sentido|es (completamente )?normal|es entendible/i, text: 'Legitimación de la emoción' },
  { regex: /veo lo mucho que|noto la carga|siento tu/i, text: 'Visibilización del dolor' },
  { regex: /no s[eé] qu[eé] decir(te)?|no tengo palabras m[aá]gicas/i, text: 'Honestidad humilde ante el dolor' },
  { regex: /no est[aá]s solo|no est[aá]s sola/i, text: 'Disipación de la soledad' },
  { regex: /respira conmigo|respira despacio/i, text: 'Regulación somática' },
  { regex: /te quiero|te aprecio|me importas/i, text: 'Expresión directa de afecto' },
  { regex: /tienes derecho a/i, text: 'Validación del derecho a sentir' },
  { regex: /c[oó]mo te puedo cuidar|qu[eé] necesitas hoy/i, text: 'Indagación respetuosa de necesidades' }
];

export async function analyzeResponseWithAI(
  userResponse: string,
  scenario: Scenario,
  apiKey?: string,
  modelName: string = 'gemini-1.5-flash'
): Promise<AIAnalysisResult> {
  const cleanResponse = userResponse.trim();

  // If user provided a Gemini API Key, try calling Gemini!
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const geminiResult = await callGeminiAPI(cleanResponse, scenario, apiKey.trim(), modelName);
      if (geminiResult) {
        return geminiResult;
      }
    } catch (err) {
      console.warn('Gemini API call failed, falling back to local expert heuristic analyzer:', err);
    }
  }

  // Fallback to sophisticated local expert analyzer
  return runLocalHeuristicAnalysis(cleanResponse, scenario);
}

// Sophisticated local heuristic engine (runs offline, 100% reliable)
function runLocalHeuristicAnalysis(response: string, scenario: Scenario): AIAnalysisResult {
  const detectedClichés: string[] = [];
  const detectedPositiveTraits: string[] = [];

  // Check clichés
  for (const item of TOXIC_PATTERNS) {
    if (item.regex.test(response)) {
      detectedClichés.push(`${item.text}: ${item.explanation}`);
    }
  }

  // Check positives
  for (const item of POSITIVE_MARKERS) {
    if (item.regex.test(response)) {
      detectedPositiveTraits.push(item.text);
    }
  }

  // Word count & perspective checks
  const words = response.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Count self-referential words vs you-focused
  const selfWords = (response.match(/\b(yo|m[ií]|m[ií]o|conmigo|a m[ií])\b/gi) || []).length;
  const otherWords = (response.match(/\b(t[uú]|te|ti|contigo|tuyo)\b/gi) || []).length;

  // Base metrics
  let empathy = 50;
  let validation = 50;
  let freedomFromFixing = 70;
  let holdingSpace = 65;
  let assertiveSupport = 50;

  // Length adjustments
  if (wordCount < 6) {
    empathy -= 25;
    validation -= 25;
    holdingSpace -= 20;
  } else if (wordCount >= 15 && wordCount <= 80) {
    empathy += 15;
    validation += 15;
  } else if (wordCount > 150) {
    // Too long might overwhelm
    holdingSpace -= 10;
  }

  // Cliché penalties
  if (detectedClichés.length > 0) {
    freedomFromFixing -= detectedClichés.length * 25;
    validation -= detectedClichés.length * 20;
    empathy -= detectedClichés.length * 15;
  }

  // Positive bonuses
  if (detectedPositiveTraits.length > 0) {
    empathy += detectedPositiveTraits.length * 12;
    validation += detectedPositiveTraits.length * 14;
    assertiveSupport += detectedPositiveTraits.length * 8;
  }

  // Self-centered penalty
  if (selfWords > otherWords + 2) {
    holdingSpace -= 25;
    empathy -= 10;
  }

  // Clamp 0-100
  empathy = Math.max(10, Math.min(98, empathy));
  validation = Math.max(10, Math.min(98, validation));
  freedomFromFixing = Math.max(10, Math.min(98, freedomFromFixing));
  holdingSpace = Math.max(10, Math.min(98, holdingSpace));
  assertiveSupport = Math.max(10, Math.min(98, assertiveSupport));

  const totalScore = Math.round(
    empathy * 0.25 +
    validation * 0.25 +
    freedomFromFixing * 0.20 +
    holdingSpace * 0.15 +
    assertiveSupport * 0.15
  );

  let levelTitle = 'Acompañante en Formación';
  if (totalScore >= 88) levelTitle = 'Maestro de la Escucha y Refugio Seguro';
  else if (totalScore >= 75) levelTitle = 'Acompañante Cálido y Consciente';
  else if (totalScore >= 60) levelTitle = 'Empatía Positiva con Oportunidad de Ajuste';
  else levelTitle = 'Riesgo de Invalidación Involuntaria';

  // Build strengths
  const strengths: string[] = [];
  if (detectedPositiveTraits.length > 0) {
    strengths.push(`Usaste recursos compasivos excelentes: ${detectedPositiveTraits.slice(0, 2).join(', ')}.`);
  }
  if (detectedClichés.length === 0) {
    strengths.push('Evitaste por completo los clichés de positivismo tóxico ("todo pasa por algo", "no llores").');
  }
  if (otherWords >= selfWords) {
    strengths.push('Mantuviste el foco de atención firmemente puesto en la otra persona sin robar protagonismo.');
  }
  if (strengths.length === 0) {
    strengths.push('Distancia prudente y disposición a responder.');
  }

  // Build risks
  const risksOrBlindSpots: string[] = [];
  if (detectedClichés.length > 0) {
    risksOrBlindSpots.push('Presencia de frases hechas o consejos rápidos que pueden cortar la catarsis emocional.');
  }
  if (wordCount < 10) {
    risksOrBlindSpots.push('Tu respuesta fue algo breve; en momentos de angustia extrema, un poco más de calidez verbal transmite cobijo.');
  }
  if (selfWords > otherWords + 1) {
    risksOrBlindSpots.push('Cuidado con centrar la respuesta en tus propias anécdotas o sensaciones.');
  }
  if (risksOrBlindSpots.length === 0) {
    risksOrBlindSpots.push('Asegúrate de chequear qué tipo de apoyo práctico prefiere (¿compañía en silencio o ayuda concreta?).');
  }

  // Reaction description
  let howTheOtherPersonFelt = '';
  if (totalScore >= 80) {
    howTheOtherPersonFelt = `${scenario.name} sintió que sus hombros caían con alivio. Al no sentirse juzgado/a ni recibir lecciones morales, sintió que este momento contigo era un puerto seguro para respirar.`;
  } else if (totalScore >= 60) {
    howTheOtherPersonFelt = `${scenario.name} agradeció tu presencia y tu intención cariñosa, aunque por dentro aún siente cierta timidez o duda de si puede mostrar toda la crudeza de su dolor sin incomodarte.`;
  } else {
    howTheOtherPersonFelt = `${scenario.name} sintió un leve nudo en la garganta. Percibió que la emoción es demasiado pesada para ti y prefirió reprimirse o callar para no incomodar más la conversación.`;
  }

  // Suggested rewrite
  let suggestedRewrite = '';
  if (scenario.emotion === 'ruptura') {
    suggestedRewrite = `"${scenario.name}, me parte el alma verte así. Lo que estás viviendo es un shock devastador; después de 6 años soñando un futuro juntos, es completamente natural que sientas que el suelo se abrió. No tienes que fingir fuerza conmigo ni entenderlo todo hoy. Aquí me quedo a tu lado, tómate todo el tiempo que necesites."`;
  } else if (scenario.emotion === 'duelo') {
    suggestedRewrite = `"${scenario.name}, tienes todo el derecho del mundo a no querer ser fuerte. Perder al amor de tu vida tras 38 años no se arregla saliendo a caminar ni con frases hechas. Tu dolor es el reflejo de ese amor tan inmenso. Me quedo contigo en este silencio todo el tiempo que me permitas; no tienes que decir nada."`;
  } else if (scenario.emotion === 'ansiedad') {
    suggestedRewrite = `"${scenario.name}, mírame a los ojos y pon tus dos pies en el suelo. Siente mi mano. Tu corazón va a mil por la adrenalina y sé que da mucho miedo, pero estás a salvo y no te vas a morir. Respira conmigo: inhala... y suelta despacio. No te suelto."`;
  } else if (scenario.emotion === 'despido') {
    suggestedRewrite = `"${scenario.name}, qué canallada tan injusta. Tienes toda la razón para estar que hierves de indignación; dejaste la piel en ese proyecto y nadie tiene derecho a despojarte de tu mérito así. Suelta toda esa rabia conmigo, no estás exagerando en lo más mínimo."`;
  } else {
    suggestedRewrite = `"${scenario.name}, me estremece saber que te estás sintiendo tan sola e invisible. Quiero que me mires bien: para mí eres irreemplazable y tu presencia en mi vida es un tesoro. No tienes que ganarte el derecho a que te quiera. Aquí estoy y no me voy a ir."`;
  }

  const tacticalAdvice =
    totalScore >= 80
      ? '¡Excelente respuesta! El siguiente nivel de maestría es acompañar estas palabras con un vaso de agua fresca o un silencio prolongado respetuoso.'
      : 'Aplica el Modelo V.A.L.I.D.A.: primero visibiliza el impacto crudo ("Veo lo mucho que te duele"), valida el derecho a sentirse así sin buscar el lado positivo rápido, y ofrece presencia leal.';

  return {
    score: totalScore,
    levelTitle,
    metrics: {
      empathyAndWarmth: empathy,
      emotionalValidation: validation,
      freedomFromFixing: freedomFromFixing,
      holdingSpace: holdingSpace,
      assertiveSupport: assertiveSupport
    },
    strengths,
    risksOrBlindSpots,
    howTheOtherPersonFelt,
    suggestedRewrite,
    tacticalAdvice,
    detectedClichés,
    detectedPositiveTraits
  };
}

// Call Google Gemini API
async function callGeminiAPI(
  userResponse: string,
  scenario: Scenario,
  apiKey: string,
  modelName: string
): Promise<AIAnalysisResult | null> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const prompt = `
Actúa como un psicólogo clínico senior y maestro en comunicación empática y compasiva (especialista en Carl Rogers, Marshall Rosenberg y primeros auxilios psicológicos).

Un usuario está practicando cómo consolar a una persona en una situación emocionalmente devastadora.

DATOS DEL CASO:
- Nombre de la persona: ${scenario.name} (${scenario.personAge} años)
- Relación: ${scenario.relation}
- Situación: ${scenario.title} - ${scenario.backgroundStory}
- Lenguaje corporal: ${scenario.bodyLanguage}
- Lo que la persona le dijo al usuario: "${scenario.openingStatement}"
- Necesidad psicológica interna no dicha: "${scenario.internalNeed}"
- Errores comunes típicos en este caso: ${scenario.commonPitfalls.join('; ')}

RESPUESTA DADA POR EL USUARIO PARA CONSOLARLO/A:
"${userResponse}"

Analiza a fondo la respuesta del usuario con honestidad, pedagogía y calidez. Evalúa si hubo validación emocional, si cayó en positivismo tóxico, si intentó dar consejos apresurados o si supo sostener el dolor.

Responde ÚNICAMENTE en formato JSON plano válido con esta estructura exacta (sin markdown de triple backticks alrededor, solo el objeto JSON):
{
  "score": <número entero entre 0 y 100>,
  "levelTitle": "<título corto según su desempeño, ej: 'Acompañante Compasivo Maestro' o 'Intención Positiva con Reflejo Corrector'>",
  "metrics": {
    "empathyAndWarmth": <entero 0-100>,
    "emotionalValidation": <entero 0-100>,
    "freedomFromFixing": <entero 0-100 donde 100 es cero consejos no pedidos y cero positividad tóxica>,
    "holdingSpace": <entero 0-100 donde 100 es cero egocentrismo o robar protagonismo>,
    "assertiveSupport": <entero 0-100 presencia y ayuda respetuosa>
  },
  "strengths": ["<fortaleza 1>", "<fortaleza 2>"],
  "risksOrBlindSpots": ["<punto ciego o riesgo 1>", "<punto ciego 2>"],
  "howTheOtherPersonFelt": "<párrafo empático describiendo en tercera persona cómo resonaron esas palabras exactas en el corazón de ${scenario.name}>",
  "suggestedRewrite": "<la versión maestra de cómo un consejero empático perfecto respondería a ${scenario.name} en esta situación, entre comillas>",
  "tacticalAdvice": "<1 o 2 consejos prácticos específicos para la próxima vez>",
  "detectedClichés": ["<cliché detectado si hubo, o vacío si no hubo>"],
  "detectedPositiveTraits": ["<rasgo positivo detectado>"]
}
`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ],
      generationConfig: {
        temperature: 0.3,
        responseMimeType: 'application/json'
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!textContent) {
    throw new Error('No content returned from Gemini');
  }

  const cleaned = textContent.replace(/```json/g, '').replace(/```/g, '').trim();
  const parsed = JSON.parse(cleaned) as AIAnalysisResult;
  return parsed;
}
