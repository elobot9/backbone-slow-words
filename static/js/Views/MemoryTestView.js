var MemoryTestView = Backbone.View.extend({
  template: _.template(`
    <h2>Please type all that you can remember from each trial into these boxes.</h2>
    <div id= 'left_mem_test'>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    </div>
    <div id= 'right_mem_test'>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    <input type="text" name='memory_test' id='memory_test'><br>
    </div>
    <div>
      <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-submit'>Submit
        <span class='glyphicon glyphicon-arrow-right'></span>
      </button>
    </div>`),
  
  tagName: "div",

  className: "memory-test",

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
    saveSingleTaskData();
    saveDualTaskData();
    router.navigate("postquestionnaire", {trigger: true});
  },

});