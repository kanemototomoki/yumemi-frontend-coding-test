type Prefecture = {
  prefCode: number,
  prefName: string
}

export type Methods = {
  get: {
    resBody: {
      message: null | string;
      result: Prefecture[]
    }
  }
}
