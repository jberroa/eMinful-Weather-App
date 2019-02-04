import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../common/Button";

const SearchForm = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media only screen and (max-width: 400px) {
    flex-wrap: wrap;
    flex: 0 0 90%;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
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

  :hover {
    background-color: #f5f5f5;
    color: #4fc3f7;
    cursor: pointer;
    font-weight: 700;
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
    text: ""
  };
  onTextChange = event => {
    this.props.getSuggestions(event.target.value);
    this.setState({ text: event.target.value });
  };

  onSuggestedItemClick = city => {
    // event.preventDefault();
    this.setState({ text: city });
    this.props.setSuggestions();
  };

  renderSuggestions = () => {
    return (
      <Suggestions>
        {this.props.places.suggestions.map((city, index) => (
          <SuggestionItem
            onClick={() => this.onSuggestedItemClick(city)}
            key={index}
          >
            {city}
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
          {this.props.places.suggestions.length > 0 && this.renderSuggestions()}
        </SearchWrapper>
        <ButtonContainer>
          <Button>Add City</Button>
        </ButtonContainer>
      </SearchForm>
    );
  }
}
