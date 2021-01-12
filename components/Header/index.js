import { Layout } from 'antd';

const { Header } = Layout;

const HeaderComponent =({children}) =>{
    return(
      <>
        <Header>
          <header>Beer5</header>
        </Header>
        <style global jsx>{`
        header {
          color: #fff;
          img: 
        }
      `}</style>
      </>
    )
}

export default HeaderComponent;