const express = require('express');
const app = express();

app.use(express.staic("public"));
