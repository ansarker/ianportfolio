const path = require("path");
const fs = require("fs");
const { parse } = require("path");

const dirPath = path.join(__dirname, "./blogpost");
let postList = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("Failed to load files");
    }
    files.forEach((file, i) => {
      const getMetaDataIndices = (acc, elem, i) => {
        if (/^---/.test(elem)) {
          acc.push(i);
        }
        return acc;
      };

      const parseMetadata = ({ lines, metadataIndices }) => {
        if (metadataIndices.length > 0) {
          let metadata = lines.slice(
            metadataIndices[0] + 1,
            metadataIndices[1]
          );
          metadata.forEach((line) => {
            obj[line.split(": ")[0]] = line.split(": ")[1];
          });
          return obj;
        }
      };

      const parseContent = ({ lines, metadataIndices, codeIndices }) => {
        if (metadataIndices.length > 0) {
            lines = lines.slice(metadataIndices[1] + 1, codeIndices[0]);
            return lines.join("\n");
        } else {
            return;
        }
      };

      // For splitting codes indices
      const getCodeIndices = (acc, elem, i) => {
        if (/^```/.test(elem)) {
          acc.push(i);
        }
        return acc;
      };

      const parseCode = ({ lines, codeIndices }) => {
        if (codeIndices.length > 0) {
          let code = lines.slice(codeIndices[0] + 1, codeIndices[1]);
          code.forEach((line) => {
            codeObj += line + "\n";
          });
          return codeObj;
        }
      };

      let obj = {};
      let codeObj = "";
      let post;

      fs.readFile(`${dirPath}/${file}`, "utf-8", (err, contents) => {
        const lines = contents.split("\n");

        // For splitting metadata and content and codes
        const metadataIndices = lines.reduce(getMetaDataIndices, []);
        const codeIndices = lines.reduce(getCodeIndices, []);

        const metadata = parseMetadata({ lines, metadataIndices });
        const content = parseContent({ lines, metadataIndices, codeIndices });
        const codes = parseCode({ lines, codeIndices });

        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "No Title Given",
          category: metadata.category ? metadata.category : "Unknown",
          language: metadata.language ? metadata.language : "unknown",
          author: metadata.author ? metadata.author : "No Author",
          content: content ? content : "No content given",
          codes: codes ? codes : "",
        };
        postList.push(post);
        if (i === files.length - 1) {
          console.log(postList);
          let data = JSON.stringify(postList);
          fs.writeFileSync("src/resources/posts.json", data);
        }
      });
    });
  });
  setTimeout(() => {

  }, 500)
};

getPosts();
