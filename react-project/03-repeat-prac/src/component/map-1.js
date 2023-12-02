import { useState } from "react";

function ListMap() {
  const userList = [{ id: 1, title: "제목이 들어감", name: "작성자가 들어감" }];

  const [list, setList] = useState(userList);
  const [newUser, setNewUser] = useState("");
  const [newTitle, setTitle] = useState("");
  const [searchContent, setContent] = useState("");

  const addList = () => {
    const newObj = {
      id: list[list.length - 1].id + 1,
      title: newTitle,
      name: newUser,
    };

    const newList = list.concat(newObj);
    setList(newList);
  };

  const deleteUser = (id) => {
    const newList = list.filter((value) => value.id != id);
    setList(newList);
  };

  const handleEnter = (e) => {
    if (e.key == "Enter") addList();
  };

  const search = (value) => {
    const searchList = list.filter((value) => {});
  };

  return (
    <>
      <fieldset>
        <label>작성자 : </label>
        <input
          type="text"
          value={newUser}
          onChange={(e) => {
            setNewUser(e.target.value);
          }}
        ></input>

        <label>제목 : </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={handleEnter}
        ></input>
        <button onClick={addList}>작성</button>
      </fieldset>

      <select>
        <option
          value="user"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        >
          작성자
        </option>
        <option
          value="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        >
          제목
        </option>
      </select>

      <input
        type="text"
        onChange={(e) => {
          search(e.target.value);
        }}
      ></input>

      <button onClick={search}>검색</button>
      <button>전체</button>

      <table>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
        </tr>

        {list.map((value) => {
          return (
            <>
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.title}</td>
              </tr>
            </>
          );
        })}
      </table>

      <div></div>
    </>
  );
}

// '작성자' 옵션을 선택하고 '검색'을 눌렀을 때 그 결과가 <div>{결과}</div>에 출력

export default ListMap;
