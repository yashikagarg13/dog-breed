import fetch, { AxiosRequestConfig, AxiosResponse }  from 'axios'

export const request = (url: string, options?: AxiosRequestConfig) => {
  return fetch(url, options)
    .then((response: AxiosResponse) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data
      } else {
        if (!navigator.onLine) {
          throw new Error('No internet connection available')
        }
        throw new Error(response.statusText)
      }
    })
    .catch(e => {
      if (!navigator.onLine) {
        throw new Error('No internet connection available')
      } else {
        throw new Error(e.message)
      }
    })
}
