let btn = document.getElementById('btn');
let output = document.getElementById('output');
let reload = document.getElementById('btn2');
let w = document.getElementById('w');
document.body.style.background= 'url(bg.jpg)'
document.body.style.fontFamily= 'Cursive';

const random = Math.floor(Math.random()*10)+1;
console.log(random);
function checkguess() {
    let myinp = document.getElementById('myinp').value;

    if (myinp == random) {
        document.getElementById('output').style.background='url(W31b.gif) no-repeat center';
        document.getElementById('output').style.backgroundSize='120px';
        document.getElementById('output').innerHTML = `Congratulations! <br> You Win!`;
        document.getElementById('output').value = '';
        output.style.color = 'rgb(239, 174, 10)';
        document.getElementById('w').value = '';
        document.getElementById('w').innerHTML = '';
    }

     else if(myinp  == ""){
        document.getElementById('output').innerHTML = 'Enter a number!';
        document.getElementById('output').value = '';
        output.style.color = 'whitesmoke';
        document.getElementById('output').style.background='none'
    }
    
    else if(isNaN(myinp)){
        document.getElementById('output').innerHTML = 'This is not a number!';
        document.getElementById('output').value = '';
        output.style.color = 'red';
        document.getElementById('output').style.background='none'
    }

     else if(myinp  != random){
        document.getElementById('output').innerHTML = 'Wrong guess!';
        document.getElementById('output').value = '';
        output.style.color = 'red';
        document.getElementById('output').style.background='none'

        if (myinp > random) {
            document.getElementById('w').innerHTML = 'Number is greater';
        }
        else if (myinp < random) {
            document.getElementById('w').innerHTML = 'Number is lesser';
        }
    }
     

    document.getElementById('myinp').value = "";
}
btn.addEventListener('click', checkguess);

reload.addEventListener('click', function () {
    location.reload();  
})