import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";
import CopyRight from "../CopyRight";
import * as ROUTES from "../../Routes/routes";

// product data
const product = {
  id: 1,
  name: "Heading",
  price: "25",
  description:
    "This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.This is a media card. You can use this section to describe the content.",
};

const images = [
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#a88361",
    },
    text: {
      TextColor: "#000000",
      Logo: "#a88361",
    },
  },
});

// Product page component
function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    // Implement your logic to add the product to the cart
    console.log(`Added ${quantity} ${product.name}(s) to the cart`);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar></NavBar>

      <Paper
        elevation={3}
        style={{ padding: "20px", textAlign: "center" }}
        sx={{ bgcolor: "f4f3ee" }}
      >
        <img
          src={images[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
        />
        <Button onClick={handlePrevSlide} disabled={currentSlide === 0}>
          Previous
        </Button>
        <Button
          onClick={handleNextSlide}
          disabled={currentSlide === images.length - 1}
        >
          Next
        </Button>
      </Paper>

      {/* Product Details */}
      <Container sx={{ p: 15 }}>
        <Grid container spacing={3} style={{ marginTop: "20px" }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography color="textSecondary">${product.price}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Product Quantity and Add to Cart */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Quantity</Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity === 1}
                >
                  -
                </Button>
                <Typography variant="subtitle1" style={{ margin: "0 10px" }}>
                  {quantity}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </Button>

                {<br></br>}

                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px" }}
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px" }}
                  href={ROUTES.CHECKOUT}
                >
                  Check Out
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </ThemeProvider>
  );
}

export default ProductPage;
