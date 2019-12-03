import React, { Component } from "react";
import PropTypes from "prop-types";
import Users from '../../containers/SearchUsers';
import axios from 'axios';

// https://medium.com/shriram-navaratnalingam/authentication-using-github-oauth-2-0-with-nodejs-be1091ce10a7


class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",

      users: []
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });

    axios.get('https://api.github.com/search/users?q=' + this.state.userInput)
    .then(response => {
        const users = response.data.items;
        const updatedUsers = users.map(users => {
            return {
                ...users,
            }
        })
        this.setState({users: updatedUsers});
        console.log('response:', this.state.users);
    })
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    console.log(e.currentTarget)
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
      const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (this.state.users.length) {
        console.log("users", this.state.users.map)
        suggestionsListComponent = (
          <ul class="suggestions">
            {this.state.users.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              // if (index === activeSuggestion) {
              //   className = "suggestion-active";
              // }

              return (
                <div
                  className="user-card"
                  key={suggestion.id}
                  onClick={onClick}
                >
                  <div className="user-avatar">
                    <img src={suggestion.avatar_url} alt="user avatar"/>
                  </div>
                  <div className="user-name">
                    <b>{suggestion.login}</b>
                  </div>
                </div>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>Users not found!</em>
          </div>
        );
      }
    }

    return (
      <div className="search-bar">
        <input
          placeholder={this.props.placeholder}
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </div>
    );
  }
}

export default Autocomplete;