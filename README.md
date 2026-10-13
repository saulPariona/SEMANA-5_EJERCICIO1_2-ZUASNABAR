# Ejercicios de Laboratorio con React y Vite

Este repositorio contiene la solución a un laboratorio de desarrollo web enfocado en la estructuración de componentes, diseño responsivo con CSS puro y la transmisión de datos en React utilizando Vite como entorno de desarrollo.

---

## Captura del Proyecto

![Ejercicios de Laboratorio](./assets/tu-imagen.png)

---

## Descripción de los Ejercicios

El proyecto está compuesto por dos secciones principales basadas en los requerimientos del laboratorio:

### 1. Aplicación Web Responsiva (7 Componentes)
- **Estructura semántica:** Implementación de un diseño basado en bloques estructurales (section, nav, article, aside y footer).
- **Arquitectura modular:** Creación de 7 componentes independientes (uno para cada sección del diseño).
- **Diseño Responsivo Autónomo:** Adaptación visual diferente para PC, Tablet y Móvil utilizando CSS puro (Media Queries, Flexbox o Grid), sin librerías externas de estilos.

### 2. Transmisión de Datos Inter-Componentes
- **Componentes Anidados:** Estructura jerárquica de 4 niveles donde el Componente 1 contiene al Componente 2, este al Componente 3, y este al Componente 4.
- **Flujo de Datos:** Envío de un objeto de información desde la raíz (Componente 1) hasta el último nivel (Componente 4):
  ```javascript
  {
    nombre: "Jaime",
    direccion: "Jr. Junin 450",
    ciudad: "Huancayo"
  }
  ```
- **Visualización:** Presentación de los datos recibidos mediante una tarjeta contenedora (Card) en el Componente 4.

---

## Tecnologías Utilizadas

- React
- Vite
- CSS3 (Diseño responsivo)
- JavaScript (ES6+)

---

## Instalación y Uso Local

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/saulPariona/SEMANA6_EJERCICIO1_2_SUAZNABAR.git
   ```

2. **Ingresa a la carpeta del proyecto:**
   ```bash
   cd SEMANA6_EJERCICIO1_2_SUAZNABAR
   ```

3. **Instala las dependencias necesarias:**
   ```bash
   npm install
   ```

4. **Inicia el entorno de desarrollo:**
   ```bash
   npm run dev
   ```

5. Abre http://localhost:5173 en tu navegador para ver la aplicación.

---

## Autor

- **Saúl Pariona** - [saulPariona](https://github.com/saulPariona)
