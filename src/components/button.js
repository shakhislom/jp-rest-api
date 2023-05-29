import React from 'react'

function Button({ btnText, setContType }) {
    return (
        <button onClick={() => setContType(btnText)}>{btnText}</button>
    )
}

export default Button