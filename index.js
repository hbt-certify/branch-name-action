const core = require('@actions/core');

try {
    core.exportVariable('BRANCH_NAME', process.env.GITHUB_REF.split('/').slice(2).join('/'));
} catch (error) {
    core.setFailed(error.message);
}
