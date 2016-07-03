import React from 'react';
import style from './../css/menu_animation.css';

export default class MenuLink extends React.Component {
    render() {
        let linkStyles = this.props.open ? style.linksWrapper : style.linksWrapperClosed;
        const linkList = this.props.links.map((link, index) => {
            return (
              <li className= {style.listItem} key = {`list-${index}`}>
                  <a href={link.url} target="_blank" key = {`anchor-${index}`}>{link.name}</a>
              </li>
              )

        })
        return (
            <div className= {linkStyles}>
                <ul className= {style.linkList}>
                    {linkList}
                </ul>
            </div>
        )
    }
}

//Error caught