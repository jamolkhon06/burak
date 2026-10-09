import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import Errors, { HttpCode, Message } from '../libs/Errors';
import ProductService from '../models/Product.service';
import { ProductInput } from '../libs/types/product';
import { AdminRequest } from '../libs/types/member';

const productService = new ProductService();

const productController: T = {}

/* SPA */
/* BSSR */
productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log('Get All Products Page');
        res.render('products')
    } catch(err) {
        console.error('Error, get all products', err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

productController.createNewProduct = async (req: AdminRequest, res: Response) => {
    try {
        console.log('Create New Product Page');
        if(!req.files?.length) throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED)

        const data: ProductInput = req.body;
        data.productImages = req.files?.map(ele => {
            return ele.path.replace(/\\/g, '/');
        });

        await productService.createNewProduct(data);
        res.send(`<script>alert("Successful creation"); window.location.replace('admin/product/all')</script>`)
    } catch(err) {
        console.error('Error, create new product', err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG; 
        res.send(`<script>alert("${message}"); window.location.replace('admin/product/all')</script>`)
    }
}

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log('Update chosen Product Page');
        const id = req.params.id;

        const result = await productService.updateChosenProduct(id, req.body)

        res.status(HttpCode.OK).json({ data: result })
    } catch(err) {
        console.error('Error, update chosen product', err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

export default productController;