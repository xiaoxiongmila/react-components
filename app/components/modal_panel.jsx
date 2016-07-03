import React from 'react';
import Modal from './modal';
import styles from './../css/modal.css';

export default class ModalPanel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            modalIsOpen: false
        }
    }
    toggleModal() {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }
    render(){

        return (
          <div className={styles.container}>
              <a href='#' className={styles.headline} onClick={this.toggleModal.bind(this)}>{ this.state.modalIsOpen ? 'Close Modal' : 'Open Modal' }</a>
              <Modal open={this.state.modalIsOpen}>
                  <h1 className={styles.headline}>Hi I'm a Modal</h1>
                  <p>I've been built with React and ES6, <a href="#">rad</a></p>
              </Modal>
          </div>
        )
    }
}