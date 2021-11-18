import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DateTimePicker from "@mui/lab/DateTimePicker";

class CreateAgenda extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meetingDateTime: new Date() };
  }
  handleChange = (newDateTime) => {
    this.setState({
      meetingDateTime: newDateTime
    });
  };
  render() {
    //const [value, setValue] = new Date("2014-08-18T21:11:54");
    const { meetingDateTime } = this.state;
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" }
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-required"
            label="Name of the Agenda"
            defaultValue=""
          />
          <TextField
            id="outlined-required"
            label="Description"
            defaultValue=""
          />
          <DateTimePicker
            label="Meeting Date&Time"
            value={meetingDateTime}
            onChange={this.handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
      </Box>
    );
  }
}
export default CreateAgenda;
