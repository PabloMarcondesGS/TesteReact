import React from "react";
import axios from "axios";
import { Modal } from "./styles";

const ModalEdit = ({ id, title, brand, age, price, children, modalEditSetState }) => {
    const NameInputRef = React.createRef();
    const BrandInputRef = React.createRef();
    const AgeInputRef = React.createRef();
    const PriceInputRef = React.createRef();

    function updateCar(e) {
        e.preventDefault();

        if (!NameInputRef.current?.value || !BrandInputRef.current?.value
            || !AgeInputRef.current?.value || !PriceInputRef.current?.value) {
            alert("Complete todos os campos!");
            return;
        }   

        axios.put("http://157.230.213.199:3000/api/cars/"+id, {
            title: NameInputRef.current?.value,
            brand: BrandInputRef.current?.value,
            price: PriceInputRef.current?.value,
            age: AgeInputRef.current?.value,
        }).then(({ data }) => {
            modalEditSetState({
                active: false,
                id: "",
                title: "",
                age: "",
                brand: "",
                price: "price"
            });
        });
    }
    function deleteCarr(idCar) {
        axios.delete(`http://157.230.213.199:3000/api/cars/${idCar}`)
            .then(({ data }) => {
                modalEditSetState({
                    active: false,
                    id: "",
                    title: "",
                    age: "",
                    brand: "",
                    price: "price"
                })
            });
    }

    return (
        <React.Fragment>
            <Modal>
                <div className="line">
                    {children}
                </div>
                <form onSubmit={updateCar}>
                    <h2><span>Nome:</span> <input ref={NameInputRef} type="text" defaultValue={title} /></h2><br />
                    <h2><span>Marca:</span> <input ref={BrandInputRef} type="text" defaultValue={brand} /></h2><br />
                    <h2><span>Ano:</span> <input ref={AgeInputRef} type="number" defaultValue={age} /></h2><br />
                    <h2><span>Preço:</span> <input ref={PriceInputRef} type="text" defaultValue={price} /></h2><br />
                    <button type="submit" className="edit" >Editar</button>
                    <button type="button" onClick={() => deleteCarr(id)}className="delete">Deletar</button>
                </form>
            </Modal>
        </React.Fragment>
    );
};

export default ModalEdit;
