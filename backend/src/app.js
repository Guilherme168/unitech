import 'dotenv/config.js';
import cors from 'cors'
import express from 'express';
import bodyParser from 'body-parser';
import adicionarRotas from './rotas.js';

const servidor = express();

servidor.use(bodyParser.json({ limit: '200mb' }));
servidor.use(bodyParser.urlencoded({ limit: '200mb', extended: true }));

servidor.use(cors());
servidor.use(express.json())

adicionarRotas(servidor)

servidor.listen(process.env.PORTA, () => console.log(`A APi subiu na porta: ${process.env.PORTA}`)) 