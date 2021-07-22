import { connect, ConnectedProps } from 'react-redux'
import {
  getImages,
  getImagesError,
  isImagesLoading,
  isImagesFetched
} from '../../selectors'
import { AppDispatch, RootState } from '../../store'
import { fetchImages } from '../../reducers/images'
import ImagesGrid from '../../components/ImagesGrid'

const mapStateToProps = (state: RootState) => ({
  images: getImages(state),
  error: getImagesError(state),
  loading: isImagesLoading(state),
  fetched: isImagesFetched(state)
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchImages: (breeds: string[]) => dispatch(fetchImages(breeds))
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

type ImagesGridPropsRedux = ConnectedProps<typeof connector>

export type ImagesGridProps = ImagesGridPropsRedux & {
  breeds: string[]
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImagesGrid) 
