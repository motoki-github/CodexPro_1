// Toggle between English and Japanese text on the page
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-lang');
    // Start with the language defined on the <html> tag
    let currentLang = document.documentElement.lang || 'en';

    function updateText() {
        document.querySelectorAll('[data-en]').forEach(el => {
            const en = el.getAttribute('data-en');
            const ja = el.getAttribute('data-ja');
            el.textContent = currentLang === 'en' ? en : ja;
        });
        toggleBtn.textContent = currentLang === 'en' ? '日本語' : 'English';
        document.documentElement.lang = currentLang;
    }

    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ja' : 'en';
        updateText();
    });

    updateText();
});
