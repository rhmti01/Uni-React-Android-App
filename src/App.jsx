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
  const [cards, setCards] = useState(() => {
    const cards = localStorage.getItem("cards") 
   return cards ? JSON.parse(cards) : [];
  });

  const handleAddCard = (newCard) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards, newCard];
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      toast.success(`  کارت ${newCard.fullName}   صادر شد! `);
      return updatedCards;
    });
  };

  const onHandleRemoveCard = (removedCard) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((crd) => crd.id !== removedCard.id);
      localStorage.setItem("cards", JSON.stringify(updatedCards));
      return updatedCards;
    });
  };

  return (
    <>
      <div className=" flex items-start flex-col w-full relative max-w-3xl mx-auto ">
        <Toaster />
        <AddUserBtn card={cards} modal={modal} setModal={setModal} />
        <AppHeader cardsLength={cards.length} />
        {modal && (
          <UserDataModal setModal={setModal} onAddCard={handleAddCard} />
        )}
        {cards.length>0 ? <UsersCards cards={cards} onHandleRemoveCard={onHandleRemoveCard} /> : <EmptyUsers />}
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
