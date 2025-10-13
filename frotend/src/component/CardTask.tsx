import { Check } from 'lucide-react';
import tareas from "./Data"

function CardTask(){
    return(
        <>
        <div className="flex flex-col gap-3 w-[70%] h-120 overflow-y-auto">
            {tareas.map(task => (
                <div className="flex justify-between items-center text-white bg-neutral-800 rounded-lg">
                    <div className="p-0.5 h-[100%] rounded-l-lg" style={{ backgroundColor: task.color }}></div>
                    <div className='flex flex-1 justify-between items-center py-3 px-4'>
                        <div className="flex flex-col gap-1">
                        <span className='font-semibold text-lg' style={{ color: task.color }}>{task.titulo}</span>
                        <span>{task.descripcion}</span>
                    </div>
                    <button className='p-2 border border-neutral-700 rounded-lg text-neutral-700 cursor-pointer'>
                        <Check size={16}/>
                    </button>
                    </div>
                </div>
                
            ))}
        </div>
        </>
    )
}

export default CardTask