console.log("initialized");

/*Best Practices Source: https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/*/

var s,
CountWidget = {

  settings: {
    repCounter: 0,
    setCounter: 0,
    incrementer: $(".incrementer"),
    plusOne: $("#plusOne"),
    minusOne: $("#minusOne"),
    repCounterEle: $("#repCount"),
    squat: {
      sets: 3,
      reps: 5
    }
  },

  init: function() {
    s = this.settings;
    this.bindUIActions();
    s.repCounterEle.text(s.repCounter);
  },

  bindUIActions: function(){
    s.incrementer.on("click", function(){
      CountWidget.countRep(this.id) //change to this.parent.find(".countTracker").id to navigate DOM to correct scope
    })
  },

  countRep: function(eleID){
    //ternary conditional to set counter to rep or set counter passed on eleID input (id value)
    if(eleID === "plusOne"){
        s.repCounter = s.repCounter +1;
    }else if(eleID === "minusOne"){
      if(s.repCounter > 0){
        s.repCounter = s.repCounter -1;
      }
    };
    if(s.repCounter >= s.squat.reps){
      s.repCounterEle.css("color", "red")
    }else if(s.repCounter < s.squat.reps){
      s.repCounterEle.css("color", "black")
    };
    if(s.repCounter > 0){
      s.repCounterEle.animate({"font-size": "4.5em"}, 200)
          .animate({"font-size": "3em"}, 200);
    }
    s.repCounterEle.text(s.repCounter);
  }

};

(function() {
  CountWidget.init();
})();