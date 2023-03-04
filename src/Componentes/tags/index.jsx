import React from 'react'
import styles from './tags.module.scss'
import fotos from '../galeria/fotos.json'

export default function Tags({tags, filtro, setar}) {
  return (
    <div className={styles.tags}>
        <p>Filtre por tags:</p>
                <ul className={styles.tags__lista}>
                        {tags.map(tag => {
                          return <li onClick={() => filtro(tag)} key={tag}>{tag}</li>
                        })}
                        <li onClick={()=> setar(fotos)}>Todas</li>
                </ul>
    </div>
  )
}
