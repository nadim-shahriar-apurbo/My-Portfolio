const { execSync } = require('child_process');
const fs = require('fs');

try {
  // We use npx to run vercel build to see if Vercel accepts the config
  const output = execSync('npx --yes vercel build --token=""', { encoding: 'utf-8', cwd: __dirname });
  fs.writeFileSync('vercel-build-results.txt', output);
} catch (e) {
  fs.writeFileSync('vercel-build-results.txt', e.stdout || e.stderr || e.toString());
}
