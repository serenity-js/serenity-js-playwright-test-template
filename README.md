# Serenity/JS Playwright Test Template

[![Build Status](https://github.com/serenity-js/serenity-js-playwright-test-template/actions/workflows/main.yml/badge.svg)](https://github.com/serenity-js/serenity-js-playwright-test-template/actions/workflows/main.yml)

This [template](https://help.github.com/en/articles/creating-a-repository-from-a-template) helps you test
web applications and REST/HTTP APIs using [Serenity/JS](https://serenity-js.org) and the [Playwright Test](https://playwright.dev/) runner,
with a fully configured TypeScript setup.

## Features

- Preconfigured Serenity/JS + Playwright Test + TypeScript setup
- Example web and REST API test scenarios
- Linting and CI-friendly scripts
- Ready-to-use GitHub Codespaces environment using the official [Serenity/JS Docker image](https://serenity-js.org/handbook/integration/docker/) for quick exploration
- Integrated reporting via Serenity BDD and Playwright, with live examples:
    - [Serenity BDD report](https://serenity-js.github.io/serenity-js-playwright-test-template/serenity/)
    - [Playwright Test report](https://serenity-js.github.io/serenity-js-playwright-test-template/playwright/)

## Quick Start

### Explore instantly in GitHub Codespaces

Launch this project in an online development environment:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?ref=main&repo=serenity-js/serenity-js-playwright-test-template)

### Run locally

- Follow the [Serenity/JS installation guide](https://serenity-js.org/handbook/about/installation/)
- [Create a new repository](https://help.github.com/en/articles/creating-a-repository-from-a-template) from this template
- [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) it to your machine
- Install dependencies:
```
npm ci
```
- Run the example tests
```
npm test
```
- View the generated reports:
    - **Serenity BDD**: `./target/site/serenity/index.html`
    - **Playwright Test**: `./playwright-report/index.html`
- Serve the Serenity BDD report locally:
```
npm run start
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Corporate networks

If your environment requires proxy configuration or an internal registry like Artifactory or Nexus, add an [`.npmrc` file](https://docs.npmjs.com/cli/v6/configuring-npm/npmrc) file
with the appropriate configuration to your home directory:

```
proxy=http://user:password@host.mycompany.com:8080/
https-proxy=http://user:password@host.mycompany.com:8080/
strict-ssl=false
registry=https://artifactory.mycompany.com/artifactory/
```

## Execution

The project provides several [NPM scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts) defined in [`package.json`](package.json):

```
npm run lint            # runs code linter
npm run lint:fix        # attempts to automatically fix linting issues
npm run clean           # removes reports from any previous test run
npm test                # executes the example test suite
                        # and generates the report under ./target/site/serenity
npm start               # starts a mini HTTP server and serves the test reports
                        # at http://localhost:8080
```

## Next steps

- Replace the example tests with your own
- Add new tasks, interactions, and assertions using Serenity/JS
- Extend the test suite or integrate it into CI/CD pipelines
- Use the sample reports to understand expected testing and reporting workflows

## Documentation

- [API Reference](https://serenity-js.org/api/)
- [Screenplay Pattern Guide](https://serenity-js.org/handbook/design/screenplay-pattern/)
- [Serenity/JS Project Templates](https://serenity-js.org/handbook/project-templates/)
- [More examples and reference implementations](https://github.com/serenity-js/serenity-js/tree/main/examples)
- [Tutorial: First Web Scenario](https://serenity-js.org/handbook/tutorials/your-first-web-scenario/)
- [Tutorial: First API Scenario](https://serenity-js.org/handbook/tutorials/your-first-api-scenario/)

## Contributing

Contributions of all kinds are welcome! Get started with the [Contributing Guide](https://serenity-js.org/community/contributing/).

## Community

[![Follow Serenity/JS on LinkedIn](https://img.shields.io/badge/LinkedIn-Serenity%2FJS%20-0077B5?logo=linkedin)](https://www.linkedin.com/company/serenity-js)
[![Watch Serenity/JS on YouTube](https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube)](https://www.youtube.com/@serenity-js)
[![Join Serenity/JS Community Chat](https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix)](https://matrix.to/#/#serenity-js:gitter.im)

Connect with other developers using Serenity/JS:

- [Updates on LinkedIn](https://www.linkedin.com/company/serenity-js)
- [Community Chat](https://matrix.to/#/#serenity-js:gitter.im)
- [Discussions Forum](https://github.com/orgs/serenity-js/discussions)
    - Explore the [💡How to... ?](https://github.com/orgs/serenity-js/discussions/categories/how-to) answers to common questions

Follow Serenity/JS to learn about new features, tutorials, and releases!

⭐ Star the main [Serenity/JS repository](https://github.com/serenity-js/serenity-js) to help others discover the framework!

[![GitHub stars](https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge)](https://github.com/serenity-js/serenity-js)

## License

The Serenity/JS code base is licensed under the [Apache-2.0](https://opensource.org/license/apache-2-0) license,
while its documentation and the [Serenity/JS Handbook](https://serenity-js.org/handbook/) are licensed under the [Creative Commons BY-NC-SA 4.0 International](https://creativecommons.org/licenses/by-nc-sa/4.0/).

See the [Serenity/JS License](https://serenity-js.org/legal/license/).

## Support

Support ongoing development through [GitHub Sponsors](https://github.com/sponsors/serenity-js). Sponsors gain access to [Serenity/JS Playbooks](https://github.com/serenity-js/playbooks)
and priority help in the [Discussions Forum](https://github.com/orgs/serenity-js/discussions).

For commercial support or corporate sponsorship, please contact [Jan Molak](https://www.linkedin.com/in/janmolak/).

[![GitHub Sponsors](https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/serenity-js)


