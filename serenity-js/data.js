window.__SERENITY_REPORT_DATA__ = {
  "schemaVersion": 1,
  "summary": {
    "title": "Playwright",
    "totalScenarios": 36,
    "outcomes": {
      "passed": 36,
      "failed": 0,
      "pending": 0,
      "skipped": 0,
      "compromised": 0,
      "error": 0
    },
    "duration": 41174,
    "startedAt": "2026-08-20T10:30:16.435Z",
    "finishedAt": "2026-08-20T10:30:57.609Z",
    "testRunner": "Playwright"
  },
  "scenarios": [
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 301,
      "startedAt": "2026-08-20T10:30:16.435Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 90,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:16.764Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-06b1e7b935.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Thu, 20 Aug 2026 10:30:16 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785195284\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785195284\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785195323\nage: 11753\ncf-cache-status: HIT\ncf-ray: a2e0b8c33fb5ff48-MSP\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:16.865Z",
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
          "startedAt": "2026-08-20T10:30:16.878Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 301,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 90,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:16.764Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-06b1e7b935.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Thu, 20 Aug 2026 10:30:16 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785195284\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785195284\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785195323\nage: 11753\ncf-cache-status: HIT\ncf-ray: a2e0b8c33fb5ff48-MSP\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:16.865Z",
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
              "startedAt": "2026-08-20T10:30:16.878Z",
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
      ]
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 847,
      "startedAt": "2026-08-20T10:30:27.115Z",
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
          "name": "firefox 153.0"
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
          "duration": 65,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:28.155Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-2fceaa1572.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Thu, 20 Aug 2026 10:30:28 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785195284\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785195284\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785195323\nage: 11764\ncf-cache-status: HIT\ncf-ray: a2e0b90a3b5ca1dc-MSP\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:28.231Z",
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
          "startedAt": "2026-08-20T10:30:28.243Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 847,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 65,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:28.155Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-2fceaa1572.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Thu, 20 Aug 2026 10:30:28 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785195284\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=bqpuW%2FIVHN0AtT5UaSHAweAifdg1YhE3oWme9RkCjn0%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785195284\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785195323\nage: 11764\ncf-cache-status: HIT\ncf-ray: a2e0b90a3b5ca1dc-MSP\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:28.231Z",
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
              "startedAt": "2026-08-20T10:30:28.243Z",
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
      ]
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 376,
      "startedAt": "2026-08-20T10:30:44.013Z",
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
          "name": "webkit 26.5"
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
          "duration": 92,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:44.675Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-95867209d5.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Thu, 20 Aug 2026 10:30:44 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=A2Wf74Uw5Mo%2FdlPTE44FQLbXoAFaTaTUndO2l78D3wo%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1776583015\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=A2Wf74Uw5Mo%2FdlPTE44FQLbXoAFaTaTUndO2l78D3wo%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1776583015\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1776583039\nage: 0\ncf-cache-status: HIT\ncf-ray: a2e0b971a80fe544-ORD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:44.778Z",
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
          "startedAt": "2026-08-20T10:30:44.790Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 376,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:44.675Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-95867209d5.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Thu, 20 Aug 2026 10:30:44 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=A2Wf74Uw5Mo%2FdlPTE44FQLbXoAFaTaTUndO2l78D3wo%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1776583015\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=A2Wf74Uw5Mo%2FdlPTE44FQLbXoAFaTaTUndO2l78D3wo%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1776583015\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1776583039\nage: 0\ncf-cache-status: HIT\ncf-ray: a2e0b971a80fe544-ORD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:44.778Z",
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
              "startedAt": "2026-08-20T10:30:44.790Z",
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
      ]
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 1097,
      "startedAt": "2026-08-20T10:30:16.938Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 109,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 75,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:16.983Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-670c1d95fa.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 10:29:56 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.054572\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 9986429b06204ca4ae19a833c385d560\natl-request-id: 9986429b-0620-4ca4-ae19-a833c385d560\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c293cdb854db19f7e656921edeb3c36d\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 4856e020eff3e560f905c5269acd505e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: pkjSDlN6b2yw6hBjTy1HmgAdOuvXEghPj9SV5WEyUrB53uW-LwA33Q==\nage: 21",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T09:34:59.982Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:17.069Z",
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
              "startedAt": "2026-08-20T10:30:17.080Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:16.982Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 753,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 725,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:17.122Z",
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
              "startedAt": "2026-08-20T10:30:17.858Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:17.121Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 106,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 26,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:17.886Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 26,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:17.923Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 20,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:17.961Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:17.885Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:18.002Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1097,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 109,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 75,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:16.983Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-670c1d95fa.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 10:29:56 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.054572\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 9986429b06204ca4ae19a833c385d560\natl-request-id: 9986429b-0620-4ca4-ae19-a833c385d560\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c293cdb854db19f7e656921edeb3c36d\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 4856e020eff3e560f905c5269acd505e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: pkjSDlN6b2yw6hBjTy1HmgAdOuvXEghPj9SV5WEyUrB53uW-LwA33Q==\nage: 21",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T09:34:59.982Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:17.069Z",
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
                  "startedAt": "2026-08-20T10:30:17.080Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:16.982Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 753,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 725,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:17.122Z",
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
                  "startedAt": "2026-08-20T10:30:17.858Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:17.121Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 106,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:17.886Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:17.923Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:17.961Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:17.885Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:18.002Z",
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
      ]
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 1207,
      "startedAt": "2026-08-20T10:30:28.338Z",
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
          "name": "firefox 153.0"
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
          "duration": 78,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 42,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:28.556Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-4488878be5.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 10:30:17 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.044718\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 5efbd49b4c9c440285e5f78e977c8514\natl-request-id: 5efbd49b-4c9c-4402-85e5-f78e977c8514\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c293cdb854db19f7e656921edeb3c36d\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 4856e020eff3e560f905c5269acd505e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: nqu3isMgbQjFc5VprsWTelxN2EDbLsKLOePdXlsgg7Hyd-s52_Qesw==\nage: 11",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T09:34:59.982Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:28.609Z",
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
              "startedAt": "2026-08-20T10:30:28.622Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:28.555Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 683,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 652,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:28.671Z",
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
              "startedAt": "2026-08-20T10:30:29.335Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:28.670Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 141,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:29.365Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:29.419Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:29.471Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:29.364Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:29.516Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1207,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 78,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:28.556Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-4488878be5.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 10:30:17 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.044718\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 5efbd49b4c9c440285e5f78e977c8514\natl-request-id: 5efbd49b-4c9c-4402-85e5-f78e977c8514\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c293cdb854db19f7e656921edeb3c36d\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 4856e020eff3e560f905c5269acd505e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: nqu3isMgbQjFc5VprsWTelxN2EDbLsKLOePdXlsgg7Hyd-s52_Qesw==\nage: 11",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T09:34:59.982Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:28.609Z",
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
                  "startedAt": "2026-08-20T10:30:28.622Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:28.555Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 683,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 652,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:28.671Z",
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
                  "startedAt": "2026-08-20T10:30:29.335Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:28.670Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 141,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:29.365Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:29.419Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:29.471Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:29.364Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:29.516Z",
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
      ]
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 913,
      "startedAt": "2026-08-20T10:30:44.851Z",
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
          "name": "webkit 26.5"
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
          "duration": 86,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 52,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.027Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-4b78b16c20.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 10:30:28 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.054572\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: a1ac3b1437104feb944de726f082c928\natl-request-id: a1ac3b14-3710-4feb-944d-e726f082c928\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c293cdb854db19f7e656921edeb3c36d\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 940cdb96b98814bdf1b5ba0576dda2b4.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: XeYU2xCeeXUutMPIOiJ7g5iKRQcjKw_wdmagAuQEUt8z-Pm80FawuQ==\nage: 17",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T09:34:59.982Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.090Z",
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
              "startedAt": "2026-08-20T10:30:45.101Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:45.026Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 442,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 414,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.143Z",
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
              "startedAt": "2026-08-20T10:30:45.568Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:45.142Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 124,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.596Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.638Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.686Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:45.595Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:45.731Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 913,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 86,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 52,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.027Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2539/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-4b78b16c20.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 20 Aug 2026 10:30:28 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: f02313edced751b117e8141d4e028dc7090e623d\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.054572\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: a1ac3b1437104feb944de726f082c928\natl-request-id: a1ac3b14-3710-4feb-944d-e726f082c928\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c293cdb854db19f7e656921edeb3c36d\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 940cdb96b98814bdf1b5ba0576dda2b4.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: XeYU2xCeeXUutMPIOiJ7g5iKRQcjKw_wdmagAuQEUt8z-Pm80FawuQ==\nage: 17",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-20T09:34:59.982Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.090Z",
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
                  "startedAt": "2026-08-20T10:30:45.101Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:45.026Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 442,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 414,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.143Z",
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
                  "startedAt": "2026-08-20T10:30:45.568Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:45.142Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 124,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.596Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.638Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.686Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:45.595Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:45.731Z",
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
      ]
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1242,
      "startedAt": "2026-08-20T10:30:18.055Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 533,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 405,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 379,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:18.072Z",
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
                  "startedAt": "2026-08-20T10:30:18.462Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:18.072Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 107,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:18.488Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:18.521Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:18.567Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:18.487Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:18.071Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 581,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 464,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 438,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:18.624Z",
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
                  "startedAt": "2026-08-20T10:30:19.073Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:18.624Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 96,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.099Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.129Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.166Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:19.098Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:18.623Z",
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
          "startedAt": "2026-08-20T10:30:19.218Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:19.238Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1242,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 533,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 405,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 379,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:18.072Z",
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
                      "startedAt": "2026-08-20T10:30:18.462Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:18.072Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 107,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:18.488Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:18.521Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:18.567Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:18.487Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:18.071Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 581,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 464,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 438,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:18.624Z",
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
                      "startedAt": "2026-08-20T10:30:19.073Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:18.624Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 96,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:19.099Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:19.129Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:19.166Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:19.098Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:18.623Z",
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
              "startedAt": "2026-08-20T10:30:19.218Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.238Z",
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
      ]
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1553,
      "startedAt": "2026-08-20T10:30:29.577Z",
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
          "name": "firefox 153.0"
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
          "duration": 699,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 547,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 519,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:29.596Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.127Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:29.596Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 129,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.155Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.195Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.242Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:30.154Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:29.595Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 687,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 546,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 518,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.315Z",
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
                  "startedAt": "2026-08-20T10:30:30.844Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:30.314Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 119,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.872Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.912Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:30.959Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:30.871Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:30.313Z",
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
          "startedAt": "2026-08-20T10:30:31.014Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:31.037Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1553,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 699,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 547,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 519,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:29.596Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.127Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:29.596Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 129,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.155Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.195Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.242Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:30.154Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:29.595Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 687,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 546,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 518,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.315Z",
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
                      "startedAt": "2026-08-20T10:30:30.844Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:30.314Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 119,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.872Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.912Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:30.959Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:30.871Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:30.313Z",
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
              "startedAt": "2026-08-20T10:30:31.014Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:31.037Z",
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
      ]
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1901,
      "startedAt": "2026-08-20T10:30:45.790Z",
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
          "name": "webkit 26.5"
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
          "duration": 792,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 615,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 584,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:45.815Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:46.411Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:45.814Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 155,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:46.441Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 61,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:46.484Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:46.556Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:46.440Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:45.813Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 940,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 755,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 725,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:46.633Z",
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
                  "startedAt": "2026-08-20T10:30:47.370Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:46.632Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 164,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:47.399Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 53,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:47.445Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:47.509Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:47.398Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:46.632Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 22,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:47.592Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 25,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:47.630Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1901,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 792,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 615,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 584,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:45.815Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:46.411Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:45.814Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 155,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:46.441Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 61,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:46.484Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:46.556Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:46.440Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:45.813Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 940,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 755,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 725,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:46.633Z",
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
                      "startedAt": "2026-08-20T10:30:47.370Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:46.632Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 164,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:47.399Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 53,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:47.445Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 41,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:47.509Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:47.398Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:46.632Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:47.592Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:47.630Z",
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
      ]
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 694,
      "startedAt": "2026-08-20T10:30:19.314Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 362,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 336,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.382Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.729Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:19.381Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 104,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.754Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.785Z",
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
              "startedAt": "2026-08-20T10:30:19.831Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:19.754Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:19.869Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 63,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.884Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.900Z",
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
              "startedAt": "2026-08-20T10:30:19.919Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:19.884Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:19.958Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:19.975Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 694,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 362,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 336,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.382Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.729Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:19.381Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 104,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.754Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.785Z",
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
                  "startedAt": "2026-08-20T10:30:19.831Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:19.754Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.869Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 63,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.884Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:19.900Z",
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
                  "startedAt": "2026-08-20T10:30:19.919Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:19.884Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.958Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:19.975Z",
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
      ]
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 967,
      "startedAt": "2026-08-20T10:30:31.152Z",
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
          "name": "firefox 153.0"
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
          "duration": 449,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 420,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:31.343Z",
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
              "startedAt": "2026-08-20T10:30:31.774Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:31.342Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 127,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:31.802Z",
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
              "startedAt": "2026-08-20T10:30:31.841Z",
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
              "startedAt": "2026-08-20T10:30:31.898Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:31.801Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:31.939Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 93,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:31.956Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:31.976Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.018Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:31.956Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:32.059Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:32.079Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 967,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 449,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 420,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:31.343Z",
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
                  "startedAt": "2026-08-20T10:30:31.774Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:31.342Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 127,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:31.802Z",
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
                  "startedAt": "2026-08-20T10:30:31.841Z",
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
                  "startedAt": "2026-08-20T10:30:31.898Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:31.801Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:31.939Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 93,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:31.956Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:31.976Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:32.018Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:31.956Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.059Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.079Z",
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
      ]
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1116,
      "startedAt": "2026-08-20T10:30:47.737Z",
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
          "name": "webkit 26.5"
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
          "duration": 469,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 435,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.051Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.498Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:48.049Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 126,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.529Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 38,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.574Z",
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
              "startedAt": "2026-08-20T10:30:48.623Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:48.529Z",
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
          "startedAt": "2026-08-20T10:30:48.666Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 95,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.683Z",
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
              "startedAt": "2026-08-20T10:30:48.702Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.739Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:48.682Z",
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
          "startedAt": "2026-08-20T10:30:48.788Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:48.805Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1116,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 469,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 435,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:48.051Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:48.498Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:48.049Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 126,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:48.529Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:48.574Z",
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
                  "startedAt": "2026-08-20T10:30:48.623Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:48.529Z",
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
              "startedAt": "2026-08-20T10:30:48.666Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 95,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:48.683Z",
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
                  "startedAt": "2026-08-20T10:30:48.702Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:48.739Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:48.682Z",
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
              "startedAt": "2026-08-20T10:30:48.788Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:48.805Z",
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
      ]
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 613,
      "startedAt": "2026-08-20T10:30:20.025Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 387,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 361,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:20.076Z",
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
              "startedAt": "2026-08-20T10:30:20.448Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:20.075Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 95,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:20.473Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:20.505Z",
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
              "startedAt": "2026-08-20T10:30:20.541Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:20.473Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 3,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:20.578Z",
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
          "startedAt": "2026-08-20T10:30:20.594Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:20.610Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 613,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 387,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 361,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:20.076Z",
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
                  "startedAt": "2026-08-20T10:30:20.448Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:20.075Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 95,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:20.473Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:20.505Z",
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
                  "startedAt": "2026-08-20T10:30:20.541Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:20.473Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:20.578Z",
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
              "startedAt": "2026-08-20T10:30:20.594Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:20.610Z",
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
      ]
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 826,
      "startedAt": "2026-08-20T10:30:32.138Z",
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
          "name": "firefox 153.0"
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
          "duration": 440,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 414,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.319Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.744Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:32.319Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 114,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 29,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.770Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:32.809Z",
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
              "startedAt": "2026-08-20T10:30:32.855Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:32.770Z",
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
          "startedAt": "2026-08-20T10:30:32.895Z",
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
          "startedAt": "2026-08-20T10:30:32.913Z",
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
          "startedAt": "2026-08-20T10:30:32.932Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 826,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 440,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 414,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:32.319Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:32.744Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:32.319Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 114,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:32.770Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:32.809Z",
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
                  "startedAt": "2026-08-20T10:30:32.855Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:32.770Z",
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
              "startedAt": "2026-08-20T10:30:32.895Z",
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
              "startedAt": "2026-08-20T10:30:32.913Z",
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
              "startedAt": "2026-08-20T10:30:32.932Z",
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
      ]
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 803,
      "startedAt": "2026-08-20T10:30:48.888Z",
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
          "name": "webkit 26.5"
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
          "duration": 413,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 384,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:49.074Z",
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
              "startedAt": "2026-08-20T10:30:49.470Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:49.073Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 114,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:49.497Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 39,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:49.531Z",
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
              "startedAt": "2026-08-20T10:30:49.581Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:49.497Z",
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
          "startedAt": "2026-08-20T10:30:49.624Z",
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
          "startedAt": "2026-08-20T10:30:49.642Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:49.664Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 803,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 413,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 384,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:49.074Z",
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
                  "startedAt": "2026-08-20T10:30:49.470Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:49.073Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 114,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:49.497Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:49.531Z",
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
                  "startedAt": "2026-08-20T10:30:49.581Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:49.497Z",
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
              "startedAt": "2026-08-20T10:30:49.624Z",
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
              "startedAt": "2026-08-20T10:30:49.642Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:49.664Z",
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
      ]
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 748,
      "startedAt": "2026-08-20T10:30:20.654Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 624,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 360,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 335,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:20.721Z",
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
                  "startedAt": "2026-08-20T10:30:21.067Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:20.721Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 91,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:21.093Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:21.123Z",
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
                  "startedAt": "2026-08-20T10:30:21.157Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:21.092Z",
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
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:21.194Z",
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
                  "startedAt": "2026-08-20T10:30:21.210Z",
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
                  "startedAt": "2026-08-20T10:30:21.230Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:21.194Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 65,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:21.269Z",
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
                  "startedAt": "2026-08-20T10:30:21.285Z",
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
                  "startedAt": "2026-08-20T10:30:21.304Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:21.269Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:20.720Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 3,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:21.355Z",
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
          "startedAt": "2026-08-20T10:30:21.371Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 748,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 624,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 360,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 335,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:20.721Z",
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
                      "startedAt": "2026-08-20T10:30:21.067Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:20.721Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 91,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:21.093Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:21.123Z",
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
                      "startedAt": "2026-08-20T10:30:21.157Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:21.092Z",
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
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:21.194Z",
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
                      "startedAt": "2026-08-20T10:30:21.210Z",
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
                      "startedAt": "2026-08-20T10:30:21.230Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:21.194Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 65,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:21.269Z",
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
                      "startedAt": "2026-08-20T10:30:21.285Z",
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
                      "startedAt": "2026-08-20T10:30:21.304Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:21.269Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:20.720Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:21.355Z",
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
              "startedAt": "2026-08-20T10:30:21.371Z",
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
      ]
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 961,
      "startedAt": "2026-08-20T10:30:32.986Z",
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
          "name": "firefox 153.0"
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
          "duration": 693,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 384,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 355,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.193Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.560Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:33.193Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 117,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.588Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.629Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.676Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:33.587Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 74,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.715Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.734Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.757Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:33.714Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 75,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.799Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.818Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:33.841Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:33.799Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:33.192Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:33.895Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:33.912Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 961,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 693,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 384,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 355,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.193Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.560Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:33.193Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 117,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.588Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.629Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.676Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:33.587Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 74,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.715Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.734Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.757Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:33.714Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 75,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.799Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.818Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:33.841Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:33.799Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:33.192Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:33.895Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:33.912Z",
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
      ]
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1129,
      "startedAt": "2026-08-20T10:30:49.712Z",
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
          "name": "webkit 26.5"
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
          "duration": 814,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 438,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 409,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:49.937Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.358Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:49.936Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 134,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.385Z",
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
                  "startedAt": "2026-08-20T10:30:50.423Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.483Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:50.385Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 103,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.531Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.566Z",
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
                  "startedAt": "2026-08-20T10:30:50.600Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:50.530Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 96,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.644Z",
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
                  "startedAt": "2026-08-20T10:30:50.663Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:50.693Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:50.643Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:49.935Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:50.760Z",
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
          "startedAt": "2026-08-20T10:30:50.783Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1129,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 814,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 438,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 409,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:49.937Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.358Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:49.936Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 134,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.385Z",
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
                      "startedAt": "2026-08-20T10:30:50.423Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.483Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:50.385Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 103,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.531Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.566Z",
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
                      "startedAt": "2026-08-20T10:30:50.600Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:50.530Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 96,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.644Z",
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
                      "startedAt": "2026-08-20T10:30:50.663Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:50.693Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:50.643Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:49.935Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:50.760Z",
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
              "startedAt": "2026-08-20T10:30:50.783Z",
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
      ]
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1111,
      "startedAt": "2026-08-20T10:30:21.422Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 368,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 343,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:21.476Z",
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
              "startedAt": "2026-08-20T10:30:21.830Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:21.476Z",
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
          "startedAt": "2026-08-20T10:30:21.855Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 85,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does not become present",
          "outcome": "SUCCESS",
          "duration": 251,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:22.120Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 82,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:22.383Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:22.403Z",
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
              "startedAt": "2026-08-20T10:30:22.437Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:22.382Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:22.474Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:22.498Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1111,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 368,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 343,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:21.476Z",
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
                  "startedAt": "2026-08-20T10:30:21.830Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:21.476Z",
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
              "startedAt": "2026-08-20T10:30:21.855Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 85,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does not become present",
              "outcome": "SUCCESS",
              "duration": 251,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:22.120Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 82,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:22.383Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:22.403Z",
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
                  "startedAt": "2026-08-20T10:30:22.437Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:22.382Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:22.474Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:22.498Z",
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
      ]
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1304,
      "startedAt": "2026-08-20T10:30:33.972Z",
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
          "name": "firefox 153.0"
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
          "duration": 392,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 364,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:34.156Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:34.531Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:34.156Z",
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
          "startedAt": "2026-08-20T10:30:34.559Z",
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
          "startedAt": "2026-08-20T10:30:34.824Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 97,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:35.087Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 37,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:35.107Z",
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
              "startedAt": "2026-08-20T10:30:35.155Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:35.086Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:35.193Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 14,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:35.218Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1304,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 392,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 364,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:34.156Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:34.531Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:34.156Z",
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
              "startedAt": "2026-08-20T10:30:34.559Z",
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
              "startedAt": "2026-08-20T10:30:34.824Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 97,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:35.087Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:35.107Z",
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
                  "startedAt": "2026-08-20T10:30:35.155Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:35.086Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:35.193Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:35.218Z",
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
      ]
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1336,
      "startedAt": "2026-08-20T10:30:50.874Z",
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
          "name": "webkit 26.5"
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
          "duration": 405,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 378,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:51.080Z",
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
              "startedAt": "2026-08-20T10:30:51.470Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:51.079Z",
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
          "startedAt": "2026-08-20T10:30:51.494Z",
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
          "startedAt": "2026-08-20T10:30:51.759Z",
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
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:52.022Z",
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
              "startedAt": "2026-08-20T10:30:52.044Z",
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
              "startedAt": "2026-08-20T10:30:52.097Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:52.022Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:52.141Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:52.167Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1336,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 405,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 378,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:51.080Z",
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
                  "startedAt": "2026-08-20T10:30:51.470Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:51.079Z",
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
              "startedAt": "2026-08-20T10:30:51.494Z",
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
              "startedAt": "2026-08-20T10:30:51.759Z",
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
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.022Z",
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
                  "startedAt": "2026-08-20T10:30:52.044Z",
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
                  "startedAt": "2026-08-20T10:30:52.097Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:52.022Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:52.141Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:52.167Z",
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
      ]
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 1543,
      "startedAt": "2026-08-20T10:30:22.552Z",
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
          "name": "chromium 151.0.7922.34"
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
          "duration": 649,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 385,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 359,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:22.619Z",
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
                  "startedAt": "2026-08-20T10:30:22.989Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:22.618Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 93,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.015Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.045Z",
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
                  "startedAt": "2026-08-20T10:30:23.081Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.014Z",
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
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.118Z",
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
                  "startedAt": "2026-08-20T10:30:23.133Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.152Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.118Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 64,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.193Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.209Z",
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
                  "startedAt": "2026-08-20T10:30:23.227Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.193Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:22.618Z",
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
          "startedAt": "2026-08-20T10:30:23.278Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 27,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:23.313Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 390,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 365,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:23.357Z",
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
              "startedAt": "2026-08-20T10:30:23.733Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:23.357Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 279,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 93,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.766Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.797Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.832Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.766Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 64,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.877Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.893Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.912Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.876Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 67,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.957Z",
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
                  "startedAt": "2026-08-20T10:30:23.975Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.994Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.957Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:23.757Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:24.046Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 1543,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 649,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 385,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 359,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:22.619Z",
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
                      "startedAt": "2026-08-20T10:30:22.989Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:22.618Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 93,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.015Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.045Z",
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
                      "startedAt": "2026-08-20T10:30:23.081Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:23.014Z",
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
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.118Z",
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
                      "startedAt": "2026-08-20T10:30:23.133Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.152Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:23.118Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 64,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.193Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.209Z",
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
                      "startedAt": "2026-08-20T10:30:23.227Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:23.193Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:22.618Z",
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
              "startedAt": "2026-08-20T10:30:23.278Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 27,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:23.313Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 390,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 365,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:23.357Z",
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
                  "startedAt": "2026-08-20T10:30:23.733Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.357Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 279,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 93,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.766Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.797Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.832Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:23.766Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 64,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.877Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.893Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.912Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:23.876Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 67,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.957Z",
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
                      "startedAt": "2026-08-20T10:30:23.975Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:23.994Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:23.957Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:23.757Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:24.046Z",
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
      ]
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 2883,
      "startedAt": "2026-08-20T10:30:35.300Z",
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
          "name": "firefox 153.0"
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
          "duration": 696,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 379,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 352,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:35.525Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:35.888Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:35.525Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 119,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:35.916Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:35.957Z",
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
                  "startedAt": "2026-08-20T10:30:36.006Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:35.915Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 78,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.045Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.062Z",
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
                  "startedAt": "2026-08-20T10:30:36.087Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:36.044Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 77,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.133Z",
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
                  "startedAt": "2026-08-20T10:30:36.152Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.177Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:36.133Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:35.524Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:36.231Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 37,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:36.285Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 568,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 541,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:36.339Z",
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
              "startedAt": "2026-08-20T10:30:36.892Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:36.338Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 323,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 115,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.926Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.965Z",
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
                  "startedAt": "2026-08-20T10:30:37.011Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:36.926Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 76,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:37.060Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:37.079Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:37.103Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:37.059Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 78,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:37.152Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:37.173Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:37.196Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:37.152Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:36.917Z",
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
          "startedAt": "2026-08-20T10:30:37.250Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 2883,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 696,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 379,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 352,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:35.525Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:35.888Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:35.525Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 119,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:35.916Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 38,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:35.957Z",
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
                      "startedAt": "2026-08-20T10:30:36.006Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:35.915Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 78,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:36.045Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:36.062Z",
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
                      "startedAt": "2026-08-20T10:30:36.087Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:36.044Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 77,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:36.133Z",
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
                      "startedAt": "2026-08-20T10:30:36.152Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:36.177Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:36.133Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:35.524Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:36.231Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 37,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:36.285Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 568,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 541,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:36.339Z",
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
                  "startedAt": "2026-08-20T10:30:36.892Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:36.338Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 323,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 115,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:36.926Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:36.965Z",
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
                      "startedAt": "2026-08-20T10:30:37.011Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:36.926Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 76,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:37.060Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:37.079Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:37.103Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:37.059Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 78,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:37.152Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:37.173Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:37.196Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:37.152Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:36.917Z",
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
              "startedAt": "2026-08-20T10:30:37.250Z",
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
      ]
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 2067,
      "startedAt": "2026-08-20T10:30:52.238Z",
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
          "name": "webkit 26.5"
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
          "duration": 724,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 345,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 289,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.446Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.746Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:52.445Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 146,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.801Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 53,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.853Z",
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
                  "startedAt": "2026-08-20T10:30:52.917Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:52.801Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 87,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.959Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:52.983Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:53.012Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:52.958Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 99,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:53.056Z",
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
                  "startedAt": "2026-08-20T10:30:53.075Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:53.114Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:53.055Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:52.443Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 16,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:53.177Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 30,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-20T10:30:53.231Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 581,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 555,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:53.278Z",
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
              "startedAt": "2026-08-20T10:30:53.844Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:53.277Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 370,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 118,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:53.879Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:53.912Z",
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
                  "startedAt": "2026-08-20T10:30:53.966Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:53.878Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 90,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:54.021Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:54.041Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:54.073Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:54.020Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 97,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:54.133Z",
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
                  "startedAt": "2026-08-20T10:30:54.162Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:54.190Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:54.133Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-20T10:30:53.870Z",
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
          "startedAt": "2026-08-20T10:30:54.251Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 2067,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 724,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 345,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 289,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:52.446Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 33,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:52.746Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:52.445Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 146,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 41,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:52.801Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 53,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:52.853Z",
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
                      "startedAt": "2026-08-20T10:30:52.917Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:52.801Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 87,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:52.959Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:52.983Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:53.012Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:52.958Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 99,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:53.056Z",
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
                      "startedAt": "2026-08-20T10:30:53.075Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:53.114Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:53.055Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:52.443Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:53.177Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-20T10:30:53.231Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 581,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 555,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-20T10:30:53.278Z",
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
                  "startedAt": "2026-08-20T10:30:53.844Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:53.277Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 370,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 118,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:53.879Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 43,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:53.912Z",
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
                      "startedAt": "2026-08-20T10:30:53.966Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:53.878Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 90,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:54.021Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:54.041Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:54.073Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:54.020Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 97,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:54.133Z",
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
                      "startedAt": "2026-08-20T10:30:54.162Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-20T10:30:54.190Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-20T10:30:54.133Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-20T10:30:53.870Z",
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
              "startedAt": "2026-08-20T10:30:54.251Z",
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
      ]
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 554,
      "startedAt": "2026-08-20T10:30:24.462Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 554,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 2084,
      "startedAt": "2026-08-20T10:30:38.945Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 2084,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 737,
      "startedAt": "2026-08-20T10:30:54.689Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 737,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 450,
      "startedAt": "2026-08-20T10:30:25.119Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 450,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 599,
      "startedAt": "2026-08-20T10:30:41.356Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 599,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 653,
      "startedAt": "2026-08-20T10:30:55.539Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 653,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 508,
      "startedAt": "2026-08-20T10:30:25.587Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 508,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 619,
      "startedAt": "2026-08-20T10:30:41.968Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 619,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 694,
      "startedAt": "2026-08-20T10:30:56.206Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 694,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 468,
      "startedAt": "2026-08-20T10:30:26.107Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 468,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 595,
      "startedAt": "2026-08-20T10:30:42.611Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 595,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 697,
      "startedAt": "2026-08-20T10:30:56.912Z",
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
          "run": "2539",
          "timestamp": "2026-08-20T10:30:16.435Z",
          "duration": 697,
          "activities": []
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-20T10:30:16.435Z",
      "duration": 41174,
      "outcomes": {
        "passed": 36,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2539",
      "slowest": 2883,
      "fastest": 301,
      "average": 1005,
      "commit": "90165f843ff79ce7039dafbc4a1b687360822526",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/32359143544",
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
      "name": "chromium 151.0.7922.34",
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
      "name": "firefox 153.0",
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
      "name": "webkit 26.5",
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
    "nodeVersion": "v24.19.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.45.8",
    "testRunner": {
      "name": "Playwright",
      "version": "1.62.1"
    },
    "browsers": [
      {
        "name": "chromium",
        "version": "151.0.7922.34"
      },
      {
        "name": "firefox",
        "version": "153.0"
      },
      {
        "name": "webkit",
        "version": "26.5"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2539",
      "branch": "main",
      "commit": "90165f843ff79ce7039dafbc4a1b687360822526",
      "commitMessage": "Merge pull request #787 from serenity-js/feat/migrate-to-html-reporter",
      "commitAuthor": "Jan Molak",
      "jobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/32359143544",
      "workflow": "build",
      "repositoryUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template",
      "triggeredBy": "jan-molak"
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
