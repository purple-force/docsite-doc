## Command line

The main commands of `docsite` are only three, mainly as follows:

### `docsite init`

Executing this command in the project root directory will initialize a site development template and install related dependencies in the directory.

### `docsite start`

Executing this command will start a development server locally with the port number `8080`. This page will also be automatically opened in the browser. During the development, when the source code is modified, including the markdown document, it will be automatically compiled. After refreshing the browser, you can see the updated result.。

### `docsite build`

After the local development is completed, run this command to compile and build the source code and markdown document to generate the build file.

### Others

Execute `docsite -h` for more commands