interface PostData {
  id: number;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  caption: string;
  location: string;
  likes: number;
}

interface PostProps {
  post: PostData;
}

const Post = ({ post }: PostProps) => {
  return (
    <div className="max-w-md mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-lg">
      <img className="w-full" src={post.imageUrl} alt={post.caption} />
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 mr-4 rounded-full"
            src={post.avatarUrl}
            alt="User Avatar"
          />
          <div>
            <p className="font-semibold">{post.username}</p>
            <p className="text-sm text-gray-600">{post.location}</p>
          </div>
        </div>
        <p className="text-gray-800">{post.caption}</p>
        <div className="flex justify-between mt-4">
          <button className="flex items-center text-gray-700">
            <svg
              className="w-6 h-6 mr-1 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4C8.13 4 5 7.13 5 11c0 4.36 3.29 7.94 7.5 8.43v3.07h-3v3h3v3h3v-3h3v-3h-3v-3.07C18.71 18.94 22 15.36 22 11c0-3.87-3.13-7-7-7zm5 7h-3v3h-2v-3h-3v-2h3V8h2v3h3v2z" />
            </svg>
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center text-gray-700">
            <svg
              className="w-6 h-6 mr-1 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4C8.13 4 5 7.13 5 11c0 4.36 3.29 7.94 7.5 8.43v3.07h-3v3h3v3h3v-3h3v-3h-3v-3.07C18.71 18.94 22 15.36 22 11c0-3.87-3.13-7-7-7zm5 7h-10v-2h10v2z" />
            </svg>
            <span>Comment</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Posts = () => {
  const posts: PostData[] = [
    {
      id: 1,
      username: "john_doe",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
      imageUrl:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
      caption: "Beautiful scenery!",
      location: "New York, New York",
      likes: 124,
    },
    {
      id: 2,
      username: "jane_doe",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
      imageUrl:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
      caption: "Beautiful scenery!",
      location: "New York, New York",
      likes: 124,
    },
    {
      id: 3,
      username: "john_doe",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
      imageUrl:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
      caption: "Beautiful scenery!",
      location: "New York, New York",
      likes: 124,
    },
    {
      id: 4,
      username: "jane_doe",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPodEp1Zyixlyx1Rrq6JJlPm0hgg1pFeLNrxgt2bkYw&s",
      imageUrl:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
      caption: "Beautiful scenery!",
      location: "New York, New York",
      likes: 124,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="grid grid-cols-2 gap-8 mt-10">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
