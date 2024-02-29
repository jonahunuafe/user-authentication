import Signup from "./components/Signup";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <>
      <main>
        <MainNavigation title="Already have an account?">
          <a href="http://">Sign in</a>
        </MainNavigation>
        <Signup />
      </main>
    </>
  );
}

export default App;
