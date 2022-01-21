import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const home = async (req: Request, res: Response)=>{
    res.render('pages/home', {});
};

export const email = async (req: Request, res: Response ) => {
      let transport = nodemailer.createTransport({
        host: "", // set your host
        port: 2525,
        auth: {
          user: "", // set your user
          pass: "" // set your password
        }
      });
      let textBody = `Hi my name is ${req.body.name}, and my message is : </br> ${req.body.message}`;
      
      let message = {
        from: req.body.email,
        to: `contact`,
        subject: `${req.body.subject}`,
        html: textBody,
        text: textBody,
      };
    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({sucess: true});
}