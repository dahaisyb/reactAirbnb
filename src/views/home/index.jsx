import React, { memo } from 'react';
import {HomeWrapper} from './style.js'
import Banner from './c-cpns/banner'
const Home = memo(() => {
    return (
        <HomeWrapper>
            <Banner>home</Banner>
        </HomeWrapper>
    );
});

export default Home;
