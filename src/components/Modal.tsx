import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-40">
      <div className="flex gap-5">
        <button
          type="button"
          className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          Open First Modal
        </button>
        <button
          type="button"
          className="border border-blue-100 text-gray-800 active:bg-black hover:bg-black hover:text-white flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
          onClick={() => setShowSecondModal(true)}
        >
          Open Second Modal
        </button>
      </div>
      {/* First Modal 表示 */}
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-72 rounded-lg shadow-xl h-auto p-2">
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            First Modal success!!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold hover:bg-stone-700"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : null}

      {/* secont Modal　表示 */}
      {showSecondModal ? (
        <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2 bg-slate-300">
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            Second Modal success!!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold hover:bg-slate-600"
            onClick={() => setShowSecondModal(false)}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
