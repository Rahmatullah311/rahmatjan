import * as React from "react";
import { createTheme } from "@mui/material/styles";
import { Home } from "@mui/icons-material";
import { Article, Create } from "@mui/icons-material";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useNavigate, useLocation } from 'react-router-dom';
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const ArticleNavication = [
  {
    segment: 'solutions',
    title: 'Solutions',
    icon: <Article />,
  },
];

function WebLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const router = {
    pathname: location.pathname,
    navigate: (path) => navigate(path),
    searchParams: new URLSearchParams(location.search), // Get search params
  };
  return (
    // preview-start
    <AppProvider
      navigation={[
        {
          segment: "/home",
          title: "Home", 
          icon: <Home />,
        },
        {
          segment: "/solutions",
          title: "Solutions",
          icon: <Article />,
          children: ArticleNavication,
        },
      ]}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
  );
}

export default WebLayout;