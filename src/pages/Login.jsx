import Form from 'react-bootstrap/Form';
import axios from "axios"
import Button from "react-bootstrap/Button";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
const baseUrl = "https://dummyjson.com";
export default function Login(){
    const [userData , setUserData] = useState({username:"",password:""});
    const [errorMsg , setErrorMsg]=useState("Welcome Back");
    const [open , setOpen]=useState(false)
    const navigate=useNavigate();

    let validReq=errorMsg==="Welcome Back";
    function handleRequestMsg(msg="Welcome Back"){
        setErrorMsg(msg)
        if(!open){
          setOpen(true);
          window.setTimeout(() => {
            setOpen(false);
          }, 1500);
        }
    }
    
    const [loginState , setLoginState] = useState(window.localStorage.getItem("Token"))
    const bodyBarams={
        username:userData.username,
        password:userData.password,
    }
    function handleLoginRequest(){
        axios.post(`${baseUrl}/auth/login`,
        bodyBarams,
        ).then((response)=>{
            window.localStorage.setItem("Token", response.data.accessToken);
            window.localStorage.setItem("userData",JSON.stringify(response.data))
            setLoginState(response.data.accessToken);
            
            navigate("/dashboard");
            handleRequestMsg();
        }).catch((error)=>{
            handleRequestMsg(error.response.data.message);
        })
    }



    return (
      <>
        <section
          className="loginParent position-relative  d-flex align-items-center justify-content-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Form
            className="position-relative z-5 text-center p-4 rounded-5 d-flex flex-column justify-content-center"
            style={{
              background: "var(--light)",
              minWidth: "21rem",
              minHeight: "21rem",
            }}
          >
            <h1 className="mb-4">Login</h1>
            <section className="d-flex flex-column  flex-grow-1">
              <Form.Group
                className="mb-3  flex-grow-1"
                controlId="exampleForm.ControlInput1"
              >
                <section className="text-start">
                  <Form.Label className="fw-semibold text-capitalize">
                    userName
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    style={{ height: "3rem" }}
                    value={userData.username}
                    onChange={(e) => {
                      setUserData({ ...userData, username: e.target.value });
                    }}
                  />
                </section>
              </Form.Group>
              <Form.Group
                className="mb-3 flex-grow-1"
                controlId="exampleForm.ControlTextarea1"
              >
                <section className="text-start">
                  <Form.Label className="fw-semibold text-capitalize">
                    password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    style={{ height: "3rem" }}
                    value={userData.password}
                    onChange={(e) => {
                      setUserData({ ...userData, password: e.target.value });
                    }}
                  />
                </section>
              </Form.Group>
              <section>
                <Button
                  variant="primary"
                  className="rounded-5 py-2 px-5 fs-5 text-capitalize"
                  onClick={handleLoginRequest}
                >
                  login
                </Button>
              </section>
            </section>
          </Form>
          <Alert
            key={validReq ? "success" : "danger"}
            variant={validReq ? "success" : "danger"}
            className={`${validReq ? "success" : "danger"} loginRequestAlert`}
            style={
              open
                ? { transform: "translateY(0)", opacity: "1" }
                : { transform: "translateY(5rem)", opacity: "0" }
            }
          >
            {errorMsg}
          </Alert>
        </section>
      </>
    );
}


