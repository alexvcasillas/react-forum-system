import Head from 'next/head';
import Navigation from '../components/navigation/navigation.component';
import Communities from '../components/communities/communities.component';
import Threads from '../components/threads/threads.component';

export default class Community extends React.Component {
  static async getInitialProps({ req }) {
    const url = new URL(`${req.headers.host}/${req.url}`);
    return { community: url.searchParams.get('c') };
  }

  render() {
    const { community } = this.props;
    return (
      <>
        <Head>
          <title>React Forum System - {community} community</title>
        </Head>
        <Navigation />
        <Communities />
        <Threads />
      </>
    );
  }
}
