<div>
    <p align="center">
        <img src="/.github/assets/unicorn.png" align="center" width="360" />
    </p>
    <hr>
</div>

> 🦄 Magical commits to add some zest to your life as a developer, by using emojis to signal commit & pull-request intent.

## ✅ The Standard

With this standard we attempt to nail all of the key parts of working `git` (specifically on GitHub). The primary focus is on git commits, cause well thats the foundation but we dive into other parts of the devflow.

This standard consists of four sections:

- Commit Messages - how to format commit messages
- Branching - how to name branches
- Pull Requests - how to format pull request titles & handle merging PRs
- Release Notes - how to format release notes & manage in GitHub

### Commit Messages

A commit message consists of three parts:

- emoji - what emoji to use
- format - the format of the commit message
- message - the content of the message

#### Emoji & Format

| type         | emoji | format                  |
|------------  |-------|-------------------------|
| feature      | 🦄    | `🦄 Feature - <message>` |
| bugfix       | 🐛    | `🐛 Bugfix - <message>`  |
| hotfix       | 🔥    | `🔥 Hotfix - <message>`  |
| chore        | ⚙️     | `⚙️ Chore - <message>`   |
| docs         | 📚    | `📚 Docs - <message>`    |
| dependencies | 📦    | `📦 Dependencies - <message>`    |
| bot          | 🤖    | `🤖 Bot - <message>`     |

#### Message

The commit message content guidelines do not change based on the type of commit, just follow the guidelines below:

- MUST describe intent of the change
- MUST NOT describe what the code does (we can look at the code)
- SHOULD describe the change with format "XYZ" <= Provide example

There is more ^^ need to write down....

### Branching

WIP

### Pull Requests

WIP

### Release Notes

WIP

## 🤨 FAQs (WIP)

### What is this?

A standard for using emojis to signal intent as apart of a commit message.

```shell
🦄 Feature - show an example
```

### What about `gitemoji`?

This standard (and tooling) is built upon the **wonderful** work by [@carloscuesta](https://github.com/carloscuesta). The biggest difference between `gitemoji` and `magical-commits` is that our primary goal is to provide a simple standard for commit messages (`gitemoji` has 70+ emojis in their standard).

### Why emojis?

Lots of reasons but the primary are listed below.

- First off... its fun. Emojis are used everyday by billions of people in their SMS, email, slacks and other forms of communication.
- Emojis are (for the most part) first-class citizens across the web, IDEs, word editors, email clients and more.
- Images are a great way to quickly signal the intent (i.e. ☢️). One character can tell you if its a bug, feature, chore, doc update and more.
- Human communication is more than verbal or written. Imagery has played a key role throughout human history.
- Screen readers can read emojis using the syntax `:gear:` (⚙️). Watch this great [video](https://www.youtube.com/watch?v=PvTicDOkOTA&t=216s) to learn how visually impaired people “see” emojis.

## RFC 2119

We use RFC 2119 when describing our "guidelines" for this standard.

[https://www.ietf.org/rfc/rfc2119.txt](https://www.ietf.org/rfc/rfc2119.txt)
