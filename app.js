const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-http-middleware');
const Backend = require('i18next-fs-backend');

const app = express();

// i18next configuration
i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: path.join(__dirname, 'locales/{{lng}}/{{ns}}.json')
    },
    fallbackLng: 'en',
    preload: ['en', 'zh-TW'],
    supportedLngs: ['en', 'zh-TW']
  });

// Middleware
app.use(i18nextMiddleware.handle(i18next));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const todoRoutes = require('./routes/todoRoutes');
app.use('/', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});