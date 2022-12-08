import * as React from 'react';
import './calculator-button.css';

function CalculatorButton({children,setValue,className}){
    return <button className={className} value={children} onClick={(e) => setValue(e.target.value)}>{children}</button>
}
export default CalculatorButton;