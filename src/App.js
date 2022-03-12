import { Routes, Route } from 'react-router-dom';
import { useState, Suspense, lazy } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from './components/Loading';


const Home = lazy(() => import("./pages/Home"));
const NewPost = lazy(() => import("./pages/NewPost"));
const Messages = lazy(() => import("./pages/Messages"));
const Friends = lazy(() => import("./pages/Friends"));
const Login = lazy(() => import("./pages/Login"));

const INIT_STATE = {
  name: 'Feisbrut',
  nav: [
    { link: "/feisbrut", label: "Home" },
    { link: "/friends", label: "Friends" },
    { link: "/messages", label: "Messages" },
    { link: "/login", label: "Login" }
  ],
  friendsPreview: [],

}

function App() {

  const [nameUser, setNameUser] = useState("Feisbrut");

  return (
    <div>
      <Header name={nameUser} links={INIT_STATE.nav} />

      <Routes>
        <Route path="/feisbrut" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path="/new-post" element={
          <Suspense fallback={<Loading />}>
            <NewPost />
          </Suspense>
        } />
        <Route path="/messages" element={
          <Suspense fallback={<Loading />}>
            <Messages />
          </Suspense>
        } />
        <Route path="/friends" element={
          <Suspense fallback={<Loading />}>
            <Friends />
          </Suspense>
        } />
        <Route path="/login" element={
          <Suspense fallback={<Loading />}>
            <Login setNameUser={setNameUser} />
          </Suspense>
        } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
