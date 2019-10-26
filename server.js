var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
const uuidv1 = require('uuid/v1');
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, req.body.uuid + '-' + req.body.index + '-' + file.originalname )
  }
});
var upload = multer({ storage: storage }).array('file');

app.post('/upload',function(req, res) {
   // console.log(req);
   // return res.status(200).send('ok');
   upload(req, res, function (err) {
       //console.log(req)
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err);
           } else if (err) {
               return res.status(500).json(err);
           }

      //console.log(req.body.uuid);
      return res.status(200).send(req.file);
    });
});

app.get('/getZip', function(req, res){
    console.log(req.query.id);
    return res.status(200).send('ok');
});



app.listen(8000, function() {
    console.log('App running on port 8000');
});