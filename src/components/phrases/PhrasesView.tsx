import React, { useState } from 'react';
import { 
  Search, 
  Bookmark, 
  Copy, 
  Check, 
  Volume2, 
  Star, 
  Lightbulb, 
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Feather
} from 'lucide-react';
import { PHRASES_BANK, TACTICS_GUIDE } from '../../data/phrasesBank';
import { UserProgress } from '../../types';
import { speakPhrase } from '../../services/speechService';

interface PhrasesViewProps {
  userProgress: UserProgress;
  onToggleFavorite: (phraseId: string) => void;
}

export const PhrasesView: React.FC<PhrasesViewProps> = ({
  userProgress,
  onToggleFavorite
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [showTactics, setShowTactics] = useState<boolean>(true);

  const categories = [
    { id: 'todos', label: 'Todas las Frases' },
    { id: 'salvavidas', label: '🚨 Salvavidas (Mente en Blanco)' },
    { id: 'ruptura', label: '💔 Ruptura & Desamor' },
    { id: 'duelo', label: '🕊️ Duelo & Muerte' },
    { id: 'ansiedad', label: '🌪️ Ansiedad & Pánico' },
    { id: 'fracaso', label: '📉 Fracaso & Despido' },
    { id: 'rabia', label: '🔥 Rabia & Furia' },
    { id: 'vacio', label: '🕳️ Sensación de Vacío' },
    { id: 'favoritos', label: '⭐ Guardadas' }
  ];

  const handleCopy = (phrase: string, id: string) => {
    navigator.clipboard.writeText(phrase);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (phrase: string, id: string) => {
    setActiveAudioId(id);
    speakPhrase(phrase, () => setActiveAudioId(null));
  };

  const filteredPhrases = PHRASES_BANK.filter((item) => {
    if (selectedCategory === 'favoritos') {
      if (!userProgress.favoritePhrases.includes(item.id)) return false;
    } else if (selectedCategory !== 'todos' && item.category !== selectedCategory) {
      return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchPhrase = item.phrase.toLowerCase().includes(q);
      const matchSit = item.situation.toLowerCase().includes(q);
      const matchInt = item.intention.toLowerCase().includes(q);
      return matchPhrase || matchSit || matchInt;
    }

    return true;
  });

  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto py-2">
      {/* Hero Header */}
      <div className="rounded-3xl bg-gradient-to-br from-[#F5ECE5] via-[#FAF7F2] to-[#FAF7F2] border border-[#E8CFC6] p-7 sm:p-12 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#A35C46] border border-[#E8CFC6] text-xs font-semibold tracking-wide shadow-2xs font-mono">
            <Feather className="w-3.5 h-3.5" />
            <span>El Boticario de Palabras & Remedios del Alma</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-normal text-[#1F1D1B] font-editorial tracking-tight leading-[1.14]">
            Botiquín de Bolsillo: <br />
            <span className="italic font-serif text-[#A35C46]">
              Frases precisas para cada herida
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#6B655F] font-serif italic leading-relaxed max-w-2xl">
            Cuando la mente se nubla por la impresión, aquí tienes palabras templadas en la compasión humana. Escucha su ritmo pausado, aprende por qué los clichés comunes lastiman y guarda tus frases preferidas.
          </p>
        </div>
      </div>

      {/* Collapsible Tactics Guide */}
      <div className="bg-white border border-[#E6DFD5] rounded-3xl overflow-hidden shadow-sm">
        <button
          onClick={() => setShowTactics(!showTactics)}
          className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-[#FAF7F2] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F7ECE8] text-[#A35C46] flex items-center justify-center border border-[#E8CFC6]">
              <Lightbulb className="w-4 h-4 text-[#C28236]" />
            </div>
            <div>
              <h3 className="text-lg font-normal text-[#1F1D1B] font-editorial">
                Las Cuatro Tácticas Maestras de la Escucha
              </h3>
              <p className="text-xs text-[#6B655F]">Principios somáticos y comunicativos para aplicar en cualquier instante</p>
            </div>
          </div>
          {showTactics ? <ChevronUp className="w-5 h-5 text-[#9C948B]" /> : <ChevronDown className="w-5 h-5 text-[#9C948B]" />}
        </button>

        {showTactics && (
          <div className="p-6 sm:p-7 border-t border-[#EDE6DC] bg-[#FAF7F2] grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in">
            {TACTICS_GUIDE.map((tac) => (
              <div key={tac.id} className="p-5 rounded-2xl bg-white border border-[#E6DFD5] space-y-2.5 shadow-2xs">
                <span className="text-[11px] font-mono font-bold text-[#A35C46] uppercase tracking-wider block">
                  {tac.tagline}
                </span>
                <h4 className="text-base font-normal text-[#1F1D1B] font-editorial">{tac.name}</h4>
                <p className="text-xs sm:text-sm text-[#6B655F] font-serif leading-relaxed">
                  <strong className="text-[#1F1D1B] font-sans font-medium">Aplicación:</strong> {tac.howToApply}
                </p>
                <p className="text-xs text-[#597360] font-serif italic pt-2 border-t border-[#EDE6DC]">
                  ⚡ Fundamento: {tac.whyItWorks}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#9C948B]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por emoción o palabra clave (ej: 'llanto', 'culpa', 'pánico', 'silencio', 'infidelidad')..."
            className="w-full pl-11 pr-5 py-3 rounded-2xl bg-white border border-[#E6DFD5] text-sm text-[#1F1D1B] placeholder-[#9C948B] focus:outline-none focus:border-[#A35C46] focus:ring-1 focus:ring-[#A35C46] transition-colors font-serif shadow-2xs"
          />
        </div>

        {/* Categories Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#A35C46] text-[#FAF7F2] font-bold shadow-xs'
                  : 'bg-white text-[#6B655F] hover:text-[#1F1D1B] border border-[#E6DFD5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Phrases Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between text-xs text-[#9C948B] font-mono">
          <span>{filteredPhrases.length} fórmulas compasivas registradas</span>
        </div>

        {filteredPhrases.length === 0 ? (
          <div className="text-center py-16 bg-white border border-[#E6DFD5] rounded-3xl p-8 space-y-3">
            <Bookmark className="w-8 h-8 text-[#BDB5AA] mx-auto" />
            <h4 className="text-base font-medium text-[#1F1D1B] font-serif">No se encontraron frases</h4>
            <p className="text-xs text-[#6B655F]">
              Prueba con otra palabra clave o selecciona otra categoría.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPhrases.map((item) => {
              const isFav = userProgress.favoritePhrases.includes(item.id);
              const isCopied = copiedId === item.id;
              const isSpeaking = activeAudioId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E6DFD5] hover:border-[#A35C46]/60 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-2xs space-y-5 relative group transition-all duration-300"
                >
                  <div className="space-y-4">
                    {/* Top Row: Situation & Action icons */}
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-medium text-[#A35C46] bg-[#F7ECE8] px-3 py-1 rounded-full border border-[#E8CFC6]">
                        {item.situation}
                      </span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => onToggleFavorite(item.id)}
                          className={`p-2 rounded-xl transition-colors ${
                            isFav ? 'text-[#C28236] bg-[#FBF4EB]' : 'text-[#9C948B] hover:text-[#1F1D1B] bg-[#FAF7F2]'
                          }`}
                          title="Guardar en mis favoritas"
                        >
                          <Star className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                        </button>
                        <button
                          onClick={() => handleSpeak(item.phrase, item.id)}
                          disabled={isSpeaking}
                          className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE4] text-[#6B655F] hover:text-[#1F1D1B] transition-colors border border-[#E6DFD5]"
                          title="Escuchar entonación"
                        >
                          <Volume2 className={`w-4 h-4 ${isSpeaking ? 'text-[#A35C46] animate-spin' : ''}`} />
                        </button>
                        <button
                          onClick={() => handleCopy(item.phrase, item.id)}
                          className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE4] text-[#6B655F] hover:text-[#1F1D1B] transition-colors border border-[#E6DFD5]"
                          title="Copiar frase"
                        >
                          {isCopied ? <Check className="w-4 h-4 text-[#597360]" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Main Phrase Quote */}
                    <p className="text-lg sm:text-xl font-normal text-[#1F1D1B] font-editorial italic leading-relaxed pt-1">
                      "{item.phrase}"
                    </p>

                    {/* Intention and Tone Tip */}
                    <div className="space-y-2 pt-3 border-t border-[#EDE6DC] text-xs font-serif">
                      <p className="text-[#6B655F]">
                        <strong className="text-[#597360] font-mono uppercase tracking-wider text-[11px] font-bold block mb-0.5">Propósito Clínico:</strong>
                        {item.intention}
                      </p>
                      <p className="text-[#6B655F]">
                        <strong className="text-[#A35C46] font-mono uppercase tracking-wider text-[11px] font-bold block mb-0.5">Tono & Cadencia:</strong>
                        {item.toneTip}
                      </p>
                    </div>
                  </div>

                  {/* Forbidden cliché box */}
                  <div className="p-4 rounded-2xl bg-[#FBF0F0] border border-[#ECCECE] text-xs space-y-1.5 mt-2 font-serif">
                    <div className="flex items-center gap-1.5 text-[#B85C5C] font-bold uppercase tracking-wider text-[11px] font-mono">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#B85C5C]" />
                      <span>Evita decir: "{item.forbiddenAlternative}"</span>
                    </div>
                    <p className="text-[#6B2626] italic text-xs leading-relaxed">
                      Por qué daña: {item.whyAvoid}
                    </p>
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
