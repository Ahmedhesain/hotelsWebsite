import React, { useContext } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { EmailContext } from '../../context/emailContext';

export default function Login() {
  const navigate = useNavigate();
  var {emailValue,setEmailValue}=useContext(EmailContext);

  return (
    <Container>
      <Row>
        <Col sm={4} className="m-auto text-center">
          <Form className="mb-3" onSubmit={()=>{navigate('/')}}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className="mb-5">
                <h3>Sign in or create an account</h3>
              </Form.Label>
              <Form.Control className="mb-5" type="email" placeholder="Email" required value={emailValue}
                onChange={(e)=>{setEmailValue(e.target.value); }} />
              <button className="btn btn-primary w-100 rounded-pill mb-5 " type='submit'
>
                Continue
              </button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className='m-auto text-center mb-3'>
          <div> <p>or continue with</p> </div>
          <div>
           <a href='#'><img class="m-3" alt="" src="https://a.travel-assets.com/egds/marks/apple.svg" style={{width:20,height:20 }} /></a>
           <a href='#'><img class="m-3" alt="" src="https://a.travel-assets.com/egds/marks/facebook.svg" style={{width:20,height:20 }} /></a>
           <a href='#'><img class="m-3" alt="" src="https://a.travel-assets.com/egds/marks/google.svg" style={{width:20,height:20 }} /></a>
          </div>
          <div className='mb-3' >
            <p>By continuing, you have read and agree to our <a href='#'> Terms and Conditions </a> and <a href='#'>Privacy Statement </a>.</p>
          </div>
          <div className=' d-flex justify-content-evenly'>
          <a href='#'> Contact us </a>
            <a href='#'> Hotels.com </a>
            <a href='#'> Delete data </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
