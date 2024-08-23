function validarTexto(texto) {
    // Expresión regular para verificar que el texto contenga solo letras minúsculas
    const regex = /^[a-z\s]+$/;

    if (!regex.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas y sin caracteres especiales.");
        return false;
    }

    return true;
}

function encriptarTexto() {
    const mapaVocales = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let texto = document.getElementById('textoEntrada').value;
// Validar el texto antes de encriptarlo
    if (!validarTexto(texto)) {
    return;
    }

    let textoEncriptado = '';

    for (let i = 0; i < texto.length; i++) {
        const caracter = texto[i];
        if (mapaVocales[caracter]) {
            textoEncriptado += mapaVocales[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }

       document.getElementById('textoResultado').value = textoEncriptado;
}



// Hasta aqui Es para Encriptar.

function desencriptarTexto() {

    const mapaDesencriptado = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
        
    let texto = document.getElementById('textoEntrada').value;
    if (!validarTexto(texto)) {
        return;
        }
    let textoDesencriptado = texto;

    
// Reemplazar cada secuencia encriptada por su vocal original
for (const clave in mapaDesencriptado) {
    const valor = mapaDesencriptado[clave];
    textoDesencriptado = textoDesencriptado.split(clave).join(valor);
}
       
    document.getElementById('textoResultado').value = textoDesencriptado
}