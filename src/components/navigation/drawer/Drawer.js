import React, { Component } from 'react';
import styles from './Drawer.module.css';
import { Backdrop } from "../../UI/backdrop/Backdrop";

const links = ['quiz', 'menu', 'contacts']

export class Drawer extends Component {

  renderLinks() {
    return ( links.map((link, index) => {
      return (
        <li key={index}>
          <a>
            {link}
          </a>
        </li>
      )}))
  }

  render() {
    const classNameArr = [styles.drawer]

    if (!this.props.isOpen) {
      classNameArr.push(styles.close)
    }

    return (
      <React.Fragment>
        { this.props.isOpen && <Backdrop onClick={this.props.onClose}/> }
      <nav className={classNameArr.join(' ')}>
        <ul>
          { this.renderLinks() }
        </ul>
      </nav>
      </React.Fragment>
    )
  }

}