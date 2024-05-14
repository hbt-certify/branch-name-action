# branch name action

This action takes the `github_ref` and splits the branch name off. Only works if the branch name does not contain slashes (/)

## Example usage

```yaml
name: Test Merge Request
on:
  workflow_dispatch:
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: hbt-certify/branch-name-action@v1
      - run: echo $BRANCH_NAME
```

## modify this action
Make sure you have ncc installed `npm i -g @vercel/ncc`. Then add your code to the _index.js_ file in the root directory(!).
After that run `ncc build index.js --license licenses.txt` to compile your code to _dist/_.

If you want to update the version number, update it in the _package.json_ and create a new tag with the version number
using `git tag -a -m "released version 1 of branch name action" v1` and then `git push --follow-tags`.
