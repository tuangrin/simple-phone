import { useState } from 'react';
import './App.css';
import DialPad from './component/DialPad/DialPad';
import Menu from './component/Menu/Menu';

function App() {
  const [showDialPad, setShowDialPad] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowAnswerBtn, setIsShowAnswerBtn] = useState(true);
  const [isShowEndBtn, setIsShowEndBtn] = useState(false);
  const [showHide, setShowHide] = useState(false);

  const onAddNumber = (text: string) => {
    setPhoneNumber((prev) => prev + text);
  };

  const onDeleteNumber = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const onCallClick = () => {
    if (phoneNumber) {
      setIsShowEndBtn(true);
      setShowDialPad(false);
      setIsShowAnswerBtn(false);
      setIsCalling(true);
      setIsShowMenu(true);
      setTimeout(() => {
        setIsCalling(false);
      }, 2000);
    }
  };

  const onSetMenu = () => {
    setIsShowMenu(false);
    setShowDialPad(true);
    setShowHide(true);
  };

  const onReset = () => {
    setPhoneNumber('');
    setShowDialPad(true);
    setIsShowAnswerBtn(true);
    setIsCalling(false);
    setIsShowEndBtn(false);
    setIsShowMenu(false);
  };

  const onHangup = () => {
    onReset();
  };

  const onCloseKeypad = () => {
    setShowHide(false);
    setShowDialPad(false);
    setIsShowMenu(true);
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
            {isShowMenu && <Menu onSetMenu={onSetMenu} />}

            {showDialPad && (
              <div className='flex flex-col items-center gap-y-8'>
                <DialPad onAddNumber={onAddNumber} />
                {isShowAnswerBtn && (
                  <div
                    onClick={() => onCallClick()}
                    className='bg-lime-400 hover:bg-lime-300 shadow-lg rounded-full h-14 w-14 p-0 flex justify-center items-center cursor-pointer'
                  >
                    <div className='h-5 w-5'>
                      <img className='' src='/src/assets/icon/PhoneIcon.svg' alt='Phone Icon' />
                    </div>
                  </div>
                )}
              </div>
            )}
            {isShowEndBtn && (
              <div className='mt-8 grid grid-cols-3 w-full place-items-center'>
                <div
                  onClick={() => onHangup()}
                  className=' col-start-2 bg-rose-600 hover:bg-rose-500 shadow-lg rounded-full h-14 w-14 p-0 flex justify-center items-center cursor-pointer'
                >
                  <div className='h-5 w-5'>
                    <img className='' src='/src/assets/icon/PhoneIcon.svg' alt='Phone Icon' />
                  </div>
                </div>

                {showHide && (
                  <span
                    onClick={() => onCloseKeypad()}
                    className='text-xs text-slate-700 hover:text-slate-500 cursor-pointer'
                  >
                    Hide
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
