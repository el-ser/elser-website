import { createContext, useState } from "react";

export const NavigationContext = createContext({
  openSideBar: false,
  setOpenSideBar: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const value = { openSideBar, setOpenSideBar, handleOpenSideBar };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
