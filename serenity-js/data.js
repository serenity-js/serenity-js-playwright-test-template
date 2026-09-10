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
    "duration": 40064,
    "startedAt": "2026-09-10T06:01:11.062Z",
    "finishedAt": "2026-09-10T06:01:51.126Z",
    "testRunner": "Playwright"
  },
  "scenarios": [
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 214,
      "startedAt": "2026-09-10T06:01:11.062Z",
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
          "duration": 68,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:11.386Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-6321f09fda.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Thu, 10 Sep 2026 06:01:11 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785164981\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785164981\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785165020\nage: 1151\ncf-cache-status: HIT\ncf-ray: a38c37767dc1cc77-IAD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:11.466Z",
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
          "startedAt": "2026-09-10T06:01:11.479Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 214,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 68,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:11.386Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-6321f09fda.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Thu, 10 Sep 2026 06:01:11 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785164981\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785164981\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785165020\nage: 1151\ncf-cache-status: HIT\ncf-ray: a38c37767dc1cc77-IAD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:11.466Z",
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
              "startedAt": "2026-09-10T06:01:11.479Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 890,
      "startedAt": "2026-09-10T06:01:20.036Z",
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
          "startedAt": "2026-09-10T06:01:21.170Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-81c84fa973.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Thu, 10 Sep 2026 06:01:21 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785164981\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785164981\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785165020\nage: 1161\ncf-cache-status: HIT\ncf-ray: a38c37b39f1bb1eb-IAD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:21.247Z",
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
          "startedAt": "2026-09-10T06:01:21.260Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 890,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 65,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:21.170Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-81c84fa973.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Thu, 10 Sep 2026 06:01:21 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785164981\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785164981\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785165020\nage: 1161\ncf-cache-status: HIT\ncf-ray: a38c37b39f1bb1eb-IAD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:21.247Z",
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
              "startedAt": "2026-09-10T06:01:21.260Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 428,
      "startedAt": "2026-09-10T06:01:36.422Z",
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
          "duration": 63,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:37.157Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-ee102bda02.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Thu, 10 Sep 2026 06:01:37 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785164981\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785164981\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785165020\nage: 1177\ncf-cache-status: HIT\ncf-ray: a38c381788dea561-IAD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:37.235Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 33,
            "column": 28
          }
        },
        {
          "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
          "outcome": "SUCCESS",
          "duration": 3,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:37.249Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 428,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 63,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.157Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-ee102bda02.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Thu, 10 Sep 2026 06:01:37 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\nnel: {\"report_to\":\"heroku-nel\",\"response_headers\":[\"Via\"],\"max_age\":3600,\"success_fraction\":0.01,\"failure_fraction\":0.1}\npragma: no-cache\nreport-to: {\"group\":\"heroku-nel\",\"endpoints\":[{\"url\":\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D\\u0026sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d\\u0026ts=1785164981\"}],\"max_age\":3600}\nreporting-endpoints: heroku-nel=\"https://nel.heroku.com/reports?s=6OD5Ma7Hf8sxRkmZQ%2FUwG5GvjVELY1G1N1c9ZRZ0AF4%3D&sid=e11707d5-02a7-43ef-b45e-2cf4d2036f7d&ts=1785164981\"\nserver: cloudflare\nvary: Origin, Accept-Encoding\nvia: 2.0 heroku-router\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 1000\nx-ratelimit-remaining: 999\nx-ratelimit-reset: 1785165020\nage: 1177\ncf-cache-status: HIT\ncf-ray: a38c381788dea561-IAD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.235Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 33,
                "column": 28
              }
            },
            {
              "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.249Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 766,
      "startedAt": "2026-09-10T06:01:11.549Z",
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
          "duration": 131,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 95,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:11.615Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-9b2a18f47e.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 10 Sep 2026 06:01:05 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: a59f71bada693ac6113a7c693930511d729e6b57\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055396\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: cb3c4ae5e6d445fc9b6eed4aded94b0f\natl-request-id: cb3c4ae5-e6d4-45fc-9b6e-ed4aded94b0f\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"bdcf12ca5c4aeb13aa47c63b882ecd0e\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6c1ad5735448633ec32f42aeac09a99e.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: MU4r2HMZqvX3nd7beB4s6e3PHHB2GgSP_Is7bZdfTV_5kgDMMnl0kA==\nage: 6",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-10T04:59:03.553Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:11.722Z",
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
              "startedAt": "2026-09-10T06:01:11.734Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:11.614Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 355,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 327,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:11.784Z",
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
              "startedAt": "2026-09-10T06:01:12.122Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:11.783Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 120,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:12.150Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:12.191Z",
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
              "startedAt": "2026-09-10T06:01:12.235Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:12.149Z",
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
          "startedAt": "2026-09-10T06:01:12.280Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 766,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 131,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 95,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:11.615Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-9b2a18f47e.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 10 Sep 2026 06:01:05 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: a59f71bada693ac6113a7c693930511d729e6b57\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.055396\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: cb3c4ae5e6d445fc9b6eed4aded94b0f\natl-request-id: cb3c4ae5-e6d4-45fc-9b6e-ed4aded94b0f\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"bdcf12ca5c4aeb13aa47c63b882ecd0e\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6c1ad5735448633ec32f42aeac09a99e.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: MU4r2HMZqvX3nd7beB4s6e3PHHB2GgSP_Is7bZdfTV_5kgDMMnl0kA==\nage: 6",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-10T04:59:03.553Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:11.722Z",
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
                  "startedAt": "2026-09-10T06:01:11.734Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:11.614Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 355,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 327,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:11.784Z",
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
                  "startedAt": "2026-09-10T06:01:12.122Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:11.783Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 120,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:12.150Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:12.191Z",
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
                  "startedAt": "2026-09-10T06:01:12.235Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:12.149Z",
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
              "startedAt": "2026-09-10T06:01:12.280Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 1111,
      "startedAt": "2026-09-10T06:01:21.359Z",
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
          "duration": 64,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 27,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:21.725Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-2f349ccfc8.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 10 Sep 2026 06:01:15 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: a59f71bada693ac6113a7c693930511d729e6b57\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.063141\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: ed8628b889dc4793812ef6668532280c\natl-request-id: ed8628b8-89dc-4793-812e-f6668532280c\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"bdcf12ca5c4aeb13aa47c63b882ecd0e\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6c1ad5735448633ec32f42aeac09a99e.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: PQ2Gs4BXgOgIKx2TdRvcgBRMtgVikY0C1LxehN8EcIx3H8LBEq2RCg==\nage: 6",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-10T04:59:03.553Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:21.764Z",
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
              "startedAt": "2026-09-10T06:01:21.776Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:21.724Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 422,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 391,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:21.839Z",
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
              "startedAt": "2026-09-10T06:01:22.241Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:21.838Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 155,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 41,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:22.272Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 49,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:22.325Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:22.385Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:22.271Z",
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
          "startedAt": "2026-09-10T06:01:22.437Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1111,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 64,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:21.725Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-2f349ccfc8.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 10 Sep 2026 06:01:15 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: a59f71bada693ac6113a7c693930511d729e6b57\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.063141\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: ed8628b889dc4793812ef6668532280c\natl-request-id: ed8628b8-89dc-4793-812e-f6668532280c\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"bdcf12ca5c4aeb13aa47c63b882ecd0e\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 6c1ad5735448633ec32f42aeac09a99e.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: PQ2Gs4BXgOgIKx2TdRvcgBRMtgVikY0C1LxehN8EcIx3H8LBEq2RCg==\nage: 6",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-10T04:59:03.553Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:21.764Z",
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
                  "startedAt": "2026-09-10T06:01:21.776Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:21.724Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 422,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 391,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:21.839Z",
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
                  "startedAt": "2026-09-10T06:01:22.241Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:21.838Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 155,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:22.272Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:22.325Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:22.385Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:22.271Z",
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
              "startedAt": "2026-09-10T06:01:22.437Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 857,
      "startedAt": "2026-09-10T06:01:37.321Z",
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
          "duration": 59,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.552Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-8aacc3b466.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 10 Sep 2026 06:01:35 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: a59f71bada693ac6113a7c693930511d729e6b57\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.065162\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 6cfd76ccd2ce49ce98e3f0abe5128185\natl-request-id: 6cfd76cc-d2ce-49ce-98e3-f0abe5128185\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"bdcf12ca5c4aeb13aa47c63b882ecd0e\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 41455bc9d31b600534a938eb92ece0a4.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: vwmWL50Bh15jGI0ECKjA5Pl7Mh6IkhqoblDDaGAy7WtVqvMnHA7z_g==\nage: 2",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-10T04:59:03.553Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.583Z",
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
              "startedAt": "2026-09-10T06:01:37.598Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:37.551Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 322,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 283,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.656Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 15,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.951Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:37.655Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 145,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 40,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:37.989Z",
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
              "startedAt": "2026-09-10T06:01:38.039Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 27,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:38.095Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:37.988Z",
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
          "startedAt": "2026-09-10T06:01:38.143Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 857,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 59,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:37.552Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2590/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-8aacc3b466.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Thu, 10 Sep 2026 06:01:35 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: a59f71bada693ac6113a7c693930511d729e6b57\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.065162\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 6cfd76ccd2ce49ce98e3f0abe5128185\natl-request-id: 6cfd76cc-d2ce-49ce-98e3-f0abe5128185\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"bdcf12ca5c4aeb13aa47c63b882ecd0e\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 41455bc9d31b600534a938eb92ece0a4.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: vwmWL50Bh15jGI0ECKjA5Pl7Mh6IkhqoblDDaGAy7WtVqvMnHA7z_g==\nage: 2",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-09-10T04:59:03.553Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:37.583Z",
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
                  "startedAt": "2026-09-10T06:01:37.598Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:37.551Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 322,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 283,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:37.656Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:37.951Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:37.655Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 145,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:37.989Z",
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
                  "startedAt": "2026-09-10T06:01:38.039Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 27,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:38.095Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:37.988Z",
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
              "startedAt": "2026-09-10T06:01:38.143Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 914,
      "startedAt": "2026-09-10T06:01:12.344Z",
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
          "duration": 387,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 259,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 233,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:12.368Z",
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
                  "startedAt": "2026-09-10T06:01:12.612Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:12.368Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 105,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:12.638Z",
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
                  "startedAt": "2026-09-10T06:01:12.672Z",
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
                  "startedAt": "2026-09-10T06:01:12.714Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:12.638Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:12.367Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 391,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 253,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 226,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:12.781Z",
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
                  "startedAt": "2026-09-10T06:01:13.018Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:12.781Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 115,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:13.046Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:13.082Z",
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
                  "startedAt": "2026-09-10T06:01:13.132Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:13.045Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:12.780Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:13.185Z",
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
          "startedAt": "2026-09-10T06:01:13.205Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 914,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 387,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 259,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 233,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:12.368Z",
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
                      "startedAt": "2026-09-10T06:01:12.612Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:12.368Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 105,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:12.638Z",
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
                      "startedAt": "2026-09-10T06:01:12.672Z",
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
                      "startedAt": "2026-09-10T06:01:12.714Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:12.638Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:12.367Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 391,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 253,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 226,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:12.781Z",
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
                      "startedAt": "2026-09-10T06:01:13.018Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:12.781Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 115,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:13.046Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 39,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:13.082Z",
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
                      "startedAt": "2026-09-10T06:01:13.132Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:13.045Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:12.780Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:13.185Z",
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
              "startedAt": "2026-09-10T06:01:13.205Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1519,
      "startedAt": "2026-09-10T06:01:22.516Z",
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
          "duration": 613,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 457,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 430,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:22.541Z",
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
                  "startedAt": "2026-09-10T06:01:22.983Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:22.541Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 134,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:23.010Z",
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
                  "startedAt": "2026-09-10T06:01:23.054Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:23.111Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:23.009Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:22.540Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 736,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 548,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 518,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:23.182Z",
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
                  "startedAt": "2026-09-10T06:01:23.712Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:23.181Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 166,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:23.741Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 75,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:23.787Z",
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
                  "startedAt": "2026-09-10T06:01:23.873Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:23.740Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:23.181Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:23.931Z",
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
          "startedAt": "2026-09-10T06:01:23.953Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1519,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 613,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 457,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 430,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:22.541Z",
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
                      "startedAt": "2026-09-10T06:01:22.983Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:22.541Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 134,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:23.010Z",
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
                      "startedAt": "2026-09-10T06:01:23.054Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 21,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:23.111Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:23.009Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:22.540Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 736,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 548,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 518,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:23.182Z",
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
                      "startedAt": "2026-09-10T06:01:23.712Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:23.181Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 166,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:23.741Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 75,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:23.787Z",
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
                      "startedAt": "2026-09-10T06:01:23.873Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:23.740Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:23.181Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:23.931Z",
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
              "startedAt": "2026-09-10T06:01:23.953Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 2022,
      "startedAt": "2026-09-10T06:01:38.206Z",
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
          "duration": 838,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 611,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 580,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:38.230Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:38.822Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:38.230Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 204,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 51,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:38.854Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 81,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:38.916Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:39.008Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:38.853Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:38.229Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 988,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 766,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 731,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:39.103Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:39.847Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:39.102Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 199,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:39.881Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 70,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:39.937Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:40.019Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:39.880Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:39.100Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:40.107Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 37,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:40.139Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 2022,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 838,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 611,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 580,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:38.230Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:38.822Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:38.230Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 204,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 51,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:38.854Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 81,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:38.916Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 39,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:39.008Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:38.853Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:38.229Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 988,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 766,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 731,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:39.103Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:39.847Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:39.102Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 199,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:39.881Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 70,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:39.937Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 49,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:40.019Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:39.880Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:39.100Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:40.107Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 37,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:40.139Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 580,
      "startedAt": "2026-09-10T06:01:13.281Z",
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
          "duration": 228,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 200,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:13.364Z",
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
              "startedAt": "2026-09-10T06:01:13.576Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:13.363Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 100,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:13.602Z",
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
              "startedAt": "2026-09-10T06:01:13.635Z",
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
              "startedAt": "2026-09-10T06:01:13.674Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:13.602Z",
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
          "startedAt": "2026-09-10T06:01:13.713Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 69,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:13.729Z",
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
              "startedAt": "2026-09-10T06:01:13.746Z",
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
              "startedAt": "2026-09-10T06:01:13.767Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:13.728Z",
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
          "startedAt": "2026-09-10T06:01:13.807Z",
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
          "startedAt": "2026-09-10T06:01:13.825Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 580,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 228,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 200,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:13.364Z",
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
                  "startedAt": "2026-09-10T06:01:13.576Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:13.363Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:13.602Z",
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
                  "startedAt": "2026-09-10T06:01:13.635Z",
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
                  "startedAt": "2026-09-10T06:01:13.674Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:13.602Z",
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
              "startedAt": "2026-09-10T06:01:13.713Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 69,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:13.729Z",
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
                  "startedAt": "2026-09-10T06:01:13.746Z",
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
                  "startedAt": "2026-09-10T06:01:13.767Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:13.728Z",
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
              "startedAt": "2026-09-10T06:01:13.807Z",
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
              "startedAt": "2026-09-10T06:01:13.825Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 825,
      "startedAt": "2026-09-10T06:01:24.060Z",
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
          "duration": 265,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 238,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:24.291Z",
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
              "startedAt": "2026-09-10T06:01:24.541Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:24.291Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 129,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:24.567Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:24.611Z",
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
              "startedAt": "2026-09-10T06:01:24.665Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:24.567Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:24.706Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 85,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:24.725Z",
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
              "startedAt": "2026-09-10T06:01:24.745Z",
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
              "startedAt": "2026-09-10T06:01:24.776Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:24.724Z",
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
          "startedAt": "2026-09-10T06:01:24.819Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:24.840Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 825,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 265,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 238,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:24.291Z",
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
                  "startedAt": "2026-09-10T06:01:24.541Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:24.291Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 129,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:24.567Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:24.611Z",
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
                  "startedAt": "2026-09-10T06:01:24.665Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:24.567Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:24.706Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 85,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:24.725Z",
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
                  "startedAt": "2026-09-10T06:01:24.745Z",
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
                  "startedAt": "2026-09-10T06:01:24.776Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:24.724Z",
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
              "startedAt": "2026-09-10T06:01:24.819Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:24.840Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1704,
      "startedAt": "2026-09-10T06:01:40.275Z",
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
          "duration": 565,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 475,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:40.830Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.319Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:40.826Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 299,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 73,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.403Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 115,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.488Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 74,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.617Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:41.402Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
          "outcome": "SUCCESS",
          "duration": 34,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:41.713Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 153,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 51,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.763Z",
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
              "startedAt": "2026-09-10T06:01:41.825Z",
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
              "startedAt": "2026-09-10T06:01:41.874Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:41.758Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:41.922Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:41.942Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1704,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 565,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 475,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:40.830Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 61,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:41.319Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:40.826Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 299,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 73,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:41.403Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 115,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:41.488Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 74,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:41.617Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:41.402Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\" ]",
              "outcome": "SUCCESS",
              "duration": 34,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.713Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 153,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 51,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:41.763Z",
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
                  "startedAt": "2026-09-10T06:01:41.825Z",
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
                  "startedAt": "2026-09-10T06:01:41.874Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:41.758Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.922Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:41.942Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 458,
      "startedAt": "2026-09-10T06:01:13.891Z",
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
          "duration": 214,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 187,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:13.949Z",
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
              "startedAt": "2026-09-10T06:01:14.147Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:13.948Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 100,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:14.173Z",
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
              "startedAt": "2026-09-10T06:01:14.207Z",
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
              "startedAt": "2026-09-10T06:01:14.246Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:14.173Z",
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
          "startedAt": "2026-09-10T06:01:14.284Z",
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
          "startedAt": "2026-09-10T06:01:14.301Z",
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
          "startedAt": "2026-09-10T06:01:14.318Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 458,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 214,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 187,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:13.949Z",
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
                  "startedAt": "2026-09-10T06:01:14.147Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:13.948Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:14.173Z",
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
                  "startedAt": "2026-09-10T06:01:14.207Z",
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
                  "startedAt": "2026-09-10T06:01:14.246Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:14.173Z",
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
              "startedAt": "2026-09-10T06:01:14.284Z",
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
              "startedAt": "2026-09-10T06:01:14.301Z",
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
              "startedAt": "2026-09-10T06:01:14.318Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 708,
      "startedAt": "2026-09-10T06:01:24.919Z",
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
          "duration": 248,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 222,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:25.157Z",
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
              "startedAt": "2026-09-10T06:01:25.390Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:25.157Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 129,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:25.416Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:25.461Z",
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
              "startedAt": "2026-09-10T06:01:25.515Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:25.416Z",
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
          "startedAt": "2026-09-10T06:01:25.556Z",
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
          "startedAt": "2026-09-10T06:01:25.574Z",
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
          "startedAt": "2026-09-10T06:01:25.592Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 708,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 248,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 222,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:25.157Z",
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
                  "startedAt": "2026-09-10T06:01:25.390Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:25.157Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 129,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:25.416Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:25.461Z",
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
                  "startedAt": "2026-09-10T06:01:25.515Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:25.416Z",
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
              "startedAt": "2026-09-10T06:01:25.556Z",
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
              "startedAt": "2026-09-10T06:01:25.574Z",
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
              "startedAt": "2026-09-10T06:01:25.592Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 903,
      "startedAt": "2026-09-10T06:01:42.019Z",
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
          "duration": 356,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 318,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:42.287Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:42.618Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:42.287Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 167,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:42.655Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 73,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:42.699Z",
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
              "startedAt": "2026-09-10T06:01:42.783Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:42.654Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 8,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:42.832Z",
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
          "startedAt": "2026-09-10T06:01:42.859Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 67,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:42.889Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 903,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 356,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 318,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:42.287Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:42.618Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:42.287Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 167,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:42.655Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 73,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:42.699Z",
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
                  "startedAt": "2026-09-10T06:01:42.783Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:42.654Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:42.832Z",
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
              "startedAt": "2026-09-10T06:01:42.859Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 67,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.completed does equal false",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:42.889Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 632,
      "startedAt": "2026-09-10T06:01:14.369Z",
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
          "duration": 497,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 207,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 181,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:14.441Z",
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
                  "startedAt": "2026-09-10T06:01:14.633Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:14.441Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:14.659Z",
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
                  "startedAt": "2026-09-10T06:01:14.692Z",
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
                  "startedAt": "2026-09-10T06:01:14.732Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:14.659Z",
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
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:14.770Z",
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
                  "startedAt": "2026-09-10T06:01:14.786Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:14.806Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:14.769Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 68,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:14.860Z",
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
                  "startedAt": "2026-09-10T06:01:14.876Z",
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
                  "startedAt": "2026-09-10T06:01:14.896Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:14.859Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:14.440Z",
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
          "startedAt": "2026-09-10T06:01:14.948Z",
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
          "startedAt": "2026-09-10T06:01:14.966Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 632,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 497,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 207,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 181,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:14.441Z",
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
                      "startedAt": "2026-09-10T06:01:14.633Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:14.441Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 100,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:14.659Z",
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
                      "startedAt": "2026-09-10T06:01:14.692Z",
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
                      "startedAt": "2026-09-10T06:01:14.732Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:14.659Z",
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
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:14.770Z",
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
                      "startedAt": "2026-09-10T06:01:14.786Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:14.806Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:14.769Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 68,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:14.860Z",
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
                      "startedAt": "2026-09-10T06:01:14.876Z",
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
                      "startedAt": "2026-09-10T06:01:14.896Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:14.859Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:14.440Z",
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
              "startedAt": "2026-09-10T06:01:14.948Z",
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
              "startedAt": "2026-09-10T06:01:14.966Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 892,
      "startedAt": "2026-09-10T06:01:25.653Z",
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
          "duration": 595,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 258,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 231,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:25.881Z",
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
                  "startedAt": "2026-09-10T06:01:26.123Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:25.880Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 130,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:26.150Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:26.195Z",
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
                  "startedAt": "2026-09-10T06:01:26.249Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:26.149Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 81,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:26.291Z",
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
                  "startedAt": "2026-09-10T06:01:26.310Z",
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
                  "startedAt": "2026-09-10T06:01:26.338Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:26.290Z",
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
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:26.382Z",
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
                  "startedAt": "2026-09-10T06:01:26.404Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:26.429Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:26.382Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:25.880Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:26.486Z",
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
          "startedAt": "2026-09-10T06:01:26.505Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 892,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 595,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 258,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 231,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:25.881Z",
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
                      "startedAt": "2026-09-10T06:01:26.123Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:25.880Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 130,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:26.150Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 43,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:26.195Z",
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
                      "startedAt": "2026-09-10T06:01:26.249Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:26.149Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 81,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:26.291Z",
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
                      "startedAt": "2026-09-10T06:01:26.310Z",
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
                      "startedAt": "2026-09-10T06:01:26.338Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:26.290Z",
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
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:26.382Z",
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
                      "startedAt": "2026-09-10T06:01:26.404Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:26.429Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:26.382Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:25.880Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:26.486Z",
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
              "startedAt": "2026-09-10T06:01:26.505Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1143,
      "startedAt": "2026-09-10T06:01:42.949Z",
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
          "duration": 665,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 300,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 273,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:43.338Z",
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
                  "startedAt": "2026-09-10T06:01:43.622Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:43.337Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
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
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:43.648Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 58,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:43.688Z",
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
                  "startedAt": "2026-09-10T06:01:43.758Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:43.648Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 97,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:43.805Z",
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
                  "startedAt": "2026-09-10T06:01:43.829Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:43.859Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:43.804Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 80,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:43.913Z",
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
                  "startedAt": "2026-09-10T06:01:43.932Z",
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
                  "startedAt": "2026-09-10T06:01:43.958Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:43.912Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:43.337Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 74,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that number of items left does equal 3",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:44.013Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 14,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:44.039Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1143,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 665,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 300,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 273,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:43.338Z",
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
                      "startedAt": "2026-09-10T06:01:43.622Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:43.337Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
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
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:43.648Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 58,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:43.688Z",
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
                      "startedAt": "2026-09-10T06:01:43.758Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:43.648Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 97,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:43.805Z",
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
                      "startedAt": "2026-09-10T06:01:43.829Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:43.859Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:43.804Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 80,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:43.913Z",
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
                      "startedAt": "2026-09-10T06:01:43.932Z",
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
                      "startedAt": "2026-09-10T06:01:43.958Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:43.912Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:43.337Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 74,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that number of items left does equal 3",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:44.013Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 14,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:44.039Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 974,
      "startedAt": "2026-09-10T06:01:15.023Z",
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
          "duration": 212,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 186,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:15.090Z",
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
              "startedAt": "2026-09-10T06:01:15.287Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:15.089Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 83,
            "column": 37
          }
        },
        {
          "name": "Alice ensures that main section does not become present",
          "outcome": "SUCCESS",
          "duration": 253,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:15.312Z",
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
          "startedAt": "2026-09-10T06:01:15.576Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 85,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 8,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:15.839Z",
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
              "startedAt": "2026-09-10T06:01:15.858Z",
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
              "startedAt": "2026-09-10T06:01:15.896Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:15.838Z",
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
          "startedAt": "2026-09-10T06:01:15.934Z",
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
          "startedAt": "2026-09-10T06:01:15.958Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 974,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 212,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 186,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:15.090Z",
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
                  "startedAt": "2026-09-10T06:01:15.287Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:15.089Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that main section does not become present",
              "outcome": "SUCCESS",
              "duration": 253,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:15.312Z",
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
              "startedAt": "2026-09-10T06:01:15.576Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 85,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:15.839Z",
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
                  "startedAt": "2026-09-10T06:01:15.858Z",
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
                  "startedAt": "2026-09-10T06:01:15.896Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:15.838Z",
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
              "startedAt": "2026-09-10T06:01:15.934Z",
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
              "startedAt": "2026-09-10T06:01:15.958Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1246,
      "startedAt": "2026-09-10T06:01:26.576Z",
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
          "duration": 286,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 259,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:26.803Z",
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
              "startedAt": "2026-09-10T06:01:27.074Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:26.803Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 83,
            "column": 37
          }
        },
        {
          "name": "Alice ensures that main section does not become present",
          "outcome": "SUCCESS",
          "duration": 256,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:27.100Z",
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
          "startedAt": "2026-09-10T06:01:27.367Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 110,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:27.631Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 43,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:27.654Z",
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
              "startedAt": "2026-09-10T06:01:27.708Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:27.630Z",
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
          "startedAt": "2026-09-10T06:01:27.750Z",
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
          "startedAt": "2026-09-10T06:01:27.779Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1246,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 286,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 259,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:26.803Z",
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
                  "startedAt": "2026-09-10T06:01:27.074Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:26.803Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that main section does not become present",
              "outcome": "SUCCESS",
              "duration": 256,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:27.100Z",
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
              "startedAt": "2026-09-10T06:01:27.367Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 110,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:27.631Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 43,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:27.654Z",
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
                  "startedAt": "2026-09-10T06:01:27.708Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:27.630Z",
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
              "startedAt": "2026-09-10T06:01:27.750Z",
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
              "startedAt": "2026-09-10T06:01:27.779Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1375,
      "startedAt": "2026-09-10T06:01:44.135Z",
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
          "duration": 337,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 310,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:44.449Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:44.771Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:44.448Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 83,
            "column": 37
          }
        },
        {
          "name": "Alice ensures that main section does not become present",
          "outcome": "SUCCESS",
          "duration": 256,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:44.795Z",
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
          "startedAt": "2026-09-10T06:01:45.062Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 105,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:45.325Z",
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
              "startedAt": "2026-09-10T06:01:45.347Z",
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
              "startedAt": "2026-09-10T06:01:45.396Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:45.324Z",
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
          "startedAt": "2026-09-10T06:01:45.439Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:45.468Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1375,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 337,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 310,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:44.449Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 3,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:44.771Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:44.448Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that main section does not become present",
              "outcome": "SUCCESS",
              "duration": 256,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:44.795Z",
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
              "startedAt": "2026-09-10T06:01:45.062Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 105,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:45.325Z",
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
                  "startedAt": "2026-09-10T06:01:45.347Z",
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
                  "startedAt": "2026-09-10T06:01:45.396Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:45.324Z",
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
              "startedAt": "2026-09-10T06:01:45.439Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:45.468Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 1300,
      "startedAt": "2026-09-10T06:01:16.021Z",
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
          "duration": 495,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 215,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 188,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:16.099Z",
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
                  "startedAt": "2026-09-10T06:01:16.298Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.098Z",
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
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:16.324Z",
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
                  "startedAt": "2026-09-10T06:01:16.358Z",
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
                  "startedAt": "2026-09-10T06:01:16.399Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.324Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 67,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 6,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:16.437Z",
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
                  "startedAt": "2026-09-10T06:01:16.455Z",
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
                  "startedAt": "2026-09-10T06:01:16.476Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.437Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 68,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:16.516Z",
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
                  "startedAt": "2026-09-10T06:01:16.532Z",
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
                  "startedAt": "2026-09-10T06:01:16.552Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.515Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:16.098Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:16.604Z",
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
          "startedAt": "2026-09-10T06:01:16.646Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 254,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 229,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:16.695Z",
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
              "startedAt": "2026-09-10T06:01:16.935Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:16.695Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 297,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:16.971Z",
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
                  "startedAt": "2026-09-10T06:01:17.004Z",
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
                  "startedAt": "2026-09-10T06:01:17.043Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.970Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 69,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:17.091Z",
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
                  "startedAt": "2026-09-10T06:01:17.110Z",
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
                  "startedAt": "2026-09-10T06:01:17.131Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:17.090Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 68,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:17.180Z",
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
                  "startedAt": "2026-09-10T06:01:17.196Z",
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
                  "startedAt": "2026-09-10T06:01:17.216Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:17.179Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:16.960Z",
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
          "startedAt": "2026-09-10T06:01:17.268Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1300,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 495,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 215,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 188,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:16.099Z",
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
                      "startedAt": "2026-09-10T06:01:16.298Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:16.098Z",
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
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:16.324Z",
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
                      "startedAt": "2026-09-10T06:01:16.358Z",
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
                      "startedAt": "2026-09-10T06:01:16.399Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:16.324Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 67,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 6,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:16.437Z",
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
                      "startedAt": "2026-09-10T06:01:16.455Z",
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
                      "startedAt": "2026-09-10T06:01:16.476Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:16.437Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 68,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:16.516Z",
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
                      "startedAt": "2026-09-10T06:01:16.532Z",
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
                      "startedAt": "2026-09-10T06:01:16.552Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:16.515Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.098Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:16.604Z",
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
              "startedAt": "2026-09-10T06:01:16.646Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 254,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 229,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:16.695Z",
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
                  "startedAt": "2026-09-10T06:01:16.935Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.695Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 297,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 100,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:16.971Z",
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
                      "startedAt": "2026-09-10T06:01:17.004Z",
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
                      "startedAt": "2026-09-10T06:01:17.043Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:16.970Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 69,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:17.091Z",
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
                      "startedAt": "2026-09-10T06:01:17.110Z",
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
                      "startedAt": "2026-09-10T06:01:17.131Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:17.090Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 68,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:17.180Z",
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
                      "startedAt": "2026-09-10T06:01:17.196Z",
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
                      "startedAt": "2026-09-10T06:01:17.216Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:17.179Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:16.960Z",
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
              "startedAt": "2026-09-10T06:01:17.268Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@chromium 151.0.7922.34@chromium@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 3072,
      "startedAt": "2026-09-10T06:01:27.850Z",
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
          "duration": 670,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 334,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 306,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:28.167Z",
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
                  "startedAt": "2026-09-10T06:01:28.484Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:28.166Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 132,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:28.511Z",
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
                  "startedAt": "2026-09-10T06:01:28.556Z",
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
                  "startedAt": "2026-09-10T06:01:28.613Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:28.511Z",
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
                  "startedAt": "2026-09-10T06:01:28.655Z",
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
                  "startedAt": "2026-09-10T06:01:28.675Z",
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
                  "startedAt": "2026-09-10T06:01:28.701Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:28.654Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 82,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:28.744Z",
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
                  "startedAt": "2026-09-10T06:01:28.764Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:28.789Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:28.743Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:28.165Z",
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
          "startedAt": "2026-09-10T06:01:28.846Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 39,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:28.898Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 471,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 443,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:28.956Z",
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
              "startedAt": "2026-09-10T06:01:29.410Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:28.955Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 359,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 132,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.448Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 46,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.492Z",
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
                  "startedAt": "2026-09-10T06:01:29.549Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:29.448Z",
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
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.600Z",
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
                  "startedAt": "2026-09-10T06:01:29.623Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.649Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:29.600Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 82,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.703Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.723Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 25,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:29.750Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:29.703Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:29.437Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:29.806Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 3072,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 670,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 334,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 306,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:28.167Z",
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
                      "startedAt": "2026-09-10T06:01:28.484Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:28.166Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 132,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:28.511Z",
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
                      "startedAt": "2026-09-10T06:01:28.556Z",
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
                      "startedAt": "2026-09-10T06:01:28.613Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:28.511Z",
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
                      "startedAt": "2026-09-10T06:01:28.655Z",
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
                      "startedAt": "2026-09-10T06:01:28.675Z",
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
                      "startedAt": "2026-09-10T06:01:28.701Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:28.654Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 82,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:28.744Z",
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
                      "startedAt": "2026-09-10T06:01:28.764Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 26,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:28.789Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:28.743Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:28.165Z",
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
              "startedAt": "2026-09-10T06:01:28.846Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 39,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:28.898Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 471,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 443,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:28.956Z",
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
                  "startedAt": "2026-09-10T06:01:29.410Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:28.955Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 359,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 132,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.448Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 46,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.492Z",
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
                      "startedAt": "2026-09-10T06:01:29.549Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:29.448Z",
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
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.600Z",
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
                      "startedAt": "2026-09-10T06:01:29.623Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.649Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:29.600Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 82,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.703Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.723Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 25,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:29.750Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:29.703Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:29.437Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:29.806Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@firefox 153.0@firefox@Linux 6.17.0-1022-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 2148,
      "startedAt": "2026-09-10T06:01:45.548Z",
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
          "duration": 685,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 298,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 272,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:45.850Z",
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
                  "startedAt": "2026-09-10T06:01:46.133Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:45.849Z",
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
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:46.159Z",
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
                  "startedAt": "2026-09-10T06:01:46.200Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:46.266Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:46.158Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 99,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:46.311Z",
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
                  "startedAt": "2026-09-10T06:01:46.332Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:46.368Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:46.311Z",
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
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:46.422Z",
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
                  "startedAt": "2026-09-10T06:01:46.445Z",
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
                  "startedAt": "2026-09-10T06:01:46.485Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:46.421Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:45.848Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 12,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:46.547Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 35,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-09-10T06:01:46.620Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 526,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 500,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:46.673Z",
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
              "startedAt": "2026-09-10T06:01:47.184Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:46.673Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 412,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 140,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 29,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.219Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 55,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.259Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.325Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:47.219Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.387Z",
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
                  "startedAt": "2026-09-10T06:01:47.413Z",
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
                  "startedAt": "2026-09-10T06:01:47.442Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:47.386Z",
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
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.513Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.535Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:47.567Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:47.512Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-09-10T06:01:47.209Z",
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
          "startedAt": "2026-09-10T06:01:47.632Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 2148,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 685,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 298,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 272,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:45.850Z",
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
                      "startedAt": "2026-09-10T06:01:46.133Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:45.849Z",
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
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:46.159Z",
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
                      "startedAt": "2026-09-10T06:01:46.200Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:46.266Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:46.158Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 99,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 9,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:46.311Z",
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
                      "startedAt": "2026-09-10T06:01:46.332Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:46.368Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:46.311Z",
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
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:46.422Z",
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
                      "startedAt": "2026-09-10T06:01:46.445Z",
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
                      "startedAt": "2026-09-10T06:01:46.485Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:46.421Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:45.848Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:46.547Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-09-10T06:01:46.620Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 526,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 500,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-09-10T06:01:46.673Z",
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
                  "startedAt": "2026-09-10T06:01:47.184Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:46.673Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 412,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 140,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 29,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.219Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 55,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.259Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.325Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:47.219Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.387Z",
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
                      "startedAt": "2026-09-10T06:01:47.413Z",
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
                      "startedAt": "2026-09-10T06:01:47.442Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:47.386Z",
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
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.513Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.535Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-09-10T06:01:47.567Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-09-10T06:01:47.512Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-09-10T06:01:47.209Z",
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
              "startedAt": "2026-09-10T06:01:47.632Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@webkit 26.5@webkit@Linux 6.17.0-1022-azure"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 400,
      "startedAt": "2026-09-10T06:01:17.788Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 400,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 1588,
      "startedAt": "2026-09-10T06:01:31.738Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 1588,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 727,
      "startedAt": "2026-09-10T06:01:48.161Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 727,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 296,
      "startedAt": "2026-09-10T06:01:18.303Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 296,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 522,
      "startedAt": "2026-09-10T06:01:33.717Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 522,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 670,
      "startedAt": "2026-09-10T06:01:49.020Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 670,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 384,
      "startedAt": "2026-09-10T06:01:18.623Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 384,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 588,
      "startedAt": "2026-09-10T06:01:34.260Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 588,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 729,
      "startedAt": "2026-09-10T06:01:49.710Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 729,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 285,
      "startedAt": "2026-09-10T06:01:19.022Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 285,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 528,
      "startedAt": "2026-09-10T06:01:34.870Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 528,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 669,
      "startedAt": "2026-09-10T06:01:50.457Z",
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
          "run": "2590",
          "timestamp": "2026-09-10T06:01:11.062Z",
          "duration": 669,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@webkit"
    }
  ],
  "history": [
    {
      "timestamp": "2026-09-10T06:01:11.062Z",
      "duration": 40064,
      "outcomes": {
        "passed": 36,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2590",
      "slowest": 3072,
      "fastest": 214,
      "average": 946,
      "commit": "3945c43582dc68c47b7fb04730d6bc4c3943155b",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/34443232306",
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
    "nodeVersion": "v24.21.0",
    "os": {
      "name": "linux",
      "version": "6.17.0-1022-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.46.0",
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
      "buildNumber": "2590",
      "branch": "main",
      "commit": "3945c43582dc68c47b7fb04730d6bc4c3943155b",
      "commitMessage": "chore(deps): update dependency @types/node to ^24.13.4 (#800)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/34443232306",
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
