// JavaScript para la página de aniversario - Optimizado para Internet Lento
document.addEventListener('DOMContentLoaded', function() {
    
    // Inicializar el preloader
    initializePreloader();
    
    // Configurar la fecha del aniversario
    setupAnniversaryDate();
    
    // Inicializar efectos de partículas
    createFloatingHearts();
    
    // Configurar el reproductor de música
    setupMusicPlayer();
    
    // Configurar lazy loading
    setupLazyLoading();
    
    // Añadir efectos de hover mejorados
    setupPhotoPlaceholders();
    
    // Animaciones de scroll
    setupScrollAnimations();
    
    // Efecto de escritura para el título
    setupTypewriterEffect();
});

// Sistema de Preloader Romántico
function initializePreloader() {
    const preloader = document.getElementById('romantic-preloader');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    // Imágenes críticas que deben cargar primero
    const criticalImages = [
        'img/besito1.jpg',
        'img/fotito1.jpg'
    ];
    
    let loadedImages = 0;
    let totalProgress = 0;
    
    // Simular progreso inicial (estructura de página)
    setTimeout(() => updateProgress(20, 'Preparando la página...'), 200);
    setTimeout(() => updateProgress(40, 'Cargando tipografías...'), 600);
    
    // Cargar imágenes críticas
    criticalImages.forEach((src, index) => {
        const img = new Image();
        img.onload = () => {
            loadedImages++;
            const imageProgress = 60 + (loadedImages / criticalImages.length) * 30;
            updateProgress(imageProgress, `Cargando foto ${loadedImages}/${criticalImages.length}...`);
            
            if (loadedImages === criticalImages.length) {
                // Todas las imágenes críticas están cargadas
                setTimeout(() => {
                    updateProgress(100, '¡Listo para ti! 💕');
                    setTimeout(() => {
                        hidePreloader();
                        initializeLazyLoading();
                    }, 800);
                }, 500);
            }
        };
        img.onerror = () => {
            // Si una imagen falla, continuar anyway
            loadedImages++;
            if (loadedImages === criticalImages.length) {
                setTimeout(() => hidePreloader(), 1000);
            }
        };
        img.src = src;
    });
    
    function updateProgress(percent, message) {
        progressFill.style.width = percent + '%';
        progressText.textContent = Math.round(percent) + '%';
        if (message) {
            document.querySelector('.loading-subtitle').textContent = message;
        }
    }
    
    function hidePreloader() {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.remove();
        }, 500);
        
        // Activar animaciones del contenido principal
        document.body.classList.add('loaded');
    }
}

// Sistema de Lazy Loading Avanzado
function setupLazyLoading() {
    // No ejecutar hasta que se oculte el preloader
}

function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('.lazy-image');
    const lazySection = document.querySelector('.lazy-section');
    
    // Marcar imágenes priority como ya cargadas
    const priorityImages = document.querySelectorAll('.priority-image');
    priorityImages.forEach(img => {
        img.classList.add('loaded');
        const container = img.closest('.photo-container');
        if (container) {
            container.classList.add('image-loaded');
        }
    });
    
    // Configuración del Intersection Observer para imágenes lazy
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    // Mostrar skeleton mientras carga
                    const container = img.closest('.photo-container, .photo-item');
                    
                    img.src = src;
                    img.onload = () => {
                        img.classList.add('loaded');
                        if (container) {
                            container.classList.add('image-loaded');
                        }
                    };
                    
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '500px' // Carga con 500px de anticipación para internet lento
    });

    // Observar solo imágenes lazy (no priority)
    lazyImages.forEach(img => {
        if (!img.classList.contains('priority-image')) {
            imageObserver.observe(img);
        }
    });
    
    // Observer para la sección expandida (carga bajo demanda)
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                const sectionImages = section.querySelectorAll('.lazy-image');
                
                // Activar carga de imágenes en esta sección
                sectionImages.forEach(img => {
                    if (!img.classList.contains('loaded')) {
                        imageObserver.observe(img);
                    }
                });
                
                sectionObserver.unobserve(section);
            }
        });
    }, {
        rootMargin: '200px'
    });
    
    if (lazySection) {
        sectionObserver.observe(lazySection);
    }
}

// Configurar la fecha del aniversario
function setupAnniversaryDate() {
    const anniversaryElement = document.getElementById('anniversaryDate');
    const today = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('es-ES', options);
    anniversaryElement.textContent = formattedDate;
}

