import { useState } from "react";
import CalculatorButton from "./calculator-button";
import CalculatorInput from "./calculator-input";
import MakeCalculation from "./make-calculation";
import './calculator.css';

function Calculator(){
    const [inputValue,setInputValue] = useState('');
    const [calculation,setCalculation] = useState({
        numberOne : 0,
        calculatorSign : '',
        numberTwo:0
    });
    function handleInputValue(e){
        if(inputValue === ''){
            if(e !== '+' && e !== '-' && e !== '*' && e !== '/' && e !== '=' && e !== 'C'){
                setInputValue(e);
                setCalculation(prevData => ({
                    numberOne : e,
                    calculatorSign : prevData.calculatorSign,
                    numberTwo : prevData.numberTwo
                }));
            }
        }
        else{
            if(e !== '+' && e !== '-' && e !== '*' && e !== '/' && e !== '=' && e !== 'C'){
                if(calculation.calculatorSign === '')
                {
                    setInputValue(inputValue+e);
                    if(calculation.numberOne === 0){
                        setCalculation(prevData => ({
                            numberOne : e,
                            calculatorSign : prevData.calculatorSign,
                            numberTwo : prevData.numberTwo
                        }));
                    }
                    else{
                        setCalculation(prevData => ({
                            numberOne : prevData.numberOne+e,
                            calculatorSign : prevData.calculatorSign,
                            numberTwo : prevData.numberTwo
                        }));
                    }
                }
                else{
                    setInputValue(inputValue+e);
                    if(calculation.numberTwo === 0){
                        setCalculation(prevData => ({
                            numberOne : prevData.numberOne,
                            calculatorSign : prevData.calculatorSign,
                            numberTwo : e
                        }));
                    }
                    else{
                        setCalculation(prevData => ({
                            numberOne : prevData.numberOne,
                            calculatorSign : prevData.calculatorSign,
                            numberTwo : prevData.numberTwo+e
                        }));
                    }
                }            
            }
            else if(e !== '=' && e !== 'C'){
                if(calculation.calculatorSign === '')
                {
                    setInputValue(inputValue+e);
                    setCalculation(prevData => ({
                        numberOne : prevData.numberOne,
                        calculatorSign : e,
                        numberTwo : prevData.numberTwo
                    }));
                }   
            }
            else if(e === '='){
                let result = MakeCalculation(calculation);
                setInputValue(result);
                setCalculation({
                    numberOne : 0,
                    calculatorSign : '',
                    numberTwo : 0
                });
            }
            else if(e === 'C'){
                setInputValue('');
                setCalculation({
                    numberOne : 0,
                    calculatorSign : '',
                    numberTwo : 0
                });
            }
        }
    }
    return(
        <> 
        <div className="main-calculator">
            <div>
                <CalculatorInput InputValue={inputValue}></CalculatorInput>
            </div>
            <div>
                <CalculatorButton className="btn" setValue={handleInputValue}>/</CalculatorButton>
                <CalculatorButton className="btn-lg" setValue={handleInputValue}>C</CalculatorButton>
            </div>
            <div>
                <CalculatorButton className="btn" setValue={handleInputValue}>7</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>8</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>9</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>*</CalculatorButton>
            </div>
            <div>
                <CalculatorButton className="btn" setValue={handleInputValue}>4</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>5</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>6</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>-</CalculatorButton>
            </div>
            <div>
                <CalculatorButton className="btn" setValue={handleInputValue}>1</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>2</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>3</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>+</CalculatorButton>
            </div>
            <div>
                <CalculatorButton className="btn" setValue={handleInputValue}>00</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>0</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>.</CalculatorButton>
                <CalculatorButton className="btn" setValue={handleInputValue}>=</CalculatorButton>
            </div>   
        </div>
        </>
    )
}
export default Calculator;