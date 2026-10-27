import * as migration_20260408_163823_initial from './20260408_163823_initial';
import * as migration_20261027_162259_header_cta from './20261027_162259_header_cta';

export const migrations = [
  {
    up: migration_20260408_163823_initial.up,
    down: migration_20260408_163823_initial.down,
    name: '20260408_163823_initial',
  },
  {
    up: migration_20261027_162259_header_cta.up,
    down: migration_20261027_162259_header_cta.down,
    name: '20261027_162259_header_cta'
  },
];
