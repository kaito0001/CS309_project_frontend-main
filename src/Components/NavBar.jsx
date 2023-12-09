import {AppBar,Toolbar,IconButton,Typography,Box,Button,Container} from "@mui/material";
import {createTheme , ThemeProvider} from "@mui/material";
import * as ROUTES from "../Routes/routes";
import * as React from "react";
import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const theme = createTheme({
    palette: {
        primary: {
            main: '#edede9',
        },
        text: {
            TextColor : '#000000',
            Logo : '#a88361'
        }
    }
})


const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.text.Logo, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.text.Logo, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.TextColor, // Add this line
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function NavBar () {

    const [isAdmin , setIsAdmin] = useState(true);
    const [isSignIn , setIsSignIn] = useState(true);

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElSearch, setAnchorElSearch] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.target);
    };

    const handleOpenUserAccount = (event) => {
        setAnchorElUser(event.target);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function handleCloseSearch() {
        setAnchorElSearch(null);
    }

    function handleOpenSearch(event) {
        setAnchorElSearch(event.target);
    }

    return(
        <ThemeProvider theme={theme}>
            <AppBar position = "static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/*none*/}

                        {/*WebSite Name*/}

                        <Typography
                            variant="h5"
                            component="a"
                            href = {ROUTES.HOME}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 0.1,
                                fontFamily: 'monospace',
                                letterSpacing: '0.1rem',
                                color : theme.palette.text.Logo,
                                textDecoration: 'none'
                            }}
                        >
                            A SKY
                        </Typography>

                        {/*Menu*/}

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' }} textAlign="center" component="a" href = {ROUTES.PRODUCTS}>Products</Button>
                            <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' }} textAlign="center" component="a" href = {ROUTES.CONTACTUS}>Contact US</Button>
                        </Box>

                        {/*Search*/}

                        <SearchWrapper sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </SearchWrapper>

                        {/*cart*/}

                        {isSignIn && !isAdmin &&
                            <Tooltip title="Cart" >
                                <IconButton sx={{ p: 1 , display: { xs: 'none', md: 'flex'} }}>
                                    <ShoppingCartIcon></ShoppingCartIcon>
                                </IconButton>
                            </Tooltip>
                        }

                        {/*Account*/}

                        {isSignIn &&(
                            <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' , display: { xs: 'none', md: 'flex'} }} textAlign="center" component="a" onClick = {() => setIsSignIn(false)}>Log Out</Button>
                        )}

                        {!isSignIn &&(
                            <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' , display: { xs: 'none', md: 'flex'} }} textAlign="center" component="a" href = {ROUTES.SIGN_UP}>Sign Up</Button>
                        )}

                        {isAdmin &&
                            <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' , display: { xs: 'none', md: 'flex'} }} textAlign="center" component="a" href = {ROUTES.SIGN_UP}>DashBoard</Button>
                        }

                        <Box sx={{ flexGrow: 0 , display: { xs: 'none', md: 'flex'} }}>
                            {isSignIn &&
                                <Tooltip title="Your Account">
                                    <IconButton sx={{ p: 0 }} href={ROUTES.ACCOUNT}>
                                        <AccountCircleIcon></AccountCircleIcon>
                                    </IconButton>
                                </Tooltip>
                            }
                            {!isSignIn &&
                                <Tooltip title="Gust">
                                    <IconButton sx={{ p: 0 }} href={ROUTES.SIGN_UP}>
                                        <AccountCircleIcon></AccountCircleIcon>
                                    </IconButton>
                                </Tooltip>
                            }
                        </Box>

                        {/*Flex*/}

                        {/*Menu*/}
                        <Box sx={{ flexGrow: 0.1, display: { xs: 'flex', md: 'none' } , color : 'black'}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' , color : 'black'},
                                }}
                            >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' }} textAlign="center" component="a" href = {ROUTES.PRODUCTS}>Products</Button>
                                    <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' }} textAlign="center" component="a" href = {ROUTES.CONTACTUS}>Contact US</Button>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/*Search*/}

                        <Box sx={{ flexGrow: 0.8 , display: { xs: 'flex', md: 'none'} }}>
                            <Tooltip title="Search">
                                <IconButton onClick={handleOpenSearch} sx={{ p: 0 }}>
                                    <SearchIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElSearch}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElSearch)}
                                onClose={handleCloseSearch}
                            >
                                <MenuItem>
                                    <input/>
                                </MenuItem>
                            </Menu>
                        </Box>

                        {/*WebSite Name*/}

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href={ROUTES.HOME}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.1rem',
                                color: theme.palette.text.Logo,
                                textDecoration: 'none',
                            }}
                        >
                            A SKY
                        </Typography>

                        {/*Cart*/}

                        {!isAdmin && isSignIn &&
                            <Box sx={{ flexGrow: 0.1, display: { xs: 'flex', md: 'none' } , color : 'black'}}>
                                <Tooltip title="Cart" >
                                    <IconButton sx={{ p: 0 , display: { xs: 'flex', md: 'none'} }}>
                                        <ShoppingCartIcon></ShoppingCartIcon>
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        }

                        {/*Account*/}

                        {isSignIn &&
                            <Box sx={{ flexGrow: 0 , display: { xs: 'flex', md: 'none'} }}>
                                <Tooltip title="Your Account">
                                    <IconButton onClick={handleOpenUserAccount} sx={{ p: 0 }}>
                                        <AccountCircleIcon></AccountCircleIcon>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' }} textAlign="center" component="a" href={ROUTES.ACCOUNT}>Account</Button>
                                        <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black' }} textAlign="center" component="a" onClick = {() => setIsSignIn(false)}>Log Out</Button>
                                        {isAdmin &&
                                            <Button sx={{ flexGrow: 0.1 , textDecoration: 'none' , color : 'black'  }} textAlign="center" component="a" href = {ROUTES.DASHBOARD}>DashBoard</Button>
                                        }
                                    </MenuItem>
                                </Menu>
                            </Box>
                        }
                        {!isSignIn &&
                            <Tooltip title="Gust">
                                <IconButton sx={{ p: 1 , display: { xs: 'flex', md: 'none'} }} href={ROUTES.SIGN_UP}>
                                    <AccountCircleIcon></AccountCircleIcon>
                                </IconButton>
                            </Tooltip>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default NavBar;