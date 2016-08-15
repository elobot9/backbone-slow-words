var PostQuestionnaireView = Backbone.View.extend({
  tagName: "div",


  events: {
    "click .continue":   "submitPostQuestionnaire",
  },

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template({instruction: "Post-Questionnaire"}));
    return this
  },

  submitPostQuestionnaire: function() {
  //write the input to the PsiTurk object
  var P1_difficulty = $('input[name="part1-difficulty"]:checked').attr('id');
  var P1_instructions = $('input[name="part1-instructions"]:checked').attr('id');
  var P1_instruct_feedback = $('#P1_instructions').val();
  var P1_practicetrial_prep = $('input[name=part1-practicetrial]:checked').attr('id');
  var P1_practicetrial_amt = $('input[name=part1-practice-amt]:checked').attr('id');
  var P1_general = $('#pt1genFeedback').val();

  var P2_difficulty = $('input[name="part2-difficulty"]:checked').attr('id');
  var P2_instructions = $('input[name="part2-instructions"]:checked').attr('id');
  var P2_instruct_feedback = $('#P2_instructions').val();
  var P2_practicetrial_prep = $('input[name=part2-practicetrial]:checked').attr('id')
  var P2_practicetrial_amt = $('input[name=part2-practice-amt]:checked').attr('id');
  var P2_neglect = $('input[part2-neglect]:checked').attr('id')
  var P2_general = $('#pt2generalFeedback').val();

  var prev_experience = $('#prevExp').val();
  var age = $('#ageGroup').val();
  var gender = $('#gender').val();
  var handedness = $('#handedness').val();
  var lang_before6 = $('#languageBefore6').val();
  var lang_now = $('#languageNow').val()

  this.gatherData()

  psiTurk.recordTrialData({'phase': 'post-questionnaire', 'P1_difficulty': P1_difficulty, 'P1_instructions': P1_instructions, 'P1_instruct_feedback': P1_instruct_feedback, 
    'P1_practicetrial_prep': P1_practicetrial_prep, 'P1_practicetrial_amt': P1_practicetrial_amt, 'P1_general': P1_general, 
    'P2_difficulty': P2_difficulty, 'P2_instructions': P2_instructions, 'P2_instruct_feedback': P2_instruct_feedback, 'P2_practicetrial_prep' :P2_practicetrial_prep,
    'P2_practicetrial_amt': P2_practicetrial_amt, 'P2_neglect': P2_neglect, 'P2_general': P2_general, 'prev_experience': prev_experience,
    'age': age, 'gender': gender, 'handedness': handedness, 'lang_before6': lang_before6, 'lang_now': lang_now
  });
  psiTurk.saveData()
    this.remove();
    router.navigate("end", {trigger: true})
  },
  
  template: _.template(`
    <div id="container-questionnaire">
    <h1>Task Complete</h1>

    <hr />

    <p>You are finished!  Thank you for your contributions to science. You will be eligible for full payment once you answer the following questions.</p>

    <div class="instructions well">

        <form id="postquiz" action="debrief" method="post">


         <!-- self evaluation start -->
         <!--Basic Memory Task -->
         

         <div class = "row question">
            <div>
            How difficult did you find Part I of the experiment? (Remembering word lists only)
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="very-easy" value="1">
                Very Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="somewhat-easy" value="2">
                Somewhat Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="neither" value="3">
                Neither Easy Nor Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="somewhat-difficult" value="4">
                Somewhat Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="very-difficult" value="5">
                Very Difficult
                </label>
            </div>

         </div>

        <div class = "row question">
            <div>
            Were the instructions clear for this task? If not, please suggest how you would improve them in the text box below.
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-instructions" id="yes-clear" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-instructions" id="no-unclear" value="0">
              No
            </div>
            <div>
            <input type='text' id='P1_instructions' size='60' maxlength='400' />
            </div>
         </div>

         <div class = "row question">
            <div>
            Did the practice trial before this task help prepare you for the task itself?
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-practicetrial" id="yes-prepared" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-practicetrial" id="no-unprepared" value="0">
              No
            </div>
         </div>

        <div class = "row question">
            <div>
            Given the option, would you prefer to have:
            </div>
          <div class="radio">
              <input type="radio" name="part1-practice-amt" id="more-practice" value="2">
              More practice trials
            </div>
          <div class="radio">
              <input type="radio" name="part1-practice-amt" id="fewer-practice" value="1">
              Fewer practice trials
            </div>   

          <div class="radio">
              <input type="radio" name="part1-practice-amt" id="equal-practice" value="1">
              Same number of practice trials
            </div>  
         </div>

          <div class="row question">
              <div class>
                  Do you have any other general feedback about Part I of the experiment?
              </div>
              <div>
                  <input type='text' id='pt1genFeedback' size='60' maxlength='400' />
              </div>
        </div>



         <!-- Dual Task -->
         <div class = "row question">
            <div>
            How difficult did you find Part II of the experiment? (Remembering word lists alongside the Repeat Task)
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="2very-easy" value="1">
                Very Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="2somewhat-easy" value="2">
                Somewhat Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="2neither" value="3">
                Neither Easy Nor Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="2somewhat-difficult" value="4">
                Somewhat Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="2very-difficult" value="5">
                Very Difficult
                </label>
            </div>

         </div>

        <div class = "row question">
            <div>
            Were the instructions clear for this task? If not, could you suggest how you would improve them?
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-instructions" id="2yes-clear" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-instructions" id="2no-unclear" value="0">
              No
            </div>
            <div>
            <input type='text' id='P2_instructions' size='60' maxlength='400' />
            </div>
         </div>

         <div class = "row question">
            <div>
            Did the practice trial before this task help prepare you for the task itself?
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-practicetrial" id="2yes-prepared" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-practicetrial" id="2no-unprepared" value="0">
              No
            </div>
         </div>

        <div class = "row question">
            <div>
            Given the option, would you prefer to have:
            </div>
          <div class="radio">
              <input type="radio" name="part2-practice-amt" id="2more-practice" value="2">
              More practice trials
            </div>
          <div class="radio">
              <input type="radio" name="part2-practice-amt" id="2less-practice" value="1">
              Fewer practice trials
            </div>   

          <div class="radio">
              <input type="radio" name="part2-practice-amt" id="2equal-practice" value="0">
              Same number of practice trials
            </div>  
         </div>

        <div class = "row question">
            <div>
            In Part II of the experiment, did you find yourself neglecting one of the tasks so that you could do better on the other? If so, which did you neglect most often?:
            </div>
          <div class="radio">
              <input type="radio" name="part2-neglect" id="neglect-none" "value="0">
              I did not neglect either task
            </div>
          <div class="radio">
              <input type="radio" name="part2-neglect" id="neglect-repeat" value="1">
              I mostly neglected the repeat task
            </div>   

          <div class="radio">
              <input type="radio" name="part2-neglect" id="neglect-memory" value="2">
              I mostly neglected the memory task
            </div>

          <div class="radio">
              <input type="radio" name="part2-neglect" id="neglect-both" value="3">
              I neglected both tasks equally at different times
            </div>
         </div>

        <div class="row question">
              <div class>
                  Do you have any other general feedback about Part II of the experiment?
              </div>
              <div>
                  <input type='text' id='pt2generalFeedback' size='60' maxlength='400' />
              </div>
        </div>

         <!-- Dual Task End -->

         <!--self evaluation end --> 

        <!-- Demographic Info -->
        <!-- beginning of a question -->
            <div class="row question">
                <div class>
                    Have you encountered an experiment like this before? If so, please briefly describe.
                </div>
                <div>
                    <input type='text' id='prevExp' size='60' maxlength='400' />
                </div>
            </div>
            <!-- end of a question -->

        <div class="row question">
                <div>
                    Please select your age group.   
                </div>
                <div>                    
            <select name="ageGroup" id="ageGroup" >
            <option style="padding-left:0px;" value="">Select your Age Group</option>
            <option value="19-">19-</option>
            <option value="20-24">20-24</option>
            <option value="25-29">25-29</option>
            <option value="30-34">30-34</option>
            <option value="35-39">35-39</option>
            <option value="40-44">40-44</option>
            <option value="45-49">45-49</option>
            <option value="50-54">50-54</option>
            <option value="55-59">55-59</option>
            <option value="60-64">60-64</option>
            <option value="65-69">65-69</option>
            <option value="70-74">70-74</option>    
            <option value="75-79">75-79</option>
            <option value="80-84">80-84</option>
            <option value="85+">85+</option>    
            </select>
                </div>
            </div>
        <div class="row question">
                <div>
                    Please select your gender.
                </div>
                <div>
            <select name="gender" id="gender" >
            <option style="padding-left:0px;" value="">Select your Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="x">Neither/Prefer not to say</option>
            </select>
                </div>
            </div>
        <div class="row question">
                <div>
                    Please select your dominant hand (i.e. Are you left or right handed?).
                </div>
                <div>
            <select name="handedness" id="handedness" >
            <option style="padding-left:0px;" value="">Select your Handedness</option>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
            </select>
                </div>
            </div>
        <div class="row question">
                <div>
                    What languages did you speak before age 6?
                </div>
                <div>
                    <input type='text' id='languageBefore6' size='60' maxlength='400' />
                </div>
</div>
        <div class="row question">
                <div>
                    What languages do you speak fluently now? (Include languages listed in the above question if they still apply.)
                </div>
                <div>
                    <input type='text' id='languageNow' size='60' maxlength='400' />
                </div>
</div>


        </form>
    </div>

    <hr />

    <div class="instructionsnav">
        <div class="row">
            <div class="col-xs-2">
            </div>
            <div class="col-xs-7">
            </div>
            <div class="col-xs-3">
                <button type="button" id="next" value="next" class="btn btn-primary btn-lg continue">
                    Continue <span class="glyphicon glyphicon-arrow-right"></span>
                </button>
            </div>
        </div>
    </div>
`),

gatherData: function(){
  window.words_collection.each(function(word_trial){
    var data_object = word_trial.toDataObject()
    psiTurk.recordTrialData(word_trial.toDataObject());
  })
  window.dual_task_trials.each(function(dual_task_trial){
    var data_object = dual_task_trial.toDataObject()
    psiTurk.recordTrialData(dual_task_trial.toDataObject());
  });
  psiTurk.saveData()
}

});