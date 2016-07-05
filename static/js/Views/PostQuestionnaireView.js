var PostQuestionnaireView = Backbone.View.extend({
  template: _.template(`
    <div><%= instruction %></div>
    <div>
      <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-submit'>Submit
        <span class='glyphicon glyphicon-arrow-right'></span>
      </button>
    </div>`),
  
  tagName: "div",

  className: "instructions-container",

  events: {
    "click .button-submit":   "submitPostQuestionnaire",
  },

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template({instruction: "Post-Questionnaire"}));
    return this
  },

  submitPostQuestionnaire: function() {
    this.remove();
  },

});