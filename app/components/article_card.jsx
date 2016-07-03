import React from 'react';
import Article from './article';
import style from './../css/main.css';

export default class ArticleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: {
                'article': {
                    "color": "FEC006",
                    "title": "Snow in Turkey Brings Travel Woes",
                    "thumbnail": "",
                    "category": "News",
                    "excerpt": "Heavy snowstorm in Turkey creates havoc as hundreds of villages left without power, and hundreds of roads closed",
                    "date": new Date()
                },
                'article-1': {
                    "color": "2196F3",
                    "title": "Landslide Leaving Thousands Homeless",
                    "thumbnail": "",
                    "category": "News",
                    "excerpt": "An aburt landslide in the Silcon Valley has left thousands homeless and on the streets.",
                    "date": new Date()
                },
                'article-2': {
                    "color": "FE5621",
                    "title": "Hail the size of baseballs in New York",
                    "thumbnail": "",
                    "category": "News",
                    "excerpt": "A rare and unexpected event occurred today as hail the size of snowball hits New York citizens.",
                    "date": new Date()
                },
                'article-3': {
                    "color": "673AB7",
                    "title": "Earthquake destorying San Fransisco",
                    "thumbnail": "",
                    "category": "News",
                    "excerpt": "A massive earthquake just hit San Fransisco leaving behind a giant crater.",
                    "date": new Date()
                }
            }
        }
    }

    renderArticle(key) {
        const articles = this.state.articles;
      //key => article article-1 article-2 article-3 article-4
        return (
          <div className={ style.column } key={ key } >
              <Article key={ key } index={ key } details={ articles[key] } />
          </div>
        )
    }

    render() {

        return (
          <div className={style.app}>
              <div className={ style.container }>
                  {Object.keys(this.state.articles).map(this.renderArticle.bind(this))}
              </div>
          </div>
        )
    }
}