import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Title from "../Title";
import Wrapper from "../Wrapper";
import friends from "../../friend.json";

class Game extends Component {
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };

  shuffleFriends = array => {
    if (this.state.currentScore === 0) {
      this.setState({rightWrong: ""})
    }
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
    this.setState({rightWrong: "You already picked that card, try again!"})
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    console.log(newScore)
    this.setState({ currentScore: newScore});
    if(newScore === 12) {
      this.setState({ rightWrong: "You win!" });
      this.handleReset();
    }
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } 
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
        });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = this.shuffleFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          alert={this.state.rightWrong}

        >
          {" "}
          Friends List{" "}
        </Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default Game;
