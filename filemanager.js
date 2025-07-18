// #!/usr/bin/env node

import chalk from "chalk";
import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import { createFolder, createFile, writeToFile, deleteFile, deleteFolder, listItems } from "./promises.js";

const rl = readline.createInterface
    ({
        input: stdin,
        output: stdout,
    });

async function menu() {
    console.clear();
    console.log(chalk.blue.bold('\n📂File Manager\n'));
    const options = [
        'Create Folder',
        'Create File',
        'Write to File',
        'Delete File',
        'Delete Folder',
        'List Items',
        'Exit',
    ];

    options.forEach((opt, i) => {
        console.log(chalk.yellow(`${i + 1}` + chalk.white(` ${opt}`)));
    })

    const answer = await rl.question(chalk.cyan('\nSelect option:'));
    // console.log(chalk.yellow('Ans', answer));

    switch (answer) {
        case '1':
            const folderPath = await rl.question(chalk.cyan(`Folder Path: `));

            await createFolder(folderPath);

            console.log(chalk.green('☑️Folder created successfully!'));

            break;
        case '2':
            const filePath = await rl.question(chalk.cyan(`File Path: `));

            const initialContent = await rl.question(chalk.cyan(`Initial Content: `));

            await createFile(filePath, initialContent);

            console.log(chalk.green('☑️File created successfully!'));

            break;
        case '3':
            const writeFile = await rl.question(chalk.cyan(`File Path: `));

            const writeContent = await rl.question(chalk.cyan(`Content: `));

            await writeToFile(writeFile, `\n${writeContent}`);

            console.log(chalk.green('☑️File updated successfully!'));
            break;
        case '4':
            const deleteTheFile = await rl.question(chalk.cyan(`File Path: `));

            await deleteFile(deleteTheFile);

            console.log(chalk.green('☑️File deleted successfully!'));
            break;
        case '5':
            const deleteTheFolder = await rl.question(chalk.cyan(`Folder Path: `));

            await deleteFolder(deleteTheFolder);

            console.log(chalk.green('☑️Folder deleted successfully!'));
            break;
        case '6':
            const listPath = await rl.question(chalk.cyan(`Folder Path (Just Click Enter if you want for Current): `));
            const items = await listItems(listPath || './');
            console.log(listItems);

            console.log(chalk.blue('\nContents'));

            items.forEach((item) => {
                const icon = item.type === 'folder' ? '📂' : '🗒️';
                console.log(`${icon} ${chalk.yellow(item.name)}`);
            })
            break;
        case '7':
            rl.close();
            return;
        default:
            console.log(chalk.red('Invalid Input ⚠️'));
    }

    await rl.question(chalk.gray('\nPress ENTER to continue...'));
    menu();
}

menu();