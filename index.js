const express = require("express")
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Halo, calon admin MCI aamiin aamiin !'));

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));
