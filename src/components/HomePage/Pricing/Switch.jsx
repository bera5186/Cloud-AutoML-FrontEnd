import React from 'react'

// css
import './switch.css'

const Switch = ({title, handleToggle}) => {
    return (
        <div className="switch-wrapper"> 
            <input
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                    onChange={handleToggle}
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
        </div>
    )
}

export default Switch
