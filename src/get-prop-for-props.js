import compose from 'ramda/src/compose';
import curry from 'ramda/src/curry';
import get from 'ramda/src/prop';
import keys from 'ramda/src/keys';
import lt from 'ramda/src/lt';
import length from 'ramda/src/length';
import omit from 'ramda/src/omit';
import path from 'ramda/src/path';
import mqProps from 'mq-props';

import getPropForColor from './get-prop-for-color';
import getPropForFSValue from './get-prop-for-fs';
import getPropsForLSValue from './get-prop-for-ls';
import getPropsForLHValue from './get-prop-for-lh';
import getPropsForTTValue from './get-prop-for-tt';
import getPropsForTAValue from './get-prop-for-ta';
import getPropForTDValue from './get-prop-for-td';
import getMarginAndPadding from './get-margin-and-padding';
import getSize from './get-size';
import getPropsForVAValue from './get-props-for-va';
import getPropForDValue from './get-prop-for-d';
import getPropForACValue from './get-prop-for-ac';
import getPropForAIValue from './get-prop-for-ai';
import getPropForASValue from './get-prop-for-as';
import getPropForCurValue from './get-prop-for-cur';
import getPropForFlxBValue from './get-prop-for-flxb';
import getBorderRadius from './get-props-for-br';
import getPropForFlxDValue from './get-prop-for-flxd';
import getPropForFlxWValue from './get-prop-for-flxw';
import getPropForFlValue from './get-prop-for-fl';
import getPropForJCValue from './get-prop-for-jc';
import getPropForLSTValue from './get-prop-for-lst';
import getPropForOpValue from './get-prop-for-op';
import getPropForOValue from './get-prop-for-o';
import getPropsForPosValue from './get-props-for-pos';
import getPropForWSValue from './get-prop-for-ws';

const getPropForProps = (theme, props) => {
  const mq = mqProps(theme.mqs || []);
  const size = getSize(theme);
  const color = getPropForColor(theme);
  if (
    compose(
      lt(0),
      length,
      keys,
      omit(['children']),
    )(props)
  ) {
    return Object.keys(props).reduce((acc) => {
      const getProp = prop => get(prop)(props) || null;
      return {
        ...acc,
        ...getBorderRadius(theme, props),
        ...getMarginAndPadding(theme)(props),
        ...mq('position')(getPropsForPosValue(getProp('pos'))),
        ...mq('verticalAlign')(getPropsForVAValue(getProp('va'))),
        ...mq('flexWrap')(getPropForFlxWValue(getProp('flxw'))),
        ...mq('float')(getPropForFlValue(getProp('fl'))),
        ...mq('justifyContent')(getPropForJCValue(getProp('jc'))),
        ...mq('listStyleType')(getPropForLSTValue(getProp('lst'))),
        ...mq('opacity')(getPropForOpValue(getProp('op'))),
        ...mq('overflow')(getPropForOValue(getProp('o'))),
        ...mq('overflowX')(getPropForOValue(getProp('ox'))),
        ...mq('overflowY')(getPropForOValue(getProp('oy'))),
        ...mq('whiteSpace')(getPropForWSValue(getProp('ws'))),
        ...mq('alignContent')(getPropForACValue(getProp('ac'))),
        ...mq('alignItems')(getPropForAIValue(getProp('ai'))),
        ...mq('alignSelf')(getPropForASValue(getProp('as'))),
        ...mq('backgroundColor')(color(getProp('bg'))),
        ...mq('bottom')(size(getProp('bottom'))),
        ...mq('color')(color(getProp('c'))),
        ...mq('cursor')(getPropForCurValue(getProp('cur'))),
        ...mq('display')(getPropForDValue(getProp('d'))),
        ...mq('flexBasis')(getPropForFlxBValue(theme, getProp('flxb'))),
        ...mq('flexDirection')(getPropForFlxDValue(getProp('flxd'))),
        ...mq('flexGrow')(getProp('flxg')),
        ...mq('flexShrink')(getProp('flxs')),
        ...mq('fontFamily')(path(['fonts', getProp('ff')])(theme)),
        ...mq('fontSize')(size(getProp('f'))),
        ...mq('fontStyle')(getPropForFSValue(getProp('fs'))),
        ...mq('fontWeight')(getProp('fw')),
        ...mq('height')(size(getProp('h'))),
        ...mq('left')(size(getProp('left'))),
        ...mq('letterSpacing')(getPropsForLSValue(theme, getProp('ls'))),
        ...mq('lineHeight')(getPropsForLHValue(theme, getProp('lh'))),
        ...mq('maxHeight')(size(getProp('mh'))),
        ...mq('minHeight')(size(getProp('minh'))),
        ...mq('maxWidth')(size(getProp('mw'))),
        ...mq('minWidth')(size(getProp('minw'))),
        ...mq('right')(size(getProp('right'))),
        ...mq('textAlign')(getPropsForTAValue(getProp('ta'))),
        ...mq('textDecoration')(getPropForTDValue(getProp('td'))),
        ...mq('textDecorationColor')(color(getProp('tdc'))),
        ...mq('textTransform')(getPropsForTTValue(getProp('tt'))),
        ...mq('top')(size(getProp('top'))),
        ...mq('width')(size(getProp('w'))),
        ...mq('zIndex')(getProp('zi')),
      };
    }, {});
  }
  return false;
};

export default curry((theme, props = {}) => getPropForProps(theme, props));
