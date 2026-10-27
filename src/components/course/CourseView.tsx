import React, { useState } from 'react';
import { 
  Brain, 
  Ear, 
  ShieldCheck, 
  FolderHeart, 
  HeartHandshake, 
  BatteryCharging, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  BookOpen,
  Feather,
  Compass
} from 'lucide-react';
import { COURSE_MODULES } from '../../data/courseModules';
import { UserProgress } from '../../types';
import { ModuleDetail } from './ModuleDetail';

interface CourseViewProps {
  userProgress: UserProgress;
  onCompleteLesson: (lessonId: string) => void;
  onPassQuiz: (moduleId: string, scorePercent: number) => void;
  onGoToSimulator: () => void;
}

export const CourseView: React.FC<CourseViewProps> = ({
  userProgress,
  onCompleteLesson,
  onPassQuiz,
  onGoToSimulator
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  const totalLessons = COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessonsCount = userProgress.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedLessonsCount / totalLessons) * 100));

  if (selectedModuleId) {
    const currentModule = COURSE_MODULES.find((m) => m.id === selectedModuleId);
    if (currentModule) {
      return (
        <ModuleDetail
          module={currentModule}
          onBack={() => setSelectedModuleId(null)}
          userProgress={userProgress}
          onCompleteLesson={onCompleteLesson}
          onPassQuiz={onPassQuiz}
        />
      );
    }
  }

  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-[#C28236]" />;
      case 'Ear': return <Ear className="w-5 h-5 text-[#597360]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#A35C46]" />;
      case 'FolderHeart': return <FolderHeart className="w-5 h-5 text-[#B85C5C]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-[#C28236]" />;
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5 text-[#597360]" />;
      default: return <BookOpen className="w-5 h-5 text-[#A35C46]" />;
    }
  };

  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto py-2">
      {/* Editorial Sanctuary Hero Banner in Warm Linen & Terracotta */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#F5ECE5] via-[#FAF7F2] to-[#FAF7F2] border border-[#E8CFC6] p-7 sm:p-12 overflow-hidden shadow-sm">
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8CFC6] text-[#A35C46] text-xs font-semibold tracking-wide shadow-2xs">
              <Feather className="w-3.5 h-3.5" />
              <span>Tratado Práctico & Metodología de Acompañamiento</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F2ECE4] border border-[#E6DFD5] text-[#1F1D1B] text-xs font-mono font-medium shadow-2xs">
              <span className="text-[#A35C46] font-bold">Por:</span>
              <span className="font-semibold">aftMadara</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-normal text-[#1F1D1B] font-editorial tracking-tight leading-[1.14]">
            El Arte de Sostener: <br />
            <span className="italic font-serif text-[#A35C46]">
              Cómo estar ahí cuando sobran las palabras
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B655F] font-serif italic leading-relaxed max-w-2xl">
            "Consolar no es tener las respuestas sabias que resuelven una tragedia; es el coraje sagrado de no huir cuando alguien rompe a llorar frente a ti."
          </p>

          {/* Elegant Progress Strip */}
          <div className="pt-2 max-w-md space-y-2">
            <div className="flex items-center justify-between text-xs font-medium text-[#6B655F]">
              <span className="tracking-wide">Avance en los tomos: {completedLessonsCount} de {totalLessons} capítulos</span>
              <span className="text-[#A35C46] font-mono font-bold">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#E6DFD5] overflow-hidden p-[1px]">
              <div 
                className="h-full bg-gradient-to-r from-[#A35C46] to-[#C28236] rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedModuleId('modulo-1')}
              className="px-6 py-3 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] font-semibold text-xs sm:text-sm tracking-wide shadow-sm transition-all flex items-center gap-2 active:scale-95"
            >
              <Compass className="w-4 h-4" />
              <span>{completedLessonsCount > 0 ? 'Retomar Estudio' : 'Comenzar Tomo I'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onGoToSimulator}
              className="px-5 py-3 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#1F1D1B] text-xs sm:text-sm font-semibold border border-[#E6DFD5] transition-colors flex items-center gap-2 shadow-2xs"
            >
              <Sparkles className="w-4 h-4 text-[#597360]" />
              <span>Probar respuestas en el Simulador IA</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modules as Bound Literary Tomes */}
      <div className="space-y-6">
        <div className="flex items-end justify-between border-b border-[#E6DFD5] pb-3">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#A35C46] font-mono">
              Currículum Formativo
            </span>
            <h2 className="text-2xl font-normal text-[#1F1D1B] font-editorial mt-0.5">
              Los Seis Tomos de la Sabiduría Empática
            </h2>
          </div>
          <span className="text-xs text-[#9C948B] font-mono">
            6 volúmenes de estudio práctico
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSE_MODULES.map((module, idx) => {
            const completedInModule = module.lessons.filter((l) =>
              userProgress.completedLessons.includes(l.id)
            ).length;
            const isQuizPassed = userProgress.completedQuizzes[module.id] !== undefined;
            const isModuleFullyDone = completedInModule === module.lessons.length && isQuizPassed;

            return (
              <div
                key={module.id}
                onClick={() => setSelectedModuleId(module.id)}
                className="group relative bg-white hover:bg-[#FAF7F2] border border-[#E6DFD5] hover:border-[#A35C46]/60 rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md overflow-hidden"
              >
                {/* Decorative spine accent */}
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#A35C46]/40 group-hover:bg-[#A35C46] transition-all" />

                <div className="pl-1">
                  {/* Top Bar: Roman numeral & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F2ECE4] border border-[#E6DFD5] flex items-center justify-center group-hover:scale-105 transition-transform">
                        {getModuleIcon(module.icon)}
                      </div>
                      <span className="text-xs font-mono font-bold tracking-widest text-[#A35C46]">
                        TOMO {romanNumerals[idx]}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {isModuleFullyDone ? (
                        <span className="p-1 rounded-full bg-[#EEF4EF] text-[#597360]" title="Tomo completado">
                          <CheckCircle className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F2ECE4] text-[#6B655F] font-mono border border-[#E6DFD5]">
                          {completedInModule}/{module.lessons.length} caps.
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title & subtitle in Fraunces */}
                  <h3 className="text-lg font-normal text-[#1F1D1B] font-editorial group-hover:text-[#A35C46] transition-colors leading-snug">
                    {module.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B655F] mt-2 line-clamp-3 leading-relaxed font-serif">
                    {module.subtitle}
                  </p>
                </div>

                {/* Bottom meta */}
                <div className="mt-6 pt-4 border-t border-[#EDE6DC] flex items-center justify-between text-xs text-[#9C948B] pl-1 font-mono">
                  <span>{module.estimatedHours}</span>
                  <span className="text-[#A35C46] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-sans">
                    <span>Abrir Tomo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
