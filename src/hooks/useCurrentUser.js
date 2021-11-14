import { UserContext } from "App";
import React, { useContext, useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const context = useContext(UserContext);

  useEffect(() => {
    setCurrentUser(
      context.users.find((user) => user.name === context.currentUser)
    );
  }, [context.currentUser]);

  return currentUser;
};
