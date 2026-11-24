# 🚀 Software Engineering Portfolio

A modern, high-performance developer portfolio built for **Software Engineering undergraduates & graduates**. Tailored for showcasing **Full-Stack Web Development, Backend Microservices, Cloud Infrastructures, and AI / Machine Learning projects**.

---

## 🌟 Key Features

- **⚡ Modern Dark Tech Aesthetic**: Dark theme with cyan and emerald neon accents, glassmorphic panels, and glowing terminal badges.
- **🧩 100% Modular Data Architecture**: All your information (bio, skills, projects, education, social links) lives in one simple file: [`src/data/portfolioData.js`](file:///c:/Users/Dulith%20Thenuka/Downloads/New%20folder%20(8)/src/data/portfolioData.js).
- **📂 Interactive Project Showcase**: Filter projects dynamically by discipline (*Full-Stack*, *Backend & Cloud*, *AI & ML*), with live demo & GitHub repository shortcuts.
- **🛠️ Technical Arsenal Grid**: Categorized proficiencies with interactive icon badges and competency levels.
- **🎓 Degree & Academic Timeline**: Coursework, engineering achievements, and industry certification badges.
- **📬 Interactive Contact Hub**: Direct copy-to-clipboard email card, location display, and responsive contact form.

---

## 🛠️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ✏️ How to Personalize Your Portfolio

Simply open [`src/data/portfolioData.js`](file:///c:/Users/Dulith%20Thenuka/Downloads/New%20folder%20(8)/src/data/portfolioData.js) and update:
1. **Personal Details**: Your name, bio, email, GitHub, LinkedIn, and resume download link.
2. **Stats**: Your years in degree study, number of projects, and technologies.
3. **Skills**: Add or remove technologies from the 4 categories (*Full-Stack*, *Backend*, *Databases & Cloud*, *AI/ML*).
4. **Projects**: Add your own university projects or personal repositories, images, tech stack tags, and architecture metrics.
5. **Education**: Add your university name, GPA / honors, coursework, and certifications.

---

## 🌐 Free 1-Click Deployment Options

### Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository and click **Deploy**.

### GitHub Pages
1. Install `gh-pages`: `npm install gh-pages --save-dev`
2. Add `"base": "/<your-repo-name>/"` in `vite.config.js`.
3. Add `"deploy": "gh-pages -d dist"` to `package.json` scripts.
4. Run `npm run build && npm run deploy`.
