import React, { useState, useRef, Fragment, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Search = props => {
    const [show, setShow] = useState(false);
    const { onLoadActors } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const inputRef = useRef();
    const [ enteredFilter, setEnteredFilter ] = useState('');
    const dbURL = 'https://casting-call-2d5a7.firebaseio.com/actorID.json';

    useEffect(() => {
      const timer = setTimeout(() => {
          if(enteredFilter === inputRef.current.value) {
            const query = enteredFilter.length === 0
            ? ''
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
            fetch(dbURL + query)
            .then(response => response.json())
            .then(responseData => {
                const loadedIngredients = [];
                for (const key in responseData) {
                  loadedIngredients.push({
                    id: key,
                    title: responseData[key].title,
                    amount: responseData[key].amount
                  });
                }
                onLoadActors(loadedIngredients);
            });
          }
        }, 500);
        return () => { // clean up useEffect before running it again
          clearTimeout(timer);
        };
      }, [enteredFilter, onLoadActors, inputRef]);


    return (
      <Fragment>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body> <input
            ref={inputRef}
            type="text"
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)}
          /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
}

export default Search;