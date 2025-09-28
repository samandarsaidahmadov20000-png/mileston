import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";
import { AlignHorizontalJustifyCenter, User } from "lucide-react";

function Header() {
  const { user, onClose } = useTelegram();

  return (
    <div className={"header"}>
      <AlignHorizontalJustifyCenter />
      <div className="user">
        <User />
      </div>

      {/* <span className={"username"}>{user?.username}</span> */}
    </div>
  );
}

export default Header;
