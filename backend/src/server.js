const express =  require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-wgelc.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);
//Req.query == Acessar os query paramsd (para filtros)
// req.param == Acessar route params  (para edição e delete)
// req.body  == para acessar o corpo da requisição (Para criação e edição)



app.listen(3333);