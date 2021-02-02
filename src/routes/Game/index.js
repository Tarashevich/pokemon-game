const GamePage = ({onChangePage}) => {

    const handleClickButton = (page) => {
        onChangePage && onChangePage('app');
    }

    return(
        <div>
            This is Game Page
            <button onClick={handleClickButton}>Home</button>
        </div>
    )
}

export default GamePage