import React from 'react';
import style from './../css/main.css';

export default class Article extends React.Component {
    render() {
        const details = this.props.details,
          styles = {
              backgroundColor: '#' + details.color
          }
        return (
          <article className={ style.article }>
              <h3 className={ style.category } style={styles}>{details.category}</h3>
              <h2 className={ style.title }>{details.title}</h2>
              <p className= { style.excerpt }>{details.excerpt}</p>
          </article>
        )
    }
}