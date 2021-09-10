import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
//{props.text} permite que a varios componentes
//sejam criados e receba valores diferente
//useState(false); return array with 2 elements
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
    console.log("Clicked");
    console.log(props.text);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <h2>{2 + 2}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}
export default Todo;
