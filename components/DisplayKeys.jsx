import { useMnemonic } from '@/store/context';
import Choose from './Choose';
import KeyItem from './KeyItem';
const DisplayKeys = () => {
    const { keys, seed } = useMnemonic();
    return (
        <div className=" mt-8 py-2 flex flex-col items-center  h-fit ">
            {!seed && (
                <h1 className="font-medium text-xl  animate-bounce">
                    {' '}
                    Not Generated at Click on the top right button to generate
                </h1>
            )}
            {seed && <Choose />}
            <div className="flex  h-[60vh] w-full overflow-y-scroll justify-center mt-4  py-4 rounded-xl flex-col items-center">
                <div className="flex h-full flex-col gap-2 ">
                    {keys.length !== 0 &&
                        keys.map((x) => <KeyItem key={x.id} x={x} />)}
                </div>
            </div>
        </div>
    );
};

export default DisplayKeys;
