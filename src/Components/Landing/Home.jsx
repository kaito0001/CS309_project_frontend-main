import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Copyright from "../CopyRight";
import Footer from "../Footer/Footer";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import * as ROUTES from "../../Routes/routes";
import ProductAPI from "../../api/productsAPI/ProductAPI";

const images = [
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
  "https://source.unsplash.com/random?wallpapers",
];

async function handleGetProducts() {
  try {
    const result = await ProductAPI.getProducts();
    console.log(result);
  } catch (error) {
    alert(error);
  }
}

const cards = handleGetProducts();

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await ProductAPI.getProducts();
        console.log("Fetched data:", result);
        setCards(result || []);
        console.log("Updated cards:", result || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <>
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

      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: "50%",
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{card.body}</Typography>
                  <Typography>Price : 20$</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={ROUTES.PRODUCT_DETAILS}>
                    Details
                  </Button>
                  {isAdmin && (
                    <Button
                      sx={{
                        flexGrow: 0.1,
                        textDecoration: "none",
                        color: "black",
                        display: { xs: "none", md: "flex" },
                      }}
                      textAlign="center"
                      component="a"
                    >
                      Edit
                    </Button>
                  )}
                  {isAdmin && (
                    <Button
                      sx={{
                        flexGrow: 0.1,
                        textDecoration: "none",
                        color: "black",
                        display: { xs: "none", md: "flex" },
                      }}
                      textAlign="center"
                      component="a"
                    >
                      Delete
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
}
