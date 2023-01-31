import Layout from "../components/layout/layout";
import { Store } from "../store/store";
import Buffer from "./Buffer";

function App() {
  return (
    <div>
      <Store>
        <Layout>
          <Buffer />
        </Layout>
      </Store>
    </div>
  );
}

export default App;
