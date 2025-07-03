import { useState } from 'react';
const KeyItem = ({ x }) => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`${x.type === 'sol' ? 'bg-purple-200' : 'bg-gray-300'} flex text-base gap-y-2 w-full p-8 rounded-lg flex-col gap-2`}
        >
            <p
                className=" bg-slate-200 font-bold text-md border-2  border-slate-300 rounded-md px-2 py-0.5 flex items-center justify-center "
                key={x.id}
            >
                Address:
                <span className="px-2 font-normal  text-green-600">
                    {x.address}
                </span>
            </p>
            <p
                className="bg-gray-200 border-2  font-bold text-md border-gray-300 cursor-pointer  rounded-md px-2 py-0.5 flex items-center justify-center "
                key={x}
                onClick={() => setOpen(!open)}
            >
                PrivateKey:
                <span className="text-red-600 px-2 ">
                    {open ? x.privateKey : '*'.repeat(x.privateKey.length)}
                </span>
            </p>
        </div>
    );
};

export default KeyItem;
