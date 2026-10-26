import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  HelpCircle, 
  Feather
} from 'lucide-react';
import { CourseModule, UserProgress } from '../../types';
import { LessonContent } from './LessonContent';
import { QuizComponent } from './QuizComponent';

interface ModuleDetailProps {
  module: CourseModule;
  onBack: () => void;
  userProgress: UserProgress;
  onCompleteLesson: (lessonId: string) => void;
  onPassQuiz: (moduleId: string, scorePercent: number) => void;
}

export const ModuleDetail: React.FC<ModuleDetailProps> = ({
  module,
  onBack,
  userProgress,
  onCompleteLesson,
  onPassQuiz
}) => {
  const [activeLessonId, setActiveLessonId] = useState<string>(module.lessons[0].id);
  const [showQuiz, setShowQuiz] = useState<boolean>(false);

  const currentLessonIndex = module.lessons.findIndex((l) => l.id === activeLessonId);
  const currentLesson = module.lessons[currentLessonIndex] || module.lessons[0];

  const handleNextLesson = () => {
    if (currentLessonIndex < module.lessons.length - 1) {
      setActiveLessonId(module.lessons[currentLessonIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setShowQuiz(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isModuleQuizCompleted = userProgress.completedQuizzes[module.id] !== undefined;

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-2">
      {/* Top Bar Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E6DFD5]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-[#6B655F] hover:text-[#A35C46] transition-colors group font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Volver a los tomos</span>
        </button>

        <div className="flex items-center gap-2.5">
          <span className="text-xs px-3 py-1 rounded-full bg-[#F7ECE8] text-[#A35C46] font-semibold border border-[#E8CFC6]">
            {module.badge}
          </span>
          <span className="text-xs text-[#9C948B] font-mono hidden sm:inline">
            {module.estimatedHours}
          </span>
        </div>
      </div>

      {/* Module Title Banner */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
        <span className="text-xs font-mono font-bold tracking-widest text-[#A35C46] uppercase block">
          Tomo {module.order} • Tratado Práctico
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1F1D1B] font-editorial leading-tight">
          {module.title}
        </h1>
        <p className="text-sm sm:text-base text-[#6B655F] leading-relaxed max-w-3xl font-serif">
          {module.subtitle}
        </p>

        {/* Lesson tabs / pills styled like archival markers */}
        <div className="pt-4 border-t border-[#EDE6DC] flex items-center gap-2.5 overflow-x-auto no-scrollbar">
          {module.lessons.map((lesson, idx) => {
            const isDone = userProgress.completedLessons.includes(lesson.id);
            const isActive = !showQuiz && activeLessonId === lesson.id;

            return (
              <button
                key={lesson.id}
                onClick={() => {
                  setActiveLessonId(lesson.id);
                  setShowQuiz(false);
                }}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#A35C46] text-[#FAF7F2] font-bold shadow-sm'
                    : 'bg-[#F2ECE4] text-[#6B655F] border border-[#E6DFD5] hover:border-[#A35C46]/40'
                }`}
              >
                {isDone ? (
                  <CheckCircle className={`w-3.5 h-3.5 ${isActive ? 'text-[#FAF7F2]' : 'text-[#597360]'}`} />
                ) : (
                  <Feather className="w-3.5 h-3.5 opacity-60" />
                )}
                <span>Capítulo {module.order}.{idx + 1}</span>
              </button>
            );
          })}

          {/* Quiz Tab */}
          <button
            onClick={() => setShowQuiz(true)}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              showQuiz
                ? 'bg-[#597360] text-[#FAF7F2] font-bold shadow-sm'
                : 'bg-[#EEF4EF] text-[#597360] border border-[#CADACD] hover:border-[#597360]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Test de Integración {isModuleQuizCompleted ? '✓' : ''}</span>
          </button>
        </div>
      </div>

      {/* Main View: Lesson or Quiz */}
      {showQuiz ? (
        <QuizComponent
          quiz={module.quiz}
          moduleTitle={module.title}
          onPassQuiz={(score) => onPassQuiz(module.id, score)}
          onReturnToLessons={() => {
            setShowQuiz(false);
            setActiveLessonId(module.lessons[0].id);
          }}
        />
      ) : (
        <LessonContent
          lesson={currentLesson}
          isCompleted={userProgress.completedLessons.includes(currentLesson.id)}
          onComplete={() => onCompleteLesson(currentLesson.id)}
          onNextLesson={handleNextLesson}
        />
      )}
    </div>
  );
};
