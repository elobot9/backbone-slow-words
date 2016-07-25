var PostQuestionnaireView = Backbone.View.extend({
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
            How difficult did you find Part I of the experiment? (The Basic Memory Task)
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1difficult1" value="1">
                Very Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1difficult2" value="2">
                Somewhat Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1difficult3" value="3">
                Neither Easy Nor Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1difficult4" value="4">
                Somewhat Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1difficult5" value="5">
                Very Difficult
                </label>
            </div>

         </div>

         <div class = "row question">
            <div>
            How well do you feel you did on Part I of the experiment?
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-performance" id="P1performance1" value="1">
                Very Poorly
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1performance2" value="2">
                Somewhat Poorly
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1performance3" value="3">
                Neither Poorly nor Well
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1performance4" value="4">
                Somewhat Wel
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part1-difficulty" id="P1performance5" value="5">
                Very Well
                </label>
            </div>

         </div>

        <div class = "row question">
            <div>
            Were the instructions clear for this task? If not, could you suggest how you would improve them?
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-instructions" id="part1-instructions-yes" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-instructions" id="part1-instructions-no" value="0">
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
              <input type="radio" name="part1-practicetrial" id="part1-practicetrial-yes" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part1-practicetrial" id="part1-practicetrial-no" value="0">
              No
            </div>
         </div>

        <div class = "row question">
            <div>
            Given the option, would you prefer to have:
            </div>
          <div class="radio">
              <input type="radio" name="part1-practice-amt" id="part1-practicetrial-more" value="2">
              More practice trials
            </div>
          <div class="radio">
              <input type="radio" name="part1-practice-amt" id="part1-practicetrial-fewer" value="1">
              Fewer practice trials
            </div>   

          <div class="radio">
              <input type="radio" name="part1-practice-amt" id="part1-practicetrial-equal" value="1">
              Same number of practice trials
            </div>  
         </div>


         <!-- Dual Task -->
         <div class = "row question">
            <div>
            How difficult did you find Part II of the experiment? (Memory Task + Repeat Task)
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="P2difficult1" value="1">
                Very Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="P2difficult2" value="2">
                Somewhat Easy
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="P2difficult3" value="3">
                Neither Easy Nor Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="P2difficult4" value="4">
                Somewhat Difficult
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-difficulty" id="P2difficult5" value="5">
                Very Difficult
                </label>
            </div>

         </div>

         <div class = "row question">
            <div>
            How well do you feel you did on Part II of the experiment?
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-performance" id="P2performance1" value="1">
                Very Poorly
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-performance" id="P2performance2" value="2">
                Somewhat Poorly
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-performance" id="P1performance3" value="3">
                Neither Poorly nor Well
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-performance" id="P2performance4" value="4">
                Somewhat Wel
                </label>
            </div>
            <div class = "radio">
                <label> 
                <input type="radio" name="part2-performance" id="P2performance5" value="5">
                Very Well
                </label>
            </div>

         </div>

        <div class = "row question">
            <div>
            Were the instructions clear for this task? If not, could you suggest how you would improve them?
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-instructions" id="part2-instructions-yes" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-instructions" id="part2-instructions-no" value="0">
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
              <input type="radio" name="part2-practicetrial" id="part2-practicetrial-yes" value="1">
              Yes
            </div>
            <div class="radio-inline">
              <input type="radio" name="part2-practicetrial" id="part2-practicetrial-no" value="0">
              No
            </div>
         </div>

        <div class = "row question">
            <div>
            Given the option, would you prefer to have:
            </div>
          <div class="radio">
              <input type="radio" name="part2-practice-amt" id="part2-practicetrial-more" value="2">
              More practice trials
            </div>
          <div class="radio">
              <input type="radio" name="part2-practice-amt" id="part2-practicetrial-fewer" value="1">
              Fewer practice trials
            </div>   

          <div class="radio">
              <input type="radio" name="part2-practice-amt" id="part2-practicetrial-equal" value="0">
              Same number of practice trials
            </div>  
         </div>


        <div class = "row question">
            <div>
            In Part II of the experiment, did you find yourself to be more accurate on:
            </div>
          <div class="radio">
              <input type="radio" name="part2-accuracy" id="part2-accuracy-memory" value="2">
              More practice trials
            </div>
          <div class="radio">
              <input type="radio" name="part2-accuracy" id="part2-accuracy-repeat" value="1">
              Fewer practice trials
            </div>   

          <div class="radio">
              <input type="radio" name="part2-accuracy" id="part2-accuracy-equal" value="0">
              Same number of practice trials
            </div>
         </div>

        <div class = "row question">
            <div>
            In Part II of the experiment, did you find yourself neglecting one of the tasks so that you could do better on the other? If so, which did you neglect most often?:
            </div>
          <div class="radio">
              <input type="radio" name="part2-neglect" id="part2-neglect-none "value="0">
              I did not neglect either task
            </div>
          <div class="radio">
              <input type="radio" name="part2-neglect" id="part2-neglect-repeat" value="1">
              I mostly neglected the repeat task
            </div>   

          <div class="radio">
              <input type="radio" name="part2-neglect" id="part2-neglect-memory" value="2">
              I mostly neglected the memory task
            </div>

          <div class="radio">
              <input type="radio" name="part2-neglect" id="part2-neglect-both" value="3">
              I neglected both tasks equally at different times
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
                    What languages did you speak before age 6? What languages do you speak fluently now?
                </div>
                <div>
                    <input type='text' id='language' size='60' maxlength='400' />
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
  
  tagName: "div",

  // className: "instructions-container",

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
    this.remove();
    router.navigate("debrief", {trigger: true})
  },

});