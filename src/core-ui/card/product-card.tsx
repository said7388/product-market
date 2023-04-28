import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function ProductCard({ product }: any) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 250 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography>{product.title}</Typography>
        <Rating name='read-only' size='small' value={product.rating} readOnly />
        <p>{product.price}</p>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
