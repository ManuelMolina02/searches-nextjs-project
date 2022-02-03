import { sidebarListProps } from '../../services/types';
import { Button } from './SidebarButtons/SidebarButtons';

import styles from './sidebar.module.scss'
import { FaGithub, FaLinkedin, FaRocket } from 'react-icons/fa'

interface sidebarProps {
  countriesList: sidebarListProps[]
  countrieActive: (id: number) => void
}

export function Sidebar({ countriesList, countrieActive }: sidebarProps) {
  return (
    <>
      <nav className={styles.sidebarContainer}>

        <span>south american <p>prism</p></span>

        <div className={styles.sidebarContent}>

          {
            countriesList.map(countrie => (
              <Button
                key={countrie.id}
                name={countrie.name}
                flag={countrie.flag}

                id={countrie.id}
                countrieActive={countrieActive}
              />
            ))
          }

        </div>

        <div className={styles.sidebarFooter}>
          <p>© 2022 Developed by Manuel Molina</p>

          <div>
            <a href="https://www.linkedin.com/in/manuel-angel-berger-molina-ba08b3174/" target="_blank">
              <FaGithub />
            </a>

            <a href="https://github.com/ManuelMolina02" target="_blank">
              <FaLinkedin />
            </a>

          </div>
        </div>
      </nav>
    </>
  )
}