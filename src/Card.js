
const Card = ({name,prise})=>{
    return(
    <div class="card" style={{width: '18rem'}}>
        <img src="https://cdn-images.farfetch-contents.com/12/96/03/49/12960349_13486594_600.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">Prise {prise}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}

export default Card;