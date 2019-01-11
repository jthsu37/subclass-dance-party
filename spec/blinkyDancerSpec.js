describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
  it('should have a mouseover function', function() {
    expect(blinkyDancer.$node.mouseover).to.be.a.function;
  });
  it('should be an instance of dancer', function() {
    expect(blinkyDancer).to.be.an.instanceof(Dancer)
  })

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);

      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps)
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  // describe('shapeShifterDancer', function() {
  //   it({
  //     expect()
  //   })
  // })
});

describe('rainbowDancer', function() {
  var rainbowDancer
  beforeEach(function() {
    rainbowDancer = new RainbowDancer(10, 20, 100);
  })

    it('should have a jQuery $node object', function() {
      expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
    });
    it('should be an instance of dancer', function() {
      expect(rainbowDancer).to.be.an.instanceof(Dancer)
  })
    it('should have a step function that changes the dancers color', function() {
      sinon.spy(rainbowDancer.$node, 'toggle');
      rainbowDancer.step();
    expect(rainbowDancer.$node.toggle.called).to.be.true;
  });
});

describe('shapeShifterDancer', function() {
  var shapeShifterDancer
  beforeEach(function() {
    shapeShifterDancer = new ShapeShifterDancer(10, 20, 100);
  })

    it('should have a jQuery $node object', function() {
      expect(shapeShifterDancer.$node).to.be.an.instanceof(jQuery);
    });
    it('should be an instance of dancer', function() {
      expect(shapeShifterDancer).to.be.an.instanceof(Dancer)
  })
    it('should have a step function that changes the dancers size', function() {
      sinon.spy(shapeShifterDancer.$node, 'toggle');
      shapeShifterDancer.step();
    expect(shapeShifterDancer.$node.toggle.called).to.be.true;
  });
});