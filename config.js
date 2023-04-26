const vscode = require('vscode');
/**
 * @typedef {{commandId:string,commandArgs?:object }} commandUnit
 * @typedef {{commandId:string,commandSeq:(string|commandUnit)[] }} commandDef
 * @type {commandDef[]}
 */
const commandsConfig = [
	{
		commandId: 'vim-like.selectInnerBrackets',
		commandSeq: [
			'editor.action.jumpToBracket',
			'editor.action.setSelectionAnchor',
			'editor.action.jumpToBracket',
			'cursorRight',
			'editor.action.selectFromAnchorToCursor'
		]
	},
	{
		commandId: 'vim-like.copyAroundBrackets',
		commandSeq: [
			'editor.action.selectToBracket',
			'editor.action.clipboardCopyAction'
		]
	},
	{
		commandId: 'vim-like.copyInnerBrackets',
		commandSeq: [
			'vim-like.selectInnerBrackets',
			'editor.action.clipboardCopyAction'
		]
	},
	{
		commandId: 'vim-like.deleteAroundBrackets',
		commandSeq: ['editor.action.selectToBracket', 'deleteInsideWord']
	},
	{
		commandId: 'vim-like.deleteInnerBrackets',
		commandSeq: ['vim-like.selectInnerBrackets', 'deleteInsideWord']
	}
];

module.exports = { commandsConfig };
