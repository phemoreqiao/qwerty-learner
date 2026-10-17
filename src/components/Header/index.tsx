import logo from '@/assets/logo.svg'
import type { PropsWithChildren } from 'react'
import type React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC<PropsWithChildren<{ layout?: 'default' | 'practice' }>> = ({ children, layout = 'default' }) => {
  const isPractice = layout === 'practice'
  return (
    <header className={isPractice ? 'practice-sidebar' : 'container z-20 mx-auto w-full px-10 py-6'}>
      <div
        className={
          isPractice ? 'practice-sidebar-inner' : 'flex w-full flex-col items-center justify-between space-y-3 lg:flex-row lg:space-y-0'
        }
      >
        <NavLink
          className={
            isPractice
              ? 'practice-brand'
              : 'flex items-center text-2xl font-bold text-brand-500 no-underline hover:no-underline lg:text-4xl'
          }
          to="/"
        >
          <img src={logo} className="mr-3 h-16 w-20 shrink-0" alt="键盘简笔画标志" />
          <h1>英语单词速练速记</h1>
        </NavLink>
        <nav
          aria-label={isPractice ? '练习控制台' : undefined}
          className={
            isPractice
              ? 'practice-control-panel'
              : 'my-card on element flex w-auto content-center items-center justify-end space-x-3 rounded-xl bg-white p-4 transition-colors duration-300 dark:bg-gray-800'
          }
        >
          {children}
        </nav>
      </div>
    </header>
  )
}

export default Header
