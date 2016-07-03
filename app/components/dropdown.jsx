import React from 'react';
import style from './../css/dropdown.css';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            value: 'Dropdown'
        }
    }

    expand() {
        this.setState({
            expanded: true
        })
    }

    collapse() {
        this.setState({
            expanded: false
        })
    }

    handleItemClick(e) {
        this.setState({
            expanded: false,
            value: e.target.innerText
        })
    }

    handleTriggerClick() {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    render() {
        let dropdown = undefined;
        if (this.state.expanded) {
            dropdown = (
              <div className={style.content}>
                  {this.props.options.map(item => {
                      return (
                        <div className= {style.item} key = {item} onClick= {(e) => {
                        this.handleItemClick(e);
                        }}>{item}</div>
                      )
                  })}
              </div>
            )
        }
        let dropdownStyle = this.state.expanded ? style.activeDropdown : style.dropdown;
        return (
          <div
            className= {dropdownStyle}
            tabIndex="0"
            onBlur= {() => {this.collapse()}}
          >
            <div
              className= {style.trigger}
              onClick = {() => this.handleTriggerClick()}
            >
                {this.state.value}
            </div>
              {dropdown}
          </div>
        )
    }
}