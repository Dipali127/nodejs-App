const express = require('express');
const router = express.Router();

const googleapi= require('../controller/goggle-apiController');

router.post('/login', googleapi.loginWithgoogle);