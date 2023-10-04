import { Ensure, equals } from '@serenity-js/assertions';
import { describe, it, test } from '@serenity-js/playwright-test';
import { GetRequest, LastResponse, Send } from '@serenity-js/rest';

describe('API Testing', () => {

    describe('JSON Placeholder', () => {

        /**
         * The ability to CallAnApi is provided to all the default Serenity/JS actors
         * and configured automatically to point at the baseURL, same as the Playwright browser.
         *
         * You can configure the default baseURL in playwright.config.ts,
         * or override it on a per-scenario basis, like here.
         */
        test.use({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });

        describe('/todos', () => {

            interface TodoItem {
                userId: number;
                id: number;
                title: string;
                completed: boolean;
            }

            it('should retrieve a todo item by id', async ({ actor }) => {

                await actor.attemptsTo(
                    Send.a(GetRequest.to('/todos/1')),
                    Ensure.that(LastResponse.status(), equals(200)),
                    Ensure.that(LastResponse.body<TodoItem>().id, equals(1)),
                );
            });
        });
    });
});
