var ExperimentRouter = Backbone.Router.extend({

  routes: {
    "instructions":          "instructions",
    "instructions/:id":      "instructions",
    "audiocaptcha":          "audiocaptcha", 
    "audiocaptcha/:id":      "audiocaptcha", 
    "basicexperiment":       "basicexperiment",
    "basicexperiment/:id":   "basicexperiment",
    "answer":                "answer",
    "answer/:id":            "answer",
    "nbackinstructions":     "nbackinstructions",
    "nbackpractice":         "nbackpractice",
    "nbackfeedback":         "nbackfeedback",
    "nbackfeedback/:id":     "nbackfeedback",
    "dualtaskexperiment":    "dualTaskExperiment",
    "dualtaskexperiment/:id": "dualTaskExperiment",
    "dualtaskanswer":        "dualTaskAnswer",
    "dualtaskanswer/:id":    "dualTaskAnswer",
    "dualtaskfeedback":        "dualTaskFeedback",
    "dualtaskfeedback/:id":    "dualTaskFeedback",
    "memorytest":            "memorytest",
    "postquestionnaire":     "postquestionnaire",
    "debrief":                "debrief", 
    "debug": "debug"
  },

  instructions: function(id) {
    var model;
    if (id != undefined){
      model = instructions_collection.get(id);

    }
    else {
      model = instructions_collection.get(0);
    }
    var view = new InstructionsView({model: model});
    $('#main-container').html(view.render().el)
  },

  audiocaptcha: function(){
    var captcha_model = new AudioCaptchaModel();
    var view = new AudioCaptchaView({model: captcha_model});
    $('#main-container').html(view.render().el)
  },

  //Start running words experiment from trial with this id. Data from these is recorded for the user
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

  //Show answer page for words trial with this id
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

  //Show the first NBack Instructions
  nbackinstructions: function(){
    var view = new NBackInstructionsView();
    $('#main-container').html(view.render().el)
  },

  //A special practice N-Back trial
  nbackpractice: function(){
    var nback_practice_model = new NBackTrialModel({length: 10});
    var view = new NBackPracticeView({model: nback_practice_model})
    window.current_nback_practice_model = nback_practice_model;
    $('#main-container').html(view.render().el);
  },

  //Show the user feedback about their nback practice trial
  nbackfeedback: function(){
    var view = new NBackFeedbackView({model: window.current_nback_practice_model});
    $('#main-container').html(view.render().el);
  },

  dualTaskInstructions: function(){
    var view = new DualTaskInstructionsView()
    $('#main-container').html(view.render().el);
  },

  dualTaskExperiment: function(id){
    var model;
    if (id != undefined) {
      model = dual_task_trials.get(id);
    }
    else {
      model = dual_task_trials.get(0);
    }
    var view = new DualTaskTrialView({model: model});
    $('#main-container').html(view.render().el);
  },

  dualTaskAnswer: function(id){
    var model;
    if (id != undefined){
      model = dual_task_trials.get(id);
    }
    else {
      model = dual_task_trials.get(0);
    }
    var view = new AnswerView({model: model});
    $('#main-container').html(view.render().el);
    $('#answer').focus();
  },

  dualTaskFeedback: function(id){
    console.log('dualTaskFeedback')
    var model;
    if (id != undefined){
      model = dual_task_trials.get(id);
    }
    else {
      model = dual_task_trials.get(0);
    }
    var view = new DualTaskFeedbackView({model: model});
    $('#main-container').html(view.render().el);
  },

  memorytest: function(){
    console.log('MemoryTest')
    var view = new MemoryTestView();
    $('#main-container').html(view.render().el)
  },

  postquestionnaire: function(){
    var view = new PostQuestionnaireView();
    $('#main-container').html(view.render().el)
  },

  debrief: function(){
    var view = new DebriefView();
    $('#main-container').html(view.render().el)
  },

  debug: function() {
    var view = new DebugView();
    $('#main-container').html(view.render().el)
  }

});
