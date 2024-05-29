import { select } from '@inquirer/prompts';
import { IRawApp } from './shared/index.js';
import { listRawApps, build } from './builder/index.js';

/* ************************************************************************************************
 *                                           EXECUTION                                            *
 ************************************************************************************************ */
(async () => {
  try {
    // retrieve the raw apps
    const rawApps = await listRawApps();

    // prompt the select input
    console.log('API NAVIGATOR\n');
    const choice: string = await select({
      message: 'Select an app to build',
      choices: rawApps.map((app) => ({ name: `${app.name} v${app.version}`, value: app.name })),
    });

    // run the builder
    await build(<IRawApp>rawApps.find((app) => app.name === choice));
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
