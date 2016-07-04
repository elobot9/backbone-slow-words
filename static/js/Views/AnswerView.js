var AnswerView = Backbone.View.extend({
  template: _.template(`
    <div id="container-exp">
      <div id="prompt-response">
        <h1></h1>
        <p></p>
        <div id="text-here"></div>
        <div id="form-here">
          <div>
            Please type, in order, as many words as you can remember
          </div>
          <textarea name='comments' id='comments' minlength= '20' maxlength='400'></textarea><br>
          <div>
            <button type="button" class="btn btn-primary button-submit" id="sentence_trial_submit">Submit</button>
          </div>
        <div id="stim"></div>
        <div id="query"></div>
      </div>
    </div>`),

  tagName: 'div',

  className: 'main-container',

  events: {
    "click .button-submit": "nextTrial"
  },

  initialize: function(){
    this.words = ["exhibit", "Wilson", "led", "scowled", "soda", "plate"]
  },

  render: function(){
    this.$el.html(this.template());
    return this
  },

  nextTrial: function(){
    if (this.words.length > 0){
      router.navigate("basicexp", {trigger: true})
    }
    else{
      router.navigate("instructions", {trigger: true})
    }
  }
});