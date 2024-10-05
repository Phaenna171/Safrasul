import { useState } from "react";

export default function EditProductModal({ isOpen, onClose, product }) {
  const [tableItems, setTableItems] = useState([{ item: "", description: "" }]);

  const handleAddTableItem = () => {
    setTableItems([...tableItems, { item: "", description: "" }]);
  };

  const handleRemoveTableItem = (index) => {
    const newTableItems = tableItems.filter((_, i) => i !== index);
    setTableItems(newTableItems);
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg p-6 w-[600px] relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Adicionar Novo Produto</h2>

        {/* Product Name */}
        <label className="block mb-2">Nome do Produto:</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Qualidade que enriquece o agro"
        />

        {/* Short Description */}
        <label className="block mb-2">Descrição curta:</label>
        <input
          type="text"
          className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Aqui vai ficar todo o texto auxiliar."
        />

        {/* File Uploads */}
        <label className="block mb-2">Carrossel de fotos:</label>
        <input
          type="file"
          className="w-full mb-4 p-2 border border-green-600 rounded"
        />
        <button className="text-green-600 font-bold mb-4">
          + Adicionar mais fotos
        </button>

        {/* Long Description */}
        <label className="block mb-2">Descrição Completa:</label>
        <textarea
          className="w-full mb-4 p-2 border border-green-600 rounded h-24"
          placeholder="Escreva aqui a descrição completa do produto."
        ></textarea>

        {/* Table Items */}
        <h3 className="font-bold mb-2">Título da tabela: MORFOLOGIA</h3>
        {tableItems.map((item, index) => (
          <div className="flex mb-2 gap-4" key={index}>
            <input
              type="text"
              placeholder="Item"
              className="w-1/2 p-2 border border-green-600 rounded"
              value={item.item}
              onChange={(e) =>
                setTableItems(
                  tableItems.map((ti, i) =>
                    i === index ? { ...ti, item: e.target.value } : ti
                  )
                )
              }
            />
            <input
              type="text"
              placeholder="Descrição"
              className="w-1/2 p-2 border border-green-600 rounded"
              value={item.description}
              onChange={(e) =>
                setTableItems(
                  tableItems.map((ti, i) =>
                    i === index ? { ...ti, description: e.target.value } : ti
                  )
                )
              }
            />
            <button
              onClick={() => handleRemoveTableItem(index)}
              className="text-red-600"
            >
              Remover
            </button>
          </div>
        ))}
        <button
          onClick={handleAddTableItem}
          className="text-green-600 font-bold mb-4"
        >
          + Adicionar mais itens
        </button>

        {/* Save and Close Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            SALVAR
          </button>
          <button onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">
            FECHAR
          </button>
        </div>
      </div>
    </div>
  );
}