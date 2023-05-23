//external imports
import { string, func } from 'prop-types';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';
/**internal imports */
//utils
import { getImages } from 'utils/api/get-images.js';
// components
import { Container } from '../Container/Container.jsx';
import { Wrapper } from '../Wrapper/Wrapper.jsx'
import { Loader } from '../Loader/Loader';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import { Button } from '../Button/Button';


const ImageGallery = (props) => {

    const {
        
        openModal,
        query
    } = props;
    
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [toTop, setToTop] = useState(false);
    const [status, setStatus] = useState('idle');

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
            try {
                const response = await getImages(query, page);
                let imageData = response.data;
                let imageCount = imageData.hits.length;
                let imageTotal = imageData.totalHits;
              
                if (page === 42) {
                    setImages(prev => [...prev, ...imageData.hits.slice(4)]);
                    setStatus('resolved');
                }
                else if (Number.isInteger(imageTotal / imageCount) === true && page === (imageTotal / imageCount)) {
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
                    Notify.failure(`Sorry, ${query} doesn't match any images in the Pixabay database, please try another search.`)
                    return;
                }
                if (imageCount < 12 && page === 1) {
                    setImages(imageData.hits)
                    setStatus('resolved');
                    setToTop(false);
                    Notify.success(`Woot! Maximum search value found, there are ${imageCount} ${query} images in the Pixabay database.`);
                    return;
                }
                if (imageCount < 12 && page > 1) {
                    setImages(prev => [...prev, ...imageData.hits]);
                    setStatus('resolved');
                    setToTop(true);
                    Notify.success(`Woot! Maximum search values found! We have ${imageCount} ${query} images in the Pixabay database.`);
                    return;
                }
                if (page >= 2 && page <= 41) {
                    setStatus('more');
                    setToTop(true);
                    Notify.info(`${imageTotal - (imageCount * page)}of ${imageTotal} ${query} images`)
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
                    Notify.success(`Hooray! We can view ${imageTotal} ${query} images in the Pixabay database.`);
                    return;
                }
            } catch (e) {
                console.error('Error fetching images:', e);
                Notify.failure(`Sorry, there was an error fetching ${query}, Please try again.`);
            }
            finally {
                console.log('made get request');
            }
        };
        
        console.log(query, 'after');
        if (query !== '') {
            // setImages([]);
            // setPage(1);
            getGallery();
            console.log(query);
            console.log(page);
        }
    },[query, page])

    
    if (status === 'pending') {
        return (
            <Container>
                
                <ul className="ImageGallery">
                    <ImageGalleryItem
                        data={images}
                        openModal={openModal}
                    />
                </ul>
                <Loader />
            </Container>
            
        )
    }
    if (status === 'resolved') {
        return (
            <Container>
                <ul className="ImageGallery">
                    <ImageGalleryItem
                        data={images}
                        openModal={openModal}
                    />
                </ul>
                {toTop && <Button clickHandler={backToTop} text="To Top"/>}
            </Container>
        );
    }
    if (status === 'more') {
        return (
            <Container>
                <ul className="ImageGallery">
                    <ImageGalleryItem
                        data={images}
                        openModal={openModal}
                    />
                </ul>
                <Wrapper>
                <Button clickHandler={handleLoadMore} text="Load More" /></Wrapper>
                <Wrapper>{toTop && <Button clickHandler={backToTop} text="To Top"/>}</Wrapper>
            </Container>
        );
    }
    return null;
};


ImageGallery.propTypes = {
    query: string,
    openModal: func.isRequired,
};

export { ImageGallery };
