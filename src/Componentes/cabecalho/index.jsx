import logo from './logo.png'

import styles from './Cabecalho.module.scss'
import Busca from './Busca'

export default function Cabecalho () {
        return (
               <header className={styles.cabecalho}>
                <img src={logo} alt="Logo do Alura Space"/>
                <Busca />
               </header>
        )
}