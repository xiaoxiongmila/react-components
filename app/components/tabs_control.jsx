import React from 'react';
import style from './../css/main.css';

export default class TabsControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0
        }
        //this.handleClick = this.handleClick.bind(this);
    }

    getTitleItemCssClasses(index) {
        return index === this.state.currentIndex ? style.activeTitle : style.titleItem;
    }

    getContentItemCssClasses(index) {
        return index === this.state.currentIndex ? style.activeContent : style.contentItem;
    }

    handleClick(index) {
        this.setState({
            currentIndex: index
        })
    }

    render() {
        const {baseWidth} = this.props;
        //console.log(this.state.currentIndex);
        return (
          <div>
              <nav className={style.titleItems}>
                  {this.props.children.map((element, index) => {
                      return (
                        <div className={ this.getTitleItemCssClasses(index) } key = {`title-${index}`} onClick={() => {this.handleClick(index)}}>
                            {element.props.name}
                        </div>
                      )
                  })}
              </nav>
              <div className={ style.contentItems }>
                  {this.props.children.map((element, index) => {
                      return (
                        <div className={this.getContentItemCssClasses(index) } key = {`content-${index}`}>{element}</div>
                      )
                  })}
              </div>
          </div>
        )
    }

}