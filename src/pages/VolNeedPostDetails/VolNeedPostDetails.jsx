import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { compareDesc, format } from "date-fns";
import { useAuth } from "../../hooks/useAuth";

const VolNeedPostDetails = () => {
  const suggestionRef = useRef();
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const {
    thumbnail_url,
    post_title,
    description,
    category,
    location,
    volunteers_needed,
    deadline,
    organizer_name,
    organizer_email,
    organizer_photoURL,
  } = post;
  const { user } = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_server_root}/vol-need-post/${id}`
        );
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleBeVolReq = async (e) => {
    e.preventDefault();
    const reqData = {
      vol_need_post_id: id,
      req_user: user,
      suggestion: suggestionRef.current.value,
      req_status: "requested",
      thumbnail_url,
      post_title,
      location,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_server_root}/to-be-vol-req`,
        reqData
      );
      toast.success("submitted your request");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
    navigate("/my-volunteer-request-posts");
  };

  const handleBecomeAVolBTN = () => {
    if (user?.email === organizer_email) {
      Swal.fire({
        icon: "warning",
        title: "Heyy...",
        text: "Action not permitted",
      });
      return;
    }
    if (volunteers_needed === 0) {
      Swal.fire({
        icon: "error",
        title: "Sorry...",
        text: "No more volunteer needed for this post! Please try another one",
      });
      return;
    }
    if (compareDesc(new Date(), deadline) === -1) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: "Deadline Crossed! Please try another one",
      });
      return;
    }
    document.getElementById("request_volunteer").showModal();
  };

  return (
    <div className="my-14 w-11/12 max-w-8xl mx-auto">
      <Helmet>
        <title> KindConnect | Volunteer need post details</title>
      </Helmet>
      <div className="text-center mb-5">
        <button
          className="btn btn-success font-bold uppercase"
          onClick={handleBecomeAVolBTN}
        >
          Be a Volunteer
        </button>
      </div>
      <h2 className="font-semibold text-4xl">Post Details</h2>
      <div className="inline-flex gap-3 items-center mt-10">
        <img
          loading="lazy"
          src={
            organizer_photoURL ||
            "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3396.jpg"
          }
          alt={organizer_name}
          referrerPolicy="no-referrer"
          className="w-10 md:w-14 aspect-square rounded-full border-2 border-primary"
        />
        <div>
          <h5 className="text-xl font-semibold">{organizer_name}</h5>
          <p className="text-xs">{organizer_email}</p>
        </div>
      </div>
      <div className="my-5 space-y-3">
        <img
          src={thumbnail_url}
          alt={post_title}
          className="w-full max-w-xl rounded-md"
          loading="lazy"
        />
        <h3 className="text-xl md:text-3xl font-bold">{post_title}</h3>
        <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
          <p className="text-sm md:text-base">
            <span className="font-semibold">Deadline: </span>
            {deadline ? (
              <span>{format(new Date(deadline), "dd MMM yyyy")}</span>
            ) : null}
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Location: </span>
            <span>{location}</span>
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Volunteer Needed: </span>
            <span>{volunteers_needed}</span>
          </p>
          <p className="text-sm md:text-base">
            <span className="font-semibold">Volunteer Category: </span>
            <span>{category}</span>
          </p>
        </div>
        <div>
          <p className="text-sm md:text-base font-semibold">Description:</p>
          <p className="text-sm md:text-base">{description}</p>
        </div>
      </div>

      {/* Modal */}
      <dialog id="request_volunteer" className="modal modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Request to be a volunteer</h3>
          <div className="mt-5">
            <form method="dialog" className="flex flex-col gap-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Requesting for</span>
                </label>
                <input
                  type="text"
                  defaultValue={post_title}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Organizer Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={organizer_email}
                  className="input input-bordered w-full"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Suggestion </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="type your suggestion here..."
                  ref={suggestionRef}
                ></textarea>
              </div>
              <div className="flex gap-3 mt-5 justify-end">
                <button className="btn">Close</button>
                <button className="btn" onClick={handleBeVolReq}>
                  Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default VolNeedPostDetails;
