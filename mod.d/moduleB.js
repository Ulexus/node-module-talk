app = module.parent.app;

app.get('/b',function(req,res){
   res.send('Module B');
});
