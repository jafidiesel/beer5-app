import { Layout } from 'antd';

import Header from '../Header';
import Footer from '../Footer';

const { Content } = Layout;

const LayoutComponent =({children}) =>{
    return(
        <>
          <Header>Header</Header>
          <Content>{children}</Content>
          <Footer>Footer</Footer>
        </>
    )
}

export default LayoutComponent;