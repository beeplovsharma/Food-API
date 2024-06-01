import { useState } from "react";
import "./App.css";
import useFetch from "./customHooks/useFetch";
function App() {
  const [cat, setCat] = useState("")
  const [foods] = useFetch(`/api/foods?search=${cat}`);
  return (
    <>
      <div className="w-full h-screen bg-zinc-700">
        <div className="max-w-4xl flex flex-col h-full mx-auto p-4">
          <div className="w-full">
            <input
              placeholder="Enter Category"
              type="text"
              onChange={(e)=>setCat(e.target.value)}
              value={cat}
              className="p-2 text-white rounded-md w-full bg-zinc-500"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {foods.map((item, i) => (
              <div key={i} className="card flex flex-col gap-2 bg-zinc-600 p-6 rounded-xl">
                <h1 className="text-white text-center">{item.name}</h1>
                <button className="px-2 py-1 bg-zinc-400 text-white rounded-xl">
                  {item.category}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
