import { createContext, useState } from "react";

export const NavigationContext = createContext({
  openSideBar: false,
  setOpenSideBar: () => {},
  PATH_LIST: [],
});

export const NavigationProvider = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  const PATH_LIST = [
    {
      to: "/about",
      text: "About",
    },
    {
      to: "/blogs",
      text: "Blogs",
    },
    {
      to: "/experience",
      text: "Experience",
    },
  ];

  const value = { openSideBar, handleOpenSideBar, PATH_LIST };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};
