// Assume that we are creating a context to switch between themes

// step1: create a file themeProvider.js inside a folder: context 
import React, {useState} from 'react';

export const ThemeContext = React.createContext();  // used inside useContext & provider

export const ThemeProvider = ({children}) => { // used in appContainer

    const {toggle, setToggle} = useState(false);

    const toggleTheme = () => {
        setToggle(!toggle);
    }

    return (
        <ThemeContext.Provider value={{toggle, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// step2: wrap appContainer component where Routes are present(index.js) inside the ThemeProvider...where ReactDOM.render() is present

<ThemeProvider>
    <appCOntainer>
        <Routes />
    </appCOntainer>
</ThemeProvider>


// step3: use the UseContext wherever needed

const {toggle, toggleTheme} = useContext(ThemeContext);

