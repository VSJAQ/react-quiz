import React, {Component} from "react";
import styles from './Layout.module.css'
import { MenuToggle } from "../components/navigation/menuToggele/MenuToggle";

class Layout extends Component {

  state = {
    isOpen: false
  }

  toggleMenuHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className={styles.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.isOpen}
        />
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout