# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- Development: `npm run dev` (runs vite dev)
- Build: `npm run build` (runs vite build)
- Preview: `npm run preview` (runs vite preview)
- Type Check: `npm run check` (runs svelte-kit sync && svelte-check --tsconfig ./tsconfig.json)
- Watch Type Check: `npm run check:watch` (runs svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch)
- Start Production: `npm start` (runs node server.js)

## Code Style Guidelines
- **TypeScript**: Use strict mode, proper type annotations for all functions and variables
- **Components**: Use .svelte extension, PascalCase for component names
- **Variables/Functions**: Use camelCase, prefix booleans with "is" (e.g., isEnabled)
- **Imports**: Use $lib path alias (e.g., import Component from "$lib/components/Component.svelte")
- **Indentation**: Two spaces
- **Formatting**: Use semicolons consistently
- **Styling**: Use TailwindCSS utility classes directly in components

## Before Committing
- Run `npm run check` to verify type correctness
- Ensure responsive design using Tailwind classes
- Verify WebRTC functionality works as expected