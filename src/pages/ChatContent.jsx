

import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { askGemini } from './ChatApi';


function ChatScreen() {


  const [chatLEFTRIGHT, setChatLEFTRIGHT] = useState(0)
  const [chList, setChList] = useState([])
  const [edittext1, setEditText1] = useState("")

  const handleMessage = async (msg) => {
    try {
      const req = await askGemini(msg);
      const result = await req.json();
      console.log(result);
      //setEditText1(result.candidates[0].content.parts[0].text);
      setChList(prev => [
        ...prev,
        {
          position:"left",
          text: result.candidates[0].content.parts[0].text,
          date: new Date()
        }
      ]);

    } catch (e) {

    }
  }

  return (
    <div className="d-flex flex-column  align-items-center justify-content-end" style={{ height: "80vh" }}>



      <div className='d-flex align-items-center flex-column w-100'>
        {
          chList.map((item, index) => (
            <Col xs={5} className={`d-flex ${item.position == "right" ? "justify-content-end" : "justify-content-start"}`}>
              <small>{item.text}</small>
              <small className="ms-2 mt-1 " style={{ fontSize: "8px" }}>
                {new Date(item.date).toLocaleTimeString("uz-UZ", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </small>
            </Col>

          ))
        }
      </div>
      <Col xs={5} className='d-flex flex-row mt-3'>
        <InputGroup className="mb-3" value={edittext1}>
          <Form.Control
            value={edittext1}
            onChange={(e) => setEditText1(e.target.value)}
            placeholder="Сообщение..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                
                setChList([...chList, {
                  position:"right",
                  text: edittext1,
                  date: new Date()
                }])
                setEditText1("");
                handleMessage(edittext1);
              }
            }}
          />
          <Button
            onClick={() => {
              
              setChList([...chList, {
                position:"right",
                text: edittext1,
                date: new Date()
              }])
              setEditText1("");

            }}
            variant="outline-primary" id="button-addon2">
            <i class="bi bi-send"></i> Отправить
          </Button>
        </InputGroup>
      </Col>





    </div>
  )
}

export default ChatScreen