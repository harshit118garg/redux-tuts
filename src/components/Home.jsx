import React from "react";
import {
  Container,
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import mobiles from "../data/mobiles";

const Home = (props) => {
  console.log('props', props);
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: 5,
          paddingBottom: 10,
        }}
      >
        <Grid container spacing={2}>
          {mobiles.map((mobile, index) => (
            <Grid item xs={2} md={4} sm={8} lg={6} key={index}>
              <Card sx={{minWidth: 350}}>
                <CardMedia
                  component="img"
                  height="250"
                  image={mobile.img}
                  alt={mobile.brand}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {mobile.brand}
                    <Typography className="mx-5 text-danger fw-bolder fs-6" align="right" component="span">
                      Rs. {mobile.price}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {mobile.info.substr(0, 50 - 1) +
                      (mobile.info.length > 30 ? "...." : "")}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    color="warning"
                    size="medium"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => props.addToCartHandler({mobile})}
                  >
                    Add to Cart
                  </Button>
                  <Button variant="contained" color="secondary" size="large" onClick={() => props.removeCartHandler({mobile})}>
                    Remove From Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
