var NBackTrialView = Backbone.View.extend({
  template: _.template(`
  <div id="container-exp">
    <div class="trial">
      <h1></h1>
      <p><%=instruction %></p>
      <div id="audio-here">
        <%= Audio %>
      </div>
    </div>
  </div>`),

  tagName: 'div',

  className: 'main-container',

  events: {

  },

  matches: null,

  trial_accuracy: 0,

  initialize: function(){
    this.current_stimuli = 0;
    this.curr_letter = undefined
  },

  render: function(){
    this.curr_letter = this.collection.get(this.current_stimuli);
    this.$el.html(this.template({
      'Audio': '<audio src= static/audio/TheAlphabet/' + 
      this.curr_letter.get('stim') + 
      '.wav autoplay= "autoplay"></audio>', 
      instruction: 'Press the SPACEBAR when a letter matches the one before it'}));
    return this
  },

  keyListen: function(){
      //this.matches = null;
      var _this = this;
      $(window).on('keypress', function(event){_this.handleKeyPress(event)});
      this.playLetters()
  },

  playLetters: function(){
    if (this.current_stimuli < this.collection.length){
      if (this.matches == false){
        this.trial_accuracy += 1
        console.log(this.trial_accuracy)
      };
      this.render();
      this.matches = this.curr_letter.get('matches')
      this.current_stimuli++;
      var _this = this;
      setTimeout(function(){_this.playLetters()}, 1000)
    }
    else{
      this.showScore();
      var id_num = this.model.get('id') + 1;
      var _this = this;
      setTimeout(function(){
        router.navigate("nbacktrial/" + id_num, {trigger: true})}, 3000);
      setTimeout(function(){_this.remove()}, 3000)
    }
  },

  handleKeyPress: function(e){
    if (this.curr_letter.get('matches') != null){
      if (this.curr_letter.get('matches') == true){
        //Record that they got it right
        this.trial_accuracy += 1
        console.log(this.trial_accuracy)
      }
    }
     //Remember to prevent the program from recording multiple keypresses within a letter 
     this.matches = null
  },

  showScore: function(){
    var accuracy = Math.floor((this.trial_accuracy / 9) * 100);
    nback_practice_collection.get('session_accuracy') += accuracy;
    console.log(nback_practice_collection.session_accuracy);
    $('p').text('Your 1-back was ' + accuracy + '% accurate.')
  }

});