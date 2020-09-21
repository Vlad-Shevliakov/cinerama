import React from 'react'

interface TabContainerProps {
  value: number
  index: number
  children: React.ReactNode
}

const TabContainer: React.FC<TabContainerProps> = (props) => {
  const { index, value, children, ...restProps } = props
  if (value !== index) {
    return null
  }

  return (
    <div role="tabpanel" hidden={value !== index} {...restProps}>
      {children}
    </div>
  )
}

export default TabContainer
