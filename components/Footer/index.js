import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent =({children}) =>
  <>
    <Footer style={{ textAlign: 'center', fontSize: '20px' }}>  Beer5 ©2021</Footer>
  </>
export default FooterComponent;