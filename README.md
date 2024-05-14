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
## update this action
after updating the index.js in the root directory, run `ncc build index.js --license licenses.txt`
