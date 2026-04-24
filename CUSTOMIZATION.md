# CUSTOMIZATION QUICK GUIDE

## 🎯 Most Common Tasks

### Change Your Name
**File:** `src/components/Hero.tsx` (Line 28)
```typescript
<span className="gradient-text">Saleh Attamimi</span>
// Change to: Your Name
```

### Update Email & Socials
**File:** `src/components/Hero.tsx` (Line 6-10)
```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/YOUR_USERNAME' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_USERNAME' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL' },
];
```

**File:** `src/components/Contact.tsx` (Line 25-44)
```typescript
const contactInfo = [
  { icon: Mail, value: 'YOUR_EMAIL@gmail.com', href: 'mailto:YOUR_EMAIL' },
  // ... update others
];
```

### Add Your Projects
**File:** `src/components/Projects.tsx` (Line 27+)

**Simple Project (No Case Study):**
```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Brief description of what it does...',
  image: 'https://images.unsplash.com/photo-xxxxx',
  tags: ['React', 'Node.js', 'MongoDB'],
  featured: false,
  category: 'Full Stack',
}
```

**Featured Project (With Case Study):**
```typescript
{
  id: 1,
  title: 'Your Best Project',
  description: 'This project is featured...',
  image: 'https://your-image.jpg',
  tags: ['React', 'Laravel', 'MySQL'],
  featured: true, // This makes it featured!
  category: 'Full Stack',
  caseStudy: {
    problem: 'What was the challenge?',
    solution: 'How did you solve it? What tech did you use?',
    impact: 'Results: X% improvement, Y users, etc.',
    tech: ['React', 'Laravel', 'MySQL', 'AWS'],
  },
}
```

### Change Brand Color
**File:** `tailwind.config.js` (Line 11)

Current color: **Blue** (#0ea5e9)

To change to **Purple**:
```javascript
primary: {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d5ff',
  300: '#d8b4fe',
  400: '#c084fc', // Light (dark mode)
  500: '#a855f7', // Main
  600: '#9333ea', // Dark (light mode)
  700: '#7e22ce',
  800: '#6b21a8',
  900: '#581c87',
}
```

**More Color Options:**
- Green: Use #10b981 as base
- Orange: Use #f59e0b as base
- Red: Use #ef4444 as base
- Teal: Use #14b8a6 as base

Generator: [uicolors.app](https://uicolors.app/create)

### Update Tech Stack
**File:** `src/components/About.tsx` (Line 7-12)
```typescript
const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Vue.js'],
  backend: ['Laravel', 'Node.js', 'Django', 'Express'],
  database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  tools: ['Git', 'Docker', 'AWS', 'Figma'],
};
```

### Update Services You Offer
**File:** `src/components/Services.tsx` (Line 6-42)
```typescript
const services = [
  {
    icon: Globe, // Icon from lucide-react
    title: 'Service Name',
    description: 'What you do...',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  // Add more...
];
```

---

## 📸 Adding Project Images

### Option 1: Use Unsplash (Free Stock Photos)
1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant images (laptop, code, dashboard, etc.)
3. Copy image URL (add `?w=800&q=80` for optimization)
4. Use in your project:
```typescript
image: 'https://images.unsplash.com/photo-xxxxx?w=800&q=80'
```

### Option 2: Use Your Own Screenshots
1. Take screenshots of your projects
2. Put images in `src/assets/` folder
3. Import in component:
```typescript
import projectImg from '../assets/my-project.png'

// In project object:
image: projectImg
```

### Option 3: Use Mockups
Create professional mockups at:
- [Shots.so](https://shots.so) - Browser mockups
- [Screely](https://screely.com) - Device mockups
- [Mockuphone](https://mockuphone.com) - Phone mockups

---

## 🚀 Deploying Your Portfolio

### Step-by-Step Vercel Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! 🎉

3. **Custom Domain (Optional)**
   - Buy domain (Namecheap, GoDaddy, Cloudflare)
   - In Vercel: Settings → Domains → Add domain
   - Update DNS records as shown
   - Wait 24-48 hours

---

## 📋 Pre-Deployment Checklist

Before going live, make sure:

- [ ] **Changed name** from "Saleh Attamimi" to yours
- [ ] **Updated email** and social links
- [ ] **Added 6-8 real projects** with descriptions
- [ ] **Uploaded project images** (not placeholder images)
- [ ] **Written case studies** for 2-3 best projects
- [ ] **Updated tech stack** to match your skills
- [ ] **Changed logo/initials** in navbar
- [ ] **Tested on mobile** (responsive design)
- [ ] **Updated contact form** or integrated with service
- [ ] **Checked all links** work correctly
- [ ] **Read through all content** for typos

---

## 🎨 Advanced Customization

### Add a Blog Section (Future)
You can add a blog using:
- [Contentful](https://contentful.com) (Free tier)
- [Sanity.io](https://sanity.io) (Free tier)
- Markdown files (simple)

### Add Analytics
**Google Analytics:**
1. Get tracking ID from Google Analytics
2. Add to `index.html` `<head>` tag

**Vercel Analytics:**
- Enable in Vercel dashboard (free!)

### Add More Animations
Framer Motion docs: [framer.com/motion](https://www.framer.com/motion)

---

## 🆘 Troubleshooting

**"Module not found" error:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not working:**
```bash
# Restart dev server
# Press Ctrl+C to stop, then:
npm run dev
```

**Images not showing:**
- Check image URL is correct and accessible
- Use https:// URLs for external images
- Import local images properly

**Theme toggle not working:**
- Check localStorage in browser DevTools
- Clear cache and reload

---

## 📞 Need Help?

Common resources:
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)
- [Framer Motion](https://framer.com/motion)
- [Lucide Icons](https://lucide.dev)

**This portfolio is yours now! Customize it, make it unique, and showcase your amazing work!** 🚀
