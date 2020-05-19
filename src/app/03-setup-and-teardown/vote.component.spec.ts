import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('Should increment totalVoted when upvoted', () => {
    // Arrange
    // let component: VoteComponent;

    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('Should decrement totalVoted when downvoted', () => {

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});

