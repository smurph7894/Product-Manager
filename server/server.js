const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(express.urlencoded( {extend: true} ));

require("./config/mongoose.config");
require("./routes/product.routes")(app); 

app.listen(port, () => console.log( `Server connected on port: ${port}` ));