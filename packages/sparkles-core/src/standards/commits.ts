import { createStandardFactory } from '../lib/standard';

const createStandard = createStandardFactory('{{emoji}} {{group}}: {{text}}');

export default {
  feature: createStandard('feature', '🦄'),
  bugfix: createStandard('bugfix', '🐛'),
  hotfix: createStandard('hotfix', '🔥'),
  dependencies: createStandard('dependencies', '📦'),
  chore: createStandard('chore', '🧰'),
  docs: createStandard('docs', '📚'),
};
