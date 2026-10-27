import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { SOSModal } from './components/SOSModal';
import { SettingsModal } from './components/SettingsModal';
import { CourseView } from './components/course/CourseView';
import { SimulatorView } from './components/simulator/SimulatorView';
import { PhrasesView } from './components/phrases/PhrasesView';
import { ProgressDashboard } from './components/progress/ProgressDashboard';
import { UserProgress, AIAnalysisResult } from './types';
import { loadUserProgress, saveUserProgress, DEFAULT_PROGRESS } from './services/storage';

export function App() {
  const [activeTab, setActiveTab] = useState<'course' | 'simulator' | 'phrases' | 'progress'>('course');
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress());
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync to localStorage on update
  useEffect(() => {
    saveUserProgress(userProgress);
  }, [userProgress]);

  const handleCompleteLesson = (lessonId: string) => {
    if (userProgress.completedLessons.includes(lessonId)) return;
    setUserProgress((prev) => ({
      ...prev,
      xp: prev.xp + 50,
      completedLessons: [...prev.completedLessons, lessonId]
    }));
  };

  const handlePassQuiz = (moduleId: string, scorePercent: number) => {
    setUserProgress((prev) => ({
      ...prev,
      xp: prev.xp + 100,
      completedQuizzes: {
        ...prev.completedQuizzes,
        [moduleId]: scorePercent
      }
    }));
  };

  const handleSimulationRecorded = (
    scenarioId: string,
    userResponse: string,
    analysis: AIAnalysisResult
  ) => {
    const newRecord = {
      id: `sim-${Date.now()}`,
      scenarioId,
      userResponse,
      analysis,
      timestamp: new Date().toISOString()
    };

    setUserProgress((prev) => ({
      ...prev,
      xp: prev.xp + 75,
      simulationHistory: [...prev.simulationHistory, newRecord]
    }));
  };

  const handleToggleFavorite = (phraseId: string) => {
    setUserProgress((prev) => {
      const exists = prev.favoritePhrases.includes(phraseId);
      const updated = exists
        ? prev.favoritePhrases.filter((id) => id !== phraseId)
        : [...prev.favoritePhrases, phraseId];
      return { ...prev, favoritePhrases: updated };
    });
  };

  const handleUpdateProgress = (updated: UserProgress) => {
    setUserProgress(updated);
  };

  const handleResetProgress = () => {
    setUserProgress(DEFAULT_PROGRESS);
    saveUserProgress(DEFAULT_PROGRESS);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1A18] flex flex-col font-sans selection:bg-[#F0ECE4] selection:text-[#9E5A44]">
      {/* Minimal Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSOS={() => setIsSOSOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
        userProgress={userProgress}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {activeTab === 'course' && (
          <CourseView
            userProgress={userProgress}
            onCompleteLesson={handleCompleteLesson}
            onPassQuiz={handlePassQuiz}
            onGoToSimulator={() => setActiveTab('simulator')}
          />
        )}

        {activeTab === 'simulator' && (
          <SimulatorView
            userProgress={userProgress}
            onSimulationRecorded={handleSimulationRecorded}
          />
        )}

        {activeTab === 'phrases' && (
          <PhrasesView
            userProgress={userProgress}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressDashboard
            userProgress={userProgress}
            onGoToCourse={() => setActiveTab('course')}
            onGoToSimulator={() => setActiveTab('simulator')}
          />
        )}
      </main>

      {/* Literary Artisan Footer with aftMadara Ownership Seal */}
      <footer className="border-t border-[#E6DFD5] bg-[#FAF7F2] py-12 px-4 text-center text-xs text-[#6B655F] space-y-3">
        <p className="font-editorial italic text-base text-[#1F1D1B] max-w-md mx-auto">
          "Consolar no es tener las respuestas perfectas, sino el coraje sagrado de no huir del dolor ajeno."
        </p>
        
        {/* Artisan Ownership Stamp */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="h-px w-8 sm:w-16 bg-[#E6DFD5]" />
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2ECE4] border border-[#E6DFD5] text-[#1F1D1B] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#A35C46] animate-pulse" />
            <span className="text-xs font-mono tracking-wider font-semibold">
              Propiedad & Autoría: <span className="text-[#A35C46] font-bold">aftMadara</span>
            </span>
          </div>
          <div className="h-px w-8 sm:w-16 bg-[#E6DFD5]" />
        </div>

        <p className="font-mono text-[11px] text-[#7A7269]">
          Consuelo & Presencia • Obra y concepción intelectual por <span className="font-bold text-[#1F1D1B]">aftMadara</span> • Todos los derechos reservados
        </p>
      </footer>

      {/* Floating SOS button on mobile */}
      <button
        onClick={() => setIsSOSOpen(true)}
        className="md:hidden fixed bottom-5 right-5 z-40 px-4 py-2.5 rounded-full bg-[#1C1A18] text-[#FBF9F5] shadow-lg text-xs font-medium tracking-wide flex items-center gap-1.5 active:scale-95 transition-transform"
        title="Modo SOS Rápido"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#9E5A44] animate-pulse" />
        <span>SOS</span>
      </button>

      {/* Modals */}
      <SOSModal
        isOpen={isSOSOpen}
        onClose={() => setIsSOSOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        userProgress={userProgress}
        onUpdateProgress={handleUpdateProgress}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
}

export default App;
