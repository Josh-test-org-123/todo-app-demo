# Todo App

A modern, beautiful todo application built with Next.js, TypeScript, and Tailwind CSS. Features a clean interface, local storage persistence, and is optimized for deployment on Cloudflare Pages.

## Features

- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Filter todos by status (all, active, completed)
- ✅ Local storage persistence
- ✅ Responsive design
- ✅ Modern UI with smooth animations
- ✅ Keyboard shortcuts (Enter to add/save, Escape to cancel)
- ✅ Clear completed todos functionality

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Local Storage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Cloudflare Pages

This app is configured for easy deployment on Cloudflare Pages with static export.

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to Pages → Create a project → Connect to Git
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `todo-app` (if in subdirectory)
6. Deploy!

### Method 2: Direct Upload

1. Build the project locally:

```bash
npm run build
```

2. Upload the generated `out` folder to Cloudflare Pages

### Build Configuration

The app uses these settings in `next.config.js` for static export:

- `output: 'export'` - Generates static files
- `trailingSlash: true` - Ensures proper routing
- `images: { unoptimized: true }` - Disables Next.js image optimization

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build and export static files
npm run export
```

## Project Structure

```
todo-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       └── TodoApp.tsx      # Main todo component
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies and scripts
```

## Features in Detail

### Todo Management

- Add new todos with the input field and "Add" button or Enter key
- Click the checkbox to mark todos as complete/incomplete
- Edit todos in place by clicking the edit icon
- Delete todos with the trash icon

### Filtering

- **All**: Show all todos
- **Active**: Show only incomplete todos
- **Completed**: Show only completed todos

### Data Persistence

- All todos are automatically saved to browser's local storage
- Data persists between browser sessions
- No backend required

### Responsive Design

- Works seamlessly on desktop, tablet, and mobile devices
- Clean, modern interface with smooth animations

## Customization

### Styling

The app uses Tailwind CSS for styling. Key design tokens:

- Primary color: Blue (blue-600)
- Success color: Green (green-600)
- Danger color: Red (red-600)
- Background: Gradient from blue-50 to indigo-100

### Extending Features

Some ideas for additional features:

- Due dates for todos
- Categories/tags
- Todo priorities
- Sync with cloud storage
- Collaborative todos

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Deployment Status

🚀 **Ready for Cloudflare Pages deployment!**

The app is configured with static export and will work perfectly on Cloudflare Pages with zero configuration needed.
