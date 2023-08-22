var x = document.getElementById('entrar');
var y = document.getElementById('registro');
var z = document.getElementById('btn');
var w = document.getElementById('container');
var t = document.getElementById('dark');

function registro(){
x.style.left = "-400px";
y.style.left = "50px";
z.style.left = "110px";
}

function entrar(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

const container = document.querySelector('.container');
const dark = document.querySelector('.dark');

dark.onclick = function() {

    this.classList.toggle('active');
    container.classList.toggle('active');
}