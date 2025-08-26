# 🚀 Portafolio de Arián Cejas

## 📋 Descripción

Portafolio personal desarrollado con **Next.js** y **TypeScript** que presenta mi perfil profesional de manera interactiva y moderna. El diseño simula una terminal de comandos con estética cyberpunk, donde los visitantes pueden navegar por mi experiencia y proyectos de forma dinámica.

## ✨ Características

- **Terminal Interactiva**: Interfaz que simula una consola de comandos
- **Navegación por Comandos**: Sistema de navegación basado en comandos de terminal
- **Animaciones de Tipeado**: Efecto de escritura automática para los resultados
- **Diseño Responsivo**: Adaptable a dispositivos móviles y desktop
- **Tema Oscuro**: Estética cyberpunk con colores verde y negro
- **Autoscroll**: Navegación automática hacia abajo con efecto smooth

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utilitario
- **React Hooks** - Estado y efectos del componente
- **CSS Modules** - Estilos modulares

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd arian-cejas-portafolio-v1
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📱 Uso del Portafolio

### Navegación por Comandos
El portafolio funciona como una terminal real:
- **Comandos disponibles**: Se muestran como enlaces clickeables
- **Navegación**: Cada comando te lleva a una nueva sección
- **Botón ATRÁS**: Para regresar a la sección anterior
- **Autoscroll**: La terminal se desplaza automáticamente hacia abajo

### Secciones Disponibles
- **PRESENTACIÓN**: Información personal y perfil profesional
- **EXPERIENCIA**: Trayectoria laboral y proyectos
- **HABILIDADES**: Tecnologías y herramientas que manejo
- **PROYECTOS**: Portfolio de trabajos realizados
- **CONTACTO**: Información para comunicación

## 🎨 Personalización

### Colores del Tema
- **Verde principal**: `#22c55e` (Terminal green)
- **Verde oscuro**: `#166534` (Borders)
- **Verde claro**: `#4ade80` (Hover effects)
- **Fondo**: Negro puro con gradientes sutiles

### Estilos Responsivos
- **Móvil**: Texto compacto (10px) con espaciado reducido
- **Tablet**: Texto medio (12px) con espaciado moderado
- **Desktop**: Texto completo (14px) con espaciado amplio

## 📁 Estructura del Proyecto

```
src/
├── app/                 # Páginas y layout principal
├── components/          # Componentes reutilizables
│   ├── terminal.tsx    # Terminal principal
│   ├── ui/             # Componentes de UI base
│   └── icons/          # Iconos SVG personalizados
├── constants/           # Comandos y configuración
└── lib/                 # Utilidades y helpers
```