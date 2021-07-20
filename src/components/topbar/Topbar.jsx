
import "./Topbar.scss"

export default function topbar({ currentPage, handlePageChange }) {
    return (
        <div className="topbar">
            <span className="ownerName">Zhou Tian</span>
            <ul className="menu">
                <li 
                    className={currentPage === 'AboutMe' ? 'menu-btn activeSec' : 'menu-btn'}
                    onClick={() => handlePageChange('AboutMe')}
                >
                    About me
                </li>
                <li 
                    className={currentPage === 'Portfolio' ? 'menu-btn activeSec' : 'menu-btn'}
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </li>
                <li 
                    className={currentPage === 'Contact' ? 'menu-btn activeSec' : 'menu-btn'}
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </li>
                <li 
                    className={currentPage === 'Resume' ? 'menu-btn activeSec' : 'menu-btn'}
                    onClick={() => handlePageChange('Resume')}
                >
                    Resume
                </li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
            
        </div>
    )
}
