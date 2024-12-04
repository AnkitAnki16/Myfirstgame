
import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import audio1 from "./assets/audio1.mp3";
import audio2 from "./assets/audio2.mp3";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtbdDPquB_zcz4sDC606J3wNEl8Ij-xwU",
  authDomain: "new-37c0c.firebaseapp.com",
  projectId: "new-37c0c",
  storageBucket: "new-37c0c.firebasestorage.app",
  messagingSenderId: "376006562100",
  appId: "1:376006562100:web:d917bc4d00d21347365561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [btn, setBtn] = useState("");
  const [rand1, setRan1] = useState();
  const [rand2, setRan2] = useState();
  const [inputValue, setInputValue] = useState();

  const [name1, setName1] = useState(0);
  const [name, setName] = useState(0);
  const inputRef = useRef();
  const audioRef = useRef(null);
  const audio2Ref = useRef(null);

  let a = 10;
  let b = 10;
  const Calculate = () => {
    let random1 = Math.floor(Math.random() * a);
    let random2 = Math.floor(Math.random() * b);
    setRan1(random1);
    setRan2(random2);
  };

  // ----------------------------input--------------------------
  let rand = rand1 + rand2;
  let sum = parseInt(btn);

  const hello = () => {
    if (sum === rand) {
      audioRef.current.play();

      Calculate();
      setBtn("");
      setName(name + 1);
    }
    if (btn.length >= 4) {
      audio2Ref.current.play();
      setBtn("");
      setName1(name1 + 1);
    }
  };
  hello();

  const btnvalue = (e) => {
    let value = e.target.value;
    setBtn(btn.concat(value));
  };
  const clear = () => {
    setBtn("");
  };
  useEffect(() => {
    Calculate();
    inputRef.current.focus();
  }, []);

  return (
    <div className="flex  items-center flex-col mt-5 ">
      <div className="flex  text-2xl justify-center gap-10">
        <h1 className="text-green-700 font-semibold ">Right
          <p className="text-center">{name}</p>
        </h1>
        <h1 className="text-red-700 font-semibold ">
         Wrong <p className="text-center"> {name1}</p>
        </h1>
      </div>
      {/* ----------------------------box------------------------------- */}

      <div className="min-h-[450px] w-[340px] bg-teal-400 px-5 py-1  rounded-lg flex flex-col items-center relative ">
        <div className=" flex justify-center  text-3xl mt-4 font-semibold text-cyan-950">
          <p>{rand1}</p>+<p>{rand2}</p>
        </div>

        <input
          type="text"
          ref={inputRef}
          value={btn}
          readOnly
          className="mt-5 py-3 border-none outline-none   text-3xl w-24 pl-7 bg-transparent font-semibold caret-transparent text-black"
        />
        <audio ref={audioRef} src={audio1} />
        <audio ref={audio2Ref} src={audio2} />

        {/* --------------------btn----------- */}
        <div className="flex absolute bottom-5">
          <div className="grid grid-rows-3 grid-flow-col gap-4 text-2xl ">
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="1"
            >
              1
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="4"
            >
              4
            </button>

            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="7"
            >
              7
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="2"
            >
              2
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="5"
            >
              5
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="8"
            >
              8
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="3"
            >
              3
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="6"
            >
              6
            </button>
            <button
              className="bg-white size-16 rounded-md shadow-lg shadow-black"
              onClick={btnvalue}
              value="9"
            >
              9
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <button
              className="bg-white w-16  ml-4 shadow-lg shadow-black rounded-md text-2xl h-16"
              onClick={btnvalue}
              value="0"
            >
              0
            </button>
            <button
              className="bg-white w-16  ml-4 shadow-lg shadow-black rounded-md text-2xl  h-36"
              onClick={clear}
            >
              clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
