import { useState } from 'react';
import './App.css';
import DialPad from './component/DialPad/DialPad';
import Menu from './component/Menu/Menu';

function App() {
  const [showDialPad, setShowDialPad] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const onAddNumber = (text: string) => {
    setPhoneNumber((prev) => prev + text);
  };

  const onDeleteNumber = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const onCallClick = () => {
    if (phoneNumber) {
      setShowDialPad(false);
      setIsCalling(true);
    }
  };

  const onSetMenu = () => {};

  const onReset = () => {
    setPhoneNumber('');
    setShowDialPad(true);
    setIsCalling(false);
  };

  return (
    <>
      <div className='w-screen h-screen flex justify-center items-center bg-blue-950'>
        <div className='bg-white rounded-4xl h-3/4 w-2/6 flex flex-col items-center p-7 xl:p-10 gap-3'>
          <div className='flex gap-2'>
            <button className='bg-slate-300 hover:opacity-80 cursor-pointer px-3 py-2 rounded text-slate-600'>
              Inbound Call
            </button>
            <button
              onClick={onReset}
              className='bg-slate-300 hover:opacity-80 cursor-pointer px-3 py-2 rounded text-slate-600'
            >
              Reset
            </button>
          </div>

          <div className='bg-slate-50 shadow-md p-5 flex flex-col items-center h-[470px] w-[270px]'>
            <div className='max-w-[200px] text-center grid grid-cols-12 place-items-center gap-x-1 text-base lg:text-lg xl:text-2xl my-2 h-6'>
              <span className='col-span-11 truncate overflow-hidden text-ellipsis whitespace-nowrap w-full'>
                {phoneNumber ?? '\u00A0'}
              </span>
              {showDialPad && (
                <div className='h-5 w-5 col-span-1 cursor-pointer'>
                  <img src='/src/assets/icon/DeleteIcon.svg' alt='Delete Icon' onClick={() => onDeleteNumber()} />
                </div>
              )}
            </div>
            {isCalling && <small className='mt-0.5'>Calling...</small>}
            {/* isShowMenu */}
            {/* <Menu onSetMenu={onSetMenu} /> */}

            {showDialPad && (
              <div className='flex flex-col items-center gap-y-8'>
                <DialPad onAddNumber={onAddNumber} />
                <div
                  onClick={() => onCallClick()}
                  className='bg-lime-400 hover:bg-lime-300 shadow-lg rounded-full h-15 w-15 p-0 flex justify-center items-center cursor-pointer'
                >
                  <div className='h-5 w-5'>
                    <img className='' src='/src/assets/icon/PhoneIcon.svg' alt='Phone Icon' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
