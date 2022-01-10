import chalk from "chalk";
import { getNotes, saveNotes } from "./notes.js";

const command = process.argv[2];

// command validation and identification

if (command === "add") {
  console.log(chalk.green("Add Notes Command Triggered\n"));
  const title = process.argv[3];
  const body = process.argv[4];

  if (title && body) {
    saveNotes(title, body);
  } else {
    const err = `Invalid or no arguments found for add command.
    \nPlease provid --title and --body.
    \nUsage: node app.js add --title="Some Title" --body="Some body"
    `;

    console.log(chalk.red(err));
  }
} else if (command === "remove") {
  console.log(chalk.green("Removing Notes"));
}
