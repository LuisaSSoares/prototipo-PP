// Função para abrir feed ao clicar em uma seção específica
document.addEventListener('DOMContentLoaded', function () {
    const secoes = document.querySelectorAll(".secoesHome");

    secoes.forEach(secao => {
        secao.addEventListener('click', function () {
            const idSecao = this.id
            sessionStorage.setItem('secaoSelecionada', idSecao)
            window.location.href = './feed.html'
        })
    })
})

// Função para alterar o ícone do feed da seção conforme o tipo dela
document.addEventListener('DOMContentLoaded', function () {
    const iconeFeed = document.getElementById('iconFeed')
    const secaoSelecionada = sessionStorage.getItem('secaoSelecionada')

    if (iconeFeed && secaoSelecionada) {
        const icones = {
            secaoMusicaAudio: './assets/Headphones.png',
            secaoPlastica: './assets/artes plásticas.png',
            secaoCenica: './assets/artes cenicas.png',
            secaoLiteratura: './assets/BookHalf.png'
        };

        if (icones[secaoSelecionada]) {
            iconeFeed.setAttribute('src', icones[secaoSelecionada])
        }
    }
});

//Função para abrir homepage
async function login(event) {
    event.preventDefault()
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    if(!email || !senha) {
        alert('preencha todos os campos')
        return
    }
    window.location.href = "./homepage.html"
}
