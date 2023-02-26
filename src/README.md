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
## best github repo:
Open [VERCEL GITHUB](https://github.com/vercel/commerce) git for versel

https://github.dev/vercel/commerce

```
```

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

TOPICS:
https://intro-nextjs-v2-instructions.vercel.app/

TABLE OF CONTENTS
- Welcome
  - Introduction
  - Overview
- Next.js
  - Introduction-
  - What is Next.js
  - Getting Started
- Pages
  - Defining routes
  - Layouts and Pages
  - Navigation
- Rendering
  - Server Components
  - Client Components
- Data Fetching
  - Fetching data
  - Static Params
  - Special Pages
  - Fetchig data
- Styling
  - Global and External Css
  - Css Modules
- Futher Learning
  - Learn More

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
```
export default function IndexPage() {
  return <div>home</div>;
}
```
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


Lession 3:
Head component
Our app needs a head component in the app directory.
 This will hold the meta and title tags for our application.
```
// ./app/head.tsx
export default function Head() {
  return (
    <>
      <title></title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
```

Layouts
Layouts are components that wrap our pages. We can use them when we want to keep certain UI elements on page across routes. Things like a navigation bar, footer, layout, etc. We need to create a root layout. You must have a root layout when using the app directory.
```
// ./app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
```

Nested Layouts
It's required to have a root layout, but we can also have multiple nested layouts that render inside each other. You simply have to create a layout file in the route folder. By default, the layouts will nest.

*****************

LAYOUT PAGE DON'T GET RE-RENDER EVERY TIME ON PAGE LOAD, TSX OR JS PAGE GET RELOADED

*****************
Programatic usage
If you need to navigate between pages programmatically instead of when a user clicks. First, you must understand that this only works in client components, we'll get there later. Next.js provides a hook we can use that creates a router object for that has helpful navigation methods on it.
```
"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/blog")}>
      Blog
    </button>
  );
}
```
****************

Every thing here is server component, but need to use client component when require, navigation page, form submit etc.


Finally, we've been talking about server components a lot, so what are they? Server components are a concept created on the React.js level. You can checkout the RFC here.


Server components are components that never leave the server, so there is never any JavaScript that gets shipped to the client. This means that server components can't use things like hooks and client-side APIs that the browser provides. The results of rendering these components are streamed to the client and cached on a per route segment basis. By default, all components in the app directory in Next.js are server components.

Server components vs SSR
Traditional SSR is when a component is rendered on the server and the HTML is serialized and sent to the browser, not streamed. Then the client picks up and re-renders the same thing where it then takes over. So you're still shipping JS to the client.

When to use Server components
You should always just use server components until you have a need for some client side interaction or using a 3rd party lib.

Next.js v13 extends the fetch API to achieve a more efficient way to fetch data from the server using Server Components. The fetch API

Server Components
// Never leave server, don't have state, async data fetching, executed on server

****************************************************************

Client components are the standard React components that you've come to love and know. Full access to browser APIs, hooks, state, interactivity.

How to use
We simply need to tell React that a component be a client component. Just add the 'use client' directive at the top of any component you want to be a client component.
```
"use client";

// regular component
const ContactForm = () => {
  const [state, setState] = useState({email: ''});
  const handleChange = () => {
    //....
  }
  const handleSubmit = () => {
    //....
  }

  return (
    <form onSubmit={...}>
      <input value={state.email} onChange={handleChange}/>
    </form>
  )
};

```

### When to use
If your components need hooks like useState and useEffect, then they need to be a client component.


Also, there are 3rd party components that have yet to add the "use client" directive. You will have to wrap them in your own client components.

## When to use client vs server components.
Basically always use server components for all of your components unless it falls in 1 or more of these:

## Client Components
// use like same you have been doing in react, but only use 
```"use client"```

## use of Client Components
- It needs interactivity and event listeners (onClick(), onChange(), etc)
- It uses State and Lifecycle Effects (useState(), useReducer(), useEffect(), etc)
- It uses browser-only APIs
- It needs custom hooks that depend on state, effects, or browser-only APIs
- It uses React Class components


****************************************************************

## USE PAGE DIRECTORY FOR API CALLS


### Server components
Pages and Layouts might need data before they render. Tapping into APIs, databases, and other sources. Data is cached and streamed to the client automatically. It is recommended to fetch data in server components so the backend can handle this. There are a few reasons for this:

They have access to backends DBs
Keeping your app more secure by not exposing API keys and other secrets to the client
Reduce the load on the main thread in the browser by having both fetching and rendering happening in the same environment on the server
...and many more reason

### Fetch
React extends the fetch function to provide automatic request deduplication. This is on a per request basis. Next.js extends fetch by allowing us to customuze how we cache certain data. We can access fetch globally without any imports and it works mostly the same.
```
fetch("https://api.data.com/...");

By default, fetch will cache all results, which is great for static data. But for dynamic data, you can skip the caching.

fetch("https://api.data.com/...", { cache: "no-store" });

```
#### Async components
For server components, we can use async/await on the component level to get our data.
```
const getData = async () => {
  const res = await fetch("https://api.cms.com/....");

  return res.json();
};

export default async function HomePage() {
  // wow! No hooks on server components!
  const data = await getData();

  return <div>{data.title}</div>;
}
```

Getting data without fetch
Getting data without fetch in server components is supported as well. Like when using a DB, the filesystem, or 3rd party SDKs. You just won't get all the granular caching and deduping support. You still will get the default caching for route segments. There's so much more to caching, deduping, and revalidating. I recommend learning more here.

Client components
Until we're able to use the new use() hook from React, client data fetching is mostly the same as always. It's recommeded to use SWR or ReactQuery.


*************************
Static params
If you have a dynamic route segment where the params are static, like a blog post, we can use generateStaticParams(). So for a blog post at /app/blog/[title]/page.tsx:

export default async function Page({ params }) {
  const { slug } = params;
  // use this slug to fetch post data
  const post = await getPost(slug);

  return <div>{post.title}</div>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

***********************
Special Pages
When fetching data with server components, we can use special pages provided by Next.js to handling loading and error states


Adding a loading.tsx in the same directory as a server component page in the app directory that is fetching data will render that loading component while the data is being fetched. It is equivalent to using a Suspense boundry, which you can still do if you prefer or your server component isn't a page in the app directory.

export default function Loading() {
  return <div>...loading</div>;
}

Then same is true for error.tsx. If your server component errors out while rendering, the error page component will show instead. This is the same as wrapping a component in an Error Boundry.

export default function Error() {
  return <div>...error</div>;
}

***************
