import InfoContext from './info-context';

const InfoContextProvider = (props) => {

    const contextInfo = {
        firstName: 'Nemanja',
        lastName: 'Manojlovic',
        role: 'Full Stack Developer',
    };

    return (<InfoContext.Provider value={contextInfo}>{props.children}</InfoContext.Provider>);
}

export default InfoContextProvider;