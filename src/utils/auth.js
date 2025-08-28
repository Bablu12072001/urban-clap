export const loginUser = (userData) => {
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  
  export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  
  export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };
  
  export const getRole = () => {
    const user = getCurrentUser();
    return user ? user.role : null;
  };
  