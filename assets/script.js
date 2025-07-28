// Efeito de máquina de escrever no subtítulo
const titles = [
    "Desenvolvedor Sênior Fullstack",
    "Especialista em Java, PHP e Delphi",
    "Arquiteto de Soluções Completas"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === titles.length) count = 0;
    currentText = titles[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typing-effect").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
})();

// Smooth scrolling para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});