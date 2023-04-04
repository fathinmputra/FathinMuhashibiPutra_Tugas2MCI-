const express = require("express")
const app = express();
const port = 3000;
const userRoute = require('../app/routes/userRoute');

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Halo, calon admin MCI aamiin aamiin !'));

app.use('/user', userRoute);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}!`));