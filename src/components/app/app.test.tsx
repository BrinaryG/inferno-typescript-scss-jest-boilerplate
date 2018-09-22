import { getOne } from './app';

test('init', () => {
    expect(getOne()).toBe(1);
});
