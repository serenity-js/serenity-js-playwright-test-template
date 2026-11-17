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
    "duration": 32254,
    "startedAt": "2026-11-17T05:26:50.387Z",
    "finishedAt": "2026-11-17T05:27:22.641Z",
    "testRunner": "Playwright"
  },
  "scenarios": [
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 158,
      "startedAt": "2026-11-17T05:26:50.387Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 62,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:50.638Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-8b5def080b.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Tue, 17 Nov 2026 05:26:50 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\npragma: no-cache\nvary: Origin, Accept-Encoding\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 3600000\nx-ratelimit-remaining: 3599999\nx-ratelimit-reset: 1790812826\nage: 24081\nnel: {\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}\ncf-cache-status: HIT\nreport-to: {\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=vKseg8ICkwzL0pu7%2F2lsOOKvjlutJTpE40F9RJavvoEiiTie3%2FlxbYF0Y7nIjBbmvzXcYEs6Irp5ZQRdO3zyNrYDoZcgMvGNKoQ7zthYWORtbHc%2Fby25nZzZJxgP2ULepB8EsODA875F59DCckZe\"}]}\nserver: cloudflare\ncf-ray: a5bc52a6c80b3979-IAD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 1,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:50.701Z",
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
          "startedAt": "2026-11-17T05:26:50.703Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 158,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 62,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:50.638Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-8b5def080b.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Tue, 17 Nov 2026 05:26:50 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\npragma: no-cache\nvary: Origin, Accept-Encoding\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 3600000\nx-ratelimit-remaining: 3599999\nx-ratelimit-reset: 1790812826\nage: 24081\nnel: {\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}\ncf-cache-status: HIT\nreport-to: {\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=vKseg8ICkwzL0pu7%2F2lsOOKvjlutJTpE40F9RJavvoEiiTie3%2FlxbYF0Y7nIjBbmvzXcYEs6Irp5ZQRdO3zyNrYDoZcgMvGNKoQ7zthYWORtbHc%2Fby25nZzZJxgP2ULepB8EsODA875F59DCckZe\"}]}\nserver: cloudflare\ncf-ray: a5bc52a6c80b3979-IAD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:50.701Z",
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
              "startedAt": "2026-11-17T05:26:50.703Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 798,
      "startedAt": "2026-11-17T05:26:57.100Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "startedAt": "2026-11-17T05:26:58.147Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-0ff6338292.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Tue, 17 Nov 2026 05:26:58 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\npragma: no-cache\nvary: Origin, Accept-Encoding\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 3600000\nx-ratelimit-remaining: 3599999\nx-ratelimit-reset: 1790812826\nage: 24089\nnel: {\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}\ncf-cache-status: HIT\nreport-to: {\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=OrQi%2BtsWSqFkTy3jR%2BvzDun6lespSf43kfKf2nTaF1Ng6ql%2F%2FT6HnnLeylcbzdQEEJkrcPp80VRyjPB6YmK7WIgdGPlMnRvYR5Ea%2BYXhkuTB7K8%2FB2Hdu%2Fc9hR6KxSiLdqGf%2Blm9E3ztzWa29Y8t\"}]}\nserver: cloudflare\ncf-ray: a5bc52d5ae43c8c5-IAD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:58.211Z",
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
          "startedAt": "2026-11-17T05:26:58.214Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 798,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 63,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:58.147Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-0ff6338292.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Tue, 17 Nov 2026 05:26:58 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\npragma: no-cache\nvary: Origin, Accept-Encoding\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 3600000\nx-ratelimit-remaining: 3599999\nx-ratelimit-reset: 1790812826\nage: 24089\nnel: {\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}\ncf-cache-status: HIT\nreport-to: {\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=OrQi%2BtsWSqFkTy3jR%2BvzDun6lespSf43kfKf2nTaF1Ng6ql%2F%2FT6HnnLeylcbzdQEEJkrcPp80VRyjPB6YmK7WIgdGPlMnRvYR5Ea%2BYXhkuTB7K8%2FB2Hdu%2Fc9hR6KxSiLdqGf%2Blm9E3ztzWa29Y8t\"}]}\nserver: cloudflare\ncf-ray: a5bc52d5ae43c8c5-IAD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:58.211Z",
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
              "startedAt": "2026-11-17T05:26:58.214Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "JSON Placeholder /todos should retrieve a todo item by id",
      "category": "API Testing",
      "outcome": "SUCCESS",
      "duration": 332,
      "startedAt": "2026-11-17T05:27:10.955Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 46,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:11.647Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 32,
            "column": 26
          },
          "artifacts": [
            {
              "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-41c99e95a8.json",
              "type": "screenshot"
            }
          ],
          "restQuery": {
            "method": "GET",
            "url": "https://jsonplaceholder.typicode.com/todos/1",
            "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
            "statusCode": 200,
            "responseHeaders": "date: Tue, 17 Nov 2026 05:27:11 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\npragma: no-cache\nvary: Origin, Accept-Encoding\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 3600000\nx-ratelimit-remaining: 3599999\nx-ratelimit-reset: 1790812826\nage: 24102\nnel: {\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}\ncf-cache-status: HIT\nreport-to: {\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=DJ6%2FQia1ujYRRV4ajFDQrd4xsCHZo2a8ekzbJI8gZrMfJfv%2BVexQbFAUnXKdJFU5ImP2lQVzLEHs%2FT32yuZ37rxJBQKN8bsq8mR8hHLzqVQjmHEgIKWWEJS0VGGOOVwA4XHCtMZVVO%2FxSPApkGzE\"}]}\nserver: cloudflare\ncf-ray: a5bc5329fc713ff8-IAD\nalt-svc: h3=\":443\"; ma=86400",
            "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
          }
        },
        {
          "name": "Alice ensures that the status of the last response does equal 200",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:11.694Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
            "line": 33,
            "column": 28
          }
        },
        {
          "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
          "outcome": "SUCCESS",
          "duration": 0,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:11.697Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 332,
          "activities": [
            {
              "name": "Alice sends a GET request to '/todos/1'",
              "outcome": "SUCCESS",
              "duration": 46,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:11.647Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 32,
                "column": 26
              },
              "artifacts": [
                {
                  "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---jsonplaceholder-typicode-com-todos-1-41c99e95a8.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://jsonplaceholder.typicode.com/todos/1",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "date: Tue, 17 Nov 2026 05:27:11 GMT\ncontent-type: application/json; charset=utf-8\ntransfer-encoding: chunked\nconnection: close\naccess-control-allow-credentials: true\ncache-control: max-age=43200\netag: W/\"53-hfEnumeNh6YirfjyjaujcOPPT+s\"\nexpires: -1\npragma: no-cache\nvary: Origin, Accept-Encoding\nx-content-type-options: nosniff\nx-powered-by: Express\nx-ratelimit-limit: 3600000\nx-ratelimit-remaining: 3599999\nx-ratelimit-reset: 1790812826\nage: 24102\nnel: {\"report_to\":\"cf-nel\",\"success_fraction\":0.0,\"max_age\":604800}\ncf-cache-status: HIT\nreport-to: {\"group\":\"cf-nel\",\"max_age\":604800,\"endpoints\":[{\"url\":\"https://a.nel.cloudflare.com/report/v4?s=DJ6%2FQia1ujYRRV4ajFDQrd4xsCHZo2a8ekzbJI8gZrMfJfv%2BVexQbFAUnXKdJFU5ImP2lQVzLEHs%2FT32yuZ37rxJBQKN8bsq8mR8hHLzqVQjmHEgIKWWEJS0VGGOOVwA4XHCtMZVVO%2FxSPApkGzE\"}]}\nserver: cloudflare\ncf-ray: a5bc5329fc713ff8-IAD\nalt-svc: h3=\":443\"; ma=86400",
                "responseBody": "{\n    \"userId\": 1,\n    \"id\": 1,\n    \"title\": \"delectus aut autem\",\n    \"completed\": false\n}"
              }
            },
            {
              "name": "Alice ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:11.694Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts",
                "line": 33,
                "column": 28
              }
            },
            {
              "name": "Alice ensures that <<the body of the last response>>.id does equal 1",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:11.697Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/api_testing.spec.ts:29@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 527,
      "startedAt": "2026-11-17T05:26:50.749Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 96,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:50.800Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-1c798263e4.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Tue, 17 Nov 2026 05:26:47 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 520bd2e45544fb5e98be9c11438b579a2e9365cf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.063018\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 903e40c3ef634e1984a14a28e59f3df2\natl-request-id: 903e40c3-ef63-4e19-84a1-4a28e59f3df2\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c976690769a33946d6fb7a13fc354b34\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 c5c9b7859fbf8f7c2acd3ac257a72e1a.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: C5PNX9iE5a16mxByYySaZ-P3Yufi9m0SupNqKjwqnC0VUy0aIpWIRA==\nage: 3",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-17T02:39:29.774Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 0,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:50.893Z",
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
              "startedAt": "2026-11-17T05:26:50.894Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:50.799Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 257,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 237,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:50.914Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:51.151Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:50.913Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 84,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:51.172Z",
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
              "startedAt": "2026-11-17T05:26:51.207Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:51.234Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:51.171Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 40,
            "column": 27
          }
        },
        {
          "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 4,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:51.256Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 527,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 96,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:50.800Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-1c798263e4.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Tue, 17 Nov 2026 05:26:47 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 520bd2e45544fb5e98be9c11438b579a2e9365cf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.063018\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 903e40c3ef634e1984a14a28e59f3df2\natl-request-id: 903e40c3-ef63-4e19-84a1-4a28e59f3df2\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c976690769a33946d6fb7a13fc354b34\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 c5c9b7859fbf8f7c2acd3ac257a72e1a.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: C5PNX9iE5a16mxByYySaZ-P3Yufi9m0SupNqKjwqnC0VUy0aIpWIRA==\nage: 3",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-17T02:39:29.774Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 0,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:50.893Z",
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
                  "startedAt": "2026-11-17T05:26:50.894Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:50.799Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 257,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 237,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:50.914Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.151Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:50.913Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 84,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.172Z",
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
                  "startedAt": "2026-11-17T05:26:51.207Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.234Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.171Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            },
            {
              "name": "Wendy ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:51.256Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 948,
      "startedAt": "2026-11-17T05:26:58.271Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "duration": 31,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:58.502Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-805bcb398e.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Tue, 17 Nov 2026 05:26:57 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 520bd2e45544fb5e98be9c11438b579a2e9365cf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.052089\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 5fd49891bd834703b60bb0471e822af7\natl-request-id: 5fd49891-bd83-4703-b60b-b0471e822af7\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c976690769a33946d6fb7a13fc354b34\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 8b49500bf8f9ec11f4fd4939e6ec97be.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: H7E9wPQVMtYEYZyhjCzgDRS-fdEBGGXUyozF0gTZOMb87uAANXgUUg==\nage: 1",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-17T02:39:29.774Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:58.527Z",
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
              "startedAt": "2026-11-17T05:26:58.531Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:58.501Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 527,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 372,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:58.554Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 153,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:58.927Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:58.553Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 112,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 39,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:59.082Z",
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
              "startedAt": "2026-11-17T05:26:59.122Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 26,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:59.167Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:59.081Z",
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
          "startedAt": "2026-11-17T05:26:59.194Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 948,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:58.502Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-805bcb398e.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Tue, 17 Nov 2026 05:26:57 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 520bd2e45544fb5e98be9c11438b579a2e9365cf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.052089\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 5fd49891bd834703b60bb0471e822af7\natl-request-id: 5fd49891-bd83-4703-b60b-b0471e822af7\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c976690769a33946d6fb7a13fc354b34\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 8b49500bf8f9ec11f4fd4939e6ec97be.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: H7E9wPQVMtYEYZyhjCzgDRS-fdEBGGXUyozF0gTZOMb87uAANXgUUg==\nage: 1",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-17T02:39:29.774Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 2,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:58.527Z",
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
                  "startedAt": "2026-11-17T05:26:58.531Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:58.501Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 527,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 372,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:58.554Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                },
                {
                  "name": "Wendy ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 153,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:58.927Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:58.553Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 112,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 39,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:59.082Z",
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
                  "startedAt": "2026-11-17T05:26:59.122Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 26,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:59.167Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:59.081Z",
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
              "startedAt": "2026-11-17T05:26:59.194Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "GitHub Pages should check the state of the system before interacting with the UI",
      "category": "Blended Testing",
      "outcome": "SUCCESS",
      "duration": 648,
      "startedAt": "2026-11-17T05:27:11.740Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 25,
          "children": [
            {
              "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
              "outcome": "SUCCESS",
              "duration": 21,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:11.936Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              },
              "artifacts": [
                {
                  "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-f5c85576a1.json",
                  "type": "screenshot"
                }
              ],
              "restQuery": {
                "method": "GET",
                "url": "https://www.githubstatus.com/api/v2/status.json",
                "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                "statusCode": 200,
                "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Tue, 17 Nov 2026 05:27:07 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 520bd2e45544fb5e98be9c11438b579a2e9365cf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.052260\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 384f718d5a724b10b21e87d5bec4eb18\natl-request-id: 384f718d-5a72-4b10-b21e-87d5bec4eb18\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c976690769a33946d6fb7a13fc354b34\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 8b49500bf8f9ec11f4fd4939e6ec97be.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: z2IdnFh-LQhoKjTLVgIfFFcjfN9xm2ndNuPj5Uo28-HfCNP4W5wzrw==\nage: 4",
                "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-17T02:39:29.774Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
              }
            },
            {
              "name": "Apisitt ensures that the status of the last response does equal 200",
              "outcome": "SUCCESS",
              "duration": 1,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:11.958Z",
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
              "startedAt": "2026-11-17T05:27:11.960Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:11.936Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 34,
            "column": 30
          }
        },
        {
          "name": "Wendy starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 265,
          "children": [
            {
              "name": "Wendy navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 253,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:11.986Z",
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
              "startedAt": "2026-11-17T05:27:12.240Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:11.985Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
            "line": 39,
            "column": 37
          }
        },
        {
          "name": "Wendy records an item called \"Feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 117,
          "children": [
            {
              "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 42,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:12.252Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 42,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:12.295Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:12.338Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:12.251Z",
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
          "startedAt": "2026-11-17T05:27:12.369Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 648,
          "activities": [
            {
              "name": "Apisitt ensures all GitHub systems are operational",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [
                {
                  "name": "Apisitt sends a GET request to 'https://www.githubstatus.com/api/v2/status.json'",
                  "outcome": "SUCCESS",
                  "duration": 21,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:11.936Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  },
                  "artifacts": [
                    {
                      "path": "test-runs/2701/serenity-js-playwright-test-template-1/artifact-get-https---www-githubstatus-com-api-v2-status-json-f5c85576a1.json",
                      "type": "screenshot"
                    }
                  ],
                  "restQuery": {
                    "method": "GET",
                    "url": "https://www.githubstatus.com/api/v2/status.json",
                    "requestHeaders": "Accept: application/json, text/plain, */*\nUser-Agent: axios/1.20.0\nAccept-Encoding: gzip, compress, deflate, br",
                    "statusCode": 200,
                    "responseHeaders": "content-type: application/json; charset=utf-8\ncontent-length: 215\nconnection: close\ndate: Tue, 17 Nov 2026 05:27:07 GMT\nx-download-options: noopen\nx-permitted-cross-domain-policies: none\nreferrer-policy: strict-origin-when-cross-origin\nx-statuspage-version: 520bd2e45544fb5e98be9c11438b579a2e9365cf\nstrict-transport-security: max-age=259200\nx-statuspage-skip-logging: true\naccess-control-allow-origin: *\ncache-control: max-age=10, public, s-maxage=10, stale-while-revalidate=20, stale-if-error=3600\nx-pollinator-metadata-service: status-page-web-pages\nx-runtime: 0.052260\nserver: AtlassianEdge\naccept-ranges: bytes\nx-content-type-options: nosniff\nx-xss-protection: 1; mode=block\natl-traceid: 384f718d5a724b10b21e87d5bec4eb18\natl-request-id: 384f718d-5a72-4b10-b21e-87d5bec4eb18\nreport-to: {\"endpoints\": [{\"url\": \"https://dz8aopenkvv6s.cloudfront.net\"}], \"group\": \"endpoint-1\", \"include_subdomains\": true, \"max_age\": 600}\nnel: {\"failure_fraction\": 0.01, \"include_subdomains\": true, \"max_age\": 600, \"report_to\": \"endpoint-1\"}\netag: W/\"c976690769a33946d6fb7a13fc354b34\"\nvary: Accept,Accept-Encoding\nx-cache: Hit from cloudfront\nvia: 1.1 8b49500bf8f9ec11f4fd4939e6ec97be.cloudfront.net (CloudFront)\nx-amz-cf-pop: IAD12-P5\nalt-svc: h3=\":443\"; ma=86400\nx-amz-cf-id: z2IdnFh-LQhoKjTLVgIfFFcjfN9xm2ndNuPj5Uo28-HfCNP4W5wzrw==\nage: 4",
                    "responseBody": "{\n    \"page\": {\n        \"id\": \"kctbh9vrtdwd\",\n        \"name\": \"GitHub\",\n        \"url\": \"https://www.githubstatus.com\",\n        \"time_zone\": \"Etc/UTC\",\n        \"updated_at\": \"2026-11-17T02:39:29.774Z\"\n    },\n    \"status\": {\n        \"indicator\": \"none\",\n        \"description\": \"All Systems Operational\"\n    }\n}"
                  }
                },
                {
                  "name": "Apisitt ensures that the status of the last response does equal 200",
                  "outcome": "SUCCESS",
                  "duration": 1,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:11.958Z",
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
                  "startedAt": "2026-11-17T05:27:11.960Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 34,
                    "column": 30
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:11.936Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 34,
                "column": 30
              }
            },
            {
              "name": "Wendy starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 265,
              "children": [
                {
                  "name": "Wendy navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 253,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:11.986Z",
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
                  "startedAt": "2026-11-17T05:27:12.240Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 39,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:11.985Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                "line": 39,
                "column": 37
              }
            },
            {
              "name": "Wendy records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 117,
              "children": [
                {
                  "name": "Wendy enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:12.252Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Wendy presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 42,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:12.295Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Wendy waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:12.338Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:12.251Z",
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
              "startedAt": "2026-11-17T05:27:12.369Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/blended_testing.spec.ts:29@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 638,
      "startedAt": "2026-11-17T05:26:51.294Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 290,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 226,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 221,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.312Z",
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
                  "startedAt": "2026-11-17T05:26:51.534Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.312Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 63,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.539Z",
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
                  "startedAt": "2026-11-17T05:26:51.559Z",
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
                  "startedAt": "2026-11-17T05:26:51.583Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.538Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:51.311Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 277,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 216,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 210,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.615Z",
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
                  "startedAt": "2026-11-17T05:26:51.826Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.614Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 60,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.831Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.851Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:51.874Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.830Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:51.613Z",
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
          "startedAt": "2026-11-17T05:26:51.895Z",
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
          "startedAt": "2026-11-17T05:26:51.904Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 638,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 290,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 226,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 221,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:51.312Z",
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
                      "startedAt": "2026-11-17T05:26:51.534Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:51.312Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 63,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:51.539Z",
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
                      "startedAt": "2026-11-17T05:26:51.559Z",
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
                      "startedAt": "2026-11-17T05:26:51.583Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:51.538Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.311Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 277,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 216,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 210,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:51.615Z",
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
                      "startedAt": "2026-11-17T05:26:51.826Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:51.614Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 60,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:51.831Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:51.851Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:51.874Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:51.830Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:51.613Z",
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
              "startedAt": "2026-11-17T05:26:51.895Z",
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
              "startedAt": "2026-11-17T05:26:51.904Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1154,
      "startedAt": "2026-11-17T05:26:59.243Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "duration": 511,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 402,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 395,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:59.264Z",
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
                  "startedAt": "2026-11-17T05:26:59.660Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:59.263Z",
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
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:59.667Z",
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
                  "startedAt": "2026-11-17T05:26:59.702Z",
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
                  "startedAt": "2026-11-17T05:26:59.750Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:59.666Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:59.262Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 525,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 422,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 412,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:59.788Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:00.201Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:59.787Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Bob records an item called \"Walk the dog\"",
              "outcome": "SUCCESS",
              "duration": 101,
              "children": [
                {
                  "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:00.211Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 41,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:00.246Z",
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
                  "startedAt": "2026-11-17T05:27:00.288Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:00.210Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:59.786Z",
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
          "startedAt": "2026-11-17T05:27:00.314Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:00.329Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1154,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 511,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 402,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 395,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:59.264Z",
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
                      "startedAt": "2026-11-17T05:26:59.660Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:59.263Z",
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
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:59.667Z",
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
                      "startedAt": "2026-11-17T05:26:59.702Z",
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
                      "startedAt": "2026-11-17T05:26:59.750Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:59.666Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:59.262Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 525,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 422,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 412,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:59.788Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:00.201Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:59.787Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob records an item called \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 101,
                  "children": [
                    {
                      "name": "Bob enters \"Walk the dog\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:00.211Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 41,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:00.246Z",
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
                      "startedAt": "2026-11-17T05:27:00.288Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:00.210Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:59.786Z",
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
              "startedAt": "2026-11-17T05:27:00.314Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Bob ensures that displayed items does equal [ \"Walk the dog\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:00.329Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App supports multiple actors using separate browsers",
      "category": "Multi-actor scenarios",
      "outcome": "SUCCESS",
      "duration": 1562,
      "startedAt": "2026-11-17T05:27:12.411Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 655,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 531,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 521,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:12.437Z",
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
                  "startedAt": "2026-11-17T05:27:12.960Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 39,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:12.436Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"Feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 122,
              "children": [
                {
                  "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:12.969Z",
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
                  "startedAt": "2026-11-17T05:27:13.013Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:13.058Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:12.968Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:12.435Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 39,
            "column": 41
          }
        },
        {
          "name": "Bob starts with a list containing 1 items",
          "outcome": "SUCCESS",
          "duration": 806,
          "children": [
            {
              "name": "Bob starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 640,
              "children": [
                {
                  "name": "Bob navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 628,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:13.108Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:13.737Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                    "line": 45,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:13.107Z",
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
                  "duration": 53,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:13.749Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 54,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:13.803Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                  "outcome": "SUCCESS",
                  "duration": 51,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:13.861Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:13.748Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:13.106Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
            "line": 45,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:13.921Z",
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
          "startedAt": "2026-11-17T05:27:13.939Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1562,
          "activities": [
            {
              "name": "Alice starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 655,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 531,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 521,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:12.437Z",
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
                      "startedAt": "2026-11-17T05:27:12.960Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 39,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:12.436Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"Feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 122,
                  "children": [
                    {
                      "name": "Alice enters \"Feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 44,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:12.969Z",
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
                      "startedAt": "2026-11-17T05:27:13.013Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"Feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:13.058Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:12.968Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:12.435Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 39,
                "column": 41
              }
            },
            {
              "name": "Bob starts with a list containing 1 items",
              "outcome": "SUCCESS",
              "duration": 806,
              "children": [
                {
                  "name": "Bob starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 640,
                  "children": [
                    {
                      "name": "Bob navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 628,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:13.108Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Bob ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:13.737Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                        "line": 45,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:13.107Z",
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
                      "duration": 53,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:13.749Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bob presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 54,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:13.803Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bob waits until displayed items does contain \"Walk the dog\"",
                      "outcome": "SUCCESS",
                      "duration": 51,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:13.861Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:13.748Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:13.106Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts",
                "line": 45,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"Feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:13.921Z",
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
              "startedAt": "2026-11-17T05:27:13.939Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/multi-actor_scenarios.spec.ts:37@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 381,
      "startedAt": "2026-11-17T05:26:51.948Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 179,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 174,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.031Z",
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
              "startedAt": "2026-11-17T05:26:52.206Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:52.031Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 61,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 19,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.211Z",
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
              "startedAt": "2026-11-17T05:26:52.230Z",
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
              "startedAt": "2026-11-17T05:26:52.254Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:52.210Z",
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
          "startedAt": "2026-11-17T05:26:52.271Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 31,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 4,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.276Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.281Z",
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
              "startedAt": "2026-11-17T05:26:52.289Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:52.275Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 46,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
          "outcome": "SUCCESS",
          "duration": 5,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:52.306Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 48,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that persisted items does equal displayed items",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:52.311Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 381,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 179,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 174,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.031Z",
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
                  "startedAt": "2026-11-17T05:26:52.206Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.031Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.211Z",
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
                  "startedAt": "2026-11-17T05:26:52.230Z",
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
                  "startedAt": "2026-11-17T05:26:52.254Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.210Z",
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
              "startedAt": "2026-11-17T05:26:52.271Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.276Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.281Z",
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
                  "startedAt": "2026-11-17T05:26:52.289Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.275Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\" ]",
              "outcome": "SUCCESS",
              "duration": 5,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.306Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 48,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that persisted items does equal displayed items",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.311Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 652,
      "startedAt": "2026-11-17T05:27:00.416Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "duration": 203,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 197,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:00.670Z",
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
              "startedAt": "2026-11-17T05:27:00.868Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:00.670Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
            "column": 37
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
              "duration": 32,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:00.874Z",
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
              "startedAt": "2026-11-17T05:27:00.907Z",
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
              "startedAt": "2026-11-17T05:27:00.946Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:00.874Z",
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
          "startedAt": "2026-11-17T05:27:00.968Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 49,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:00.976Z",
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
              "startedAt": "2026-11-17T05:27:00.986Z",
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
              "startedAt": "2026-11-17T05:27:01.001Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:00.975Z",
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
          "startedAt": "2026-11-17T05:27:01.024Z",
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
          "startedAt": "2026-11-17T05:27:01.035Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 652,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 203,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 197,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:00.670Z",
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
                  "startedAt": "2026-11-17T05:27:00.868Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:00.670Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
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
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:00.874Z",
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
                  "startedAt": "2026-11-17T05:27:00.907Z",
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
                  "startedAt": "2026-11-17T05:27:00.946Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:00.874Z",
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
              "startedAt": "2026-11-17T05:27:00.968Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 49,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:00.976Z",
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
                  "startedAt": "2026-11-17T05:27:00.986Z",
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
                  "startedAt": "2026-11-17T05:27:01.001Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:00.975Z",
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
              "startedAt": "2026-11-17T05:27:01.024Z",
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
              "startedAt": "2026-11-17T05:27:01.035Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should allow me to add todo items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1289,
      "startedAt": "2026-11-17T05:27:14.014Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 540,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 534,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:14.554Z",
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
              "startedAt": "2026-11-17T05:27:15.089Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:14.553Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 38,
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
              "duration": 36,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.094Z",
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
              "startedAt": "2026-11-17T05:27:15.131Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.193Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 40,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:15.093Z",
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
          "startedAt": "2026-11-17T05:27:15.226Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 42,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"feed the cat\"",
          "outcome": "SUCCESS",
          "duration": 44,
          "children": [
            {
              "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.233Z",
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
              "startedAt": "2026-11-17T05:27:15.241Z",
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
              "startedAt": "2026-11-17T05:27:15.254Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 46,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:15.232Z",
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
          "startedAt": "2026-11-17T05:27:15.276Z",
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
          "startedAt": "2026-11-17T05:27:15.285Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1289,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 540,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 534,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:14.554Z",
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
                  "startedAt": "2026-11-17T05:27:15.089Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 38,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:14.553Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 38,
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
                  "duration": 36,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.094Z",
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
                  "startedAt": "2026-11-17T05:27:15.131Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.193Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 40,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:15.093Z",
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
              "startedAt": "2026-11-17T05:27:15.226Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 42,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 44,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.233Z",
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
                  "startedAt": "2026-11-17T05:27:15.241Z",
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
                  "startedAt": "2026-11-17T05:27:15.254Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 46,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:15.232Z",
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
              "startedAt": "2026-11-17T05:27:15.276Z",
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
              "startedAt": "2026-11-17T05:27:15.285Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:36@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 346,
      "startedAt": "2026-11-17T05:26:52.347Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 203,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 199,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.400Z",
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
              "startedAt": "2026-11-17T05:26:52.599Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:52.400Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 64,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 20,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.604Z",
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
              "startedAt": "2026-11-17T05:26:52.624Z",
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
              "startedAt": "2026-11-17T05:26:52.649Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:52.603Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 63,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
          "outcome": "SUCCESS",
          "duration": 2,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:52.667Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 65,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 3,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:52.672Z",
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
          "startedAt": "2026-11-17T05:26:52.676Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 346,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 203,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 199,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.400Z",
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
                  "startedAt": "2026-11-17T05:26:52.599Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.400Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 64,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.604Z",
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
                  "startedAt": "2026-11-17T05:26:52.624Z",
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
                  "startedAt": "2026-11-17T05:26:52.649Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.603Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that the value of \"What needs to be done?\" input box does equal \"\"",
              "outcome": "SUCCESS",
              "duration": 2,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.667Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 65,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:52.672Z",
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
              "startedAt": "2026-11-17T05:26:52.676Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 580,
      "startedAt": "2026-11-17T05:27:01.092Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "duration": 242,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 233,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:01.300Z",
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
              "startedAt": "2026-11-17T05:27:01.534Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:01.299Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 92,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 32,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:01.541Z",
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
              "startedAt": "2026-11-17T05:27:01.574Z",
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
              "startedAt": "2026-11-17T05:27:01.613Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:01.541Z",
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
          "startedAt": "2026-11-17T05:27:01.633Z",
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
          "startedAt": "2026-11-17T05:27:01.642Z",
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
          "startedAt": "2026-11-17T05:27:01.649Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 580,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 242,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 233,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:01.300Z",
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
                  "startedAt": "2026-11-17T05:27:01.534Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:01.299Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:01.541Z",
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
                  "startedAt": "2026-11-17T05:27:01.574Z",
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
                  "startedAt": "2026-11-17T05:27:01.613Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:01.541Z",
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
              "startedAt": "2026-11-17T05:27:01.633Z",
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
              "startedAt": "2026-11-17T05:27:01.642Z",
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
              "startedAt": "2026-11-17T05:27:01.649Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should clear text input field when an item is added",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 726,
      "startedAt": "2026-11-17T05:27:15.332Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 299,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 288,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.567Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.856Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:15.566Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 61,
            "column": 37
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 151,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 56,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.866Z",
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
              "startedAt": "2026-11-17T05:27:15.923Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 44,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:15.973Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 63,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:15.866Z",
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
          "startedAt": "2026-11-17T05:27:16.018Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 65,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 7,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:16.027Z",
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
          "startedAt": "2026-11-17T05:27:16.037Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 726,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 299,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 288,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.567Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.856Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 61,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:15.566Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 61,
                "column": 37
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 151,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 56,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.866Z",
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
                  "startedAt": "2026-11-17T05:27:15.923Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:15.973Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 63,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:15.866Z",
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
              "startedAt": "2026-11-17T05:27:16.018Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 65,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted item called buy some cheese>>.name does equal \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:16.027Z",
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
              "startedAt": "2026-11-17T05:27:16.037Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:59@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 426,
      "startedAt": "2026-11-17T05:26:52.706Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 340,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 210,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 204,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.767Z",
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
                  "startedAt": "2026-11-17T05:26:52.972Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.767Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 63,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 20,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:52.979Z",
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
                  "startedAt": "2026-11-17T05:26:53.000Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 15,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:53.025Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.978Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 32,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:53.041Z",
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
                  "startedAt": "2026-11-17T05:26:53.047Z",
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
                  "startedAt": "2026-11-17T05:26:53.055Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:53.041Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:53.074Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:53.079Z",
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
                  "startedAt": "2026-11-17T05:26:53.087Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:53.073Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:52.766Z",
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
          "startedAt": "2026-11-17T05:26:53.107Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 3,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:53.113Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 426,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 340,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 210,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 204,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:52.767Z",
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
                      "startedAt": "2026-11-17T05:26:52.972Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:52.767Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 63,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 20,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:52.979Z",
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
                      "startedAt": "2026-11-17T05:26:53.000Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 15,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:53.025Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:52.978Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 32,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:53.041Z",
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
                      "startedAt": "2026-11-17T05:26:53.047Z",
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
                      "startedAt": "2026-11-17T05:26:53.055Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:53.041Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:53.074Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:53.079Z",
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
                      "startedAt": "2026-11-17T05:26:53.087Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:53.073Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:52.766Z",
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
              "startedAt": "2026-11-17T05:26:53.107Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 3,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:53.113Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 686,
      "startedAt": "2026-11-17T05:27:01.691Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "duration": 429,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 222,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 217,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:01.912Z",
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
                  "startedAt": "2026-11-17T05:27:02.130Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:01.912Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:02.135Z",
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
                  "startedAt": "2026-11-17T05:27:02.166Z",
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
                  "startedAt": "2026-11-17T05:27:02.205Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:02.134Z",
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
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:02.228Z",
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
                  "startedAt": "2026-11-17T05:27:02.237Z",
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
                  "startedAt": "2026-11-17T05:27:02.270Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:02.227Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 48,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:02.293Z",
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
                  "startedAt": "2026-11-17T05:27:02.301Z",
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
                  "startedAt": "2026-11-17T05:27:02.317Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:02.292Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:01.911Z",
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
          "startedAt": "2026-11-17T05:27:02.341Z",
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
          "startedAt": "2026-11-17T05:27:02.350Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 686,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 429,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 222,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 217,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:01.912Z",
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
                      "startedAt": "2026-11-17T05:27:02.130Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:01.912Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:02.135Z",
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
                      "startedAt": "2026-11-17T05:27:02.166Z",
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
                      "startedAt": "2026-11-17T05:27:02.205Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:02.134Z",
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
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:02.228Z",
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
                      "startedAt": "2026-11-17T05:27:02.237Z",
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
                      "startedAt": "2026-11-17T05:27:02.270Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:02.227Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:02.293Z",
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
                      "startedAt": "2026-11-17T05:27:02.301Z",
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
                      "startedAt": "2026-11-17T05:27:02.317Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:02.292Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:01.911Z",
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
              "startedAt": "2026-11-17T05:27:02.341Z",
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
              "startedAt": "2026-11-17T05:27:02.350Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should reflect the number of items left in the counter",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 782,
      "startedAt": "2026-11-17T05:27:16.086Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 483,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 240,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 235,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.355Z",
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
                  "startedAt": "2026-11-17T05:27:16.591Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 74,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:16.355Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 108,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.596Z",
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
                  "startedAt": "2026-11-17T05:27:16.626Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.674Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:16.596Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 76,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 16,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.705Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.722Z",
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
                  "startedAt": "2026-11-17T05:27:16.757Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:16.704Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 57,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.781Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:16.793Z",
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
                  "startedAt": "2026-11-17T05:27:16.816Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:16.780Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:16.354Z",
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
          "startedAt": "2026-11-17T05:27:16.838Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 76,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that <<persisted items>>.length does equal 3",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:16.846Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 782,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 483,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 240,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 235,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.355Z",
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
                      "startedAt": "2026-11-17T05:27:16.591Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                        "line": 74,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:16.355Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 108,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.596Z",
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
                      "startedAt": "2026-11-17T05:27:16.626Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.674Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:16.596Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 76,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 16,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.705Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.722Z",
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
                      "startedAt": "2026-11-17T05:27:16.757Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:16.704Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 57,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.781Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:16.793Z",
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
                      "startedAt": "2026-11-17T05:27:16.816Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:16.780Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:16.354Z",
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
              "startedAt": "2026-11-17T05:27:16.838Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 76,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that <<persisted items>>.length does equal 3",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:16.846Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:72@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 817,
      "startedAt": "2026-11-17T05:26:53.149Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 175,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 170,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:53.205Z",
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
              "startedAt": "2026-11-17T05:26:53.376Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:53.205Z",
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
          "startedAt": "2026-11-17T05:26:53.380Z",
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
          "startedAt": "2026-11-17T05:26:53.633Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 48,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 7,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:53.885Z",
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
              "startedAt": "2026-11-17T05:26:53.893Z",
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
              "startedAt": "2026-11-17T05:26:53.916Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:53.885Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 10,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:53.934Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 9,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:53.944Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 817,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 175,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 170,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:53.205Z",
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
                  "startedAt": "2026-11-17T05:26:53.376Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:53.205Z",
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
              "startedAt": "2026-11-17T05:26:53.380Z",
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
              "startedAt": "2026-11-17T05:26:53.633Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 48,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:53.885Z",
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
                  "startedAt": "2026-11-17T05:26:53.893Z",
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
                  "startedAt": "2026-11-17T05:26:53.916Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:53.885Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 10,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:53.934Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:53.944Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1251,
      "startedAt": "2026-11-17T05:27:02.400Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
              "duration": 208,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:02.636Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            },
            {
              "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
              "outcome": "SUCCESS",
              "duration": 12,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:02.845Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:02.635Z",
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
          "startedAt": "2026-11-17T05:27:02.858Z",
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
          "startedAt": "2026-11-17T05:27:03.112Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 238,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 100,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:03.366Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 12,
                "column": 30
              }
            },
            {
              "name": "Alice presses key Enter in \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 119,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:03.466Z",
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
              "startedAt": "2026-11-17T05:27:03.586Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:03.366Z",
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
          "startedAt": "2026-11-17T05:27:03.604Z",
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
          "startedAt": "2026-11-17T05:27:03.620Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1251,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 222,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 208,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:02.636Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:02.845Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:02.635Z",
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
              "startedAt": "2026-11-17T05:27:02.858Z",
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
              "startedAt": "2026-11-17T05:27:03.112Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 238,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 100,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:03.366Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 119,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:03.466Z",
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
                  "startedAt": "2026-11-17T05:27:03.586Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:03.366Z",
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
              "startedAt": "2026-11-17T05:27:03.604Z",
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
              "startedAt": "2026-11-17T05:27:03.620Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should show #main and #footer sections only when list contains items",
      "category": "Recording items",
      "outcome": "SUCCESS",
      "duration": 1144,
      "startedAt": "2026-11-17T05:27:16.898Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
          "duration": 242,
          "children": [
            {
              "name": "Alice navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 237,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:17.148Z",
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
              "startedAt": "2026-11-17T05:27:17.386Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 83,
                "column": 37
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:17.147Z",
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
          "startedAt": "2026-11-17T05:27:17.389Z",
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
          "startedAt": "2026-11-17T05:27:17.643Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 86,
            "column": 24
          }
        },
        {
          "name": "Alice records an item called \"buy some cheese\"",
          "outcome": "SUCCESS",
          "duration": 84,
          "children": [
            {
              "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
              "outcome": "SUCCESS",
              "duration": 9,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:17.896Z",
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
              "startedAt": "2026-11-17T05:27:17.906Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                "line": 13,
                "column": 32
              }
            },
            {
              "name": "Alice waits until displayed items does contain \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 35,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:17.944Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:17.895Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 88,
            "column": 27
          }
        },
        {
          "name": "Alice ensures that main section does become visible",
          "outcome": "SUCCESS",
          "duration": 23,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:17.979Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
            "line": 90,
            "column": 24
          }
        },
        {
          "name": "Alice ensures that footer section does become visible",
          "outcome": "SUCCESS",
          "duration": 24,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:18.003Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1144,
          "activities": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 242,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 237,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:17.148Z",
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
                  "startedAt": "2026-11-17T05:27:17.386Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 83,
                    "column": 37
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:17.147Z",
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
              "startedAt": "2026-11-17T05:27:17.389Z",
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
              "startedAt": "2026-11-17T05:27:17.643Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 86,
                "column": 24
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 84,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 9,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:17.896Z",
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
                  "startedAt": "2026-11-17T05:27:17.906Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 35,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:17.944Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                    "line": 88,
                    "column": 27
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:17.895Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 88,
                "column": 27
              }
            },
            {
              "name": "Alice ensures that main section does become visible",
              "outcome": "SUCCESS",
              "duration": 23,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:17.979Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts",
                "line": 90,
                "column": 24
              }
            },
            {
              "name": "Alice ensures that footer section does become visible",
              "outcome": "SUCCESS",
              "duration": 24,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:18.003Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/recording_items.spec.ts:81@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 815,
      "startedAt": "2026-11-17T05:26:53.984Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "chromium 156.0.8078.4"
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
          "duration": 321,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 195,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 189,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.044Z",
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
                  "startedAt": "2026-11-17T05:26:54.234Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.043Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 18,
                "column": 9
              }
            },
            {
              "name": "Alice records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 62,
              "children": [
                {
                  "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.238Z",
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
                  "startedAt": "2026-11-17T05:26:54.258Z",
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
                  "startedAt": "2026-11-17T05:26:54.282Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.238Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 30,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.301Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.306Z",
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
                  "startedAt": "2026-11-17T05:26:54.313Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.301Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 4,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.332Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.337Z",
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
                  "startedAt": "2026-11-17T05:26:54.345Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.331Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:54.043Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:54.364Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 25,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:54.384Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 207,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 201,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:54.415Z",
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
              "startedAt": "2026-11-17T05:26:54.617Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:54.414Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 152,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 60,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.629Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 23,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.649Z",
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
                  "startedAt": "2026-11-17T05:26:54.673Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.629Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 31,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 5,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.697Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.703Z",
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
                  "startedAt": "2026-11-17T05:26:54.711Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.697Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 36,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.738Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.746Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 19,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.754Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.737Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:26:54.621Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 63,
            "column": 26
          }
        },
        {
          "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 6,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:26:54.773Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 815,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 321,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 195,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 189,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.044Z",
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
                      "startedAt": "2026-11-17T05:26:54.234Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.043Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 62,
                  "children": [
                    {
                      "name": "Alice enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.238Z",
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
                      "startedAt": "2026-11-17T05:26:54.258Z",
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
                      "startedAt": "2026-11-17T05:26:54.282Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.238Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.301Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.306Z",
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
                      "startedAt": "2026-11-17T05:26:54.313Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.301Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 33,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 4,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.332Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Alice presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.337Z",
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
                      "startedAt": "2026-11-17T05:26:54.345Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.331Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.043Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:54.364Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 25,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:54.384Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 207,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 201,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:26:54.415Z",
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
                  "startedAt": "2026-11-17T05:26:54.617Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.414Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 152,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 60,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.629Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 23,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.649Z",
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
                      "startedAt": "2026-11-17T05:26:54.673Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.629Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 5,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.697Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.703Z",
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
                      "startedAt": "2026-11-17T05:26:54.711Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.697Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 36,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.738Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.746Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 19,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:26:54.754Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:26:54.737Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:26:54.621Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 26
              }
            },
            {
              "name": "Bobby ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 6,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:26:54.773Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@chromium 156.0.8078.4@chromium@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 2117,
      "startedAt": "2026-11-17T05:27:03.672Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "firefox 157.0"
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
          "duration": 412,
          "children": [
            {
              "name": "Alice starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 226,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 219,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:03.892Z",
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
                  "startedAt": "2026-11-17T05:27:04.112Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:03.892Z",
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
                  "duration": 32,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.119Z",
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
                  "startedAt": "2026-11-17T05:27:04.152Z",
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
                  "startedAt": "2026-11-17T05:27:04.190Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.119Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 44,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.211Z",
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
                  "startedAt": "2026-11-17T05:27:04.220Z",
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
                  "startedAt": "2026-11-17T05:27:04.233Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.211Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 48,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 8,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.256Z",
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
                  "startedAt": "2026-11-17T05:27:04.265Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.279Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.255Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:03.891Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 11,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:04.303Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 33,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:04.334Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 418,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 412,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:04.374Z",
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
              "startedAt": "2026-11-17T05:27:04.786Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:04.373Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 217,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 92,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 31,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.801Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 37,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.833Z",
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
                  "startedAt": "2026-11-17T05:27:04.871Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.800Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 49,
              "children": [
                {
                  "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.900Z",
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
                  "startedAt": "2026-11-17T05:27:04.910Z",
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
                  "startedAt": "2026-11-17T05:27:04.925Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.899Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 50,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 11,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.959Z",
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
                  "startedAt": "2026-11-17T05:27:04.971Z",
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
                  "startedAt": "2026-11-17T05:27:04.984Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.959Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:04.792Z",
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
          "startedAt": "2026-11-17T05:27:05.010Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 2117,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 412,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 226,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 219,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:03.892Z",
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
                      "startedAt": "2026-11-17T05:27:04.112Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:03.892Z",
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
                      "duration": 32,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.119Z",
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
                      "startedAt": "2026-11-17T05:27:04.152Z",
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
                      "startedAt": "2026-11-17T05:27:04.190Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:04.119Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 44,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.211Z",
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
                      "startedAt": "2026-11-17T05:27:04.220Z",
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
                      "startedAt": "2026-11-17T05:27:04.233Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:04.211Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 8,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.256Z",
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
                      "startedAt": "2026-11-17T05:27:04.265Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.279Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:04.255Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:03.891Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 11,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:04.303Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 33,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:04.334Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 418,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 412,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:04.374Z",
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
                  "startedAt": "2026-11-17T05:27:04.786Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.373Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 217,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 92,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 31,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.801Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 37,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.833Z",
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
                      "startedAt": "2026-11-17T05:27:04.871Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:04.800Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [
                    {
                      "name": "Bobby enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.900Z",
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
                      "startedAt": "2026-11-17T05:27:04.910Z",
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
                      "startedAt": "2026-11-17T05:27:04.925Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:04.899Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 50,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 11,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:04.959Z",
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
                      "startedAt": "2026-11-17T05:27:04.971Z",
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
                      "startedAt": "2026-11-17T05:27:04.984Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:04.959Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:04.792Z",
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
              "startedAt": "2026-11-17T05:27:05.010Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@firefox 157.0@firefox@Linux 7.0.0-1019-azure"
    },
    {
      "name": "Todo List App should allow me to share notes across actors and browsers",
      "category": "Using notes",
      "outcome": "SUCCESS",
      "duration": 1595,
      "startedAt": "2026-11-17T05:27:18.068Z",
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
          "name": "Linux 7.0.0-1019-azure"
        },
        {
          "type": "browser",
          "name": "webkit 27.2"
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
              "duration": 264,
              "children": [
                {
                  "name": "Alice navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 260,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.280Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 18,
                    "column": 9
                  }
                },
                {
                  "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                  "outcome": "SUCCESS",
                  "duration": 3,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.541Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 47,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:18.280Z",
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
                  "duration": 28,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.545Z",
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
                  "startedAt": "2026-11-17T05:27:18.574Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.618Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:18.545Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"feed the cat\"",
              "outcome": "SUCCESS",
              "duration": 62,
              "children": [
                {
                  "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 12,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.650Z",
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
                  "startedAt": "2026-11-17T05:27:18.663Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Alice waits until displayed items does contain \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 30,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.681Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:18.649Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            },
            {
              "name": "Alice records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 61,
              "children": [
                {
                  "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 10,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.712Z",
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
                  "startedAt": "2026-11-17T05:27:18.723Z",
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
                  "startedAt": "2026-11-17T05:27:18.747Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:18.712Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                "line": 19,
                "column": 18
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:18.279Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 47,
            "column": 41
          }
        },
        {
          "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
          "outcome": "SUCCESS",
          "duration": 13,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:18.774Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 51,
            "column": 24
          }
        },
        {
          "name": "Alice takes notes: items",
          "outcome": "SUCCESS",
          "duration": 50,
          "children": [],
          "type": "Interaction",
          "startedAt": "2026-11-17T05:27:18.812Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 53,
            "column": 38
          }
        },
        {
          "name": "Bobby starts with an empty todo list",
          "outcome": "SUCCESS",
          "duration": 469,
          "children": [
            {
              "name": "Bobby navigates to \"/\"",
              "outcome": "SUCCESS",
              "duration": 463,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:18.873Z",
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
              "startedAt": "2026-11-17T05:27:19.337Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:18.872Z",
          "location": {
            "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
            "line": 60,
            "column": 41
          }
        },
        {
          "name": "Bobby iterates over a note of items",
          "outcome": "SUCCESS",
          "duration": 272,
          "children": [
            {
              "name": "Bobby records an item called \"buy some cheese\"",
              "outcome": "SUCCESS",
              "duration": 124,
              "children": [
                {
                  "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 34,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.351Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 48,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.385Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 40,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.434Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:19.351Z",
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
                  "duration": 22,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.488Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.511Z",
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
                  "startedAt": "2026-11-17T05:27:19.525Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:19.487Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            },
            {
              "name": "Bobby records an item called \"book a doctors appointment\"",
              "outcome": "SUCCESS",
              "duration": 49,
              "children": [
                {
                  "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 7,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.565Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 12,
                    "column": 30
                  }
                },
                {
                  "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                  "outcome": "SUCCESS",
                  "duration": 14,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.574Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                    "line": 13,
                    "column": 32
                  }
                },
                {
                  "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 24,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:19.589Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:19.564Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 63,
                "column": 80
              }
            }
          ],
          "type": "Task",
          "startedAt": "2026-11-17T05:27:19.341Z",
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
          "startedAt": "2026-11-17T05:27:19.613Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1595,
          "activities": [
            {
              "name": "Alice starts with a list containing 3 items",
              "outcome": "SUCCESS",
              "duration": 495,
              "children": [
                {
                  "name": "Alice starts with an empty todo list",
                  "outcome": "SUCCESS",
                  "duration": 264,
                  "children": [
                    {
                      "name": "Alice navigates to \"/\"",
                      "outcome": "SUCCESS",
                      "duration": 260,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.280Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 18,
                        "column": 9
                      }
                    },
                    {
                      "name": "Alice ensures that website title does equal \"Serenity/JS TodoApp\"",
                      "outcome": "SUCCESS",
                      "duration": 3,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.541Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 47,
                        "column": 41
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:18.280Z",
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
                      "duration": 28,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.545Z",
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
                      "startedAt": "2026-11-17T05:27:18.574Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.618Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:18.545Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"feed the cat\"",
                  "outcome": "SUCCESS",
                  "duration": 62,
                  "children": [
                    {
                      "name": "Alice enters \"feed the cat\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 12,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.650Z",
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
                      "startedAt": "2026-11-17T05:27:18.663Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Alice waits until displayed items does contain \"feed the cat\"",
                      "outcome": "SUCCESS",
                      "duration": 30,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.681Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:18.649Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                },
                {
                  "name": "Alice records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 61,
                  "children": [
                    {
                      "name": "Alice enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 10,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:18.712Z",
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
                      "startedAt": "2026-11-17T05:27:18.723Z",
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
                      "startedAt": "2026-11-17T05:27:18.747Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                        "line": 19,
                        "column": 18
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:18.712Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoApp/tasks.ts",
                    "line": 19,
                    "column": 18
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:18.279Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 47,
                "column": 41
              }
            },
            {
              "name": "Alice ensures that displayed items does equal [ \"buy some cheese\", \"feed the cat\", \"book a doctors appointment\" ]",
              "outcome": "SUCCESS",
              "duration": 13,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:18.774Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 51,
                "column": 24
              }
            },
            {
              "name": "Alice takes notes: items",
              "outcome": "SUCCESS",
              "duration": 50,
              "children": [],
              "type": "Interaction",
              "startedAt": "2026-11-17T05:27:18.812Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 53,
                "column": 38
              }
            },
            {
              "name": "Bobby starts with an empty todo list",
              "outcome": "SUCCESS",
              "duration": 469,
              "children": [
                {
                  "name": "Bobby navigates to \"/\"",
                  "outcome": "SUCCESS",
                  "duration": 463,
                  "children": [],
                  "type": "Interaction",
                  "startedAt": "2026-11-17T05:27:18.873Z",
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
                  "startedAt": "2026-11-17T05:27:19.337Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 60,
                    "column": 41
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:18.872Z",
              "location": {
                "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                "line": 60,
                "column": 41
              }
            },
            {
              "name": "Bobby iterates over a note of items",
              "outcome": "SUCCESS",
              "duration": 272,
              "children": [
                {
                  "name": "Bobby records an item called \"buy some cheese\"",
                  "outcome": "SUCCESS",
                  "duration": 124,
                  "children": [
                    {
                      "name": "Bobby enters \"buy some cheese\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 34,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.351Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 48,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.385Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"buy some cheese\"",
                      "outcome": "SUCCESS",
                      "duration": 40,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.434Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:19.351Z",
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
                      "duration": 22,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.488Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.511Z",
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
                      "startedAt": "2026-11-17T05:27:19.525Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:19.487Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                },
                {
                  "name": "Bobby records an item called \"book a doctors appointment\"",
                  "outcome": "SUCCESS",
                  "duration": 49,
                  "children": [
                    {
                      "name": "Bobby enters \"book a doctors appointment\" into \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 7,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.565Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 12,
                        "column": 30
                      }
                    },
                    {
                      "name": "Bobby presses key Enter in \"What needs to be done?\" input box",
                      "outcome": "SUCCESS",
                      "duration": 14,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.574Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/todo-list-app/TodoItem/tasks.ts",
                        "line": 13,
                        "column": 32
                      }
                    },
                    {
                      "name": "Bobby waits until displayed items does contain \"book a doctors appointment\"",
                      "outcome": "SUCCESS",
                      "duration": 24,
                      "children": [],
                      "type": "Interaction",
                      "startedAt": "2026-11-17T05:27:19.589Z",
                      "location": {
                        "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                        "line": 63,
                        "column": 80
                      }
                    }
                  ],
                  "type": "Task",
                  "startedAt": "2026-11-17T05:27:19.564Z",
                  "location": {
                    "path": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts",
                    "line": 63,
                    "column": 80
                  }
                }
              ],
              "type": "Task",
              "startedAt": "2026-11-17T05:27:19.341Z",
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
              "startedAt": "2026-11-17T05:27:19.613Z",
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
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/using_notes.spec.ts:44@serenity-js-playwright-test-template@webkit 27.2@webkit@Linux 7.0.0-1019-azure"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 345,
      "startedAt": "2026-11-17T05:26:55.194Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 345,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 1669,
      "startedAt": "2026-11-17T05:27:06.407Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 1669,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should allow me to add todo items",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 646,
      "startedAt": "2026-11-17T05:27:20.080Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 646,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:16@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 270,
      "startedAt": "2026-11-17T05:26:55.635Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 270,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 530,
      "startedAt": "2026-11-17T05:27:08.425Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 530,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should clear text input field when an item is added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 582,
      "startedAt": "2026-11-17T05:27:20.847Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 582,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:39@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 325,
      "startedAt": "2026-11-17T05:26:55.920Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 325,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 569,
      "startedAt": "2026-11-17T05:27:08.974Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 569,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should reflect the number of items left in the counter",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 634,
      "startedAt": "2026-11-17T05:27:21.449Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 634,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:49@serenity-js-playwright-test-template@webkit"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 273,
      "startedAt": "2026-11-17T05:26:56.257Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 273,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@chromium"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 511,
      "startedAt": "2026-11-17T05:27:09.565Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 511,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@firefox"
    },
    {
      "name": "New Todo should show #main and #footer when items added",
      "category": "Vanilla Playwright Test",
      "outcome": "SUCCESS",
      "duration": 542,
      "startedAt": "2026-11-17T05:27:22.099Z",
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
          "run": "2701",
          "timestamp": "2026-11-17T05:26:50.387Z",
          "duration": 542,
          "activities": []
        }
      ],
      "id": "/__w/serenity-js-playwright-test-template/serenity-js-playwright-test-template/spec/vanilla_playwright_test.spec.ts:63@serenity-js-playwright-test-template@webkit"
    }
  ],
  "history": [
    {
      "timestamp": "2026-11-17T05:26:50.387Z",
      "duration": 32254,
      "outcomes": {
        "passed": 36,
        "failed": 0,
        "pending": 0,
        "skipped": 0,
        "compromised": 0,
        "error": 0
      },
      "label": "2701",
      "slowest": 2117,
      "fastest": 158,
      "average": 757,
      "commit": "86467c451ed3e71c4f72ddf6f1d4a64be88e7c02",
      "branch": "main",
      "ciJobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/44024048168",
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
      "name": "Linux 7.0.0-1019-azure",
      "scenarioCount": 24,
      "passed": 24,
      "failed": 0,
      "skipped": 0
    },
    {
      "type": "browser",
      "name": "chromium 156.0.8078.4",
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
      "name": "firefox 157.0",
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
      "name": "webkit 27.2",
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
    "nodeVersion": "v24.22.3",
    "os": {
      "name": "linux",
      "version": "7.0.0-1019-azure",
      "arch": "x64"
    },
    "serenityVersion": "3.49.0",
    "testRunner": {
      "name": "Playwright",
      "version": "1.64.1"
    },
    "browsers": [
      {
        "name": "chromium",
        "version": "156.0.8078.4"
      },
      {
        "name": "firefox",
        "version": "157.0"
      },
      {
        "name": "webkit",
        "version": "27.2"
      }
    ],
    "ci": {
      "provider": "GitHub Actions",
      "buildNumber": "2701",
      "branch": "main",
      "commit": "86467c451ed3e71c4f72ddf6f1d4a64be88e7c02",
      "commitMessage": "chore(deps): update dependency typescript-eslint to ^8.73.0 (#827)",
      "commitAuthor": "renovate[bot]",
      "jobUrl": "https://github.com/serenity-js/serenity-js-playwright-test-template/actions/runs/44024048168",
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
