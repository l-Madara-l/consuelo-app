import React, { useState } from 'react';
import { 
  X, 
  Key, 
  Cpu, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  Trash2,
  Sparkles
} from 'lucide-react';
import { UserProgress } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userProgress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  userProgress,
  onUpdateProgress,
  onResetProgress
}) => {
  const [apiKey, setApiKey] = useState(userProgress.geminiApiKey || '');
  const [model, setModel] = useState(userProgress.selectedModel || 'gemini-1.5-flash');
  const [testStatus, setTestStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle');
  const [testMessage, setTestMessage] = useState('');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdateProgress({
      ...userProgress,
      geminiApiKey: apiKey.trim(),
      selectedModel: model
    });
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const handleTestConnection = async () => {
    if (!apiKey.trim()) {
      setTestStatus('error');
      setTestMessage('Por favor ingresa primero una clave API de Google Gemini.');
      return;
    }

    setTestStatus('testing');
    setTestMessage('Probando conexión con Google Gemini...');

    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey.trim()}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Hola, responde sólo "OK".' }] }]
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      setTestStatus('success');
      setTestMessage('¡Conexión exitosa con Google Gemini! Tu IA generativa está lista.');
    } catch (err: unknown) {
      setTestStatus('error');
      const message = err instanceof Error ? err.message : String(err);
      setTestMessage(`Error al conectar: ${message}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#1F1D1B]/40 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-xl bg-white border border-[#E6DFD5] rounded-3xl shadow-xl flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-7 border-b border-[#E6DFD5] flex items-center justify-between bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#F7ECE8] border border-[#E8CFC6] flex items-center justify-center text-[#A35C46]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-normal text-[#1F1D1B] font-editorial">Configuración del Motor de IA</h2>
              <p className="text-xs text-[#6B655F] font-mono">Personaliza la profundidad del análisis psicológico</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#9C948B] hover:text-[#1F1D1B] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Engine Status Banner */}
          <div className={`p-5 rounded-2xl border ${
            apiKey.trim()
              ? 'bg-[#EEF4EF] border-[#CADACD] text-[#24422A]'
              : 'bg-[#FAF7F2] border-[#E6DFD5] text-[#3F3C38]'
          }`}>
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#A35C46]" />
              <div>
                <h4 className="text-sm font-semibold text-[#1F1D1B]">
                  {apiKey.trim() ? 'Motor Activo: Google Gemini Generativo' : 'Motor Activo: Analizador Clínico Heurístico Local'}
                </h4>
                <p className="text-xs text-[#6B655F] mt-1 leading-relaxed font-serif">
                  {apiKey.trim()
                    ? 'Tus respuestas serán evaluadas por el modelo Gemini con retroalimentación psicológica profunda y roleplay empático en tiempo real.'
                    : 'La app funciona de forma 100% autónoma y gratuita sin necesidad de clave API. Puedes agregar una clave gratuita de Google Gemini para llevar el análisis al nivel más avanzado.'}
                </p>
              </div>
            </div>
          </div>

          {/* API Key field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-[#1F1D1B] uppercase tracking-wider flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-[#A35C46]" /> Clave API de Google Gemini (Opcional)
              </label>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#A35C46] hover:underline flex items-center gap-1 font-mono"
              >
                <span>Obtener clave gratis</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <input
              type="password"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setTestStatus('idle');
              }}
              placeholder="AIzaSy..."
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-sm text-[#1F1D1B] placeholder-[#9C948B] focus:outline-none focus:border-[#A35C46] transition-colors font-mono"
            />
            <p className="text-[11px] text-[#9C948B] font-mono">
              Tu clave se guarda exclusivamente de forma local en tu navegador.
            </p>
          </div>

          {/* Model Selector */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold text-[#1F1D1B] uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#A35C46]" /> Modelo de Gemini
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E6DFD5] text-sm text-[#1F1D1B] focus:outline-none focus:border-[#A35C46] transition-colors"
            >
              <option value="gemini-1.5-flash">Gemini 1.5 Flash (Recomendado - Rápido y empático)</option>
              <option value="gemini-2.0-flash">Gemini 2.0 Flash (Última generación)</option>
              <option value="gemini-1.5-pro">Gemini 1.5 Pro (Máxima profundidad analítica)</option>
            </select>
          </div>

          {/* Connection Test */}
          {apiKey.trim() && (
            <div className="space-y-2.5">
              <button
                type="button"
                onClick={handleTestConnection}
                disabled={testStatus === 'testing'}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F2ECE4] hover:bg-[#EAE4DB] text-xs font-semibold text-[#1F1D1B] transition-colors border border-[#E6DFD5]"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${testStatus === 'testing' ? 'animate-spin' : ''}`} />
                <span>Probar conexión con Gemini</span>
              </button>

              {testStatus === 'success' && (
                <div className="flex items-center gap-2 text-xs text-[#597360] bg-[#EEF4EF] p-3 rounded-xl border border-[#CADACD]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>{testMessage}</span>
                </div>
              )}

              {testStatus === 'error' && (
                <div className="flex items-center gap-2 text-xs text-[#B85C5C] bg-[#FBF0F0] p-3 rounded-xl border border-[#ECCECE]">
                  <AlertCircle className="w-4 h-4 flex-shrink-0 text-[#B85C5C]" />
                  <span>{testMessage}</span>
                </div>
              )}
            </div>
          )}

          {/* Danger zone: Reset progress */}
          <div className="pt-4 border-t border-[#EDE6DC]">
            <h4 className="text-xs font-mono font-bold text-[#9C948B] uppercase tracking-wider mb-2">
              Gestión de Datos
            </h4>
            <button
              onClick={() => {
                if (window.confirm('¿Deseas reiniciar tu progreso y puntos XP?')) {
                  onResetProgress();
                  onClose();
                }
              }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FBF0F0] text-[#B85C5C] border border-[#ECCECE] hover:bg-[#F8E3E3] text-xs font-medium transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5 text-[#B85C5C]" />
              <span>Reiniciar Progreso de Aprendizaje</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-[#E6DFD5] bg-[#FAF7F2] flex items-center justify-between">
          <span className="text-xs text-[#597360] font-mono">
            {savedNotice ? '✓ Configuración guardada' : ''}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white hover:bg-[#F2ECE4] text-xs font-semibold text-[#6B655F] transition-colors border border-[#E6DFD5]"
            >
              Cerrar
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-[#A35C46] hover:bg-[#8F4E3A] text-[#FAF7F2] text-xs font-bold shadow-sm transition-all"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
