FROM gitpod/workspace-node-lts

ARG DEBIAN_FRONTEND=noninteractive
ARG TZ=UTC
ENV SHELL=/bin/bash

## https://www.gitpod.io/docs/config-docker
USER gitpod

# ######################################################################################################################
# Install Firefox and Microsoft Edge
#   https://github.com/webdriverio/webdriverio/blob/36d8c142c6efd3323199819b86e185acc5a5a800/.gitpod/dev.dockerfile

RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg \
 && sudo install -o root -g root -m 644 microsoft.gpg /etc/apt/trusted.gpg.d/ \
 && sudo sh -c 'echo "deb [arch=amd64] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge-dev.list' \
 && sudo rm microsoft.gpg \
 && sudo apt-get update \
 && sudo apt-get install -y \
        firefox \
        microsoft-edge-dev

# ######################################################################################################################
# Install ChromeDriver
#
#   Chromium and ChromeDriver are now distributed via Snap, which is not available on Gitpod.io
#   Since Google Chrome is already installed in Gitpod Node workspace, all we need is ChromeDriver
#       https://github.com/gitpod-io/workspace-images/blob/e91b47d148d6687703e258a7589b8cba74367a88/dazzle.yaml#L59
#       https://github.com/gitpod-io/workspace-images/blob/e91b47d148d6687703e258a7589b8cba74367a88/chunks/tool-chrome/Dockerfile
#
#   Running: /usr/bin/google-chrome
#   Outputs: Google Chrome 103.0.5060.134
#   Extract the major version
RUN bash -c "export GOOGLE_CHROME_VERSION=$(/usr/bin/google-chrome --version | sed -E 's/[[:alpha:]|(|[:space:]]//g' | awk -F. '{print $1}') \
      && npm install --location=global chromedriver@\$GOOGLE_CHROME_VERSION \
      && export NODE_PATH='$(npm root --location=global):\$NODE_PATH' \
      && node -e 'console.log(\`export CHROMEDRIVER_FILEPATH=\${ require(\"chromedriver\").path}\`)' >> /home/gitpod/.bashrc.d/99-chromedriver"

# ######################################################################################################################
# Install HTTP Server

RUN bash -c "npm i --location=global http-server"

# ######################################################################################################################
# Install Java
#   https://github.com/gitpod-io/workspace-images/blob/e91b47d148d6687703e258a7589b8cba74367a88/chunks/lang-java/Dockerfile

RUN curl -fsSL "https://get.sdkman.io" | bash \
 && bash -c ". /home/gitpod/.sdkman/bin/sdkman-init.sh \
        && sed -i 's/sdkman_selfupdate_enable=true/sdkman_selfupdate_enable=false/g' /home/gitpod/.sdkman/etc/config \
        && sed -i 's/sdkman_selfupdate_feature=true/sdkman_selfupdate_feature=false/g' /home/gitpod/.sdkman/etc/config \
        && sdk install java \
        && sdk flush archives \
        && sdk flush temp \
        && echo 'export SDKMAN_DIR=\"/home/gitpod/.sdkman\"' >> /home/gitpod/.bashrc.d/99-java \
        && echo '[[ -s \"/home/gitpod/.sdkman/bin/sdkman-init.sh\" ]] && source \"/home/gitpod/.sdkman/bin/sdkman-init.sh\"' >> /home/gitpod/.bashrc.d/99-java"
# above, we are adding the sdkman init to .bashrc (executing sdkman-init.sh does that), because one is executed on interactive shells, the other for non-interactive shells (e.g. plugin-host)
