import * as axios from 'axios'


class Api {

  constructor(){
    this.api_token = null
    this.api_url = 'https://dev.mymasjidpedia.id/api-devel'
    this.client = null
  }

  async create(){
      try{
        this.api_token = localStorage.getItem('token')
        // console.log('read api')
      }catch(error){
        console.log('error', error)
      }
  

  let headers = {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }

  if(this.api_token){
    headers.Authorization = `Bearer ${this.api_token}`
    // headers['x-access-token'] = this.api_token
  }

  this.client = axios.create({
    baseURL : this.api_url,
    timeout : 10000,
    headers : headers
  })

}
  
  getClient(){
    return this.client
  }

}

export default Api



