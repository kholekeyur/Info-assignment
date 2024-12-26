import { calculatePoints } from '../utils/calculatePoints';

describe('Reward Points Calculation', () => {
  test('should return 0 for amounts below 50', () => {
    expect(calculatePoints(30)).toBe(0);
  });

  test('should calculate points correctly for amounts between 50 and 100', () => {
    expect(calculatePoints(70)).toBe(20);
  });

  test('should calculate points correctly for amounts above 100', () => {
    expect(calculatePoints(120)).toBe(90);
  });
});