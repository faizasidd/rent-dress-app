import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from 'react-router-dom';
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, Container, Card, Rating } from '@mui/material';
import { StarBorder } from '@mui/icons-material';
import DressContainer from "../DressContainer/DressContainer";
import EditIcon from "../../assets/icons/edit-24px.svg";
import DeleteIcon from "../../assets/icons/delete_outline-24px.svg";
// import './DressList.scss'

const DressList = () => {

  const history = useHistory();
  const { id } = useParams();

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

  const deleteDress = (id) => {
    axios
        .delete(
            `http://localhost:8080/dress/${id}`,
            
        )
        .then((response) => {
            setDress(prev => [...prev.filter(item => item.id !== id)])
            console.log(response);
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
              <Link to={`/dress/edit/${item.id}`} className="container2__link">
                                        <div className="link__button-container">
                                            <img
                                                className="button__image"
                                                src={EditIcon}
                                                alt="Edit Icon"
                                            />
                                        </div>
                                    </Link>
                                    <img
                                                className="button__image"
                                                src={DeleteIcon}
                                                alt="Delete Icon"
                                                onClick={() => deleteDress(item.id)} 
                                            />
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


