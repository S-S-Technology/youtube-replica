import avatar from "../../assets/admin.png";
import thumbnail from "../../assets/thumb.jpg";

const Card = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      {/* Card */}
      <div className="bg-white ">
        {/* Image */}
        <img src={thumbnail} alt="Image" className="rounded-xl" />
        {/* Title and Text */}
      </div>

      <div className="flex items-center space-x-2">
        {/* Reduce the margin here */}
        <img src={avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
        <div className="">
          {/* Remove margin between thumbnail and text */}
          <span className="text-sm font-medium">
            Krishna Jod 10 SOlo Kills ?
          </span>
          <span className="block text-xs text-gray-500">Snehil Op</span>
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-2">100K views</span>
            <span>Posted 9 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
