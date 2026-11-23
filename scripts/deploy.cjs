const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Building production bundle...');
execSync('npm run build', { stdio: 'inherit' });

// Ensure .nojekyll exists in dist
const distPath = path.join(__dirname, '..', 'dist');
fs.writeFileSync(path.join(distPath, '.nojekyll'), '');

console.log('📤 Pushing to gh-pages branch on GitHub...');
const cmd = `cd dist && git init && git branch -M gh-pages && git add -A && git commit -m "Deploy to GitHub Pages" && git remote add origin https://github.com/baraaalhasan963/homs-media-guide.git && git push -u origin gh-pages --force && rd /s /q .git`;
execSync(cmd, { stdio: 'inherit', shell: 'cmd.exe' });

console.log('\n✅ Deployment successful!');
console.log('🌐 Live site URL: https://baraaalhasan963.github.io/homs-media-guide/\n');
