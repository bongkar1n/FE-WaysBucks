import { Modal, Button } from "react-bootstrap";

function ModalThanks(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}

      <Modal.Body className="justify-content-center align-items-center">
        <h1 className="text-thanks">
          Thank you for ordering in us, please wait to verify your order
        </h1>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModalThanks;
