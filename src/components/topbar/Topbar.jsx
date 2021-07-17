import "./Topbar.scss"

export default function topbar({ currentPage, handlePageChange }) {
    return (
        <div className="topbar">
            <span className="ownerName">Zhou Tian</span>
            <ul className="menu">
                <li>About me</li>
                <li onClick={() => handlePageChange('Portfolio')}>Portfolio</li>
                <li onClick={() => handlePageChange('Contact')}>Contact</li>
                <li>Resume</li>
            </ul>
            
        </div>
    )
}
