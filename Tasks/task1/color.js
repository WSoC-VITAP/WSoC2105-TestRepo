const but = document.getElementById('colorButton');
but.addEventListener('click', changeColor);

 function changeColor(){
    let color = document.getElementById('col').value;
    document.getElementById('colorInput').value = color;
    document.body.style.background= color;

 }