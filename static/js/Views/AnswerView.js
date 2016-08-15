var AnswerView = Backbone.View.extend({
  template: _.template(`
    <div class="answer-instructions">Please type, in order, as many words as you can remember</div>
    <input type="text" name='answer' id='answer'><br>
    <div>
      <button type="button" class="btn btn-primary button-submit" id="sentence_trial_submit">Submit</button>
    </div>`),

  tagName: 'div',

  className: 'answer-container',

  events: {
    "click .button-submit": "submitAnswer",
    "keydown #answer": "handleKeyPress"
  },

  initialize: function(){
  },

  render: function(){
    this.$el.html(this.template());
    psiTurk.recordTrialData(['start', moment().format('HH mm ss SSS')])
    return this
  },

  handleKeyPress: function(e){
    if (e.keyCode == 32) { //we want to clear the word, to make it more like spoken answer task
      e.preventDefault();
      if (this.model.get('answer') != undefined){
        this.model.set('answer', this.model.get('answer') + " " + this.$('#answer').val()); //log what word was in the input
      }
      else {
        this.model.set('answer', this.$('#answer').val());
      }
      var data = this.$('#answer').val();
      if (this.model.get('timed_response') == undefined){
          this.model.set('timed_response', [{type: 'recall', response: data, time: moment().format('HH mm ss SSS')}])
      }
      else{
        this.model.get('timed_response').push({type: 'recall', response: data, time: moment().format('HH mm ss SSS')})
      }
      this.$('#answer').val('') //clear the textarea
    }
    else if (e.keyCode == 8){
      if(this.model.get('timed_response') == undefined){
        this.model.set('timed_response', [{type: 'recall', reponse: 'backspace', time: moment().format('HH mm ss SSS')}])
      }
      else{
        this.model.get('timed_response').push({type: 'recall', response: 'backspace', time: moment().format('HH mm ss SSS')})
    }
  }
  },

  submitAnswer: function() {
    this.model.set('answer', this.model.get('answer') + " " + this.$('#answer').val()); //log what word was in the input one more time
    // var proxy_model = this.model
    // var data_object = this.createDataObject(proxy_model)
    // console.log(data_object)
    // psiTurk.recordTrialData(data_object)
    // psiTurk.saveData()
    this.nextTrial();
  },

  nextTrial: function(){
    if (this.model.get('type') == 'single_task') {
      if (this.model.get('id') == 0){
        router.navigate("instructions/" + 7, {trigger: true})
      }
      else if (this.model.get('id') == 10) {
        router.navigate("instructions/" + 8, {trigger: true})
      }
      else{
        router.navigate("basicexperiment/" + (this.model.get("id") + 1), {trigger: true})
      }
    }
    else if (this.model.get('type') == 'dual_task') {
      router.navigate('dualtaskfeedback/' + (this.model.get('id')), {trigger: true})
    }
  },

  // createDataObject: function(model){
  //   var data_object;
  //   if(model.get('type') == 'single_task'){
  //     data_object = {
  //       id: model.get('id'),
  //       trial_type: model.get('type'),
  //       stim_type: model.get('stim_type'), 
  //       stimuli: model.get('stimuli'),
  //       answer: model.get('answer'),
  //       timed_response: model.get('timed_response')
  //     }
  //   }
  //   else{
  //     data_object = {
  //       id: model.get('id'),
  //       trial_type: model.get('type'),
  //       stim_type: model.get('stim_type'),
  //       stimuli: model.get('words_stimuli'),
  //       answer: model.get('answer'),
  //       timed_response: model.get('timed_response')
  //     }
  //   }
  //   return data_object
  // }

});