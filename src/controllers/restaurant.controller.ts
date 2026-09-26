import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import MemberService from '../models/Member.service';

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('Home page')
        res.send('Home Page')
    } catch(err) {
        console.error('Error, goHome', err);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log('Login page')
        res.send('Login Page')
    } catch(err) {
        console.error('Error, getLogin', err);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log('Signup Page')
        res.send('Signup Page')
    } catch(err) {
        console.error('Error, getSignup', err);
    }
}

export default restaurantController;