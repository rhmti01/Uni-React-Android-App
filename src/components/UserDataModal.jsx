/* eslint-disable react/prop-types */

function UserDataModal({ setModal }) {
  return (
    <div className="fixed inset-0  z110  flex items-center justify-center">
      {/* space out of div */}
      <div
        onClick={() => setModal(false)}
        className="  cursor-pointer  inset-0 absolute bg-black/55  w-full h-screen z-50  "
      ></div>

      <div className="  rr:scale-[0.82] ss:scale-[0.80] bg-gray-100 border-1 border-gray-300 p-7 rounded-2xl  w-[350px] z-50  ">
        <h2 className="text-gray-900  text-center text-2xl font-bold flex items-center justify-center gap-x-3 ">
          کارت جامع دانشجویی
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </h2>
        <div className="mt-8 ">
          <input
            placeholder="نام و نام خانوادگی"
            dir="rtl"
            type="text"
            className="w-full  py-2.5 px-3 border border-stone-300  mx-auto  mt-1  rounded-[10px] outline-none focus:shadow-lg  focus:border-indigo-600   "
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            placeholder="رشته تحصیلی"
            className="w-full  py-2.5 px-3 border border-stone-300  mx-auto  mt-1  rounded-[10px] outline-none focus:shadow-lg  focus:border-indigo-600   "
          />
        </div>
        <div className="mt-3">
          <input
            placeholder="شماره دانشجویی"
            type="text"
            className="w-full  py-2.5 px-3 border border-stone-300  mx-auto  mt-1  rounded-[10px] outline-none focus:shadow-lg  focus:border-indigo-600   "
          />
        </div>

        <div className=" w-full flex justify-around items-center mt-6">
          <div className="flex items-center ">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300   "
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2  font-medium text-gray-800 "
            >
              کارشناسی
            </label>
          </div>
          <div className="flex items-center">
            <input
              defaultChecked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  "
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2  font-medium text-gray-800 "
            >
              کارشناسی ارشد
            </label>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center  w-full ">
            <label className="inline-flex items-center cursor-pointer gap-x-4">
              <span className="ms-3  font-medium text-gray-800 ">
                آیا کارت المثنی صادر شود؟
              </span>
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600 "></div>
            </label>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setModal(false)}
            className="bg-gray-300 px-3 py-1.5 rounded-lg cursor-pointer "
          >
            انصراف
          </button>
          <button className="bg-gradient-to-tr from-indigo-700 to-indigo-600 text-white px-3 py-1.5 rounded-lg cursor-pointer">
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDataModal;
