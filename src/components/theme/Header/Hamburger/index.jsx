import React, { useContext } from 'react';

const Hamburger = ({ sidebar, toggle }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper sidebar={sidebar} onClick={() => toggle(!sidebar)}>
            <Bar top sidebar={sidebar} theme={theme} />
            <Bar mid sidebar={sidebar} theme={theme} />
            <Bar bottom sidebar={sidebar} theme={theme} />
        </Wrapper>
    )
};

export default Hamburger;
