import { describe, expect, it } from 'vitest';

import type { Standard } from 'src/types';
import { availableGroups } from '../../data';
import commit from '../commits';

describe('commit', () => {
  it('has all available groups', () => {
    const keys = Object.keys(commit);
    expect(keys).toEqual(availableGroups);
  });

  for (const key in commit) {
    // @ts-expect-error
    const commitItem = commit[key] as Standard;

    describe(key, () => {
      it('has all necessary fields defined', () => {
        expect(commitItem.format).toBeDefined();
        expect(commitItem.group).toBeDefined();
        expect(commitItem.emoji).toBeDefined();
        expect(commitItem.validate).toBeDefined();
        expect(commitItem.asserts).toBeDefined();
        expect(commitItem.create).toBeDefined();
      });

      it(`validates a valid commit: "${commitItem.emoji} ${commitItem.group}: valid commit"`, () => {
        expect(
          commitItem.validate(
            `${commitItem.emoji} ${commitItem.group}: valid commit`
          )
        ).toBeTruthy();
      });

      it(`validates an invalid commit: "invalid commit"`, () => {
        expect(commitItem.validate('invalid commit').valid).toBeFalsy();
      });

      it(`asserts a valid commit: "${commitItem.emoji} ${commitItem.group}: asserted commit"`, () => {
        expect(() =>
          commitItem.asserts(
            `${commitItem.emoji} ${commitItem.group}: asserted commit`
          )
        ).not.toThrow();
      });

      it(`asserts an invalid commit: "fail assertion commit"`, () => {
        expect(() => commitItem.asserts('fail assertion commit')).toThrow();
      });

      it(`creates a commit message: "${commitItem.emoji} ${commitItem.group}: created commit"`, () => {
        expect(commitItem.create('valid commit')).toBe(
          `${commitItem.emoji} ${commitItem.group}: valid commit`
        );
      });
    });
  }
});
