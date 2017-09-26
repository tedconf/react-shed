import compose from 'ramda/src/compose';
import curry from 'ramda/src/curry';
import get from 'ramda/src/prop';
import keys from 'ramda/src/keys';
import lt from 'ramda/src/lt';
import length from 'ramda/src/length';
import omit from 'ramda/src/omit';
import path from 'ramda/src/path';

import getPropForColor from './get-prop-for-color';
import getPropsForFSValue from './get-prop-for-fs';
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

const orNull = (predicate, func) => {
  if (!predicate) {
    return null;
  }
  if (predicate) {
    if (func) {
      return func;
    }
    return predicate;
  }
  return null;
};

const getPropForProps = (theme, props) => {
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
      const getProp = prop => get(prop)(props);
      return {
        ...acc,
        ...getBorderRadius(theme, props),
        ...getMarginAndPadding(theme)(props),
        ...orNull(getProp('pos'), getPropsForPosValue(getProp('pos'))),
        ...orNull(getProp('va'), getPropsForVAValue(getProp('va'))),
        flexWrap: orNull(getProp('flxw'), getPropForFlxWValue(getProp('flxw'))),
        float: orNull(getProp('fl'), getPropForFlValue(getProp('fl'))),
        justifyContent: orNull(getProp('jc'), getPropForJCValue(getProp('jc'))),
        listStyleType: orNull(getProp('lst'), getPropForLSTValue(getProp('lst'))),
        opacity: orNull(getProp('op'), getPropForOpValue(getProp('op'))),
        overflow: orNull(getProp('o'), getPropForOValue(getProp('o'))),
        overflowX: orNull(getProp('ox'), getPropForOValue(getProp('ox'))),
        overflowY: orNull(getProp('oy'), getPropForOValue(getProp('oy'))),
        whiteSpace: orNull(getProp('ws'), getPropForWSValue(getProp('ws'))),
        alignContent: orNull(getProp('ac'), getPropForACValue(getProp('ac'))),
        alignItems: orNull(getProp('ai'), getPropForAIValue(getProp('ai'))),
        alignSelf: orNull(getProp('as'), getPropForASValue(getProp('as'))),
        backgroundColor: orNull(getProp('bg'), color(getProp('bg'))),
        bottom: orNull(getProp('bottom'), size(getProp('bottom'))),
        color: orNull(getProp('c'), color(getProp('c'))),
        cursor: orNull(getProp('cur'), getPropForCurValue(getProp('cur'))),
        display: orNull(getProp('d'), getPropForDValue(getProp('d'))),
        flexBasis: orNull(getProp('flxb'), getPropForFlxBValue(theme, getProp('flxb'))),
        flexDirection: orNull(getProp('flxd'), getPropForFlxDValue(getProp('flxd'))),
        flexGrow: orNull(getProp('flxg')),
        flexShrink: orNull(getProp('flxs')),
        fontFamily: orNull(path(['fonts', getProp('ff')])(theme)),
        fontSize: orNull(getProp('f'), size(getProp('f'))),
        fontStyle: orNull(getProp('fs'), getPropsForFSValue(getProp('fs'))),
        fontWeight: orNull(getProp('fw')),
        height: orNull(getProp('h'), size(getProp('h'))),
        left: orNull(getProp('left'), size(getProp('left'))),
        letterSpacing: orNull(getProp('ls'), getPropsForLSValue(theme, getProp('ls'))),
        lineHeight: orNull(getProp('lh'), getPropsForLHValue(theme, getProp('lh'))),
        maxWidth: orNull(getProp('mw'), size(getProp('mw'))),
        right: orNull(getProp('right'), size(getProp('right'))),
        textAlign: orNull(getProp('ta'), getPropsForTAValue(getProp('ta'))),
        textDecoration: orNull(getProp('td'), getPropForTDValue(getProp('td'))),
        textDecorationColor: orNull(getProp('tdc'), color(getProp('tdc'))),
        textTransform: orNull(getProp('tt'), getPropsForTTValue(getProp('tt'))),
        top: orNull(getProp('top'), size(getProp('top'))),
        width: orNull(getProp('w'), size(getProp('w'))),
        zIndex: orNull(getProp('zi')),
      };
    }, {});
  }
  return false;
};

export default curry((theme, props) => getPropForProps(theme, props));
