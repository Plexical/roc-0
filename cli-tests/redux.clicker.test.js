import * as clicker from '../app/redux/clicker';

describe ("The example clicker", () => {
  it("Should have a 'click' action creator", () => {
    clicker.click(1).should.eql({type: 'CLICKED', increment: 1});
  });
});
