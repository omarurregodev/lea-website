import { useState } from "react";
import "./Modal.scss";

import Flipcard from "./Flipcard";

function Modal({ toggleDiv, isVisible, index }) {
  let itemData = index;
  
  return (
    <>
      <div className={`modal-background ${isVisible ? "visible" : "visuallyhidden"}`}></div>
      <div className={`modal ${isVisible ? "visible" : ""}`}>
        {index !== undefined && (
          <div className="modal-content">
            <h3 className="modal-content-title">{itemData.title}</h3>
            <h4 className="modal-content-subtitle">{itemData.subtitle}</h4>
            <p className="modal-content-desc">{itemData.desc}</p>
            <div className="modal-content-products">
              {itemData.items.map((data) => {
                return <Flipcard key={data.uniqueKey} data={data} />;
              })}
            </div>
            <p className="modal-content-note">Los horarios mostrados son 24/25. Revisar las opciones en el botón horario 25/26.</p>
          </div>
        )}
        <button className="closeBtn" onClick={toggleDiv} aria-label="salir">
          Salir
        </button>
      </div>
    </>
  );
}

export default Modal;
