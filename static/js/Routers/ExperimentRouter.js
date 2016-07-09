var ExperimentRouter = Backbone.Router.extend({

  routes: {
    "instructions":          "instructions",
    "instructions/:id":      "instructions",
    "audiocaptcha":          "audiocaptcha", 
    "basicexperiment":       "basicexperiment",
    "basicexperiment/:id":   "basicexperiment",
    "answer":                "answer",
    "answer/:id":            "answer",
    "nbackinstructions":     "nbackinstructions",
    "nbacktrial":            "nbacktrial",
    "nbacktrial/:id":        "nbacktrial",
    "nback":                 "nback",
    "nback/:id":             "nback",   
    "memorytest":            "memorytest",
    "postquestionnaire":     "postquestionnaire"
  },

  instructions: function(id) {
    var model;
    if (id != undefined){
      model = instructions_collection.get(id);

    }
    else {
      model = instructions_collection.get(0);
    }
    console.log(model)
    var view = new InstructionsView({model: model});
    $('#main-container').html(view.render().el)
  },

  audiocaptcha: function(){
    var view = new AudioCaptchaView();
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
    $('#answer').focus();
  },

  nbackinstructions: function(){
    var view = new NBackInstructionsView();
    $('#main-container').html(view.render().el)
  },

  nbacktrial: function(id){
    var nback_model;
    if (id != undefined && id > 2){
      var raw_score = nback_practice_collection.get('session_accuracy');
      var score = Math.floor(raw_score / 3)

      if (score < 70){
        //Make them re-do the practice experiment.
        create_practice_nback();
        router.navigate('nbacktrial/:0', {trigger: true})
      }
      else{
        //begin the true NBack Trial
        router.navigate('nback', {trigger: true})
      }
    }
    else{
      if(id == undefined){
        var nback_model = nback_practice_collection.get(0)
      }
      else{
        var nback_model = nback_practice_collection.get(id)
      }
    var nback_collection = nback_model.createNBackCollection();
    var view = new NBackTrialView({model: nback_model, collection: nback_collection});
    $('#main-container').html(view.render().el);
    //view.playLetters();
    view.keyListen()
    };

  },

  nback: function(){
    var view = new NBackProperView();
    $('#main-container').html(view.render().el)
  },

  memorytest: function(){
    var view = new MemoryTestView();
    $('#main-container').html(view.render().el)
  },

  postquestionnaire: function(){
    var view = new PostQuestionnaireView();
    $('#main-container').html(view.render().el)
  }


});
