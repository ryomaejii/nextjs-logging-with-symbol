'use client';

import { ButtonWithLog } from '@/app/components/ButtonWithLog';
import { Button } from '@/app/components/Buttton';
import { onClickWithLog } from '@/app/utils/clickLog';
import { MouseEventHandler, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const onClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setCount(count + 1);
    console.log('Button clicked'); // 手動でログを出力する
  };

  const onClickButtonWithLog = onClickWithLog(
    () => {
      setCount(count + 1);
    },
    () => {
      console.log('ButtonWithLog clicked');
    }
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <p className="text-2xl font-bold">Count: {count}</p>
      <div className="flex gap-4">
        <Button onClick={onClickButton}>Normal Button</Button>
        {/* エラーになる
        <ButtonWithLog onClick={onClickButton}>Button with Log</ButtonWithLog> */}
        <ButtonWithLog onClick={onClickButtonWithLog}>
          Button With Log
        </ButtonWithLog>
      </div>
    </div>
  );
}
