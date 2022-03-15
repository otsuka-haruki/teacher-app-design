import AppRouter from "router/AppRouter";
import { firebaseApp } from "./config/firebase";
import ThemeProvider from "config/mui";
import Container from "components/common/Container";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Container>
          <AppRouter />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
