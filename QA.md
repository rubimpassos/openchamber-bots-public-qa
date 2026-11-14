# Synthetic bot QA

This public repository contains disposable synthetic fixtures only. Never copy product source, private tickets, service conversations, credentials, or logs into it.

Run `npm test` with Node.js 24. No dependency installation is needed.

The lower-bound defect in `src/clamp.js` is intentional. A bot QA run should add and commit a failing regression for `clamp(-5, 0, 10) === 0`, then fix and commit the implementation separately.

The `qa-tests` pull-request check remains pending for 90 seconds after tests pass so the bot can request auto-merge while a required check is pending. Main-branch checks have no delay. The test repository must require this check, enforce it for administrators, and have auto-merge enabled.

GitHub App installation must be restricted to this test repository. No webhook listener is required by OpenChamber Bots.
