// Function Component
// Props: färg, användare
// Syfte: renderar ett en användare

import React, { Component, Fragment } from 'react'
import style from '../style/User.module.css';

export default class UserComponent extends Component {
  render() {
    const users = this.props.showUsers.map((user, i) => {
      return <p key={i} style={{ color: this.props.showColor === true ? 'blue' : 'red' }}>{user}</p>
    })

    return (
      <Fragment>
        <div>
          <span>{users}</span>
        </div>
      </Fragment>
    )};
}
