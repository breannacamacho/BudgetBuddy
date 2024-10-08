// Core Modules
const path = require("path");

// Third-party Modules
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");

// Local Modules
const routes = require("./controllers"); 

const app = express();
const PORT = process.env.PORT || 3001;


const hbs = exphbs.create({
  extname: '.handlebars',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views'),
});


const sess = {
  secret: "Pandas are awesome",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, 
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};


app.use(session(sess));


app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


app.use(routes); 


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Visit local site at http://localhost:${PORT}. Visit API with Insomnia at http://localhost:${PORT}/api/`)
  );
});