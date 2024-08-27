function actualizarTamaño() {
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    
    document.getElementById('ancho').textContent = ancho;
    document.getElementById('alto').textContent = alto;
}

actualizarTamaño();

window.addEventListener('resize', actualizarTamaño);