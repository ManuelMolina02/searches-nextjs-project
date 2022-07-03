import styles from './styles.module.scss'
import { Svg } from '../Svg'

export function ToogleSwitchTheme({ theme, action }) {
  return (
    <>
      <div
        className={styles.toggleSwitch}
        onClick={() => action()}
        style={{ backgroundColor: theme === 'dark' ? '#28292c' : '#d8dbe0' }}
      >
        <Svg stylings={{ left: theme === 'dark' ? '0px' : '8px' }} />
      </div>

    </>
  )
}