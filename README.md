# Multilingual Todo Application

A modern Todo list application built with Node.js and Express, featuring internationalization support and theme switching capabilities.

## Features

- ✅ Create, read, update, and delete todos
- 🌐 Multilingual support (English, Traditional Chinese)
- 🎨 Light/Dark theme switching
- 💾 Local storage for persistent todos
- 📱 Responsive design

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- i18next (Internationalization)
- MongoDB (Database)

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd copilot_agent_mode
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Scripts

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot-reload

## Project Structure

```
├── app.js              # Application entry point
├── controllers/        # Route controllers
├── locales/           # Translation files
│   ├── en/           # English translations
│   └── zh-TW/        # Traditional Chinese translations
├── models/            # Database models
├── routes/            # Application routes
└── views/            # EJS templates
```

## Available Languages

- English (en)
- Traditional Chinese (zh-TW)

## Contributing

Feel free to submit issues and enhancement requests.

## License

ISC