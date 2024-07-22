"use client"
import React, { useState } from 'react';
import styles from "../page.module.css";
import Todo from './Todo';

const Form = () => {
    const [item, setItem] = useState({
        nombre: '',
        marca: '',
        cantidad: '',
        precio: ''
    });
    const [items, setItems] = useState([
        { nombre: 'Leche', marca: 'Marca A', cantidad: '1 litro', precio: '2.50' },
        { nombre: 'Pan', marca: 'Marca B', cantidad: '1 unidad', precio: '1.20' }
    ]);

    const handleChange = e => {
        const { name, value } = e.target;
        setItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleClick = e => {
        e.preventDefault();
        if (!item.nombre || !item.marca || !item.cantidad || !item.precio) {
            alert('Por favor completa todos los campos');
            return;
        }
        setItems([...items, item]);
        setItem({ nombre: '', marca: '', cantidad: '', precio: '' }); // Limpiar el formulario después de agregar
    };

    const deleteItem = index => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre del Producto:</label><br />
                <input className={styles.form_input} type="text" name='nombre' value={item.nombre} onChange={handleChange} /><br />

                <label>Marca:</label><br />
                <input className={styles.form_input} type="text" name='marca' value={item.marca} onChange={handleChange} /><br />

                <label>Cantidad:</label><br />
                <input className={styles.form_input} type="text" name='cantidad' value={item.cantidad} onChange={handleChange} /><br />

                <label>Precio:</label><br />
                <input className={styles.form_input} type="text" name='precio' value={item.precio} onChange={handleChange} /><br />

                <button className={styles.form_button} onClick={handleClick}>Agregar</button>
            </form>

            {
                items.map((value, index) => (
                    <Todo
                        key={index}
                        index={index}
                        item={value}
                        deleteItem={deleteItem}
                    />
                ))
            }
        </>
    );
};

export default Form;
