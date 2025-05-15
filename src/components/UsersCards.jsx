/* eslint-disable react/prop-types */
function UsersCards({ cards, onHandleRemoveCard }) {
  console.log(cards);

  return (
    <div className=" w-10/11 mx-auto mt-4 rounded-xl flex flex-col bg-gray-300 py-2 px-3 mb-10 z-10  ">
      {cards.map((card) => (
        <UserCardsData
          onHandleRemoveCard={onHandleRemoveCard}
          key={card.id}
          card={card}
        />
      ))}
    </div>
  );
}

export default UsersCards;

function UserCardsData({ card, onHandleRemoveCard }) {
  console.log(card);

  const persianDegree = (degree) => {
    if (degree === "master") {
      return "کارشناسی ارشد";
    } else if (degree == "bachelor") {
      return "کارشناسی";
    } else {
      return "دکتری";
    }
  };

  const persianDuplicate = (duplicate) => {
    if (duplicate) {
      return "کارت المثنی صادر شده است!";
    } else {
      return "لطفا در حفظ این کارت کوشا باشید!";
    }
  };

  function conv2EnNum(str) {
    return (
      parseFloat(
        str
          .replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (d) {
            return d.charCodeAt(0) - 1632;
          }) // Convert Arabic numbers
          .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function (d) {
            return d.charCodeAt(0) - 1776;
          }) // Convert Persian numbers
      ) * 1
    );
  }

    const toFarsiNumber = (n) => {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  };

  const persianExpireYear = toFarsiNumber(conv2EnNum(card.applyYear) + 4)

  return (
    <div className=" flex justify-between items-start flex-row-reverse w-full p-2 bg-sky-50 rounded-lg my-1 relative  ">
      <p className=" absolute rotate-90 -left-[25.3px] h-4 rounded-t-sm px-1 text-[12px] flex items-start bg-slate-700 top-[102px] text-white ">
        <span>اعتبار تا {persianExpireYear}</span>
      </p>
      <button
        onClick={() => onHandleRemoveCard(card)}
        className=" absolute bottom-2 left-2 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 stroke-red-400 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-15 stroke-slate-600  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <div className=" flex flex-col  pr-3 mt-1 ">
        <h1 className=" text-black text-[19px] font-bold ">{card.fullName}</h1>
        <h3 className=" text-slate-700 font-medium mt-2 text-[15px]  ">
          <span>رشته : </span> {card.fieldStudy}
        </h3>
        <h3 className=" text-slate-700  font-medium mt-2 text-[15px] ">
          <span>شماره دانشجویی : </span> {card.studentNumber}
        </h3>
        <h3 className=" text-slate-700  font-medium mt-2 text-[15px] ">
          <span>سال ورودی : {card.applyYear}</span>
        </h3>
        <h3 className=" text-slate-700 font-medium mt-2 text-[15px]  ">
          <span>مقطع : </span> {persianDegree(card.degree)}
        </h3>
        <h3
          className={`  ${
            card.duplicateCard ? "text-red-500" : "text-green-600"
          }  font-semibold mt-2 text-[15px]`}
        >
          {persianDuplicate(card.duplicateCard)}
        </h3>
      </div>
    </div>
  );
}
