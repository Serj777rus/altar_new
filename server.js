require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require("http");
const axios = require("axios");
const app = express();
app.use(cors({
    origin: "*",
    extended: true,
}));
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static('public'));
const port =  3000;
const server = http.createServer(app);

app.post('/sendForm', async (req, res) => {
    const { first_name, phone, email } = req.body;
    console.log(first_name, phone);
    let data = {
        fields: {
            NAME: first_name,
            PHONE: [{'VALUE': phone, 'VALUE_TYPE': 'WORK'}],
        }
    }
    try {
        const response = await axios.post('https://b24-5h9cod.bitrix24.ru/rest/1/232bgqo9e62t37vi/crm.lead.add.json', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        if (response.status === 200 && response.statusText === 'OK') {
            res.status(200).json({id: response.data.result});
        }
    } catch (error) {
        console.log(error);
    }
})

app.get('/getData', async (req, res) => {
    try {
        const [responseVideo, responseReviews, responseCases, responseServises] = await Promise.all([
            await axios.get('http://localhost:1337/api/weddings?populate=*'),
            await axios.get('http://localhost:1337/api/reviews'),
            await axios.get('http://localhost:1337/api/cases?populate=*'),
            await axios.get('http://localhost:1337/api/services?populate=*')
            // await axios.get('https://admin.tryaltar.com/api/weddings?populate=*'),
            // await axios.get('https://admin.tryaltar.com/api/reviews'),
            // await axios.get('https://admin.tryaltar.com/api/cases?populate=*'),
            // await axios.get('https://admin.tryaltar.com/api/services?populate=*')
        ])
        res.status(200).json({video: responseVideo.data, reviews: responseReviews.data, cases: responseCases.data, servises: responseServises.data});
    } catch (error) {
        console.log(error)
    }
})

app.get('/getPosts', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:1337/api/posts?populate=*');
        console.log(response.data);
        res.status(200).json(response.data);
    }catch (error) {
        console.log(error);
    }
})

app.get('/getPost', async (req, res) => {
    const slug = req.query.slug;
    console.log(slug);
    try {
        const response = await axios.get(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=*`)
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
    }
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})