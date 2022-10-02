import { createContext, useState } from "react"

export const UiContext = createContext();

export const UiProvider = ({ children }) => {

    const [hiddenMenu, setHiddenMenu] = useState(false);

    const showMenu = () => {
        setHiddenMenu(false);
    }

    const hideMenu = () => {
        setHiddenMenu(true);
    }

  return (
    <UiContext.Provider value={{
        hiddenMenu,
        showMenu,
        hideMenu
    }}>
        {children}
    </UiContext.Provider>
  )
}
