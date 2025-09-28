
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";
import { AlignHorizontalJustifyCenter, User } from "lucide-react";

function Header() {
  const { user, onClose } = useTelegram();

  return (
    <div className="header">
      <AlignHorizontalJustifyCenter color="#000"/>
      <div className="user">
        <User color="#fff"/>
      </div>

      {/* <span className={"username"}>{user?.username}</span> */}
    </div>
  );
}

export default Header;
