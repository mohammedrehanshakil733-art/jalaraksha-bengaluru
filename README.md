# JalaRaksha Bengaluru

A responsive flood-risk awareness and maintenance-prioritisation prototype built with React, Vite, Tailwind CSS and Leaflet.

## Features
- Overview dashboard with clearly labelled **simulated** rainfall/weather metrics and alerts.
- Interactive OpenStreetMap/Leaflet map with mock Bengaluru hotspot data, risk circles, popups, and layer filters.
- Citizen hazard reporting with browser geolocation, map-picker coordinates, optional image preview, anonymous mode, and a persistent public timeline.
- Authority console ranked by risk score; scheduling an action changes hotspot status and is reflected throughout the app.
- `localStorage` persistence so reports and maintenance changes survive refreshes on the same browser.

## Run locally
1. Install Node.js 18+ (20+ recommended).
2. Extract this project and run `npm install`.
3. Run `npm run dev`; open the local URL Vite prints.
4. Create a production build with `npm run build`; preview it with `npm run preview`.

## Deploy
### Vercel
Import the Git repository, use **Build Command** `npm run build` and **Output Directory** `dist`. The included `vercel.json` handles SPA routes.
### Netlify
Import the repository; the included `netlify.toml` configures build and SPA fallback. Build command `npm run build`, publish directory `dist`.
### Render
Create a **Static Site**, build command `npm install && npm run build`, publish directory `dist`.

## Important demo limitations
- Weather, rainfall, risk scores, hotspot coordinates, alerts, and sample reports are **synthetic demonstration data**, not live IMD/BBMP feeds or official flood forecasts.
- Citizen reports and maintenance changes are stored in the current browser's localStorage only. They are not shared between users or devices, and there is no real authentication/authorization.
- Map tiles require internet access and are provided by OpenStreetMap. Follow the tile provider's usage policy before scaling public traffic.
- Do not use this prototype for emergency decisions. For a production public service, add a trusted backend (e.g. Express + Supabase), authenticated role-based access, server-side validation, abuse prevention, privacy controls, image storage, audit logs, backups, and verified data integrations.
