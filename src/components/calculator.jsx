import { useState } from "react";
const Calculator = () => {
  const [display, setDisplay] = useState('');
  function clr(str) {
  return str.slice(0, -1);
}
  //yes
  
  return (
    <div className="mt-20 md:mt-23 lg:mt-25 min-h-screen flex justify-center items-center z-30">
      <div className="frame w-150 h-220 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-xl">
        <div className="flex justify-center flex-col items-center space-y-4 py-5">
          <input
            type="text"
            readOnly
            value={display}
            className="inp-1 border rounded-lg h-15 w-lg px-4 text-xl"
          />

          <div className="h-190 w-full px-10 flex justify-center items-center mb-4">
            <div className="border h-full rounded-lg w-full grid grid-cols-4 gap-3 p-3">
              <button onClick={()=>setDisplay('')} className="clearbtn border rounded-xl text-2xl p-3 col-span-2">
                Clear
              </button>

              <button onClick={()=>setDisplay(clr(display))} className="deletebtn border rounded-xl text-2xl p-3">
                Delete
              </button>

              <button onClick={()=>setDisplay(`${display}/`)} className="dividebtn border rounded-xl text-2xl p-3">
                /
              </button>

              <button onClick={()=>setDisplay(`${display}7`)} className="sevenbtn border rounded-xl text-2xl p-3">
                7
              </button>

              <button onClick={()=>setDisplay(`${display}8`)} className="eightbtn border rounded-xl text-2xl p-3">
                8
              </button>

              <button onClick={()=>setDisplay(`${display}9`)} className="ninebtn border rounded-xl text-2xl p-3">
                9
              </button>

              <button onClick={()=>setDisplay(`${display}*`)} className="multiplybtn border rounded-xl text-2xl p-3">
                ×
              </button>

              <button onClick={()=>setDisplay(`${display}4`)} className="fourbtn border rounded-xl text-2xl p-3">
                4
              </button>

              <button onClick={()=>setDisplay(`${display}5`)} className="fivebtn border rounded-xl text-2xl p-3">
                5
              </button>

              <button onClick={()=>setDisplay(`${display}6`)} className="sixbtn border rounded-xl text-2xl p-3">
                6
              </button>

              <button onClick={()=>setDisplay(`${display}-`)} className="minusbtn border rounded-xl text-2xl p-3">
                -
              </button>

              <button onClick={()=>setDisplay(`${display}1`)} className="onebtn border rounded-xl text-2xl p-3">
                1
              </button>

              <button onClick={()=>setDisplay(`${display}2`)} className="twobtn border rounded-xl text-2xl p-3">
                2
              </button>

              <button onClick={()=>setDisplay(`${display}3`)} className="threebtn border rounded-xl text-2xl p-3">
                3
              </button>

              <button onClick={()=>setDisplay(`${display}+`)} className="plusbtn border rounded-xl text-2xl p-3">
                +
              </button>

              <button onClick={()=>setDisplay(`${display}0`)} className="zerobtn border rounded-xl text-2xl p-3 col-span-2">
                0
              </button>

              <button onClick={()=>setDisplay(`${display}.`)} className="dotbtn border rounded-xl text-2xl p-3">
                .
              </button>

              <button onClick={()=>setDisplay(eval(string(display)))} className="equalbtn border rounded-xl text-2xl p-3">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;