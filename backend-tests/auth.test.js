const { validateLogin } = require('../backend/auth');

describe('Login Validation Unit Tests', () => {

  test('Valid credentials should return true', () => {
    expect(validateLogin('admin', 'admin123')).toBe(true);
  });

  test('Invalid credentials should return false', () => {
    expect(validateLogin('user', 'pass')).toBe(false);
  });

  test('Empty username should return false', () => {
    expect(validateLogin('', 'admin123')).toBe(false);
  });

  test('Empty password should return false', () => {
    expect(validateLogin('admin', '')).toBe(false);
  });

});
