import React from 'react';
import DragDropList from './drag_drop_list';
export default class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange']
        }
    }
    render(){
        return (
          <div>
              <DragDropList colors = {this.state.colors} />
          </div>
        )
    }
}