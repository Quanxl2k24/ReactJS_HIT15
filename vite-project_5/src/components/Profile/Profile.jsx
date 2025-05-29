import { useState } from "react";
import { useFormik } from "formik";


import "./Profile.scss";
import logo from "../../assets/imgs/12.png";
import Edit from "../../assets/imgs/Edit.png";
import Delete from "../../assets/imgs/Delete.png";

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      tag: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (editIndex !== null) {
        const updateData = [...data];
        updateData[editIndex] = { ...updateData[editIndex], ...values };
        setData(updateData);
        setEditIndex(null);
      } else {
        setData([...data, { id, ...values }]);
        setId(id + 1);
      }
      resetForm();
      setDisplayBoxAdd(!displayBoxAdd);
    },
  });

  const [id, setId] = useState(0);
  const [displayBoxAdd, setDisplayBoxAdd] = useState(false);
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleDisplayBoxAdd = () => {
    setDisplayBoxAdd(!displayBoxAdd);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleEdit = (index) => {
    const item = data[index];
    formik.setValues({
      title: item.title,
      description: item.description,
      tag: item.tag,
    });
    setEditIndex(index);
    setDisplayBoxAdd(!displayBoxAdd);
  };

  console.log(data);
  return (
    <>
      <div className="profile">
        <div className="profile_left">
          <div className="profile_left--logo">
            <img src={logo} alt="logo" />
          </div>

          <ul className="profile_left--list">
            <li>
              <a href="">Posts</a>
            </li>
            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </div>

        <div className="profile_right">
          <div className="profile_right--input">
            <div className="buttonAddNew">
              <button onClick={handleDisplayBoxAdd}>Add new</button>
            </div>

            <div className="input">
              <div className="input_Title">
                <section>
                  <form action="">
                    <input type="text" placeholder="Title" />
                  </form>
                </section>
              </div>

              <div className="input_SelectTags">
                <select name="feature" id="feature">
                  <option value="">Tags</option>
                  <option value="">A1</option>
                </select>
              </div>
            </div>
          </div>
          {displayBoxAdd && (
            <div className="boxInsretData">
              <section>
                <form className="formData" onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    name="description"
                    id="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    placeholder="description"
                  />
                  <input
                    type="text"
                    name="tag"
                    value={formik.values.tag}
                    onChange={formik.handleChange}
                    id="tag"
                    placeholder="Tag"
                  />
                  <button type="submit">
                    {editIndex == null ? "ADD" : "UPDATE"}
                  </button>
                </form>
              </section>
            </div>
          )}
          <div className="profile_right--titleTable">
            <table>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>

              {data.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.title}</td>
                    <td>{e.description}</td>
                    <td>{e.tag}</td>
                    <td className="buttonDelAndEdit">
                      <button onClick={() => handleEdit(index)}>
                        <img src={Edit} alt="" />
                      </button>

                      <button onClick={() => handleDelete(index)}>
                        <img src={Delete} alt="" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
