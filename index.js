const botonSimon = document.getElementById('simon');
const botonNelson = document.getElementById('nelson');




const somosAlgo = () =>{
    alert("Somos Novios");
    location.href="https://youtu.be/04854XqcfCY?t=25"

}


const evitarCoraRoto = () =>{
    botonNelson.style.position = 'absolute';
    botonNelson.style.top = (Math.random()* window.innerHeight) + 'px';
    botonNelson.style.left = (Math.random()* window.innerWidth) + 'px';
}

botonSimon.addEventListener('click', somosAlgo);
botonNelson.addEventListener('mouseover', evitarCoraRoto);