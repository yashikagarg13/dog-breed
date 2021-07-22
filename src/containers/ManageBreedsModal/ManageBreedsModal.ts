import { connect, ConnectedProps } from 'react-redux'
import { fetchBreeds } from '../../reducers/breed'
import {
  getBreeds,
  getBreedsError,
  isBreedsLoading,
  isBreedsFetched
} from '../../selectors'
import ManageBreedsModal from '../../components/ManageBreedsModal'
import { AppDispatch, RootState } from '../../store'

const mapStateToProps = (state: RootState) => ({
  breeds: getBreeds(state),
  error: getBreedsError(state),
  loading: isBreedsLoading(state),
  fetched: isBreedsFetched(state)
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchBreeds: () => dispatch(fetchBreeds())
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)

type ManageBreedsModalPropsRedux = ConnectedProps<typeof connector>

export type ManageBreedsModalProps = ManageBreedsModalPropsRedux & {
  defaultBreeds: string[];
  open: boolean;
  onClose: () => void;
  onSave: (breeds: string[]) => void;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageBreedsModal) 
