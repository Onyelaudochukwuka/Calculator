let one = document.getElementById('one');
one.addEventListener('click', (event) => {
     document.forms.display.value += 1;
})
let two = document.getElementById('two');
two.addEventListener('click', (event) => {
     document.forms.display.value += 2;
})
let three = document.getElementById('three');
three.addEventListener('click', (event) => {
     document.forms.display.value += 3;
})
let four = document.getElementById('four');
four.addEventListener('click', (event) => {
     document.forms.display.value += 4;
})
let five = document.getElementById('five');
five.addEventListener('click', (event) => {
     document.forms.display.value += 5;
})
let six = document.getElementById('six');
six.addEventListener('click', (event) => {
     document.forms.display.value += 6;
})
let seven = document.getElementById('seven');
seven.addEventListener('click', (event) => {
     document.forms.display.value += 7;
})
let eight = document.getElementById('eight');
eight.addEventListener('click', (event) => {
     document.forms.display.value += 8;
})
let nine = document.getElementById('nine');
nine.addEventListener('click', (event) => {
     document.forms.display.value += 9;
})
let zero = document.getElementById('zero');
zero.addEventListener('click', (event) => {
     document.forms.display.value += 0;
})
let dot = document.getElementById('dot');
dot.addEventListener('click', (event) => {
    document.forms.display.value += '.';
})
let slash = document.getElementById('divide');
slash.addEventListener('click', (event) => {
    document.forms.display.value += '/';
})
let reset = document.getElementById('reset');
reset.addEventListener('click', (event) => {
    document.forms.display.value = '';
})
let del = document.getElementById('del');
del.addEventListener('click', (event) => {
    var k = document.forms.display.value;
    let count = k.length;
    let rount = count - 1;
    let slice = k.slice(0,rount);
    document.forms.display.value = slice;
})
let plus = document.getElementById('plus');
plus.addEventListener('click', (event) => {
     document.forms.display.value += "+" ;
})
let times = document.getElementById('times');
times.addEventListener('click', (event) => {
     document.forms.display.value += "*" ;
})
let minus = document.getElementById('minus');
minus.addEventListener('click', (event) => {
     document.forms.display.value += "-" ;
})

let equal = document.getElementById('equal');
equal.addEventListener('click', (event) => {
    document.forms.display.value = eval(document.forms.display.value);
})
// functions
//changes the background on the click of the first toggle button
const classChanger1 = (a)=>{
    let z = a;
    z.classList.add('bac1');
    z.classList.remove('bac2');
    z.classList.remove('bac3');
    }
    //changes the background on the click of the second toggle button
    const classChanger2 =  (a)=>{
        let z = a;
        z.classList.remove('bac1');
        z.classList.add('bac2');
        z.classList.remove('bac3');
    }
    //changes the background on the click of the third toggle button
    const classChanger3 =  (a)=>{
        let z = a;
        z.classList.remove('bac1');
        z.classList.remove('bac2');
        z.classList.add('bac3');
    }
    //changes some of the buttons properties on the click of the first toggle button
const buttonChanger1 = (a)=>{
 let z = a;
 z.classList.add('button1');
 z.classList.remove('button2');
 z.classList.remove('button3');
    }
    //changes some of the buttons properties on the click of the second toggle button
const buttonChanger2 = (a)=>{
let z = a;
z.classList.remove('button1');
z.classList.add('button2');
z.classList.remove('button3');
    }
    //changes some ofthe buttons properties on the click of the three toggle button
