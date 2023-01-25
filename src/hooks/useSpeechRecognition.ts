import { useEffect, useState } from 'react'

export const useSpeechRecognition = () => {
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (SpeechRecognition) setRecognition(new SpeechRecognition())
  }, [])

  return {
    recognition
  }
}
