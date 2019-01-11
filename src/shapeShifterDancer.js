var ShapeShifterDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="shapeShifterDancer"></span>');
  this.setPosition(top, left);
};

ShapeShifterDancer.prototype = Object.create(Dancer.prototype);
ShapeShifterDancer.prototype.constructor = ShapeShifterDancer;

ShapeShifterDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step;
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    var pixel = this.pixelRandomizer();
    this.$node.toggle(function(){
    $('.shapeShifterDancer').css('border', pixel + 'px solid rgba(242, 130, 44, 0.6)');
  });
};

ShapeShifterDancer.prototype.pixelRandomizer = function(){
  var pixel = Math.floor(Math.random() * 50);
  return pixel;
}

ShapeShifterDancer.prototype.lineup = function() {
   $('.lineup').on('click', function(){
    for(let i = 0; i < window.dancers.length; i++){
      window.dancers[i.toString()].setPosition(100, $("body").width() * Math.random())
      console.log(window.dancers[i.toString()], 'after for loop');
    }
  })
}
