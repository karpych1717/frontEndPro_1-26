function sum (x, y) {
    return x + y;
}

function sub (x, y) {
    return x - y;
}

function mul (x, y) {
    return x * y;
}

function div (x, y) {
    if (0 == y) {
        alert('O_o');
        return;
    } else {
        return x / y;
    }
}

const a = +prompt('Enter 1st operand:');
const b = +prompt('Enter 2nd operand:');

const op = prompt('Enter operator:');

switch (op) {
    case '+':
        alert( `${a} + ${b} = ${sum(a, b)};` );
        break;

    case '-':
        alert( `${a} - ${b} = ${sub(a, b)};` );
        break;

    case '*':
        alert( `${a} + ${b} = ${mul(a, b)};` );
        break;

    case '/':
        if (b != 0) {
            alert( `${a} / ${b} = ${sum(a, b)};` );
        } else {
            alert('division by zero is not allowed');
        }
        break;

    default:
        alert( `the '${op}' operator is unknown` );
}