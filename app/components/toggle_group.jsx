import React from 'react';
import style from './../css/radio.css';

export default class ToggleGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            items: [
                {value: "a", label: "Option 1"},
                {value: "b", label: "Option 2"},
                {value: "c", label: "Option 3"},
                {value: "d", label: "Option 4", disabled: true},
                {value: "e", label: "Option 5"}
            ]
        }
    }
    onChange = (e) => {
        let value = e.target.value;
        this.setState({
            value: value
        })
    }

    render() {
        return (
          <div {...this.props}>
              {this.state.items.map(item => {
                  return (
                    <label key={item.value}>
                        <input
                          type="radio"
                          checked={this.state.value === item.value}
                          disabled={item.disabled}
                          value={item.value}
                          name={this.props.name}
                          onChange={this.onChange}
                        />
                        <span>{item.label}</span>
                    </label>
                  )
              })}
          </div>
        )
    }
}

ToggleGroup.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func
};
