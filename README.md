# WeatherApp

A simple Weather App built with React Native and Expo.

## Features

- Get current weather and forecast for any location
- Use your device location or search by city
- Dynamic backgrounds and weather icons
- Responsive and mobile-friendly UI
- Internationalization (i18n) support

## Demo

![Demo](./e2e/demo.gif)

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Set up your environment variables

   - Copy the example file:
     ```bash
     cp .env.local.example .env.local
     ```
   - Open `.env.local` and fill in your actual API key and endpoints.

   Example `.env.local.example`:
   ```
   EXPO_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
   EXPO_PUBLIC_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5
   EXPO_PUBLIC_OPENWEATHER_GEO_URL=https://api.openweathermap.org/geo/1.0
   ```

3. Start the app

   ```bash
   npx expo start
   ```

4. Run on your device

   - Scan the QR code with [Expo Go](https://expo.dev/go) or use an emulator/simulator.

## Tech Stack

- React Native + Expo
- TypeScript
- Jotai (state management)
- i18n-js (localization)
- OpenWeatherMap API
- Tanstack Query (for efficient data fetching, batch requests and caching)

---

Made by MidnightCoke