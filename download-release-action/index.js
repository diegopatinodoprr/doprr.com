const core = require('@actions/core');
const { Octokit } = require("@octokit/rest");

const repository = core.getInput('repository');
var owner = core.getInput('owner');
var repo = core.getInput('repo');
var excludes = core.getInput('excludes').trim().split(",");
var repo_token = core.getInput('repo_token')
const octokit = new Octokit()
const { createTokenAuth } = require("@octokit/auth-token");



const auth = createTokenAuth(repo_token);
const authentication = await auth();

async function run() {
    try {
        if (repository) {
            [owner, repo] = repository.split("/");
        }
        var releases = await octokit.repo.listReleases({
            owner: owner,
            repo: repo,
            headers: authentication.headers
        });
        releases = releases.data;
        if (excludes.includes('prerelease')) {
            releases = releases.filter(x => x.prerelease != true);
        }
        if (excludes.includes('draft')) {
            releases = releases.filter(x => x.draft != true);
        }
        if (releases.length) {
            core.setOutput('release', releases[0])
        } else {
            core.setFailed("No valid releases");
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run()