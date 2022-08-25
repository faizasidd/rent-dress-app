import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, Container, Card, Rating } from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import DressContainer from "../DressContainer/DressContainer";


const DressList = () => {

  const history = useHistory();

  const [dress, setDress] = useState([])
  useEffect(() => {
    getAllDresses()
  }, [])

  const getAllDresses = () => {
    axios
      .get('http://localhost:8080/dress')
      .then(response => {
        setDress(response.data)

      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <DressContainer />
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Our Latest Collection</ListSubheader>
      </ImageListItem>

      <Container>
        <ImageList gap={9}
          sx={{
            mb: 8,
            gridTemplateColumns:
              'repeat(auto-fill, minmax(280px, 1fr))!important',
          }}>
          {dress.map((item) => (
            <Card key={item.id} >
              <ImageListItem sx={{ height: '100% !important' }} image={item} position="top">
                <img
                  src={item.image}
                  alt={item.dressname}
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                  onClick={() => history.push(`/dress/${item.id}`)}
                />
                <ImageListItemBar
                  title={item.dressname}
                  subtitle={item.buyprice}
                  actionIcon={
                    <Rating
                      sx={{ color: 'rgba(255,255,255, 0.8)', mr: '5px' }}
                      name="dress-rating"
                      defaultValue={3.5}
                      precision={0.5}
                      emptyIcon={
                        <StarBorder sx={{ color: 'rgba(255,255,255, 0.8)' }} />
                      }
                    />
                  }
                />
              </ImageListItem>
            </Card>
          ))}
        </ImageList>
      </Container>
    </>
  );
}

export default DressList;
