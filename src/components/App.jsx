
/** All imports will be structured as they are in the App.jsx file
 * external imports followed by an empty line
 * 
 * internal imports followed by an empty line
 */

 import {  useState } from "react";
 import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { StyledHero } from "./Section/styled-section";
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { StyledMessage } from "./Message/styled-message";
//import { Wrapper } from "./Wrapper/Wrapper";

export const App = () => {
  const [query, setQuery] = useState('');
  const [openModal, setOpenModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState('');
  
  const handleSubmit = (searchQuery) => {
    console.log(searchQuery);
    if (searchQuery === query) {
      Notify.info(`Eeep, ${query} is on display, please enter a new search.`);
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
      <StyledMessage>
        <span><a href="https://pixabay.com/">Pixabay</a> API</span>
      </StyledMessage>
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