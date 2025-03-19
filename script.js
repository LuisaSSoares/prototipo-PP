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
            secaoMusicaAudio: { src: './assets/Headphones.png', alt: 'Ícone de fones de ouvido, representando música e áudio' },
            secaoPlastica: { src: './assets/artes plásticas.png', alt: 'Ícone de uma paleta de tinta, representando artes plásticas' },
            secaoCenica: { src: './assets/artes cenicas.png', alt: 'Ícone de máscaras, representando artes cênicas' },
            secaoLiteratura: { src: './assets/BookHalf.png', alt: 'Ícone de livro, representando literatura' }
        };

        if (icones[secaoSelecionada]) {
            iconeFeed.setAttribute('src', icones[secaoSelecionada].src)
            iconeFeed.setAttribute('alt', icones[secaoSelecionada].alt)
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
