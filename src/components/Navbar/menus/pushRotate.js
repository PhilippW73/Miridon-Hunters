'use strict';

import menuFactory from '../menuFactory';

const styles = {
  pageWrap(isOpen, width, right) {
    return {
      MozTransform: isOpen
        ? ''
        : right
          ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
          : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
      MsTransform: isOpen
        ? ''
        : right
          ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
          : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
      OTransform: isOpen
        ? ''
        : right
          ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
          : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
      WebkitTransform: isOpen
        ? ''
        : right
          ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
          : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
      transform: isOpen
        ? ''
        : right
          ? `translate3d(-${width}, 0, 0) rotateY(15deg)`
          : `translate3d(${width}, 0, 0) rotateY(-15deg)`,
      transformOrigin: right ? '100% 50%' : '0% 50%',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s'
    };
  },

      
      MorphShape() {
        return{
        fill: '#373a47'
        }
      },
      ItemList() {
        return{
        color: '#b8b7ad',
        padding: '0.8em'
        }
      },
      Overlay() {
        return{
        background: 'rgba(0, 0, 0, 0.3)'
        }
      },

  outerContainer(isOpen) {
    return {
      perspective: '1500px',
      overflow: isOpen ? '' : 'hidden'
    };
  },

  bmBurgerButton() {
    return{
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
    }
  }
};

export default menuFactory(styles);
