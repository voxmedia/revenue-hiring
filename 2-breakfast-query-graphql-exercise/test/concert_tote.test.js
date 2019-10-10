const ConcertTote = require('../lib/concert_tote');

test('Tote is here', () => {
  const ct = new ConcertTote();
  expect(ct.get({ key: 'what?' })).toBe(undefined);
});

test('test saving and getting', () => {
  const ct = new ConcertTote();
  ct.set({ key: 'foods', value: ['banana', 'plumb'] });
  expect(ct.get({ key: 'foods' })).toEqual(['banana', 'plumb']);
});

test('Comes loaded with a bunch of fun values to the foodItems key', () => {
  const ct = new ConcertTote();
  expect(ct.get({ key: 'foodItems' }).length).toBeGreaterThan(3);
});

test('Contains an egg', () => {
  const ct = new ConcertTote();
  expect(
    ct.get({ key: 'foodItems' }).filter(f => f.name === 'Eggs').length
  ).toEqual(1);
});

test('Can find all the keys available', () => {
  const ct = new ConcertTote();
  ct.set({ key: 'favoriteFood', value: 'Mayonnaise popsicle' });
  expect(ct.keys()).toEqual(['foodItems', 'favoriteFood']);
});

test('can use update to mutate a key with a callback', () => {
  const ct = new ConcertTote();
  ct.set({ key: 'leastFavoriteFood', value: 'toothepaste' });
  expect(ct.get({ key: 'leastFavoriteFood' })).toEqual('toothepaste');

  ct.update({ key: 'leastFavoriteFood', by: item => 'kale' });
  expect(ct.get({ key: 'leastFavoriteFood' })).toEqual('kale');
});
