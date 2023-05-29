import React from 'react'
import Item from './item'

function itemsList({ isLoading, contType, constent }) {
    return (
        <>
            {!isLoading ? <ul>
                {
                    constent.map(e => <Item value={JSON.stringify(e)} />)
                }
            </ul> : 'loading...'}
        </>
    )
}

export default itemsList