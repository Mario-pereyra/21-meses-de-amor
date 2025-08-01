# 💕 Página Web de Aniversario: "Nuestro Viaje de 21 Meses" 💕

Una página web romántica y elegante para celebrar 1 año y 9 meses de amor. Diseñada como una carta de amor digital con efectos especiales y una experiencia emotiva.

## 🌟 Características

- **Diseño Responsivo**: Se adapta perfectamente a móviles, tablets y escritorio
- **Animaciones Suaves**: Efectos de entrada, hover y scroll para una experiencia mágica
- **Tipografía Elegante**: Combinación de Dancing Script y Playfair Display
- **Efectos Románticos**: Corazones flotantes, partículas y nieve de corazones
- **Galería Interactiva**: Placeholders para 5 fotos especiales con efectos hover
- **Reproductor de Música**: Botón para ambientar con música romántica
- **Colores Románticos**: Paleta de crema, rosa pálido, dorado suave y rojo vino

## 🚀 Cómo usar

1. **Abrir la página**: Simplemente abre `index.html` en tu navegador favorito
2. **Añadir fotos**: Reemplaza los placeholders en la galería con tus fotos favoritos
3. **Personalizar**: Modifica el texto, colores o efectos según tus preferencias
4. **Compartir**: Envía el enlace o comparte la experiencia

## 📁 Estructura del proyecto

```
MasitaProyect/
├── index.html          # Página principal con toda la estructura
├── styles.css          # Estilos CSS con diseño romántico
├── script.js          # JavaScript para interacciones y efectos
└── README.md          # Este archivo de documentación
```

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #f8f4f0;      /* Color de fondo principal */
    --accent-pink: #f2d7d5;        /* Rosa suave para acentos */
    --accent-gold: #daa520;        /* Dorado para detalles */
    --wine-red: #722f37;           /* Rojo vino para títulos */
}
```

### Añadir Fotos
1. Coloca tus fotos en una carpeta `images/`
2. Reemplaza los placeholders en `index.html`:
```html
<div class="photo-placeholder photo-1">
    <img src="images/tu-foto.jpg" alt="Descripción">
</div>
```

### Cambiar el Texto
Modifica directamente el contenido en `index.html` en la sección `.letter-content`

### Añadir Música
1. Añade un archivo de audio (MP3, OGG) a tu proyecto
2. Modifica la función `setupMusicPlayer()` en `script.js` para incluir tu audio:
```javascript
const audio = new Audio('tu-cancion.mp3');
audio.loop = true;
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Flexbox, Grid, animaciones y transiciones
- **JavaScript ES6+**: Interacciones dinámicas y efectos
- **Google Fonts**: Dancing Script y Playfair Display
- **Font Awesome**: Iconos elegantes

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Móviles (iOS/Android)

## 🎯 Características Especiales

### Efectos Interactivos
- **Corazones Flotantes**: Animaciones de fondo románticas
- **Efecto Typewriter**: El título se escribe gradualmente
- **Partículas al Hover**: Efectos especiales en los placeholders
- **Nieve de Corazones**: Corazones que caen ocasionalmente
- **Animaciones de Scroll**: Elementos aparecen suavemente

### Mensajes Personalizados
- Notificaciones de música
- Mensajes para cada placeholder de foto
- Mensaje de bienvenida al cargar

### Responsive Design
- Adaptación automática a diferentes tamaños de pantalla
- Optimización para móviles
- Botones y texto legibles en cualquier dispositivo

## 💡 Ideas para Mejorar

1. **Añadir Audio Real**: Incluye tu canción favorita
2. **Galería de Fotos**: Implementa un lightbox para ver fotos en grande
3. **Animaciones Adicionales**: Más efectos de partículas
4. **Modo Nocturno**: Versión oscura para visualización nocturna
5. **Contador de Tiempo**: Mostrar días exactos desde que están juntos

## 📝 Notas Técnicas

- No requiere servidor web, funciona abriendo directamente el archivo HTML
- Todas las dependencias (fuentes, iconos) se cargan desde CDN
- Optimizado para rendimiento con lazy loading de efectos
- Código limpio y bien documentado para fácil personalización

## 💖 Mensaje Especial

Esta página fue creada con mucho amor y cariño para celebrar momentos especiales. Cada detalle fue pensado para transmitir emociones y crear una experiencia memorable.

¡Que disfruten de este hermoso viaje juntos! 🥰

---

*Creado con 💕 para celebrar el amor*
