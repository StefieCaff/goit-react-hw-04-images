
/** All imports will be structured as they are in the App.jsx file
 * external imports followed by an empty line
 * 
 * internal imports followed by an empty line
 */

import { useState, useEffect } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { getImages } from "utils/api/get-images";

import { StyledHero } from "./Section/styled-section";
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { StyledMessage } from "./Message/styled-message";

import { StyledSection } from 'components/Section/styled-section.js';
import { StyledContainer } from "./Container/styled-container";
import { FlexWrapper } from "./Wrapper/Wrapper";

import { StyledLoader } from 'components/Loader/styled-loader.js';
import { StyledButton, StyledSecondaryButton } from 'components/Button/styled-button.js';
import { ImageGallery } from "./ImageGallery/ImageGallery";

export const App = () => {
  const [query, setQuery] = useState('');
  const [openModal, setOpenModal] = useState(false)
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [toTop, setToTop] = useState(false);
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (searchQuery) => {
    if (searchQuery === query) {
      Notify.info(`Eeep, ${query} is on display, please enter a new search.`);
    } else {
      setImages([]);
      setPage(1);
      setQuery(searchQuery)
    };    
  };

  const handleOpenModal = (url) => {
    setOpenModal(true);
    setLargeImageURL(url);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setLargeImageURL('');
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const backToTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    })
  };




useEffect(() => {
  const getGallery = async () => {
    setStatus('pending');
    setLoading(true);
      try {
        const response = await getImages(query, page);
        let imageData = response.data;
        let imageCount = imageData.hits.length;
        let imageTotal = imageData.totalHits;

        if (page === 42) {
          setImages(prev => [...prev, ...imageData.hits.slice(4)]);
          setStatus('resolved');
        }
        else if(
          Number.isInteger(imageTotal / imageCount) === true &&
          page === (imageTotal / imageCount))
        {
          setImages(prev => [...prev, ...imageData.hits]);
          setStatus('resolved');
          return;
        }            
        else {
          setImages(prev => [...prev, ...imageData.hits]);
          setStatus('more');
        }
        if (imageCount === 0) {
          setStatus('resolved');
          setImages([]);
          setToTop(false);
            Notify.failure(
              `Sorry, ${query} doesn't match any images in the Pixabay database, please try another search.`
            );
          return;
        }
        if (imageCount < 12 && page === 1) {
          setLoading(false);
          setImages(prev =>[...prev,...imageData.hits])
          setStatus('resolved');
          setToTop(false);
          Notify.success(
            `Woot! Maximum search value found, there are ${imageCount} ${query} images in the Pixabay database.`
          );
          return;
        }
        if (imageCount < 12 && page > 1) {
          setLoading(false);
          setImages(prev => [...prev, ...imageData.hits]);
          setStatus('resolved');
          setToTop(true);
          Notify.success(
            `Woot! Maximum search values found! We have ${imageCount} ${query} images in the Pixabay database.`
          );
          return;
        }
        if (page >= 2 && page <= 41) {
          setStatus('more');
          setToTop(true);
          Notify.info(
            `${imageTotal - (imageCount * page)}of ${imageTotal} ${query} images`
          );
          return;
        }
        if (page === 42) {
          setToTop(true);
          setStatus('resolved');
          return;
        }
        if (imageTotal > 12) {
          setStatus('more');
          setToTop(true);
          Notify.success(
            `Hooray! There are ${imageTotal} ${query} images found in the Pixabay database.`
          );
          return;
        }
    } catch (e) {
      console.error('Error fetching images:', e);
        Notify.failure(
          `Sorry, there was an error fetching ${query}, Please try again.`
        );
    }
    finally {
      setLoading(false);
    }
    };
    if (query !== '') {
      if(page === 1){
        setImages([]);
      }
        getGallery();
    }
    },[query, page])

/**Render */  
  return (
   
    <>
      <h1 className="hidden">Pixabay API image search</h1>
      <StyledHero>
        <Searchbar onSubmit={handleSubmit} />
      </StyledHero>
      <StyledMessage>
        <span><a href="https://pixabay.com/">Pixabay</a> API</span>
      </StyledMessage>
      {status === 'pending' &&
        (
          <StyledSection>
            <StyledContainer>
              <ImageGallery images={images} openModal={handleOpenModal} />
              {loading && <StyledLoader loading={loading} />}
            </StyledContainer>
          </StyledSection>
        )}
      {status === 'resolved' && (
        <StyledSection>
          <StyledContainer>
            <ImageGallery images={images} openModal={handleOpenModal} />
            {toTop && <StyledSecondaryButton clickHandler={backToTop} text="To Top" />}
          </StyledContainer>
        </StyledSection>
      )}
      {status === 'more' && (
        <StyledSection>
          <StyledContainer>
            <ImageGallery images={images} openModal={handleOpenModal} />
            <FlexWrapper>
              <StyledButton clickHandler={handleLoadMore} text="More Images"></StyledButton>
            </FlexWrapper>
            {toTop && <StyledSecondaryButton clickHandler={backToTop} text="To Top" />}
          </StyledContainer>
        </StyledSection>
      )}
      {openModal && (
        <Modal
          largeImageURL={largeImageURL}
          modalClose={handleModalClose}
        />
      )}
    </>
  );
};