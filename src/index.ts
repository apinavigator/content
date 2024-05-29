import { select } from '@inquirer/prompts';
import { IRawApp } from './modules/shared/index.js';
import { getRawApps, build } from './modules/build/index.js';

/* ************************************************************************************************
 *                                           EXECUTION                                            *
 ************************************************************************************************ */
(async () => {
  try {
    // retrieve the raw apps
    const rawApps = await getRawApps();

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
