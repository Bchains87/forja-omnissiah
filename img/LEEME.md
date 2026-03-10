# 📁 img/ — Carpeta de Imágenes

Aquí van las fotos de tus figuras.

## Convención de nombres

Para que el catálogo muestre las imágenes automáticamente, edita el campo `img`
en `js/data.js` con el nombre del archivo. Ejemplo:

```javascript
{ name: 'Librarian (1x)', type: 'hero', price: 15000, img: 'blood-angels-librarian.jpg' }
```

Luego coloca el archivo `blood-angels-librarian.jpg` en esta carpeta.

## Formatos soportados

| Formato | Extensión |
|---------|-----------|
| JPEG    | .jpg / .jpeg |
| PNG     | .png |
| WebP    | .webp |

## Recomendaciones

- **Resolución**: Mínimo 600×600 px (ratio 1:1 ideal para las cards)
- **Peso**: Menos de 500 KB por imagen para que cargue rápido
- **Nombre**: Sin espacios ni caracteres especiales (usa guiones: `space-marine-hero.jpg`)
