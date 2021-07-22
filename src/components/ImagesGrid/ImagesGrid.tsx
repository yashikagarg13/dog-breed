import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { ImagesGridProps } from './../../containers/ImagesGrid'
import { Images } from './../../reducers/images'

const useStyles = makeStyles(() => ({
  imagesContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  error: {
    color: 'red'
  },
  imagesTitle: {
    textTransform: 'capitalize',
  },
  imageGrid: {
    display: 'flex',
    gridAutoColumns: 150,
    gap: 15,
    flexWrap: 'wrap'
  },
  image:{
    width: 150,
    height: 150
  }
}))
function ImagesGrid(props: ImagesGridProps) {
  const classes = useStyles()
  const { breeds, images, error, loading, fetchImages } = props
  const [imagesForSelectedBreeds, setImagesForSelectedBreeds] = useState<Images>({})

  useEffect(() => {
    breeds.length && fetchImages(breeds)
  }, [breeds, fetchImages])

  useEffect(() => {
    const selectedImages = breeds.reduce((filteredImages: Images, breed) => {
      filteredImages[breed] = images[breed]
      return filteredImages
    }, {})
    setImagesForSelectedBreeds(selectedImages)
  }, [images, breeds])

  return (
    <div className={classes.imagesContainer}>
      {loading ? (
          <CircularProgress />
        ) : (
          <>
            {error && <small className={classes.error}>{error}</small>}
            {imagesForSelectedBreeds && (
              Object.keys(imagesForSelectedBreeds).map((breed: string) => (
                <div key={breed}>
                  <h4 className={classes.imagesTitle}>{breed}</h4>
                  <div className={classes.imageGrid}>
                    {(imagesForSelectedBreeds[breed] || []).map((image: string, index: number) => (
                      <img 
                        key={index} 
                        className={classes.image} 
                        src={image} 
                        alt={`${breed}-${index + 1}`} 
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </>
        )
      }
    </div>
  )
}

export default ImagesGrid