import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LinkButton = (
  { children, to },
  // :{
  //   children: React.ReactNode;
  //   to: string;
  // }
) => {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
