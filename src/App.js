import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState('magenta');
    return (
        <ThemeContext.Provider value={{ backgroundColor: theme }}>
            counter
            <Counter initialCounter={0} />
            counter hooks
            <CounterHooks initialCounter={0} />
            <button
                onClick={() =>
                    setTheme(prevTheme => {
                        return prevTheme === 'magenta' ? 'blue' : 'magenta';
                    })
                }
            >
                toggle theme
            </button>
        </ThemeContext.Provider>
    );
}

export default App;
