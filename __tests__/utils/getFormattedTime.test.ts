import getFormattedTime from 'utils/getFormattedTime';

test('minutes >= 10 and seconds >= 10', (): void => {
  expect(getFormattedTime(600 + 10)).toEqual('10:10');
});

test('minutes >= 10 and seconds < 10', (): void => {
  expect(getFormattedTime(600 + 9)).toEqual('10:09');
});

test('minutes < 10 and seconds < 10', (): void => {
  expect(getFormattedTime(540 + 9)).toEqual('09:09');
});

test('minutes < 10 and seconds >= 10', (): void => {
  expect(getFormattedTime(540 + 10)).toEqual('09:10');
});
