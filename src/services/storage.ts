import { UserProgress } from '../types';

const STORAGE_KEY = 'consuelo_app_progress_v1';

export const DEFAULT_PROGRESS: UserProgress = {
  xp: 120,
  completedLessons: ['les-1-1'],
  completedQuizzes: {},
  simulationHistory: [],
  favoritePhrases: ['salv-1', 'salv-2'],
  geminiApiKey: '',
  selectedModel: 'gemini-1.5-flash'
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch (e) {
    console.error('Error loading user progress:', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Error saving user progress:', e);
  }
}

export function getUserLevelInfo(xp: number): {
  levelNumber: number;
  levelName: string;
  nextLevelXp: number;
  progressPercent: number;
} {
  const levels = [
    { level: 1, name: 'Observador Silencioso', xpRequired: 0 },
    { level: 2, name: 'Escucha Consciente', xpRequired: 200 },
    { level: 3, name: 'Compañero Compasivo', xpRequired: 500 },
    { level: 4, name: 'Refugio Seguro', xpRequired: 900 },
    { level: 5, name: 'Faro Emocional', xpRequired: 1400 },
    { level: 6, name: 'Maestro de la Presencia', xpRequired: 2000 }
  ];

  let current = levels[0];
  let next = levels[1];

  for (let i = levels.length - 1; i >= 0; i--) {
    if (xp >= levels[i].xpRequired) {
      current = levels[i];
      next = levels[i + 1] || { level: current.level + 1, name: 'Maestro Legendario', xpRequired: current.xpRequired + 1000 };
      break;
    }
  }

  const range = next.xpRequired - current.xpRequired;
  const currentInRange = xp - current.xpRequired;
  const progressPercent = Math.min(100, Math.max(0, Math.round((currentInRange / range) * 100)));

  return {
    levelNumber: current.level,
    levelName: current.name,
    nextLevelXp: next.xpRequired,
    progressPercent
  };
}
