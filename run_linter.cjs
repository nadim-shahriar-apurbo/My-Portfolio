const { execSync } = require('child_process');
const fs = require('fs');

try {
  const output = execSync('npm run lint', { encoding: 'utf-8', cwd: __dirname });
  fs.writeFileSync('lint-results.txt', output);
} catch (e) {
  fs.writeFileSync('lint-results.txt', e.stdout || e.stderr || e.toString());
}
