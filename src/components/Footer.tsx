import { Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container component="footer" maxWidth="lg" sx={{ my: 4 }}>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ pt: 4 }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <Link color="inherit" href="https://caroliveira.github.io/">
          Lina Oliveira
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
