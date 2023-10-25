const like=document.querySelector(".likeNews")
like.addEventListener=("onclick",(e) =>{
e.preventDefault();
if(this.state.likeIcone!=`red`){
fetch(`https://odd-dog-jumpsuit.cyclic.app/api/v1/news/like/651d12d70a88ecfce3d124e7`,{
method:'POST',
Headers:{
'Content-Type':'application/json'
      },
      body:JSON.stringify({
      like:this.state.news._id
      })
    }).then(result=>{
      this.setState({ likeIcon: 'red', data: result })
      console.log(_id,'id')
    console.log(result,JSON.stringify({
      like: this.state.product._id
  }))
    })
    
  }
})