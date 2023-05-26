import React from "react";
import Data from "../../Data/profile.json";
import '../../css/Profile.scss'
import Edit from'../Anh/edit.png'
import Delete from '../Anh/delete.png';
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_left">
        <div className="profile_left-content bg-slate-400">
          <p>Posts</p>
          <p>Log out</p>
        </div>
      </div>
      <div className="profile_right right">
        <div className="profile_right-content">
          <div className="profile_right-header">
            <button>Add new</button>
            <div className="search">
              <input type="text" placeholder="Title" />
              <input type="text" placeholder="Tags" />
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Data.length > 0 &&
                Data.map((item) => (
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.tags}</td>
                    <td>
                      <img src={Edit} alt="" />
                      <img src={Delete} alt="" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <button className="footer">Phần phân trang</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
