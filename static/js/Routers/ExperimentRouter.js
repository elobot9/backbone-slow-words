var ExperimentRouter = Backbone.Router.extend({

  routes: {
    "instructions":          "instructions",
    "basicexperiment":       "basicexperiment",
    "basicexperiment/:id":   "basicexperiment",
    "answer":                "answer",
    "answer/:id":                "answer",
    "experiment/:id":        "experiment",
    "experiment/:id/:stage": "experiment"
  },

  instructions: function() {
    var view = new InstructionsView();
    $('#main-container').html(view.render().el)
  },

  basicexperiment: function(id){
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
  },

  answer: function(id){
    var words_model;
    if (id != undefined){
      words_model = words_collection.get(id);
    }
    else {
      words_model = words_collection.get(0);
    }
    var view = new AnswerView({model: words_model});
    $('#main-container').html(view.render().el);
  }

});
