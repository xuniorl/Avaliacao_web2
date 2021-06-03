server.get('/employee', (req, res) => {
  mongoService.getAllFuncionarios().then((docs) => {
    if(docs) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(JSON.stringify(docs));
    }
  }).catch((err) => {
      console.log(err);
  });
});

server.get('/employee/:id', (req, res) => {
  console.log("Entrei no get");
  mongoService.getOneFuncionario(req.params.id).
  then((result) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log(result);
    return res.end(JSON.stringify(result));
});

server.post('/employee', (req, res) => {
  console.log("Entrei no Post");
  mongoService.updateFuncionario(req.body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log(result);
    return res.end(JSON.stringify(result));
});

server.put('/employee/:id', (req, res) => {
  mongoService.updateFuncionario(req.body).then((docs) => {
    if(docs) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(JSON.stringify(docs));
    }
  }).catch((err) => {
      console.log(err);
  });
});

server.delete('/employee/:id', (req, res) => {
  mongoService.deleteFuncionario(req.params.id).then((docs) => {
    if(docs) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(JSON.stringify(docs));
    }
  }).catch((err) => {
      console.log(err);
  });
});
})