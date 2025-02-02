import { Link } from 'react-router-dom'
import styles from './Video.module.css'
import { MdDeleteForever, MdOutlineEdit, MdReadMore } from "react-icons/md"
import { useState } from 'react';

function Video({ video, categoria, aoDeletar, aoEditar, aoVerVideo }) {

    const [topoPagina, setTopoPagina] = useState(false)

    const irAoTopo = () => {
        setTopoPagina(true)
        window.scrollTo(0, 0)
    };

    return (
        <div className={styles.container} style={{ borderColor: categoria.cor }}>
            <div className={styles.imagem}>
                <img className={styles.imagemItem} src={video.imagem} alt={video.titulo} />
                <div onClick={() => aoVerVideo(video)} className={styles.divImg} style={{ color: categoria.cor }} ></div>
            </div>
            <div className={styles.opcoes}>
                <div className={styles.item_opcao}
                    onClick={() => aoDeletar(video.id)}
                >
                    <MdDeleteForever />
                    <p>DELETAR</p>
                </div>
                <div className={styles.item_opcao}
                    onClick={() => {aoEditar(video); irAoTopo();}} 
                
                >
                    <MdOutlineEdit />
                    <p>EDITAR</p>
                </div>

                <Link to={`/${video.id}`} className={styles.item_opcao}>
                    <MdReadMore />
                    <p>SOBRE</p>
                </Link>
            </div>
        </div>
    )
}

export default Video