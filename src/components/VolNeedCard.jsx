import { Link } from "react-router-dom";

const VolNeedCard = ({ post }) => {
  const { _id, thumbnail_url, post_title, description } = post;
  return (
    <div className="rounded-md border border-base-200 bg-base-200/15 flex flex-col">
      <img
        loading="lazy"
        src={thumbnail_url}
        alt={post_title}
        className="rounded-t-md aspect-video object-cover"
      />
      <div className="p-3 flex flex-col justify-between flex-grow">
        <div>
          <h6 className="text-lg font-semibold mb-2">{post_title}</h6>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </p>
        </div>
        <div>
          <Link
            to={`/volunteer-need-post-details/${_id}`}
            state={{ redirectTo: `/volunteer-need-post-details/${_id}` }}
          >
            <button className="btn btn-outline mt-3">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VolNeedCard;
