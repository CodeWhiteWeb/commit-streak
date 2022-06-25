const { Octokit } = require('@octokit/rest')
const debug = require('debug')('commit-streak')

module.exports = async function (options = {}) {
  const { owner, repo, branch = 'main', auth } = options
  const ref = `heads/${branch}`

  if (options.debug) {
    debug.enabled = true
  }

  const octokit = new Octokit({ auth, log: options.debug ? console : {} })

  debug('1. Get the last submitted SHA')
  const headRef = await octokit.git.getRef({ owner, repo, ref })

  debug('2. Get the details of the last submission')
  const latestCommit = await octokit.rest.git.getCommit({
    owner,
    repo,
    commit_sha: headRef.data.object.sha,
  })

  debug('3. Newly built commit')
  const commit = await octokit.rest.git.createCommit({
    owner: owner,
    repo: repo,
    message: 'Commit of the day :D ~ CodeWhiteWeb',
    tree: latestCommit.data.tree.sha,
    parents: [headRef.data.object.sha],
  })

  debug('4. 更新 ref')
  await octokit.git.updateRef({
    owner,
    repo,
    ref,
    sha: commit.data.sha,
  })
}
