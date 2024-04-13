import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#~`$%^&*(){}";

    for (let i = 1; i < length; i++) {
      let char_idx = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char_idx);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);



  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);

    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-2xl h-full">
        <h1 className="text-white text-center my-5 text-4xl mb-10">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 m-5">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 m-6">
          <div className="flex items-center gap-x-1 m-2 text-xl">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer px-5"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Lenght : {length}</label>
          </div>

          <div className="flex items-center gap-x-1 m-2 text-xl">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1 m-2 text-xl">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={(e) => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
