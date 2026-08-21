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
    "duration": 39602,
    "startedAt": "2026-08-21T06:08:50.690Z",
    "finishedAt": "2026-08-21T06:09:30.292Z",
    "testRunner": "Playwright"
  },
  "scenarios": [
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 214,
      "startedAt": "2026-08-21T06:08:50.690Z",
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
          "duration": 71,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:50.972Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-4d89392e33.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Fri, 21 Aug 2026 06:08:51 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=QwcX6nLtJ2b6%2BABQIX1mfYF8MxKJ69sRv8nTGsMQs8o%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785189191\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=QwcX6nLtJ2b6%2BABQIX1mfYF8MxKJ69sRv8nTGsMQs8o%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785189191\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785189203\nage: 23606\ncf-cache-status: HIT\ncf-ray: a2e7772eeba89aed-ORD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:51.055Z",
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
          "startedAt": "2026-08-21T06:08:51.069Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 214,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 71,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:50.972Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-4d89392e33.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Fri, 21 Aug 2026 06:08:51 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=QwcX6nLtJ2b6%2BABQIX1mfYF8MxKJ69sRv8nTGsMQs8o%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785189191\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=QwcX6nLtJ2b6%2BABQIX1mfYF8MxKJ69sRv8nTGsMQs8o%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785189191\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785189203\nage: 23606\ncf-cache-status: HIT\ncf-ray: a2e7772eeba89aed-ORD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:51.055Z",
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
              "startedAt": "2026-08-21T06:08:51.069Z",
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
      "duration": 856,
      "startedAt": "2026-08-21T06:08:59.823Z",
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
          "duration": 57,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:00.938Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-01978c9bad.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Fri, 21 Aug 2026 06:09:00 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1771486965\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1771486965\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1771486971\nage: 5\ncf-cache-status: HIT\ncf-ray: a2e7776d18452ced-ORD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:01.007Z",
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
          "startedAt": "2026-08-21T06:09:01.020Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 856,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 57,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:00.938Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-01978c9bad.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Fri, 21 Aug 2026 06:09:00 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1771486965\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1771486965\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1771486971\nage: 5\ncf-cache-status: HIT\ncf-ray: a2e7776d18452ced-ORD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:01.007Z",
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
              "startedAt": "2026-08-21T06:09:01.020Z",
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
      "duration": 412,
      "startedAt": "2026-08-21T06:09:16.290Z",
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
          "duration": 73,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:16.983Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-6b79da0a03.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Fri, 21 Aug 2026 06:09:17 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1771486965\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1771486965\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1771486971\nage: 11\ncf-cache-status: HIT\ncf-ray: a2e777d17afce82a-ORD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:17.068Z",
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
          "startedAt": "2026-08-21T06:09:17.082Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 412,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 73,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:16.983Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-6b79da0a03.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Fri, 21 Aug 2026 06:09:17 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1771486965\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=TmisNZdlYZ0IAtfl%2BGbwomMdLyViSrzf5oHWC6t3wJM%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1771486965\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1771486971\nage: 11\ncf-cache-status: HIT\ncf-ray: a2e777d17afce82a-ORD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.068Z",
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
              "startedAt": "2026-08-21T06:09:17.082Z",
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
      "duration": 935,
      "startedAt": "2026-08-21T06:08:51.134Z",
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
          "duration": 114,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 80,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:51.184Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-54357e118f.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\ndate: Fri, 21 Aug 2026 06:08:26 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: c8d9e18e8af0c0b5fe62cfb37d4c3231d685924a\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.066721\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 66438b5dab9e4d24a8dab849e89db553\natl-request-id: 66438b5d-ab9e-4d24-a8da-b849e89db553\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"7d64144500bc91319fc22fff4ff333ab\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 70524e73797c8207f99cc1f287d08416.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: 5myk2GWAfiu7MpIUrJZE9F1XPvfOeyeXACp5rguPKBaE4IZIxYjO7A==\nage: 25",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-21T04:08:57.322Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:51.275Z",
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
              "startedAt": "2026-08-21T06:08:51.287Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:51.184Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 561,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 531,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:51.331Z",
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
              "startedAt": "2026-08-21T06:08:51.874Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:51.330Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 122,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:51.902Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 34,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:51.944Z",
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
              "startedAt": "2026-08-21T06:08:51.990Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:51.901Z",
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
          "startedAt": "2026-08-21T06:08:52.034Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 935,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 114,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 80,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:51.184Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-54357e118f.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\ndate: Fri, 21 Aug 2026 06:08:26 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: c8d9e18e8af0c0b5fe62cfb37d4c3231d685924a\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.066721\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 66438b5dab9e4d24a8dab849e89db553\natl-request-id: 66438b5d-ab9e-4d24-a8da-b849e89db553\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"7d64144500bc91319fc22fff4ff333ab\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 70524e73797c8207f99cc1f287d08416.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: 5myk2GWAfiu7MpIUrJZE9F1XPvfOeyeXACp5rguPKBaE4IZIxYjO7A==\nage: 25",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-21T04:08:57.322Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:51.275Z",
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
                  "startedAt": "2026-08-21T06:08:51.287Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:51.184Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 561,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 531,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:51.331Z",
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
                  "startedAt": "2026-08-21T06:08:51.874Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:51.330Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 122,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:51.902Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:51.944Z",
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
                  "startedAt": "2026-08-21T06:08:51.990Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:51.901Z",
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
              "startedAt": "2026-08-21T06:08:52.034Z",
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
      "duration": 1095,
      "startedAt": "2026-08-21T06:09:01.119Z",
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
          "duration": 72,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:01.462Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-92e9c78189.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Fri, 21 Aug 2026 06:08:51 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: c8d9e18e8af0c0b5fe62cfb37d4c3231d685924a\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.044024\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 72fd501c665e4cb0a1fdedd5b3ec0fbb\natl-request-id: 72fd501c-665e-4cb0-a1fd-edd5b3ec0fbb\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"7d64144500bc91319fc22fff4ff333ab\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 f3aa752ecd9b08d624e22fa6bb90d52e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: eW_HMiI7iMhQ9d-iQBARpZI5TjE9ba7uqOvAmnoKXomRTg4AvHOouw==\nage: 10",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-21T04:08:57.322Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:01.509Z",
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
              "startedAt": "2026-08-21T06:09:01.521Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:01.461Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 435,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 403,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:01.570Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:01.984Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:01.569Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 156,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:02.016Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 51,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:02.070Z",
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
              "startedAt": "2026-08-21T06:09:02.133Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:02.015Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:02.182Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1095,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 72,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:01.462Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-92e9c78189.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Fri, 21 Aug 2026 06:08:51 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: c8d9e18e8af0c0b5fe62cfb37d4c3231d685924a\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.044024\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 72fd501c665e4cb0a1fdedd5b3ec0fbb\natl-request-id: 72fd501c-665e-4cb0-a1fd-edd5b3ec0fbb\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"7d64144500bc91319fc22fff4ff333ab\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 f3aa752ecd9b08d624e22fa6bb90d52e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: eW_HMiI7iMhQ9d-iQBARpZI5TjE9ba7uqOvAmnoKXomRTg4AvHOouw==\nage: 10",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-21T04:08:57.322Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:01.509Z",
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
                  "startedAt": "2026-08-21T06:09:01.521Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:01.461Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 435,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 403,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:01.570Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:01.984Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:01.569Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 156,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.016Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 51,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.070Z",
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
                  "startedAt": "2026-08-21T06:09:02.133Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:02.015Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:02.182Z",
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
      "duration": 804,
      "startedAt": "2026-08-21T06:09:17.148Z",
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
          "duration": 57,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.345Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-047788d802.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Fri, 21 Aug 2026 06:08:51 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: c8d9e18e8af0c0b5fe62cfb37d4c3231d685924a\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.044024\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 72fd501c665e4cb0a1fdedd5b3ec0fbb\natl-request-id: 72fd501c-665e-4cb0-a1fd-edd5b3ec0fbb\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"7d64144500bc91319fc22fff4ff333ab\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 f3aa752ecd9b08d624e22fa6bb90d52e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: RRdO9FhSewGzeTDQFc3UQgITbY3XjMCC3j-w6koAwVKfyFyxTI501Q==\nage: 26",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-21T04:08:57.322Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.378Z",
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
              "startedAt": "2026-08-21T06:09:17.391Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:17.345Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 309,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 280,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.438Z",
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
              "startedAt": "2026-08-21T06:09:17.729Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:17.437Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 148,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.758Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 44,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.810Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 29,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:17.866Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:17.757Z",
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
          "startedAt": "2026-08-21T06:09:17.917Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 804,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 57,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:17.345Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2552/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-047788d802.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.19.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Fri, 21 Aug 2026 06:08:51 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: c8d9e18e8af0c0b5fe62cfb37d4c3231d685924a\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.044024\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 72fd501c665e4cb0a1fdedd5b3ec0fbb\natl-request-id: 72fd501c-665e-4cb0-a1fd-edd5b3ec0fbb\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"7d64144500bc91319fc22fff4ff333ab\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 f3aa752ecd9b08d624e22fa6bb90d52e.cloudfront.net (CloudFront)\nx-amz-cf-pop: ORD56-P12\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: RRdO9FhSewGzeTDQFc3UQgITbY3XjMCC3j-w6koAwVKfyFyxTI501Q==\nage: 26",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-08-21T04:08:57.322Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:17.378Z",
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
                  "startedAt": "2026-08-21T06:09:17.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:17.345Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 309,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 280,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:17.438Z",
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
                  "startedAt": "2026-08-21T06:09:17.729Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:17.437Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 148,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:17.758Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:17.810Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:17.866Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:17.757Z",
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
              "startedAt": "2026-08-21T06:09:17.917Z",
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
      "duration": 922,
      "startedAt": "2026-08-21T06:08:52.090Z",
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
          "duration": 405,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 267,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 239,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.110Z",
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
                  "startedAt": "2026-08-21T06:08:52.360Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:52.109Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 116,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.388Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.424Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.475Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:52.387Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:52.108Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 376,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 245,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 217,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.535Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.764Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:52.534Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 109,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.791Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.827Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:52.868Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:52.790Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:52.533Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:52.925Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 20,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:52.947Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 922,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 405,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 267,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 239,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.110Z",
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
                      "startedAt": "2026-08-21T06:08:52.360Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:52.109Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 116,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.388Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 40,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.424Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.475Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:52.387Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:52.108Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 376,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 245,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 217,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.535Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.764Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:52.534Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 109,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.791Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.827Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:52.868Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:52.790Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:52.533Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:52.925Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 20,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:52.947Z",
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
      "duration": 1440,
      "startedAt": "2026-08-21T06:09:02.251Z",
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
          "duration": 642,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 457,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 427,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.274Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.713Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:02.274Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 162,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.743Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 69,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.791Z",
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
                  "startedAt": "2026-08-21T06:09:02.872Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:02.742Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:02.273Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 618,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 455,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 427,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:02.937Z",
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
                  "startedAt": "2026-08-21T06:09:03.375Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:02.937Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 141,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:03.404Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:03.451Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:03.510Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:03.403Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:02.936Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:03.569Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 22,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:03.595Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1440,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 642,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 457,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 427,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:02.274Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:02.713Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:02.274Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 162,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 37,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:02.743Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 69,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:02.791Z",
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
                      "startedAt": "2026-08-21T06:09:02.872Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:02.742Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:02.273Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 618,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 455,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 427,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:02.937Z",
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
                      "startedAt": "2026-08-21T06:09:03.375Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:02.937Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 141,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 36,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:03.404Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 48,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:03.451Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:03.510Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:03.403Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:02.936Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:03.569Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 22,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:03.595Z",
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
      "duration": 2009,
      "startedAt": "2026-08-21T06:09:17.985Z",
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
          "duration": 848,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 640,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 608,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:18.007Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:18.627Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:18.006Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 186,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:18.659Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 67,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:18.714Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:18.793Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:18.657Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:18.006Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 962,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 738,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 698,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:18.884Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:19.595Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:18.883Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 200,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 45,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:19.634Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 65,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:19.691Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 55,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:19.768Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:19.633Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:18.882Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 23,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:19.865Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 36,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:19.906Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 2009,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 848,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 640,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 608,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:18.007Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:18.627Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:18.006Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 186,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:18.659Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 67,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:18.714Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 40,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:18.793Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:18.657Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:18.006Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 962,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 738,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 698,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:18.884Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:19.595Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:18.883Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 200,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 45,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:19.634Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 65,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:19.691Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 55,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:19.768Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:19.633Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:18.882Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:19.865Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:19.906Z",
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
      "duration": 582,
      "startedAt": "2026-08-21T06:08:53.030Z",
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
          "duration": 218,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 190,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.101Z",
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
              "startedAt": "2026-08-21T06:08:53.303Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:53.100Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
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
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.330Z",
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
              "startedAt": "2026-08-21T06:08:53.366Z",
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
              "startedAt": "2026-08-21T06:08:53.416Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:53.329Z",
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
          "startedAt": "2026-08-21T06:08:53.457Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 71,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.475Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.492Z",
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
              "startedAt": "2026-08-21T06:08:53.514Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:53.474Z",
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
          "startedAt": "2026-08-21T06:08:53.556Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:53.575Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 582,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 218,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 190,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:53.101Z",
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
                  "startedAt": "2026-08-21T06:08:53.303Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:53.100Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
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
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:53.330Z",
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
                  "startedAt": "2026-08-21T06:08:53.366Z",
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
                  "startedAt": "2026-08-21T06:08:53.416Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:53.329Z",
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
              "startedAt": "2026-08-21T06:08:53.457Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 71,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:53.475Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:53.492Z",
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
                  "startedAt": "2026-08-21T06:08:53.514Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:53.474Z",
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
              "startedAt": "2026-08-21T06:08:53.556Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.575Z",
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
      "duration": 840,
      "startedAt": "2026-08-21T06:09:03.716Z",
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
          "duration": 264,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 237,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:03.938Z",
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
              "startedAt": "2026-08-21T06:09:04.186Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:03.938Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 145,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 44,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:04.214Z",
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
              "startedAt": "2026-08-21T06:09:04.270Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:04.327Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:04.213Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:04.369Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
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
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:04.390Z",
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
              "startedAt": "2026-08-21T06:09:04.412Z",
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
              "startedAt": "2026-08-21T06:09:04.442Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:04.390Z",
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
          "startedAt": "2026-08-21T06:09:04.488Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 14,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:04.510Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 840,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 264,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 237,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:03.938Z",
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
                  "startedAt": "2026-08-21T06:09:04.186Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:03.938Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 145,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:04.214Z",
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
                  "startedAt": "2026-08-21T06:09:04.270Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:04.327Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:04.213Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:04.369Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
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
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:04.390Z",
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
                  "startedAt": "2026-08-21T06:09:04.412Z",
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
                  "startedAt": "2026-08-21T06:09:04.442Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:04.390Z",
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
              "startedAt": "2026-08-21T06:09:04.488Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:04.510Z",
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
      "duration": 1214,
      "startedAt": "2026-08-21T06:09:20.039Z",
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
          "duration": 344,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 305,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:20.580Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:20.897Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:20.579Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 135,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 26,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:20.935Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 50,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:20.973Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:21.034Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:20.934Z",
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
          "startedAt": "2026-08-21T06:09:21.080Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 86,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:21.099Z",
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
              "startedAt": "2026-08-21T06:09:21.121Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:21.151Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:21.099Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 15,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:21.199Z",
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
          "startedAt": "2026-08-21T06:09:21.225Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1214,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 344,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 305,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:20.580Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:20.897Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:20.579Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 135,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:20.935Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 50,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:20.973Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:21.034Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:20.934Z",
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
              "startedAt": "2026-08-21T06:09:21.080Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 86,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:21.099Z",
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
                  "startedAt": "2026-08-21T06:09:21.121Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:21.151Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:21.099Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:21.199Z",
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
              "startedAt": "2026-08-21T06:09:21.225Z",
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
      "duration": 509,
      "startedAt": "2026-08-21T06:08:53.631Z",
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
          "duration": 246,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 219,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.690Z",
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
              "startedAt": "2026-08-21T06:08:53.920Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:53.689Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
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
              "duration": 28,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:53.947Z",
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
              "startedAt": "2026-08-21T06:08:53.987Z",
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
              "startedAt": "2026-08-21T06:08:54.037Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:53.946Z",
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
          "startedAt": "2026-08-21T06:08:54.076Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 65,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:54.093Z",
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
          "startedAt": "2026-08-21T06:08:54.111Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 509,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 246,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 219,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:53.690Z",
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
                  "startedAt": "2026-08-21T06:08:53.920Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:53.689Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
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
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:53.947Z",
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
                  "startedAt": "2026-08-21T06:08:53.987Z",
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
                  "startedAt": "2026-08-21T06:08:54.037Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:53.946Z",
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
              "startedAt": "2026-08-21T06:08:54.076Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 65,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:54.093Z",
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
              "startedAt": "2026-08-21T06:08:54.111Z",
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
      "duration": 744,
      "startedAt": "2026-08-21T06:09:04.578Z",
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
          "duration": 260,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 230,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:04.828Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:05.070Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:04.828Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 135,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:05.099Z",
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
              "startedAt": "2026-08-21T06:09:05.146Z",
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
              "startedAt": "2026-08-21T06:09:05.203Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:05.098Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:05.244Z",
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
          "startedAt": "2026-08-21T06:09:05.264Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:05.284Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 744,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 260,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 230,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:04.828Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:05.070Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:04.828Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 135,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:05.099Z",
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
                  "startedAt": "2026-08-21T06:09:05.146Z",
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
                  "startedAt": "2026-08-21T06:09:05.203Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:05.098Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:05.244Z",
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
              "startedAt": "2026-08-21T06:09:05.264Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:05.284Z",
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
      "duration": 892,
      "startedAt": "2026-08-21T06:09:21.287Z",
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
          "duration": 364,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 337,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:21.563Z",
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
              "startedAt": "2026-08-21T06:09:21.912Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:21.562Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
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
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:21.940Z",
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
              "startedAt": "2026-08-21T06:09:21.982Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:22.049Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:21.939Z",
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
          "startedAt": "2026-08-21T06:09:22.096Z",
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
          "startedAt": "2026-08-21T06:09:22.121Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:22.146Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 892,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 364,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 337,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:21.563Z",
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
                  "startedAt": "2026-08-21T06:09:21.912Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:21.562Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
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
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:21.940Z",
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
                  "startedAt": "2026-08-21T06:09:21.982Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:22.049Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:21.939Z",
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
              "startedAt": "2026-08-21T06:09:22.096Z",
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
              "startedAt": "2026-08-21T06:09:22.121Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:22.146Z",
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
      "duration": 626,
      "startedAt": "2026-08-21T06:08:54.157Z",
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
          "duration": 499,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 212,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 185,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.225Z",
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
                  "startedAt": "2026-08-21T06:08:54.422Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:54.224Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
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
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.448Z",
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
                  "startedAt": "2026-08-21T06:08:54.482Z",
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
                  "startedAt": "2026-08-21T06:08:54.522Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:54.447Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 70,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.562Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.580Z",
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
                  "startedAt": "2026-08-21T06:08:54.602Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:54.562Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 69,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.644Z",
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
                  "startedAt": "2026-08-21T06:08:54.660Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.681Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:54.643Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:54.224Z",
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
          "startedAt": "2026-08-21T06:08:54.734Z",
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
          "startedAt": "2026-08-21T06:08:54.751Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 626,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 499,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 212,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 185,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:54.225Z",
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
                      "startedAt": "2026-08-21T06:08:54.422Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:54.224Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
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
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:54.448Z",
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
                      "startedAt": "2026-08-21T06:08:54.482Z",
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
                      "startedAt": "2026-08-21T06:08:54.522Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:54.447Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 70,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:54.562Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:54.580Z",
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
                      "startedAt": "2026-08-21T06:08:54.602Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:54.562Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 69,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:54.644Z",
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
                      "startedAt": "2026-08-21T06:08:54.660Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:54.681Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:54.643Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:54.224Z",
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
              "startedAt": "2026-08-21T06:08:54.734Z",
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
              "startedAt": "2026-08-21T06:08:54.751Z",
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
      "duration": 935,
      "startedAt": "2026-08-21T06:09:05.345Z",
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
          "duration": 643,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 275,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 242,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:05.572Z",
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
                  "startedAt": "2026-08-21T06:09:05.826Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:05.567Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 139,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:05.854Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:05.902Z",
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
                  "startedAt": "2026-08-21T06:09:05.961Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:05.854Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:06.005Z",
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
                  "startedAt": "2026-08-21T06:09:06.030Z",
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
                  "startedAt": "2026-08-21T06:09:06.061Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:06.004Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:06.108Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:06.129Z",
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
                  "startedAt": "2026-08-21T06:09:06.161Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:06.107Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:05.567Z",
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
          "startedAt": "2026-08-21T06:09:06.221Z",
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
          "startedAt": "2026-08-21T06:09:06.241Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 935,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 643,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 275,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 242,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:05.572Z",
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
                      "startedAt": "2026-08-21T06:09:05.826Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:05.567Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 139,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 38,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:05.854Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 48,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:05.902Z",
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
                      "startedAt": "2026-08-21T06:09:05.961Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:05.854Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:06.005Z",
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
                      "startedAt": "2026-08-21T06:09:06.030Z",
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
                      "startedAt": "2026-08-21T06:09:06.061Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:06.004Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:06.108Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:06.129Z",
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
                      "startedAt": "2026-08-21T06:09:06.161Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:06.107Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:05.567Z",
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
              "startedAt": "2026-08-21T06:09:06.221Z",
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
              "startedAt": "2026-08-21T06:09:06.241Z",
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
      "duration": 1202,
      "startedAt": "2026-08-21T06:09:22.203Z",
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
          "duration": 819,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 342,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 281,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:22.490Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:22.782Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:22.490Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 201,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 63,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:22.844Z",
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
                  "startedAt": "2026-08-21T06:09:22.921Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:22.993Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:22.843Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 128,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:23.057Z",
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
                  "startedAt": "2026-08-21T06:09:23.095Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:23.131Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:23.055Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 102,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:23.196Z",
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
                  "startedAt": "2026-08-21T06:09:23.218Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 38,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:23.248Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:23.195Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:22.489Z",
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
          "startedAt": "2026-08-21T06:09:23.319Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:23.341Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1202,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 819,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 342,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 281,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:22.490Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 39,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:22.782Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:22.490Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 201,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 63,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:22.844Z",
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
                      "startedAt": "2026-08-21T06:09:22.921Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 39,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:22.993Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:22.843Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 128,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:23.057Z",
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
                      "startedAt": "2026-08-21T06:09:23.095Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 42,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:23.131Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:23.055Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 102,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:23.196Z",
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
                      "startedAt": "2026-08-21T06:09:23.218Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 38,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:23.248Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:23.195Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:22.489Z",
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
              "startedAt": "2026-08-21T06:09:23.319Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:23.341Z",
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
      "duration": 981,
      "startedAt": "2026-08-21T06:08:54.802Z",
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
          "duration": 222,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 196,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:54.858Z",
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
              "startedAt": "2026-08-21T06:08:55.065Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:54.858Z",
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
          "startedAt": "2026-08-21T06:08:55.091Z",
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
          "startedAt": "2026-08-21T06:08:55.356Z",
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
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:55.619Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 27,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:55.638Z",
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
              "startedAt": "2026-08-21T06:08:55.676Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:55.618Z",
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
          "startedAt": "2026-08-21T06:08:55.715Z",
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
          "startedAt": "2026-08-21T06:08:55.741Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 981,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 222,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 196,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:54.858Z",
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
                  "startedAt": "2026-08-21T06:08:55.065Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:54.858Z",
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
              "startedAt": "2026-08-21T06:08:55.091Z",
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
              "startedAt": "2026-08-21T06:08:55.356Z",
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
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:55.619Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:55.638Z",
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
                  "startedAt": "2026-08-21T06:08:55.676Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:55.618Z",
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
              "startedAt": "2026-08-21T06:08:55.715Z",
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
              "startedAt": "2026-08-21T06:08:55.741Z",
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
      "duration": 1225,
      "startedAt": "2026-08-21T06:09:06.311Z",
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
          "duration": 259,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 231,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:06.537Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:06.779Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:06.536Z",
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
          "startedAt": "2026-08-21T06:09:06.806Z",
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
          "startedAt": "2026-08-21T06:09:07.072Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 109,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:07.335Z",
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
              "startedAt": "2026-08-21T06:09:07.359Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:07.412Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:07.334Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 20,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:07.454Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 19,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:07.485Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1225,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 259,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 231,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:06.537Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:06.779Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:06.536Z",
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
              "startedAt": "2026-08-21T06:09:06.806Z",
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
              "startedAt": "2026-08-21T06:09:07.072Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 109,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:07.335Z",
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
                  "startedAt": "2026-08-21T06:09:07.359Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:07.412Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:07.334Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 20,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:07.454Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:07.485Z",
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
      "duration": 1347,
      "startedAt": "2026-08-21T06:09:23.446Z",
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
          "duration": 308,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 277,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:23.754Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:24.042Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:23.753Z",
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
          "startedAt": "2026-08-21T06:09:24.072Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 85,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does not become present",
          "outcome": "SUCCESS",
          "duration": 254,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:24.337Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 115,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:24.603Z",
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
              "startedAt": "2026-08-21T06:09:24.629Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:24.685Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:24.602Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 19,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:24.727Z",
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
          "startedAt": "2026-08-21T06:09:24.757Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1347,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 308,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 277,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:23.754Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:24.042Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:23.753Z",
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
              "startedAt": "2026-08-21T06:09:24.072Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 85,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does not become present",
              "outcome": "SUCCESS",
              "duration": 254,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:24.337Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 115,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:24.603Z",
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
                  "startedAt": "2026-08-21T06:09:24.629Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:24.685Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:24.602Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:24.727Z",
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
              "startedAt": "2026-08-21T06:09:24.757Z",
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
      "duration": 1347,
      "startedAt": "2026-08-21T06:08:55.803Z",
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
          "duration": 527,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 233,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 207,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:55.888Z",
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
                  "startedAt": "2026-08-21T06:08:56.106Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:55.888Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
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
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.132Z",
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
                  "startedAt": "2026-08-21T06:08:56.168Z",
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
                  "startedAt": "2026-08-21T06:08:56.208Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.132Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 73,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.248Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.266Z",
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
                  "startedAt": "2026-08-21T06:08:56.288Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.247Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 73,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.332Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.349Z",
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
                  "startedAt": "2026-08-21T06:08:56.371Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.331Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:55.887Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:56.425Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 32,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:56.466Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 256,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 228,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:56.516Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:56.755Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:56.515Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 306,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 107,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.791Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.826Z",
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
                  "startedAt": "2026-08-21T06:08:56.869Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.790Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 68,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.916Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.933Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.955Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.916Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 74,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:57.004Z",
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
                  "startedAt": "2026-08-21T06:08:57.023Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:57.045Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:57.003Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:08:56.781Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:08:57.098Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1347,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 527,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 233,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 207,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:55.888Z",
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
                      "startedAt": "2026-08-21T06:08:56.106Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:55.888Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
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
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.132Z",
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
                      "startedAt": "2026-08-21T06:08:56.168Z",
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
                      "startedAt": "2026-08-21T06:08:56.208Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:56.132Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 73,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.248Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.266Z",
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
                      "startedAt": "2026-08-21T06:08:56.288Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:56.247Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 73,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.332Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.349Z",
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
                      "startedAt": "2026-08-21T06:08:56.371Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:56.331Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:55.887Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:56.425Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 32,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:56.466Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 256,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 228,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.516Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                },
                {
                  "name": "Bobby ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:08:56.755Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.515Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 306,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 107,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.791Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.826Z",
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
                      "startedAt": "2026-08-21T06:08:56.869Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:56.790Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 68,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.916Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.933Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:56.955Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:56.916Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 74,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:57.004Z",
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
                      "startedAt": "2026-08-21T06:08:57.023Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:08:57.045Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:08:57.003Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:08:56.781Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:08:57.098Z",
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
      "duration": 3163,
      "startedAt": "2026-08-21T06:09:07.565Z",
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
          "duration": 631,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 273,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 244,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:07.841Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.095Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:07.840Z",
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
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.125Z",
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
                  "startedAt": "2026-08-21T06:09:08.171Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.229Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:08.124Z",
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
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.272Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.293Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.321Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:08.271Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 91,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.370Z",
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
                  "startedAt": "2026-08-21T06:09:08.393Z",
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
                  "startedAt": "2026-08-21T06:09:08.422Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:08.369Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:07.840Z",
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
          "startedAt": "2026-08-21T06:09:08.482Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 40,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:08.533Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 466,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 438,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:08.591Z",
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
              "startedAt": "2026-08-21T06:09:09.040Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:08.590Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 377,
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
                  "startedAt": "2026-08-21T06:09:09.076Z",
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
                  "startedAt": "2026-08-21T06:09:09.121Z",
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
                  "startedAt": "2026-08-21T06:09:09.176Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:09.076Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 93,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:09.226Z",
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
                  "startedAt": "2026-08-21T06:09:09.252Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:09.282Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:09.226Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 94,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:09.341Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:09.367Z",
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
                  "startedAt": "2026-08-21T06:09:09.396Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:09.340Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:09.067Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 14,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:09.455Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 3163,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 631,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 273,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 244,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:07.841Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.095Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:07.840Z",
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
                      "duration": 35,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.125Z",
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
                      "startedAt": "2026-08-21T06:09:08.171Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.229Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:08.124Z",
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
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.272Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.293Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.321Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:08.271Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 91,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:08.370Z",
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
                      "startedAt": "2026-08-21T06:09:08.393Z",
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
                      "startedAt": "2026-08-21T06:09:08.422Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:08.369Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:07.840Z",
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
              "startedAt": "2026-08-21T06:09:08.482Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 40,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:08.533Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 466,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 438,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:08.591Z",
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
                  "startedAt": "2026-08-21T06:09:09.040Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:08.590Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 377,
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
                      "startedAt": "2026-08-21T06:09:09.076Z",
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
                      "startedAt": "2026-08-21T06:09:09.121Z",
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
                      "startedAt": "2026-08-21T06:09:09.176Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:09.076Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 93,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:09.226Z",
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
                      "startedAt": "2026-08-21T06:09:09.252Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:09.282Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:09.226Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 94,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:09.341Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:09.367Z",
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
                      "startedAt": "2026-08-21T06:09:09.396Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:09.340Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:09.067Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:09.455Z",
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
      "duration": 2110,
      "startedAt": "2026-08-21T06:09:24.826Z",
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
          "duration": 705,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 312,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 285,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.095Z",
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
                  "startedAt": "2026-08-21T06:09:25.391Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:25.094Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 142,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.418Z",
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
                  "startedAt": "2026-08-21T06:09:25.464Z",
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
                  "startedAt": "2026-08-21T06:09:25.524Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:25.417Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 98,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 18,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.570Z",
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
                  "startedAt": "2026-08-21T06:09:25.600Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.630Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:25.570Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 107,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 17,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.681Z",
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
                  "startedAt": "2026-08-21T06:09:25.710Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.746Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:25.680Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:25.093Z",
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
          "startedAt": "2026-08-21T06:09:25.810Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 32,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:25.889Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 505,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 480,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:25.939Z",
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
              "startedAt": "2026-08-21T06:09:26.430Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:25.939Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 410,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 142,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.464Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 50,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.508Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.569Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:26.464Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.632Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.658Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.693Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:26.631Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 99,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 13,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.756Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:26.781Z",
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
                  "startedAt": "2026-08-21T06:09:26.814Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:26.755Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-08-21T06:09:26.455Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 16,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-08-21T06:09:26.879Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 2110,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 705,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 312,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 285,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:25.095Z",
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
                      "startedAt": "2026-08-21T06:09:25.391Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:25.094Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 142,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:25.418Z",
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
                      "startedAt": "2026-08-21T06:09:25.464Z",
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
                      "startedAt": "2026-08-21T06:09:25.524Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:25.417Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 98,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 18,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:25.570Z",
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
                      "startedAt": "2026-08-21T06:09:25.600Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 27,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:25.630Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:25.570Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 107,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 17,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:25.681Z",
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
                      "startedAt": "2026-08-21T06:09:25.710Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:25.746Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:25.680Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:25.093Z",
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
              "startedAt": "2026-08-21T06:09:25.810Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 32,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:25.889Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 505,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 480,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-08-21T06:09:25.939Z",
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
                  "startedAt": "2026-08-21T06:09:26.430Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:25.939Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 410,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 142,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 33,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.464Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 50,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.508Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.569Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:26.464Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 100,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.632Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.658Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.693Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:26.631Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 99,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 13,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.756Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-08-21T06:09:26.781Z",
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
                      "startedAt": "2026-08-21T06:09:26.814Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-08-21T06:09:26.755Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-08-21T06:09:26.455Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 16,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-08-21T06:09:26.879Z",
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
      "duration": 418,
      "startedAt": "2026-08-21T06:08:57.610Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 418,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 1616,
      "startedAt": "2026-08-21T06:09:11.585Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 1616,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 722,
      "startedAt": "2026-08-21T06:09:27.383Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 722,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 325,
      "startedAt": "2026-08-21T06:08:58.138Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 325,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 520,
      "startedAt": "2026-08-21T06:09:13.634Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 520,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 635,
      "startedAt": "2026-08-21T06:09:28.237Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 635,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 350,
      "startedAt": "2026-08-21T06:08:58.483Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 350,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 603,
      "startedAt": "2026-08-21T06:09:14.175Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 603,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 708,
      "startedAt": "2026-08-21T06:09:28.891Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 708,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 361,
      "startedAt": "2026-08-21T06:08:58.846Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 361,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 540,
      "startedAt": "2026-08-21T06:09:14.806Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 540,
          "activities": []
        }
      ]
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 675,
      "startedAt": "2026-08-21T06:09:29.617Z",
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
          "run": "2552",
          "timestamp": "2026-08-21T06:08:50.690Z",
          "duration": 675,
          "activities": []
        }
      ]
    }
  ],
  "history": [
    {
      "timestamp": "2026-08-21T06:08:50.690Z",
      "duration": 39602,
      "outcomes": {
        "passed": 36,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2552",
      "slowest": 3163,
      "fastest": 214,
      "average": 941,
      "commit": "6ec404e27fc3ea2fdaa92ca8827205d800cb08fb",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/32453145456",
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
    "serenityVersion": "3.45.9",
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
      "buildNumber": "2552",
      "branch": "main",
      "commit": "6ec404e27fc3ea2fdaa92ca8827205d800cb08fb",
      "commitMessage": "fix(deps): update serenity/js and playwright to ^3.45.9 (#791)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/32453145456",
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
