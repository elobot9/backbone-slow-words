var ExperimentRouter = Backbone.Router.extend({

  routes: {
    "instructions":          "instructions",
    "basicexp":              "basicexp",
    "answer":                "answer", 
    "experiment/:id":        "experiment",
    "experiment/:id/:stage": "experiment"
  },

  instructions: function() {
    var view = new InstructionsView();
    $('#main-container').html(view.render().el)
  },

  basicexp: function(){
    var wordsmodel = new WordsTrialModel({id: 1, stimuli: ["some","words"]});
    var view = new WordsView({model: wordsmodel});
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
