import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="Images/sea.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Summer</Card.Title>
        <Card.Text></Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
