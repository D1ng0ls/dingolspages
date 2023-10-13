function jorge(id) {
    const resp = document.getElementById("resp" + id);
    const quest = document.getElementById("quest" + id);

    // Fecha todas as respostas
    const todasAsRespostas = document.querySelectorAll('.quest-reposta');
    todasAsRespostas.forEach(item => {
        if (item.id !== 'resp' + id) {
            item.classList.remove('quest-resposta-mostra');
        }
    });

    const todasAsQuestoes = document.querySelectorAll('.faq-quest');
    todasAsQuestoes.forEach(item => {
        if (item.id !== 'quest' + id) {
            item.classList.remove('roda');
        }
    });

    // Abre ou fecha a resposta clicada
    resp.classList.toggle("quest-resposta-mostra");
    quest.classList.toggle("roda");
}
