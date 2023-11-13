import styles from '../ui/dashboard/dashboard.module.css'
import Card from './card/card'
import RightBar from './rightbar/rightbar'
const Dashboard = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className={styles.sidebar}>
                <RightBar/>
            </div>
        </div>
    )
}
export default Dashboard
