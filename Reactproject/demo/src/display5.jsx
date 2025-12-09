import { useState } from "react"

const Display5 = () => {
    const [data, setData] = useState(["one", "two"])
    const [count, setCount] = useState(10)

    const addItem = () => {
        const item = count
        setData(prev => [...prev, item])
        setCount(t => t + 1)
    }

    return (
        <>
            <h1>im from Disp5</h1>
            <button onClick={addItem}>add</button>
            <ul>
                {
                    data.map((d, i) => {
                        return (<li key={i}>{d}</li>)
                    })
                }
            </ul>
        </>
    )
}

export default Display5