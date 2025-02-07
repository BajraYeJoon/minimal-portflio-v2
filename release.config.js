module.exports = {
  branches: ['master'], // Adjust branch if needed
  plugins: [
    '@semantic-release/commit-analyzer', // Analyze commits to determine version bump
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'package-lock.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
