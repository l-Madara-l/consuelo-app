import React, { useState } from 'react';
import { 
  X, 
  AlertCircle, 
  Copy, 
  Check, 
  Volume2, 
  ShieldAlert, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { EMERGENCY_CARDS } from '../data/emergencyCards';
import { speakPhrase } from '../services/speechService';

interface SOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SOSModal: React.FC<SOSModalProps> = ({ isOpen, onClose }) => {
  const [selectedCardId, setSelectedCardId] = useState<string>('sos-silencio');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentCard = EMERGENCY_CARDS.find((c) => c.id === selectedCardId) || EMERGENCY_CARDS[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (text: string) => {
    setIsPlayingAudio(true);
    speakPhrase(text, () => setIsPlayingAudio(false));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F1D1B]/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-white border border-[#E8CFC6] rounded-3xl shadow-xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#E6DFD5] bg-[#F7ECE8] flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8CFC6] flex items-center justify-center text-[#B85C5C]">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-normal text-[#1F1D1B] font-editorial">
                Modo SOS: Auxilio Rápido en Vivo
              </h2>
              <p className="text-xs text-[#6B655F] font-mono">
                Guía de 10 segundos para cuando alguien te está hablando ahora mismo
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#9C948B] hover:text-[#1F1D1B] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories selector pills */}
        <div className="px-5 py-3.5 bg-[#FAF7F2] border-b border-[#E6DFD5] flex items-center gap-2 overflow-x-auto no-scrollbar">
          {EMERGENCY_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => setSelectedCardId(card.id)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCardId === card.id
                  ? 'bg-[#A35C46] text-[#FAF7F2] shadow-xs font-bold'
                  : 'bg-white text-[#6B655F] hover:text-[#1F1D1B] border border-[#E6DFD5]'
              }`}
            >
              {card.category}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Title & Urgent Action */}
          <div className="bg-[#FAF7F2] border border-[#E6DFD5] rounded-2xl p-5">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#FBF4EB] text-[#C28236] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#EDDDC7]">
                <AlertCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-normal text-[#1F1D1B] font-editorial">{currentCard.title}</h3>
                <p className="text-sm text-[#A35C46] font-medium mt-1 font-sans">
                  ⚡ Acción inmediata: <span className="text-[#6B655F] font-light">{currentCard.urgentAction}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Say This (Hero Card) */}
          <div className="bg-[#EEF4EF] border-2 border-[#CADACD] rounded-3xl p-6 sm:p-7 shadow-xs relative">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#597360] text-xs font-mono font-bold uppercase tracking-wider border border-[#CADACD]">
                <Sparkles className="w-3.5 h-3.5" /> Di exactamente esto (o con tus palabras):
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSpeak(currentCard.sayThis)}
                  disabled={isPlayingAudio}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-[#FAF7F2] text-xs text-[#6B655F] hover:text-[#1F1D1B] transition-colors border border-[#CADACD] font-mono"
                  title="Escuchar entonación pausada"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'text-[#597360] animate-spin' : ''}`} />
                  <span className="hidden sm:inline">Escuchar tono</span>
                </button>
                <button
                  onClick={() => handleCopy(currentCard.sayThis, currentCard.id)}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#597360] text-[#FAF7F2] text-xs font-bold hover:bg-[#4B6352] transition-colors shadow-xs"
                >
                  {copiedId === currentCard.id ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-lg sm:text-xl font-editorial font-normal text-[#1F1D1B] leading-relaxed italic my-3">
              "{currentCard.sayThis}"
            </p>
          </div>

          {/* Avoid this */}
          <div className="bg-[#FBF0F0] border border-[#ECCECE] rounded-2xl p-5">
            <div className="flex items-start gap-3">
              <span className="text-[#B85C5C] font-bold text-xs uppercase tracking-wider font-mono flex-shrink-0 mt-0.5">
                ❌ Evita decir:
              </span>
              <p className="text-sm sm:text-base text-[#6B2626] italic font-serif leading-relaxed">
                {currentCard.avoidThis}
              </p>
            </div>
          </div>

          {/* Quick checklist */}
          <div className="bg-[#FAF7F2] border border-[#E6DFD5] rounded-2xl p-5">
            <h4 className="text-xs font-mono font-bold text-[#6B655F] uppercase tracking-wider mb-3 flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5 text-[#A35C46]" /> Anclaje somático para este momento:
            </h4>
            <ul className="space-y-2">
              {currentCard.quickCheck.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3F3C38] font-serif">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A35C46] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#E6DFD5] bg-[#FAF7F2] flex items-center justify-between">
          <p className="text-xs text-[#6B655F] font-serif italic">
            "Tu presencia tranquila vale más que un consejo perfecto."
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#F2ECE4] text-xs font-semibold text-[#1F1D1B] transition-colors border border-[#E6DFD5]"
          >
            Cerrar Auxilio
          </button>
        </div>
      </div>
    </div>
  );
};
