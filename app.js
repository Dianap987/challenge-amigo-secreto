// Lista para almacenar los nombres de amigos
const listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios al inicio/final

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Validar si ya existe el nombre en la lista
    if (listaDeAmigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        input.value = '';
        return;
    }

    listaDeAmigos.push(nombre);

    // Limpiar el input
    input.value = '';

    // Actualizar visualmente la lista
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; // Limpiar la lista actual

    listaDeAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior

    if (listaDeAmigos.length < 2) {
        alert('Debes agregar al menos dos amigos para hacer el sorteo.');
        return;
    }

    const indiceGanador = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreGanador = listaDeAmigos[indiceGanador];

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${nombreGanador}! 🎁`;
    resultado.appendChild(li);
}