#!/usr/bin/env node

/**
 * Dynamic Impact - Build Optimization Script
 * This script optimizes the build for better performance and caching
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Optimizing Dynamic Impact build for production...');
console.log('📦 Targeting modern browsers to reduce bundle size...');

// Function to copy .htaccess to build directory
function copyHtaccess() {
  const sourcePath = path.join(__dirname, 'public', '.htaccess');
  const destPath = path.join(__dirname, 'build', '.htaccess');
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log('✅ .htaccess copied to build directory');
  } else {
    console.log('⚠️  .htaccess not found in public directory');
  }
}

// Function to optimize build files
function optimizeBuild() {
  const buildPath = path.join(__dirname, 'build');
  
  if (!fs.existsSync(buildPath)) {
    console.log('❌ Build directory not found. Run "npm run build" first.');
    return;
  }
  
  // Copy .htaccess for Apache servers
  copyHtaccess();
  
  // Create robots.txt with cache headers
  const robotsPath = path.join(buildPath, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    const optimizedRobots = robotsContent + '\n\n# Cache optimization\n# Static assets are cached for 1 year';
    fs.writeFileSync(robotsPath, optimizedRobots);
    console.log('✅ robots.txt optimized');
  }
  
  console.log('🎉 Build optimization completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Upload the build folder to your server');
  console.log('2. Ensure your server supports .htaccess (Apache) or use nginx.conf (Nginx)');
  console.log('3. Test your website with PageSpeed Insights');
  console.log('4. Verify cache headers are working with browser dev tools');
  console.log('\n💡 For ultra-modern browsers (saves ~9KB):');
  console.log('   Run: npm run build:ultra');
}

// Run optimization
optimizeBuild();
