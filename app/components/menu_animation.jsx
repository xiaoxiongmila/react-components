import React from 'react';
import MenuPanel from './menu_panel';
import MenuButton from './menu_button';

import style from './../css/menu_animation.css';


export default class MenuAnimation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let linksArray = [
            { name: "home", url: "#" },
            { name: "log in", url: "#" },
            { name: "photos", url: "#" },
            { name: "contact", url: "#" },
            { name: "download", url: "#"}
        ];

        let socialArray = [
            {
                icon: "faGithubSquare",
                url: "https://github.com/matthewvincent"
            },
            {
                icon: "faInstagram",
                url: "https://www.instagram.com/middlestates/"
            },
            {
                icon: "faTumblrSquare",
                url: "http://matthewvincentphotography.com/"
            }
        ];

        return (
          <div>
              <MenuPanel
                open = {this.state.open}
                links = {linksArray}
                socialLinks = {socialArray}
              />
              <MenuButton
                toggle = {this.toggleMenu}
                open = {this.state.open}
              />
          </div>
        )
    }
}