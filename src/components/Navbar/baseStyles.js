'use strict';

let styles = {
  overlay(isOpen) {
    return {
      position: 'fixed',
      zIndex: 10,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      MozTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      MsTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      OTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      WebkitTransform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transform: isOpen ? '' : 'translate3d(100%, 0, 0)',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
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
