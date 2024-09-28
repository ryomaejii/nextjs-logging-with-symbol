import { OnClickWithLog } from '@/app/utils/clickLog';
import { ComponentPropsWithoutRef } from 'react';

type Props = Omit<ComponentPropsWithoutRef<'button'>, 'onClick'> & {
  onClick: OnClickWithLog;
};

export function ButtonWithLog({ children, ...buttonProps }: Props) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
