/*external imports*/ 
 import {  useState } from "react";
 import { Notify } from 'notiflix/build/notiflix-notify-aio';

/*internal imports*/
//components
import { StyledHero } from "./Section/styled-section";
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { Message } from "./Message/Message";

export const App = () => {
  const [query, setQuery] = useState('');
  const [openModal, setOpenModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState('');
  
  const handleSubmit = (searchQuery) => {
    console.log(searchQuery);
    if (searchQuery === query) {
      Notify.info("Eeep, just returned that search, enter a new search.");
    }
    return setQuery(searchQuery);    
  };

  const handleOpenModal = (url) => {
    setOpenModal(true);
    setLargeImageURL(url);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setLargeImageURL('');
  };


  return (
   
    <>
      <h1 className="hidden">Pixabay API image search</h1>
      <StyledHero>
        <Searchbar onSubmit={handleSubmit} />
      </StyledHero>
      <Message>
        <span><a href="https://pixabay.com/">Pixabay </a>API</span>
      </Message>
      <ImageGallery query={query} openModal={handleOpenModal} />
      {openModal && (
        <Modal
          largeImageURL={largeImageURL}
          modalClose={handleModalClose}
        />
      )}
     </>
  )
};