const express = require("express")
const bodyPArser = require("body-parser");
const app = express();
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
const userRoute = require('../app/routes/userRoute');
const bookingRoute = require('../app/routes/bookingRoute');
const paymentRoute = require('../app/routes/paymentRoute');
const ticketRoute = require('../app/routes/ticketRoute');

app.use('/user', userRoute);
app.use('/booking', bookingRoute);
app.use('/payment', paymentRoute);
app.use('/ticket', ticketRoute);

app.listen(port, () => console.log(`Server berjalan di http://localhost:${port}`));





// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/test', (req, res) => res.send('Halo, calon admin MCI aamiin aamiin !'));