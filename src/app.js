import { useState, useEffect, useRef } from 'react'
import Header from './components/header'
import ItemsList from './components/itemsList'
function App() {
    const MY_API = 'https://jsonplaceholder.typicode.com/'
    const [contType, setContType] = useState('posts')
    const [constent, setContent] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const request = async () => {
            try {
                setIsLoading(true)
                const respons = await fetch(`${MY_API}${contType}`)
                const items = await respons.json()
                setContent(items.slice(0, 10))
            } catch (e) {
                console.log(e);
            } finally {
                setIsLoading(false)
            }
        }
        request()
    }, [contType])
    return (
        <div className='app'>
            <Header setContType={setContType} />
            <ItemsList isLoading={isLoading} contType={contType} constent={constent} />
        </div>
    )
}

export default App