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
    return this
  },

  handleKeyPress: function(e){
    if (e.keyCode == 32) { //we want to clear the word, to make it more like spoken answer task
      e.preventDefault();
      if (this.model.get('answer') != undefined){
        this.model.set('answer', this.model.get('answer') + " " + this.$('#answer').val()); //log what word was in the input
        var data = this.$('#answer').val()
        psiturk.recordTrialData([data])
      }
      else {
        this.model.set('answer', this.$('#answer').val());
      }
      this.$('#answer').val('') //clear the textarea
    }
    else if (e.keyCode == 8){
      psiturk.recordTrialData(['backspace'])
    }
  },

  submitAnswer: function() {
    //do some sort of psiTurk record trial data here?
    this.model.set('answer', this.model.get('answer') + " " + this.$('#answer').val()); //log what word was in the input one more time
    // psiturk.recordTrialData([this.model.get('stimuli'), this.model.get('answer'), this.model.get('type'), this.model.get('condition')])
    psiturk.saveData();
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
  }
});