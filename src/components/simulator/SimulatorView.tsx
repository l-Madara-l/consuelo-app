import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  PlusCircle, 
  History, 
  CheckCircle2, 
  Feather
} from 'lucide-react';
import { SIMULATOR_SCENARIOS } from '../../data/simulatorScenarios';
import { Scenario, UserProgress, AIAnalysisResult } from '../../types';
import { ChatSimulator } from './ChatSimulator';

interface SimulatorViewProps {
  userProgress: UserProgress;
  onSimulationRecorded: (scenarioId: string, userResponse: string, analysis: AIAnalysisResult) => void;
}

export const SimulatorView: React.FC<SimulatorViewProps> = ({
  userProgress,
  onSimulationRecorded
}) => {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);

  // Custom scenario form state
  const [customName, setCustomName] = useState('');
  const [customRelation, setCustomRelation] = useState('');
  const [customStory, setCustomStory] = useState('');
  const [customOpening, setCustomOpening] = useState('');

  if (selectedScenario) {
    return (
      <ChatSimulator
        scenario={selectedScenario}
        onBack={() => setSelectedScenario(null)}
        apiKey={userProgress.geminiApiKey}
        selectedModel={userProgress.selectedModel}
        onSimulationRecorded={onSimulationRecorded}
      />
    );
  }

  const handleStartCustomScenario = () => {
    if (!customName.trim() || !customOpening.trim()) {
      alert('Por favor completa al menos el nombre y lo que la persona te dijo.');
      return;
    }

    const newScenario: Scenario = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      personAge: 30,
      relation: customRelation.trim() || 'Persona cercana',
      emotion: 'duelo',
      difficulty: 'Intermedio',
      title: 'Situación personalizada',
      backgroundStory: customStory.trim() || 'Situación de la vida real introducida por el usuario.',
      openingStatement: customOpening.trim(),
      bodyLanguage: 'Postura vulnerable y buscando comprensión sincera.',
      internalNeed: 'Necesita sentirse escuchada sin juicios ni consejos apresurados.',
      commonPitfalls: ['Dar consejos no pedidos', 'Usar frases hechas'],
      idealKeyPoints: ['Validar la emoción', 'Ofrecer presencia sincera']
    };

    setIsCustomModalOpen(false);
    setSelectedScenario(newScenario);
  };

  const getEmotionAura = (em: string) => {
    switch (em) {
      case 'ruptura': return { badge: 'bg-[#FBF0F0] text-[#B85C5C] border-[#ECCECE]', border: 'hover:border-[#B85C5C]/60', label: 'Desamor & Ruptura' };
      case 'duelo': return { badge: 'bg-[#F2ECE4] text-[#6B655F] border-[#E6DFD5]', border: 'hover:border-[#A35C46]/60', label: 'Duelo por Pérdida' };
      case 'ansiedad': return { badge: 'bg-[#FBF4EB] text-[#C28236] border-[#EDDDC7]', border: 'hover:border-[#C28236]/60', label: 'Pánico & Ansiedad' };
      case 'despido': return { badge: 'bg-[#F7ECE8] text-[#A35C46] border-[#E8CFC6]', border: 'hover:border-[#A35C46]/60', label: 'Injusticia & Fracaso' };
      case 'depresion': return { badge: 'bg-[#EEF4EF] text-[#597360] border-[#CADACD]', border: 'hover:border-[#597360]/60', label: 'Sensación de Vacío' };
      default: return { badge: 'bg-[#F2ECE4] text-[#6B655F] border-[#E6DFD5]', border: 'hover:border-[#A35C46]/60', label: 'Conflicto Emocional' };
    }
  };

  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto py-2">
      {/* Hero Sanctuary Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-[#EEF4EF] via-[#FAF7F2] to-[#FAF7F2] border border-[#CADACD] p-7 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#597360] border border-[#CADACD] text-xs font-semibold tracking-wide shadow-2xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Laboratorio Clínico de Empatía & Inteligencia Artificial</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-normal text-[#1F1D1B] font-editorial tracking-tight leading-[1.14]">
            El Círculo de Escucha: <br />
            <span className="italic font-serif text-[#597360]">
              Donde las palabras sanan o hieren
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B655F] font-serif italic leading-relaxed max-w-2xl">
            Elige a una persona en crisis. Escucha lo que te dice con la voz quebrada, escribe exactamente cómo responderías y permite que la IA evalúe la calidez, la ausencia de clichés y el impacto en su corazón.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsCustomModalOpen(true)}
              className="px-5 py-3 rounded-xl bg-white hover:bg-[#F2ECE4] text-[#1F1D1B] border border-[#E6DFD5] text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 shadow-2xs"
            >
              <PlusCircle className="w-4 h-4 text-[#A35C46]" />
              <span>Crear Caso con alguien de mi vida real</span>
            </button>
            <span className="text-xs text-[#9C948B] font-mono">
              +75 XP por cada simulación analizada
            </span>
          </div>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="space-y-6">
        <div className="flex items-end justify-between border-b border-[#E6DFD5] pb-3">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#597360] font-mono">
              Casos Prácticos
            </span>
            <h2 className="text-2xl font-normal text-[#1F1D1B] font-editorial mt-0.5">
              Personas que necesitan ser escuchadas hoy
            </h2>
          </div>
          <span className="text-xs text-[#9C948B] font-mono">
            5 Escenarios Reales
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SIMULATOR_SCENARIOS.map((scen) => {
            const hasPracticed = userProgress.simulationHistory.some(
              (h) => h.scenarioId === scen.id
            );
            const aura = getEmotionAura(scen.emotion);

            return (
              <div
                key={scen.id}
                onClick={() => setSelectedScenario(scen)}
                className={`group relative bg-white hover:bg-[#FAF7F2] border border-[#E6DFD5] ${aura.border} rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md overflow-hidden`}
              >
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] px-3 py-1 rounded-full font-semibold border ${aura.badge} font-mono`}>
                      {aura.label}
                    </span>
                    <span className="text-[11px] font-mono text-[#9C948B]">
                      {scen.difficulty}
                    </span>
                  </div>

                  {/* Character info */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2ECE4] border border-[#E6DFD5] flex items-center justify-center font-editorial text-xl font-normal text-[#1F1D1B] group-hover:scale-105 transition-transform">
                      {scen.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-[#1F1D1B] font-editorial group-hover:text-[#A35C46] transition-colors">
                        {scen.name} <span className="text-xs text-[#9C948B] font-sans font-light">({scen.personAge} años)</span>
                      </h3>
                      <p className="text-xs text-[#6B655F]">{scen.relation}</p>
                    </div>
                  </div>

                  {/* Title & snippet */}
                  <h4 className="text-sm font-semibold text-[#1F1D1B] mb-2 font-serif italic">
                    "{scen.title}"
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3F3C38] font-serif italic line-clamp-3 bg-[#FAF7F2] p-4 rounded-2xl border border-[#EDE6DC] leading-relaxed">
                    "{scen.openingStatement}"
                  </p>
                </div>

                {/* Footer status */}
                <div className="mt-5 pt-4 border-t border-[#EDE6DC] flex items-center justify-between text-xs font-mono">
                  {hasPracticed ? (
                    <span className="flex items-center gap-1.5 text-[#597360] font-medium text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ya practicado
                    </span>
                  ) : (
                    <span className="text-[#9C948B] text-[11px]">No ensayado</span>
                  )}

                  <span className="text-[#A35C46] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-sans">
                    <span>Acompañar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Past simulations history preview */}
      {userProgress.simulationHistory.length > 0 && (
        <div className="bg-white border border-[#E6DFD5] rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
          <h3 className="text-base font-normal text-[#1F1D1B] font-editorial flex items-center gap-2">
            <History className="w-4 h-4 text-[#A35C46]" /> Historial Reciente de Simulaciones Evaluadas
          </h3>
          <div className="divide-y divide-[#EDE6DC]">
            {userProgress.simulationHistory.slice(-3).reverse().map((sim) => {
              const matchedScen = SIMULATOR_SCENARIOS.find((s) => s.id === sim.scenarioId);
              return (
                <div key={sim.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-[#1F1D1B]">
                      Caso: {matchedScen?.name || 'Caso Personalizado'}
                    </span>
                    <p className="text-[#6B655F] font-serif italic mt-0.5 line-clamp-1">
                      "{sim.userResponse}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="px-3 py-1 rounded-full bg-[#F7ECE8] text-[#A35C46] font-mono font-bold">
                      {sim.analysis.score} / 100 pts
                    </span>
                    <span className="text-[#6B655F] hidden sm:inline">
                      {sim.analysis.levelTitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Custom Scenario Modal */}
      {isCustomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1F1D1B]/40 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full max-w-lg bg-white border border-[#E6DFD5] rounded-3xl shadow-xl p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="text-xl font-normal text-[#1F1D1B] font-editorial flex items-center gap-2">
                <PlusCircle className="w-5 h-5 text-[#A35C46]" />
                Crear Caso con Alguien Cercano
              </h3>
              <p className="text-xs text-[#6B655F] mt-1 font-serif">
                Escribe lo que un amigo o familiar te dijo para recibir retroalimentación psicológica de tu respuesta.
              </p>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <label className="text-[#1F1D1B] font-medium block mb-1">Nombre de la persona:</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  placeholder="Ej: Laura / Papá / Mi pareja"
                  className="w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1F1D1B] focus:outline-none focus:border-[#A35C46]"
                />
              </div>

              <div>
                <label className="text-[#1F1D1B] font-medium block mb-1">Vínculo contigo:</label>
                <input
                  type="text"
                  value={customRelation}
                  onChange={(e) => setCustomRelation(e.target.value)}
                  placeholder="Ej: Amiga de toda la vida / Hermano"
                  className="w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1F1D1B] focus:outline-none focus:border-[#A35C46]"
                />
              </div>

              <div>
                <label className="text-[#1F1D1B] font-medium block mb-1">¿Qué está atravesando?:</label>
                <textarea
                  value={customStory}
                  onChange={(e) => setCustomStory(e.target.value)}
                  placeholder="Ej: Perdió su trabajo y siente que decepcionó a su familia..."
                  rows={2}
                  className="w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1F1D1B] focus:outline-none focus:border-[#A35C46]"
                />
              </div>

              <div>
                <label className="text-[#1F1D1B] font-medium block mb-1">Lo que te dijo (o te diría):</label>
                <textarea
                  value={customOpening}
                  onChange={(e) => setCustomOpening(e.target.value)}
                  placeholder="Ej: 'No sé cómo salir de esta, siento que no valgo nada y todos están hartos de mí...'"
                  rows={3}
                  className="w-full p-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-[#1F1D1B] focus:outline-none focus:border-[#A35C46]"
                />
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsCustomModalOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-[#F2ECE4] hover:bg-[#EAE4DB] text-xs font-semibold text-[#6B655F]"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleStartCustomScenario}
                className="px-5 py-2.5 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] text-xs font-bold shadow-sm"
              >
                Comenzar Simulación
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
