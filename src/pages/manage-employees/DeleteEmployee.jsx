// import React from 'react';
// import { Button, Form, Modal } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useToggleModal from '../../hooks/useToggleModal';

const DeleteEmployee = ({ id }) => {
  const [isDelete, setOpenDelete, setCloseDelete] = useToggleModal();

  const isDeleteOrCancel = (data) => {
    console.log(
      '🚀 ~ file: DeleteEmployee.jsx:17 ~ isDeleteOrCancel ~ data:',
      data
    );
    setCloseDelete();
  };
  return (
    <>
      <a className="delete" data-toggle="modal" onClick={setOpenDelete}>
        <i className="material-icons" data-toggle="tooltip" title="Delete">
          &#xE872;
        </i>
      </a>
      <Modal
        show={isDelete}
        onHide={setCloseDelete}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Delete Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <p>Are you sure you want to delete these Records?</p>
            <p className="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => isDeleteOrCancel('cancel')}
          >
            Close
          </Button>
          <Button
            variant="danger"
            type="submit"
            onClick={() => isDeleteOrCancel('ok')}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  //   const [show, setShow] = useState(false);

  //   const handleClose = () => {
  //     setShow(false);
  //     handleDelete(id);
  //   };
  //   const handleClose2 = () => {
  //     setShow(false);
  //   };
  //   const handleShow = () => setShow(true);
  //   return (
  //     // <Button onClick={onClick} variant="danger">
  //     //   <i className="far fa-trash-alt" title="Edit" />
  //     // </Button>
  //     <>
  //       <Button variant="danger" onClick={setOpenDelete}>
  //         <i className="far fa-trash-alt" title="Delete" />
  //       </Button>

  //       <Modal
  //         show={isDelete}
  //         onHide={setCloseDelete}
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //       >
  //         <Modal.Header closeButton>
  //           <Modal.Title>Delete</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body className="bold">
  //           Are you sure you want to delete?
  //         </Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={setCloseDelete}>
  //             Cancel
  //           </Button>
  //           <Button variant="danger" onClick={setCloseDelete}>
  //             Delete
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  // </>
  //   );
};

export default DeleteEmployee;
