var AudioCaptchaView = Backbone.View.extend({
  template: _.template(`
    <div class="instruction"><%= instruction %></div>
    <% if (show_form == true) { %>
      <button class="btn btn-primary btn-lg captcha-replay">Play Audio</button>
      <div id=captcha_form>
        <input type="radio" name="captcha" value="A"> A </input><br>
        <input type="radio" name="captcha" value="B"> B </input><br>
        <input type="radio" name="captcha" value="C"> C </input><br>
        <input type="radio" name="captcha" value="D"> D </input><br>
        <input type="radio" name="captcha" value="E"> E </input><br>
        <input type="radio" name="captcha" value="F"> F </input><br>
        <input type="radio" name="captcha" value="G"> G </input><br>
        <input type="radio" name="captcha" value="H"> H </input><br>
        <input type="radio" name="captcha" value="I"> I </input><br>
        <input type="radio" name="captcha" value="J"> J </input><br>
      </div>
    <% } %>
    `),
  
  tagName: "div",

  className: "instructions-container",

  events: {
    "click .button-next":          "loadNextAttempt",
    "change input[type=radio]":    "submitAudioCaptcha",
    "click .captcha-replay": "playAudio"
  },

  iteration: 0,

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template({instruction: 'Press play to hear a letter, then select the letter that you heard.', show_form: true}));
    return this
  },

  playAudio: function() {
    this.model.playStimuli();
  },

 submitAudioCaptcha: function(e) {
    var user_answer = e.target.value
    if(user_answer == this.model.get('correct_answer')){
      router.navigate('instructions/' + 3, {trigger: true})
    }
    else {
      if (this.iteration == 0) { //this is the first attempt
        this.iteration++;
        this.$el.html(`You have failed to complete the audio check. <br><br> 
          Please ensure that the volume on your computer is raised to an audible level.<br>
          If you are using Internet Explorer verion 9.0 or earlier, please switch to a more modern browser.<br>
          If you are not using them already, wearing headphones is advised.<br><br>

          When you are ready, please click the "Next" button to begin your second attempt at the audio captcha.<br>
          Note that if you submit the wrong answer this time, you will be unable to proceed with the experiment. 
          <div>
            <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-next'>
              Next <span class='glyphicon glyphicon-arrow-right'></span>
            </button>
          </div>`)
      }
      else {
        this.$el.html(`
          You have failed your second chance to complete the audio check.
          This suggests that your browser or computer are unable to play
          the audio files required for this experiment, so we cannot allow you to proceed.
          `)
      }
    }
  },

  loadNextAttempt: function() {
    this.model.setStimuli();
    this.render();
  }

});