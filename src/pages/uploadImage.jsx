import { Storage } from "aws-amplify";

// public level input
async function onChange(e) {
    console.log(e);
    const file = e.target.files[0];
    console.log(file);
    try {
        await Storage.put(file.name, file, {
            contentType: "image/png"
        });
        console.log("File uploaded successfully");
    } catch(error) {
        console.log("Error uploading file: ", error);
    }
}

function inputField() {
    return (
        <div>
            <input type="file" onChange={onChange} />;
        </div>
    );
}

export default inputField;
