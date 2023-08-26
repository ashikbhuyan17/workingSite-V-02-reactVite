import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const UpdateEmployee = ({ isOpen, setClose }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(
      '🚀 ~ file: NewEmployeeModal.jsx:8 ~ NewEmployeeModal ~ data:',
      data
    );
    setClose();
  };
  return (
    <>
      <Modal
        show={isOpen}
        onHide={setClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>
                Name
                {/* <span className="text-danger" title="Required">
                  *
                </span> */}
              </Form.Label>
              <Form.Control
                {...register('name', {
                  required: true,
                })}
                type="text"
                required
                // placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register('email', {
                  required: true,
                })}
                type="email"
                required
                // placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                {...register('address', {
                  required: true,
                })}
                type="text"
                as="textarea"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                {...register('phone', {
                  required: true,
                })}
                type="number"
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={setClose}>
              Close
            </Button>
            <Button variant="info" type="submit">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UpdateEmployee;
