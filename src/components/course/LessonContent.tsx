import React, { useState } from 'react';
import { 
  CheckCircle, 
  Lightbulb, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  MessageSquare, 
  Volume2, 
  Award,
  Feather
} from 'lucide-react';
import { Lesson } from '../../types';
import { speakPhrase } from '../../services/speechService';

interface LessonContentProps {
  lesson: Lesson;
  isCompleted: boolean;
  onComplete: () => void;
  onNextLesson?: () => void;
}

export const LessonContent: React.FC<LessonContentProps> = ({
  lesson,
  isCompleted,
  onComplete,
  onNextLesson
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleSpeak = (text: string) => {
    setIsPlayingAudio(true);
    speakPhrase(text, () => setIsPlayingAudio(false));
  };

  return (
    <article className="space-y-10 animate-fade-in max-w-4xl mx-auto py-2">
      {/* Lesson Header */}
      <div className="border-b border-[#E6DFD5] pb-7 space-y-3">
        <div className="flex items-center gap-3 text-xs text-[#A35C46] font-mono font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {lesson.readingTimeMinutes} min de lectura pausada
          </span>
          <span className="text-[#D0C7BC]">/</span>
          <span className="text-[#597360] flex items-center gap-1 font-sans">
            <Feather className="w-3.5 h-3.5" /> Tratado de Acompañamiento
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1F1D1B] font-editorial tracking-tight leading-[1.18]">
          {lesson.title}
        </h1>

        <p className="text-base sm:text-lg text-[#6B655F] font-serif italic leading-relaxed">
          {lesson.summary}
        </p>
      </div>

      {/* Main Content Body */}
      <div className="text-[#2C2A29] space-y-6 text-base sm:text-lg leading-[1.78] font-serif">
        {lesson.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-2xl font-normal text-[#1F1D1B] font-editorial pt-6 pb-2 border-b border-[#E6DFD5]">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          if (paragraph.startsWith('#### ')) {
            return (
              <h4 key={idx} className="text-lg font-semibold text-[#A35C46] font-editorial pt-3">
                {paragraph.replace('#### ', '')}
              </h4>
            );
          }
          if (paragraph.startsWith('> ')) {
            return (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-[#F7ECE8] border-l-4 border-[#A35C46] text-[#1F1D1B] font-serif italic text-lg my-6 shadow-2xs">
                {paragraph.replace('> ', '')}
              </div>
            );
          }
          if (paragraph.startsWith('* ') || paragraph.startsWith('- ')) {
            const items = paragraph.split('\n');
            return (
              <ul key={idx} className="space-y-2.5 pl-6 list-disc text-[#3F3C38]">
                {items.map((it, i) => (
                  <li key={i} className="pl-1">
                    <span dangerouslySetInnerHTML={{ __html: it.replace(/^[\*\-]\s+/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1F1D1B] font-medium">$1</strong>') }} />
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-[#3F3C38] leading-relaxed" dangerouslySetInnerHTML={{
              __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#1F1D1B] font-semibold">$1</strong>').replace(/\*(.*?)\*/g, '<em class="text-[#A35C46] font-serif">$1</em>')
            }} />
          );
        })}
      </div>

      {/* Key Takeaways Card */}
      {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
        <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#A35C46] font-mono">
            <Lightbulb className="w-4 h-4 text-[#C28236]" />
            <span>Puntos de Anclaje para el Corazón</span>
          </div>

          <ul className="space-y-3">
            {lesson.keyTakeaways.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#1F1D1B] font-serif">
                <div className="w-5 h-5 rounded-full bg-[#EEF4EF] text-[#597360] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tactics Section */}
      {lesson.tactics && lesson.tactics.length > 0 && (
        <div className="space-y-5">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#597360] font-mono">
            <Sparkles className="w-4 h-4" />
            <span>Táctica Práctica del Acompañante</span>
          </div>

          {lesson.tactics.map((tactic, i) => (
            <div key={i} className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div>
                <h5 className="text-xl font-normal text-[#1F1D1B] font-editorial">{tactic.name}</h5>
                <p className="text-sm text-[#6B655F] mt-1 font-serif leading-relaxed">{tactic.description}</p>
              </div>

              {/* Steps */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EDE6DC] space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A35C46] font-bold">
                  Procedimiento somático & verbal:
                </span>
                <ol className="space-y-2 pl-4 list-decimal text-sm text-[#3F3C38] font-serif">
                  {tactic.stepByStep.map((st, sIdx) => (
                    <li key={sIdx} className="pl-1">
                      {st}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Example Quote */}
              <div className="p-5 rounded-2xl bg-[#F7ECE8] border border-[#E8CFC6] flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#A35C46] uppercase tracking-wider block mb-1">
                    Frase modelo para pronunciar:
                  </span>
                  <p className="text-base sm:text-lg text-[#1F1D1B] font-serif italic leading-relaxed">
                    "{tactic.example}"
                  </p>
                </div>
                <button
                  onClick={() => handleSpeak(tactic.example)}
                  disabled={isPlayingAudio}
                  className="p-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#A35C46] transition-colors flex-shrink-0 shadow-2xs border border-[#E8CFC6]"
                  title="Escuchar entonación pausada"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dialogue Comparison: Theatrical Script Before vs After */}
      {lesson.dialogue && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C28236] font-mono">
            <MessageSquare className="w-4 h-4" />
            <span>Guión Clínico: La Respuesta Torpe vs La Respuesta Maestra</span>
          </div>

          <div className="p-4 rounded-2xl bg-[#F2ECE4] border border-[#E6DFD5] text-xs sm:text-sm text-[#6B655F] font-serif italic">
            <strong className="text-[#1F1D1B] font-sans font-semibold not-italic">Escena:</strong> {lesson.dialogue.context}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Poor approach */}
            <div className="p-6 rounded-3xl bg-[#FBF0F0] border border-[#ECCECE] flex flex-col justify-between space-y-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#B85C5C]/15 text-[#B85C5C] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                  ❌ Lo que la mayoría dice (Reflejo Corrector)
                </span>
                <p className="text-sm sm:text-base text-[#3F3C38] font-serif italic mb-3 leading-relaxed">
                  "{lesson.dialogue.poorApproach.said}"
                </p>
                <p className="text-xs text-[#8A4545] font-serif leading-relaxed">
                  <strong className="text-[#1F1D1B] font-sans">El error psicológico:</strong> {lesson.dialogue.poorApproach.problem}
                </p>
              </div>
              <div className="pt-3 border-t border-[#ECCECE] text-xs text-[#6B655F] font-serif italic">
                <strong className="not-italic text-[#1F1D1B] font-sans">Reacción del otro:</strong> {lesson.dialogue.poorApproach.otherReaction}
              </div>
            </div>

            {/* Master approach */}
            <div className="p-6 rounded-3xl bg-[#EEF4EF] border border-[#CADACD] flex flex-col justify-between space-y-4 shadow-2xs">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#597360]/20 text-[#597360] text-[11px] font-mono font-bold uppercase tracking-wider mb-2">
                  ✨ Respuesta Compasiva Maestra
                </span>
                <p className="text-sm sm:text-base text-[#1F1D1B] font-serif italic mb-3 leading-relaxed">
                  "{lesson.dialogue.masterApproach.said}"
                </p>
                <p className="text-xs text-[#4D6E52] font-serif leading-relaxed">
                  <strong className="text-[#1F1D1B] font-sans">Por qué calma:</strong> {lesson.dialogue.masterApproach.whyItWorks}
                </p>
              </div>
              <div className="pt-3 border-t border-[#CADACD] text-xs text-[#6B655F] font-serif italic">
                <strong className="not-italic text-[#1F1D1B] font-sans">Reacción del otro:</strong> {lesson.dialogue.masterApproach.otherReaction}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Completion & Next Action Buttons */}
      <div className="pt-8 border-t border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          {isCompleted ? (
            <span className="flex items-center gap-2 text-sm text-[#597360] font-semibold font-mono">
              <CheckCircle className="w-5 h-5" /> Capítulo asimilado (+50 XP ganados)
            </span>
          ) : (
            <button
              onClick={onComplete}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] font-bold text-sm shadow-sm transition-all active:scale-95"
            >
              <Award className="w-4 h-4 text-[#FAF7F2]" />
              <span>Marcar como Asimilado (+50 XP)</span>
            </button>
          )}
        </div>

        {onNextLesson && (
          <button
            onClick={onNextLesson}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#1F1D1B] text-sm font-semibold border border-[#E6DFD5] transition-colors"
          >
            <span>Siguiente Capítulo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </article>
  );
};
