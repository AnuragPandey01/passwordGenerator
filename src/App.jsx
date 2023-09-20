import {useCallback, useEffect, useState} from "react";

function App() {

    const [length, setLength] = useState(15);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    let generatePassword = useCallback(() =>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed){
            str += "1234567890"
            console.log("num")
        }
        if(charAllowed){
            str +="!@#$%^&*()_+"
            console.log("num")
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char)
        }

        setPassword(pass)

    },[length,numAllowed,charAllowed,setPassword])


    useEffect(() => {
        generatePassword()
    }, [length,numAllowed,charAllowed]);



    return (
        <>
            <div className="w-fit m-auto mt-5">
                <div className="bg-white bg-opacity-25 px-8 py-5 rounded-xl text-white">
                    <div className="text-center font-semibold text-lg mb-2">Password Generator</div>
                    <div className="w-fit flex rounded-md overflow-hidden m-auto flex-wrap">
                        <input
                            type="text"
                            value={password}
                            placeholder="password"
                            className="p-2 mx-0 text-blue-700"
                            readOnly
                        />
                        <button className="bg-blue-800 p-2 hover:bg-blue-600">copy</button>
                    </div>
                    <div className="flex mt-5 gap-2 " >
                        <input
                            id="len"
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {setLength(e.target.value)}}
                        />
                        <label htmlFor="len">Length: {length}</label>

                        <input
                            id="num"
                            type="checkbox"
                            defaultChecked={numAllowed}
                            onChange={() => {setNumAllowed(!numAllowed)}}
                        />
                        <label htmlFor="num">Number</label>
                        <input
                            id="char"
                            type="checkbox"
                            defaultChecked={numAllowed}
                            onChange={() => {setCharAllowed(!charAllowed)}}
                        />
                        <label htmlFor="char">Special char</label>
                    </div>
                    <button className="w-full mt-3 rounded-md bg-blue-900 py-1 hover:bg-blue-600" onClick={() => generatePassword()}>Reload</button>
                </div>
            </div>
        </>
    )
}

export default App
