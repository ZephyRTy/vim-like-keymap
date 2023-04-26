const vscode = require('vscode');
const { commandsConfig } = require('./config');
/**
 * 一旦你的插件激活，vscode会立刻调用下述方法
 *    只会在你的插件激活时执行一次
 */
/**
 *
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// 注册一个命令，当该命令被执行时，弹出提示框
	// let disposable1 = vscode.commands.registerCommand(
	// 	'vim-like.selectInnerBrackets',
	// 	() => {
	// 		vscode.commands.executeCommand('editor.action.jumpToBracket');
	// 		vscode.commands.executeCommand('editor.action.smartSelect.expand');
	// 	}
	// );
	const commands = commandsConfig.map((e) => {
		return vscode.commands.registerCommand(e.commandId, () => {
			e.commandSeq.forEach((el) => {
				if (typeof el === 'object') {
					vscode.commands.executeCommand(
						el.commandId,
						el.commandArgs
					);
					return;
				}
				vscode.commands.executeCommand(el);
			});
		});
	});
	// 监听上面注册的命令
	context.subscriptions.push(...commands);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
};
