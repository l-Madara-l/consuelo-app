import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Sparkles, 
  Info, 
  Volume2,
  Heart,
  Eye
} from 'lucide-react';
import { Scenario, AIAnalysisResult } from '../../types';
import { analyzeResponseWithAI } from '../../services/aiAnalyzer';
import { FeedbackModal } from './FeedbackModal';
import { speakPhrase } from '../../services/speechService';

interface ChatSimulatorProps {
  scenario: Scenario;
  onBack: () => void;
  apiKey?: string;
  selectedModel?: string;
  onSimulationRecorded: (scenarioId: string, userResponse: string, analysis: AIAnalysisResult) => void;
}

export const ChatSimulator: React.FC<ChatSimulatorProps> = ({
  scenario,
  onBack,
  apiKey,
  selectedModel,
  onSimulationRecorded
}) => {
  const [userResponse, setUserResponse] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const handleAnalyze = async () => {
    if (!userResponse.trim() || isAnalyzing) return;

    setIsAnalyzing(true);
    try {
      const result = await analyzeResponseWithAI(
        userResponse,
        scenario,
        apiKey,
        selectedModel
      );
      setAnalysisResult(result);
      setIsModalOpen(true);
      onSimulationRecorded(scenario.id, userResponse, result);
    } catch (err) {
      console.error('Error analyzing response:', err);
      alert('Hubo un error al procesar el análisis. Por favor intenta de nuevo.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleInsertTemplate = (text: string) => {
    setUserResponse((prev) => (prev ? `${prev} ${text}` : text));
  };

  const handleTestToxicCliché = () => {
    setUserResponse(`No te preocupes ${scenario.name}, todo pasa por algo. Tienes que ser fuerte y echarle ganas. Lo que tienes que hacer de inmediato es distraerte y no pensar en eso.`);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in py-2">
      {/* Top back bar */}
      <div className="flex items-center justify-between pb-4 border-b border-[#E6DFD5]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-semibold text-[#6B655F] hover:text-[#A35C46] transition-colors font-sans"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al círculo de casos</span>
        </button>

        <div className="flex items-center gap-2.5">
          <span className="text-xs px-3 py-1 rounded-full bg-[#F2ECE4] text-[#6B655F] font-medium border border-[#E6DFD5]">
            {scenario.relation}
          </span>
          <span className="text-xs font-mono text-[#A35C46]">
            Dificultad: {scenario.difficulty}
          </span>
        </div>
      </div>

      {/* Case Header Card */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#F2ECE4] border border-[#E6DFD5] flex items-center justify-center font-editorial text-2xl font-normal text-[#1F1D1B] shadow-2xs">
              {scenario.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-normal text-[#1F1D1B] font-editorial flex items-center gap-2">
                <span>{scenario.name}</span>
                <span className="text-xs font-sans font-light text-[#9C948B]">({scenario.personAge} años)</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A35C46] font-serif italic">
                Caso: {scenario.title}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="self-start sm:self-center flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#F2ECE4] hover:bg-[#EAE4DB] text-xs text-[#6B655F] transition-colors border border-[#E6DFD5]"
          >
            <Info className="w-3.5 h-3.5 text-[#A35C46]" />
            <span>{showDetails ? 'Ocultar contexto' : 'Ver contexto clínico'}</span>
          </button>
        </div>

        {/* Collapsible Background & Need */}
        {showDetails && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#EDE6DC] text-xs sm:text-sm animate-fade-in font-serif">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD5] space-y-1">
              <strong className="text-[#1F1D1B] block font-sans font-medium text-xs">📖 Situación en que se encuentra:</strong>
              <p className="text-[#6B655F] leading-relaxed">{scenario.backgroundStory}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#EEF4EF] border border-[#CADACD] space-y-1">
              <strong className="text-[#597360] block font-sans font-medium text-xs">🎯 Lo que necesita por dentro:</strong>
              <p className="text-[#2F4A34] leading-relaxed">{scenario.internalNeed}</p>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Listening Chamber Zone */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-9 space-y-7 shadow-sm relative overflow-hidden">
        
        {/* Character's Statement */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A35C46] flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5" /> {scenario.name} te mira y te dice con la voz entrecortada:
            </span>
            <button
              onClick={() => speakPhrase(scenario.openingStatement)}
              className="text-xs text-[#6B655F] hover:text-[#A35C46] flex items-center gap-1.5 transition-colors font-mono"
              title="Escuchar audio"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Escuchar voz</span>
            </button>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1F1D1B] text-lg sm:text-xl font-editorial font-normal italic leading-relaxed shadow-2xs">
            "{scenario.openingStatement}"
          </div>

          <div className="text-xs text-[#6B655F] italic flex items-start gap-2 pl-2 font-serif">
            <span className="text-[#A35C46] not-italic font-sans font-medium">👀 Lenguaje corporal observado:</span>
            <span>{scenario.bodyLanguage}</span>
          </div>
        </div>

        {/* User response area */}
        <div className="space-y-4 pt-2 border-t border-[#EDE6DC]">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#597360] flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" /> Tu respuesta de consuelo y sostén:
            </label>
            <span className="text-xs text-[#9C948B] font-mono">
              {userResponse.split(/\s+/).filter(Boolean).length} palabras
            </span>
          </div>

          <textarea
            value={userResponse}
            onChange={(e) => setUserResponse(e.target.value)}
            placeholder={`Habla con tu voz más honesta. ¿Qué le dices a ${scenario.name}? Recuerda el modelo V.A.L.I.D.A. (visibilizar su dolor, no saltar a darle consejos rápidos ni frases hechas)...`}
            rows={4}
            className="w-full p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1F1D1B] placeholder-[#9C948B] focus:outline-none focus:border-[#A35C46] focus:ring-1 focus:ring-[#A35C46] transition-all text-base leading-relaxed font-serif"
          />

          {/* Quick Starter Pills */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#9C948B] block">
              Inicios compasivos sugeridos:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => handleInsertTemplate(`${scenario.name}, no tengo palabras mágicas para quitarte este dolor, pero aquí me tienes a tu lado...`)}
                className="px-3.5 py-1.5 rounded-full bg-[#F2ECE4] hover:bg-[#EAE4DB] text-[#6B655F] text-xs transition-colors border border-[#E6DFD5] font-serif"
              >
                + "No tengo palabras mágicas pero aquí me tienes..."
              </button>
              <button
                type="button"
                onClick={() => handleInsertTemplate(`Veo lo pesado que ha sido esto para ti. Tienes todo el derecho a estar devastado/a...`)}
                className="px-3.5 py-1.5 rounded-full bg-[#F2ECE4] hover:bg-[#EAE4DB] text-[#6B655F] text-xs transition-colors border border-[#E6DFD5] font-serif"
              >
                + "Tienes todo el derecho a sentirte así..."
              </button>
              <button
                type="button"
                onClick={() => handleInsertTemplate(`Tómate todo el tiempo que necesites; no tienes que fingir fuerza conmigo...`)}
                className="px-3.5 py-1.5 rounded-full bg-[#F2ECE4] hover:bg-[#EAE4DB] text-[#6B655F] text-xs transition-colors border border-[#E6DFD5] font-serif"
              >
                + "Tómate tu tiempo, no tienes que fingir fuerza..."
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={handleTestToxicCliché}
              className="text-xs text-[#B85C5C] hover:underline font-mono"
              title="Cargar un cliché para ver cómo la IA identifica el error"
            >
              ⚡ Probar respuesta cliché ("todo pasa por algo")
            </button>

            <button
              type="button"
              onClick={handleAnalyze}
              disabled={!userResponse.trim() || isAnalyzing}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] disabled:opacity-40 text-[#FAF7F2] font-bold text-xs tracking-wide shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-[#FAF7F2]" />
                  <span>Sintonizando evaluación con IA...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#FAF7F2]" />
                  <span>Analizar mi Respuesta con IA</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

      {/* Modal with Analysis Results */}
      {analysisResult && (
        <FeedbackModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          analysis={analysisResult}
          scenario={scenario}
          userResponse={userResponse}
          onRetry={() => {
            setUserResponse('');
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};
