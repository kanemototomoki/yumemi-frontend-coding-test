import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './v1/population/composition/perYear'
import type { Methods as Methods1 } from './v1/prefectures'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://opendata.resas-portal.go.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/v1/population/composition/perYear'
  const PATH1 = '/v1/prefectures'
  const GET = 'GET'

  return {
    v1: {
      population: {
        composition: {
          perYear: {
            get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
              fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
            $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
              fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
            $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
              `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
          }
        }
      },
      prefectures: {
        get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
