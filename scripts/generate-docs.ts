import fs from 'node:fs';
import path from 'node:path';

import tempo from '@joggr/tempo';

import {
  Standard,
  commits,
  pullRequests,
} from '../packages/heart';

const DIRECTORY_PATH_DOCS = path.join(__dirname, '../docs');

const FILE_PATH_STANDARDS = path.join(DIRECTORY_PATH_DOCS, 'standards.md');

const commitData: string[][] = [];
const pullRequestData: string[][] = [];

for (const key in commits) {
  // @ts-expect-error
  const commit = commits[key] as Standard;

  commitData.push([
    commit.group,
    commit.emoji,
    commit.create('example commit message'),
  ]);
}

for (const key in pullRequests) {
  // @ts-expect-error
  const pullRequest = pullRequests[key] as Standard;

  pullRequestData.push([
    pullRequest.group,
    pullRequest.emoji,
    pullRequest.create('example pull request title'),
  ]);
}

const doc = tempo()
  .h1((txt) => txt.emoji('🦄').plainText('Unicorn Commit & Pull Request Standards'))
  .paragraph('A set of standards for commit messages and pull request titles, with a magical zest.')
  .h2((txt) => txt.emoji('📋').plainText('Commit Message Standards'))
  .table([
    ['group', 'emoji', 'example'],
    ...commitData,
  ])
  .h2((txt) => txt.emoji('📋').plainText('Pull Request Title Standards'))
  .table([
    ['group', 'emoji', 'example'],
    ...pullRequestData,
  ])
  .toString();

fs.writeFileSync(FILE_PATH_STANDARDS, doc);
