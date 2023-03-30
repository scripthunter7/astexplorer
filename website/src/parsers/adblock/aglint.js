import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from '@adguard/aglint/package.json';

const ID = '@adguard/aglint';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || 'https://github.com/AdguardTeam/AGLint',
  locationProps: new Set(['loc']),

  loadParser(callback) {
    require(['@adguard/aglint'], callback);
  },

  parse(aglint, code) {
    return aglint.FilterListParser.parse(code);
  },

  nodeToRange({ loc }) {
    if (loc && loc.start && loc.end) {
      return [loc.start.offset, loc.end.offset];
    }
  },

  opensByDefault(node, key) {
    return key === 'children';
  },
};
