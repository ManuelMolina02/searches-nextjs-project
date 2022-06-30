/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { themes } from '../styles/theme';

//definindo uma interface para o contexto
interface DefineThemeProps {
  children: ReactNode
}

//criando um contexto
export const DefineThemeContext = createContext({} as any);

//criando um provider
export function DefineThemeProvider({ children }: DefineThemeProps) {

  //variaveis de itens selecionados
  const [themeSelected, setThemeSelected] = useState('dark');

  useEffect(() => {
    let theme = localStorage.getItem('south-america-prism-theme');


    setThemeSelected(theme === null ? 'dark' : theme)



  }, [])

  function findItem(data: Array<any>, key: string) {
    return data.find(item => item.name === key)
  }

  //variaveis armazenam os itens ativos
  const [theme, setTheme] = useState({})


  //funções que definem o item ativo
  const newTheme = findItem(themes.theme, themeSelected)


  useEffect(() => {
    setTheme(newTheme)
  }, [themeSelected])


  //preparando variaveis utilizadas
  const variablesTheme = {
    setThemeSelected,
  }

  return (
    <DefineThemeContext.Provider value={{ variablesTheme, theme }
    }>
      {children}
    </DefineThemeContext.Provider >
  );
}

export function useTheme() {
  const context = useContext(DefineThemeContext);
  return context
}