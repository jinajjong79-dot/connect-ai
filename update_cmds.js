const fs = require('fs');

// Update package.json
let pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.contributes.commands.push({
  command: 'genmon-ai.generateScriptDraft',
  title: 'Genmon AI: 부모 쿼리 기반 대본 초안 생성 (삼각구조)'
});
pkg.contributes.commands.push({
  command: 'genmon-ai.showAtlasGraph',
  title: 'Genmon AI: ATLAS 지식 네트워크 1-hop BFS 시각화'
});
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2), 'utf8');

// Update extension.ts
let ext = fs.readFileSync('src/extension.ts', 'utf8');
const hook = "vscode.commands.registerCommand('genmon-ai.showBrainNetwork', () => {";
const insertion = `
        vscode.commands.registerCommand('genmon-ai.generateScriptDraft', async () => {
            const query = await vscode.window.showInputBox({ prompt: '부모님의 질문이나 고민을 입력하세요 (예: 아이가 매일 저녁 폭발해요)' });
            if (!query) return;
            _activeChatProvider?.sendPromptFromExtension?.(
                \`[Agentic RAG 파이프라인 가동] 다음 부모 쿼리에 대해 ATLAS 지식망(1-hop BFS)을 탐색하고, 논문/경험을 검증한 뒤 '삼각구조' 대본 초안을 작성해주세요:\\n\\n"\${query}"\`,
                { fromTelegram: false, corporate: true }
            );
        });
        vscode.commands.registerCommand('genmon-ai.showAtlasGraph', () => {
            vscode.commands.executeCommand('genmon-ai.showBrainNetwork');
        });
`;
ext = ext.replace(hook, insertion + '\n        ' + hook);
fs.writeFileSync('src/extension.ts', ext, 'utf8');

console.log('Commands added successfully.');
