var ExperimentRouter = Backbone.Router.extend({

  routes: {
    "instructions":          "instructions",
    "basicexp":              "basicexp",
    "basicexp/:id":          "basicexp",
    "answer":                "answer", 
    "experiment/:id":        "experiment",
    "experiment/:id/:stage": "experiment"
  },

  instructions: function() {
    var view = new InstructionsView();
    $('#main-container').html(view.render().el)
  },

  basicexp: function(id){
    var words_model;
    if (id != undefined){
      words_model = words_collection.get(id);
    }
    else {
      words_model = words_collection.get(0);
    }
    var view = new WordsView({model: words_model});
    $('#main-container').html(view.render().el);
    view.showWords()
    window.test_view = view;
  },

  experiment: function(id, stage) {
    psiTurk.recordTrialData(['recording experiment data', 'whatever']);
    psiTurk.saveData();
  },

  answer: function(){
    var view = new AnswerView();
    $('#main-container').html(view.render().el)
  }

});
