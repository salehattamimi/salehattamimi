# Saleh Attamimi - Portfolio Website

Modern, interactive portfolio website with dark/light theme showcasing 15+ projects and 5+ years of full-stack development experience.

## 🚀 Features

- ✅ **Dark/Light Theme** - Seamless theme switching with persistent preference
- ✅ **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ✅ **Interactive Animations** - Smooth transitions with Framer Motion
- ✅ **Featured Projects** - Spotlight on Smart Government & Sibengki with detailed case studies
- ✅ **Tech Stack Showcase** - Visual representation of technical capabilities
- ✅ **Contact Form** - Direct communication channel
- ✅ **SEO Ready** - Optimized for search engines
- ✅ **Fast Performance** - Built with Vite for lightning-fast development and production

## 🛠 Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Ready for Vercel, Netlify, or any static hosting

## 📦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Visit [http://localhost:5173](http://localhost:5173) to see your portfolio!

## 🎨 Customization Guide

### 1. Personal Information - Hero Section
File: `src/components/Hero.tsx`
- Update name, title, and description
- Change social media links (GitHub, LinkedIn, Email)
- Modify tech stack badges

### 2. Projects Showcase
File: `src/components/Projects.tsx`
- Add your own projects to the `projects` array
- Update project images, descriptions, and tags
- Add case studies for featured projects
- Set `featured: true` for spotlight projects

### 3. Tech Stack & About
File: `src/components/About.tsx`
- Update your professional story
- Modify tech stack categories (frontend, backend, database, tools)
- Customize highlights and capabilities

### 4. Services
File: `src/components/Services.tsx`
- Update services you offer
- Modify service descriptions and features

### 5. Contact Information
File: `src/components/Contact.tsx`
- Update email, location, and social links
- Integrate contact form with EmailJS or backend API

### 6. Theme Colors
File: `tailwind.config.js`
- Customize primary colors to match your brand
- Current: Blue (#0ea5e9) - Change to your preference

### 7. Navbar Logo
File: `src/components/Navbar.tsx`
- Change "SA" to your initials or add a logo image

## 📝 Quick Customization Checklist

Before deployment:
- [ ] Update name and title
- [ ] Add real projects (6-8 recommended)
- [ ] Update contact information
- [ ] Add project images/screenshots
- [ ] Write case studies for 2-3 featured projects
- [ ] Update tech stack to match your skills
- [ ] Customize color scheme
- [ ] Add professional photo (optional)
- [ ] Update social media links

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Deploy automatically
4. Add custom domain (optional)

### Netlify
```bash
npm run build
# Deploy 'dist' folder to Netlify
```

## 📱 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Navigation with theme toggle
│   ├── Hero.tsx         # Landing section
│   ├── About.tsx        # About & tech stack
│   ├── Projects.tsx     # Portfolio showcase
│   ├── Services.tsx     # Services offered
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── contexts/
│   └── ThemeContext.tsx # Dark/light theme logic
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Tailwind setup
```

## 🎯 Next Steps

1. **Replace placeholder content** with your actual information
2. **Add real project images** (screenshots, mockups, or photos)
3. **Write detailed case studies** for your best 2-3 projects
4. **Test responsiveness** on different devices
5. **Deploy to production** (Vercel recommended)
6. **Buy custom domain** (optional but recommended)
7. **Add to your resume** and social profiles

## 💡 Tips

- Use high-quality images (min 800px width)
- Keep descriptions concise and impactful
- Highlight measurable results in case studies
- Update projects regularly
- Add testimonials from clients (if available)

## 🤝 Support

For customization help:
- Check component comments for guidance
- Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
- Framer Motion: [framer.com/motion](https://www.framer.com/motion)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
# salehattamimi
