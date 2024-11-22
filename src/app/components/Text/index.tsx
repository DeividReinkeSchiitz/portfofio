import React from 'react'
import "./styles.css"

interface TextProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

function Text ({children, className, style}: TextProps) {
    return <p className={`text-[#fafafa] ${className}`} style={style}>
      {children}
  </p>
}

export default Text