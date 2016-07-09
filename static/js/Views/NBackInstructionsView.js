var NBackInstructionsView = Backbone.View.extend({
  template: _.template(`
    <p><%=instruction %></p>
    <div>
      <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-next'>Next 
        <span class='glyphicon glyphicon-arrow-right'></span>
      </button>
    </div>`),
  
  tagName: "div",

  className: "instructions-container",

  events: {
    "click .button-next":   "showNextInstruction",
    "click .button-final": "endInstructions"
  },

  initialize: function() {
    this.instructions = ["Nback Instructions 1", "Nback Instructions 2"]
  },

  render: function() {
    this.$el.html(this.template({instruction: this.instructions[0]}));
    return this
  },

  showNextInstruction: function() {
    this.$('p').text(this.instructions[1])
    this.$('.button-next').removeClass('button-next').addClass('button-final').text('Start Experiment')
  },

  endInstructions: function() {
    this.remove()
    router.navigate("nbacktrial", {trigger: true});
  },

});