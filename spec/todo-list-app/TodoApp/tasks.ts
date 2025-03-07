import { Ensure, equals } from '@serenity-js/assertions';
import { Task, the } from '@serenity-js/core';
import { Navigate, Page } from '@serenity-js/web';

import { recordItem } from '../TodoItem';

export const startWithAnEmptyList = () =>
    Task.where(the`#actor starts with an empty todo list`,
        Navigate.to('/'),
        Ensure.that(
            Page.current().title().describedAs('website title'),
            equals('Serenity/JS TodoApp'),
        ),
    );

export const startWithAListContaining = (...items: string[]) =>
    Task.where(the`#actor starts with a list containing ${ items.length } items`,
        startWithAnEmptyList(),
        ...items.map(recordItem),
    );
