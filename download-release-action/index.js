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


async function run() {

    try {
        if (repository) {
            [owner, repo] = repository.split("/");
        }
        var authentication = await auth();
        var releases = await octokit.repos.listReleases({
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
            var releaseObj = releases[0]
            core.setOutput('name', releaseObj.name)
            core.setOutput('tarball_url', releaseObj.releaseObj)
            core.setOutput('zipball_url', releaseObj.zipball_url)



        } else {
            core.setFailed("No valid releases");
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run()