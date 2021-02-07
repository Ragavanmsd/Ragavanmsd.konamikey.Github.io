

const pressed=[];

const secretKey="ragavan"

window.addEventListener('keyup' , (e) =>{
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretKey.length -1, pressed.length - secretKey.length)

if (pressed.join('').includes(secretKey)){
    console.log('Master The Blaster');
    cornify_add();
}
console.log(pressed);

})