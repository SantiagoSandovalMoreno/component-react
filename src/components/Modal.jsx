import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalResult = ({show, handleModal, selected, column}) => {
    const items = column && column.filter((item) => item.checked === true)
    return(
    <Modal
        show={show} 
        onHide={handleModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Body>
            <div>
                <div className="mt-3">
                    <h5>Columnas Seleccionadas</h5>
                    <ul className="list-group text-center">
                        {items.length > 0 ? items.map((item)=>(
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.test}
                                <span className="badge badge-primary badge-pill">{item.id}</span>
                            </li>
                        )): <p>No hay columnas seleccionas</p>}
                    </ul>
                </div>
                <div className="mt-3">
                    <h5>Columnas Ordenadas</h5>
                    <ul className="list-group text-center">
                        {selected.length > 0 ? selected.map((item)=>(
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.test}
                                <span className="badge badge-primary badge-pill">{item.id}</span>
                            </li>
                        )):<p>No hay columnas seleccionas</p> }
                    </ul>
                </div>
                <div className="mt-3">
                    <Button
                        variant="primary" 
                        onClick={handleModal}
                    >
                        Aceptar
                    </Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>
    )
}


export default ModalResult;