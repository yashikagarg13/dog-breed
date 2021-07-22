import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import CloseIcon from '@material-ui/icons/Close'
import {NO_BREEDS_SELECTED} from '../../constants/messages'

type BreedListProps = {
  breeds: string[];
  showNoBreedMessage?: boolean;
  onDelete: Function;
}
const useStyles = makeStyles(theme => ({
  breedContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 15,
  },
  chip: {
    textTransform: 'capitalize',
    height: 36,
    borderRadius: 6,
    color: '#546079',
    background: '#E9E9ED',
    fontSize: 14,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#cdcdcd'
    }
  },
  deleteIcon: {
    color: '#546079',
    fontSize: 16,
    margin: '0 5px  0 6px',
  }
}))
function BreedList(props: BreedListProps) {
  const classes = useStyles()
  const { breeds, showNoBreedMessage, onDelete } = props

  return (
    <div className={classes.breedContainer}>
      {(breeds.length === 0 && showNoBreedMessage) && (
        <p>{NO_BREEDS_SELECTED}</p>
      )}
      {(breeds).map(breed => <Chip 
        key={breed} 
        label={breed} 
        onDelete={() => onDelete(breed)} 
        className={classes.chip} 
        classes={{ deleteIcon: classes.deleteIcon }}
        deleteIcon={<CloseIcon data-testid={`${breed}-close-icon`} />}
      />)}
    </div>
  )
}

export default BreedList