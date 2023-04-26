const main = document.getElementById('main')

document.body.addEventListener('keydown', (e) =>{
    const mainEl = `
    <h1>${e.keyCode}</h1>
        <div class="card-group">
            <div class="card">
                <div class="div1">
                    <p class="text-white text-center">event.key</p>
                </div>
                <div class="div2">
                    <p>${e.key  === ' ' ? 'space' : e.key}</p>
                </div>
            </div>
            <div class="card">
                <div class="div1">
                    <p>event.location</p>
                    <a href="#" class="p-left">(?)</a>
                </div>
                <div class="div2">
                    <p>${e.location}</p>
                </div>
            </div>
            <div class="card">
                <div class="div1">
                    <p>event.which</p>
                    <a href="#" class="p-left">(?)</a>
                </div>
                <div class="div2">
                    <p>${e.which}</p>
                </div>
            </div>
            <div class="card">
                <div class="div1">
                    <p>event.code</p>
                </div>
                <div class="div2">
                    <p>${e.code}</p>
                </div>
            </div>
           
        </div>
    `
    main.innerHTML = mainEl
})