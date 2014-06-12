app = module.parent.app;

app.get('/a',function(req,res){
   res.send('Module A');
});
