export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface DialogueExample {
  context: string;
  poorApproach: {
    said: string;
    problem: string;
    otherReaction: string;
  };
  masterApproach: {
    said: string;
    tactic: string;
    whyItWorks: string;
    otherReaction: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  readingTimeMinutes: number;
  summary: string;
  content: string; // Markdown / structured content
  keyTakeaways: string[];
  tactics: {
    name: string;
    description: string;
    stepByStep: string[];
    example: string;
  }[];
  dialogue?: DialogueExample;
}

export interface CourseModule {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  estimatedHours: string;
  description: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}

export interface Scenario {
  id: string;
  name: string;
  personAge: number;
  relation: string;
  emotion: 'duelo' | 'ruptura' | 'ansiedad' | 'despido' | 'depresion' | 'ira';
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  title: string;
  backgroundStory: string;
  openingStatement: string;
  bodyLanguage: string;
  internalNeed: string; // What the person actually needs under the hood
  commonPitfalls: string[]; // Mistakes people usually make in this scenario
  idealKeyPoints: string[]; // Things a great answer should touch
}

export interface PhraseItem {
  id: string;
  phrase: string;
  category: 'duelo' | 'ruptura' | 'ansiedad' | 'fracaso' | 'rabia' | 'vacio' | 'desconcierto' | 'salvavidas';
  situation: string;
  intention: string; // e.g., "Validar el dolor sin apresurar", "Ofrecer presencia silenciosa"
  toneTip: string; // "Voz baja, ritmo pausado, sin sonrisa forzada"
  forbiddenAlternative: string; // Cliché a evitar, ej: "Todo pasa por algo"
  whyAvoid: string;
}

export interface AIAnalysisResult {
  score: number; // 0-100
  levelTitle: string; // e.g. "Acompañante Compasivo", "Validación en Proceso", etc.
  metrics: {
    empathyAndWarmth: number; // 0-100
    emotionalValidation: number; // 0-100
    freedomFromFixing: number; // 0-100 (evitar solucionar a la fuerza)
    holdingSpace: number; // 0-100 (no robarse el protagonismo)
    assertiveSupport: number; // 0-100 (ofrecer ayuda respetuosa)
  };
  strengths: string[];
  risksOrBlindSpots: string[];
  howTheOtherPersonFelt: string;
  suggestedRewrite: string;
  tacticalAdvice: string;
  detectedClichés: string[];
  detectedPositiveTraits: string[];
}

export interface UserProgress {
  xp: number;
  completedLessons: string[];
  completedQuizzes: { [quizId: string]: number }; // score %
  simulationHistory: {
    id: string;
    scenarioId: string;
    userResponse: string;
    analysis: AIAnalysisResult;
    timestamp: string;
  }[];
  favoritePhrases: string[];
  geminiApiKey?: string;
  selectedModel?: string;
}
