import React from 'react';

import AccordionList from './accordion';
import style from './../css/accordian.css';

export default class Accordion extends React.Component{
    render(){
        return(
          <div className= {style.main}>
              <div className= {style.title}>{this.props.title}</div>
              <AccordionList title="Section title one">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
              </AccordionList>
              <AccordionList title="Section title two">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
              </AccordionList>
              <AccordionList title="Section title three">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
              </AccordionList>
          </div>
        )
    }
}