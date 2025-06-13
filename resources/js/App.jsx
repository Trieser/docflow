import React from "react";
import { Routes, Route } from "react-router-dom";
import DocFlowIndex from "./Pages/DocFlow/Index";
import Input from "./Pages/DocFlow/Input";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<DocFlowIndex />} />
            <Route path="/documents/input" element={<Input />} />
        </Routes>
    );
};

export default App;
