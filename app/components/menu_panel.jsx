import React from 'react';
import style from './../css/menu_animation.css';

import MenuSocial from './menu_social';
import MenuLink from './menu_link';

export default class MenuPanel extends React.Component {
    render() {
        let panelStyles = this.props.open ? style.menuOpen : style.menuWrapper;
        return (
          <div className={ panelStyles }>
              <MenuLink
                links= {this.props.links}
                open={this.props.open}
              />

              <MenuSocial
                socialLinks={this.props.socialLinks}
                open={this.props.open}
              />
          </div>
        )
    }
}