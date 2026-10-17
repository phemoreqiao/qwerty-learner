import Footer from './Footer'
import type React from 'react'

export default function Layout({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <main className={`flex h-screen w-full flex-col items-center pb-4 ${className}`}>
      {children}
      <Footer />
    </main>
  )
}
