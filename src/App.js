import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
//pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Contacts from "./pages/Contacts/Contacts";
import ContactDetails from './pages/ContactDetails/ContactDetails'
import UserPreferences from "./pages/UserPreferences/UserPreferences";
import Authentication from "./pages/Authentication/Authentication";

//temporal context
import UserProvider from "./store/UserProvider";
import NothingToSee from "./pages/NothingToSee/NothingToSee";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="authentication" element={<Authentication />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route path="contacts" element={<Contacts />}>
          <Route path="details" element={<ContactDetails />} />
        </Route>
        <Route path="user-preferences" element={<UserPreferences />} />
        <Route path="*" element={<NothingToSee />} />
      </Routes>
    </BrowserRouter>
  );
}
