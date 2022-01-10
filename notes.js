import chalk from "chalk";
import fs from "fs";

export const getNotes = function () {
  return "Your notes";
};

export const saveNotes = function (title, body) {
  const nTitle = title.split("=")[1];
  const nBody = body.split("=")[1];
  const presentNotes = loadNotes();
  const duplicateNotes = presentNotes.filter(function (note) {
    return note.title === nTitle;
  });

  if (duplicateNotes.length === 0) {
    const notes = {
      title: nTitle,
      body: nBody,
    };
    presentNotes.push(notes);

    fs.writeFileSync("notes.json", JSON.stringify(presentNotes));
    console.log(chalk.green("Notes Added Successfully"));
  } else {
    console.log(chalk.red("Duplicate Notes Found With Same Title"));
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = JSON.parse(dataBuffer.toString());
    return dataJson;
  } catch (err) {
    return [];
  }
};
