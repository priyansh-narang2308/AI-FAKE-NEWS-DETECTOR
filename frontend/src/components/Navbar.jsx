import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar bg-base-100 shadow-lg px-6">
            {/* Logo / Title */}
            <div className="flex-1">
                <Link to="/" className="btn normal-case text-2xl font-bold text-white btn-ghost">
                    📰 AI Fake News Detector
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-4">
                    <li>
                        <Link to="/" className="btn btn-primary">
                            Home
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => navigate('/dashboard')} className="btn btn-primary">
                            Dashboard
                        </button>
                    </li>
                    <li>
                        <Link to="/feedback" className="btn btn-accent">
                            Feedback
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
