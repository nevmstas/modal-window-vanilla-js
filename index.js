const obj = {
    title: 'Title test', 
    closable: true,
    content: `
        <h4>Modal is working<h4>
        <p>Lorem ipsum dolor sit.<p>
    `,
    width: '500px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            console.log('Primary btn clicked')
        }},
        {text: 'Calcel', type: 'danger', handler(){
            console.log('Danger btn clicked')
        }}
    ]
}

const myModal = $.modal(obj)