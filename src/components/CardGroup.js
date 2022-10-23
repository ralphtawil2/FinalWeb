import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="/images/signup.png" />
        <Card.Body>
          <Card.Title>Sign Up</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/customize.png" />
        <Card.Body>
          <Card.Title>Customize</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/buy.png" />
        <Card.Body>
          <Card.Title>Buy</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="/images/getpaid.png" />
        <Card.Body>
          <Card.Title>Get paid</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;