import './App.css';
import React, {useState, useEffect} from 'react';


function Grid() {

  const [modal, setModal] = useState(false)
  const closeModal = () => {
    setModal(false)
  }

  const showModal = () => {
    setModal(true)
  }

  useEffect(() => {
      modal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
 }, [modal ]);

  return(
    <div className="wrapper">
    <section className="main-section">
        <div className="header">header</div>
        <div className="languages-section">
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            <br/>
            languages-section
            </div>
          <div className="dependencies-section">modal-section <br /> 
            <button onClick={() => showModal()}>OPEN MODAL</button>

            {
              modal ?  <Modal modal={modal} close={closeModal}></Modal>: null 
            }

          </div>
        <div className="modal-section">dependencies-section</div>
        <div className="footer">footer</div>
    </section>
  </div>
  )
}

function Modal({close}) {
  return(
    <div className="overlay">
      <div className="modal">
        <button onClick={() => close()}>CLOSE MODAL</button>
      </div>
    </div>
  )
}



function App() {
  return (
    <div className="App">
        <Grid></Grid>
    </div>
  );
}



export default App;
