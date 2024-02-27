import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import SearchPage from "./pages/search-page";
import StreamPage from "./pages/stream-page";
import FollowingPage from "./pages/following-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const theme = createTheme({
  palette: {
    background: {
      default: "#161616f2",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/following",
    element: <FollowingPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/stream/:channelName",
    element: <StreamPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
