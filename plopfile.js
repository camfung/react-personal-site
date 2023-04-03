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
        path: "src/components/{{name}}/{{name}}Main.js",
        templateFile: "templates/ComponentMain.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.js",
        templateFile: "templates/Component.js.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.css",
        templateFile: "templates/Component.css.hbs",
      },
    ],
  });
};
