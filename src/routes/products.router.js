import { Router } from 'express';
import { ProductManager } from '../ProductManager.js';

const router = Router();

//let products = []
const pm = new ProductManager("productos.json");

router.get("/", async (req, res) => {

    const { limit } = req.query;

    try {

        //productManager.getProducts().then((p) => {console.log(p); res.json(p)})
        let response = await pm.getProducts();

        if (limit) {
            response = response.slice(0, limit);
        }

        res.json(response);

    } catch (error) {
        console.log("error", error);
    }
})

router.get("/:pid", async (req, res) => {

    const { pid } = req.params;
    let response = await pm.getProductById(parseInt(pid));

    res.json(response);

})

router.post("/", async (req, res) => {
    const {
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails,
    } = req.body;

    let response = await pm.addProduct(title, description, price, thumbnails, code, stock, category, status);

    res.json({
        // message: "producto agregado",
        // data: response,
        response
    });

})

router.put("/:pid", async (req, res) => {

    const { pid } = req.params;
    const datos = req.body;

    let response = await pm.updateProduct(parseInt(pid), datos);

    res.json(response);

})

router.delete("/:pid", async (req, res) => {

    const { pid } = req.params;
    let response = await pm.deleteProduct(parseInt(pid));

    res.json(response);

})

export default router;