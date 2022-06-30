import styles from './styles.module.scss'
import { Svg } from '../Svg'

export function ToogleSwitchTheme({ theme, action }) {
  return (
    <>
      <div
        className={styles.toggleSwitch}
        onClick={() => action()}
        style={{ backgroundColor: theme === 'dark' ? '#d8dbe0' : '#28292c' }}
      >

        <Svg stylings={{ left: theme === 'dark' ? '0px' : '12px' }} />


      </div>

    </>
  )
}