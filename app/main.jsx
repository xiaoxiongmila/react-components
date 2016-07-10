import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './test';
//import Logo from './components/logo';
//import MainNav from './components/main_nav';
import './css/reset.css';
import style from './css/radio.css';
//import God from './components/god';
//import style from './main.css';
//import Article from './components/article';
//import ArticleCard from './components/article_card';
//import TabsControl from './components/tabs_control';
//import TabsGroup from './components/tabs_group';
//import AccordionList from './components/accordion_list';
//import Accordion from './components/accordion';
//import Modal from './components/modal';
//import ModalPanel from './components/modal_panel';
import MenuAnimation from './components/menu_animation';
//import ToggleGroup from './components/toggle_group';
//import Dropdown from './components/dropdown';
//import DragDrop from './components/drag_drop';

///*
// ReactDOM.render(
// <ToggleGroup name="opt-group" value="c" className = {style.radioGroup} /> , document.getElementById('app')
// );
// */
//ReactDOM.render(
//  <Dropdown options={['Cod', 'Eel', 'Salmon']} /> , document.getElementById('app')
//);

ReactDOM.render(
  <MenuAnimation /> , document.getElementById('app')
);

