console.log(document.body);

const div1 = document.getElementById('div1');
console.log(div1);

div1.style.border = '1px solid black';
// div1.classList.add('class-for-css');



const pDiv1 = document.querySelectorAll('#div1 > p');

for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = `
        <span>New text ${i + 1}</span>
    `;
    // pDiv1[i].textContent = `
    //     <span>New text ${i + 1}</span>
    // `;  
}

const newP = document.createElement('p');
// newP.textContent = 'Данный элемент был создан в js';
newP.innerHTML = 'Данный элемент был создан в js';
div1.appendChild(newP);


// HOMEWORK

/* TODO
        BASED LEVEL: написать функцию move(), которая отобразит передвижение маленького квадрата по диагонали
        вниз и остановится в правом нижнем углу

        ADVANCED LEVEL: отобразить передвижение маленького квадрата по диагонали вниз и обратно
        без остановки (челночный бег)
*/


// Это единственный новый инструмент, который понадобится в решении, поэтому он здесь уже написан.
// Здесь сказано, что функция move будет запускаться каждые 20 миллисекунд до тех пор, пока не будет
// запущена команда clearInterval(t);
const t = setInterval(move, 20);
const box = document.getElementById('box');

let pos = 0;
let flag = true;
let direction = 1;

// console.log(!!direction); 2 восклицательных знака переводят значение переменной в boolean эквивалент 


function move() {
    pos += direction;
    if (pos === 0 || pos === 150) {
        direction *= -1; // direction = direction * (-1)         direction = -direction
    }
    const value = `${pos}px`;
    box.style.top = value;
    box.style.left = value;
}

// Advanced level 1 (boolean)

// function move() {
//     // if (flag) {
//     //     pos++;
//     // } else {
//     //     pos--;
//     // }

//     flag ? pos++ : pos--;

//     // if (pos === 150) {
//     //     flag = false;
//     // }
//     // if (pos === 0) {
//     //     flag = true;
//     // }

//     if (pos === 0 || pos === 150) {
//         flag = !flag; // один восклицательный знак переводит переменную в противоположное значение в boolean эквиваленте
//     }

//     box.style.top = `${pos}px`;
//     box.style.left = `${pos}px`;
// }


// Базовый вариант

// function move() {
//     // TODO
//     pos += 1; // pos = pos + 1      pos++     ++pos

//     box.style.top = `${pos}px`;
//     box.style.left = `${pos}px`;

//     if (pos === 150) {
//         clearInterval(t);
//     }
// }
