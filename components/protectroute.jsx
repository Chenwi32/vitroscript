import { useAuth } from "./authcontexprov";

import Notadminnotify from "./notadminnotify";

const ProtectRoute = ({ children }) => {
  const { user } = useAuth();

  return <>{user.uid ? children : <Notadminnotify />}</>;
};

export default ProtectRoute;
