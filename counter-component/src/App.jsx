import {useState} from 'react'
import "./App.css"

function App() {
    const [count, setCount] = useState(0)
    const handleCounter = (cal => {
        if (cal === "-") {
            if (count === 0) {
                return;
            }
            setCount(prevState => prevState - 1);
        } else if (cal === "+") {
            if (count === 10) {
                return;
            }
            setCount(prevState => prevState + 1);
        }
    })

    return (
        <>
            <div className={"block-counter"}>
                <button onClick={() => handleCounter("-")}>-</button>
                <p>{count}</p>
                <button onClick={() => handleCounter("+")}>+</button>
            </div>
            {count === 10 && <p>Maximum reached!</p>}
        </>
    )
}

export default App;
