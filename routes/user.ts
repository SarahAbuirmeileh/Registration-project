import express from 'express'
import { getAllUsres, insertUser } from '../controllers/user.js'
import { NSUser } from '../types/user.js'
import { validateUser } from '../middlewares/validation/user.js'

const router=express.Router()

router.get('/',async(req,res,next)=>{
    const payload:NSUser.IGetAll = {
        page: req.body.page?.tostring() || '1',
        pageSize: req.body.pageSize?.tostring() || '10'
    }

    getAllUsres(payload)
    .then(data=>{
        res.status(201).send(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send("error at fetching all users")
    })
}) 

router.post('/register', validateUser, (req,res,next)=>{
    insertUser(req.body).then(() => {
        res.status(201).send("User addded")
      }).catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
})

export default router