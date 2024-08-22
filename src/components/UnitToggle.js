import React from 'react';
import "../styles/UnitToggle.css";
function UnitToggle({ unit, toggleUnit }) {
    return (
        <div className="unit-toggle">
            <button onClick={toggleUnit}>
                {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
        </div>
    );
}

export default UnitToggle;
