import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText, createTheme, ThemeProvider,
} from '@mui/material';
import NavBar from "../NavBar";
import CopyRight from "../CopyRight";
import Footer from "../Footer/Footer";
import * as ROUTES from "../../Routes/routes";

const theme = createTheme({
  palette: {
    primary: {
      main: '#a88361',
    },
    text: {
      TextColor : '#000000',
      Logo : '#a88361'
    }
  }
})

function ProfilePage(){
  const user = {
    firstName: 'Sherif',
    lastName: 'Omar',
    email: 'Sherif@example.com',
    orders: [
      { id: 1, product: 'Product A', price: 19.99 },
      { id: 2, product: 'Product B', price: 29.99 },
    ],
  };

  return (
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <Container component="main" maxWidth="md" sx = {{p : 18}}>
          <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
            <Typography variant="h4" gutterBottom>
              My Profile
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary={`First Name: ${user.firstName}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Last Name: ${user.lastName}`} />
                </ListItem>
                <ListItem>
                  <ListItemText primary={`Email: ${user.email}`} />
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography variant="h6" gutterBottom>
                Order History
              </Typography>
              {user.orders.length === 0 ? (
                  <Typography>No orders yet.</Typography>
              ) : (
                  <List>
                    {user.orders.map((order) => (
                        <ListItem key={order.id}>
                          <ListItemText
                              primary={`Order ID: ${order.id}`}
                              secondary={`Product: ${order.product}, Price: $${order.price}`}
                          />
                        </ListItem>
                    ))}
                  </List>
              )}
            </Box>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }} href = {ROUTES.HOME}>
              Log Out
            </Button>
          </Paper>
        </Container>
        <Footer></Footer>
        <CopyRight></CopyRight>
      </ThemeProvider>
  );
}

export default ProfilePage;