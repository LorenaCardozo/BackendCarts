import { Router } from 'express';
//import { FileManager } from '../class/FileManager.js';
import { CartManager } from '../CartManager.js';

const router = Router();

const cm = new CartManager("carritos.json");

router.post("/", async (req, res) => {

    let response = await cm.addCart();

    res.json({
        // message: "carrito agregado",
        // data: response,
        response
    });

})

router.get("/:cid", async (req, res) => {

    const { cid } = req.params;
    let response = await cm.getCartById(parseInt(cid));

    res.json(response);

})

router.post("/:cid/product/:pid", async (req, res) => {

    const { cid, pid } = req.params;
    let response = await cm.addProductInCart(parseInt(cid), parseInt(pid));

    res.json(response);

})

export default router;