
### Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Colors used

primary #6090fa || #42c3ff
accent  #F9C80E || #fdcdee

## File Struture

project-root/
├── app/
│   ├── (auth)/
│   ├── admin/
│   ├── colors.css
│   ├── globals.css
│   └── layout.tsx
├── assets/
│   └── bg.jpg
├── components/
│   ├── auth/
│   ├── form-error.tsx
│   ├── form-success.tsx
│   ├── home/
│   ├── login-form.tsx
│   └── ui/
├── lib/
│   ├── firebase.js
│   ├── utils.ts
│   └── public/
│       ├── account.png
│       ├── account.svg
│       ├── bg1.jpg
│       ├── course1.jpg
│       ├── logo.svg
│       ├── next.svg
│       └── vercel.svg
├── schema/
│   └── index.ts
├── components.json
├── middleware.ts
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── TODO
└── tsconfig.json
