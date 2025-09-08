import { exec } from 'child_process';
import { promisify } from 'util';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const execPromise = promisify(exec);

async function deploy() {
  try {
    console.log('Building the project...');
    const { stdout: buildStdout, stderr: buildStderr } = await execPromise('npm run build');
    console.log(buildStdout);
    if (buildStderr) console.error(buildStderr);
    
    console.log('Deploying to GitHub Pages...');
    const { stdout: deployStdout, stderr: deployStderr } = await execPromise('npx gh-pages -d dist');
    console.log(deployStdout);
    if (deployStderr) console.error(deployStderr);
    
    console.log('Deployment completed successfully!');
  } catch (error) {
    console.error('Deployment failed:', error);
  }
}

deploy();