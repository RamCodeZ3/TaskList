import { X } from "lucide-react";

function DialogTask(){
    return(
        <>
        <div className="w-[100%] h-[100%] flex justify-center items-center z-100 bg-black/50 absolute">
            <dialog open className="absolute bg-neutral-800 p-2 text-white w-[50%]">
                <div className="flex justify-between items-center">
                    <span>
                    Crea una nueva tarea
                    </span>
                    <button className="flex gap-1 justify-center items-center bg-blue-900 p-2 rounded-lg font-semibold cursor-pointer ">
                        <X/>
                    </button>
                </div>
                <div>
                    inp
                </div>
            </dialog>
        </div>
        </>
    )
}

export default DialogTask;