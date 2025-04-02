import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

export default function App() {
  const [rows, setRows] = useState([
    { sign: "+", value: "0", disabled: false },
  ]);

  const addRow = () => {
    setRows([...rows, { sign: "+", value: "0", disabled: false }]);
  };

  const deleteRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const toggleDisableRow = (index) => {
    const updatedRows = [...rows];
    updatedRows[index].disabled = !updatedRows[index].disabled;
    setRows(updatedRows);
  };

  const handleValueChange = (index, value) => {
    const updatedRows = [...rows];
    updatedRows[index].value = value;
    setRows(updatedRows);
  };

  const handleSignChange = (index, sign) => {
    const updatedRows = [...rows];
    updatedRows[index].sign = sign;
    setRows(updatedRows);
  };

  const calculateResult = () => {
    return rows.reduce((total, row) => {
      if (row.disabled || row.value === "") return total;

      const number = parseInt(row.value) || 0;
      return row.sign === "+" ? total + number : total - number;
    }, 0);
  };

  return (
    <>
      <h1 className="text-center text-4xl md:text-5xl font-semibold">
        Project Coolshop
      </h1>
      <div className="relative mt-20 mx-6">
        <Button onClick={addRow}>Add Row</Button>

        <div className="relative mt-5 border-2 border-blue-500 rounded-lg p-4">
          {rows.map((row, index) => (
            <div key={index} className={`relative flex w-full gap-2 mb-2 `}>
              <select
                value={row.sign}
                disabled={row.disabled}
                onChange={(e) => handleSignChange(index, e.target.value)}
                className={`border p-2 rounded-lg ${
                  row.disabled ? "opacity-40" : ""
                }`}
              >
                <option value="+">+</option>
                <option value="-">-</option>
              </select>

              <input
                type="number"
                placeholder="0"
                min={0}
                value={row.value}
                onChange={(e) => handleValueChange(index, e.target.value)}
                disabled={row.disabled}
                className={`border p-2 rounded-lg flex-grow min-w-5 ${
                  row.disabled ? "opacity-40" : ""
                }`}
              />

              <Button onClick={() => deleteRow(index)}>Delete</Button>

              <Button onClick={() => toggleDisableRow(index)}>
                {row.disabled ? "Enable" : "Disable"}
              </Button>
            </div>
          ))}

          <div className="mt-4 p-2 bg-gray-100 rounded-lg text-lg font-bold">
            Result: {calculateResult()}
          </div>
        </div>
      </div>
    </>
  );
}
