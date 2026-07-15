const imageInput = document.getElementById("images");

const videoInput = document.getElementById("video");

const previewGrid = document.getElementById("previewGrid");

let selectedFiles = [];

function renderPreview(){

    previewGrid.innerHTML = "";

    selectedFiles.forEach((file,index)=>{

        const reader = new FileReader();

        reader.onload = function(e){

            const item = document.createElement("div");

            item.className = "preview-item";

            if(file.type.startsWith("image")){

                item.innerHTML = `
                    <img src="${e.target.result}">

                    <button
                    class="remove-preview"
                    data-index="${index}">
                    ✕
                    </button>
                `;

            }

            else{

                item.innerHTML = `
                    <video controls>
                        <source src="${e.target.result}">
                    </video>

                    <button
                    class="remove-preview"
                    data-index="${index}">
                    ✕
                    </button>
                `;

            }

            previewGrid.appendChild(item);

        }

        reader.readAsDataURL(file);

    });

}

imageInput?.addEventListener("change",()=>{

    selectedFiles.push(...imageInput.files);

    renderPreview();

});

videoInput?.addEventListener("change",()=>{

    selectedFiles.push(...videoInput.files);

    renderPreview();

});

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("remove-preview")){

        selectedFiles.splice(

            Number(e.target.dataset.index),

            1

        );

        renderPreview();

    }

});

export {

    selectedFiles

};