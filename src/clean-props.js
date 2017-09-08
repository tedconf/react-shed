import omit from 'ramda/src/omit';
import keys from 'ramda/src/keys';
import compose from 'ramda/src/compose';
import PROPS_MAP from './props-map';

export default oldProps => compose(omit, keys)(PROPS_MAP)(oldProps);
