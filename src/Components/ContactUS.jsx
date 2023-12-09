import { useState } from "react";
import {TextField, Button, Typography, Box, ThemeProvider, createTheme} from "@mui/material";
import NavBar from "./NavBar";
import CopyRight from "./CopyRight";

const theme = createTheme({
    palette: {
        primary: {
            main: '#edede9',
        },
        text: {
            TextColor : '#000000'
        }
    }
})

function ContactUS() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //
    };

    return (
        <ThemeProvider theme={theme}>
            <NavBar></NavBar>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        maxWidth: 600,
                        mx: "auto",
                        p: 2,
                        border: "2px solid  #000000",
                        borderRadius: "12px",
                        boxShadow: 1,
                    }}
                >
                    <Typography variant="h4" align="center" mb={2}>
                        Contact Us
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            required
                            type="email"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            required
                            multiline
                            rows={4}
                        />
                        <Button
                            fullWidth
                            type="submit"
                            sx={{
                                mt: 2,
                                backgroundColor: "#a88361",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#a88361",
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </form>
                </Box>
            </Box>
            <CopyRight></CopyRight>
        </ThemeProvider>
    );
}
export default ContactUS;