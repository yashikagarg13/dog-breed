import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import BreedList from '../BreedList'
import ManageBreedsModal from '../../containers/ManageBreedsModal'
import ImagesGrid from '../../containers/ImagesGrid'

const DUMMY_BREEDS = ['affenpinscher', 'buhund', 'husky']
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: 20,
    flexDirection: 'column',
  },
  breedsWrapper:  {
    display: 'flex',
    gap: 15,
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  button: {
    textTransform: 'capitalize',
    background: '#2761F5',
  }
}))
function Page() {
  const classes = useStyles()
  const [showModal, setShowModal] = useState(false)
  const [selectedBreeds, setSelectedBreeds] = useState(DUMMY_BREEDS)

  function handleOnClick() {
    setShowModal(true)
  }

  function handleDelete(selectedBreed: string) {
    const fillteredBreeds = selectedBreeds.filter(breed => breed !== selectedBreed) 
    setSelectedBreeds(fillteredBreeds)
  }

  function handleClose() {
    setShowModal(false)
  }

  function handleSave(selectedBreeds: string[]) {
    setSelectedBreeds(selectedBreeds)
  }

  return (
    <div className={classes.root}>
      <div className={classes.breedsWrapper}>
        <Button 
          className={classes.button} 
          variant="contained" 
          color="primary" 
          onClick={handleOnClick}>
            Manage Breeds
        </Button>
        <BreedList showNoBreedMessage breeds={selectedBreeds} onDelete={handleDelete} />
      </div>
      <ImagesGrid breeds={selectedBreeds} />
      {showModal && (
        <ManageBreedsModal
          open={showModal}
          defaultBreeds={selectedBreeds}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default Page