import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import friends from " ./friend.json";



function shuffleFriends(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {
    //     // Set this.state
    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        rightWrong: "",
        clicked: [],
    };

    //     handleClick = id => {
    //         if (this.state.clicked.indexOf(id) === -1) {
    //             this.handleIncrement();
    //             this.setState({ clicked: this.state.clicked.concat(id) });
    //         } else {
    //             this.handleReset();
    //         }
    //     };

    //     handleIncrement = () => {
    //         const newScore = this.state.currentScore + 1;
    //         this.setState({
    //             currentScore: newScore,
    //             rightWrong: ""
    //         });
    //         if (newScore >= this.state.topScore) {
    //             this.setState({ topScore: newScore });
    //         } else if (newScore === 12) {
    //             this.setState({ rightWrong: "You win!" });
    //         }
    //         this.handleShuffle();
    //     };

    //     handleReset = () => {
    //         this.setState({
    //             currentScore: 0,
    //             topScore: this.state.topScore,
    //             clicked: []
    //         });
    //         this.handleShuffle();
    //     };

    //     handleShuffle = () => {
    //         let shuffledFriends = shuffleFriends(friends);
    //         this.setState({ friends: shuffledFriends });
    //     };


    // }

    // export default App;