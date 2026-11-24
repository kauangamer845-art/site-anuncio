/* =====================================================
   SCRIPT.JS - Interatividade, Validação e UX (AuraMind)
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Timer Interativo do Mockup
    const timerBtn = document.getElementById('demo-timer-btn');
    const timerDisplay = document.getElementById('demo-timer');
    let seconds = 45 * 60;
    let interval = null;

    if (timerBtn && timerDisplay) {
        timerBtn.addEventListener('click', () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
                timerBtn.textContent = 'Continuar Ciclo';
            } else {
                timerBtn.textContent = 'Pausar Ciclo';
                interval = setInterval(() => {
                    if (seconds > 0) {
                        seconds--;
                        const m = String(Math.floor(seconds / 60)).padStart(2, '0');
                        const s = String(seconds % 60).padStart(2, '0');
                        timerDisplay.textContent = `${m}:${s}`;
                    }
                }, 1000);
            }
        });
    }

    // 2. Validação do Formulário de Captura de Leads
    const form = document.getElementById('lead-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('lead-name');
            const email = document.getElementById('lead-email');
            const errName = document.getElementById('error-name');
            const errEmail = document.getElementById('error-email');
            const success = document.getElementById('form-success');

            let valid = true;
            errName.textContent = '';
            errEmail.textContent = '';

            if (name.value.trim().length < 3) {
                errName.textContent = 'Por favor, digite seu nome completo.';
                valid = false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                errEmail.textContent = 'Informe um endereço de e-mail válido.';
                valid = false;
            }

            if (valid) {
                success.hidden = false;
                form.reset();
            }
        });
    }

    // 3. FAQ Interativo (Accordion)
    document.querySelectorAll('.faq-question').forEach((btn) => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            item.classList.toggle('active');
        });
    });
});