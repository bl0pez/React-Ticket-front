import { useContext, useEffect } from 'react';
import { UiContext } from '../context/UiContext';

export const useHideMenu = ( hidde ) => {
  
    const { showMenu, hideMenu } = useContext(UiContext);

    useEffect(() => {
      
        if (hidde) {
            hideMenu();
        } else {
            showMenu();
        }

    }, [hidde, showMenu, hideMenu]);
}
