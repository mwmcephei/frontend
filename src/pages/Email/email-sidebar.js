import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Card,
  Media,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const EmailSideBar = props => {
  const [modal, setmodal] = useState(false)

  return (
    <React.Fragment>
      <Card className="email-leftbar">
        <Button
          type="button"
          color="danger"
          className=""
          onClick={() => {
            setmodal(!modal)
          }}
          block
        >
          Compose
        </Button>


        <h6 className="mt-4">Labels</h6>

        <div className="mail-list mt-1">
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span>
            Theme Support
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>
            Freelance
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>
            Social
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>
            Friends
          </Link>
          <Link to="#">
            <span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span>
            Family
          </Link>
        </div>

        <h6 className="mt-4">Chat</h6>

        <div className="mt-2">
          <Link to="#" className="media">

            <Media className="chat-user-box" body>
              <p className="user-title m-0">Scott Median</p>
              <p className="text-muted">Hello</p>
            </Media>
          </Link>

          <Link to="#" className="media">

            <Media className="chat-user-box" body>
              <p className="user-title m-0">Julian Rosa</p>
              <p className="text-muted">What about our next..</p>
            </Media>
          </Link>

          <Link to="#" className="media">

            <Media className="chat-user-box" body>
              <p className="user-title m-0">David Medina</p>
              <p className="text-muted">Yeah everything is fine</p>
            </Media>
          </Link>

          <Link to="#" className="media">

            <Media className="chat-user-box" body>
              <p className="user-title m-0">Jay Baker</p>
              <p className="text-muted">Wow that's great</p>
            </Media>
          </Link>
        </div>
      </Card>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setmodal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal)
            }}
          >
            New Message
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input type="email" className="form-control" placeholder="To" />
              </div>

              <div className="mb-3">
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <Editor
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal)
              }}
            >
              Close
            </Button>
            <Button type="button" color="primary">
              Send <i className="fab fa-telegram-plane ms-1"></i>
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default EmailSideBar
