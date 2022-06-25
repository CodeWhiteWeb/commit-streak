# commit-Streak

[![Build Status](https://github.com/CodeWhiteWeb/commit-streak/workflows/ci/badge.svg?branch=main)](https://github.com/CodeWhiteWeb/commit-streak/actions)

Automatically updates Head for commit streaks. 

GITHUB COMMIT STREAK HACK!!!

> Auto Commit everyday.

## Install

```shell
npm i commit-streak
```

## use

```js
const commit = reques ('commit-streak')

const owner = 'codewhiteweb'
const repo = 'Chatbot-discord-js'
const auth = 'Fill in Person Token here'

commit ({
  owner,
  repo,
  auth,
  debug: true, // Open the debug mode
})
```

## certification

Parameter `auth` is used for certification.

Enter the [Personal Access Tokens] (https://github.com/settings/tokens) page and click the "General New Token" button. This step will prompt you to enter the password and then enter the new page.

Check REPO/PUBLIC_REPO and click the "Generate Token" button below.

Note: The token will only be displayed once after generating, so you must copy the token and refresh the page. If you forget to copy the Token, you can rewrite the new token.

## License

[Commit-streak](https://github.com/codewhiteWeb/commit-streak) is released under the mit license.
