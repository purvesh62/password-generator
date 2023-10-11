import { useEffect, useState, useRef } from "react";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const passwordRef = useRef(null);

  const generatePassword = () => {
    let pass = "";
    let characterList =~ "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characterList += "0123456789";
    if (includeSymbols) characterList += "!@#$%^&*()_+-={}[]";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length + 1);
      pass += characterList[randomIndex];
    }

    setPassword(pass);
  };

  const handleCopyPassword = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeSymbols, includeNumbers]);

  return (
    <>
      <div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Password"
            className="input input-bordered bg-neutral text-primary-content lg:w-96 md:w-64"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className="btn btn-primary"
            onClick={() => handleCopyPassword()}>
            Copy
          </button>
        </div>
      </div>

      <div className="flex gap-5 p-5">
        <label className="label cursor-pointer">
          <span className="label-text mr-2 text-primary-content">Length</span>
          <input
            type="range"
            min={8}
            max={24}
            value={length}
            name="length"
            className="range range-primary range-sm "
            onChange={(e) => setLength(e.target.value)}
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text mr-2 text-primary-content">Symbols</span>
          <input
            type="checkbox"
            checked={true ? includeSymbols : false}
            onChange={() => setIncludeSymbols((prev) => !prev)}
            className="checkbox checkbox-primary"
          />
        </label>

        <label className="label cursor-pointer">
          <span className="label-text mr-2 text-primary-content">Numbers</span>
          <input
            type="checkbox"
            name="numbersAllowed"
            checked={true ? includeNumbers : false}
            onChange={() => setIncludeNumbers((prev) => !prev)}
            className="checkbox checkbox-primary "
          />
        </label>
      </div>
    </>
  );
}

export default PasswordGenerator;
