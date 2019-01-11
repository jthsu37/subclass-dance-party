var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="rainbowDancer"></span>');
  this.setPosition(top, left);
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

RainbowDancer.prototype.step = function() {
  var oldStep = Dancer.prototype.step;
    // call the old version of step at the beginning of any call to this new version of step

    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
    var color = this.colorRandomizer();
    this.$node.toggle(function(){
    $('.rainbowDancer').css('border', '10px solid ' + color);
  });
};

RainbowDancer.prototype.colorRandomizer = function(){
  var r = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

RainbowDancer.prototype.lineup = function() {
   $('.lineup').on('click', function(){
    for(let i = 0; i < window.dancers.length; i++){
      window.dancers[i.toString()].setPosition(100, $("body").width() * Math.random())
      console.log(window.dancers[i.toString()], 'after for loop');
    }
  })
}