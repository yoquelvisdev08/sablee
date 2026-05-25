import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

const STORAGE_KEY = 'sablee-cta-modal-dismissed'
const AUTO_OPEN_DELAY_MS = 2800

type CtaModalContextType = {
  isOpen: boolean
  openCtaModal: () => void
  closeCtaModal: (persistDismiss?: boolean) => void
}

const CtaModalContext = createContext<CtaModalContextType | null>(null)

export function CtaModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openCtaModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeCtaModal = useCallback((persistDismiss = false) => {
    if (persistDismiss) {
      sessionStorage.setItem(STORAGE_KEY, '1')
    }
    setIsOpen(false)
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return

    const timer = window.setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <CtaModalContext.Provider value={{ isOpen, openCtaModal, closeCtaModal }}>
      {children}
    </CtaModalContext.Provider>
  )
}

export function useCtaModal() {
  const ctx = useContext(CtaModalContext)
  if (!ctx) throw new Error('useCtaModal must be used within CtaModalProvider')
  return ctx
}
