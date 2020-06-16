import React,{ useState, useEffect } from 'react';
import "./scss/app.scss"
import DrapContainer from "./components/DrapContainer"
import Column from "./components/Column"
import Container from "./components/Container"
import Modal from "./components/Modal"
import Input from "./components/Input"
import { ICollectionSwapping } from "./helpers"
import { initialState } from "./store"
import { Button } from 'react-bootstrap';

const App = () => {
  const [column, setColumn] = useState(initialState)
  const [selected, setSelected] = useState([])
  const [show, setShow] = useState(false);

  const handleModal = () => setShow(!show);

  const handleChecked = (id) => {
    setColumn(
      column.map(item => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        } else return item;
      })
    );
  }

  const searchColumn = (col) => {
    const field = column.findIndex(item => item.test === col)
    if(field > 0){
      const list = ICollectionSwapping(column, field , 0)
      setColumn(list);
    }
  }

  const resetColumn = () => {
    setColumn(initialState)
    setSelected([])
  }

  useEffect(()=> {
    const items = column.filter((item) => item.checked === true)
    setSelected(items);
  },[column])

  return (
    <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 p-0">
              <Container type="column-one" title="¿Que columnas se repiten?">
                <Input searchColumn={searchColumn} />
                {column.map((item ) =>(
                  <Column key={item.id} item={item} handleFuntion={handleChecked} />
                ))}
              </Container>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 p-0">
              <Container type="column-two" title="¿Cómo quieres ordenarlos?">
                <div className="container-drap">
                  {selected.length > 0
                    ? <DrapContainer
                        items={selected}
                        setSelected={setSelected} 
                      />
                    : <p>No hay Seleccionados</p>
                  }
                </div>
                <Input searchColumn={searchColumn} />
                <div className="list-two">
                  {column.map((item) =>(
                    <Column key={item.id} item={item} handleFuntion={handleChecked} />
                  ))}
                </div>
                <div className="container-btn">
                  <Button variant="outline-primary" onClick={resetColumn}>
                    Cancelar
                  </Button>
                  <Button variant="primary" onClick={handleModal}>
                    OK
                  </Button>
                </div>
              </Container>
            </div>
          </div>
          <Modal show={show} handleModal={handleModal} selected={selected} column={column} />
        </div>
      </div>
      
  );
}

export default App;
