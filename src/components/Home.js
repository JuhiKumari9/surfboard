import React, { Component } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CreateAgenda from "./CreateAgenda";
import { Route, Routes, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Button variant="outlined">
            <Link to="/createnewagenda">Create New Agenda</Link>
          </Button>

          <Routes>
            <Route path="/createnewagenda" element={<CreateAgenda />} />
          </Routes>
        </Container>
      </div>
    );
  }
}
export default Home;
