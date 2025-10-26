// Navegación móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Filtros de cartelera
const filterButtons = document.querySelectorAll('.filter-btn');
const showCards = document.querySelectorAll('.show-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            showCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Funcionalidad de compra
function calcularTotal() {
    const cantidad = document.getElementById('cantidad').value;
    const tipoEntrada = document.getElementById('tipoEntrada');
    const precio = tipoEntrada.selectedOptions[0]?.getAttribute('data-price') || 0;
    
    const subtotal = cantidad * precio;
    const descuento = parseFloat(document.getElementById('summaryDescuento').textContent.replace('$', '').replace(',', '')) || 0;
    const total = subtotal - descuento;

    // Actualizar resumen
    document.getElementById('summaryCantidad').textContent = cantidad;
    document.getElementById('summaryPrecio').textContent = `$${precio.toLocaleString()}`;
    document.getElementById('summarySubtotal').textContent = `$${subtotal.toLocaleString()}`;
    document.getElementById('summaryTotal').innerHTML = `<strong>$${Math.max(0, total).toLocaleString()}</strong>`;
}

function aplicarDescuento() {
    const codigo = document.getElementById('descuento').value.toLowerCase();
    let descuento = 0;
    
    // Códigos de descuento válidos
    const codigosDescuento = {
        'estudiante': 0.2, // 20% descuento
        'jubilado': 0.15,  // 15% descuento
        'primera': 0.1,    // 10% descuento
        'teatro10': 0.1    // 10% descuento
    };

    if (codigosDescuento[codigo]) {
        const subtotal = parseFloat(document.getElementById('summarySubtotal').textContent.replace('$', '').replace(',', ''));
        descuento = subtotal * codigosDescuento[codigo];
        document.getElementById('summaryDescuento').textContent = `$${descuento.toLocaleString()}`;
        alert('¡Descuento aplicado correctamente!');
    } else if (codigo) {
        alert('Código de descuento no válido');
    }
    
    calcularTotal();
}


// Validación de formulario de compra
const compraForm = document.getElementById('compraForm');
if (compraForm) {
    compraForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const cantidad = document.getElementById('cantidad').value;
        const tipoEntrada = document.getElementById('tipoEntrada').value;
        const metodoPago = document.querySelector('input[name="metodoPago"]:checked');
        
        if (!cantidad || !tipoEntrada || !metodoPago) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }
        
        // Simular compra exitosa
        const total = document.getElementById('summaryTotal').textContent;
        mostrarModal(
            '¡Compra Completada!',
            `Tu compra ha sido procesada exitosamente.\n\nTotal: ${total}\n\nRecibirás un email de confirmación con tus entradas en los próximos minutos.`,
            '🎫',
            () => {
                window.location.href = 'index.html';
            }
        );
    });
}

// Cargar información del show desde URL
function cargarInformacionShow() {
    const urlParams = new URLSearchParams(window.location.search);
    const show = urlParams.get('show');
    
    const shows = {
        'hamlet': {
            title: 'Hamlet',
            date: '15 de Octubre, 2025',
            time: '20:00 hs',
            sala: 'Sala Principal',
            duration: '2 horas 30 minutos'
        },
        'bernarda': {
            title: 'La Casa de Bernarda Alba',
            date: '1 de Noviembre, 2025',
            time: '20:30 hs',
            sala: 'Sala Íntima',
            duration: '1 hora 45 minutos'
        },
        'fantasma': {
            title: 'El Fantasma de la Ópera',
            date: '20 de Noviembre, 2025',
            time: '21:00 hs',
            sala: 'Sala Principal',
            duration: '2 horas 45 minutos'
        },
        'inspector': {
            title: 'El Inspector',
            date: '10 de Noviembre, 2025',
            time: '19:30 hs',
            sala: 'Sala Experimental',
            duration: '1 hora 30 minutos'
        },
        'pinocho': {
            title: 'Pinocho',
            date: 'Sábado 16 de Noviembre, 2025',
            time: '16:00 hs',
            sala: 'Sala Infantil',
            duration: '1 hora 15 minutos'
        },
        'godot': {
            title: 'Esperando a Godot',
            date: '5 de Diciembre, 2025',
            time: '20:00 hs',
            sala: 'Sala Íntima',
            duration: '2 horas'
        }
    };
    
    if (show && shows[show]) {
        const showInfo = shows[show];
        document.getElementById('showTitle').textContent = showInfo.title;
        document.getElementById('showDate').textContent = showInfo.date;
        document.getElementById('showTime').textContent = showInfo.time;
        document.getElementById('showSala').textContent = showInfo.sala;
        document.getElementById('showDuration').textContent = showInfo.duration;
    }
}

// Función para mostrar modales
function mostrarModal(titulo, mensaje, icono, accion = null) {
    console.log('mostrarModal llamado con:', titulo, mensaje, icono);
    // Crear overlay del modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    console.log('Modal overlay creado:', modalOverlay);
    
    modalOverlay.innerHTML = `
        <div class="modal">
            <button class="modal-close">&times;</button>
            <div class="modal-icon">${icono}</div>
            <h2 class="modal-title">${titulo}</h2>
            <p class="modal-message">${mensaje}</p>
            <button class="modal-button" onclick="cerrarModal()">Continuar</button>
        </div>
    `;
    
    // Agregar al body
    document.body.appendChild(modalOverlay);
    console.log('Modal agregado al DOM');
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
    
    // Event listeners para cerrar modal
    const cerrarModal = () => {
        modalOverlay.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            if (modalOverlay.parentNode) {
                modalOverlay.parentNode.removeChild(modalOverlay);
            }
            document.body.style.overflow = 'auto';
            if (accion) accion();
        }, 300);
    };
    
    // Cerrar con botón X
    modalOverlay.querySelector('.modal-close').addEventListener('click', cerrarModal);
    
    // Cerrar con botón continuar
    modalOverlay.querySelector('.modal-button').addEventListener('click', cerrarModal);
    
    // Cerrar clickeando fuera del modal
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            cerrarModal();
        }
    });
    
    // Cerrar con tecla Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            cerrarModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Función global para cerrar modal (llamada desde el botón)
function cerrarModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarInformacionShow();
    
    // Inicializar cálculos si estamos en la página de compra
    if (document.getElementById('cantidad')) {
        calcularTotal();
    }
    
    // Validación de formulario de registro
    const registroForm = document.getElementById('registroForm');
    if (registroForm) {
        registroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            // Mostrar modal de éxito
            mostrarModal(
                '¡Registro Completado!',
                'Tu cuenta ha sido creada exitosamente. Ya puedes disfrutar de todos los beneficios del Teatro del Sol.',
                '🎉',
                () => {
                    window.location.href = 'index.html';
                }
            );
        });
    }
    
    // Validación de formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (!email || !password) {
                alert('Por favor completa todos los campos');
                return;
            }
            
            // Simular login exitoso (siempre funciona para la demo)
            mostrarModal(
                '¡Inicio de Sesión Exitoso!',
                'Has iniciado sesión correctamente. Bienvenido de vuelta al Teatro del Sol.',
                '✅',
                () => {
                    window.location.href = 'index.html';
                }
            );
        });
    }
});

// Efectos de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});