This folder exists to resolve conflicts with [FSD](https://feature-sliced.design/docs)

The structure is made to fit the [recommended way](https://feature-sliced.design/docs/guides/tech/with-nextjs#app-router) of resolving the issue

```
├── app                # NextJS app folder
|   ├── README.md      # You are reading it now
├── public             # Static assets
├── src
│   ├── app            # FSD app folder
│   ├── entities
│   ├── features
│   ├── pages          # FSD pages folder
│   ├── shared
│   ├── widgets
```

Assets that are meant to be resolved at the build time take its place in the src folder. For example global brand-assets are placed at `/src/entities/assets`

This project was initialized from a Next.js Starter, and contains the following changes:

1. The `tsconfig.json` was updated to point the `@` alias to `./src` instead of `./`
2. The `tailwind.config.ts` was updated to include files in `./src`
3. The `src` folder was created to contain the FSD layers
4. The `app/globals.css` was moved to `src/app/styles/globals.css`
