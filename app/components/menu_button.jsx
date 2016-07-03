let styles = {};
import React from 'react';
import style from './../css/menu_animation.css';
import FontAwesome from './../../node_modules/font-awesome/css/font-awesome.css';
//import FontAwesome from 'font-awesome';
Object.assign(styles, style, FontAwesome);

export default class MenuButton extends React.Component {
    render() {
        let buttonStyles = this.props.open ? styles.closeButton : styles.menuToggle;
        return (
          <button
            className= { buttonStyles }
            onClick = {this.props.toggle}
          >
              <i className={ styles.faPlus }></i>
          </button>
        )
    }
}