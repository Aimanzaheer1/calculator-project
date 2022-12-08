import './calculator-input.css';

function CalculatorInput(props){
    return(
        <input type="text" className='input' disabled value={props.InputValue}></input>
    );
}
export default CalculatorInput;