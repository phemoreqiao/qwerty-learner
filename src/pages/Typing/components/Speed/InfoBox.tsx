import React from 'react'

const InfoBox: React.FC<InfoBoxProps> = ({ info, description }) => {
  return (
    <div className="practice-stat">
      <span className="practice-stat-value">{info}</span>
      <span className="practice-stat-label">{description}</span>
    </div>
  )
}

export default React.memo(InfoBox)

export type InfoBoxProps = {
  info: string
  description: string
}
