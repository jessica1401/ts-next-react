import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken';

const KEY = 'kfgfvkyfvkugfkumgvuk';

export default function(req: NextApiRequest, res:NextApiResponse) {
  if(!req.body) {
    res.status(404);
    res.end("Error: PAGE NOT FOUND");
    return;
  }
  const {username, password} = req.body; 
   res.json(
    {
    token: jwt.sign({
      username,
      admin: password === 'admin' && username === 'admin'
    },
    KEY)
  })
}
