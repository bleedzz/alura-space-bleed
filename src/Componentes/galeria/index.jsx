import React, { useState } from 'react'
import Tags from '../tags'
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import Cards from './cards'
import Busca from 'Componentes/cabecalho/Busca'

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]
  const nomes = [... new Set (fotos.map((valor) => valor.titulo))]
 

  
  const filtro = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag
    })
    setItens (novasFotos);
  }

    
  

  return (
    
    <section className={styles.galeria}>
      
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtro={filtro} setar={setItens}/>
      <Cards itens={itens} styles={styles} />
    </section>
  )
}
