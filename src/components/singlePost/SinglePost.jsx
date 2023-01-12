import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom"
import axios from "axios"
import "./singlePost.css"
import { Context } from "../../context/Context";

export default function SinglePost() {
    const imagesFolder = "http://localhost:5000/images/"
    const location = useLocation()
    const postId = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [updateMode, setUpdateMode] = useState(false)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + postId);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        };
        getPost()
    }, [postId])

    const handleDelete = async () => {
        try {
            await axios.delete("/posts/" + postId, { data: { username: user.username } });
            window.location.replace("/");
        } catch (err) {

        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put("/posts/" + postId, {
                username: user.username,
                title: title,
                description: description
            });
            setUpdateMode(false);
        } catch (err) {

        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src={imagesFolder + post.photo}
                        alt="" />
                )} {
                    updateMode ?
                        <input
                            className="singlePostTitleInput"
                            type="text"
                            value={title}
                            autoFocus
                            onChange={(event) => setTitle(event.target.value)}></input> : (
                            <h1 className="singlePostTitle">
                                {title}
                                {post.username === user?.username && (
                                    <div className="singlePostEdit">
                                        <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                    </div>
                                )}
                            </h1>
                        )
                }

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:
                        <Link className="link" to={`/?username=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <textarea
                        className="singlePostDescriptionInput"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)} />) : (
                    <p className="singlePostDescription">
                        {description}
                    </p>
                )}
                {updateMode && (
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}