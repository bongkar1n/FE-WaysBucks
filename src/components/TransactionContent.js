import React from "react";
import { Container, Table, Button, Image } from "react-bootstrap";
import checklist from "../images/checklist.png";
import cancel from "../images/cancel 1.png";

function TransactionContent() {
  return (
    <Container>
      <p className="title-transaction mt-5">Income transaction</p>
      <Container className="m-4">
        <Table bordered hover>
          <thead style={{ backgroundColor: "#828282" }}>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>income</th>
              <th>Status</th>
              <th style={{ textAlign: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td>69.000</td>
              <td className="text-warning">Waiting Approve</td>
              <td
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "10px",
                }}
              >
                <Button className="btn btn-danger button-cancel">Cancel</Button>
                <Button className="btn btn-success button-approve">
                  Approve
                </Button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td>69.000</td>
              <td className="text-success">Success</td>
              <td
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "10px",
                }}
              >
                <Image src={checklist} />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td>69.000</td>
              <td className="text-danger">Cancel</td>
              <td
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "10px",
                }}
              >
                <Image src={cancel} />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Sugeng No Pants</td>
              <td>Cileungsi</td>
              <td>16820</td>
              <td>69.000</td>
              <td className="text-primary">On The Way</td>
              <td
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  gap: "10px",
                }}
              >
                <Image src={checklist} />
              </td>
            </tr>
            {/* <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}

export default TransactionContent;
