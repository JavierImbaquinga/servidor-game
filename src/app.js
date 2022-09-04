import express  from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";
//importamos las rutas
import categoriesRoutes from "./routes/categories.routes";

const app = express();
//variables en express
app.set('pkg', pkg);

app.use(morgan('dev'));
app.use(cors());

//peticiones
app.get('/', (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/categories',categoriesRoutes);

export default app;
