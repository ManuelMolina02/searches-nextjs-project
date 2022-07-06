import { sidebarListProps } from '../../services/types';
import { Button } from './SidebarButtons/SidebarButtons';

import { ToogleSwitchTheme } from './ToogleSwitch';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTheme } from '../../contexts/theme';
import styles from './sidebar.module.scss'

interface sidebarProps {
  countriesList: sidebarListProps[],
  colorsTheme: {
    bg100: string,
    bg200: string,
    bg300: string,
    color: string,
  },
  countrieActive: (id: number) => void,
  selectedCountrie: number,
}

export function Sidebar({ countriesList, countrieActive, colorsTheme, selectedCountrie }: sidebarProps) {
  const { theme, variablesTheme } = useTheme()

  function toogleTheme() {
    if (theme.name === 'light') {
      variablesTheme.setThemeSelected('dark')
    } else {
      variablesTheme.setThemeSelected('light')
    }
  }

  return (
    <>
      <nav className={styles.sidebarContainer} style={{ backgroundColor: colorsTheme.bg300 }}>

        <img src="/images/background.svg" alt="" />


        <span style={{ position: 'relative' }}>
          south america <p>prism</p>
        </span>

        <ToogleSwitchTheme theme={theme.name} action={toogleTheme} />

        <div className={styles.sidebarContent}>
          {
            countriesList.map(countrie => (
              <Button
                countrie={countrie}
                colorsTheme={theme}
                countrieActive={countrieActive}
                selectedCountrie={selectedCountrie}
              />
            ))
          }
        </div>

        <div className={styles.sidebarFooter} style={{ color: colorsTheme.color }}>
          <p>© 2022 Developed by <strong>Manuel Molina</strong></p>

          <div>
            <a href="https://github.com/ManuelMolina02" target="_blank">
              <FaGithub color={theme.neutralColor} />
            </a>

            <a href="https://www.linkedin.com/in/manuel-angel-berger-molina-ba08b3174/" target="_blank">
              <FaLinkedin color={theme.neutralColor} />
            </a>

          </div>
        </div>
      </nav>
    </>
  )
}