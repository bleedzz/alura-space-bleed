import React from 'react'
import facebook from 'assets/facebook.svg'
import instagram from 'assets/instagram.svg'
import twitter from 'assets/twitter.svg'
import styles from './rodape.module.scss'

export default function Rodape() {
        return (
                <footer className={styles.rodape}>
                        <div className={styles.rodape__icones}>
                                <a href='https://www.facebook.com/AluraCursosOnline/'
                                target="_blank"
                                rel="noreferrer"
                                >
                                        <img src={facebook} alt="facebook" />
                                </a>
                                <a href='https://www.instagram.com/raphael.fattori/'
                                target="_blank"
                                rel="noreferrer"
                                >
                                        <img src={instagram} alt="instagram" />
                                </a>
                                <a href='https://twitter.com/bleed_zz'
                                target="_blank"
                                rel="noreferrer"
                                >
                                        <img src={twitter} alt="twitter" />
                                </a>

                        </div>
                        <p>Desenvolvido por Raphael M. Fattori</p>


                </footer>

        )
}
