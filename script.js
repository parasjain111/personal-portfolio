document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const iconSun = document.querySelector('.icon-sun');
    const iconMoon = document.querySelector('.icon-moon');

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    }

    toggleButton.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let targetTheme = 'light';

        if (currentTheme !== 'dark') {
            targetTheme = 'dark';
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        } else {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        }

        document.documentElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
    });
});

// Referral Modal Logic
const referralLink = document.getElementById('referral-link');
const referralModal = document.getElementById('referral-modal');
const closeModalSpan = document.querySelector('.close-modal');

if (referralLink && referralModal && closeModalSpan) {
    // Open Modal
    referralLink.addEventListener('click', (e) => {
        e.preventDefault();
        referralModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Disable background scrolling
    });

    // Close functions
    const closeModal = () => {
        referralModal.classList.remove('show');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    // Close on 'x' click
    closeModalSpan.addEventListener('click', closeModal);

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target == referralModal) {
            closeModal();
        }
    });

    // Close on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && referralModal.classList.contains('show')) {
            closeModal();
        }
    });
}

