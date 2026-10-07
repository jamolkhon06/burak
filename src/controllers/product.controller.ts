import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import Errors from '../libs/Errors';
import ProductService from '../models/Product.service';

const productService = new ProductService();

const productController: T = {}
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

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log('Create New Product Page');
        res.send('DONE!')
    } catch(err) {
        console.error('Error, create new product', err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log('Update chosen Product Page');
        
    } catch(err) {
        console.error('Error, update chosen product', err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

export default productController;