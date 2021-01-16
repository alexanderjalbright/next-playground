export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            post(req, res);
            break;
        case 'GET':
            get(req, res);
            break;
    }
}

const post = (req, res) => {
    console.log(req.body);
    console.log('post');
    res.statusCode = 200;
    res.end('BITCH');
};

const get = (req, res) => {
    console.log('get');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ name: 'John Doe' }));
};
