import { GlobalStyle } from "./styles/Global";
import { ThemeProvider } from "styled-components";

import { themeApp } from "./styles/Theme";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

export function App() {
  return (
    <ThemeProvider theme={themeApp}>
      <GlobalStyle />
      <Header />
      <Todo />
    </ThemeProvider>
  );
}
