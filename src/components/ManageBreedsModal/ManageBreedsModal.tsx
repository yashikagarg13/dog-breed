import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import SearchIcon from '@material-ui/icons/Search'
import BreedList from '../BreedList'
import { ManageBreedsModalProps } from '../../containers/ManageBreedsModal'

const useStyles = makeStyles(theme => ({
  saveButton:  {
    textTransform: 'capitalize',
    background: '#2761F5',
    width: 100,
    fontWeight: 'bold'
  },
  cancelButton: {
    textTransform: 'capitalize',
    background: '#E5E5E5',
    color: '#546079',
    width: 100,
    fontWeight: 'bold'
  },
  error: {
    color: 'red'
  },
  autocompleteOption: {
    textTransform: 'capitalize'
  },
  label: {
    fontWeight: 600,
    margin: 0,
    marginBottom: 5,
    fontSize: 16
  },
  autoCompleteWrapper: {
    marginTop: 30,
    marginBottom: 20,
  },
  dialogTitleRoot: {
    paddingTop: 24,
    paddingBottom: 10
  },
  dialogActionsRoot: {
    padding: '20px 24px'
  }
}))
function ManageBreedsModal(props: ManageBreedsModalProps) {
  const classes = useStyles()
  const { 
    defaultBreeds, 
    open, 
    onClose, 
    onSave,
    breeds,
    error,
    loading,
    fetched,
    fetchBreeds
  } = props
  const [ selectedBreeds, setSelectedBreeds ] = useState<string[]>(defaultBreeds)
  const inputRef = useRef<HTMLDivElement>(null)

  function handleSave() {
    onSave(selectedBreeds)
    onClose()
  }

  function handleChange(e: React.ChangeEvent<{}>, newValue: string[]) {
    if (newValue) {
      setSelectedBreeds(breeds => [...breeds.filter(breed => !newValue.includes(breed)), ...newValue])
      if (inputRef.current) {
        console.log(inputRef.current)
      }
    }
  }

  function handleBreedDelete(selectedBreed: string) {
    const fillteredBreeds = selectedBreeds.filter(breed => breed !== selectedBreed) 
    setSelectedBreeds(fillteredBreeds)
  }

  useEffect(() => {
    if  (!fetched) {
      fetchBreeds()
    }
  }, [fetched, fetchBreeds])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle classes={{ root: classes.dialogTitleRoot }}>Manage Breeds</DialogTitle>
      <DialogContent>
        <p className={classes.label}>Selected</p>
        <BreedList breeds={selectedBreeds} onDelete={handleBreedDelete} />

        <div className={classes.autoCompleteWrapper}>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {error &&  <small className={classes.error}>{error}</small>}
              {breeds?.length && (
                <>
                  <p className={classes.label}>Search for another breed:</p>
                  <Autocomplete
                    multiple
                    id='breed-search'
                    classes={{
                      option: classes.autocompleteOption
                    }}
                    options={breeds}
                    onChange={handleChange}
                    clearOnBlur
                    selectOnFocus
                    value={selectedBreeds}
                    filterSelectedOptions
                    renderInput={(params: TextFieldProps) => 
                      <TextField 
                        {...params} 
                        variant="outlined"
                        size="small"
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: <SearchIcon />
                        }}
                      />}
                  />
                </>
              )}
            </>
          )}
        </div>
      </DialogContent>
      <DialogActions classes={{ root: classes.dialogActionsRoot }}>
        <Button 
          className={classes.cancelButton} 
          variant="contained" 
          color="default" 
          onClick={onClose}>
            Cancel
        </Button>
        <Button 
          className={classes.saveButton} 
          variant="contained" 
          color="primary" 
          onClick={handleSave}>
            Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ManageBreedsModal