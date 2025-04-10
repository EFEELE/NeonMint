<<<<<<< HEAD

# NeonMint Template Documentation

![neonmint](https://github.com/user-attachments/assets/068da5e4-50c0-4134-99d3-8cb8ec867d9f)

## 🎯 Overview

**NeonMint** is a minimalist and modern template designed for developers and digital creatives. Its dark-toned aesthetic with mint green accents offers a clean, elegant, and functional visual experience, ideal for portfolios, dashboards, or tech landing pages.

## 📁 Project Structure

```bash
└── 📁NeonMint
    └── 📁public
        ├── android-chrome-192x192.png
        ├── android-chrome-512x512.png
        ├── apple-touch-icon.png
        ├── favicon-16x16.png
        ├── favicon-32x32.png
        ├── favicon.ico
        └── 📁images
            ├── 📁posts    # Post images
            └── 📁projects # Project images
        └── site.webmanifest # PWA configuration file
    └── 📁src
        ├── 📁components  # Reusable UI components
        │   ├── 📁blog    # Blog components
        │   ├── 📁layout  # Layout components
        │   ├── 📁portfolio # Portfolio components
        │   └── 📁ui      # UI components
        ├── 📁icons       # Icons (.svg)
        ├── 📁layouts     # Site layouts
        │   ├── Layout.astro           # Main application layout
        │   ├── MarkdownAbout.astro    # About-me page layout
        │   ├── MarkdownPostLayout.astro # Posts page layout
        │   └── ProjectLayout.astro    # Projects page layout
        ├── 📁pages       # Site pages
        │   ├── about-me.md            # About-me page
        │   ├── 📁blog
        │   │   ├── all-posts.astro    # All posts page
        │   │   ├── index.astro        # Blog home page
        │   │   ├── 📁posts            # Blog posts
        │   │   ├── 📁tags             # Blog tags
        │   │   └── 📁techs            # Blog technologies
        │   ├── index.astro            # Home page
        │   ├── 📁portfolio
        │   │   └── 📁projects         # Portfolio projects
        │   ├── robots.txt.ts          # robots.txt configuration
        │   └── rss.xml.js             # RSS configuration
        ├── 📁scripts
        │   └── menu.js                # Menu script
        ├── 📁styles
        │   └── global.css             # Global styles
        └── 📁utils
            └── languages.ts           # Technology tools configuration
    ├── .gitignore
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

## 🛠️ Technology Stack

- **Framework**: Astro v5.6.1
- **UI Library**: Preact v10.26.2
- **Styling**: TailwindCSS v4.0.8
- **Icons**: astro-icon v1.1.5
- **Syntax Highlighting**: PrismJS v1.30.0
- **Animations**: tailwindcss-animated v2.0.0
- **Analytics**: @vercel/speed-insights v1.2.0

## ✨ Key Features

1. **🚀 Performance Optimized**
   - Static site generation
   - Partial hydration with Preact
   - Optimized images and assets

2. **💻 Modern Development Experience**
   - TypeScript support
   - Hot module replacement
   - ESLint integration

3. **🔍 SEO & Analytics**
   - Built-in sitemap generation
   - RSS feed support
   - Vercel Speed Insights

4. **🎨 Styling & UI**
   - TailwindCSS for utility-first styling
   - Animated components
   - Responsive design
   - Dark mode support

## 🚀 Getting Started

1. **📦 Installation**
   ```bash
   npm install
   ```

2. **⚡ Development**
   ```bash
   npm run dev
   ```

3. **🏗️ Build**
   ```bash
   npm run build
   ```

4. **👀 Preview**
   ```bash
   npm run preview
   ```

## ⚙️ Configuration

The project is configured through several key files:

- `astro.config.mjs`: Main Astro configuration
- `tailwind.config.js`: TailwindCSS configuration
- `tsconfig.json`: TypeScript configuration

## 🎨 Customization

### 📄 Adding New Pages

Create new `.astro` files in the `src/pages` directory. The file name will determine the route.

### 🔧 Adding New Languages or Technologies

To incorporate a new programming language or technological tool into the site's capsules, follow these steps:

1. **🖼️ Add the SVG icon**: Place the SVG file of the language or tool in the `src/icons` folder.

        > **💡 Recommendation**: For SVG icons, I recommend using [SVGL](https://svgl.app/), an excellent library of high-quality vectors that offers optimized icons for most popular languages and technologies.

2. **📝 Register the language**: Open the `utils/languages.ts` file and add a new entry to the languages object following this format:

   ```typescript
   html: {
       name: "HTML 5",
       iconName: "html",
   },
   ```

   Where:
   - `html`: Is the unique identifier for the language
   - `name`: Is the name that will be displayed visibly in the interface
   - `iconName`: Is the name of the SVG file without the extension (must match exactly with the file name in `src/icons`)

Once these steps are completed, the new language or technology will be available for use in the site's capsules. You can select it when creating or editing projects or posts, and the corresponding icon will be displayed correctly in the interface.

If you encounter any issues during this process, try restarting the development server. In some cases, changes to configuration files or static resources require a restart to be detected correctly.

To verify that the new language has been added correctly, check the list of available technologies in the user interface after restarting the server.

### 🎨 Styling

- Use TailwindCSS classes for styling
- Add custom styles in `src/styles/global.css`

### 🧩 Components

- Create reusable components in `src/components`
- Import icons using `astro-icon`

## 🚀 Deployment

The site is configured for deployment on Vercel, but can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

=======
<p align="center">
  <img src="https://github.com/user-attachments/assets/1bc6aab2-d04e-4b93-a672-ba4fc401b972" height="300" />
</p>


<hr>

<h1 align="center">Hi, I'm <a href="https://github.com/Rafaz01">Rafael Gomez</a> <img src="https://github.com/Kathryn-Jie/Kathryn-Jie/blob/main/wave.gif" width="50px"/></h1>

<br>

## About Me! 😎

<img align="right" alt="GIF" height="160px" src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" />

- 🏫 A.S. in Programming & Analysis – Santa Fe College  
- 🌐 Building clean, responsive websites using WordPress, HTML/CSS, JS & SEO  
- 🔭 Currently learning React and modern frontend technologies  
- 💬 Ask me about web development, data analysis & SEO  
- ⚡ Fun fact: I play soccer in my free time ⚽  

---

## 📬 Get in Touch!

<p align="center">
  <a href="https://www.linkedin.com/in/rafael-gomez-uban-49b99b231/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="mailto:rgomezh02@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Gmail-rgomezh02@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://www.github.com/rafaz01" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
</p>

---

## 🛠️ Skills & Technologies

| ![Web Development](https://img.shields.io/badge/Web%20Development-blue?style=for-the-badge) | ![WordPress](https://img.shields.io/badge/WordPress-%23117AC9?style=for-the-badge&logo=wordpress&logoColor=white) | ![Elementor](https://img.shields.io/badge/Elementor-purple?style=for-the-badge&logo=elementor&logoColor=white) | ![SEO Basics](https://img.shields.io/badge/SEO%20Basics-green?style=for-the-badge) | ![Responsive Design](https://img.shields.io/badge/Responsive%20Design-orange?style=for-the-badge) |
|---|---|---|---|---|
| ![HTML5](https://img.shields.io/badge/HTML5-E44D27?style=for-the-badge&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1C?style=for-the-badge&logo=javascript&logoColor=black) | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) |
| ![SQL Server](https://img.shields.io/badge/SQL_Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github) | ![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) |

<!-- ## 🎨 Projects-->

<!-- [![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=Rafaz01&repo=another-repo)](https://github.com/Rafaz01/another-repo) -->
<!--  [![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=Rafaz01&repo=Finance-Dashboard-1&theme=dark)](https://github.com/Rafaz01/Finance-Dashboard-1)  -->

---

## 🏆 Certifications

<img alt="Static Badge" src="https://img.shields.io/badge/Computer_Programming_Specialist_Certificate-Santa_Fe_College-blue">
<img alt="Static Badge" src="https://img.shields.io/badge/Intro_to_Front--End_Development-Meta-blue">

---


## 🙌 Thanks for visiting!
>>>>>>> 232444744ddea3734bc7b7bc8250caeac88d12d1
