module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generate a new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{name}}/{{name}}Main.js",
        templateFile: "templates/main.js.hbs",
      },
      {
        type: "add",
        path: "{{name}}/{{name}}.js",
        templateFile: "templates/name.js.hbs",
      },
      {
        type: "add",
        path: "{{name}}/{{name}}.css",
        templateFile: "templates/name.css.hbs",
      },
    ],
  });
};
