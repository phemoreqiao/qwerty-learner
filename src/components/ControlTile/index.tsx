import type { ReactNode } from 'react'

export default function ControlTile({ children, label, shortcut }: { children: ReactNode; label: string; shortcut?: string }) {
  return (
    <div className="control-tile">
      <div className="control-tile-trigger">{children}</div>
      <span className="control-tile-label">{label}</span>
      {shortcut && <kbd className="control-tile-shortcut">{shortcut}</kbd>}
    </div>
  )
}
