FROM mcr.microsoft.com/playwright:v1.56.1-noble

ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=UTC

ENV SHELL=/bin/bash
ENV PATH="/opt/google/chrome:${NPM_GLOBAL}/bin:${PATH}"

RUN \
    # Install Firefox ESR
    apt-get -y update &&  \
    apt-get -y install default-jre firefox-esr && \
    # Install Chrome
    cd /tmp && \
    curl -O https://dl.google.com/linux/direct/google-chrome-stable_current_$(dpkg --print-architecture).deb && \
    apt-get --no-install-recommends install -y ./google-chrome-stable_current_$(dpkg --print-architecture).deb && \
    rm -rf ./google-chrome-stable_current_$(dpkg --print-architecture).deb && \
    cd - && \
    # Update sources \
    curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
    install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ && \
    sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list' && \
    rm microsoft.gpg && \
    apt-get update && \
    apt-get install -y microsoft-edge-stable && \
    npm i -g http-server && \
    npm cache clean --force > /dev/null 2>&1 && \
    apt-get clean && \
    rm -rf /var/lib/api/lists/*

COPY welcome-message.txt /usr/local/etc/vscode-dev-containers/first-run-notice.txt
