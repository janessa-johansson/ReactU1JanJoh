import React, { Component, Fragment } from 'react';
import style from '../style/Wrapper.module.css';

export default class WrapperComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ display: !state.display }));
  };

  render() {
    const show = 'Show content'
    const hide = 'Hide content'
    const buttonText = this.state.display ? <span>{hide}</span> : <span>{show}</span>;
    
    return (
      <Fragment>
        {this.state.display && this.props.children}
        <div className={style["card"]}>
          <hr/>
          <button className={style["content"]} onClick={this.toggleShow}>{buttonText}</button>
        </div>
      </Fragment>
    )};
}

