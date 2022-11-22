import styles from './index.less';
import Header from '../components/Header/Header';
export default function IndexPage(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
