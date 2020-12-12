import React, { useState } from "react";
import axios from "axios";

import { Main, Container } from "./styles";
import ModalEdit from "../components/ModalEdit";
import ModalCreate from "../components/ModalCreate";

const Home = () => {
    const [cars, setCars] = useState([]);
    const [modalEdit, setModalEdit] = useState({
        active: false,
        id: "",
        title: "",
        age: "",
        brand: "",
        price: 0
    });
    const [modalCreate, setModalCreate] = useState({active: false});

    axios.get("http://157.230.213.199:3000/api/cars")
        .then(({ data }) => setCars(data));

    function openEditModal(id, title, age, brand, price) {
        setModalEdit({
            active: false,
        });
        setTimeout(() => {
            setModalEdit({
                active: true,
                id: id,
                title: title,
                age: age,
                brand: brand,
                price: price
            });
        }, 20);
    }
    function openCreateModal() {
        setModalCreate({active: true});
    }
    function closeCreateModal() {
        setModalCreate({active: false});
    }

    function closeEditModal() {
        setModalEdit({
            active: false,
            id: "",
            title: "",
            age: "",
            brand: "",
            price: "price"
        });
    }

    return (
        <React.Fragment>
            {modalEdit.active ? (
            <ModalEdit 
                id={modalEdit.id}
                title={modalEdit.title} 
                age={modalEdit.age} 
                brand={modalEdit.brand} 
                price={modalEdit.price}
                modalEditSetState={setModalEdit}
                >
                    <h3>Editar um carro</h3>
                    <div onClick={closeEditModal}>X</div>
                </ModalEdit>) : ""}

            {modalCreate.active ? (
                <ModalCreate modalCreateSetState={setModalCreate}>
                    <h3>Criar um carro</h3>
                    <div onClick={closeCreateModal}>X</div>
                </ModalCreate>
            ) : ""}
            <Main>
                <Container>
                    <div className="box">
                        <div className="line">
                            <h2 className="title">Carros cadastrados</h2>
                            <button onClick={openCreateModal}>Cadastrar um carro</button>
                        </div>
                        <div className="table">
                            <div className="head">
                                <div>
                                    <h5>nome</h5>
                                </div>
                                <div>
                                    <h5>marca</h5>
                                </div>
                                <div>
                                    <h5>ano</h5>
                                </div>
                                <div>
                                    <h5>valor</h5>
                                </div>
                            </div>
                            <div className="body">
                                {cars.map((item) => (
                                    <div onClick={() => openEditModal(item._id, item.title, item.age, item.brand, item.price)} key={item._id} className="item">
                                        <div>
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div>
                                            <h5>{item.brand}</h5>
                                        </div>
                                        <div>
                                            <h5>{item.age}</h5>
                                        </div>
                                        <div>
                                            <h5>{item.price}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </Main>
        </React.Fragment>
    );
};

export default Home;
