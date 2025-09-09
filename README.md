
# NeonMint Template Documentation

![neonmint](https://github.com/user-attachments/assets/ae539704-2292-492f-882c-c90595b34717)


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
        │   ├── 📁blog   # All posts page
        │   │   ├── index.astro        # Blog home page
        │   │   ├── 📁posts            # Blog posts
        ├── │   ├── └── index.astro     # All posts page
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

   ### 🚀**Astro Installation**
   ```bash
   npm create astro@latest -- --template EFEELE/neonmint
   ```
   or
   ### 🔧**Manual Installation**
   
   #### Clone Repository
   ```bash
   git clone https://github.com/EFEELE/NeonMint.git
   ```
   #### Install Dependencies
   ```bash
   npm install
   ```

  

3. **⚡ Development**
   ```bash
   npm run dev
   ```

4. **🏗️ Build**
   ```bash
   npm run build
   ```

5. **👀 Preview**
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

---

### 🧷 Favicon Setup

To customize your site's favicon and web app icons, you can generate all the necessary variants using [favicon.io](https://favicon.io/favicon-converter/). Upload your logo or icon, and the tool will create a full set of optimized files for various devices and platforms.

Place the generated files in the `📂 public` directory as follows:

```bash
📂 public
├── 📄 android-chrome-192x192.png
├── 📄 android-chrome-512x512.png
├── 📄 apple-touch-icon.png
├── 📄 favicon-16x16.png
├── 📄 favicon-32x32.png
├── 📄 favicon.ico
└── 📄 site.webmanifest
```

> 💡 Don’t forget to update the contents of `site.webmanifest` to match your app’s name, description, and theme color for a complete PWA experience.

---

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

## 👥 Contributors  

A huge thanks to all the amazing people who have contributed to this project!  
Your time, effort, and ideas make this repository better every day. 💚  

<a href="https://github.com/EFEELE/NeonMint/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=EFEELE/NeonMint" />
</a>

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

