server.get('/products', (req, res) => {
  mongoService.getAllProdutos().then((docs) => {
    if(docs) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(JSON.stringify(docs));
    }
  }).catch((err) => {
      console.log(err);
  });
});

server.get('/products/:id', (req, res) => {
  console.log("Entrei no get");
  mongoService.getOneProduto(req.params.id).
  then((result) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log(result);
    return res.end(JSON.stringify(result));
});

server.post('/products', (req, res) => {
  console.log("Entrei no Post");
  mongoService.updateProduto(req.body);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    console.log(result);
    return res.end(JSON.stringify(result));
});

server.put('/products/:id', (req, res) => {
  mongoService.updateProduto(req.body).then((docs) => {
    if(docs) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(JSON.stringify(docs));
    }
  }).catch((err) => {
      console.log(err);
  });
});

server.delete('/products/:id', (req, res) => {
  mongoService.deleteProduto(req.params.id).then((docs) => {
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