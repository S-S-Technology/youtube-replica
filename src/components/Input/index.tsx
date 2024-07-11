interface Props {
  value?: string | number | readonly string[] | undefined;
}

export default function Input(props: Props) {
  const { value } = props;

  return (
    <div>
      <input
        type="text"
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Phone number, username, or email"
      />
      <input
        type="password"
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Password"
      />
    </div>
  );
}
