const status = "status";

export const login = () => {
  localStorage.setItem(status, "login");
};

export const admin = () => {
  localStorage.setItem(status, "admin");
};

export const logout = () => {
  localStorage.removeItem(status);
};

export const isLogin = () => {
  if (localStorage.getItem(status)) {
    return true;
  }

  return false;
};
