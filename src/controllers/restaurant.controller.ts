import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import MemberService from '../models/Member.service';
import { MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log('Home page')
        res.send('Home Page')
        // There are different types of responses: send | json | redirect | end | render
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

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log('Process Login Page');
        res.send('Done')
    } catch(err) {
        console.error('Error, processLogin', err);
    }
}
restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log('Process Signup Page');

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        const result = await memberService.processSignup(newMember);
        res.send(result);
    } catch(err) {
        console.error('Error, processSignup', err);
        res.send(err)
    }
}

export default restaurantController;