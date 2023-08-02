import styled from "@emotion/styled";

const Description = () => {
    const Spam = styled('span')(() => ({
        color: '#B5B5B5',
    }))
    return (
        <>
            <Spam>Since this app works with a lite version of ChatGPT, you have a limit of 200 translations per day, and a maximum of 3 per minute, so we recommend the manual translate option.</Spam>
        </>
    );
}

export default Description;