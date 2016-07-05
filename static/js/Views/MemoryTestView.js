var MemoryTestView = Backbone.View.extend({
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
    "click .button-submit":   "submitMemoryTest",
  },

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template({instruction: "Memory Test"}));
    return this
  },

 submitMemoryTest: function() {
    this.remove()
    router.navigate("postquestionnaire", {trigger: true});
  },

});