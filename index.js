fs = require('fs');
path = require('path');
express = require('express');
app = module.app = express()

// Require each file in the mod.d directory
var basePath = path.resolve(__dirname,'mod.d');
var files = fs.readdirSync(basePath);
files.forEach( function(file) {
   if(path.extname(file) == '.js') {
      require( path.resolve(basePath,file) );
      console.log("Loaded "+path.basename(file,'.js').replace(/\./g,'/'));
   }
});

var server = app.listen(3000, function() {
   console.log('Listening on port %d', server.address().port);
});
