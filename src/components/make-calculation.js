function MakeCalculation(calculation){
    let result = 0;
    switch(calculation.calculatorSign){
        case '+':
            result = parseFloat(calculation.numberOne) + parseFloat(calculation.numberTwo);
            break;
        case '-':
            result = calculation.numberOne - calculation.numberTwo;
            break;
        case '*':
            result = calculation.numberOne * calculation.numberTwo;
            break;
        case '/':
            result = calculation.numberOne / calculation.numberTwo;
            break;
        default:
            break;
    }
    return result;
}
export default MakeCalculation;