import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BooksList } from "./components/BooksList";

import "./App.css";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BooksList />} />
                    <Route path="/about" element={<>About Page</>} />
                    {/* Any routes that are not defined our found*/}
                    <Route path="*" element={<>404 Page Not Found</>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
