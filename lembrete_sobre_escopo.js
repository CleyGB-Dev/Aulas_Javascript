// --- ESCOPO GLOBAL ---
let nomeDoJogo = "Super Mario"; // Todo mundo vê isso

function iniciarFase() {
    // --- ESCOPO LOCAL ---
    let moedas = 0; // Só existe AQUI DENTRO

    console.log(nomeDoJogo); // Funciona! O local vê o global.
    console.log(moedas);     // Funciona! Estamos dentro da função.
}

iniciarFase();

// Tentar acessar 'moedas' aqui fora vai dar erro:
console.log(moedas); // ERRO! 'moedas' não existe neste escopo.