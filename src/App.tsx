import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import SearchPage from "./pages/search-page";
import StreamPage from "./pages/stream-page";
import FollowingPage from "./pages/following-page";
import ChannelPage from "./pages/channel-page";
import CategoryStreamsPage from "./pages/category-streams";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import { persistor } from "./redux/store";
import { CookiesProvider } from "react-cookie";

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
    path: "/category/:categoryName",
    element: <CategoryStreamsPage />,
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
  {
    path: "/channel/:channelName",
    element: <ChannelPage />,
  },
]);

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
