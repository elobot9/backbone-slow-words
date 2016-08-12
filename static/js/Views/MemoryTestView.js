var MemoryTestView = Backbone.View.extend({
  template: _.template(`
    <h2>Please type all that you can remember from each trial into these boxes.</h2>
    <form>
      <div class="form-group">
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_1'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_2'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_3'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_4'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_5'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_6'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_7'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_8'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_9'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_10'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_11'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_12'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_13'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_14'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_15'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_16'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_17'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_18'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_19'><br>
        <input type="text" name='memory_test' class='memory-test form-control' id='memory_test_20'><br>
      </div>
    </form>
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
    saveSingleTaskData();
    saveDualTaskData();
    this.$('input.memory-test').each(function(element) {
      psiTurk.recordUnstructuredData($(this).attr('id'), $(this).val());
    });
    psiTurk.saveData();
    this.remove()
    router.navigate("postquestionnaire", {trigger: true});
  },

});