This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Setup Nextjs 13

```npx create-next-app@latest --experimental-app```

Need to install the following packages:
  create-next-app@13.2.1
Ok to proceed? (y) y
- What is your project named? … my-site
- Would you like to use TypeScript with this project? … No / Yes
- Would you like to use ESLint with this project? … No / Yes
- Would you like to use `src/` directory with this project? … No / Yes
- What import alias would you like configured? … @/*
Creating a new Next.js app in /Users/devesh/Documents/code/nextjs/my-site.

Using npm.

Initializing project with template: app


Installing dependencies:
- react
- react-dom
- next
- typescript
- @types/react
- @types/node
- @types/react-dom
- eslint
- eslint-config-next


added 269 packages, and audited 270 packages in 40s

102 packages are looking for funding
  run `npm fund` for details


  Next intall 
  file based routing
  page.txs is the index page

  File based routing
Next.js uses file-based routing. This means, instead of configuring a router yourself like you would with react-router or express for an API, you follow a set of folder and file naming conventions and Next.js will configure the router for you. It's really magical.


App directory
Next.js 13 introduces the app directory that expects you to follow file based routing. Previously, there was the pages directory (which still works with v13). They both can handle file based routing but in different ways. We'll mostly focus on the app directory and talk about the differences.

All pages must go in the app directory. To create routes, we create a folder with the path of the route, and then a page.{tsx, jsx, js}. For the index route, we don't need a folder, because the URL for the index page doesn't have a path. We can just create the page file.

export default function IndexPage() {
  return <div>home</div>;
}
For a route that has a named path, we can create a folder. For the contact page, we can create a folder called contact. Then in that folder, we can create the page.js file for the route. So you should have this ./app/contact/page.js which will create a route for /contact.

Dynamic routes
If your route path has a dynamic segment, we can define that as well. For our blog, the url would look like this /blog/:title. And our file structure will look similar: ./app/blog/[title]/page.js. We can access the route param inside our page component.

Grouping
You can group pages together without affecting the URL structure. You might want this to:

not spam the url with extra segments
opt into and out of certain layouts
create multiple root layouts (one for the marketing pages, one for the dashboard, etc.)
You can do this with the () syntax in the file structure:

- app
  - (marketing)
    - layout.tsx
    - blog
      - [title]
        - page.tsx
  - (dashboard)
    - layout.tsx
    - home
      - page.tsx
Above, we created two groups, marketing and dashboard. Each group has their own root layout, so we don't need a single root layout here. Also, the URL structure is not affected. The path for the dashboard home is /home and not /dashboard/home. And the route for a blog post would be /blog/learn-to-code and not /marketing/blog/learn-to-code. The group folders are ignored by the router. This means you have to be aware of potential route conflicts. If the marketing group had a home folder with a page, it would have a conflicting route with the dashboard home page.

Routes for our app
/ - home
/blog - blog home
/blog/:title - blog post
/contact - contact page
