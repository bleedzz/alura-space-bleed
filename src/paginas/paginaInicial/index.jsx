import banner from '../../assets/banner.png'
import Cabecalho from "Componentes/cabecalho";
import Galeria from "Componentes/galeria";
import Menu from "Componentes/menu";
import Populares from "Componentes/Populares";
import Rodape from "Componentes/rodape";

import styles from './paginaInicial.module.scss'

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
