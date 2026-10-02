import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import MemberService from '../models/Member.service';
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import Errors from '../libs/Errors';

const memberService = new MemberService()

const memberController: T = {}

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log('Signup Page');
        const input: MemberInput = req.body,
              result: Member = await memberService.signup(input);

        res.json({member: result})
    } catch(err) {
        console.error('Error, signup', err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log('Login Page');
        const input: LoginInput = req.body,
              result = await memberService.login(input);

        res.json({member: result});
    } catch(err) {
        console.error('Error, login', err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standart.code).json(Errors.standart)
    }
}

export default memberController;