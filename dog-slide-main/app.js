let jar
let count

async function fetchApi(){
   try { const response = await fetch ('https://dog.ceo/api/breeds/list/all')
    const data = await response.json()
    console.log(data.message)

    return data.message}
     catch(err){
        console.log(err)
    }

}

let dogBreedImage;
async function fetchImages(images){
    dogBreedImage = images;
    const response = await fetch (`https://dog.ceo/api/breed/${dogBreedImage}/images`)
    const data = await response.json()
    return data.message
  
}


function dropDown(){
   const list= document.querySelector('.list-drop')
   fetchApi().then((datas)=>{
    const api = Object.keys(datas)
    api.map((data)=>{
        list.innerHTML +=  ` <li><a class="dropdown-item" href="#">${data}</a></li>`
    })
   })}

document.querySelector('.drop').addEventListener('click', dropDown)


//    document.querySelector('.dropdown-item').addEventListener('click',clickItem)
  const dropDownDiv= document.querySelector('.dropdown')
 


  dropDownDiv.addEventListener('click', (e)=>{
    // this.removeEventListener()


    if(e.target.className ==='dropdown-item'){
    const dogImageDiv = document.querySelector('.dog-image');
    let dropDownText = e.target.innerText;

    // dogBreedImage = '';
    
    count = 0;
    clearInterval(jar)
 fetchImages(`${dropDownText}`).then((images)=>{
      
        // image box
            dogImageDiv.innerHTML = `<img class="img-fluid" style="border-radius:15px" src="${images[0]}"></img>`

            // loop
                jar= setInterval(()=>{
                if(count === images.length){
                    count=0
                }
                // count === images.lenght ? count = 0 : count = count;

                if(count < images.length){
                count += 1
                // console.log(images[count])
                console.log(count, images[count])
                dogImageDiv.innerHTML = `<img class="img-fluidb h-100" style="border-radius:15px" src="${images[count]}"></img>`
              
            }
               
            },4000)
    })
    .catch((err)=>{console.log(err.message)})
  }
 
})



const dropstart = document.querySelector('.dropstart').addEventListener('click',(e)=>{
    count++
    e.preventDefault()
})
const dropend = document.querySelector('.dropend').addEventListener('click',(e)=>{
    count--
    e.preventDefault()
})