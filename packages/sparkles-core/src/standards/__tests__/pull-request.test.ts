import pullRequest from '../pull-requests'
import { availableGroups } from '../../data'
import { Standard } from 'src/types';

describe('pull-request', () => {
  it('has all available groups', () => {
    const keys = Object.keys(pullRequest)
    expect(keys).toEqual(availableGroups)
  });

  for (const key in pullRequest) {
    describe(key, () => {
      // @ts-expect-error
      const pr = pullRequest[key] as Standard;

      it('has all necessary fields defined', () => {
        expect(pr.format).toBeDefined()
        expect(pr.group).toBeDefined()
        expect(pr.emoji).toBeDefined()
        expect(pr.validate).toBeDefined()
        expect(pr.asserts).toBeDefined()
        expect(pr.create).toBeDefined()
      });

      it(`validates a valid pull-request: "${pr.emoji} ${pr.group}: valid pull-request"`, () => {
        expect(pr.validate(`${pr.emoji} ${pr.group}: valid pull-request`)).toBeTruthy()
      });

      it(`validates an invalid pull-request: "invalid pull-request"`, () => {
        expect(pr.validate('invalid pull-request').valid).toBeFalsy()
      });

      it(`asserts a valid pull-request: "${pr.emoji} ${pr.group}: valid pull-request"`, () => {
        expect(() => pr.asserts(`${pr.emoji} ${pr.group}: valid pull-request`)).not.toThrow()
      })

      it(`asserts an invalid pull-request: "invalid pull-request"`, () => {
        expect(() => pr.asserts('invalid pull-request')).toThrow()
      })

      it(`creates a pull-request title: "${pr.emoji} ${pr.group}: created pr"`, () => {
        expect(pr.create('valid pull-request')).toBe(`${pr.emoji} ${pr.group}: valid pull-request`)
      })
    })
  }
});
