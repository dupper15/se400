import test, { expect } from '@playwright/test';
import { validateEmail } from '../../utils';

test('Email validation works correctly', () => {
  // Kiểm tra email hợp lệ
  expect(validateEmail('demo@gmail.com')).toBe(true);
  // Kiểm tra email không hợp lệ
  expect(validateEmail('demo@.com')).toBe(false);
  expect(validateEmail('demo.com')).toBe(false);
  expect(validateEmail('demo@com')).toBe(false);
  expect(validateEmail('')).toBe(false);
});
