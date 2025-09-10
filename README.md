# SkillSwap Connect

A Base MiniApp that allows users to trade niche skills and services with each other without direct monetary exchange.

## Features

- **Skill Listing & Matching**: List skills you offer and find skills you need
- **Reputation System**: Build trust through user reviews and verification badges
- **Credit System**: Fair valuation system for skill exchanges
- **Mobile-First Design**: Optimized for Base App and Farcaster integration
- **Social Integration**: Seamless integration with Farcaster identity

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Blockchain**: Base (via MiniKit)
- **Identity**: OnchainKit + Farcaster
- **TypeScript**: Full type safety

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Add your MiniKit and OnchainKit API keys.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js App Router
├── components/          # Reusable UI components
├── lib/                # Utilities and types
└── public/             # Static assets
```

## Key Components

- **AppShell**: Main layout with navigation
- **SkillCard**: Display skill listings
- **UserAvatar**: User profile pictures with verification
- **SkillCategoryGrid**: Browse skills by category

## Development

This app uses mock data for demonstration. In production, you would:

1. Integrate with a database (Supabase, PlanetScale, etc.)
2. Implement real authentication via MiniKit
3. Add smart contract integration for credits/reputation
4. Set up Farcaster Frame actions

## License

MIT License
