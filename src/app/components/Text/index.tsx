import React from 'react'
import "./styles.css"

interface TextProps  extends React.HTMLAttributes<HTMLParagraphElement> {
    children?: React.ReactNode;
    className?: string;
    hover?: boolean;
}

function Text ({children, className, hover, ...rest}: TextProps) {

    return <p
        className={`text-[#fafafa] text-base
        ${hover && "hover:cursor-pointer hover:shadow-lg hover:scale-105 font-normal hover:transform transition-transform duration-300 ease-in-out"} 
        ${className}`}
        {...rest}
        >
        {children}
    </p>
}

export default Text