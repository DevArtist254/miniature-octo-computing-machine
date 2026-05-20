const express = require("express");
const PORT = 3001;

const app = express();

app.use(express.static("public"))

app.listen(PORT, () => {
    console.log(`Your server has started on port ${PORT}`);
})
