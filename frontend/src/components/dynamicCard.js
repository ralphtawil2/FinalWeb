import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function DynamicMultiActionAreaCard() { // param: {product}
    // const [title, setTitle] = useState("")
    // const [price, setPrice] = useState(0)
    // const [image, setImage] = useState("")
    // const [description, setDescription] = useState("")

  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image = "https://res.cloudinary.com/dudg52fav/image/upload/v1670108554/royal-tees_images/goods_08_427916_pl6nff.jpg" //{product.images.url}
          alt = "Asian man wearing a black T-Shirt" //{product.description}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            $Black T-Shirt - 32$  {/*{product.title} - {product.price}*/}
          </Typography>

          {/*<Typography variant="body2" color="text.secondary">
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/*<CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        </CardActions>*/}
    </Card>
  );
}
