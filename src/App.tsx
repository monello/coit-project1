import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { NoMatch, CreateIssue, Dashboard } from "./pages";
import { SandBox } from "./pages/SandBox/SandBox";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="create" element={<CreateIssue />} />
                    <Route path="sandbox" element={<SandBox />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    );
}
