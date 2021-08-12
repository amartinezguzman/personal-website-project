const express = require('express')
const morgan =require('morgan')
const bodyParser = require('body-parser')
const Recaptcha = require ('express-recaptcha').RecaptchaV2
const formData = require ('form-data')
const Mailgun = require ('mailgun.js')
const mailgun = new Mailgun (formData)