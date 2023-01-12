import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile picture</label>
                    <div className="settingsProfilePicture">
                        <img src="https://www.treehugger.com/thmb/jGuyduPEEg2tCftwu_KH0Z0fFek=/3307x2480/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2020__02__red-panda-rests-branch-cfad0171b52b43908a2b0f6c56078862.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsProfilePictureIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Kolya" />
                    <label>Email</label>
                    <input type="email" placeholder="Kolya@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}