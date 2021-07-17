
import "./Topbar.scss"

export default function topbar({ currentPage, handlePageChange }) {
    return (
        <div className="topbar">
            <span className="ownerName">Zhou Tian</span>
            <ul className="menu">
                <li 
                    className={currentPage === 'AboutMe' ? 'nav-item active' : 'nav-item'}
                    onClick={() => handlePageChange('AboutMe')}
                >
                    About me
                </li>
                <li 
                    className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </li>
                <li 
                    className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </li>
                <li 
                    className={currentPage === 'Resume' ? 'nav-item active' : 'nav-item'}
                    onClick={() => handlePageChange('Resume')}
                >
                    Resume
                </li>
            </ul>
            
        </div>
    )
}
