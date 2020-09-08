import React from 'react'
import Credit from './Credit/Credit'

interface PanelProps {}

const Panel: React.FC<PanelProps> = () => {
  return (
    <section>
      <Credit />
    </section>
  )
}

export default Panel
