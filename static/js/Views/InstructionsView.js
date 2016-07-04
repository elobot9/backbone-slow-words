var InstructionsView = Backbone.View.extend({
  template: _.template(`
    <p><%= instruction %></p>
    <div>
      <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-next'>Next 
        <span class='glyphicon glyphicon-arrow-right'></span>
      </button>
    </div>`),
  
  tagName: "div",

  className: "main-container",

  events: {
    "click .button-next":   "showNextInstruction",
    "click .button-final": "endInstructions"
  },

  initialize: function() {
    this.instructions = ["First text", "Second Text"]
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
    router.navigate("basicexp", {trigger: true});
  },

});