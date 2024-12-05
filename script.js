const elements = document.querySelectorAll('.hidden')
const my0bserever = new IntersectionObserver ((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

elements.forEach((element) => my0bserever.observe(element))




window.addEventListener('load', () => {
    const sliderTrack = document.querySelector('.slider-track');
    const imagensProduto = document.querySelectorAll('.produto');

    // Clona as imagens para criar o loop infinito
    imagensProduto.forEach(imagem => {
        const clone = imagem.cloneNode(true);
        sliderTrack.appendChild(clone); // Adiciona o clone ao final
    });

    // Define a largura total do slider-track (todas as imagens, incluindo clones)
    const larguraTotal = Array.from(imagensProduto)
        .reduce((total, imagem) => total + imagem.offsetWidth, 0) * 2;

    sliderTrack.style.width = `${larguraTotal}px`; // Ajusta a largura
});
