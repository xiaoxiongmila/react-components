import React from 'react';
import style from './../css/main.css';

export default class MainNav extends React.Component {
    render() {
        return (
          <header className={ style.header }>
              <a className={ style.logo } href="https://xiaoxiongmila.github.io">
                  <span>小熊米拉</span>
              </a>
              <nav class="nav">
                  <ul>
                      <li><a href="/">首页</a></li>
                      <li><a href="javascript: void (0);">Components</a></li>
                      <li><a href="javascript: void (0);">Github</a></li>
                  </ul>
              </nav>
          </header>
        )
    }
}