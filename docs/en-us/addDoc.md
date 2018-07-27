## Add docs

Once the document is written, it needs to be added to the page.

### Where

According to the language version of the document, put `zh-cn` or `en-us` in the `docs` directory, which can be one-level or multi-level directories.

### Menu configuration

After the document is placed in the directory of the corresponding language, it needs to be configured in `site_config/docs.js`. The `link` field is used to configure the access path in the format of `/docs/path-to-the-md`. Note that this path does not include the language path (`zh-cn` or `en-us`).

For example, if a document is stored in `root_directory/docs/en-us/demo/xxx.md`, the configuration value of the `link` field is `/docs/demo/xxx.md`.