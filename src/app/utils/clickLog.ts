import { MouseEventHandler } from 'react';

const clickLogSymbol = Symbol('CLICK_LOG');

export type OnClickWithLog = MouseEventHandler & {
  [clickLogSymbol]: true;
};

export function onClickWithLog(
  eventHandler: MouseEventHandler,
  logger: () => void
): OnClickWithLog {
  const onClickWithLog: OnClickWithLog = (event) => {
    eventHandler(event);
    logger();
  };

  onClickWithLog[clickLogSymbol] = true;

  return onClickWithLog;
}
