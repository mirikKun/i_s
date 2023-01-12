import "./write.css"
import { useContext, useState } from "react"
import axios from "axios"
import { Context } from "../../context/Context"

export default function Write() {
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPost = {
            username: user.username,
            title,
            description
        }
        if (file) {
            const formData = new FormData();
            const filename = Date.now() + file.name;
            formData.append("filename", filename);
            formData.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", formData);
            } catch (err) {

            }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            console.log("ERROR:", err)
        }
    }

    return (
        <div className="write">
            {file && (
                <img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(event) => setFile(event.target.files[0])} />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={(event) => setTitle(event.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Write description..."
                        type="text"
                        onChange={(event) => setDescription(event.target.value)}></textarea>
                </div>s
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}