# Chongqing Tourism Cyberpunk Report

A scrollytelling interactive web application showcasing the development of Chongqing's tourism from 2010 to 2025.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `app/page.tsx`: The main single-page application containing all sections (Hero, Timeline, Comparison, SWOT).
- `app/globals.css`: Global styles and Tailwind directives, including the Cyberpunk color palette.
- `tailwind.config.ts`: Custom Tailwind configuration for neon colors and fonts.

## Features
- **Immersive Hero Section**: Neon glow and entrance animations.
- **Timeline Scrollytelling**: Vertical timeline with scroll-triggered animations for different development phases.
- **Comparison Split-Screen**: Visual comparison between Chongqing and Singapore.
- **SWOT Analysis Grid**: Glassmorphism bento box layout.
