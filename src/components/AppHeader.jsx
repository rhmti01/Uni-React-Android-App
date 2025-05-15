function AppHeader() {
  return (
    <div className=" h-[74px] flex items-center justify-between bg-gray-800 w-[95%] mx-auto mt-3 rounded-2xl px-4  ">
      <h1 className="  font-semibold text-[19px] text-white ">پنل ادمین</h1>
      <p className=" px-2 py-[3px] flex gap-x-1 items-center justify-center bg-gray-700 rounded-lg">
        <span className=" text-gray-50 mt-1 font-normal text-[13px] ">0</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="size-5 stroke-2 stroke-gray-50 "
        >
          <path d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      </p>
      <img className=" w-9 " src="/uni-logo.png" />
    </div>
  );
}

export default AppHeader;
