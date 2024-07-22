import React from 'react';
import styles from "../page.module.css";

const Todo = ({ item, index, deleteItem }) => {
    return (
        <div className={styles.list}>
            <h3>{item.nombre}</h3>
            <p>Marca: {item.marca}</p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: {item.precio}</p>
            <button className={styles.btn_delete} onClick={() => deleteItem(index)}>X</button>
        </div>
    );
};

export default Todo;
