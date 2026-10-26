export function speakPhrase(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser.');
    if (onEnd) onEnd();
    return;
  }

  window.speechSynthesis.cancel(); // Stop any ongoing speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'es-ES'; // Prefer Spanish
  utterance.rate = 0.85; // Slightly slower, calm cadence
  utterance.pitch = 0.95; // Slightly deeper, warmer tone

  // Try to find a good Spanish voice
  const voices = window.speechSynthesis.getVoices();
  const esVoice = voices.find((v) => v.lang.startsWith('es') || v.lang.startsWith('es-'));
  if (esVoice) {
    utterance.voice = esVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
