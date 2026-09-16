window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "serenity-js-playwright-test-template",
    "totalScenarios": 36,
    "outcomes": {
      "passed": 36,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 42737,
    "startedAt": "2026-09-16T04:44:11.617Z",
    "finishedAt": "2026-09-16T04:44:54.354Z",
    "testRunner": "Playwright"
  },
  "scenarios": [
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 285,
      "startedAt": "2026-09-16T04:44:11.617Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
        "line": 29
      },
      "tags": [
        {
          "type": "feature",
          "name": "API Testing"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice sends a GET request to '/todos/1'",
          "outcome": "SUCCESS",
          "duration": 143,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:11.883Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-f5f79e65b3.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Wed, 16 Sep 2026 04:44:12 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785191026\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785191026\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785191063\nage: 6\ncf-cache-status: HIT\ncf-ray: a3bd36ef08262ed1-SJC\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:12.038Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 33,
            "column": 28
          }
        },
        {
          "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:12.050Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 34,
            "column": 28
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 285,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 143,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:11.883Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-f5f79e65b3.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Wed, 16 Sep 2026 04:44:12 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785191026\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785191026\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785191063\nage: 6\ncf-cache-status: HIT\ncf-ray: a3bd36ef08262ed1-SJC\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.038Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 33,
                "column": 28
              }
            },
            {
              "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.050Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 34,
                "column": 28
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://jsonplaceholder.typicode.com\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 949,
      "startedAt": "2026-09-16T04:44:21.848Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
        "line": 29
      },
      "tags": [
        {
          "type": "feature",
          "name": "API Testing"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice sends a GET request to '/todos/1'",
          "outcome": "SUCCESS",
          "duration": 107,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:22.987Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-fbfc8d8b39.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Wed, 16 Sep 2026 04:44:23 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785191026\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785191026\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785191063\nage: 10\ncf-cache-status: HIT\ncf-ray: a3bd37342a7e97f0-SJC\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:23.107Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 33,
            "column": 28
          }
        },
        {
          "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:23.119Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 34,
            "column": 28
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 949,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 107,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:22.987Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-fbfc8d8b39.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Wed, 16 Sep 2026 04:44:23 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785191026\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785191026\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785191063\nage: 10\ncf-cache-status: HIT\ncf-ray: a3bd37342a7e97f0-SJC\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:23.107Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 33,
                "column": 28
              }
            },
            {
              "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:23.119Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 34,
                "column": 28
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://jsonplaceholder.typicode.com\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 441,
      "startedAt": "2026-09-16T04:44:39.091Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
        "line": 29
      },
      "tags": [
        {
          "type": "feature",
          "name": "API Testing"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice sends a GET request to '/todos/1'",
          "outcome": "SUCCESS",
          "duration": 115,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:39.764Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-e0a08bd752.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Wed, 16 Sep 2026 04:44:39 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785191026\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785191026\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785191063\nage: 4\ncf-cache-status: HIT\ncf-ray: a3bd379d1ba90c60-SJC\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:39.890Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 33,
            "column": 28
          }
        },
        {
          "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:39.903Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 34,
            "column": 28
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 441,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 115,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:39.764Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-e0a08bd752.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Wed, 16 Sep 2026 04:44:39 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785191026\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=UyhbZ%2F0MO1mJoZS7M4Hj8SWBXp3NkwnJgHEYoqocyDE%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785191026\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785191063\nage: 4\ncf-cache-status: HIT\ncf-ray: a3bd379d1ba90c60-SJC\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:39.890Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 33,
                "column": 28
              }
            },
            {
              "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:39.903Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 34,
                "column": 28
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://jsonplaceholder.typicode.com\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 1086,
      "startedAt": "2026-09-16T04:44:12.114Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
        "line": 29
      },
      "tags": [
        {
          "type": "feature",
          "name": "Blended Testing"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt ensures all GitHub systems are operational",
          "outcome": "SUCCESS",
          "duration": 229,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 194,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.172Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-ac46d3ab66.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Wed, 16 Sep 2026 04:44:08 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 0bad560bc5f522d97c7837dc70496371be926f58\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055684\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 013ca23ac50e46d5b094186332fde0e3\natl-request-id: 013ca23a-c50e-46d5-b094-186332fde0e3\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"a5923c2fadf3f9e324c74bcc3d2879b1\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6f9d1169f2bd8d5941d08b66c4e041a6.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: 5kORYLT-p481p0ygSXz9IbmBP0GDU67dmVZQKTuoiidj5-o0Va9Ddw==\nage: 4",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-16T03:09:02.715Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.377Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.389Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:12.171Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 591,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 537,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.438Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:12.987Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:12.437Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 119,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 32,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:13.039Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:13.082Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:13.125Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:13.038Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:13.168Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 41,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1086,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 229,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 194,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:12.172Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-ac46d3ab66.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Wed, 16 Sep 2026 04:44:08 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 0bad560bc5f522d97c7837dc70496371be926f58\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055684\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 013ca23ac50e46d5b094186332fde0e3\natl-request-id: 013ca23a-c50e-46d5-b094-186332fde0e3\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"a5923c2fadf3f9e324c74bcc3d2879b1\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6f9d1169f2bd8d5941d08b66c4e041a6.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: 5kORYLT-p481p0ygSXz9IbmBP0GDU67dmVZQKTuoiidj5-o0Va9Ddw==\nage: 4",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-16T03:09:02.715Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:12.377Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:12.389Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:12.171Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 591,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 537,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:12.438Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:12.987Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:12.437Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 119,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.039Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.082Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.125Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:13.038Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:13.168Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 41,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Wendy",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 1117,
      "startedAt": "2026-09-16T04:44:23.227Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
        "line": 29
      },
      "tags": [
        {
          "type": "feature",
          "name": "Blended Testing"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt ensures all GitHub systems are operational",
          "outcome": "SUCCESS",
          "duration": 58,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:23.524Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-d3af0b4b28.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Wed, 16 Sep 2026 04:44:08 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 0bad560bc5f522d97c7837dc70496371be926f58\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055684\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 013ca23ac50e46d5b094186332fde0e3\natl-request-id: 013ca23a-c50e-46d5-b094-186332fde0e3\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"a5923c2fadf3f9e324c74bcc3d2879b1\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6f9d1169f2bd8d5941d08b66c4e041a6.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: 0SNh2WM_dFPyu-FKLLba8UctTeY1Y4h18hfwNejR6j92bxRNxKum2w==\nage: 15",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-16T03:09:02.715Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:23.557Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:23.569Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:23.523Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 488,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 458,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:23.619Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:24.088Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:23.618Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 176,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:24.118Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 65,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:24.172Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 34,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:24.248Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:24.117Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:24.303Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 41,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1117,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 58,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:23.524Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-d3af0b4b28.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Wed, 16 Sep 2026 04:44:08 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 0bad560bc5f522d97c7837dc70496371be926f58\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055684\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 013ca23ac50e46d5b094186332fde0e3\natl-request-id: 013ca23a-c50e-46d5-b094-186332fde0e3\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"a5923c2fadf3f9e324c74bcc3d2879b1\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6f9d1169f2bd8d5941d08b66c4e041a6.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: 0SNh2WM_dFPyu-FKLLba8UctTeY1Y4h18hfwNejR6j92bxRNxKum2w==\nage: 15",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-16T03:09:02.715Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:23.557Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 2,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:23.569Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:23.523Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 488,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 458,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:23.619Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.088Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:23.618Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 176,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.118Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 65,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.172Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.248Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:24.117Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:24.303Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 41,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Wendy",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 822,
      "startedAt": "2026-09-16T04:44:39.963Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
        "line": 29
      },
      "tags": [
        {
          "type": "feature",
          "name": "Blended Testing"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Apisitt ensures all GitHub systems are operational",
          "outcome": "SUCCESS",
          "duration": 60,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.151Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-432a45d282.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Wed, 16 Sep 2026 04:44:18 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 0bad560bc5f522d97c7837dc70496371be926f58\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055684\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 52d0a15058fe4388b34ab0afb1d96c0f\natl-request-id: 52d0a150-58fe-4388-b34a-b0afb1d96c0f\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"a5923c2fadf3f9e324c74bcc3d2879b1\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 4a3c4fc40ddd2a09909acf925fc84d70.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: oChS0HXndqCGbNwJXgcJ6QD00CQtZ0Orvz_Sio8luwkxhcTya4yIOw==\nage: 22",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-16T03:09:02.715Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.187Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.200Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:40.151Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 337,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 309,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.253Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.573Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:40.253Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 142,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.601Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 45,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.647Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.703Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:40.600Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:40.752Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 41,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 822,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 60,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.151Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2601/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-432a45d282.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Wed, 16 Sep 2026 04:44:18 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 0bad560bc5f522d97c7837dc70496371be926f58\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055684\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 52d0a15058fe4388b34ab0afb1d96c0f\natl-request-id: 52d0a150-58fe-4388-b34a-b0afb1d96c0f\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"a5923c2fadf3f9e324c74bcc3d2879b1\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 4a3c4fc40ddd2a09909acf925fc84d70.cloudfront.net (CloudFront)\nx-amz-cf-pop: PHX50-P1\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: oChS0HXndqCGbNwJXgcJ6QD00CQtZ0Orvz_Sio8luwkxhcTya4yIOw==\nage: 22",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-16T03:09:02.715Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.187Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                },
                {
                  "name": "Apisitt ensures that GitHub Status does equal \"All Systems Operational\"",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.200Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:40.151Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 337,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 309,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.253Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.573Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:40.253Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 142,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.601Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 45,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.647Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.703Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:40.600Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:40.752Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 41,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Apisitt",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Wendy",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1531,
      "startedAt": "2026-09-16T04:44:13.226Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
        "line": 37
      },
      "tags": [
        {
          "type": "feature",
          "name": "Multi-actor scenarios"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 609,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 485,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 458,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.246Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.715Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:13.245Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 103,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.741Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.775Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.815Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:13.741Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:13.245Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 792,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 392,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 366,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:13.879Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:14.256Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:13.879Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 380,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 301,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:14.282Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:14.594Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:14.633Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:14.281Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:13.879Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:14.686Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:14.707Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 57,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1531,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 609,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 485,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 458,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:13.246Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:13.715Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:13.245Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:13.741Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:13.775Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:13.815Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:13.741Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:13.245Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 792,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 392,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 366,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:13.879Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:14.256Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:13.879Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 380,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 301,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:14.282Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:14.594Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:14.633Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:14.281Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:13.879Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:14.686Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:14.707Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 57,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            }
          ]
        },
        {
          "name": "Bob",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1591,
      "startedAt": "2026-09-16T04:44:24.372Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
        "line": 37
      },
      "tags": [
        {
          "type": "feature",
          "name": "Multi-actor scenarios"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 692,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 534,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 505,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.907Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:24.391Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 138,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.936Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:24.983Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:25.040Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:24.935Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:24.391Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 732,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 566,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 539,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:25.110Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:25.659Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:25.110Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 144,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:25.687Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:25.742Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:25.798Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:25.686Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:25.109Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:25.855Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:25.878Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 57,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1591,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 692,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 534,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 505,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:24.391Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:24.907Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:24.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 138,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:24.936Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:24.983Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:25.040Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:24.935Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:24.391Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 732,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 566,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 539,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:25.110Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:25.659Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:25.110Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 144,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:25.687Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:25.742Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:25.798Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:25.686Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:25.109Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:25.855Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:25.878Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 57,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            }
          ]
        },
        {
          "name": "Bob",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1917,
      "startedAt": "2026-09-16T04:44:40.819Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
        "line": 37
      },
      "tags": [
        {
          "type": "feature",
          "name": "Multi-actor scenarios"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 801,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 611,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 576,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:40.838Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:41.426Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:40.838Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 168,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:41.460Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 52,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:41.513Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:41.576Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:41.460Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:40.838Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 958,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 741,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 713,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:41.674Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:42.398Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:41.674Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 195,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 50,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:42.426Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 62,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:42.486Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 52,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:42.559Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:42.426Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:41.674Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:42.649Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:42.676Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 57,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1917,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 801,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 611,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 576,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:40.838Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:41.426Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:40.838Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 168,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:41.460Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 52,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:41.513Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:41.576Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:41.460Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:40.838Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 958,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 741,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 713,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:41.674Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:42.398Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:41.674Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 195,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 50,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:42.426Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 62,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:42.486Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 52,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:42.559Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:42.426Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:41.674Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:42.649Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:42.676Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 57,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            }
          ]
        },
        {
          "name": "Bob",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 645,
      "startedAt": "2026-09-16T04:44:14.777Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 36
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 278,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 253,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:14.873Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.136Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:14.873Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 103,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.162Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.196Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 17,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.237Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:15.162Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:15.276Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 66,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.292Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.309Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.329Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:15.292Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:15.368Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:15.386Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 55,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 645,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 278,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 253,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:14.873Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.136Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:14.873Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 103,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.162Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.196Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.237Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:15.162Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.276Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 66,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.292Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.309Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.329Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:15.292Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.368Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.386Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 55,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 942,
      "startedAt": "2026-09-16T04:44:25.986Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 36
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 339,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 311,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.229Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.551Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:26.229Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 137,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.579Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 47,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.624Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.682Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:26.578Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:26.726Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 104,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.746Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.769Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.796Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:26.746Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:26.861Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:26.883Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 55,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 942,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 339,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 311,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.229Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.551Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:26.229Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 137,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.579Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 47,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.624Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.682Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:26.578Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.726Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 104,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.746Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.769Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:26.796Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:26.746Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.861Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:26.883Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 55,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1528,
      "startedAt": "2026-09-16T04:44:42.783Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 36
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 576,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 536,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:43.337Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:43.889Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:43.337Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 215,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 115,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:43.926Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 44,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.052Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.107Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:43.926Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:44.152Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 77,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.170Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.190Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.215Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:44.170Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:44.258Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:44.277Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 55,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1528,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 576,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 536,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:43.337Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:43.889Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:43.337Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 215,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 115,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:43.926Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:44.052Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:44.107Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:43.926Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.152Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 77,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:44.170Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:44.190Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:44.215Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:44.170Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.258Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.277Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 55,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 532,
      "startedAt": "2026-09-16T04:44:15.441Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 59
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 282,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 256,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.506Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.773Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:15.506Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 101,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.799Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.834Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 17,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.872Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:15.798Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:15.909Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 65,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:15.926Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 3,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:15.943Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 68,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 532,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 282,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 256,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.506Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.773Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:15.506Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 101,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.799Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.834Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:15.872Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:15.798Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.909Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 65,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.926Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:15.943Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 68,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 793,
      "startedAt": "2026-09-16T04:44:26.954Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 59
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 322,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 296,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.195Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.501Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:27.195Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 133,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 34,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.529Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 45,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.574Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 20,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.630Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:27.528Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:27.671Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 65,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:27.691Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:27.710Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 68,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 793,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 322,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 296,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:27.195Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:27.501Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:27.195Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 133,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:27.529Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 45,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:27.574Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:27.630Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:27.528Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.671Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 65,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.691Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:27.710Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 68,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1080,
      "startedAt": "2026-09-16T04:44:44.338Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 59
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 565,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 534,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:44.566Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.112Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:44.565Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 169,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.141Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 60,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.191Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 37,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.263Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:45.141Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:45.321Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 65,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:45.341Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:45.366Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 68,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1080,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 565,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 534,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:44.566Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:45.112Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:44.565Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 169,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:45.141Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 60,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:45.191Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:45.263Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:45.141Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.321Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 65,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.341Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:45.366Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 68,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 694,
      "startedAt": "2026-09-16T04:44:15.989Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 72
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 565,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 288,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 262,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.057Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.330Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:16.057Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 102,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.356Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.430Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:16.355Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 65,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.468Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.485Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.505Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:16.468Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 67,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.544Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.560Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.581Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:16.544Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:16.056Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:16.632Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:16.650Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 77,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 694,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 565,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 288,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 262,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.057Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.330Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:16.057Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 102,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.356Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.391Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.430Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:16.355Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 65,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.468Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.485Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.505Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:16.468Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 67,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.544Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.560Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:16.581Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:16.544Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:16.056Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:16.632Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:16.650Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 77,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1099,
      "startedAt": "2026-09-16T04:44:27.769Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 72
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 765,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 415,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 374,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.008Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.393Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:28.007Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 136,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.434Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 47,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.481Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.539Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:28.433Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 82,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.580Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.602Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.626Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:28.580Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 90,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.672Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.692Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:28.717Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:28.672Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:28.007Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:28.783Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:28.831Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 77,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1099,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 765,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 415,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 374,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.008Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.393Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:28.007Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 136,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.434Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 47,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.481Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.539Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:28.433Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 82,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.580Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.602Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.626Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:28.580Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 90,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.672Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.692Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:28.717Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:28.672Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:28.007Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:28.783Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:28.831Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 77,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1605,
      "startedAt": "2026-09-16T04:44:45.458Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 72
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 1232,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 740,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 715,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:45.736Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.462Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:45.736Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 260,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 131,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.487Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 57,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.628Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.697Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:46.486Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.757Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.779Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.823Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:46.757Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 88,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.870Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.893Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:46.918Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:46.869Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:45.736Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:46.979Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:47.003Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 77,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1605,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 1232,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 740,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 715,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:45.736Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.462Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:45.736Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 260,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 131,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.487Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 57,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.628Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 38,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.697Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:46.486Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 100,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.757Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.779Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.823Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:46.757Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 88,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.870Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.893Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:46.918Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:46.869Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:45.736Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:46.979Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:47.003Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 77,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1026,
      "startedAt": "2026-09-16T04:44:16.702Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 81
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 276,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 250,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:16.757Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.017Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:16.756Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 83,
            "column": 37
          }
        },
        {
          "name": "Alice ensures that main section does not become present",
          "outcome": "SUCCESS",
          "duration": 254,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:17.042Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 85,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does not become present",
          "outcome": "SUCCESS",
          "duration": 253,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:17.307Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 86,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.571Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.591Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.630Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:17.570Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 14,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:17.667Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:17.691Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 91,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1026,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 276,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 250,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:16.757Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:17.017Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:16.756Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that main section does not become present",
              "outcome": "SUCCESS",
              "duration": 254,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.042Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 85,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does not become present",
              "outcome": "SUCCESS",
              "duration": 253,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.307Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 86,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:17.571Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:17.591Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:17.630Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:17.570Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.667Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:17.691Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 91,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1345,
      "startedAt": "2026-09-16T04:44:28.896Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 81
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 399,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 373,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:29.114Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:29.498Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:29.114Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 83,
            "column": 37
          }
        },
        {
          "name": "Alice ensures that main section does not become present",
          "outcome": "SUCCESS",
          "duration": 254,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:29.524Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 85,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does not become present",
          "outcome": "SUCCESS",
          "duration": 252,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:29.788Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 107,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:30.051Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 42,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:30.074Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:30.127Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:30.050Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 18,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:30.167Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 16,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:30.196Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 91,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1345,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 399,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 373,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:29.114Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:29.498Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:29.114Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that main section does not become present",
              "outcome": "SUCCESS",
              "duration": 254,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:29.524Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 85,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does not become present",
              "outcome": "SUCCESS",
              "duration": 252,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:29.788Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 107,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.051Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.074Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.127Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:30.050Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 18,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:30.167Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:30.196Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 91,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1372,
      "startedAt": "2026-09-16T04:44:47.102Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
        "line": 81
      },
      "tags": [
        {
          "type": "feature",
          "name": "Recording items"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 372,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 346,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:47.343Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:47.700Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:47.342Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 83,
            "column": 37
          }
        },
        {
          "name": "Alice ensures that main section does not become present",
          "outcome": "SUCCESS",
          "duration": 255,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:47.725Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 85,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does not become present",
          "outcome": "SUCCESS",
          "duration": 252,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:47.990Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 125,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:48.253Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 55,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:48.274Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 27,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:48.340Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:48.253Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 31,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:48.389Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 21,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:48.431Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 91,
            "column": 24
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1372,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 372,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 346,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:47.343Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:47.700Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:47.342Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that main section does not become present",
              "outcome": "SUCCESS",
              "duration": 255,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:47.725Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 85,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does not become present",
              "outcome": "SUCCESS",
              "duration": 252,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:47.990Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 125,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:48.253Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 55,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:48.274Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:48.340Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:48.253Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:48.389Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:48.431Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 91,
                "column": 24
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 1328,
      "startedAt": "2026-09-16T04:44:17.749Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
        "line": 44
      },
      "tags": [
        {
          "type": "feature",
          "name": "Using notes"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "chromium 153.0.8010.12"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 494,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 219,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 186,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:17.826Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.023Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:17.826Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 103,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.056Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.092Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.132Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.056Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 64,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.170Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.187Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.207Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.170Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 66,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.245Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.260Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.280Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.244Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:17.826Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:18.331Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 31,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:18.367Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 287,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 262,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:18.416Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:18.689Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:18.416Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 298,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 102,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.723Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.760Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.798Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.723Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 66,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.844Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.861Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.882Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.844Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 72,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.930Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.950Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.970Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.930Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:18.714Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:19.023Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 65,
            "column": 28
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1328,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 494,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 219,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 186,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:17.826Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.023Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:17.826Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.056Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.092Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.132Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:18.056Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 64,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.170Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.187Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.207Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:18.170Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 66,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.245Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.260Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.280Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:18.244Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:17.826Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:18.331Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:18.367Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 287,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 262,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.416Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                },
                {
                  "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:18.689Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.416Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 298,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 102,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.723Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.760Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.798Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:18.723Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 66,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.844Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.861Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.882Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:18.844Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 72,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.930Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.950Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:18.970Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:18.930Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:18.714Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:19.023Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 65,
                "column": 28
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Bobby",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{\"items\":[\"buy some cheese\",\"feed the cat\",\"book a doctors appointment\"]}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@chromium 153.0.8010.12@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 3283,
      "startedAt": "2026-09-16T04:44:30.264Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
        "line": 44
      },
      "tags": [
        {
          "type": "feature",
          "name": "Using notes"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "firefox 155.0"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 660,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 320,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 290,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.539Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.840Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:30.538Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 136,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.869Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.914Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:30.974Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:30.868Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 79,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.015Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.036Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.061Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:31.015Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 83,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.105Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.126Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.150Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:31.104Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:30.538Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 14,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:31.208Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 41,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:31.255Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 546,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 519,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:31.314Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:31.844Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:31.314Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 361,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 131,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.881Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.926Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.981Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:31.881Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 82,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:32.033Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:32.054Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:32.081Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:32.033Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 86,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:32.135Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:32.156Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:32.182Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:32.135Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:31.870Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 19,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:32.242Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 65,
            "column": 28
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 3283,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 660,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 320,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 290,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:30.539Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:30.840Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:30.538Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 136,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:30.869Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 49,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:30.914Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:30.974Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:30.868Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 79,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.015Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.036Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.061Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:31.015Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 83,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.105Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.126Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.150Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:31.104Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:30.538Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:31.208Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:31.255Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 546,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 519,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.314Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                },
                {
                  "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:31.844Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:31.314Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 361,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 131,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.881Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.926Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:31.981Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:31.881Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 82,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:32.033Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:32.054Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:32.081Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:32.033Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 86,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:32.135Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:32.156Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:32.182Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:32.135Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:31.870Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:32.242Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 65,
                "column": 28
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Bobby",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{\"items\":[\"buy some cheese\",\"feed the cat\",\"book a doctors appointment\"]}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@firefox 155.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 2373,
      "startedAt": "2026-09-16T04:44:48.502Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
        "line": 44
      },
      "tags": [
        {
          "type": "feature",
          "name": "Using notes"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "platform",
          "name": "Linux 6.17.0-1022-azure"
        },
        {
          "type": "browser",
          "name": "webkit 26.6"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [
        {
          "name": "Alice starts with a list containing 3 items",
          "outcome": "SUCCESS",
          "duration": 825,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 393,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 367,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:48.779Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.157Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:48.779Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 158,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.183Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 60,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.224Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.295Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:49.183Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 110,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.352Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.377Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.415Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:49.352Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 119,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.473Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.509Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.539Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:49.473Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:48.778Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 25,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:49.615Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 62,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:49.681Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 584,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 524,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:49.781Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 38,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:50.316Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:49.781Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 424,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 167,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 54,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 54,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.456Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.521Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:50.391Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 85,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.584Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.605Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.635Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:50.583Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 88,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.701Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.725Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.752Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:50.701Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-16T04:44:50.376Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-16T04:44:50.811Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 65,
            "column": 28
          }
        }
      ],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 2373,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 825,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 393,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 367,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:48.779Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.157Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:48.779Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 158,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.183Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 60,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.224Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.295Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:49.183Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 110,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.352Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.377Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 33,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.415Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:49.352Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 119,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.473Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.509Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 43,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:49.539Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:49.473Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:48.778Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:49.615Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 62,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:49.681Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 584,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 524,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:49.781Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                },
                {
                  "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-16T04:44:50.316Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:49.781Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 424,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 167,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 54,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.391Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 54,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.456Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.521Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:50.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 85,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.584Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.605Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.635Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:50.583Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 88,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.701Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.725Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-16T04:44:50.752Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-16T04:44:50.701Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-16T04:44:50.376Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-16T04:44:50.811Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 65,
                "column": 28
              }
            }
          ]
        }
      ],
      "cast": [
        {
          "name": "Alice",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        },
        {
          "name": "Bobby",
          "abilities": [
            {
              "name": "PerformActivities"
            },
            {
              "name": "AnswerQuestions"
            },
            {
              "name": "RaiseErrors"
            },
            {
              "name": "ScheduleWork",
              "details": "{\"scheduler\":{\"clock\":{\"timeAdjustment\":{\"milliseconds\":0}},\"interactionTimeout\":{\"milliseconds\":5000}}}"
            },
            {
              "name": "BrowseTheWebWithPlaywright"
            },
            {
              "name": "TakeNotes",
              "details": "{\"notepad\":{\"items\":[\"buy some cheese\",\"feed the cat\",\"book a doctors appointment\"]}}"
            },
            {
              "name": "CallAnApi",
              "details": "{\"baseURL\":\"https://todo-app.serenity-js.org/\",\"headers\":{\"common\":{\"Accept\":\"application/json, text/plain, */*\"}},\"timeout\":10000}"
            }
          ]
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@webkit 26.6@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 437,
      "startedAt": "2026-09-16T04:44:19.512Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 16
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 437,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 1533,
      "startedAt": "2026-09-16T04:44:34.277Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 16
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 1533,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 735,
      "startedAt": "2026-09-16T04:44:51.377Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 16
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 735,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 325,
      "startedAt": "2026-09-16T04:44:20.066Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 39
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 325,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 599,
      "startedAt": "2026-09-16T04:44:36.239Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 39
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 599,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 729,
      "startedAt": "2026-09-16T04:44:52.242Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 39
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 729,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 363,
      "startedAt": "2026-09-16T04:44:20.413Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 49
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 363,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 652,
      "startedAt": "2026-09-16T04:44:36.862Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 49
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 652,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 713,
      "startedAt": "2026-09-16T04:44:53.004Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 49
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 713,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 409,
      "startedAt": "2026-09-16T04:44:20.796Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 63
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "chromium"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 409,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 609,
      "startedAt": "2026-09-16T04:44:37.532Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 63
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "firefox"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 609,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 616,
      "startedAt": "2026-09-16T04:44:53.738Z",
      "source": {
        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts",
        "line": 63
      },
      "tags": [
        {
          "type": "feature",
          "name": "Vanilla Playwright Test"
        },
        {
          "type": "project",
          "name": "webkit"
        },
        {
          "type": "module",
          "name": "serenity-js-playwright-test-template"
        }
      ],
      "activities": [],
      "executionHistory": [
        {
          "outcome": "SUCCESS",
          "run": "2601",
          "timestamp": "2026-09-16T04:44:11.617Z",
          "duration": 616,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@webkit"
    }
  ],
  "history": [
    {
      "timestamp": "2026-09-16T04:44:11.617Z",
      "duration": 42737,
      "outcomes": {
        "passed": 36,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2601",
      "slowest": 3283,
      "fastest": 285,
      "average": 1031,
      "commit": "39d2bd79270c7171b3debf20b9df60abf6785dff",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/35056667511",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template",
      "score": {
        "confidence": 100,
        "passRate": 100,
        "consistency": 100,
        "completeness": 100
      }
    }
  ],
  "tags": [
    {
      "type": "feature",
      "name": "API Testing",
      "scenarioCount": 3,
      "passed": 3,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "project",
      "name": "chromium",
      "scenarioCount": 12,
      "passed": 12,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "platform",
      "name": "Linux 6.17.0-1022-azure",
      "scenarioCount": 24,
      "passed": 24,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "chromium 153.0.8010.12",
      "scenarioCount": 8,
      "passed": 8,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "module",
      "name": "serenity-js-playwright-test-template",
      "scenarioCount": 36,
      "passed": 36,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "project",
      "name": "firefox",
      "scenarioCount": 12,
      "passed": 12,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "firefox 155.0",
      "scenarioCount": 8,
      "passed": 8,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "project",
      "name": "webkit",
      "scenarioCount": 12,
      "passed": 12,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "webkit 26.6",
      "scenarioCount": 8,
      "passed": 8,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Blended Testing",
      "scenarioCount": 3,
      "passed": 3,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Multi-actor scenarios",
      "scenarioCount": 3,
      "passed": 3,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Recording items",
      "scenarioCount": 12,
      "passed": 12,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Using notes",
      "scenarioCount": 3,
      "passed": 3,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "feature",
      "name": "Vanilla Playwright Test",
      "scenarioCount": 12,
      "passed": 12,
      "failed": 0,
      "skipped": 0
    }
  ],
  "inconsistentTests": [],
  "newFailures": [],
  "newPasses": [],
  "systemContext": {
    "nodeVersion": "v24.21.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.47.2",
    "testRunner": {
      "name": "Playwright",
      "version": "1.63.0"
    },
    "browsers": [
      {
        "name": "chromium",
        "version": "153.0.8010.12"
      },
      {
        "name": "firefox",
        "version": "155.0"
      },
      {
        "name": "webkit",
        "version": "26.6"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2601",
      "branch": "main",
      "commit": "39d2bd79270c7171b3debf20b9df60abf6785dff",
      "commitMessage": "chore(deps): update dependency @types/node to ^24.13.5 (#802)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/35056667511",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template",
      "triggeredBy": "renovate[bot]"
    },
    "projectName": "serenity-js-playwright-test-template",
    "packageManager": "npm"
  },
  "capabilities": {
    "type": "directory",
    "name": "spec",
    "outcomes": {
      "passed": 36,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "scenarioCount": 36,
    "children": [
      {
        "type": "file",
        "name": "api_testing",
        "outcomes": {
          "passed": 3,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 3,
        "scenarios": [
          {
            "name": "JSON Placeholder /todos should retrieve a todo item by id",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "JSON Placeholder /todos should retrieve a todo item by id",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "JSON Placeholder /todos should retrieve a todo item by id",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "file",
        "name": "blended_testing",
        "outcomes": {
          "passed": 3,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 3,
        "scenarios": [
          {
            "name": "GitHub Pages should check the state of the system before interacting with the UI",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "GitHub Pages should check the state of the system before interacting with the UI",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "GitHub Pages should check the state of the system before interacting with the UI",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "file",
        "name": "multi-actor_scenarios",
        "outcomes": {
          "passed": 3,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 3,
        "scenarios": [
          {
            "name": "Todo List App supports multiple actors using separate browsers",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App supports multiple actors using separate browsers",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App supports multiple actors using separate browsers",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "file",
        "name": "recording_items",
        "outcomes": {
          "passed": 12,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 12,
        "scenarios": [
          {
            "name": "Todo List App should allow me to add todo items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should allow me to add todo items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should allow me to add todo items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should clear text input field when an item is added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should clear text input field when an item is added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should clear text input field when an item is added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should reflect the number of items left in the counter",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should reflect the number of items left in the counter",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should reflect the number of items left in the counter",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should show #main and #footer sections only when list contains items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should show #main and #footer sections only when list contains items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should show #main and #footer sections only when list contains items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "file",
        "name": "using_notes",
        "outcomes": {
          "passed": 3,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 3,
        "scenarios": [
          {
            "name": "Todo List App should allow me to share notes across actors and browsers",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should allow me to share notes across actors and browsers",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "Todo List App should allow me to share notes across actors and browsers",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      },
      {
        "type": "file",
        "name": "vanilla_playwright_test",
        "outcomes": {
          "passed": 12,
          "failed": 0,
          "pending": 0,
          "skipped": 0,
          "compromised": 0,
          "error": 0
        },
        "scenarioCount": 12,
        "scenarios": [
          {
            "name": "New Todo should allow me to add todo items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should allow me to add todo items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should allow me to add todo items",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should clear text input field when an item is added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should clear text input field when an item is added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should clear text input field when an item is added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should reflect the number of items left in the counter",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should reflect the number of items left in the counter",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should reflect the number of items left in the counter",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should show #main and #footer when items added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should show #main and #footer when items added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          },
          {
            "name": "New Todo should show #main and #footer when items added",
            "outcome": "SUCCESS",
            "executionHistory": [
              "SUCCESS"
            ]
          }
        ],
        "score": {
          "confidence": 100,
          "passRate": 100,
          "completeness": 100,
          "consistency": 100
        }
      }
    ],
    "score": {
      "confidence": 100,
      "passRate": 100,
      "completeness": 100,
      "consistency": 100
    }
  },
  "specDirectory": "spec"
};
