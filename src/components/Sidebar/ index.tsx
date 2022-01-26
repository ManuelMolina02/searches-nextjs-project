import { Button } from '../Buttons';
import { countrieProps } from '../../types';

import styles from './styles.module.scss'

interface sidebarProps {
  countries: countrieProps[],
  countrieActive: (id: string) => void
}

export function Sidebar({ countries, countrieActive }: sidebarProps) {

  return (
    <>
      <nav className={styles.sidebarContainer}>

        <div className={styles.sidebarContent}>
          <span>searches</span>

          {
            countries.map(countrie => (
              <Button
                key={countrie.id}
                name={countrie.name}
                flag={countrie.url_flag}

                countrieActive={countrieActive}
                id={countrie.id}
              />
            ))
          }

        </div>
      </nav>
    </>
  )
}