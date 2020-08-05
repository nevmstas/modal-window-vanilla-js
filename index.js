let cartoons = [
    {id: 1, title: 'Gravity falls', episodes: 30, img: 'https://i.pinimg.com/originals/67/c3/b8/67c3b820960b98a0a4a7aad445a3ca56.png'},
    {id: 2, title: 'Adventure time', episodes: 100, img: 'https://images-na.ssl-images-amazon.com/images/I/71U28colURL.jpg'},
    {id: 3, title: 'Sponge bob', episodes: 200, img: 'https://nick.mtvnimages.com/uri/mgid:arc:content:nick.com:9cd2df6e-63c7-43da-8bde-8d77af9169c7?quality=0.7'},
]

const toHtml = cartoon =>`
    <div class="col">
        <div class="card">
            <img style="height: 300px; width: 200px;" src="${cartoon.img}" class="card-img-top" alt="${cartoon.title}">
            <div class="card-body">
                <h5 class="card-title">${cartoon.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="episodes" data-id="${cartoon.id}">Check info</a>
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${cartoon.id}">Delete</a>
            </div>
        </div>
    </div>
`   


function render(){
    const html = cartoons.map(toHtml).join('') 
    //equal to 
    //const html = cartoons.map(fruit => toHtml(fruit))
    document.getElementById('cartoons').innerHTML = html
}

render()

const myModal = $.modal({
    title: 'Title test', 
    closable: true,
    content: `
        <h4>Modal is working<h4>
        <p>Lorem ipsum dolor sit.<p>
    `,
    width: '500px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            modal.close()
        }},
        {text: 'Calcel', type: 'danger', handler(){
            modal.close()
        }}
    ]
})

const episodesModel = $.modal({
    title: 'Episodes', 
    closable: true,
    width: '500px',
    footerButtons: [
        {text: 'Close', type: 'primary', handler(){
            episodesModel.close()
        }}
    ]
})

const confirmModal = $.modal({
    title: 'Are you sure?', 
    closable: true,
    width: '500px',
    footerButtons: [
        {text: 'Yes', type: 'danger', handler(){
            episodesModel.close()
        }},
        {text: 'Cancel', type: 'secondary', handler(){
            episodesModel.close()
        }}
    ]
})


document.addEventListener('click', e => {
    e.preventDefault()
    const btnType = event.target.dataset.btn
    //+ - string to number
    const id = +event.target.dataset.id
    
    const cartoon = cartoons.find(f => f.id === id)
    if(btnType === 'episodes'){
        episodesModel.open()
        episodesModel.setContent(`<p>${cartoon.title} has <strong>${cartoon.episodes}</strong> episodes </p>`)
    }else if(btnType ==='remove'){
        $.confirm({
            title: 'Are you sure?',
            content:`<p>You are going to delete <strong>${cartoon.title}</strong> card</p>`
        }).then(()=>{
            cartoons = cartoons.filter(f => f.id !== id)
            render()
        }).catch(()=>{
            console.log('canceled!')
        })
    }
})