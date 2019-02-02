import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../Common/Button";

const SearchForm = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;

  @media only screen and (max-width: 400px) {
    flex-wrap: wrap;
    flex: 0 0 90%;
    /* justify-content: center space-evenly; */
  }
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: #f4f2f2;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  transition: all 0.2s;

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

export default class SearchBar extends Component {
  render() {
    return (
      <SearchForm>
        <SearchInput placeholder="Search City" />
        <Button>Search</Button>
      </SearchForm>
    );
  }
}
