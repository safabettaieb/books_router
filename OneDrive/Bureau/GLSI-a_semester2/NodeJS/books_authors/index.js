const express = require('express');
const morgan =require('morgan');

const app = express();
const port = process.env.PORT || 3000 ;
/*middleware*/
if(app.get('env') ==='development'){
    app.use(morgan('tiny'))  }
/* routes */







/*server*/
app.listen(port, () => console.log(`Listening on ${port} .....`));