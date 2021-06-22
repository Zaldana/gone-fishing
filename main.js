
// Prompt Sync =========================================================

const prompt = require('prompt-sync')({ sigint: true });

// Multiline Bug Fix ===================================================

const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};