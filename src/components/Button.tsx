import React from 'react'

interface ButtonProps {
    onClick: () => void;
    label: String;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <div>
        <button onClick = {onClick}>
            {label}
        </button>
    </div>
  )
}

export default Button