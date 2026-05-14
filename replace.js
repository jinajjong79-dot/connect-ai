const fs = require('fs');
const files = ['package.json', 'README.md', 'src/extension.ts', '튜토리얼_비서_연결.md'];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace names
    content = content.replace(/Connect AI/g, 'Genmon AI');
    content = content.replace(/connect-ai-lab/g, 'genmon-ai');
    content = content.replace(/connectAiLab/g, 'genmonAi');
    content = content.replace(/connectailab/g, 'genmonai');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
