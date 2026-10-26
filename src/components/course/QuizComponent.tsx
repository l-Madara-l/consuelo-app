import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizQuestion } from '../../types';

interface QuizComponentProps {
  quiz: QuizQuestion[];
  moduleTitle: string;
  onPassQuiz: (scorePercent: number) => void;
  onReturnToLessons: () => void;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({
  quiz,
  moduleTitle,
  onPassQuiz,
  onReturnToLessons
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quiz[currentIndex];

  const handleSelectOption = (optionId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId) return;
    setIsAnswerSubmitted(true);
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: selectedOptionId }));
  };

  const handleNext = () => {
    if (currentIndex < quiz.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
    } else {
      let correctCount = 0;
      quiz.forEach((q) => {
        const chosenId = userAnswers[q.id] || selectedOptionId;
        const opt = q.options.find((o) => o.id === chosenId);
        if (opt?.isCorrect) correctCount++;
      });
      const percent = Math.round((correctCount / quiz.length) * 100);
      setIsFinished(true);

      if (percent >= 60) {
        confetti({
          particleCount: 110,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#A35C46', '#597360', '#C28236', '#F7ECE8', '#EEF4EF']
        });
      }
      onPassQuiz(percent);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setUserAnswers({});
    setIsFinished(false);
  };

  if (isFinished) {
    let correctCount = 0;
    quiz.forEach((q) => {
      const chosenId = userAnswers[q.id];
      const opt = q.options.find((o) => o.id === chosenId);
      if (opt?.isCorrect) correctCount++;
    });
    const percent = Math.round((correctCount / quiz.length) * 100);
    const passed = percent >= 60;

    return (
      <div className="max-w-2xl mx-auto p-8 sm:p-10 bg-white border border-[#E6DFD5] rounded-3xl shadow-sm text-center space-y-6 animate-fade-in my-3">
        <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center ${
          passed ? 'bg-[#EEF4EF] text-[#597360] border border-[#CADACD]' : 'bg-[#FBF4EB] text-[#C28236] border border-[#EDDDC7]'
        }`}>
          {passed ? <Award className="w-10 h-10" /> : <RotateCcw className="w-10 h-10" />}
        </div>

        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A35C46]">
            Evaluación del Tomo
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#1F1D1B] font-editorial mt-1">
            {passed ? '¡Criterio Clínico y Empatía Demostrada!' : 'Momento de Repaso y Asimilación'}
          </h2>
          <p className="text-sm text-[#6B655F] mt-2 font-mono">
            Respuestas certeras: {correctCount} de {quiz.length} ({percent}%)
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD5] text-sm text-[#3F3C38] font-serif italic leading-relaxed">
          {passed ? (
            <p>
              "Has asimilado la diferencia entre reparar un problema técnico y acompañar una herida del alma." <br />
              <span className="text-[#A35C46] font-sans font-bold not-italic block mt-1">+100 XP de sabiduría otorgados.</span>
            </p>
          ) : (
            <p>
              Te sugerimos releer los diálogos de este tomo para que el instinto compasivo fluya naturalmente.
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#F2ECE4] hover:bg-[#EAE4DB] text-[#1F1D1B] text-xs font-semibold transition-colors flex items-center justify-center gap-2 border border-[#E6DFD5]"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir Preguntas</span>
          </button>
          <button
            onClick={onReturnToLessons}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Volver al Tomo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const selectedOpt = currentQ.options.find((o) => o.id === selectedOptionId);

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in py-2">
      {/* Header */}
      <div className="flex items-center justify-between text-xs text-[#9C948B] border-b border-[#E6DFD5] pb-4 font-mono">
        <span className="font-semibold text-[#A35C46] uppercase tracking-wider">
          Test de Integración • {moduleTitle}
        </span>
        <span>
          Pregunta {currentIndex + 1} de {quiz.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-[#E6DFD5] rounded-full overflow-hidden p-[1px]">
        <div 
          className="h-full bg-[#A35C46] transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / quiz.length) * 100}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-9 space-y-6 shadow-sm">
        <div className="flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#F7ECE8] text-[#A35C46] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#E8CFC6]">
            <HelpCircle className="w-4 h-4" />
          </div>
          <h3 className="text-xl sm:text-2xl font-normal text-[#1F1D1B] font-editorial leading-snug">
            {currentQ.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3.5">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            let optStyle = 'bg-[#FAF7F2] border-[#E6DFD5] hover:border-[#D0C7BC] text-[#3F3C38]';

            if (isAnswerSubmitted) {
              if (opt.isCorrect) {
                optStyle = 'bg-[#EEF4EF] border-[#597360] text-[#1F3D24]';
              } else if (isSelected && !opt.isCorrect) {
                optStyle = 'bg-[#FBF0F0] border-[#B85C5C] text-[#692626]';
              } else {
                optStyle = 'bg-[#FAF7F2] border-[#E6DFD5] text-[#9C948B] opacity-50';
              }
            } else if (isSelected) {
              optStyle = 'bg-[#F7ECE8] border-[#A35C46] text-[#1F1D1B] font-medium shadow-xs';
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                disabled={isAnswerSubmitted}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border text-sm sm:text-base font-serif transition-all flex items-start gap-3.5 leading-relaxed ${optStyle}`}
              >
                <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center flex-shrink-0 mt-0.5">
                  {isAnswerSubmitted && opt.isCorrect && <CheckCircle2 className="w-4 h-4 text-[#597360]" />}
                  {isAnswerSubmitted && isSelected && !opt.isCorrect && <XCircle className="w-4 h-4 text-[#B85C5C]" />}
                  {!isAnswerSubmitted && isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#A35C46]" />}
                </div>
                <span>{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation box after submitting */}
        {isAnswerSubmitted && selectedOpt && (
          <div className={`p-5 rounded-2xl border text-sm leading-relaxed animate-fade-in font-serif ${
            selectedOpt.isCorrect
              ? 'bg-[#EEF4EF] border-[#CADACD] text-[#1F3D24]'
              : 'bg-[#FBF0F0] border-[#ECCECE] text-[#692626]'
          }`}>
            <div className="font-bold mb-1.5 flex items-center gap-1.5 font-sans text-xs uppercase tracking-wider">
              {selectedOpt.isCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-[#597360]" />
                  <span>Criterio Correcto</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-[#B85C5C]" />
                  <span>Enfoque Inadecuado</span>
                </>
              )}
            </div>
            <p className="text-[#3F3C38] leading-relaxed">{selectedOpt.explanation}</p>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end pt-2">
          {!isAnswerSubmitted ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOptionId}
              className="px-7 py-3 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] disabled:opacity-40 text-[#FAF7F2] text-xs font-bold tracking-wide shadow-sm transition-all"
            >
              Comprobar Decisión
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] text-xs font-bold tracking-wide shadow-sm transition-all"
            >
              <span>{currentIndex < quiz.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