// Crear corazones flotantes
function createFloatingHearts() {
    const container = document.querySelector('.background-hearts');
    const hearts = ['💕', '💖', '💗', '💝', '💞', '💓', '💘'];
    
    // Crear corazones adicionales
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 10 + 15}px;
            color: rgba(242, 215, 213, ${Math.random() * 0.3 + 0.1});
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatRandom ${Math.random() * 4 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: none;
            z-index: 1;
        `;
        container.appendChild(heart);
    }
    
    // Añadir estilos de animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatRandom {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotate(0deg);
                opacity: 0.2;
            }
            25% {
                transform: translateY(-30px) translateX(10px) rotate(5deg);
                opacity: 0.6;
            }
            50% {
                transform: translateY(-20px) translateX(-15px) rotate(-3deg);
                opacity: 0.8;
            }
            75% {
                transform: translateY(-40px) translateX(5px) rotate(2deg);
                opacity: 0.4;
            }
        }
    `;
    document.head.appendChild(style);
}

// Configurar reproductor de música (simulado)
function setupMusicPlayer() {
    const musicButton = document.getElementById('musicToggle');
    let isPlaying = false;
    
    musicButton.addEventListener('click', function() {
        isPlaying = !isPlaying;
        
        if (isPlaying) {
            musicButton.classList.add('playing');
            musicButton.innerHTML = '<i class="fas fa-pause"></i>';
            // Aquí podrías añadir un archivo de audio real
            showMusicNotification('🎵 Reproduciendo música romántica...');
        } else {
            musicButton.classList.remove('playing');
            musicButton.innerHTML = '<i class="fas fa-music"></i>';
            showMusicNotification('⏸️ Música pausada');
        }
    });
}

// Mostrar notificación de música
function showMusicNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: rgba(114, 47, 55, 0.9);
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        font-family: 'Playfair Display', serif;
        font-size: 0.9rem;
        z-index: 1001;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Configurar efectos de los placeholders de fotos
function setupPhotoPlaceholders() {
    const photoContainers = document.querySelectorAll('.photo-container, .photo-placeholder');
    
    photoContainers.forEach((container, index) => {
        container.addEventListener('click', function() {
            // Efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Mostrar mensaje específico según la foto
            const description = this.getAttribute('data-description');
            if (description) {
                showPhotoMessage(description, index + 1);
            } else {
                showPhotoMessage('', index + 1);
            }
        });
        
        // Efecto de partículas al hover
        container.addEventListener('mouseenter', function() {
            createClickEffect(this);
            
            // Efecto especial para fotos destacadas
            if (this.classList.contains('highlighted')) {
                createHeartEffect(this);
            }
        });
    });
}

// Crear efecto de corazones para fotos destacadas
function createHeartEffect(element) {
    const rect = element.getBoundingClientRect();
    const hearts = ['💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: fixed;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            font-size: ${Math.random() * 8 + 12}px;
            pointer-events: none;
            z-index: 1000;
            animation: heartFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (document.body.contains(heart)) {
                document.body.removeChild(heart);
            }
        }, 2000);
    }
    
    // Añadir animación de corazones si no existe
    if (!document.querySelector('#heartFloatAnimation')) {
        const style = document.createElement('style');
        style.id = 'heartFloatAnimation';
        style.textContent = `
            @keyframes heartFloat {
                0% {
                    opacity: 1;
                    transform: scale(0) rotate(0deg) translateY(0);
                }
                50% {
                    opacity: 1;
                    transform: scale(1) rotate(180deg) translateY(-20px);
                }
                100% {
                    opacity: 0;
                    transform: scale(0.5) rotate(360deg) translateY(-40px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Mostrar mensaje para los placeholders de fotos
function showPhotoMessage(description, photoNumber) {
    let messageText;
    
    if (description) {
        // Mensajes personalizados basados en la descripción
        switch(description) {
            case 'Nuestro primer encuentro especial':
                messageText = '🎬 Nuestra primera cita en el cine... ¡qué nervios tenía! El inicio de nuestra historia 💕';
                break;
            case 'Momentos de amor':
                messageText = '💋 Nuestros besos más tiernos... momentos que atesoro en mi corazón �';
                break;
            case 'Celebraciones especiales':
                messageText = '🎂 Celebrando juntos los momentos más importantes... ¡siempre a tu lado! 🎉';
                break;
            case 'Nuestro día a día':
                messageText = '⭐ Los momentos cotidianos que hacen especial nuestra relación 🥰';
                break;
            case 'Momentos divertidos':
                messageText = '😂 ¡Siempre sacándome sonrisas! Eres mi diversión favorita 💫';
                break;
            default:
                messageText = description;
        }
    } else {
        // Mensajes por defecto si no hay descripción
        const messages = [
            '📸 Nuestro primer encuentro especial',
            '💕 Momentos de amor',
            '🌟 Celebraciones especiales',
            '💖 Nuestro día a día',
            '😍 Momentos divertidos'
        ];
        messageText = messages[photoNumber - 1] || '💕 Un momento especial para recordar';
    }
    
    const message = document.createElement('div');
    message.innerHTML = messageText;
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        color: #722f37;
        padding: 25px 35px;
        border-radius: 20px;
        font-family: 'Playfair Display', serif;
        font-size: 1.2rem;
        text-align: center;
        z-index: 1002;
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        border: 2px solid #f2d7d5;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
        transition: all 0.4s ease;
        max-width: 400px;
        line-height: 1.5;
    `;
    
    document.body.appendChild(message);
    
    // Animar entrada
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    // Remover después de 3.5 segundos
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            if (document.body.contains(message)) {
                document.body.removeChild(message);
            }
        }, 400);
    }, 3500);
}

