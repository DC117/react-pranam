// const headingOne = React.createElement(
//   "h1",
//   { id: "heading", className: "react-heading", xyz: "abc" },
//   "Hello from React"
// );
// console.log(headingOne);
// const rootReact = ReactDOM.createRoot(document.getElementById("root"));
// rootReact.render(headingOne);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "hello heading from nested parent")
//   )
// );

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     //   To add one more child to it
//     [
//       React.createElement("h1", {}, "hello heading from nested parent"),
//       React.createElement("h2", {}, "hello heading sibling nested parent"),
//     ]
//   )
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    //   To add one more child to it
    [
      React.createElement("h1", {}, "hello heading from nested parent"),
      React.createElement("h2", {}, "hello heading sibling nested parent"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },
    //   To add one more child to it
    [
      React.createElement("h1", {}, "hello heading from nested parent"),
      React.createElement("h2", {}, "hello heading sibling nested parent"),
    ]
  ),
]);

const rootReact = ReactDOM.createRoot(document.getElementById("root"));
rootReact.render(parent);
