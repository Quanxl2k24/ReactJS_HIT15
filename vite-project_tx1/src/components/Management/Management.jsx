import { useState } from "react";
import "./Management.scss";

export default function Management() {
  const [index, setindex] = useState(null);
  const [editButton, setEditButton] = useState(false);
  const [display, setDisplay] = useState(false);
  const [id, setId] = useState("");
  const [ten, setTen] = useState("");
  const [diadiem, setDiadiem] = useState("");
  const [mota, setMota] = useState("");
  const [data, setData] = useState([]);

  const handleclickadd = () => {
    setDisplay(true);
  };

  const handleaddinfo = () => {
    setData((prevData) => [
      ...prevData,
      { id: id, ten: ten, diadiem: diadiem, mota: mota },
    ]);
    setDisplay(false);
    resetInput();
  };

  const handleupdate = () => {
    const newData = [...data];
    newData[index] = { id, ten, diadiem, mota };
    setData(newData);
    setDisplay(false);
    setEditButton(false);
    resetInput();
  };

  const handleDel = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const resetInput = () => {
    setId("");
    setTen("");
    setDiadiem("");
    setMota("");
  };

  const handle = () => {
    if (editButton) {
      handleupdate();
    } else {
      handleaddinfo();
    }
  };

  const handleupdateClick = (index) => {
    setindex(index);
    setId(data[index].id);
    setTen(data[index].ten);
    setDiadiem(data[index].diadiem);
    setMota(data[index].mota);
    setEditButton(true);
    setDisplay(true);
  };

  return (
    <div className="Management-container">
      {display && (
        <div className="input-data">
          <h2>Nhap Thong tin</h2>
          <h3>ID</h3>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <h3>TEN SU KIEN</h3>
          <input
            type="text"
            value={ten}
            onChange={(e) => setTen(e.target.value)}
          />
          <h3>DIA DIEM</h3>
          <input
            type="text"
            value={diadiem}
            onChange={(e) => setDiadiem(e.target.value)}
          />
          <h3>MO TA</h3>
          <input
            type="text"
            value={mota}
            onChange={(e) => setMota(e.target.value)}
          />
          <div className="input-data_butadd">
            <button className="butadd" onClick={handle}>
              {editButton ? "Sua" : "Them"}
            </button>
          </div>
        </div>
      )}

      <div className="management">
        <div className="management_header">
          <div className="management_header--title">
            <h1>Quan ly su kien</h1>
          </div>

          <div className="management_header--button-add">
            <button className="buttonadd" onClick={handleclickadd}>
              Them moi
            </button>
          </div>
        </div>

        <div className="management_box">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>TEN SU KIEN</th>
                <th>DIA DIEM</th>
                <th>MO TA</th>
                <th>ACTOR</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e, index) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.ten}</td>
                  <td>{e.diadiem}</td>
                  <td>{e.mota}</td>
                  <td>
                    <div className="button-del-and-upd">
                      <button onClick={() => handleupdateClick(index)}>
                        Sua
                      </button>
                      <button onClick={() => handleDel(index)}>Xoa</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
