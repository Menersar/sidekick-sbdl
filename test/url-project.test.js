import {test, expect} from 'vitest';
import * as SBDL from '../src/export-node.js';

test('load project from URL', async () => {
    // !!! CHANGE !!!
    // const project = await SBDL.downloadProjectFromURL('https://mixality.github.io/Sidekick/packager/example.sb3');
    const project = await SBDL.downloadProjectFromURL('https://menersar.github.io/Sidekick/packager/example.sb3');
  expect(project.title).toBe('example');
}, 30000);
