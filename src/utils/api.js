class Api{
  constructor(config){
    this.url = config.url
    this.authorization= config.authorization
    

  }
  
   _getResponseData(res){
    if(res.ok){
      return res.json()
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`)); 
  }

  getUserInfo=()=>{
    
    return fetch(`${this.url}/users/me`, {
      headers: {
        authorization: this.authorization
      }
    })
      .then(this._getResponseData)
  }

  getCards=()=>{
    return fetch(`${this.url}/cards`, {
      headers: {
        authorization: this.authorization
      }
    })
      .then(this._getResponseData)
  }
}


const newApi = new Api({
  url: `http://nomoreparties.co/cohort12`,
  authorization: '61bfbbef-2f0f-4ba0-a4c0-c034d01c7f11'
})

export default newApi









