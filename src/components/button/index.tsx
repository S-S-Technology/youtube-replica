import React from "react";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
}

export default function Button(props: Props) {
  const { children, onClick } = props;

  return (
    <button
      className="w-full py-3 font-bold text-white bg-blue-500  hover:bg-blue-600 rounded-xl focus:outline-none focus:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
