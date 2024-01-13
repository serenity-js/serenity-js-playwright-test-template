import { Ensure, equals } from '@serenity-js/assertions';
import { describe, it } from '@serenity-js/playwright-test';

import { GitHubStatus } from './github';
import { startWithAnEmptyList } from './todo-list-app/TodoApp';
import { recordItem } from './todo-list-app/TodoItem';
import { itemNames } from './todo-list-app/TodoList';

describe('Blended Testing', () => {

    describe('GitHub Pages', () => {

        /**
         * This is a more advanced example of a Serenity/JS Screenplay Pattern test scenario.
         *
         * This scenario uses two actors:
         * - Apisitt, responsible for interacting with an API to check if the system is up and running before performing any UI checks
         * - Wendy, responsible for interacting with the website to perform the actual acceptance test
         *
         * In this scenario, rather than list all the interactions in the test itself, we use:
         * - API Actions Class Pattern to group tasks concerning interacting with the GitHubStatus API
         * - Page Objects Pattern to group tasks and questions concerning interacting with the Serenity/JS Homepage
         *
         * Note that apart from strongly encouraging the Screenplay Pattern,
         * Serenity/JS doesn't require you to organise your code in any particular way.
         * This gives you the freedom to choose patterns and abstractions that work best for you, your team,
         * and reflect the domain of your system under test.
         */
        it('should check the state of the system before interacting with the UI', async ({ actorCalled }) => {

            // You can use API interactions to manage test data, or to ensure services are up and running before performing any UI checks.
            // Since Serenity/JS demo app is deployed to GitHub Pages, before interacting with the website we ensure that GitHub is up and running.
            await actorCalled('Apisitt').attemptsTo(
                GitHubStatus.ensureAllSystemsOperational(),
            );

            // Once we know the system is up and running, Wendy can proceed with the web-based scenario.
            await actorCalled('Wendy').attemptsTo(
                startWithAnEmptyList(),
                recordItem('Feed the cat'),
                Ensure.that(itemNames(), equals([
                    'Feed the cat'
                ])),
            );
        });
    });
});
