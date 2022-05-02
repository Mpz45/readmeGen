const badge = [
  {
    name: "Apache 2.0",
    link: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    desc: "Under this license, users can: Use the code commercially: Companies can include the licensed code in proprietary software that they then sell to customers.",
  },
  {
    name: "Boost",
    link: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    desc: "The Boost license permits the creation of derivative works for any use with no legal requirement to release your source code.",
  },
  {
    name: "MIT",
    link: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    desc: "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980s. As a permissive license, it puts only very limited restriction on reuse and has, therefore, high license compatibility.",
  },
  {
    name: "GPL v3",
    link: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    desc: "Like the GPL v2, GPL 3 is a strong copyleft license, meaning that any copy or modification of the original code must also be released under the GPL v3. In other words, you can take the GPL 3'd code, add to it or make major changes, then distribute your version.",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(ren) {
  for (let i = 0; i < badge.length; i++) {
    if (ren.license == badge[i].name) {
      return ren.license;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(ren) {
  for (let i = 0; i < badge.length; i++) {
    if (ren.license == badge[i].name) {
      return badge[i].link;
    } else {
      return "none";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(ren) {
  for (let i = 0; i < badge.length; i++) {
    if (ren.license == badge[i].name) {
      return (
        renderLicenseBadge(ren) +
        "\n" +
        renderLicenseLink(ren) +
        "\n" +
        badge[i].desc
      );
    } else {
      return "none";
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
   ## Table of Contents
-[Usage](#usage)\n
-[License](#license)\n
-[Credits](#contributors)\n
-[Questions](#questions)
   ## Usage
   ${data.usage}
   ## License 
   ${renderLicenseSection(data)}
   ## Contributors 
   ${data.contributors}
   ## Questions 
   Email: ${data.questions}\n
   [GitHub User ${data.gitHub}:](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