// Función para mostrar todas las fotos cotidianas - Optimizada
function showAllFotitos() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        z-index: 2000;
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.2rem;
        color: #722f37;
        cursor: pointer;
        z-index: 2001;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    
    const title = document.createElement('h2');
    title.innerHTML = 'Nuestras 21 Fotos Cotidianas 💕<br><small style="font-size: 0.6em; opacity: 0.8;">Cargando gradualmente...</small>';
    title.style.cssText = `
        color: white;
        text-align: center;
        font-family: 'Dancing Script', cursive;
        font-size: 2.5rem;
        margin: 40px 0 30px;
        line-height: 1.2;
    `;
    
    const grid = document.createElement('div');
    grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        max-width: 1200px;
        margin: 0 auto;
        padding-bottom: 40px;
    `;
    
    // Crear placeholders primero para mantener layout
    for (let i = 1; i <= 21; i++) {
        const photoContainer = document.createElement('div');
        photoContainer.style.cssText = `
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
            position: relative;
        `;
        
        // Skeleton para esta foto
        const skeleton = document.createElement('div');
        skeleton.style.cssText = `
            width: 100%;
            height: 200px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: skeletonLoading 1.5s infinite;
        `;
        
        const img = document.createElement('img');
        img.style.cssText = `
            width: 100%;
            height: 200px;
            object-fit: cover;
            opacity: 0;
            transition: opacity 0.5s ease;
        `;
        
        const caption = document.createElement('div');
        caption.textContent = `Momento ${i} 💕`;
        caption.style.cssText = `
            padding: 15px;
            text-align: center;
            font-family: 'Playfair Display', serif;
            color: #722f37;
            font-weight: 500;
        `;
        
        photoContainer.appendChild(skeleton);
        photoContainer.appendChild(img);
        photoContainer.appendChild(caption);
        
        // Lazy loading para el modal
        setTimeout(() => {
            img.src = `img/fotito${i}.jpg`;
            img.onload = () => {
                img.style.opacity = '1';
                skeleton.style.opacity = '0';
                setTimeout(() => skeleton.remove(), 500);
            };
            img.onerror = () => {
                // Si falla, mostrar placeholder
                skeleton.style.background = '#f2d7d5';
                skeleton.innerHTML = '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #722f37;">❤️</div>';
            };
        }, i * 200); // Escalonar la carga
        
        photoContainer.addEventListener('mouseenter', () => {
            photoContainer.style.transform = 'scale(1.05)';
        });
        
        photoContainer.addEventListener('mouseleave', () => {
            photoContainer.style.transform = 'scale(1)';
        });
        
        grid.appendChild(photoContainer);
    }
    
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    modal.appendChild(closeBtn);
    modal.appendChild(title);
    modal.appendChild(grid);
    document.body.appendChild(modal);
    
    // Animación de entrada
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.style.transition = 'opacity 0.3s ease';
        
        // Actualizar título cuando termine de cargar
        setTimeout(() => {
            title.innerHTML = 'Nuestras 21 Fotos Cotidianas 💕';
        }, 21 * 200 + 1000);
    }, 100);
}

// Crear efecto de partículas en click
function createClickEffect(element) {
    const rect = element.getBoundingClientRect();
    const sparkles = ['✨', '💫', '⭐', '🌟'];
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.cssText = `
            position: fixed;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            font-size: ${Math.random() * 10 + 15}px;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleEffect 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (document.body.contains(sparkle)) {
                document.body.removeChild(sparkle);
            }
        }, 1500);
    }
    
    // Añadir animación de sparkle si no existe
    if (!document.querySelector('#sparkleAnimation')) {
        const style = document.createElement('style');
        style.id = 'sparkleAnimation';
        style.textContent = `
            @keyframes sparkleEffect {
                0% {
                    opacity: 1;
                    transform: scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: scale(1) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) rotate(360deg) translateY(-50px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Animaciones en scroll
function setupScrollAnimations() {
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
    
    // Observar elementos que necesitan animación
    const animatedElements = document.querySelectorAll('.gallery-section, .letter-section, .footer');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

// Efecto de escritura para el título
function setupTypewriterEffect() {
    const title = document.querySelector('.main-title');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Añadir clase para la animación del corazón
            title.classList.add('typing-complete');
        }
    };
    
    // Iniciar después de un pequeño delay
    setTimeout(typeWriter, 500);
}

// Efecto de hover mejorado para la carta
document.addEventListener('DOMContentLoaded', function() {
    const letterContent = document.querySelector('.letter-content');
    
    letterContent.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Crear un sutil efecto de brillo que sigue al cursor
        const highlight = document.createElement('div');
        highlight.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            background: radial-gradient(circle, rgba(218, 165, 32, 0.1) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: opacity 0.5s ease;
        `;
        
        this.appendChild(highlight);
        
        setTimeout(() => {
            highlight.style.opacity = '0';
            setTimeout(() => {
                if (this.contains(highlight)) {
                    this.removeChild(highlight);
                }
            }, 500);
        }, 100);
    });
});

