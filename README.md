<p align="center">
  <a href="" rel="noopener">
 <img width=128px src="./public/timer.png" alt="25 + 5 Timer"></a>
</p>

<h3 align="center">25 + 5 Timer</h3>

<div align="center"  style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap; justify-content:center" >
<div>

[![Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge&color=red)]()

</div>

<div>

![GitHub Issues](https://img.shields.io/github/issues/mohamedLamineF/25-5Clock_FCC?style=for-the-badge)

</div>

<div>

![GitHub Pull Requests](https://img.shields.io/github/issues-pr/MohamedLamineF/25-5Clock_FCC?style=for-the-badge)

</div>

<div>

![GitHub License](https://img.shields.io/github/license/MohamedLamineF/25-5Clock_FCC?style=for-the-badge&color=blue)

</div>
</div>

---

<div align="center" style="border: 2px solid #ccc; border-radius: 8px; padding: 20px; margin: 20px 0;">

This project was created as part of <strong style="color:#ddffee">**FreeCodeCamp's**</strong> **[Front End Development Libraries](https://www.freecodecamp.org/certification/MohamedLamineF/front-end-development-libraries)** certification. For more details, check out the **[project description](project-description.md)** file.

</div>

## 📝 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies)
- [Getting Started](#getting_started)
- [Project Structure](#structure)
- [Contributing](#contributing)
- [Other FCC Projects](#others)
- [Authors](#authors)
- [License](#license)

## ℹ️ About <a name = "about"></a>

This 25 + 5 Clock (also known as a Pomodoro Timer) is a time management tool that helps users break their work into focused intervals, traditionally 25 minutes in length, separated by short breaks.

## 🎥 Demo <a name = "demo"></a>

<p align="center" >
  <a href="https://timero-fcc.netlify.app/" rel="noopener">
<img src="./public/Screenshot.png" alt="25 + 5 Timer" style="border-radius:5%; margin:10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);"></a>
</p>

## ✨ Features <a name = "features"></a>

- 🕒 Customizable session and break lengths
- 🌓 Dark/Light mode with system preference detection
- 🔔 Audio alerts when timer completes
- ⏯️ Play/Pause functionality
- 🔄 Reset capability
- 📱 Responsive design

## 🛠️ Technologies Used <a name="technologies"></a>

- **React v17** (as per FreeCodeCamp requirements)
- **TypeScript** for static typing
- **Tailwind CSS** for styling
- **Vite** for fast development and bundling
- **ESLint** for code linting and quality control
- **Prettier** for code formatting
- **Lucide React** for icons and symbols

## 🏁 Getting Started <a name = "getting_started"></a>

Follow these steps to get a local copy up and running:

### 1. Prerequisites

- Node.js (version 12 or higher)
- npm (usually comes with Node.js)
- Git

### 2. Clone the Repository

```bash
git clone git@github.com:MohamedLamineF/25-5Clock_FCC.git
```

### 3. Navigate to the Project Directory

```bash
cd 25-5Clock_FCC
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
npm run dev
```

## 🌳 Project Structure <a name="structure"></a>

```
src/
├── components
│   ├── Layout
│   │   ├── footer.tsx
│   │   └── header.tsx
│   ├── Timer
│   │   ├── TimeControl.tsx
│   │   └── TimerDisplay.tsx
│   └── UI
│       └── ThemeToggle.tsx
├── hooks
│   ├── useDarkMode.tsx
│   └── useTimer.tsx
├── utils
│   └── timeFormatter.tsx
├── types
│   └── index.ts
|── App.tsx
└── main.tsx
```

## 🛠️ Contributing <a name="contributing"></a>

We welcome contributions! If you have ideas for improving this project, please feel free to:

- Open an **issue** to suggest changes or report bugs.
- Submit a **pull request** with your improvements.

## 🎯 Other FCC Projects <a name="others"></a>

Check out my other projects from the FreeCodeCamp Frontend Development Libraries certification:

- [Random DZ Quote Machine](https://github.com/MohamedLamineF/Random-DZ-Quote-Machine)
- [Markdown Previewer](https://github.com/MohamedLamineF/markdown-previewer-FCC)
- [JavaScript Calculator](https://github.com/MohamedLamineF/JavaScriptCalculatorFCC)
- [Drum Machine](https://github.com/MohamedLamineF/Drum_machine_FCC)

## ✍️ Authors <a name = "authors"></a>

Made with ❤️ by [Lamine](https://github.com/MohamedLamineF) 😛

# License <a name="license"> </a>

This project is licensed under the MIT License - see the [license](LICENSE) file for details.
