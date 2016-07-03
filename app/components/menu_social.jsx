let styles = {};
import React from 'react';
import style from './../css/menu_animation.css';
import FontAwesome from './../../node_modules/font-awesome/css/font-awesome.css';
//import FontAwesome from 'font-awesome';
Object.assign(styles, style, FontAwesome);

export default class MenuSocial extends React.Component {

    render() {
        let socialStyles = this.props.open ? styles.socialOpen : styles.socialWrapper;

        return (
          <div className={socialStyles}>
              {this.props.socialLinks.map((link, index) => {

                  return (
                    <a href={link.url} key={`anchor-${index}`}>

                        <i className={ link.icon } key={`icon-${index}`}></i>
                    </a>
                  )
              })}
          </div>
        )
    }
}