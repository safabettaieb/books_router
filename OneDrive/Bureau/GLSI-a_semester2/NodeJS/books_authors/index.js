const express = require('express');
const morgan =require('morgan');
const joi = require('joi');
const index_router = require('./routers/index_router');
const books_router = require('./routers/books_router');

const app = express();
const port = process.env.PORT || 3000 ;

/*middleware*/
if(app.get('env') ==='development'){
    app.use(morgan('tiny'))  }

app.use(express.json());
/* routes */
app.use('',index_router);
app.use('/api/books/',books_router); //  applicquer sur tous le ficher
/*server*/
app.listen(port, () => console.log(`Listening on ${port} .....`));