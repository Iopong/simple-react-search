import React, { Component } from "react";
import "./styles.css";

export function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

export function HeaderSearch(props) {
  return (
    <div className="header-box">
      <label htmlFor="header-search" className="search-label">
        {props.title}
      </label>
      <input
        type="search"
        id="header-search"
        name="header-search"
        className="search"
        placeholder="Filter by..."
        onChange={e => props.onSearch(e.target.value)}
      />
    </div>
  );
}

export function Items(props) {
  const { items } = props;

  return (
    <div className="items-container">
      {items.map(item => {
        return (
          <div key={item.id}>
            <li>{item.name} </li>
          </div>
        );
      })}
    </div>
  );
}

export class Main extends Component {
  state = {
    filteredValue: "",
    filtered: []
  };

  onFilterSearch = value => {
    const { items } = this.props;

    this.setState({
      filteredValue: value,
      filtered: items.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    });
  };

  getItems = () => {
    const { filteredValue, filtered } = this.state;
    let data;

    if (filteredValue.length) {
      data = filtered && filtered.length > 0 ? filtered : [];
    } else {
      data = this.props.items;
    }
    return data;
  };

  render() {
    let searchItems = this.getItems();
    return (
      <div className="container">
        <HeaderSearch title="Tool" onSearch={this.onFilterSearch} />
        <Items items={searchItems} />
      </div>
    );
  }
}
