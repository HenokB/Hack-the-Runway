import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import Slider from "./components/Slider";
import birds from './components/back.jpg';
import min from './components/min.png';
import Header from './components/Header';


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
    <Header />
    <Slider
        imageSrc={birds}
        title={<h3>Show your style</h3>}
        subtitle={
          "Have anyone told you that you are not stylish or commented bad on your outfit? This is a place for you to anonymously share your fahsion sense and see how many people will like it."
        }
        flipped={true}
      />
      <Slider
        imageSrc={min}
        title={<h3>Look at me, I love jeans</h3>}
        subtitle={
          "I think there is beauty in everything what Normal People would perceive as ugly, I can usually see something of beauty in it"
        }
        flipped={false}
      />
    <Container maxWidth="lg">
      
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={15}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </>
  );
};

export default App;
