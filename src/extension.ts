import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';

const templatePath = path.join(__dirname, '../template.html');
const template = fs.readFileSync(templatePath, 'utf8');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "autocss" is now active!');
	
	const disposable = vscode.commands.registerCommand('autocss.generate', () => {
		const panel = vscode.window.createWebviewPanel(
            'popup',
            'AutoCSS',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
            }
        );
        panel.webview.html = template;

    });
	context.subscriptions.push(disposable);
}

export function deactivate() {}
