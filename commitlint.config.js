const typeEmojis = {
  feat: '✨', // Sparkles for new features
  fix: '🐛', // Bug for bug fixes
  docs: '📚', // Books for documentation
  style: '💄', // Lipstick for style changes
  refactor: '♻️', // Recycle for code refactoring
  perf: '⚡️', // Lightning for performance improvements
  test: '🧪', // Test tube for tests
  chore: '🔧', // Wrench for maintenance
  ci: '👷', // Construction worker for CI/CD
  revert: '⏪', // Rewind for reverts
};
const addEmoji = (message) => {
  const [type, ...rest] = message.split(':');
  const emoji = typeEmojis[type] || '💡';
  return `${type}: ${emoji} ${rest.join(':')}`.trim();
};
export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        'emoji-prefix': ({ raw }) => {
          if (!raw) return [true];
          const message = addEmoji(raw);
          process.stdout.write(message); // This will be used by husky
          return [true];
        },
      },
    },
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Code style changes (formatting, etc)
        'refactor', // Code refactoring
        'perf', // Performance improvements
        'test', // Adding or updating tests
        'chore', // Maintenance tasks
        'ci', // CI/CD changes
        'revert', // Reverting changes
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-case': [2, 'always', 'sentence-case'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'emoji-prefix': [2, 'always'],
  },
};
