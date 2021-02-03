import {useHistory} from 'react-router-dom';

import s from './style.module.css'
import Layout from "../../components/Layout";

const GamePage = () => {

    const history = useHistory()

    const handleClickButton = () => {
        history.push('/')
    }

    return(
        <div className={s.game}>

            <Layout title='Game Page' children='In Future...' />

            <button onClick={handleClickButton}>Return Home</button>

        </div>
    )
}

export default GamePage