import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useState } from "react";
import { Button } from "@mui/material";
import { DarkMode, LightMode, CopyAllOutlined } from "@mui/icons-material";
import { solarizedDark, solarizedLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ children, language }) => {
  const [isDark, setIsDark] = useState(true)
  const themeToggler = (() => {
    isDark ? setIsDark(false):setIsDark(true)
  })
  return (
    <div className="d-flex flex-column gap-2">
      <div className="d-flex gap-2 justify-content-end">
        <div>
          <Button variant="outlined">
          <CopyAllOutlined />
          </Button>
        </div>
        <div>
          <Button variant="outlined" className="" onClick={themeToggler}>
          {
            isDark ? <DarkMode /> : <LightMode />
          }
          </Button>
        </div>
      </div>
      <SyntaxHighlighter className="p-3" style={isDark ? solarizedDark : solarizedLight} language={language}>{children}</SyntaxHighlighter>
    </div>
  );
};

export default Code;
