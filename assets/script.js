// =============================================
// BRENO LUIZ — PORTFOLIO 2025 — Scripts
// =============================================

// ----- Typing effect -----
const roles = [
    "Desenvolvedor Backend Sênior",
    "Especialista em Java & Delphi",
    "Arquiteto de APIs & Integrações",
    "Expert em Legislação Fiscal",
    "Especialista em PHP / Laravel"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typingEffect');

function type() {
    if (!typingEl) return;
    const current = roles[roleIndex];
    if (isDeleting) {
        typingEl.textContent = current.slice(0, --charIndex);
    } else {
        typingEl.textContent = current.slice(0, ++charIndex);
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => { isDeleting = true; type(); }, 2200);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 40 : 80);
}
type();

// ----- Navbar scroll -----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ----- Mobile nav toggle -----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    navLinks.classList.contains('open')
        ? spans.forEach((s, i) => {
            if (i === 0) { s.style.transform = 'rotate(45deg) translate(5px, 5px)'; }
            if (i === 1) { s.style.opacity = '0'; }
            if (i === 2) { s.style.transform = 'rotate(-45deg) translate(5px, -5px)'; }
        })
        : spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.querySelectorAll('span').forEach(s => {
            s.style.transform = '';
            s.style.opacity = '';
        });
    });
});

// ----- Active nav link on scroll -----
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinkEls.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerNav.observe(s));

// ----- Reveal animations -----
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, entry.target.dataset.delay || 0);
            observerReveal.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => observerReveal.observe(el));

// ----- Year in footer -----
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ----- Smooth scroll for all anchor links -----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
