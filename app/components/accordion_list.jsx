import React from 'react';

import style from './../css/accordian.css';

export default class AccordionList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        };
    }
    handleClick() {
       this.setState({
           open: !this.state.open
       })
    }

    render() {
        const cx = classNames({
            [style.sectionOpen]: !this.state.open,
            [style.section]: this.state.open
        });
        return (
          <div className= {cx} onClick = {this.handleClick.bind(this)}>
              <button>toggle</button>
              <div className={style.sectionhead}>{this.props.title}</div>
              <div className= {style.articlewrap} >
                  <div className={style.article}>
                      {this.props.children}
                  </div>
              </div>
          </div>
        )
    }
}