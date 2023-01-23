class dogApi {
    async fetchApi(user){
        const response = await fetch ('https://dog.ceo/api/breeds/list/all')
        const data = await response.json()
        console.log(data)
    }
}
fetchApi()