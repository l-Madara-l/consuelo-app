import React, { useState } from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  Volume2, 
  Copy, 
  Check, 
  Sparkles, 
  RotateCcw,
  UserCheck
} from 'lucide-react';
import { AIAnalysisResult, Scenario } from '../../types';
import { speakPhrase } from '../../services/speechService';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysis: AIAnalysisResult;
  scenario: Scenario;
  userResponse: string;
  onRetry: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  analysis,
  scenario,
  onRetry
}) => {
  const [copiedRewrite, setCopiedRewrite] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!isOpen) return null;

  const handleCopyRewrite = () => {
    navigator.clipboard.writeText(analysis.suggestedRewrite);
    setCopiedRewrite(true);
    setTimeout(() => setCopiedRewrite(false), 2000);
  };

  const handleSpeakRewrite = () => {
    setIsPlayingAudio(true);
    speakPhrase(analysis.suggestedRewrite, () => setIsPlayingAudio(false));
  };

  const getMetricBarColor = (val: number) => {
    if (val >= 80) return 'bg-[#597360]';
    if (val >= 60) return 'bg-[#C28236]';
    return 'bg-[#B85C5C]';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F1D1B]/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-4xl bg-white border border-[#E6DFD5] rounded-3xl shadow-xl flex flex-col max-h-[94vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#E6DFD5] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-[#F7ECE8] border border-[#E8CFC6] flex items-center justify-center text-[#A35C46]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-normal text-[#1F1D1B] font-editorial">
                Dossier de Sintonía Psicológica & Acompañamiento
              </h2>
              <p className="text-xs text-[#6B655F] font-mono">
                Evaluación clínica ante el dolor de {scenario.name}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#9C948B] hover:text-[#1F1D1B] hover:bg-[#F2ECE4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-7">
          
          {/* Top Score Banner */}
          <div className="p-6 rounded-3xl border border-[#E8CFC6] bg-[#F7ECE8] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-20 h-20 rounded-3xl bg-white border border-[#E8CFC6] flex flex-col items-center justify-center flex-shrink-0 shadow-2xs">
                <span className="text-3xl font-black font-mono leading-none text-[#A35C46]">{analysis.score}</span>
                <span className="text-[10px] uppercase font-bold text-[#9C948B] mt-1 font-mono">/ 100 PTS</span>
              </div>
              <div>
                <span className="text-[11px] uppercase font-mono font-bold tracking-widest text-[#A35C46]">
                  Grado de Presencia Alcanzado
                </span>
                <h3 className="text-2xl font-normal text-[#1F1D1B] font-editorial">
                  {analysis.levelTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B655F] mt-1 font-serif">
                  {analysis.score >= 80
                    ? 'Lograste un refugio de contención sincera sin caer en la urgencia de reparar a la persona.'
                    : 'Intención positiva y afectuosa, pero identificamos puntos ciegos o reflejos correctores.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onRetry();
              }}
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-[#6B655F] text-xs font-semibold border border-[#E8CFC6] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ensayar otra respuesta</span>
            </button>
          </div>

          {/* 5 Core Metrics */}
          <div className="bg-[#FAF7F2] border border-[#E6DFD5] rounded-3xl p-6 space-y-5">
            <h4 className="text-xs font-mono font-bold text-[#A35C46] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C28236]" /> Las Cinco Dimensiones del Sostén
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Metric 1 */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5 font-mono">
                  <span className="text-[#1F1D1B]">1. Empatía y Calidez Humana</span>
                  <span className="text-[#A35C46] font-bold">{analysis.metrics.empathyAndWarmth}%</span>
                </div>
                <div className="w-full h-2 bg-[#E6DFD5] rounded-full overflow-hidden">
                  <div className={`h-full ${getMetricBarColor(analysis.metrics.empathyAndWarmth)}`} style={{ width: `${analysis.metrics.empathyAndWarmth}%` }} />
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5 font-mono">
                  <span className="text-[#1F1D1B]">2. Validación Emocional</span>
                  <span className="text-[#A35C46] font-bold">{analysis.metrics.emotionalValidation}%</span>
                </div>
                <div className="w-full h-2 bg-[#E6DFD5] rounded-full overflow-hidden">
                  <div className={`h-full ${getMetricBarColor(analysis.metrics.emotionalValidation)}`} style={{ width: `${analysis.metrics.emotionalValidation}%` }} />
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5 font-mono">
                  <span className="text-[#1F1D1B]">3. Ausencia de Positividad Tóxica</span>
                  <span className="text-[#A35C46] font-bold">{analysis.metrics.freedomFromFixing}%</span>
                </div>
                <div className="w-full h-2 bg-[#E6DFD5] rounded-full overflow-hidden">
                  <div className={`h-full ${getMetricBarColor(analysis.metrics.freedomFromFixing)}`} style={{ width: `${analysis.metrics.freedomFromFixing}%` }} />
                </div>
              </div>

              {/* Metric 4 */}
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5 font-mono">
                  <span className="text-[#1F1D1B]">4. Espacio y Presencia</span>
                  <span className="text-[#A35C46] font-bold">{analysis.metrics.holdingSpace}%</span>
                </div>
                <div className="w-full h-2 bg-[#E6DFD5] rounded-full overflow-hidden">
                  <div className={`h-full ${getMetricBarColor(analysis.metrics.holdingSpace)}`} style={{ width: `${analysis.metrics.holdingSpace}%` }} />
                </div>
              </div>

              {/* Metric 5 */}
              <div className="sm:col-span-2">
                <div className="flex justify-between text-xs font-medium mb-1.5 font-mono">
                  <span className="text-[#1F1D1B]">5. Asertividad y Apoyo Concreto</span>
                  <span className="text-[#A35C46] font-bold">{analysis.metrics.assertiveSupport}%</span>
                </div>
                <div className="w-full h-2 bg-[#E6DFD5] rounded-full overflow-hidden">
                  <div className={`h-full ${getMetricBarColor(analysis.metrics.assertiveSupport)}`} style={{ width: `${analysis.metrics.assertiveSupport}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* How the other person felt */}
          <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 space-y-3">
            <h4 className="text-xs font-mono font-bold text-[#597360] uppercase tracking-wider flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#597360]" /> Cómo resonaron tus palabras en el corazón de {scenario.name}:
            </h4>
            <p className="text-base sm:text-lg text-[#1F1D1B] font-serif italic leading-relaxed bg-[#FAF7F2] p-5 rounded-2xl border border-[#E6DFD5]">
              "{analysis.howTheOtherPersonFelt}"
            </p>
          </div>

          {/* Strengths and Risks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Strengths */}
            <div className="p-6 rounded-3xl bg-[#EEF4EF] border border-[#CADACD] space-y-3">
              <h5 className="text-xs font-bold text-[#597360] uppercase tracking-wider flex items-center gap-2 font-mono">
                <CheckCircle2 className="w-4 h-4" /> Lo que hiciste con excelencia
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#24422A] font-serif">
                {analysis.strengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#597360] mt-1 font-bold">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks / Clichés */}
            <div className="p-6 rounded-3xl bg-[#FBF0F0] border border-[#ECCECE] space-y-3">
              <h5 className="text-xs font-bold text-[#B85C5C] uppercase tracking-wider flex items-center gap-2 font-mono">
                <AlertTriangle className="w-4 h-4 text-[#B85C5C]" /> Puntos ciegos a desaprender
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-[#6B2626] font-serif">
                {analysis.risksOrBlindSpots.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#B85C5C] mt-1 font-bold">•</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Suggested Master Rewrite */}
          <div className="bg-gradient-to-br from-[#F7ECE8] via-[#FAF7F2] to-white border border-[#E8CFC6] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A35C46] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Reformulación Maestra (Modelo V.A.L.I.D.A.):
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSpeakRewrite}
                  disabled={isPlayingAudio}
                  className="p-2 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#A35C46] transition-colors border border-[#E8CFC6]"
                  title="Escuchar entonación"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyRewrite}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#A35C46] text-[#FAF7F2] text-xs font-bold hover:bg-[#8F4E3A] transition-colors"
                >
                  {copiedRewrite ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedRewrite ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-[#1F1D1B] font-editorial italic font-normal leading-relaxed">
              {analysis.suggestedRewrite}
            </p>

            <div className="pt-3 border-t border-[#E8CFC6] text-xs text-[#6B655F] font-serif">
              <strong className="text-[#A35C46] font-mono not-italic font-bold">Consejo táctico:</strong> {analysis.tacticalAdvice}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#E6DFD5] bg-[#FAF7F2] flex items-center justify-between">
          <span className="text-xs text-[#597360] font-mono font-medium">
            +75 XP sumados a tu cuaderno de presencia
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] text-xs font-bold shadow-sm transition-all"
          >
            Continuar Aprendiendo
          </button>
        </div>
      </div>
    </div>
  );
};
