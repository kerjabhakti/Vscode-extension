// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Gunakan konsol untuk mengeluarkan informasi diagnostik (console.log) dan kesalahan (console.error)
  // Baris kode ini hanya akan dieksekusi sekali saat ekstensi Anda diaktifkan
  console.log('Congratulations, your extension "fileforge" is now active!');

  // Perintah telah didefinisikan dalam file package.json
  // Sekarang berikan implementasi perintah dengan registerCommand
  // Parameter commandId harus sesuai dengan field command dalam package.json
  let disposable = vscode.commands.registerCommand(
    "fileforge.helloWorld",
    function () {

      // Import modul yang diperlukan
      const fs = require("fs");
      const path = require("path");
      const vscode = require("vscode");

      // Ambil path dari workspace yang sedang dibuka
      let folderPath = vscode.workspace.rootPath;

      // Buat folder baru untuk src dan public
      let folderSRC = "src";
      let folderPUBLIC = "public";
      let folderPathSRC = path.join(folderPath, folderSRC);
      let folderPathPUBLIC = path.join(folderPath, folderPUBLIC);
      fs.mkdirSync(folderPathSRC);
      fs.mkdirSync(folderPathPUBLIC);

      // Buat file index.js dan package.json
      const fileHTML = path.join(folderPathPUBLIC, "index.html");
      const fileINDEX = path.join(folderPathSRC, "index.js");
      const filePACKAGE = path.join(folderPath, "package.json");
      const fileContent = `console.log('berhasil buat file index, package dan folder src,public');`; // Isi dari file index.js

      // Tulis file ke disk
      fs.writeFileSync(fileHTML, fileContent);
      fs.writeFileSync(fileINDEX, fileContent);
      fs.writeFileSync(filePACKAGE, fileContent);

      // Tampilkan pesan informasi untuk notifikasi
      vscode.window.showInformationMessage("public folder created!");
      setTimeout(() => {
        vscode.window.showInformationMessage("src folder created!");
      }, 1000); // tunggu selama 1 detik sebelum menampilkan pesan informasi berikutnya
      setTimeout(() => {
        vscode.window.showInformationMessage("index.js file created!");
      }, 2000); // tunggu selama 2 detik sebelum menampilkan pesan informasi berikutnya
      setTimeout(() => {
        vscode.window.showInformationMessage("package.json file created!");
      }, 3000); // tunggu selama 3 detik sebelum menampilkan pesan informasi terakhir
      setTimeout(() => {
        vscode.window.showInformationMessage("FILE FORGE v0.1.0");
      }, 4000); // tunggu selama 4 detik sebelum menampilkan pesan informasi terakhir
      
    }
  );

  let disposableNewCommand = vscode.commands.registerCommand(
    "fileforge.reactjs",
    function () {
      vscode.window.showInformationMessage("reactjs created!");
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposableNewCommand);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
