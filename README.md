# Yash Kishore — Portfolio

<p align="center">
  <img src="assets/head.png" alt="Personal Logo" width="500">
</p>

**A personal portfolio with a game-inspired interface.**

A portfolio website built around the idea of a pixel-art game menu. An animated landscape sets the scene, while a stone-style window reveals projects, skills, experience and other details through a tabbed interface.

Built with plain HTML, CSS and JavaScript, with no frameworks, bundlers or build step.

<p align="left">
  <a href="https://krispycrumbz.github.io/Portfolio/">
    <img src="https://img.shields.io/badge/Live%20Demo-View%20Portfolio-185034?style=flat-square" alt="Live demo">
  </a>
  <img src="https://img.shields.io/badge/HTML5-Markup-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">
</p>

---

## Overview

Rather than using a conventional portfolio layout, this project presents personal and technical information through a small, interactive game-inspired environment.

The opening screen features a pixel landscape rendered on a canvas. From there, visitors can open a stone-style window and navigate between sections without leaving the main interface.

The design combines pixel-art styling with practical navigation, keeping the experience distinctive while making the underlying portfolio content easy to explore.

## Features

| Feature | Description |
| --- | --- |
| Pixel-art title screen | An animated landscape rendered dynamically using the HTML canvas API. |
| Day and night themes | Follows the system colour scheme by default, with a toggle that remembers the user's preference. |
| Tabbed navigation | Browse About, Projects, Skills, Experience and Contact within a single interface. |
| Direct section links | URL hashes allow visitors to link directly to individual sections. |
| Skills inventory | Skills appear in an inventory-style grid, with selectable slots showing where each skill has been used. |
| Coursework details | University coursework is listed alongside the programming languages and tools used. |
| Keyboard navigation | Supports arrow keys, Enter and Escape for navigating the interface. |
| Reduced-motion support | Accommodates visitors who prefer less animation. |

## Technical implementation

The project uses browser-native technologies and keeps its JavaScript organised into small, purpose-specific files.

- **Canvas rendering:** `scene.js` draws the pixel landscape, allowing the scene to be generated directly in the browser.
- **Theme management:** `theme.js` handles the day/night toggle and saved theme preference.
- **Navigation:** `nav.js` controls the title screen, tabbed window and section navigation.
- **Data-driven skills:** `skills-data.js` separates skill information from `skills.js`, which builds the inventory interface.
- **DOM interactions:** `contact.js` handles the copy-email interaction.
- **Design tokens:** `tokens.css` centralises colours and fonts for both themes, while `styles.css` defines layout and component styling.

Scripts are loaded directly from `index.html`, with no compilation or bundling required.

## Project structure

```text
Portfolio/
├── index.html          # Page structure and portfolio content
├── css/
│   ├── tokens.css      # Colours, fonts and theme variables
│   └── styles.css      # Layout and interface components
└── js/
    ├── scene.js        # Canvas landscape rendering
    ├── theme.js        # Day/night theme management
    ├── nav.js          # Title screen and tab navigation
    ├── skills-data.js  # Skills and related information
    ├── skills.js       # Inventory grid generation
    └── contact.js      # Copy-email interaction
```

## Updating the portfolio

Content and styling are separated so that common changes can be made without modifying the entire application.

| To change | File |
| --- | --- |
| Portfolio text, projects, coursework and contact details | `index.html` |
| Skills and their associated information | `js/skills-data.js` |
| Colours, fonts and theme variables | `css/tokens.css` |
| Layout and interface components | `css/styles.css` |
| Landscape appearance and animation | `js/scene.js` |
| Navigation behaviour | `js/nav.js` |

## Design

The visual direction takes inspiration from pixel-art games and RPG inventory interfaces, using a landscape title screen, a stone-style content window and a structured skills grid.

Typography uses [Silkscreen](https://fonts.google.com/specimen/Silkscreen) and [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans), both licensed under the SIL Open Font License.

The day and night themes allow the interface to adapt to different viewing preferences while maintaining the same visual identity.

## Future improvements

- Expand project write-ups with implementation details and links to source code.
- Add further interaction details while maintaining keyboard accessibility.
- Refine the landscape animation and responsive behaviour across screen sizes.
- Continue improving accessibility for different input methods and motion preferences.

---

*Designed and built by Yash Kishore.*