// Añadir efecto de nieve de corazones ocasional
function createHeartSnow() {
    const snowflake = document.createElement('div');
    snowflake.innerHTML = '💕';
    snowflake.style.cssText = `
        position: fixed;
        top: -50px;
        left: ${Math.random() * window.innerWidth}px;
        font-size: ${Math.random() * 15 + 10}px;
        color: rgba(242, 215, 213, 0.6);
        pointer-events: none;
        z-index: 1;
        animation: snowfall ${Math.random() * 3 + 5}s linear forwards;
    `;
    
    document.body.appendChild(snowflake);
    
    setTimeout(() => {
        if (document.body.contains(snowflake)) {
            document.body.removeChild(snowflake);
        }
    }, 8000);
}

// Añadir estilos para la nieve de corazones
const snowStyle = document.createElement('style');
snowStyle.textContent = `
    @keyframes snowfall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(${window.innerHeight + 50}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(snowStyle);

// Crear nieve de corazones cada 5 segundos
setInterval(createHeartSnow, 5000);

// Mensaje de bienvenida al cargar la página
window.addEventListener('load', function() {
    setTimeout(() => {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = '💕 Bienvenida a nuestro rincón especial 💕';
        welcomeMessage.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(114, 47, 55, 0.9);
            color: white;
            padding: 15px 30px;
            border-radius: 25px;
            font-family: 'Dancing Script', cursive;
            font-size: 1.2rem;
            z-index: 1003;
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
            transition: all 0.5s ease;
        `;
        
        document.body.appendChild(welcomeMessage);
        
        setTimeout(() => {
            welcomeMessage.style.opacity = '1';
            welcomeMessage.style.transform = 'translateX(-50%) translateY(0)';
        }, 100);
        
        setTimeout(() => {
            welcomeMessage.style.opacity = '0';
            welcomeMessage.style.transform = 'translateX(-50%) translateY(-20px)';
            setTimeout(() => {
                if (document.body.contains(welcomeMessage)) {
                    document.body.removeChild(welcomeMessage);
                }
            }, 500);
        }, 4000);
    }, 2000);
});
