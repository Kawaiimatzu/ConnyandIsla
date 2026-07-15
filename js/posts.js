import {

    db,

    collection,

    addDoc,

    serverTimestamp

} from "./firebase.js";

import {

    uploadToCloudinary

} from "./upload.js";

const scheduleBtn = document.getElementById("scheduleBtn");

const imageInput = document.getElementById("images");

const videoInput = document.getElementById("video");

scheduleBtn?.addEventListener("click", async () => {

    const caption = document.getElementById("caption").value;

    const date = document.getElementById("scheduleDate").value;

    const time = document.getElementById("scheduleTime").value;

    let imageUrl = "";

    let videoUrl = "";

    try{

        /* Upload Image */

        if(imageInput.files.length > 0){

            imageUrl = await uploadToCloudinary(

                imageInput.files[0]

            );

        }

        /* Upload Video */

        if(videoInput.files.length > 0){

            videoUrl = await uploadToCloudinary(

                videoInput.files[0]

            );

        }

        /* Save to Firestore */

        await addDoc(

            collection(db,"posts"),

            {

                caption,

                date,

                time,

                imageUrl,

                videoUrl,

                status:"scheduled",

                createdAt:serverTimestamp()

            }

        );

        alert("✅ Post Scheduled Successfully!");

    }

    catch(error){

        console.error(error);

        alert(error.message);

    }

});