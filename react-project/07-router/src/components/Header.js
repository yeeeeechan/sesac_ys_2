import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="Header">
        <div className="logo">Router Study</div>
        <nav>
          <div>
            {/* a태그는 페이지를 새로고침하면서, 페이지 이동을 시킴 */}
            {/* Link 컴포넌트는 페이지를 새로고침하지 않고, 컴포넌트만 변경함 */}
            <Link to="/">HOME</Link>
          </div>
          <div>
            {/* <a href="/products">PRODUCT</a> */}
            <Link to="/products">PRODUCT</Link>
          </div>
          <div>
            <Link to="/photos">IMAGE</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
