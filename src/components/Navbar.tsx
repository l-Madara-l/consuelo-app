import React, { useState, useEffect } from 'react';
import { 
  HeartHandshake, 
  BookOpen, 
  Sparkles, 
  Bookmark, 
  Award, 
  Settings,
  Flame,
  ShieldAlert
} from 'lucide-react';
import { UserProgress } from '../types';
import { getUserLevelInfo } from '../services/storage';

interface NavbarProps {
  activeTab: 'course' | 'simulator' | 'phrases' | 'progress';
  setActiveTab: (tab: 'course' | 'simulator' | 'phrases' | 'progress') => void;
  onOpenSOS: () => void;
  onOpenSettings: () => void;
  userProgress: UserProgress;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSOS,
  onOpenSettings,
  userProgress
}) => {
  const levelInfo = getUserLevelInfo(userProgress.xp);

  // Somatic cycle: Inhala (4s), Sostén (4s), Exhala (6s)
  const [breathePhase, setBreathePhase] = useState<'Inhala' | 'Sostén' | 'Exhala'>('Inhala');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setBreathePhase('Inhala');
      timeoutId = setTimeout(() => {
        setBreathePhase('Sostén');
        timeoutId = setTimeout(() => {
          setBreathePhase('Exhala');
          timeoutId = setTimeout(cycle, 6000);
        }, 4000);
      }, 4000);
    };

    cycle();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E6DFD5] bg-[#FAF7F2]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          
          {/* Logo & Literary Brand */}
          <div 
            onClick={() => setActiveTab('course')}
            className="flex items-center space-x-3.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#F7ECE8] border border-[#E8CFC6] flex items-center justify-center text-[#A35C46] shadow-sm group-hover:scale-105 transition-transform duration-300">
              <HeartHandshake className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-normal tracking-tight text-[#1F1D1B] font-editorial flex items-center gap-1">
                  Consuelo<span className="text-[#A35C46] italic font-serif">&</span>Presencia
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-[#F2ECE4] border border-[#E6DFD5] text-[#A35C46] font-mono font-semibold tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A35C46]" />
                  aftMadara
                </span>
              </div>
              <p className="text-[11px] text-[#6B655F] tracking-wider uppercase font-medium">
                El Arte de Sostener y Escuchar <span className="sm:hidden text-[#A35C46] font-mono font-bold">• aftMadara</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-[#F2ECE4] px-2 py-1.5 rounded-2xl border border-[#E6DFD5]">
            <button
              onClick={() => setActiveTab('course')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'course'
                  ? 'bg-[#A35C46] text-[#FAF7F2] shadow-sm font-bold'
                  : 'text-[#6B655F] hover:text-[#1F1D1B] hover:bg-[#FAF7F2]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curso de Escucha</span>
            </button>

            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all relative ${
                activeTab === 'simulator'
                  ? 'bg-[#A35C46] text-[#FAF7F2] shadow-sm font-bold'
                  : 'text-[#6B655F] hover:text-[#1F1D1B] hover:bg-[#FAF7F2]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulador con IA</span>
              <span className="ml-0.5 px-1.5 py-0.2 bg-[#EEF4EF] text-[#597360] border border-[#CADACD] text-[9px] font-black rounded-full uppercase">
                En vivo
              </span>
            </button>

            <button
              onClick={() => setActiveTab('phrases')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'phrases'
                  ? 'bg-[#A35C46] text-[#FAF7F2] shadow-sm font-bold'
                  : 'text-[#6B655F] hover:text-[#1F1D1B] hover:bg-[#FAF7F2]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Botiquín de Frases</span>
            </button>

            <button
              onClick={() => setActiveTab('progress')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeTab === 'progress'
                  ? 'bg-[#A35C46] text-[#FAF7F2] shadow-sm font-bold'
                  : 'text-[#6B655F] hover:text-[#1F1D1B] hover:bg-[#FAF7F2]'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Progreso</span>
            </button>
          </nav>

          {/* Right Area: Breathing Pacer + Level + SOS + Settings */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Interactive Breathing Pacer (Corregulación Somática) */}
            <div 
              className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EEF4EF] border border-[#CADACD] text-xs text-[#597360]"
              title="Ancla de respiración (Inhala 4s, Sostén 4s, Exhala 6s) para regular tu sistema nervioso"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#597360] animate-breathe flex-shrink-0" />
              <span className="text-[11px] font-mono font-medium">
                Ancla: <strong className="text-[#1F1D1B]">{breathePhase}</strong>
              </span>
            </div>

            {/* Level & XP Pill */}
            <div 
              onClick={() => setActiveTab('progress')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F2ECE4] border border-[#E6DFD5] text-xs text-[#6B655F] cursor-pointer hover:border-[#A35C46] transition-colors"
              title={`Nivel ${levelInfo.levelNumber}: ${levelInfo.levelName}`}
            >
              <Flame className="w-3.5 h-3.5 text-[#C28236]" />
              <span className="font-semibold text-[#1F1D1B]">Nv. {levelInfo.levelNumber}</span>
              <span className="text-[#BDB5AA]">·</span>
              <span className="text-[#A35C46] font-mono font-medium">{userProgress.xp} XP</span>
            </div>

            {/* SOS Emergency Button */}
            <button
              onClick={onOpenSOS}
              className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-[#FBF0F0] text-[#B85C5C] border border-[#ECCECE] hover:bg-[#F8E3E3] text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
            >
              <ShieldAlert className="w-4 h-4 text-[#B85C5C] animate-pulse" />
              <span className="tracking-wide">SOS Rápido</span>
            </button>

            {/* Settings Button */}
            <button
              onClick={onOpenSettings}
              className="p-2 sm:p-2.5 rounded-xl bg-[#F2ECE4] border border-[#E6DFD5] text-[#6B655F] hover:text-[#1F1D1B] hover:border-[#A35C46] transition-colors"
              title="Ajustes de IA y personalización"
            >
              <Settings className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="flex md:hidden overflow-x-auto py-2.5 border-t border-[#E6DFD5] gap-2 no-scrollbar">
          <button
            onClick={() => setActiveTab('course')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'course'
                ? 'bg-[#A35C46] text-[#FAF7F2] font-bold'
                : 'text-[#6B655F] bg-[#F2ECE4]'
            }`}
          >
            <BookOpen className="w-3 h-3" />
            <span>Curso</span>
          </button>
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'simulator'
                ? 'bg-[#A35C46] text-[#FAF7F2] font-bold'
                : 'text-[#6B655F] bg-[#F2ECE4]'
            }`}
          >
            <Sparkles className="w-3 h-3" />
            <span>Simulador IA</span>
          </button>
          <button
            onClick={() => setActiveTab('phrases')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'phrases'
                ? 'bg-[#A35C46] text-[#FAF7F2] font-bold'
                : 'text-[#6B655F] bg-[#F2ECE4]'
            }`}
          >
            <Bookmark className="w-3 h-3" />
            <span>Frases</span>
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'progress'
                ? 'bg-[#A35C46] text-[#FAF7F2] font-bold'
                : 'text-[#6B655F] bg-[#F2ECE4]'
            }`}
          >
            <Award className="w-3 h-3" />
            <span>{userProgress.xp} XP</span>
          </button>
        </div>

      </div>
    </header>
  );
};
