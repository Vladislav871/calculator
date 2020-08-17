const value = document.querySelector('h1');

function summary(x) {
    return (y) => {
        return x+y;
    };
};

function differ(x) {
    return (y) => {
        return x-y;
    };
};

function div(x) {
    return (y) => {
        return x/y;
    };
};

function mul(x) {
    return (y) => {
        return x*y;
    };
};

let tmp = '';
let num = 0, num1 = 0;

let plus = false;
let minus = false;
let multiply = false;
let division = false;

const addOne = () => {
    tmp += 1;
    value.textContent = Number(tmp);
};

const addTwo = () => {
    tmp += 2;
    value.textContent = Number(tmp);
};

const addThree = () => {
    tmp += 3;
    value.textContent = Number(tmp);
};

const addFour = () => {
    tmp += 4;
    value.textContent = Number(tmp);
};

const addFive = () => {
    tmp += 5;
    value.textContent = Number(tmp);
};

const addSix = () => {
    tmp += 6;
    value.textContent = Number(tmp);
};

const addSvn = () => {
    tmp += 7;
    value.textContent = Number(tmp);
};

const addEight = () => {
    tmp += 8;
    value.textContent = Number(tmp);
};

const addNine = () => {
    tmp += 9;
    value.textContent = Number(tmp);
};

const addZero = () => {
    tmp += 0;
    value.textContent = Number(tmp);
};

const addC = () => {
    tmp = '';
    value.textContent = 0;
    plus = false;
    minus = false;
    division = false;
    multiply = false;
    num = 0;
    num1 = 0;
};

let funcPlus;
let funcMin;
let funcMul;
let funcDiv;

const addPlus = () => {
    num += Number(tmp);
    value.textContent = num;
    funcPlus = summary(num);
    tmp = '';
    plus = true;
    console.log(num);
};

const addMinus = () => {
    if(num != 0 && num > 0) {
        num -= Number(tmp);
    } else {
        num = Number(tmp);
    }
    value.textContent = num;
    funcMin = differ(num);
    tmp = '';
    minus = true;
    console.log(num);
};

const addX = () => {
    if(num != 0) {
        num *= Number(tmp);
    } else {
        num = Number(tmp);
    }
    value.textContent = num;
    funcMul = mul(num);
    tmp = '';
    multiply = true;
    console.log(num);
};

const addSlsh = () => {
    if(num != 0) {
        num /= Number(tmp);
    } else {
        num = Number(tmp);
    }
    value.textContent = num;
    funcDiv = div(num);
    tmp = '';
    division = true;
    console.log(num);
};

const equal = () => {
    if(plus) {
        num1 = Number(tmp);
        tmp = '';
        value.textContent = funcPlus(num1);
        plus = false;
    } else if(minus) {
        num1 = Number(tmp);
        tmp = '';
        value.textContent = funcMin(num1);
        minus = false;
    } else if(division) {
        num1 = Number(tmp);
        tmp = '';
        value.textContent = funcDiv(num1);
        division = false;
    } else {
        num1 = Number(tmp);
        tmp = '';
        value.textContent = funcMul(num1);
        multiply = false;
    }
};
