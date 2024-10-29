import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Georgia" animal="Dog" breed="English Pointer" />
            <Pet name="Rip" animal="Dog" breed="English Pointer" />
            <Pet name="Brutus" animal="Dog" breed="Dachshund" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
