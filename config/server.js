const express = require("express")
const app = express();
const port = 3000;
const userRoute = require('../app/routes/userRoute');

app.use('/user', userRoute);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));





// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/test', (req, res) => res.send('Halo, calon admin MCI aamiin aamiin !'));