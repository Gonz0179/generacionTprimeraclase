 var express = require('express');
 var app = express();
 var server = require('http').createServer(app);
 var io = require('socket.io').listen(server);
 var port = process.env.PORT || 3000;
 var fs = require('fs');
 var path = require('path');
 var bodyParser = require('body-parser');
 var multer = require('multer');
 var mongoose = require('mongoose');
 var passport = require('passport');
 var flash = require('connect-flash');
 var morgan = require('morgan');
 var cookieParser = require('cookie-parser');
 var session = require('express-session');
 var MongoStore = require('connect-mongo')(session);
 var configDB = require('./config/database.js');
 var passportConfig = require('./config/passport.js');
 var User = require('./app/models/user.js');
 var Post = require('./app/models/post.js');
 var Comment = require('./app/models/comment.js');
 var upload = multer({ dest: 'uploads/' });
 var storage = multer.diskStorage({
     destination: function (req, file, cb) {
         cb(null, 'uploads/')
     },
     filename: function (req, file, cb) {
         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     }
 });
 var upload = multer({
     storage: storage
 });
 var urlencodedParser = bodyParser.urlencoded({
     extended: false
 });











