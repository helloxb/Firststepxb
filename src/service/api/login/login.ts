import http from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
    login(){
        //return http.post('/login', params)
        return http.get('http://jsonplaceholder.typicode.com/posts');
    },
    ass(){
        return http.get('http://jsonplaceholder.typicode.com/posts');
    }
}
export default loginApi