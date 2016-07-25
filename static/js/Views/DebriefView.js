var DebriefView = Backbone.View.extend({
  template: _.template(`
  <div id="debriefing">
    <h1>Debriefing</h1>

    <div id="debriefingtext">
    <p>Thank you for your participation in our study!  Your anonymous data makes an
    important contribution to our understanding of human learning and memory. </p>

    <p>We are interested in understanding how the immediate recall of verbal information changes under different conditions, and in how the effects of those conditions interact with each other.</p>
    <p>You may have noticed that the words presented in some of the trials formed complete, coherent sentences, whereas in other trials they were just jumbled lists.
    It is well established in the literature that immediate recall of sentences is more accurate than that of jumbled word lists (citation?).
    </p>

    <p>
    The objective of this experiment was to see whether this effect persisted in the presence of a second, cognitively intensive task, which in this case was the repeat task that you did in part II of the study.
    This experiment is a partial replication of a study published by Baddeley, Hitch & Allen in 2009, which found that the more accurate recall of sentences persisted in the presence of the secondary task. 
    Our purpose here was to ensure that these results remained robust in online environments, so that we might later study further manipulations of this task in the same way.
    </p>
    
    <p>If you have any questions about this research, you may contact the
    principal investigator, Dr. Christopher Honey.</p>
    </div>

      <p class="cool">Do you agree to the following statement?</p>
      <div id="affirmationbox">

        <p>I feel that I have been adequately debriefed about the nature
          of the study.  The investigator has explained the purposes of the
          research to me, and I feel that any questions I have asked were
          satisfactorily answered.</p>

            <div class="radio">
              <input type="radio" name="debrief-consent" id="debrief-consent-yes" value="1">
              Yes, I agree.
            </div>   

          <div class="radio">
              <input type="radio" name="debrief-consent" id="debrief-consent-no" value="0">
             No, please withold my data. I will contact the experimenter with questions.
            </div>
         </div>
      </div>
  </div>
    <div>
      <button type='button' id='next' value='next' class='btn btn-primary btn-lg button-submit'>Submit
        <span class='glyphicon glyphicon-arrow-right'></span>
      </button>
    </div>`),
  
  tagName: "div",

  events: {
    "click .button-submit":   "submitDebriefView",
  },

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template());
    return this
  },

 submitDebriefView: function() {
    this.remove()
  },

});