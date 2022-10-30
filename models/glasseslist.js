export class GlassesList {
    
    arrGlasses = [];
    addGlass(newglasses) {
        this.arrGlasses.push(newglasses)
    };

    renderGlass(selector) {
        let html = this.arrGlasses.reduce((acc, cur) => {
            return acc += `
            <div class="col-4 vglasses__items" onclick="handleChange('${cur.id}')">
                <img src="${cur.src}" class="img-fluid">
             </div>
            `
        }, '');
        document.querySelector(selector).innerHTML = html;
    };
    renderAvatar(id) {
        let index = this.arrGlasses.findIndex(glasses => glasses.id == id)
        if (index !== -1) {
            let arr = this.arrGlasses[index];
            document.querySelector("#avatar").innerHTML = `<img src="${arr.virtualImg}" class="img-fluid">`;
            document.querySelector("#glassesInfo").style.display = 'block'
            document.querySelector("#glassesInfo").innerHTML = `
            <h3>${arr.name} ${arr.brand} (${arr.color})</h3>
            <span class="btn btn-danger">${arr.price}$</span>
            <p>${arr.description}</p >`;
        }
    }
}