// //external imports
 import {  useState } from "react";
 import { Notify } from 'notiflix/build/notiflix-notify-aio';

// //internal imports
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { StyledMessage } from "./Message/styled-message.js";
import { Message } from "./Message/Message";
import { StyledContainer } from "./Container/styled-container.js";
import { StyledSection, StyledHero } from "./Section/styled-section.js";

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
      
      <StyledSection>
        <StyledContainer>
          <ImageGallery query={query} openModal={handleOpenModal} />
        </StyledContainer>
      </StyledSection>

      {openModal && (
        <Modal
          largeImageURL={largeImageURL}
          modalClose={handleModalClose}
        />
      )}
     </>
  )
};