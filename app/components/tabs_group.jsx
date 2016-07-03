import React from 'react';
import style from './../css/main.css';
import Tab from './tab';
import TabControl from './tabs_control';

export default class TabsGroup extends React.Component {
    render() {
        return(
          <div className= { style.wrapper }>
              <TabControl baseWidth= {400}>
                  <Tab name="red">
                      <div className= { style.red }>我是红色的标签页</div>
                  </Tab>

                  <Tab name="blue">
                      <div className={ style.blue }>我是蓝色的标签页</div>
                  </Tab>

                  <Tab name="yellow">
                      <div className={ style.yellow }>我是黄色的标签页</div>
                  </Tab>
              </TabControl>
          </div>
        )
    }
}