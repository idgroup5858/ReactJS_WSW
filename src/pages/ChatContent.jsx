

import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function ChatScreen(){

  const chatList =["message1","message2","message3"]

    return(
        <div className="d-flex flex-column  align-items-center justify-content-end" style={{height:"80vh"}}>

         
       
       <div className='d-flex align-items-center flex-column w-100'>
         {
            chatList.map((item,index)=>(
              <Col xs={5} className={`d-flex ${index%2==0 ? "justify-content-end" : "justify-content-start"}`}>
               <small>{item}</small>
              </Col>
             
            ))
          }
        </div>
         <Col xs={5} className='d-flex flex-row mt-3'>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Сообщение..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-primary" id="button-addon2">
          <i class="bi bi-send"></i> Отправить
        </Button>
      </InputGroup>
       </Col>
       
           
      
            

        </div>
    )
}

export default ChatScreen