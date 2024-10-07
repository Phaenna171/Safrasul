import blogService from "@/services/blog.service";
import { useState } from "react";
import ReactQuill from 'react-quill';

export default function AddBlogModal({ isOpen, onClose }) {
  const [images, setImages] = useState<{ name: string, src: string, file?: File }>({ name: "", src: "" });
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages({
          name: file.name,
          src: reader.result,
          file
        } as any);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!images.src) return alert('Insira uma foto');
    if (!description) return alert('Insira uma descrição');

    const formData = new FormData();

    formData.append('title', e.currentTarget.title.value);
    formData.append(`file`, images.file);
    formData.append('description', description);

    const result = await blogService.register(formData);
    if (result.error) alert(result.message);
    else {
      onClose()
      alert('Blog adicionado')
      location.reload()
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-[#056735] ${isOpen ? "block" : "hidden"
        }`}
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-[700px] max-h-[700px] overflow-y-auto relative">
        {/* Close Button */}
        <button type="button" onClick={onClose} className="absolute top-4 right-4 text-xl">
          ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">Adicionar Novo Post Blog</h2>

        {/* Product Name */}
        <label className="block mb-2">Título:</label>
        <input name="title" required type="text" className="w-full mb-4 p-2 border border-green-600 rounded"
          placeholder="Qualidade que enriquece o agro"
        />


        {/* Long Description */}
        <label className="block mb-2">Descrição:</label>
        <ReactQuill className="text-black" theme="snow" value={description} onChange={(value) => setDescription(value)} />

        <label className="block mb-2">Imagem:</label>
        <div className="flex mb-2 gap-4 items-center">
          {images.src
            ? <img src={images.src} alt='imagem' className="h-12 w-12 object-cover rounded-md" />
            : <div className="h-12 w-12 object-cover rounded-md bg-slate-600" />
          }
          <label className='border border-green-600 rounded w-1/2 p-2 cursor-pointer' htmlFor={`banner`}>{images.name || 'Selecionar foto'}</label>
          <input id={`banner`} hidden
            accept="image/*"
            type="file" placeholder="Item" className="w-1/2 p-2 border border-green-600 rounded"
            onChange={(e) => handleImageChange(e)}
          />
        </div>

        {/* Save and Close Buttons */}
        <div className="flex justify-end gap-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">SALVAR</button>
          <button type="button" onClick={onClose} className="bg-gray-600 text-white px-4 py-2 rounded">FECHAR</button>
        </div>
      </form>
    </div>
  );
}