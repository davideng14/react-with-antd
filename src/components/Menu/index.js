import { Menu as AntMenu } from 'antd';
import './style.css';

function Menu() {

    return (
        <AntMenu className="menu" mode="horizontal">
          <AntMenu.Item key="mail" >
            Dashboard
          </AntMenu.Item>
          <AntMenu.Item key="key" >
            Log out
          </AntMenu.Item>
        </AntMenu>
    );
}
  
export default Menu;
  