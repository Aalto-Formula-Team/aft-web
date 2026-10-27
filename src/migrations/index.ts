import * as migration_20260408_163823_initial from './20260408_163823_initial';
import * as migration_20261027_162259_header_cta from './20261027_162259_header_cta';
import * as migration_20261027_162334_footer_fields from './20261027_162334_footer_fields';
import * as migration_20261027_162417_hero_eyebrow from './20261027_162417_hero_eyebrow';

export const migrations = [
  {
    up: migration_20260408_163823_initial.up,
    down: migration_20260408_163823_initial.down,
    name: '20260408_163823_initial',
  },
  {
    up: migration_20261027_162259_header_cta.up,
    down: migration_20261027_162259_header_cta.down,
    name: '20261027_162259_header_cta',
  },
  {
    up: migration_20261027_162334_footer_fields.up,
    down: migration_20261027_162334_footer_fields.down,
    name: '20261027_162334_footer_fields',
  },
  {
    up: migration_20261027_162417_hero_eyebrow.up,
    down: migration_20261027_162417_hero_eyebrow.down,
    name: '20261027_162417_hero_eyebrow'
  },
];
