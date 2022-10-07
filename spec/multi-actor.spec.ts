import { Browser } from '@playwright/test';
import { Ensure, equals } from '@serenity-js/assertions';
import { Actor, Cast } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { describe, it, test } from '@serenity-js/playwright-test';
import { Photographer, TakePhotosOfFailures } from '@serenity-js/web';

import { startWithAListContaining } from './todo-list-app/TodoApp';
import { itemNames } from './todo-list-app/TodoList';

class TodoActors implements Cast {
    constructor(private readonly browser: Browser) {
    }

    prepare(actor: Actor): Actor {
        return actor.whoCan(
            BrowseTheWebWithPlaywright.using(this.browser),
        );
    }
}

describe('Multi-actor scenarios', () => {

    test.use({
        actors: async ({ browser }, use) => {
            use(new TodoActors(browser));
        },
        crew: [
            Photographer.whoWill(TakePhotosOfFailures),
        ],
    });

    describe('Todo List App', () => {

        it('supports multiple actors using separate browsers', async ({ actorCalled }) => {
            await actorCalled('Alice').attemptsTo(
                startWithAListContaining(
                    'Feed the cat'
                ),
            )

            await actorCalled('Bob').attemptsTo(
                startWithAListContaining(
                    'Walk the dog'
                ),
            )

            await actorCalled('Alice').attemptsTo(
                Ensure.that(itemNames(), equals([
                    'Feed the cat'
                ])),
            )

            await actorCalled('Bob').attemptsTo(
                Ensure.that(itemNames(), equals([
                    'Walk the dog'
                ])),
            )
        })
    });
});
