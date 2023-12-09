import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import ProductAPI from "../../api/productsAPI/ProductAPI";

const defaultTheme = createTheme();

function ProductList() {
  const [isAdmin, setIsAdmin] = useState(false);
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Head */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Products
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              A SKY, we set out to bring a fresh perspective to Turkish fashion
              and to bring our high quality and unique designs to consumers all
              over the world in 2005. Since the day the company was founded, we
              have accomplished important works and achievements by keeping our
              excitement alive.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Men</Button>
              <Button variant="contained">Women</Button>
              <Button variant="contained">Kids</Button>
            </Stack>
          </Container>
        </Box>

        {/*Products.jsx*/}

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
                    <Typography>Price : 25$</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
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
      </main>
    </ThemeProvider>
  );
}

export default ProductList;
