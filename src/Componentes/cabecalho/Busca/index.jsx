import React, { useState } from 'react'
import styles from '../Cabecalho.module.scss'
import search from './search.png'
import fotos from '../../galeria/fotos.json'

export default function Busca() {



  return (
        <div className={styles.cabecalho__container}>
        <input className={styles.cabecalho__input} type="search" placeholder="O que você procura?" />
      
        <img  src={search } alt="Ícone de Busca"/>
</div>
  )
}
