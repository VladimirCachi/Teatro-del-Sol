# Teatro del Sol - Sitio Web de Venta de Entradas

## Descripción
Sitio web para la venta de entradas de teatro con diseño moderno y funcional. Incluye todas las páginas requeridas para el trabajo práctico de Experiencia de Usuario.

## Páginas Incluidas
- **Home (index.html)**: Página principal con shows destacados
- **Cartelera (cartelera.html)**: Todas las obras en cartelera con filtros
- **Salas (salas.html)**: Información detallada de las salas del teatro
- **Registro (registro.html)**: Formulario de registro de usuarios
- **Compra (compra.html)**: Formulario de compra de entradas

## Características
- ✅ Diseño responsive (móvil y desktop)
- ✅ Navegación consistente en todas las páginas
- ✅ Formularios funcionales con validación
- ✅ Filtros interactivos en cartelera
- ✅ Cálculo automático de precios
- ✅ Códigos de descuento funcionales
- ✅ Google Analytics integrado
- ✅ Animaciones y efectos visuales

## Configuración de Google Analytics

### Paso 1: Crear cuenta en Google Analytics
1. Ve a [Google Analytics](https://analytics.google.com/)
2. Crea una cuenta si no tienes una
3. Crea una nueva propiedad para tu sitio web
4. Obtén tu ID de medición (formato: G-XXXXXXXXXX)

### Paso 2: Configurar el código
1. Abre todos los archivos HTML
2. Busca la línea: `gtag('config', 'GA_MEASUREMENT_ID');`
3. Reemplaza `GA_MEASUREMENT_ID` con tu ID real
4. Ejemplo: `gtag('config', 'G-ABC123DEF4');`

### Paso 3: Verificar funcionamiento
1. Sube el sitio a GitHub Pages
2. Visita tu sitio web
3. Ve a Google Analytics > Tiempo real
4. Deberías ver tu visita registrada

## Subir a GitHub y GitHub Pages

### Paso 1: Crear repositorio en GitHub
1. Ve a [GitHub](https://github.com)
2. Haz clic en "New repository"
3. Nombre: `teatro-del-sol` (o el que prefieras)
4. Marca "Public"
5. No inicialices con README (ya tenemos uno)

### Paso 2: Subir archivos
```bash
# En tu terminal, navega a la carpeta del proyecto
cd "C:\Users\User\OneDrive\Escritorio\Esc. de Minas-Facultad\Herramientras Informaticas Avanzadas\TP8"

# Inicializar git
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Sitio web Teatro del Sol - Trabajo Práctico UX"

# Conectar con GitHub (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/teatro-del-sol.git

# Subir archivos
git branch -M main
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en "Settings"
3. Scroll hasta "Pages" en el menú lateral
4. En "Source" selecciona "Deploy from a branch"
5. Selecciona "main" branch
6. Haz clic en "Save"
7. Tu sitio estará disponible en: `https://TU_USUARIO.github.io/teatro-del-sol`

## Funcionalidades del Sitio

### Página Principal
- Hero section con imagen de fondo
- Shows destacados con información completa
- Información del teatro
- Navegación fácil a otras secciones

### Cartelera
- Filtros por categoría (Drama, Comedia, Musical, Infantil)
- Información detallada de cada obra
- Precios y horarios
- Enlaces directos a compra

### Salas
- 4 salas diferentes con características únicas
- Información de capacidad y equipamiento
- Imágenes representativas
- Historia del teatro

### Registro
- Formulario completo con validación
- Beneficios de registrarse
- Términos y condiciones
- Validación de contraseñas

### Compra de Entradas
- Selección de cantidad y tipo de entrada
- Cálculo automático de precios
- Códigos de descuento funcionales
- Múltiples métodos de pago
- Resumen de compra en tiempo real

## Códigos de Descuento Disponibles
- `estudiante` - 20% descuento
- `jubilado` - 15% descuento  
- `primera` - 10% descuento
- `teatro10` - 10% descuento

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con Flexbox y Grid
- JavaScript vanilla
- Google Fonts
- Unsplash para imágenes
- Google Analytics

## Estructura de Archivos
```
├── index.html          # Página principal
├── cartelera.html      # Cartelera de obras
├── salas.html          # Información de salas
├── registro.html       # Formulario de registro
├── compra.html         # Formulario de compra
├── styles.css          # Estilos principales
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## Notas para el Trabajo Práctico
- ✅ Todas las páginas requeridas están implementadas
- ✅ Google Analytics está configurado (necesita ID real)
- ✅ Diseño responsive y moderno
- ✅ Funcionalidad de compra simulada
- ✅ Navegación consistente
- ✅ Formularios con validación
- ✅ Listo para subir a GitHub Pages

## Contacto
Para cualquier duda sobre la implementación, revisa el código fuente o consulta la documentación de las tecnologías utilizadas.
