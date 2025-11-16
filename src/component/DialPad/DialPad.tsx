import { useState } from 'react';

interface ChildProps {
  onAddNumber: (phoneNumber: string) => void;
}

const DialPad: React.FC<ChildProps> = ({ onAddNumber }) => {
  const [numpad, setNumpad] = useState([
    {
      text: '1',
      subtext: '',
    },
    {
      text: '2',
      subtext: 'ABC',
    },
    {
      text: '3',
      subtext: 'DEF',
    },
    {
      text: '4',
      subtext: 'GHI',
    },
    {
      text: '5',
      subtext: 'JKL',
    },
    {
      text: '6',
      subtext: 'MNO',
    },
    {
      text: '7',
      subtext: 'PQRS',
    },
    {
      text: '8',
      subtext: 'TUV',
    },
    {
      text: '9',
      subtext: 'WXYZ',
    },
    {
      text: '*',
      subtext: '',
    },
    {
      text: '0',
      subtext: '+',
    },
    {
      text: '#',
      subtext: '',
    },
  ]);

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <>
      <div className='rounded-lg flex flex-col items-center gap-3'>
        {/* <div className='max-w-[200px] text-center grid grid-cols-12 place-items-center gap-x-1 text-base lg:text-lg xl:text-2xl my-2 h-6'>
          <span className='col-span-11 truncate overflow-hidden text-ellipsis whitespace-nowrap w-full'>
            {phoneNumber ?? '\u00A0'}
          </span>
          <div className='h-5 w-5 col-span-1 cursor-pointer'>
            <img src='/src/assets/icon/DeleteIcon.svg' alt='Delete Icon' onClick={() => onDeleteNumber()} />
          </div>
        </div> */}

        <div className='grid grid-cols-3 gap-3'>
          {numpad.map((e, i) => (
            <div
              key={i}
              className='bg-white hover:bg-slate-100 hover:text-slate-800 drop-shadow-lg
 gap-y-1 rounded-full aspect-square p-2 flex flex-col justify-center items-center cursor-pointer'
              onClick={() => onAddNumber(e.text)}
            >
              <span className='text-base'>{e.text}</span>
              <span className='text-xs'>{e.subtext}</span>
            </div>
          ))}
        </div>
        {/* <div
          onClick={() => onMakeCall()}
          className='bg-lime-400 hover:bg-lime-300 mt-3 shadow-lg rounded-full h-15 w-15 p-0 flex justify-center items-center cursor-pointer'
        >
          <div className='h-5 w-5'>
            <img className='' src='/src/assets/icon/PhoneIcon.svg' alt='Phone Icon' />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default DialPad;
