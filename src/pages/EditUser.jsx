import { PermIdentity, Publish } from "@material-ui/icons";
import "./styleFolder/user.css";

const EditUser = () => {
  return (
    <div className="editUser">
      <div className="title">
        <h1>Edit User</h1>
        {/* <button className="userAddButton">Create</button> */}
      </div>
      <div className="editWrap">
        <div className="userData">
          <div className="userTitle">
            <div className="imgContainer">
              <img src="" alt="" />
            </div>
            <div className="titleContainer">
              <h5>Rohit Singh</h5>
              <span>Software Engineer</span>
            </div>
          </div>
          <div className="userBody">
            <h4>Account Details</h4>
            <div className="userinfo">
              <PermIdentity className="iconedit" /> rhtWeb
            </div>
            <div className="userinfo">
              <PermIdentity className="iconedit" /> 12.04.1998
            </div>
            <h4>Contact Details</h4>
            <div className="userinfo">
              <PermIdentity className="iconedit" /> +91 6974584125
            </div>
            <div className="userinfo">
              <PermIdentity className="iconedit" /> rhtvella@gmail.com
            </div>
            <div className="userinfo">
              <PermIdentity className="iconedit" /> Mumbai | India
            </div>
          </div>
        </div>
        <div className="editData">
          <h4>Edit</h4>
            <form action="" method="post">
              <div className="editleft">
                <h5>Username</h5>
                <input type="text" name="username" placeholder="rhtWeb" />
                <h5>Full Name</h5>
                <input type="text" name="fullname" placeholder="Rohit Singh" />
                <h5>Email</h5>
                <input type="email" name="email" placeholder="rhtvella@gmail.com" />
                <h5>Phone</h5>
                <input type="number" name="Phone" placeholder="+91 6845174852" />
                <h5>Address</h5>
                <input type="text" name="address" placeholder="Mumbai | India" />
              </div>
              <div className="editright">
                <div className="picUpload">
                  <div className="imgContainer">
                    <img src="" alt="" />
                  </div>
                  <label htmlFor="profilePic">
                    <Publish />
                  </label>
                  <input type="file" name="profilePic" id="profilePic" />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default EditUser;
