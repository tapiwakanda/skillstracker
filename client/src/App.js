import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'

const App = () => {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h4" align="center">Skills Tracker</Typography>
            </AppBar>
        </Container>
    );
}

export default App;