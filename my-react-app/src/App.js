import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { useState } from "react";
import Modal from "./components/Modal";
function App() {

  const [active, setActive] = useState(false)
  return (
    <div>
      <Link to= {"/login"}>
      <Button
        text={"Авторизация/Регистрация"} color={"yellow"} onClick={() => setActive(true)}

        
      />
      </Link>

      <Modal active={active} setActive={setActive}/>
    </div>
  );
}

export default App;
