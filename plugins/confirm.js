$.confirm = function(options){
    return new Promise((resolve, reject)=>{
        const modal =$.modal({
            title: options.title,
            width:'500px',
            closable:false,
            content: options.content,
            onClose(){
                modal.destroy()
            },
            footerButtons:[
                {text: 'Yes', type: 'danger', handler(){
                    modal.close()
                    resolve()
                }},
                {text: 'Cancel', type: 'secondary', handler(){
                    modal.close()
                    reject()
                }}
            ]
        })
        //fixed animation
        setTimeout(()=>modal.open(), 100)
    })
}