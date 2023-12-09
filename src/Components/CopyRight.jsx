import { Link, Typography } from '@mui/material';
import React from 'react'

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}
            {new Date().getFullYear()}
            {" | "}
            <Link color="inherit" href="/" sx = {{textDecoration: 'none'}}>
                ASKY.com
            </Link>{" "}
        </Typography>
    );
}