import React from 'react'
import Button from './button'

function Header({ setContType }) {
    return (
        <header>
            <Button btnText='users' setContType={setContType} />
            <Button btnText='comments' setContType={setContType} />
            <Button btnText='posts' setContType={setContType} />
        </header>
    )
}

export default Header