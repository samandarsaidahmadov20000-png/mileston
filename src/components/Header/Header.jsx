
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram'


function Header() {

    const {user,onClose} = useTelegram()

  
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header
