'use strict';

let styles = {
  overlay(isOpen) {
    return {
      position: 'absolute',
      float: 'left',
      zIndex: 500,
      width: '10%',
      height: '10%',
      background: '#373a47'
    };
  },

  

  menuWrap(isOpen, width, right) {
    return {
      position: 'absolute',
      right: right ? 0 : 'inherit',
      zIndex: 1100,
      width,
      height: '100%',
      MozTransform: isOpen
        ? ''
        : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      MsTransform: isOpen
        ? ''
        : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      OTransform: isOpen
        ? ''
        : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      WebkitTransform: isOpen
        ? ''
        : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transform: isOpen
        ? ''
        : right ? 'translate3d(100%, 0, 0)' : 'translate3d(-100%, 0, 0)',
      transition: 'all 0.5s'
    };
  },

  BurgerButton() {
    return{
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
    }
  },


  BurgerBars() {
    return{
    background: '#373a47',
    width: '20%',
    height: '20%'
    }
  },

  bmCrossButton() {
    return{
    height: '24px',
    width: '24px'
    }
  },
  menu() {
    return {
      height: '100%',
      boxSizing: 'border-box',
      overflow: 'auto',
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    };
  },

  itemList() {
    return {
      height: '100%'
    };
  },

  item() {
    return {
      display: 'block',
      outline: 'none'
    };
  },

  burgerIcon(isOpen, width, right) {
    return {};
  }
};

export default styles;
