import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './style.css';

function LayoutWithHeader({ children }) {
    return (
      <div className="">
            <header>
                <h2>torre</h2>
                <Menu className="menu" mode="horizontal">
                    <Menu.Item key="mail" >
                        Genome
                    </Menu.Item>
                    <Menu.Item key="key" >
                        Other Key
                    </Menu.Item>
                </Menu>
            </header>
        <div>{ children }</div>
      </div>
    );
}
  
export default LayoutWithHeader;
  