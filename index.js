import express from "express";
const app = express();
const PORT = 4000;
const handleListening = () => {
    console.log(`Listning on ${PORT}`);
}

const handleHome = (req, res) => {
    console.log("INDEX");   
}

app.get("/", handleHome);


app.listen(PORT, handleListening);   