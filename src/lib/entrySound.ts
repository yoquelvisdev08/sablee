import { ENTRY_SOUND_URL } from '../constants/media'

const ENTRY_VOLUME = 0.55

let audio: HTMLAudioElement | null = null
let gestureListenersAttached = false
let lastPlaybackAt = 0

function prefersReducedExperience(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio(ENTRY_SOUND_URL)
    audio.preload = 'auto'
    audio.volume = ENTRY_VOLUME
  }
  return audio
}

export function preloadEntrySound(): void {
  if (typeof window === 'undefined' || prefersReducedExperience()) return
  getAudio().load()
}

function removeGestureListeners(): void {
  if (!gestureListenersAttached) return
  document.removeEventListener('pointerdown', playOnGesture)
  document.removeEventListener('keydown', playOnGesture)
  gestureListenersAttached = false
}

function playOnGesture(): void {
  void startEntrySoundPlayback().then((played) => {
    if (played) removeGestureListeners()
  })
}

function attachGestureFallback(): void {
  if (gestureListenersAttached) return
  gestureListenersAttached = true
  document.addEventListener('pointerdown', playOnGesture)
  document.addEventListener('keydown', playOnGesture)
}

async function startEntrySoundPlayback(): Promise<boolean> {
  if (prefersReducedExperience()) return false

  const clip = getAudio()
  clip.currentTime = 0

  const attemptPlay = () => clip.play()

  try {
    if (clip.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      await attemptPlay()
      return true
    }

    await new Promise<void>((resolve, reject) => {
      const onReady = () => {
        clip.removeEventListener('canplaythrough', onReady)
        clip.removeEventListener('error', onError)
        resolve()
      }
      const onError = () => {
        clip.removeEventListener('canplaythrough', onReady)
        clip.removeEventListener('error', onError)
        reject(new Error('entry sound failed to load'))
      }
      clip.addEventListener('canplaythrough', onReady, { once: true })
      clip.addEventListener('error', onError, { once: true })
      clip.load()
    })

    await attemptPlay()
    return true
  } catch {
    return false
  }
}

/** Sincronizado con el arranque visual del hero (líneas de velocidad). */
export function playHeroEntrySound(): () => void {
  if (prefersReducedExperience()) return () => undefined

  const now = performance.now()
  if (now - lastPlaybackAt < 400) return () => undefined
  lastPlaybackAt = now

  let cancelled = false

  const run = () => {
    if (cancelled) return
    void startEntrySoundPlayback().then((played) => {
      if (!played && !cancelled) attachGestureFallback()
    })
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(run)
  })

  return () => {
    cancelled = true
    removeGestureListeners()
  }
}
