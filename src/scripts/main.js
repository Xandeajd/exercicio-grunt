document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Pega os valores do formulário
    const nome = document.getElementById('nome').value;
    const contato = document.getElementById('contato').value;
    const email = document.getElementById('email').value;

    // Monta a mensagem
    const mensagem = `Olá, recebi um novo contato:
Nome: ${nome}
Contato: ${contato}
E-mail: ${email}`;
    const numeroWhatsApp = '5551991210808';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});
