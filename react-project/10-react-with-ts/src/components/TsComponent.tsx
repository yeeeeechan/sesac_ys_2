import { useState } from 'react'
import CommentTable from './CommentTable'
import React from 'react'
import CommentRow from "../types/types"

type ConditionSearch = "writer" | "title"

const TsComponent = () => {
  const [inputWriter, setInputWriter] = useState<string>('')
  // state에 초기값을 넣어 줄 경우엔 해당 타입을 알아서 해석하므로, 타입을 지정하지 않아도 오류 안 남
  const [inputTitle, setInputTitle] = useState('')
  const [inputSearch, setInputSearch] = useState('')
  const [comment, setComment] = useState<CommentRow[]>([
    {
      writer: '민수',
      title: '안뇽',
    },
    {
      writer: '지민',
      title: '하이하이',
    },
    {
      writer: '희수',
      title: '멋쟁이',
    },
  ])
  const [result, setResult] = useState<CommentRow[]>([])
  const [searchType, setSearchType] = useState<ConditionSearch>('writer')

  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    }

    setComment([...comment, newComment])
    setInputWriter('')
    setInputTitle('')
  }

  const searchComment = () => {
    let searchResult = comment.filter((item) => {
      // console.log(item); // comment에 대한 각 원소(객체)
      // console.log(item[searchType]); // 검색 조건(key)에 대한 value 값
      // console.log(item[searchType].includes(search)); // true or false

      // 검색결과 없음; null 반환
      if (!item[searchType].includes(inputSearch)) {
        return null
      }

      // 검색결과 있음; 검색결과(배열) 반환
      return item
    })

    // 검색 결과 state 설정
    setResult(searchResult)
    setInputSearch('')
  }

  const selectSearchType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e.target.value);
    // select option 상태 설정
    setSearchType(e.target.value as ConditionSearch)
  }

  return (
    <div>
      <form>
        <label htmlFor="wirter2">작성자:</label>
        <input
          id="wirter2"
          type="text"
          name="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title2">제목:</label>
        <input
          id="title2"
          type="text"
          name="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      <form>
        <select name="type" onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>

        <input
          type="text"
          name="search"
          placeholder="검색어"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
      </form>
  
      <h3>전체 댓글 목록</h3>
      <CommentTable comments={comment}/>

      <h3>댓글 검색 결과</h3>
      {result.length > 0 ? (
        <div>
      <CommentTable comments={result} />
        </div>
      ) : (
        <h5>검색 결과가 없습니다.</h5>
      )}
    </div>
  )
}

export default TsComponent