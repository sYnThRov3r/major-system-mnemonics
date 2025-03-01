# Major System Mnemonics

A React-based web application to help users learn and practice the Major System memory technique. This tool provides word lists organized by numbers according to the Major System, helping users create memorable associations for numbers.

## Features

- Comprehensive word lists for numbers 00-99
- Words categorized into three types:
  - Person (nouns representing people)
  - Action (verbs)
  - Object (nouns representing things)
- Modern React interface built with TypeScript and Vite
- Fast development environment with hot module replacement

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sYnThRov3r/major-system-mnemonics.git
cd major-system-mnemonics
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run lint` - Runs the linter
- `npm run preview` - Previews the production build locally

## Project Structure

```
major-system-mnemonics/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx         # Application entry point
│   ├── styles.ts        # Styled components and styles
│   └── types.ts         # TypeScript type definitions and word lists
├── find_duplicates.js   # Utility for finding duplicate words
├── find_duplicates.ts   # TypeScript version of duplicate finder
└── [Configuration files]
```

## The Major System

The Major System is a mnemonic technique used to remember numbers by converting them into consonant sounds, which can then be turned into words. This application provides curated word lists that follow the Major System's rules:

- 0 = s, z sounds
- 1 = t, d sounds
- 2 = n sounds
- 3 = m sounds
- 4 = r sounds
- 5 = l sounds
- 6 = j, ch, sh sounds
- 7 = k, g sounds
- 8 = f, v sounds
- 9 = p, b sounds

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License. 