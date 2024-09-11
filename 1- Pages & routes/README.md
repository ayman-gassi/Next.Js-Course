# Next.js Project Structure

This project is built using **Next.js**, a powerful React-based framework for server-side rendering (SSR) and static site generation (SSG). Next.js provides an optimized development experience by handling routing, rendering, and API integration seamlessly.

## Pages and Routing

Next.js automatically creates routes based on the files in the `pages/` directory:

- **Static Routes**: Any file you place in `pages/` becomes a route. For example, `pages/about.js` becomes accessible at `/about`.
- **Dynamic Routes**: Use square brackets for dynamic routes, like `[...slug].js`, which allows for flexible URL structures (e.g., `/posts/123`).
- **API Routes**: Inside the `pages/api/` folder, you can define serverless API routes that run on the server. For example, `pages/api/hello.js` would be accessible at `/api/hello`.