const buttonChanger3 = (a)=>{
let z = a;
z.classList.remove('button1');
z.classList.remove('button2');
z.classList.add('button3');
    }
    //changes the top property of the document on the click of the first toggle button I.e the toggle div
    const topChanger1 = (a)=>{
        let z = a;
z.classList.add('top1');
z.classList.remove('top2');
z.classList.remove('top3');
    }
    //changes the top property of the document on the click of the second toggle button I.e the toggle div
    const topChanger2 = (a)=>{
        let z = a;
z.classList.remove('top1');
z.classList.add('top2');
z.classList.remove('top3');
    }
    //changes the top property of the document on the click of the third toggle button I.e the toggle div
    const topChanger3 = (a)=>{
        let z = a;
z.classList.remove('top1');
z.classList.remove('top2');
z.classList.add('top3');
    }
    //changes the screen property of the document on the click of the first toggle button I.e the screen div
    const screenChanger1 = (a)=>{
        let z = a;
z.classList.add('screen1');
z.classList.remove('screen2');
z.classList.remove('screen3');
    }
    //changes the screen property of the document on the click of the second toggle button I.e the screen div
    const screenChanger2 = (a)=>{
        let z = a;
z.classList.remove('screen1');
z.classList.add('screen2');
z.classList.remove('screen3');
    }
    //changes the screen property of the document on the click of the third toggle button I.e the screen div
    const screenChanger3 = (a)=>{
        let z = a;
z.classList.remove('screen1');
z.classList.remove('screen2');
z.classList.add('screen3');
    }
    //changes the key's background property of the document on the click of the first toggle button
    const keyBackgroundChanger1 = (a)=>{
        let z = a;
z.classList.add('keybac1');
z.classList.remove('keybac2');
z.classList.remove('keybac3');
    }
    //changes the key's background property of the document on the click of the second toggle button
    const keyBackgroundChanger2 = (a)=>{
        let z = a;
z.classList.remove('keybac1');
z.classList.add('keybac2');
z.classList.remove('keybac3');
    }
    //changes the key's background property of the document on the click of the third toggle button I.e the toggle div
    const keyBackgroundChanger3 = (a)=>{
        let z = a;
z.classList.remove('keybac1');
z.classList.remove('keybac2');
z.classList.add('keybac3');
    }
    //changes some of the buttons properties on the click of the first toggle button
    const buttonType1 = (a)=>{
        let z = a;
z.classList.add('buttontype1');
z.classList.remove('buttontype2');
z.classList.remove('buttontype3');
    }
    //changes some of the buttons properties on the click of the second toggle button
    const buttonType2 = (a)=>{
        let z = a;
z.classList.remove('buttontype1');
z.classList.add('buttontype2');
z.classList.remove('buttontype3');
    }
    //changes some of the buttons properties on the click of the third toggle button
    const buttonType3 = (a)=>{
        let z = a;
z.classList.remove('buttontype1');
z.classList.remove('buttontype2');
z.classList.add('buttontype3');
    }
    //changes some of the buttons properties on the click of the first toggle button
    const buttonEqual1 = (a)=>{
        let z = a;
z.classList.add('buttonequal1');
z.classList.remove('buttonequal2');
z.classList.remove('buttonequal3');
    }
    //changes some of the buttons properties on the click of the second toggle button
    const buttonEqual2 = (a)=>{
        let z = a;
z.classList.remove('buttonequal1');
z.classList.add('buttonequal2');
z.classList.remove('buttonequal3');
    }
    //changes some of the buttons properties on the click of the third toggle button
    const buttonEqual3 = (a)=>{
        let z = a;
z.classList.remove('buttonequal1');
z.classList.remove('buttonequal2');
z.classList.add('buttonequal3');
}
const footer1 = (a) => {
        let z = a;
z.classList.add('footer1');
z.classList.remove('footer2');
z.classList.remove('footer3');
}
const footer2 = (a) => {
        let z = a;
z.classList.remove('footer1');
z.classList.add('footer2');
z.classList.remove('footer3');
}
const footer3 = (a) => {
        let z = a;
z.classList.remove('footer1');
z.classList.remove('footer2');
z.classList.add('footer3');
    }
 let footer = document.getElementById('footer');
let theme1 = document.getElementById('a');
let theme2 = document.getElementById('b');
let theme3 = document.getElementById('c');
theme1.addEventListener('click',(event)=>{
    classChanger1(document.body);
    buttonChanger1(one);
    buttonChanger1(two);
    buttonChanger1(three);
    buttonChanger1(four);
    buttonChanger1(five);
    buttonChanger1(six);
    buttonChanger1(seven);
    buttonChanger1(eight);
    buttonChanger1(nine);
    buttonChanger1(zero);
    buttonChanger1(dot);
    buttonChanger1(slash);
    buttonChanger1(minus);
    buttonChanger1(plus);
    buttonChanger1(times);
    topChanger1(first);
    screenChanger1(second);
    keyBackgroundChanger1(third);
    keyBackgroundChanger1(svg);
    buttonType1(reset);
    buttonType1(del);
    buttonEqual1(float);
    buttonEqual1(equal);
    footer1(footer);
    float.style.float = "left";
})
theme2.addEventListener('click',(event)=>{
    classChanger2(document.body);
    buttonChanger2(one);
    buttonChanger2(two);
    buttonChanger2(three);
    buttonChanger2(four);
    buttonChanger2(five);
    buttonChanger2(six);
    buttonChanger2(seven);
    buttonChanger2(eight);
    buttonChanger2(nine);
    buttonChanger2(zero);
    buttonChanger2(dot);
    buttonChanger2(slash);
    buttonChanger2(minus);
    buttonChanger2(plus);
    buttonChanger2(times);
    topChanger2(first);
    screenChanger2(second);
    keyBackgroundChanger2(third);
    keyBackgroundChanger2(svg);
    buttonType2(reset);
    buttonType2(del);
    buttonEqual2(float);
    buttonEqual2(equal);
    footer2(footer);
    float.style.float = "none";
})
theme3.addEventListener('click',(event)=>{
    classChanger3(document.body);
    buttonChanger3(one);
    buttonChanger3(two);
    buttonChanger3(three);
    buttonChanger3(four);
    buttonChanger3(five);
    buttonChanger3(six);
    buttonChanger3(seven);
    buttonChanger3(eight);
    buttonChanger3(nine);
    buttonChanger3(zero);
    buttonChanger3(dot);
    buttonChanger3(slash);
    buttonChanger3(minus);
    buttonChanger3(plus);
    buttonChanger3(times);
    topChanger3(first);
    screenChanger3(second);
    keyBackgroundChanger3(third);
    keyBackgroundChanger3(svg);
    buttonType3(reset);
    buttonType3(del);
    buttonEqual3(float);
    buttonEqual3(equal);
    footer3(footer);
    float.style.float = "right";
})
