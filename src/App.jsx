import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Georgia",
            animal: "Dog",
            breed: "English Pointer",
        }),
        React.createElement(Pet, {
            name: "Rip",
            animal: "Dog",
            breed: "English Pointer",
        }),
        React.createElement(Pet, {
            name: "Brutus",
            animal: "Dog",
            breed: "Miniature Dachshund",
        }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
