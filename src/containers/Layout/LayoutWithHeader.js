import Header from '../../components/Header';

function LayoutWithHeader({ children }) {
    return (
      <>
        <Header/>
        <main className="container" style={{ margin: '2em'}}>{ children }</main>
      </>
    );
}
  
export default LayoutWithHeader;
  