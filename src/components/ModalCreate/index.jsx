import React from "react";
import axios from "axios";
import { Modal } from "./styles";

const ModalCreate = ({ children, modalCreateSetState }) => {
    const NameInputRef = React.createRef();
    const BrandInputRef = React.createRef();
    const AgeInputRef = React.createRef();
    const PriceInputRef = React.createRef();

    function createCar(e) {
        e.preventDefault();

        if (!NameInputRef.current?.value || !BrandInputRef.current?.value
            || !AgeInputRef.current?.value || !PriceInputRef.current?.value) {
            alert("Complete todos os campos!");
            return;
        }   

        axios.post("http://157.230.213.199:3000/api/cars", {
            title: NameInputRef.current?.value,
            brand: BrandInputRef.current?.value,
            price: PriceInputRef.current?.value,
            age: AgeInputRef.current?.value,
        })
            .then(({ data }) => {
                modalCreateSetState({active: false});
            });
    }

    return (
        <React.Fragment>
            <Modal>
                <div className="line">
                    {children}
                </div>
                <form onSubmit={createCar}>
                    <div className="form_row">
                        <div className="input--group">
                            <label htmlFor="name">Nome</label>
                            <input ref={NameInputRef} type="text" id="name" placeholder="Nome do carro"/>
                        </div>
                        <div className="input--group">
                            <label htmlFor="brand">Marca</label>
                            <input ref={BrandInputRef} type="text" id="brand" placeholder="Marca do carro"/>
                        </div>
                    </div>

                    <div style={{marginTop: 18}} className="form_row">
                        <div className="input--group">
                            <label htmlFor="age">Ano</label>
                            <input ref={AgeInputRef} type="number" id="age" placeholder="Ano do carro" defaultValue={2000}/>
                        </div>
                        <div className="input--group">
                            <label htmlFor="price">Valor</label>
                            <input ref={PriceInputRef} type="text" id="price" placeholder="Valor do carro"/>
                        </div>
                    </div>

                    <button className="create" >Criar carro</button>
                </form>
            </Modal>
        </React.Fragment>
    );
};

export default ModalCreate;
