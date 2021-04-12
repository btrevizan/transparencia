import HomePageWrapper from './HomePage';

const Pages = ({ components }) => {
    const HomePage = HomePageWrapper({ components });

    return {
        HomePage
    }
}

export default Pages;