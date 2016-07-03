import React from 'react'
import styles from './../css/modal.css';

export default class Modal extends React.Component {
    render(){
        let modalStyles = this.props.open ? styles.modalIsOpen : styles.modalIsClosed;
        //console.log(this.props.children);
        return(
          <div className = { modalStyles}>{this.props.children}</div>
        )
    }
}