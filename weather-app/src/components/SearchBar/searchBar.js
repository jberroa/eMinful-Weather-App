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
    citySelected: false
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

    this.props.addCity(this.state.text);

    let suggestion = this.props.places.suggestions.filter((item, index) => {
      return this.state.text === item.city;
    });

    this.props.setSuggestions({});
    this.props.getWeather(
      this.state.text.split(",", 1).map(item => {
        return item.trim();
      })
    );

    this.props.getCityLocation(suggestion["0"].placeId.trim());
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
          {this.props.places.suggestions.length > 0 &&
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
