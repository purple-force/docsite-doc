## Add blog

### Where

According to the language version of the document, put `zh-cn` or `en-us` in the `blog` directory, which can be one-level or multi-level directories.

### Configuration of Blog list page

After the document is placed in the directory of the corresponding language, it needs to be configured in `site_config/blog.js`. The `link` field is used to configure the access path in the format of `/blog/path-to-the-md`. Note that this path does not include the language path (`zh-cn` or `en-us`). .

For example, if a blog is stored in `root_directory/blog/en-us/demo/xxx.md`, then the configuration value of the `link` field is `/blog/demo/xxx.md`.
