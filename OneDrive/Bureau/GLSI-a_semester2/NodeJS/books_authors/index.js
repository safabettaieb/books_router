const express = require('express');
const morgan =require('morgan');
const index_router = require('./routers/index_router');


const app = express();
app.use('',index_router);
const port = process.env.PORT || 3000 ;

/*middleware*/
if(app.get('env') ==='development'){
    app.use(morgan('tiny'))  }

/* routes */


/*server*/
app.listen(port, () => console.log(`Listening on ${port} .....`));