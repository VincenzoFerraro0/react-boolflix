import { createContext, useContext } from "react";

const CardContext = createContext();



const CardProvider = ({ children }) => {



    // Valori condivisi nel contesto 
    const value = {

    };

    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>
    );

}



// Hook personalizzato per accedere al contesto globale nei componenti
const useCardContext = () => useContext(CardContext);

// Esportazione del CardProvider e del custom hook per l'uso nei componenti
export { CardProvider, useCardContext };
