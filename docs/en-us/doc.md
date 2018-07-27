## Document writing

### Metadata

The markdown file supports custom metadata at the top of the document. The data between the top `---` (at least three `-`) is considered to be metadata, and one key occupies one line. After parsing the data, it will be stored in the `md_json` folder. The blog's document corresponds to the `blog.json` file. The document under docs corresponds to the `docs.json` file, where `filename` and `__html` are reserved fields. Do not use them.

```
---
key1: hello
key2: world
---
```

### Path

When writing a markdown document, it is inevitable that mutual references between documents are required. The relative path is written more easily than the absolute path, and the reference between the documents in the site is more convenient.

When you need to reference other documents, the reference path can be referenced by the relative file path in the project directory.

Similarly, when you need to reference an image resource within a project, the reference path is also a relative file path. It will eventually be processed into the correct absolute path.