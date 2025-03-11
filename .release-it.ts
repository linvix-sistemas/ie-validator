import type { Config } from "release-it";

export default {
    git: {
        tagName: "v${version}",
        commitMessage: "release ${version}",
    },
    npm: {
        publish: false,
    },
    github: {
        release: true,
    },
    plugins: {
        "@release-it/conventional-changelog": {
            infile: "CHANGELOG.md",
            preset: {
                name: "conventionalcommits",
                types: [
                    { type: "new", section: "News" },
                    { type: "feat", section: "Features" },
                    { type: "fix", section: "Bug Fixes" },
                    { type: "chore", hidden: true },
                    { type: "docs", hidden: true },
                    { type: "style", hidden: true },
                    { type: "refactor", hidden: true },
                    { type: "perf", hidden: true },
                    { type: "test", hidden: true },
                ],
            },
        },
    },
} satisfies Config;
