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
          font-size: 30px;
        }
      `}</style>
      </>
    )
}

export default HeaderComponent;