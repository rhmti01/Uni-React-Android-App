import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AddUserBtn from "./components/AddUserBtn";
import UserDataModal from "./components/UserDataModal";
import UsersCards from "./components/UsersCards";
import toast, { Toaster } from "react-hot-toast";

function App() {
  // router states
  const [modal, setModal] = useState(false);
  const [cards, setCards] = useState([]);

  const handleAddCard = (newCard) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards, newCard];
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      toast.success(`  کارت ${newCard.fullName}   صادر شد! `);
      return updatedCards;
    });
    console.log(cards);
  };

  return (
    <>
      <div className=" flex items-start flex-col w-full relatvie ">
        <Toaster />
        <AddUserBtn card={cards} modal={modal} setModal={setModal} />
        <AppHeader />
        {modal && (
          <UserDataModal setModal={setModal} onAddCard={handleAddCard} />
        )}
        {cards.length > 0 ? <UsersCards /> : <EmptyUsers />}
      </div>
    </>
  );
}

function EmptyUsers() {
  return (
    <div className=" w-full mt-40 flex   flex-col items-center ">
      <p className=" text-center text-xl font-medium text-gray-700 ">
        لیست کارت های دانشجویی <br />
        خالی است!{" "}
      </p>
    </div>
  );
}

export default App;
