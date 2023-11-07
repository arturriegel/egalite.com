let count = 1

// Define o botão de opção (radio) com o ID 'radio1' como selecionado (checked).
document.getElementById('radio1').checked = true

// Define um intervalo para chamar repetidamente a função "nextImage" a cada 3 segundos.
setInterval(function() {
    nextImage()
}, 5000)

function nextImage() {
    count++

    // Verifica se o valor de "count" ultrapassou 3 (número de imagens disponíveis).
    // Se sim, redefine "count" para 1, reiniciando o ciclo de imagens.
    if (count > 3) {
        count = 1
    }
    
    // Define o botão de opção (radio) com o ID correspondente a "count" como selecionado.
    document.getElementById('radio' + count).checked = true
}