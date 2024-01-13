import { expect, type Page, test } from '@playwright/test';

const TODO_ITEMS = [
    'buy some cheese',
    'feed the cat',
    'book a doctors appointment'
];

test.describe('Vanilla Playwright Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://todo-app.serenity-js.org/#/');
    });

    test.describe('New Todo', () => {
        test('should allow me to add todo items', async ({ page }) => {
            // Create 1st todo.
            await page.locator('.new-todo').fill(TODO_ITEMS[0]);
            await page.locator('.new-todo').press('Enter');

            // Make sure the list only has one todo item.
            await expect(page.locator('.view label')).toHaveText([
                TODO_ITEMS[0]
            ]);

            // Create 2nd todo.
            await page.locator('.new-todo').fill(TODO_ITEMS[1]);
            await page.locator('.new-todo').press('Enter');

            // Make sure the list now has two todo items.
            await expect(page.locator('.view label')).toHaveText([
                TODO_ITEMS[0],
                TODO_ITEMS[1]
            ]);

            await checkNumberOfTodosInLocalStorage(page, 2);
        });

        test('should clear text input field when an item is added', async ({ page }) => {
            // Create one todo item.
            await page.locator('.new-todo').fill(TODO_ITEMS[0]);
            await page.locator('.new-todo').press('Enter');

            // Check that input is empty.
            await expect(page.locator('.new-todo')).toBeEmpty();
            await checkNumberOfTodosInLocalStorage(page, 1);
        });

        test('should reflect the number of items left in the counter', async ({ page }) => {
            // Create 3 items.
            await createDefaultTodos(page);

            // Check test using different methods.
            await expect(page.locator('.todo-count')).toHaveText('3 items left');
            await expect(page.locator('.todo-count')).toContainText('3');
            await expect(page.locator('.todo-count')).toHaveText(/3/);

            // Check all items in one call.
            await expect(page.locator('.view label')).toHaveText(TODO_ITEMS);
            await checkNumberOfTodosInLocalStorage(page, 3);
        });

        test('should show #main and #footer when items added', async ({ page }) => {
            await page.locator('.new-todo').fill(TODO_ITEMS[0]);
            await page.locator('.new-todo').press('Enter');

            await expect(page.locator('.main')).toBeVisible();
            await expect(page.locator('.footer')).toBeVisible();
            await checkNumberOfTodosInLocalStorage(page, 1);
        });
    });

});

async function createDefaultTodos(page: Page) {
    for (const item of TODO_ITEMS) {
        await page.locator('.new-todo').fill(item);
        await page.locator('.new-todo').press('Enter');
    }
}

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
    return await page.waitForFunction(expectedNumber => {
        return JSON.parse(localStorage['serenity-js-todo-app']).length === expectedNumber;
    }, expected);
}
