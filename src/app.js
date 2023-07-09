import express from 'express'
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js"

const PUERTO = 8081

const app = express();
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(PUERTO, ()=>{
    console.log("El servidor esta corriendo en el puerto " + PUERTO);
})