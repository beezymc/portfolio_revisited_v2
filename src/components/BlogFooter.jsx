import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Social from "./Social.jsx";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#303030' }}>
      <Container maxWidth="md" component="footer" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', color: 'white', }}>
        <Box mt={8} mb={2} >
          <Box sx={{ justifyContent: 'center', display: 'flex' }}>
            <Social direction="row" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
