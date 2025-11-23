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

  return (
    <>
      <div className='rounded-lg flex flex-col items-center gap-3'>
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
      </div>
    </>
  );
};

export default DialPad;
