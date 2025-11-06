FROM mcr.microsoft.com/playwright:v1.56.1-noble

ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=UTC

# Add user args (defaults can be overridden via devcontainer.json build.args)
ARG USERNAME=serenity-js
ARG USER_UID=1000
ARG USER_GID=1000

ENV SHELL=/bin/bash
ENV PATH="/opt/google/chrome:${PATH}"
ENV HOME=/home/${USERNAME}

RUN \
    # Install Java, chrome, edge etc.
    apt-get -y update &&  \
    apt-get -y install default-jre && \
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
    rm -rf /var/lib/apt/lists/*

# Create a non-root user to run the workspace (more secure than using root)
RUN set -eux; \
    # create group (if it doesn't already exist) and user with specified uid/gid
    if ! getent group ${USER_GID} >/dev/null 2>&1; then \
      groupadd --gid ${USER_GID} ${USERNAME}; \
    fi; \
    if ! id -u ${USERNAME} >/dev/null 2>&1; then \
      useradd -m -s /bin/bash -u ${USER_UID} -g ${USER_GID} ${USERNAME}; \
    fi; \
    # Ensure /workspaces exists and is owned by the non-root user so postCreateCommand can write
    mkdir -p /workspaces; \
    chown -R ${USERNAME}:${USERNAME} /workspaces /home/${USERNAME}

# Copy welcome message for Codespaces/Dev Containers
COPY welcome-message.txt /usr/local/etc/vscode-dev-containers/first-run-notice.txt

# Switch to the non-root user for the running container
USER ${USERNAME}
WORKDIR /workspace
