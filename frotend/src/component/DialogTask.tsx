import { X } from "lucide-react";

interface DialogTaskProps {
  open: boolean;
  onClose: () => void;
}

export default function DialogTask({ open, onClose }: DialogTaskProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-neutral-800 p-4 text-white w-[90%] max-w-lg rounded-lg shadow-lg transition-all transform">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Crea una nueva tarea</span>
          <button
            onClick={onClose}
            className="flex gap-1 justify-center items-center bg-blue-900 hover:bg-blue-800 p-2 rounded-lg font-semibold cursor-pointer"
          >
            <X />
          </button>
        </div>

        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Título de la tarea"
            className="p-2 rounded bg-neutral-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Descripción de la tarea"
            className="p-2 rounded bg-neutral-700 text-white outline-none focus:ring-2 focus:ring-blue-500 resize-none h-34"
          ></textarea>
          <button
            type="submit"
            className="flex gap-1 justify-center items-center bg-blue-900 hover:bg-blue-800 p-2 rounded-lg font-semibold cursor-pointer"
          >
            Añadir tarea
          </button>
        </form>
      </div>
    </div>
  );
}
