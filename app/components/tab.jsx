import React from 'react';
import style from './../css/main.css';

export default class Tab extends React.Component {
    render(){
        return (
          <div>
              {this.props.children}
          </div>
        )
    }
}