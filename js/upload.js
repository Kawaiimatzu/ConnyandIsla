const CLOUD_NAME = "ati5cgwj";

const UPLOAD_PRESET = "connyandisla";

export async function uploadToCloudinary(file){

    const formData = new FormData();

    formData.append("file",file);

    formData.append("upload_preset",UPLOAD_PRESET);

    const response = await fetch(

        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,

        {

            method:"POST",

            body:formData

        }

    );

    const data = await response.json();

    return data.secure_url;

}