/* eslint-disable */
import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import glamorous, { withTheme } from 'glamorous';
import createTheme from './create-theme';
import cleanProps from './clean-props';
import getPropForProps from './get-prop-for-props';

const Shed = ({
  component = 'div',
  children,
  ...rest
}) => {
  const ShedStyled = glamorous(component)(({theme, ...props}) => getPropForProps(theme, props));
  return <ShedStyled {...rest}>{children}</ShedStyled>;
};

Shed.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  theme: PropTypes.shape({
    sizes: PropTypes.any,
    steps: PropTypes.number,
    colors: PropTypes.object,
    fonts: PropTypes.object,
  }),
};

Shed.defaultProps = {
  theme: createTheme(),
  component: 'div',
};

const ThemedShed = withTheme(Shed);

export {
  ThemedShed as default,
  createTheme,
};
