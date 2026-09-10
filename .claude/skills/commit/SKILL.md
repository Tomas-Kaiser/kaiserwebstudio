---
name: commit
description: Suggest a concise git commit message for the current changes in this repo, without committing. Use when the user asks for a commit message/name, or invokes /commit.
---

Look at the current state of the repo to understand what changed since the last commit:

- `git status --short` — what's staged, modified, untracked
- `git diff` and `git diff --staged` — the actual content changes
- `git log --oneline -5` — this repo's existing commit message style, to match it

This project's commit messages are short, imperative, capitalized, single-line summaries with no trailing period and no scope prefixes (e.g. "Add responsive navbar with mobile menu and language switcher", "Broaden marketing copy beyond local small businesses").

Compose ONE commit message that accurately summarizes the change — focus on *what* changed, not implementation narration. Present it in a fenced code block, nothing else needed unless the change is genuinely ambiguous (in which case briefly note the ambiguity).

Do not run `git add`, `git commit`, or stage anything — only suggest the message. The user reviews and commits manually.
