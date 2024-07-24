import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';

const templatePath = path.join(__dirname, '../template.html');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "cssvision" is now active!');

	const disposable = vscode.commands.registerCommand('cssvision.generate', () => {
		const panel = vscode.window.createWebviewPanel(
            'popup',
            'CSSVision',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
            }
        );
		fs.readFile(templatePath, 'utf8', (err, data) => {
            if (err) {
                vscode.window.showErrorMessage('Failed to load HTML template.');
                return;
            }
            panel.webview.html = data;
        });

    });
	context.subscriptions.push(disposable);
}

export function deactivate() {}
