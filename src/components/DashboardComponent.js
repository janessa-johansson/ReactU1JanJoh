import React, { Component } from 'react'
import UserComponent from '../components/UserComponent';
import WrapperComponent from '../components/WrapperComponent';
import style from '../style/Dashboard.module.css';

export default class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ['pelle', 'kalle'],
      color: true,
      value: ''
    }
  }

  addUser = (event) => {
    const newUser = this.state.value;
    event.preventDefault();

    this.setState({
      user: [...this.state.user, newUser]
    })

    this.setState({
      value: ''
    });
  }

  removeUser = (e) => {
    var array = [...this.state.user]; // make a separate copy of the array
    var index = array.indexOf(e.target.value)
    if (index !== 1) {
      array.splice(index, 1);
      this.setState({ user: array });
    }

    this.setState({
      value: ''
    });
  }

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  }


  toggleColor = () => {
    this.setState(state => ({ color: !state.color }));
  }

  render() {
    return (
      <div className={style["wrapper"]}>
        <div className={style["userrender"]}>
          <WrapperComponent>
            <UserComponent
              showUsers={this.state.user}
              showColor={this.state.color}
            />
            <button onClick={this.toggleColor}>Toggle Color</button>
          </WrapperComponent>
        </div>
        <div>
          <WrapperComponent>
            <form className={style["useredit"]} onSubmit={this.addUser}>
              <input type="text" value={this.state.value} onChange={this.handleInput} />
              <button className={style["add"]} type="submit" value="Submit">Add</button>
            </form>
            <button className={style["remove"]} onClick={this.removeUser}>Remove</button>
          </WrapperComponent>
        </div>
      </div>
    )};
}
