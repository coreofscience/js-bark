import React, { useState } from 'react'
import "./Counter.css"

/** Start of the counter */
export interface Props {
    /** where to start the counter */
    start: number
    /** min value */
    min?: number
    /** max value */
    max?: number
}

/**
 * This is a simple counter object.
 */
const Counter = ({start, min, max}: Props) => {
    const [count, setCounter] = useState(start);
    return (
        <div className="counter">
            <button onClick={() => setCounter(count - 1)} disabled={!!min && count <= min}>-</button>
            <span>{count}</span>
            <button onClick={() => setCounter(count + 1)} disabled={!!max && count >= max}>+</button>
        </div>
    )
}

Counter.defaultProps = {
    start: 0
}

export default Counter;