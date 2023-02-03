const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/examenmern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Se estableció la conección con la bd"))
    .catch(err => console.log("Hubo un error al intentar conectarse a la bd", err));