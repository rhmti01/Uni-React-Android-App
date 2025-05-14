import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AddUserBtn from "./components/AddUserBtn";
import UserDataModal from "./components/UserDataModal";

function App() {
  // router states
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className=" flex items-start flex-col w-full relatvie ">
        <AddUserBtn modal={modal} setModal={setModal} />
        <AppHeader />
        {modal ? <UserDataModal setModal={setModal} /> : <EmptyUsers />}
      </div>
    </>
  );
}

function EmptyUsers() {
  return (
    <div className=" w-full mt-20 flex justify-center " >
      <p className=" text-center " >لیست کارت های دانشجویی  <br/>خالی است!  </p>
    </div>
  );
}

export default App;
