var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = new Dancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var alreadyHaveOne = false;
   this.$node.mouseover(function(e){
   if(!alreadyHaveOne){
     $('<img src="./images/sparkler.gif" />')
       .css({'height': '100px',
             'width' : '100px',
       })
       .appendTo(this);
       $(this).css('border', '0')
       alreadyHaveOne = true;
   }
   })
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step;
    // call the old version of step at the beginning of any call to this new version of step

    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
     this.$node.toggle();
};

BlinkyDancer.prototype.lineup = function() {
  $('.lineup').on('click', function(){
    for(let i = 0; i < window.dancers.length; i++){
      window.dancers[i.toString()].setPosition(100, $("body").width() * Math.random())
      console.log(window.dancers[i.toString()], 'after for loop');
    }
  })
}
