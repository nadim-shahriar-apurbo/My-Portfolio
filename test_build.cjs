const { execSync } = require('child_process');
try {
  const output = execSync('npm run build', { encoding: 'utf-8' });
  console.log('Build successful:');
  console.log(output);
} catch (e) {
  console.error('Build failed:');
  console.error(e.stdout);
  console.error(e.stderr);
}