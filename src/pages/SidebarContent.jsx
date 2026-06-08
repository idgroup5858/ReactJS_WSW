


import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ChatScreen from './ChatContent';

function SidebarScreen() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first"><i class="bi bi-chat-left-dots me-1"></i> Чат</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><i class="bi bi-plug me -1"></i> Интеграция</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
                <ChatScreen></ChatScreen>
            </Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default SidebarScreen;