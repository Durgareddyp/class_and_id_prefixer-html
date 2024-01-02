const fs = require("fs");

function addPrefixesToFiles(files, prefix) {
  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");

    const modifiedContent = content.replace(
      /(class|id)=["']([^"']+)["']/g,
      (_, attribute, value) => {
        const modifiedValue = value
          .split(" ")
          .map((entry) => `${prefix}${entry}`)
          .join(" ");

        return `${attribute}="${modifiedValue}"`;
      }
    );

    fs.writeFileSync(file, modifiedContent, "utf-8");
    console.log(`Prefixes added to classes and IDs in ${file}`);
  });
}

// Define your HTML 
const htmlFiles = ["edu/index.html"];
const prefix = "ltm-";

// Add prefixes to classes and IDs
addPrefixesToFiles(htmlFiles, prefix);
