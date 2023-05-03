import React from "react";
import { CarritoProvider } from "../../context/CarritoContextProvider";
import { GlobalProvider } from "../../context/GlobalContextProvider";
import useLogin from "../../hooks/useLogin";
import useToggle from "../../hooks/useToggle";
import { clearAllCart, addBuyToPurchases } from '../../services/carritoService'
import './modal.css'

const Modal = () => {
  const { logged, modal, handleModal, mostrarAlerta } = GlobalProvider();
  const { cleanCart, carrito } = CarritoProvider()
  const { email, password } = useLogin()
  const { toggle, handleToggle } = useToggle()

  const handleClose = () => {
    handleModal()
  }

  const handleBuy = (e) => {
    e.preventDefault()
    handleToggle()
    clearAllCart(logged.email)
      .then(() => {
        addBuyToPurchases(logged.email, carrito)
          .then(() => {
            cleanCart()
            handleModal()
            let text = 'Compra realizada correctamente!'
            let type = 'success'
            mostrarAlerta(type, text)
          })
      })
  }
  return (
    <>
      {modal && (
        <div className="modal-div-parent modal modal-sheet d-block py-5" role="dialog" id="modalSheet">
          <div className="modal-dialog" role="document" >
            <div className="modal-content rounded-4 shadow" style={{ marginTop: '50%' }}>
              <div className="modal-header border-bottom-0">
                <h1 className="modal-title fs-5">Validacion de compra ¿Estas seguro?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body py-0">
                <form onSubmit={handleBuy}>
                  <input className="form-control" {...email} required />
                  <input className="form-control" {...password} required />
                  <button type="submit" className="btn btn-lg btn-success w-100 mx-0 mb-2" disabled={!toggle}>Realizar compra</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;