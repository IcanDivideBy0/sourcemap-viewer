# Install

```sh
git clone git@github.com:IcanDivideBy0/sourcemap-viewer.git
cd sourcemap-viewer
npm i -g .
```

# Usage

```
sourcemap-viewer https://www.example.com/js/main.4047d834.js:1:285842
```

outputs:

```json
{ "source": "path/to/original/file.js",
  "line": 93,
  "column": 10,
  "name": "myFunction" }
```
