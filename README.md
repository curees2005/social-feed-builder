# Simple Feed Builder

InternId : CITS6572 Name: Keya Goyal Duration : 6 Weeks
Project Scope : A frontend-only social feed built with React + Vite. It loads demo users/posts from JSONPlaceholder and saves user-created posts, likes, and comments in browser localStorage. No MongoDB or backend required.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Netlify
Push this folder to GitHub, import the repository in Netlify, use `npm run build` as the build command and `dist` as the publish directory. `netlify.toml` already contains these settings.

## Important
JSONPlaceholder is a mock API: POST/PUT/DELETE requests are simulated and are not permanently stored on its server. This app therefore uses localStorage for your own posts/interactions.
