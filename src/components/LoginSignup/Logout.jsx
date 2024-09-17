import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Logout() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const logoutUser = async () => {
        try {
          await axios.get(`${import.meta.env.VITE_SERVER_URL}/auth/logout`, { withCredentials: true });
  
          window.location.reload();

          navigate('/');
        } catch (error) {
          console.error('Logout failed:', error);
  
          navigate('/login');
        }
      };
  
      logoutUser();
    }, [navigate]);
  
    return <div>Logging you out...</div>;
  }
  

export default Logout;
