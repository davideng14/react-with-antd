
import Header from '../../components/Header';

function LayoutWithHeader({ children }) {
    return (
      <div className="">
        <Header></Header>
        <div>{ children }</div>
      </div>
    );
}
  
export default LayoutWithHeader;
  