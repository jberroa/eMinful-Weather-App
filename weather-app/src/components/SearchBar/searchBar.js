import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  width: 80%;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: #f4f2f2;
  border: none;
  border-radius: 100px;
  transition: all 0.2s;
  width: 90%;
  padding: 0.7rem 2rem;
  align-self: center;
  &:focus {
    outline: none;
    width: 100%;
    background-color: #f0eeee;
  }

  ::-webkit-input-placeholder {
    font-weight: 100;
    color: #ccc;
  }
`;

const Suggestions = styled.ul`
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 143px;
  overflow-y: auto;
  padding-left: 0;
  width: 100%;
`;

const SuggestionItem = styled.li`
  padding: 0.5rem;
  font-size: 12px;
  :hover {
    background-color: #f5f5f5;
    color: #4fc3f7;
    cursor: pointer;
    font-weight: 400;
  }
  :not(:last-of-type) {
    border-bottom: 1px solid #999;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-start;
`;

export default class SearchBar extends Component {
  state = {
    text: "",
    citySelected: false,
    activeSuggestion: 0
  };
  onTextChange = event => {
    this.props.getSuggestions(event.target.value);
    this.setState({ text: event.target.value, citySelected: false });
  };

  onSuggestedItemClick = city => {
    // event.preventDefault();
    this.setState({ text: city, citySelected: true });
  };

  onAddItemClick = event => {
    event.preventDefault();

    this.props.addCity(
      this.props.places.suggestions.find(item => {
        return this.state.text === item.city;
      })
    );

    this.setState({ text: "", citySelected: false });
  };
  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        text: this.props.places.suggestions[activeSuggestion],
        citySelected: true,
        activeSuggestion: 0
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
      if (activeSuggestion - 1 === this.props.places.suggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  renderSuggestions = () => {
    return (
      <Suggestions>
        {this.props.places.suggestions.map((place, index) => (
          <SuggestionItem
            onClick={() => this.onSuggestedItemClick(place.city)}
            key={index}
          >
            {place.city}
          </SuggestionItem>
        ))}
      </Suggestions>
    );
  };
  render() {
    return (
      <SearchForm>
        <SearchWrapper>
          <SearchInput
            value={this.state.text}
            onChange={this.onTextChange}
            placeholder="Search City"
          />
          {this.state.text.length > 0 &&
            this.props.places.suggestions.length > 0 &&
            !this.state.citySelected &&
            this.renderSuggestions()}
        </SearchWrapper>
        <ButtonContainer>
          <Button
            onClick={this.onAddItemClick}
            disabled={!this.state.citySelected}
          >
            Add City
          </Button>
        </ButtonContainer>
      </SearchForm>
    );
  }
}
