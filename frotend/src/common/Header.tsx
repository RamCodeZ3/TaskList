import { BookCheck, Plus } from 'lucide-react';
import DialogTask from '../component/DialogTask';
import { useState } from 'react';

function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <DialogTask 
        open={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />

      <div className="flex items-center justify-center w-full bg-neutral-900 text-white py-4">
        <header className="flex justify-between w-[70%] py-2 px-4 border border-blue-900 rounded-lg">
          <div className="flex gap-1 justify-center items-center font-semibold cursor-pointer">
            <BookCheck />
            <span>To do</span>
          </div>

          <button
            className="flex gap-1 justify-center items-center bg-blue-900 p-2 rounded-lg font-semibold cursor-pointer"
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus />
          </button>
        </header>
      </div>
    </>
  );
}

export default Header;
