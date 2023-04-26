import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth='sm'>
      <div className='my-4'>
        <Typography variant='h4' component='h1' gutterBottom>
          Material UI Create React App example with Tailwind CSS in TypeScript
        </Typography>
        <Copyright />
      </div>
    </Container>
  );
}
