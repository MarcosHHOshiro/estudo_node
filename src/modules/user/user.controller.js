import { Router } from "express";

export const userRouter = Router();

const router = Router();

//rota principal
userRouter.use('/user', router);

router.get('/', function(req, res){
    res.send('Hello world USER agora');
});

router.get('/:nome', function(req, res){
    res.send('Nome do usuario');
});