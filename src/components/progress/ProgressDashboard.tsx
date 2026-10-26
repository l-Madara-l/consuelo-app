import React from 'react';
import { 
  Award, 
  Flame, 
  BookOpen, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  TrendingUp, 
  History, 
  ShieldCheck 
} from 'lucide-react';
import { UserProgress } from '../../types';
import { getUserLevelInfo } from '../../services/storage';
import { COURSE_MODULES } from '../../data/courseModules';
import { SIMULATOR_SCENARIOS } from '../../data/simulatorScenarios';

interface ProgressDashboardProps {
  userProgress: UserProgress;
  onGoToCourse: () => void;
  onGoToSimulator: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  userProgress,
  onGoToSimulator
}) => {
  const levelInfo = getUserLevelInfo(userProgress.xp);
  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);

  const avgSimScore = userProgress.simulationHistory.length > 0
    ? Math.round(
        userProgress.simulationHistory.reduce((acc, h) => acc + h.analysis.score, 0) /
        userProgress.simulationHistory.length
      )
    : 0;

  const badges = [
    {
      id: 'first-step',
      name: 'Primer Paso Consciente',
      desc: 'Completaste tu primera lección de escucha activa.',
      unlocked: userProgress.completedLessons.length >= 1
    },
    {
      id: 'quiz-master',
      name: 'Instinto Clínico',
      desc: 'Aprobaste al menos una evaluación de capítulo.',
      unlocked: Object.keys(userProgress.completedQuizzes).length >= 1
    },
    {
      id: 'practitioner',
      name: 'Ensayista Empático',
      desc: 'Completaste al menos una simulación con análisis de IA.',
      unlocked: userProgress.simulationHistory.length >= 1
    },
    {
      id: 'high-scorer',
      name: 'Faro de Refugio',
      desc: 'Obtuviste 85+ puntos en una simulación con IA.',
      unlocked: userProgress.simulationHistory.some((h) => h.analysis.score >= 85)
    },
    {
      id: 'curator',
      name: 'Coleccionista de Palabras',
      desc: 'Guardaste 3 o más frases en tus favoritas.',
      unlocked: userProgress.favoritePhrases.length >= 3
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto py-2">
      {/* Hero Level Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-[#F5ECE5] via-[#FAF7F2] to-[#FAF7F2] border border-[#E8CFC6] p-7 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#A35C46] border border-[#E8CFC6] text-xs font-semibold flex items-center gap-1.5 font-mono shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-[#C28236]" />
              Nivel de Maestría {levelInfo.levelNumber}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-normal text-[#1F1D1B] font-editorial tracking-tight leading-[1.14]">
            {levelInfo.levelName}
          </h1>

          <p className="text-base sm:text-lg text-[#6B655F] font-serif italic leading-relaxed max-w-2xl">
            Tu cerebro está reconectando la respuesta natural ante el dolor. Cada capítulo asimilado y cada simulación evaluada con IA refuerza tu musculatura emocional para sostener el espacio sin congelarte.
          </p>

          {/* XP Progress Bar */}
          <div className="pt-2 max-w-xl space-y-2">
            <div className="flex items-center justify-between text-xs text-[#6B655F] font-mono">
              <span className="text-[#A35C46] font-bold">{userProgress.xp} XP acumulados</span>
              <span className="text-[#9C948B]">Meta siguiente nivel: {levelInfo.nextLevelXp} XP</span>
            </div>
            <div className="w-full h-2.5 bg-[#E6DFD5] rounded-full overflow-hidden p-[1px]">
              <div 
                className="h-full bg-gradient-to-r from-[#A35C46] via-[#C28236] to-[#597360] rounded-full transition-all duration-700"
                style={{ width: `${levelInfo.progressPercent}%` }}
              />
            </div>
            <p className="text-[11px] text-[#9C948B] text-right font-mono">
              {levelInfo.progressPercent}% hacia el siguiente rango
            </p>
          </div>
        </div>
      </div>

      {/* Numerical Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* Stat 1 */}
        <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 text-center sm:text-left space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#F7ECE8] text-[#A35C46] flex items-center justify-center mx-auto sm:mx-0 border border-[#E8CFC6]">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-3xl font-normal text-[#1F1D1B] font-editorial block">
            {userProgress.completedLessons.length} / {totalLessons}
          </span>
          <span className="text-xs text-[#6B655F] block font-light">Capítulos Asimilados</span>
        </div>

        {/* Stat 2 */}
        <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 text-center sm:text-left space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#EEF4EF] text-[#597360] flex items-center justify-center mx-auto sm:mx-0 border border-[#CADACD]">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-3xl font-normal text-[#1F1D1B] font-editorial block">
            {userProgress.simulationHistory.length}
          </span>
          <span className="text-xs text-[#6B655F] block font-light">Prácticas Evaluadas con IA</span>
        </div>

        {/* Stat 3 */}
        <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 text-center sm:text-left space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#FBF4EB] text-[#C28236] flex items-center justify-center mx-auto sm:mx-0 border border-[#EDDDC7]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <span className="text-3xl font-normal text-[#1F1D1B] font-editorial block">
            {avgSimScore > 0 ? `${avgSimScore} pts` : '—'}
          </span>
          <span className="text-xs text-[#6B655F] block font-light">Puntuación Promedio</span>
        </div>

        {/* Stat 4 */}
        <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 text-center sm:text-left space-y-2 shadow-2xs">
          <div className="w-10 h-10 rounded-xl bg-[#FBF0F0] text-[#B85C5C] flex items-center justify-center mx-auto sm:mx-0 border border-[#ECCECE]">
            <Star className="w-5 h-5" />
          </div>
          <span className="text-3xl font-normal text-[#1F1D1B] font-editorial block">
            {userProgress.favoritePhrases.length}
          </span>
          <span className="text-xs text-[#6B655F] block font-light">Frases Guardadas</span>
        </div>
      </div>

      {/* Badges of Honor */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <h3 className="text-xl font-normal text-[#1F1D1B] font-editorial flex items-center gap-2.5">
          <Award className="w-5 h-5 text-[#C28236]" /> Medallones de Sabiduría Desbloqueados
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-5 rounded-2xl border transition-all ${
                b.unlocked
                  ? 'bg-[#FAF7F2] border-[#E8CFC6] text-[#1F1D1B] shadow-2xs'
                  : 'bg-[#FAF7F2]/40 border-[#EDE6DC] text-[#9C948B] opacity-50'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  b.unlocked ? 'bg-[#F7ECE8] text-[#A35C46]' : 'bg-[#E6DFD5] text-[#9C948B]'
                }`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-normal text-[#1F1D1B] font-editorial">{b.name}</h4>
              </div>
              <p className="text-xs text-[#6B655F] font-serif leading-relaxed">{b.desc}</p>
              <div className="mt-3 text-[11px] font-mono">
                {b.unlocked ? (
                  <span className="text-[#597360] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Desbloqueada
                  </span>
                ) : (
                  <span className="text-[#9C948B]">Por alcanzar</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* History of simulations */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-normal text-[#1F1D1B] font-editorial flex items-center gap-2.5">
            <History className="w-5 h-5 text-[#597360]" /> Registro Completo de Simulaciones
          </h3>
          <button
            onClick={onGoToSimulator}
            className="text-xs font-mono text-[#A35C46] hover:text-[#1F1D1B] transition-colors"
          >
            Hacer nueva simulación →
          </button>
        </div>

        {userProgress.simulationHistory.length === 0 ? (
          <div className="text-center py-10 text-[#9C948B] text-xs font-serif italic">
            Aún no has realizado ninguna simulación. ¡Entra en el Simulador IA para poner a prueba tu respuesta!
          </div>
        ) : (
          <div className="space-y-4">
            {userProgress.simulationHistory.map((item) => {
              const matchedScen = SIMULATOR_SCENARIOS.find((s) => s.id === item.scenarioId);
              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD5] space-y-3 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-editorial text-base text-[#1F1D1B]">
                      Caso: {matchedScen?.name || 'Caso Personalizado'} ({matchedScen?.title || 'Situación'})
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#F7ECE8] text-[#A35C46] font-mono font-bold">
                      {item.analysis.score} / 100 pts
                    </span>
                  </div>

                  <p className="text-[#3F3C38] font-serif italic bg-white p-3.5 rounded-xl border border-[#EDE6DC]">
                    "{item.userResponse}"
                  </p>

                  <div className="pt-1 flex flex-wrap items-center justify-between gap-2 text-[#6B655F]">
                    <span className="font-medium text-[#1F1D1B]">{item.analysis.levelTitle}</span>
                    <span className="text-[#597360] font-serif italic">
                      Consejo: {item.analysis.tacticalAdvice}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
