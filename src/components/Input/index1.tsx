interface Props {
  value?: string;
}

export default function Input(props: Props) {
  const { value } = props;

  return (
    <div>
      <input
        type="text"
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Phone number or email"
      />

      <input
        type="text"
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Full Name"
      />
      <input
        type="text"
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Username"
      />
      <input
        type="password"
        value={value}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Password"
      />
    </div>
  );
}
