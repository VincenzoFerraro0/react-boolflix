import { createContext,  useContext } from 'react';


// Creazione del contesto globale
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

    // Valori condivisi nel contesto globale
    const value = {

    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizzato per accedere al contesto globale in altri componenti
const useGlobalContext = () => useContext(GlobalContext);

// Esportazione del GlobalProvider e del custom hook per l'uso nei componenti
export { GlobalProvider, useGlobalContext };