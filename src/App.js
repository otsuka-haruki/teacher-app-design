import AppRouter from "router/AppRouter";
import { firebaseApp } from "./config/firebase";
import ThemeProvider from "config/mui";
import Layout from "components/layout/Layout";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
