import { countriesListProps } from '../../types';
import { Button } from './SidebarButtons';

import styles from './styles.module.scss'

interface sidebarProps {
  countriesList: countriesListProps[]
  countrieActive: (id: number) => void
}

export function Sidebar({ countriesList, countrieActive }: sidebarProps) {
  return (
    <>
      <nav className={styles.sidebarContainer}>

        <div className={styles.sidebarContent}>
          <span>searches</span>

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
      </nav>
    </>
  )
}