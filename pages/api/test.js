import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            post(req, res);
            break;
        case 'GET':
            await get(req, res);
            break;
    }
}

const post = (req, res) => {
    console.log(req.body);
    console.log('post');
    res.statusCode = 200;
    res.end('BITCH YOU POSTED');
};

const get = async (req, res) => {
    const prisma = new PrismaClient()
    const tests = await prisma.test.findMany()
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: tests }));
};
