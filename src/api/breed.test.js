import * as api from './breed'
import * as helper from './index'

const BASE_URL = 'https://dog.ceo/api/'

describe('Breed API', () => {
  beforeEach(() => {
    jest.spyOn(helper, 'request').mockReturnValue('')
  })

  afterEach(() => {
    helper.request.mockClear()
  })

  describe('getBreeds', () => {
    it('should call request helper with url', () => {
      api.getBreeds()

      expect(helper.request).toHaveBeenCalledWith(
        `${BASE_URL}breeds/list/all`
      )
    })
  })
})
