var InstructionsView = Backbone.View.extend({
  template: _.template(`
    <div id="container-instructions">

  <hr />

  <div class="instructions well">

      <div><%= instruction %></div>

      <script type="text/javascript">
      //console.log(psiTurk.getInstructionIndicator())
      </script>

  </div>

  <hr />
    <div>
      <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-next'>Next 
        <span class='glyphicon glyphicon-arrow-right'></span>
      </button>
    </div>
    <div id= 'exp-img'><%= img %></div>
    `),
  
  tagName: "div",

  className: "instructions-container",

  events: {
    "click .button-next":   "showNextInstruction",
  },

  initialize: function() {
  },

  render: function() {

    this.$el.html(this.template({instruction: this.model.get('text'), img: this.model.get('img')}));
    return this
  },

  showNextInstruction: function() {
    if (this.model.get('last')){
      if (this.model.get('section') == 1){
        router.navigate("audiocaptcha", {trigger: true})
      }
      else if (this.model.get('section') == 2){
        router.navigate("basicexperiment", {trigger: true})
      }
      else if(this.model.get('section') == 3){
        router.navigate("basicexperiment/1", {trigger: true})
      }
      else if(this.model.get('section') == 4){
        router.navigate("nbackpractice", {trigger: true})
      }
      else if(this.model.get('section') == 5){
        router.navigate("dualtaskexperiment", {trigger: true})
      }
      else if(this.model.get('section') == 6){
        router.navigate('memorytest', {trigger: true})
      }
    }
    else {
      router.navigate('instructions/' + (this.model.get('id') + 1), {trigger: true});
    }
    // this.$('p').text(this.instructions[1])
    // this.$('.button-next').removeClass('button-next').addClass('button-final').text('Start Experiment')
  },

  endInstructions: function() {
    this.remove()
    router.navigate("basicexperiment", {trigger: true});
  },

});