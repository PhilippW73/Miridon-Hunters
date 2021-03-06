// 'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CrossIcon extends Component {
  getCrossStyle(type) {
    return {
      position: 'absolute',
      width: 3,
      height: 14    };
  }

  render() {
    var icon;
    var buttonWrapperStyle = {
      position: 'absolute',
      width: 24,
      height: 24,
      right: 0,
      top: 0
    };
    var buttonStyle = {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '10%',
      height: '10%',
      margin: 0,
      padding: 0,
      border: 'none',
      textIndent: -9999,
      background: 'transparent',
      outline: 'none',
      cursor: 'pointer'
    };

    if (this.props.customIcon) {
      let extraProps = {
        className: 'bm-cross',
        style: {
          ...{ width: '100%', height: '100%' },
          ...this.props.styles.bmCross
        }
      };
      icon = React.cloneElement(this.props.customIcon, extraProps);
    } else {
      icon = (
        <span style={{ position: 'absolute', top: '6px', right: '14px' }}>
          {['before', 'after'].map((type, i) => (
            <span
              key={i}
              className={`bm-cross ${this.props.crossClassName}`.trim()}
              style={{
                ...this.getCrossStyle(type),
                ...this.props.styles.bmCross
              }}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`bm-cross-button ${this.props.className}`.trim()}
        style={{ ...buttonWrapperStyle, ...this.props.styles.bmCrossButton }}
      >
        {icon}
        <button onClick={this.props.onClick} style={buttonStyle}>
          Close Menu
        </button>
      </div>
    );
  }
}

CrossIcon.propTypes = {
  crossClassName: PropTypes.string,
  customIcon: PropTypes.element,
  styles: PropTypes.object
};

CrossIcon.defaultProps = {
  crossClassName: '',
  className: '',
  styles: {}
};
