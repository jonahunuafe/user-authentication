//import Signup from "./components/Signup";
import MainNavigation from "./components/MainNavigation";
import PasswordReset from "./components/PasswordReset";

function App() {
  return (
    <>
      <main>
        <MainNavigation title="Already have an account?">
          <a href="http://">Sign in</a>
        </MainNavigation>
        {/* <Signup /> */}
        <PasswordReset />
      </main>
    </>
  );
}

export default App;
