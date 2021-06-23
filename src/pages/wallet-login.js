import React, { Component } from "react"
import MetaTags from "react-meta-tags"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Label,
  Button,
  Input,
  Form,
  FormGroup,
} from "reactstrap"
import classnames from "classnames"
import { Link } from "react-router-dom"

//Dropzone
import Dropzone from "react-dropzone"

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb"

//Import images
import verificationImg from "../assets/images/verification-img.png"
import { options } from "common/data/projects"

class CryptoWallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      activeTab: 1,
      selectedFiles: [],
    }
    this.togglemodal.bind(this)
    this.toggleTab.bind(this)
    this.handleAcceptedFiles.bind(this)
  }

  togglemodal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      if (tab >= 1 && tab <= 3) {
        this.setState({
          activeTab: tab,
        })
      }
    }
  }

  handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    )

    this.setState({ selectedFiles: files })
  }

  /**
   * Formats the size
   */
  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Wallet Login | Arena</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Crypto" breadcrumbItem="KYC Application" />

            <Row className="justify-content-center mt-lg-5">
              <Col xl="5" sm="8">
                <Card>
                  <CardBody>
                    <div className="text-center">
                      <Row className="justify-content-center">
                        <Col lg="10">
                          <h4 className="mt-4 font-weight-semibold">
                            LND Wallet
                          </h4>
                          <p className="text-muted mt-3">
                            Arena puts the Bitcoin LND layer at your fingertips.
                          </p>

                          <div className="mt-4">
                            {/* button triggers modal */}
                            <Button
                              type="button"
                              color="primary"
                              onClick={this.togglemodal}
                            >
                              Access your LND Wallet
                            </Button>

                            <div className="mt-4">
                              {/* button triggers modal */}
                              <Button
                                type="button"
                                color="warning"
                                onClick={this.togglemodal}
                              >
                                {/* per Hatim : qui probabilmente c'è da aggiungere un link per dove creare un LND wallet */}
                                Create a new LND Wallet
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <Row className="justify-content-center mt-5 mb-2">
                        <Col sm="6" xs="8">
                          <div>
                            <img
                              src={verificationImg}
                              alt=""
                              className="img-fluid"
                            />
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* modal */}
                    <Modal
                      isOpen={this.state.modal}
                      role="dialog"
                      size="lg"
                      autoFocus={true}
                      centered
                      id="verificationModal"
                      toggle={this.togglemodal}
                    >
                      <div className="modal-content">
                        <ModalHeader toggle={this.togglemodal}>
                          Connect your LND Wallet
                        </ModalHeader>
                        <ModalBody>
                          <Form>
                            <div className="row mb-4">
                              <Label
                                htmlFor="horizontal-firstname-Input"
                                className="col-sm-3 col-form-label"
                              >
                                Secret Key
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="horizontal-firstname-Input"
                                />
                              </Col>
                            </div>
                            <div className="row mb-4">
                              <Label
                                htmlFor="horizontal-email-Input"
                                className="col-sm-3 col-form-label"
                              >
                                Pwd
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="email"
                                  className="form-control"
                                  id="horizontal-email-Input"
                                />
                              </Col>
                            </div>
                            {/* <div className="row mb-4">
                              <Label
                                htmlFor="horizontal-password-Input"
                                className="col-sm-3 col-form-label"
                              >
                                Password
                              </Label>
                              <Col sm={9}>
                                <Input
                                  type="password"
                                  className="form-control"
                                  id="horizontal-password-Input"
                                />
                              </Col>
                            </div> */}

                            <div className="row justify-content-end">
                              <Col sm={9}>
                                <div className="form-check mb-4">
                                  <Input
                                    type="checkbox"
                                    className="form-check-Input"
                                    id="horizontal-customCheck"
                                  />
                                  <Label
                                    className="form-check-label"
                                    htmlFor="horizontal-customCheck"
                                  >
                                    Remember me
                                  </Label>
                                </div>

                                <div>
                                  <Button
                                    type="submit"
                                    color="primary"
                                    className="w-md"
                                  >
                                    Submit
                                  </Button>
                                </div>
                              </Col>
                            </div>
                          </Form>
                        </ModalBody>
                      </div>
                    </Modal>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default CryptoWallet
