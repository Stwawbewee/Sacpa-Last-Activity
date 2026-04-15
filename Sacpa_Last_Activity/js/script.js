// Brutalist Portfolio - Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('🚀 Harvey Sacpa Brutalist Portfolio Loaded');
    
    // 1. HERO TEXT ANIMATION
    const heroName = document.querySelector('.hero-name');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroName) {
        heroName.style.opacity = '0';
        heroName.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroName.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroName.style.opacity = '1';
            heroName.style.transform = 'translateY(0)';
        }, 300);
    }
    
    if (heroSubtitle) {
        heroSubtitle.style.opacity = '0';
        heroSubtitle.style.transform = 'translateY(30px)';
        setTimeout(() => {
            heroSubtitle.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }, 800);
    }

    // 2. SKILL ITEMS INTERACTION (Click + Hover)
    const skillItems = document.querySelectorAll('.list-items li');
    skillItems.forEach((item, index) => {
        // Staggered entrance
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            setTimeout(() => {
                item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100);
        }, index * 150);

        // Click feedback
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95) translateX(5px)';
            this.style.transition = 'all 0.2s ease';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });

        // Hover effect
        item.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '0.1em';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.letterSpacing = '0.05em';
        });
    });

    // 3. CONTACT LINKS INTERACTION
    const contactLinks = document.querySelectorAll('.contact-item a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Copy to clipboard effect
            navigator.clipboard.writeText(this.textContent).then(() => {
                this.style.background = 'var(--burgundy)';
                this.style.color = 'white';
                setTimeout(() => {
                    this.style.background = '';
                    this.style.color = 'var(--gray-brutal)';
                }, 800);
            });
        });
    });

    // 4. SCROLL REVEAL (Subtle brutalist style)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(section);
    });

    // 5. PARALLAX EFFECT ON HERO (Subtle)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // 6. CURSOR TRAIL (Optional brutalist touch)
    // Uncomment if you want cursor trail effect
    /*
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 4px;
            height: 4px;
            background: var(--burgundy);
            border-radius: 0;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.3s;
        `;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 300);
    });
    */

    // 7. PERFORMANCE OPTIMIZATION
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});