import React, { useState } from 'react'
import './Theme.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Theme() {

    let [status, setStatus] = useState(true)
    let [color, setColor] = useState(true)

    return (
        <>
            <button onClick={() => setStatus(false)} className='btn btn-danger m-2'>Hide</button>
            <button onClick={() => setStatus(true)} className='btn btn-success m-2'>Show</button>
            <button onClick={() => setStatus(!status)} className='btn btn-primary m-2'>Toggle</button>
            <h1 style={{ textAlign: "center" }}>Event Handler</h1>
            {status ?
                <div className='box' style={color ? { backgroundColor: "#03AFEE" } : { backgroundColor: "#0475A1" }}>
                    <button onClick={() => setColor(!color)} className='btn btn-dark m-2 border'>Change Theme</button>
                </div> : null}
        </>
    )
}

export default Theme