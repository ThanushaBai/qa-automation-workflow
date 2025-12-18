function validateLogin(username, password) {
  if (!username || !password) {
    return false;
  }
  return username === "admin" && password === "admin123";
}

module.exports = { validateLogin };
