# Poorva Yadav - Portfolio Website

A vintage scrapbook-style portfolio website built with React, TypeScript, Vite, and Tailwind CSS, featuring smooth animations and responsive design.

## 🎨 Features

- **Vintage Scrapbook Aesthetic**: Warm blue tones, paper textures, torn edges, and handcrafted elements
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Desktop navigation with vintage styling, mobile hamburger menu
- **Animated Sections**: Smooth scroll animations and hover effects
- **Local Image Support**: Organized folder structure for easy image management
- **Static Deployment Ready**: Built with Vite for fast development and deployment

## 📁 Project Structure

```
/
├── components/              # React components
│   ├── AboutSection.tsx     # About section with profile photo
│   ├── ContactSection.tsx   # Contact form
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── LandingSection.tsx   # Hero section with portfolio folder
│   ├── Navigation.tsx       # Responsive navigation
│   ├── ProjectSection.tsx   # Poster gallery showcase
│   ├── SkillsSection.tsx    # Skills and tools
│   └── figma/
│       └── ImageWithFallback.tsx # Image component with error handling
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Local images folder
│       ├── about/          # Profile and about images
│       ├── posters/        # Poster gallery images
│       ├── projects/       # Project showcase images
│       └── logos/          # Brand assets
├── styles/
│   └── globals.css         # Vintage-themed global styles
├── App.tsx                 # Main application component
├── main.tsx                # Application entry point
└── index.html              # HTML template
```

## 🖼️ Setting Up Local Images

### 1. Create the Images Folder Structure

Create the following folder structure in your `/public/images/` directory:

```
public/images/
├── about/
│   └── profile.jpg         # Your professional headshot
├── posters/
│   ├── music-festival.jpg
│   ├── environmental-campaign.jpg
│   ├── film-festival.jpg
│   ├── tech-conference.jpg
│   ├── art-exhibition.jpg
│   └── food-festival.jpg
├── projects/
│   ├── brand-identity.jpg
│   ├── ecommerce-app.jpg
│   ├── editorial-design.jpg
│   ├── website-redesign.jpg
│   ├── packaging-design.jpg
│   └── social-media.jpg
└── logos/
    └── portfolio-logo.png
```

### 2. Image Specifications

**Recommended image sizes and formats:**

- **Profile Photo**: 800x1000px (4:5 aspect ratio) - JPG/PNG
- **Poster Images**: 600x800px (3:4 aspect ratio) - JPG/PNG
- **Project Images**: 1200x800px (3:2 aspect ratio) - JPG/PNG
- **Logo**: 200x200px - PNG with transparency

### 3. Image Optimization Tips

- Keep file sizes under 500KB for better performance
- Use JPG for photographs, PNG for graphics with transparency
- Consider using WebP format for even better compression
- Images will automatically fallback to Unsplash stock photos if local images aren't found

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone/Download the project**

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Add your images**
   - Follow the folder structure above
   - Place your images in the respective folders
   - Update file names in the components if needed

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:5173](http://localhost:5173)** in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` folder, ready for deployment to any static hosting service.

## 📱 Responsive Design

The website is optimized for:

- **Desktop**: Full navigation, optimal spacing
- **Tablet**: Condensed layout, touch-friendly interactions
- **Mobile**: Hamburger menu, stacked layout, thumb-friendly buttons

## 🎨 Customization

### Colors & Theme

Edit `/styles/globals.css` to modify the vintage color palette:

```css
:root {
  --vintage-blue-primary: #4a5d7a;
  --vintage-cream: #f5f1e8;
  --vintage-brown: #8b6f47;
  --vintage-red: #b85c5c;
  /* Add your custom colors */
}
```

### Content

- **Personal Info**: Update name and details in components
- **Skills**: Modify the skills array in `SkillsSection.tsx`
- **Experience**: Update work history in `ExperienceSection.tsx`
- **Projects**: Add your poster projects in `ProjectSection.tsx`

## 📧 Contact Form

The contact form uses Formspree for form handling:

1. **Setup**: The form is already configured to use Formspree
2. **Email**: Replace the Formspree endpoint in `ContactSection.tsx` with your own
3. **Validation**: Built-in form validation and error handling

## 📊 Performance

- **Images**: Automatic fallback and lazy loading
- **Animations**: Optimized motion components
- **Bundle Size**: Minimal dependencies
- **Responsive**: Mobile-first approach

## 🚀 Deployment

This portfolio is ready for deployment to static hosting services:

### Recommended Platforms

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **Surge.sh**: Simple command-line deployment

### Deployment Steps

1. Build the project: `npm run build`
2. Upload the `dist/` folder to your hosting service
3. Configure custom domain (optional)

## 🎯 Next Steps

- [ ] Add your actual images to replace stock photos
- [ ] Customize content with your information
- [ ] Set up Formspree endpoint for contact form
- [ ] Add Google Analytics or similar tracking
- [ ] Deploy to your preferred hosting platform

## 📄 License

This portfolio template is free to use and modify for personal projects.

---

**Happy showcasing! 🎨✨**