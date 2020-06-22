// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate (context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "enkel" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('enkel.greeting', function () {
	// 	// The code you place here will be executed every time your command is executed
	// 	vscode.commands.getCommands().then(allCommands => {
	// 		console.log('所有命令：', allCommands);
	// 	});
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from enkel!');
	// });

	let disposable = vscode.commands.registerTextEditorCommand('enkel.edit', (textEditor, edit) => {
		const doc = textEditor.document;
		const start = new vscode.Position(0, 0);
		const end = new vscode.Position(doc.lineCount - 1, doc.lineAt(doc.lineCount - 1).text.length);
		//获取全部文本区域
		const selection = new vscode.Range(start, end);
		let text = doc.getText(selection);
		console.log('....', text)
	})

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate () { }

module.exports = {
	activate,
	deactivate
}
