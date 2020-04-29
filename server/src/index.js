const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

const multipartMiddleware = multipart({uploadDir: './uploads'});

app.post('/upload', multipartMiddleware, (req, res) => {
    const files = req.files;
    console.log(files);

    res.json({message: files});
});

app.get('/downloadPdf', (req, resp) => {
    resp.download('./uploads/1O-yDokm7FP5JwOC-Pp-k-ZR.pdf');
});

app.use((err, req, res, next) => res.jsos({error: err.message}));

app.listen(8000, () => {
    console.log('Servidor inicializado')
});
