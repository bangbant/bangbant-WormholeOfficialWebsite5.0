import styles from './index.less';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
export default function IndexPage(props) {
  return (
    <div className={styles.box}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}
