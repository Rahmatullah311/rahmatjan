import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { Button } from "@mui/material";
import { DarkMode, LightMode, CopyAllOutlined } from "@mui/icons-material";
import {
  solarizedDark,
  solarizedLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useDispatch, useSelector } from "react-redux";
import { formatterThemeToggler } from "./formatterSlice";
import toast from "react-hot-toast";
import { CopyAll } from "@mui/icons-material";

const Formatter = ({ children, language }) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.formatter.isDark);
  const themeToggler = () => {
    dispatch(formatterThemeToggler());
  };
  const handleCopy = () => {
    const currentCode = children;
    navigator.clipboard.writeText(currentCode);
    toast("Copied", { icon: <CopyAll /> });
  };
  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex gap-2 justify-content-end">
        <div>
          <Button variant="outlined" onClick={handleCopy}>
            <CopyAllOutlined />
          </Button>
        </div>
        <div>
          <Button variant="outlined" className="" onClick={themeToggler}>
            {isDark ? <DarkMode /> : <LightMode />}
          </Button>
        </div>
      </div>
      <SyntaxHighlighter
        className="p-3 shadow rounded"
        style={isDark ? solarizedDark : solarizedLight}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Formatter;
