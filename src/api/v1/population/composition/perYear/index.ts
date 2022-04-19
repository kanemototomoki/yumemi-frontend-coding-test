export type Methods = {
  get: {
    query: {
      prefCode: number
      cityCode: number | '-'
    }
    resBody: {
      message: null | string
      result: {
        boundaryYear: number
        data: {
          label: string
          data: {
            year: number
            value: number
          }[]
        }[]
      }
    }
  }
}
