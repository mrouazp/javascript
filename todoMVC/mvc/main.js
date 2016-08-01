require(
      ['model', 'view', 'controller'],
      
      function(Model, View, Controller) {
          var model = new Model([]); 
          var view = new View();
          var controller = new Controller(view, model);
      }
);

