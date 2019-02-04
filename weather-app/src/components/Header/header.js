import React, { Component } from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/searchBar";

const Header = styled.header`
  font-size: 1.4rem;
  background-color: #fff;
  border-bottom: 1px solid #f4f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class HeaderContainer extends Component {
  render() {
    return (
      <Header>
        <SearchBar {...this.props} />
      </Header>
    );
  }
}
