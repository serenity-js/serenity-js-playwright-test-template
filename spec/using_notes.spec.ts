import { Ensure, equals, isPresent, not } from '@serenity-js/assertions';
import { useFixtures } from '@serenity-js/playwright-test';
import { isVisible, Value } from '@serenity-js/web';

import { TODO_ITEMS } from './todo-list-app/test-data';
import {
    footerSection,
    mainSection,
    newTodoInput,
    outstandingItemsCount,
    persistedItemCalled,
    persistedItemNames,
    persistedItems,
    startWithAListContaining,
    startWithAnEmptyList,
} from './todo-list-app/TodoApp';
import { recordItem } from './todo-list-app/TodoItem';
import { itemNames } from './todo-list-app/TodoList';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { List, Notepad, notes, TakeNotes } from '@serenity-js/core';

interface SharedNotes {
    items: string[];
}

interface TestScopeFixtures {
    notepad: Notepad<SharedNotes>
}

/*
 * `useFixtures` allows you to define reusable test fixtures that can be shared across multiple tests.
 * Alternatively, you can define fixtures inline in each test scenario via `test.use({ ... })`.
 */
const { describe, it }  = useFixtures<TestScopeFixtures>({
    notepad: async ({ }, use) => {
        // Create an empty notepad, or add some initial notes
        const notepad = Notepad.empty<SharedNotes>()

        await use(notepad);
    },
    actorCalled: async ({ actorCalled, notepad }, use) => {
        await use(actorName => actorCalled(actorName).whoCan(
            TakeNotes.using(notepad),
            // ...add or override other abilities
        ));
    },
})

describe('Using notes', () => {

    describe('Todo List App', () => {

        it('should allow me to share notes across actors and browsers', async ({ actor, actorCalled, browser }) => {
            // The first actor starts with a list of items, records them, and shares the list of items with other actors using the same notepad
            await actor.attemptsTo(
                startWithAListContaining(
                    ...TODO_ITEMS
                ),

                Ensure.that(itemNames(), equals(TODO_ITEMS)),

                notes<SharedNotes>().set('items', itemNames()),
            );

            // The second actor starts an independent browser session, and attempts to record the items shared by the first actor
            await actorCalled('Bobby')
                .whoCan(BrowseTheWebWithPlaywright.using(browser))
                .attemptsTo(
                    startWithAnEmptyList(),

                    List.of(notes<SharedNotes>().get('items'))
                        .forEach(current => current.actor.attemptsTo(recordItem(current.item))),

                    Ensure.that(itemNames(), equals(TODO_ITEMS)),
                )
        });
    });
});
