/* eslint-disable react/prop-types */

function AddUserBtn({ modal, setModal  }) {

  return (
    <div className=" bottom-4 right-4 fixed ">
      <button
        onClick={() => setModal(!modal)}
        className=" p-3 bg-gray-700 rounded-2xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-8 stroke-3 stroke-white shadow-2xl "
        >
          <path d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  );
}

export default AddUserBtn;
