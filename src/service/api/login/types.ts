export interface ILoginParams {
  //userName: string
 // passWord: string | number
  type: string
  id: number
}
export interface ILoginApi {
  //login: (params: ILoginParams)=> Promise<any>
  login: ()=> Promise<any>,
  ass: () => Promise<any>
}