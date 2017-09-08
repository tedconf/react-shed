export default (props, theme) => Object.keys(props).reduce((acc) => {
  if (!props) {
    return false;
  }
  if (props) {
    const getProp = prop => path([prop])(props);
    const getPropsForTheme = getPropsForColor(theme); 
    const getPropsForSize = getSize(theme); 

    return {
      ...acc,
      ...getMarginAndPadding(props, theme),
      color: orNull(getProp('c'), getPropsForTheme(getProp('c'))),
      backgroundColor: orNull(getProp('bg'), getPropsForTheme(getProp('bg'))),
      fontSize: orNull(getProp('f'), getSize(getProp('f'))),
      fontWeight: orNull(getProp('fw')),
      fontStyle: orNull(getProp('fs'), getPropsForFSValue(getProp('fs'))),
      fontFamily: orNull(path(['fonts', getProp('ff')])(theme)),
      letterSpacing: orNull(getProp('ls'), getPropsForLSValue(getProp('ls'), theme)),
      lineHeight: orNull(getProp('lh'), getPropsForLHValue(getProp('lh'), theme)),
      textTransform: orNull(getProp('tt'), getPropsForTTValue(getProp('tt'))),
      textAlign: orNull(getProp('ta'), getPropsForTAValue(getProp('ta'))),
      verticalAlign: orNull(getProp('va'), getPropsForVAValue(getProp('va'))),
      textDecoration: orNull(getProp('td'), getPropsForTDValue(getProp('td'))),
      textDecorationColor: orNull(getProp('tdc'), getPropsForTheme(getProp('tdc'))),
      display: orNull(getProp('d'), getPropsForDValue(getProp('d'))),
      width: orNull(getProp('w'), getPropsForSize(getProp('w'))),
      maxWidth: orNull(getProp('mw'), getPropsForSize(getProp('mw'))),
      height: orNull(getProp('h'), getPropsForSize(getProp('h'))),
      opacity: orNull(getProp('op'), getOpacity(getProp('op'))),
      cursor: orNull(getProp('cur'), getPropsForCurValue(getProp('cur'))),
      flexGrow: orNull(getProp('flxg')),
      flexShrink: orNull(getProp('flxs')),
      justifyContent: orNull(getProp('jc'), getPropsForJCValue(getProp('jc'))),
      alignContent: orNull(getProp('ac'), getPropsForACValue(getProp('ac'))),
      alignItems: orNull(getProp('ai'), getPropsForAIValue(getProp('ai'))),
      alignSelf: orNull(getProp('as'), getPropsForASValue(getProp('as'))),
      flexWrap: orNull(getProp('flxw'), getPropsForFlxWValue(getProp('flxw'))),
      flexDirection: orNull(getProp('flxd'), getPropsForFlxDValue(getProp('flxd'))),
      flexBasis: orNull(getProp('flxb'), getPropsForFlxBValue(getProp('flxb'), theme)),
      float: orNull(getProp('fl'), getPropsForFlValue(getProp('fl'))),
      position: orNull(getProp('pos'), getPropsForPosValue(getProp('pos'))),
      top: orNull(getProp('top'), getPropsForSize(getProp('top'))),
      bottom: orNull(getProp('bottom'), getPropsForSize(getProp('bottom'))),
      right: orNull(getProp('right'), getPropsForSize(getProp('right'))),
      left: orNull(getProp('left'), getPropsForSize(getProp('left'))),
      overflow: orNull(getProp('o'), getPropsForOValue(getProp('o'))),
      overflowX: orNull(getProp('ox'), getPropsForOValue(getProp('ox'))),
      overflowY: orNull(getProp('oy'), getPropsForOValue(getProp('oy'))),
      zIndex: orNull(getProp('zi')),
      whiteSpace: orNull(getProp('ws'), getPropsForWSValue(getProp('ws'))),
      listStyleType: orNull(getProp('lst'), getPropsForLSTValue(getProp('lst'))),
      ...getBorderRadius(props, theme),
    };
  }
}, {});
