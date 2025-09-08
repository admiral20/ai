import { exec } from 'child_process';
import { promisify } from 'util';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const execPromise = promisify(exec);

async function deploy() {
  try {
    // Get repository name from package.json
    const packageJson = JSON.parse(readFileSync(path.resolve('package.json'), 'utf8'));
    const repoName = packageJson.name;
    
    // Update vite.config.ts with the correct base path
    console.log('Updating vite.config.ts with repository name...');
    const viteConfigPath = path.resolve('vite.config.ts');
    let viteConfig = readFileSync(viteConfigPath, 'utf8');
    
    // Replace placeholder with actual repo name
    viteConfig = viteConfig.replace('/ai/', `/${repoName}/`);
    writeFileSync(viteConfigPath, viteConfig);
    
    console.log('Building the project...');
    const { stdout: buildStdout, stderr: buildStderr } = await execPromise('npm run build');
    console.log(buildStdout);
    if (buildStderr) console.error(buildStderr);
    
    console.log('Deploying to GitHub Pages...');
    const { stdout: deployStdout, stderr: deployStderr } = await execPromise('npm run deploy');
    console.log(deployStdout);
    if (deployStderr) console.error(deployStderr);
    
    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deploy();