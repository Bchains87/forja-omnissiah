# 🛡 FORJA DEL OMNISSIAH — v2.0

Catálogo digital de figuras impresas en resina 3D.
**Warhammer 40K, Age of Sigmar y Universos Alternativos.**

---

## 📁 Estructura del proyecto

```
forja-omnissiah/
├── index.html          ← Página principal (abrir en navegador)
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   ├── data.js         ← Datos del catálogo (facciones, precios)
│   ├── cart.js         ← Lógica del carrito de presupuesto
│   └── catalog.js      ← Render, búsqueda y navegación
└── img/
    ├── LEEME.md        ← Instrucciones para agregar fotos
    └── (tus fotos aquí)
```

---

## 🚀 Cómo usar

1. Abre `index.html` en tu navegador (doble clic o arrastra al navegador).
2. Navega por las facciones en el sidebar izquierdo.
3. Usa el buscador para encontrar unidades específicas.
4. Agrega unidades al presupuesto con el botón **🛒 AL PRESUPUESTO**.
5. El botón flotante (🛒) abre el panel de presupuesto.
6. Desde el panel puedes enviar el presupuesto por WhatsApp o descargar un .txt.

---

## ✏️ Personalización rápida

### Cambiar número de WhatsApp
En `js/cart.js`, busca:
```javascript
Cart.exportWhatsApp('56900000000')
```
En `index.html`, línea ~115, y cambia el número.

También en `js/catalog.js`, en la función `buildCard()`:
```javascript
href="https://wa.me/56900000000?text=..."
```

### Cambiar usuario de Instagram
En `js/catalog.js`, busca:
```javascript
href="https://instagram.com/TU_USUARIO"
```
Y reemplaza `TU_USUARIO` con tu handle real.

### Agregar/editar unidades
Edita `js/data.js`. Cada unidad tiene esta estructura:
```javascript
{ name: 'Nombre', type: 'infantry|elite|hero|vehicle', price: 20000, img: null }
```
- Para agregar imagen: pon el nombre del archivo en `img` (ejemplo: `'mi-figura.jpg'`)
  y coloca el archivo en la carpeta `img/`.

### Modificar precios
Todo está en `js/data.js`. Los precios son números enteros en CLP sin puntos
(ejemplo: `20000` para $20.000).

---

## 🎨 Tipos de unidades

| Tipo       | Color   | Descripción          |
|------------|---------|----------------------|
| `infantry` | Verde   | Infantería básica    |
| `elite`    | Azul    | Élite / escuadras    |
| `hero`     | Dorado  | Personajes / héroes  |
| `vehicle`  | Rojo    | Vehículos / monstruos|

---

## 📌 Notas

- El carrito de presupuesto es solo referencial, **no procesa pagos**.
- Los precios están en CLP (pesos chilenos).
- Compatible con Chrome, Firefox, Edge y Safari modernos.
- No requiere servidor ni instalación: funciona directo desde el archivo `index.html`.
