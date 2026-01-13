'use client';
import {useState} from "react";
import Modal from "./modal";

const ModalTrigger = ({mobile}) => {
    const [open, setOpen] = useState(false);
    return (
       <>
           <button
                 className={mobile ? "py-5 px-6 text-center font-medium text-xs block w-full bg-brand hover:bg-brand-yellow text-brand-yellow hover:text-brand transition-all rounded-2xl" : "py-5 px-6 bg-brand max-lg:text-center max-lg:font-medium max-lg:text-xs max-lg:w-full hover:bg-brand-yellow text-brand-yellow hover:text-brand transition-all rounded-2xl cursor-pointer"}
                 onClick={()=>setOpen(true)}>CONNECT</button>

           {open && ( <Modal onClose={()=>setOpen(false)} />)}
       </>
    );
};

export default ModalTrigger;