import React, {createContext, useContext, ReactNode} from "react";

interface StateContextProps {

}

const StateContext = createContext<StateContextProps>({

});

interface ContextProviderProps {
	children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {


	const contextValue: StateContextProps = {
	};


	return (
		<StateContext.Provider value={contextValue}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = (): StateContextProps => {
	return  useContext(StateContext);
};
