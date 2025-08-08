# ai-notes-app

![Next.js](https://img.shields.io/badge/-Next.js-blue?logo=nextjs&logoColor=white) ![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white)

## 📝 Description

Unlock your cognitive potential with ai-notes-app, a cutting-edge web application built with Next.js, React, and TypeScript. This application empowers you to effortlessly capture, organize, and synthesize your thoughts, ideas, and learnings. Experience a seamless and intuitive interface designed for optimal productivity. Whether you're a student, researcher, or creative professional, ai-notes-app provides the perfect digital canvas to nurture your intellectual growth and transform scattered thoughts into structured knowledge.

## ✨ Features

- 🕸️ Web


## 🛠️ Tech Stack

- next.js Next.js
- ⚛️ React
- 📜 TypeScript


## 📦 Key Dependencies

```
@ai-sdk/openai: ^2.0.0-alpha.12
@ai-sdk/react: ^2.0.0-alpha.12
@convex-dev/auth: ^0.0.87
@hookform/resolvers: ^5.1.1
@radix-ui/react-dialog: ^1.1.14
@radix-ui/react-dropdown-menu: ^2.1.15
@radix-ui/react-label: ^2.1.7
@radix-ui/react-slot: ^1.2.3
ai: ^5.0.0-alpha.12
class-variance-authority: ^0.7.1
clsx: ^2.1.1
convex: ^1.24.8
framer-motion: ^12.19.2
lucide-react: ^0.514.0
next: 15.3.3
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **start**: `npm run start`
- **lint**: `npm run lint`


## 📁 Project Structure

```
convex-aisdk-rag
├── components.json
├── convex
│   ├── _generated
│   │   ├── api.d.ts
│   │   ├── api.js
│   │   ├── dataModel.d.ts
│   │   ├── server.d.ts
│   │   └── server.js
│   ├── auth.config.ts
│   ├── auth.ts
│   ├── http.ts
│   ├── notes.ts
│   ├── notesActions.ts
│   ├── schema.ts
│   └── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── schema.ts
│   │   │   └── signin
│   │   │       ├── page.tsx
│   │   │       └── signin-form.tsx
│   │   ├── (main)
│   │   │   ├── layout.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── notes
│   │   │   │   ├── ai-chat-button.tsx
│   │   │   │   ├── create-note-button.tsx
│   │   │   │   ├── note-item.tsx
│   │   │   │   ├── note-preview-dialog.tsx
│   │   │   │   ├── notes-page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── sign-out-button.tsx
│   │   ├── convex-client-provider.tsx
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   ├── markdown.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── password-input.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── skeleton.tsx
│   │       ├── sonner.tsx
│   │       └── textarea.tsx
│   ├── lib
│   │   ├── embeddings.ts
│   │   └── utils.ts
│   └── middleware.ts
└── tsconfig.json
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/chamma08/ai-notes-app.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.
