import { useState } from "react";
import DatePicker from "react-datepicker";
import CreatableSelect from "react-select/creatable";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../../hooks/useAuth";

const AddVolNeedPost = () => {
  const navigate = useNavigate();
  const [deadline, setDeadline] = useState(new Date());
  const [category, setCategory] = useState(null);
  const options = [
    { value: "Healthcare", label: "Healthcare" },
    { value: "Education", label: "Education" },
    { value: "Social Service", label: "Social Service" },
    { value: "Animal Welfare", label: "Animal Welfare" },
  ];
  const { user } = useAuth();
  const handleAddPost = async (e) => {
    e.preventDefault();
    const thumbnail_url = e.target.thumbnail_url.value;
    const post_title = e.target.post_title.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const volunteers_needed = parseInt(e.target.volunteers_needed.value);
    const postData = {
      thumbnail_url,
      post_title,
      description,
      location,
      volunteers_needed,
      category,
      deadline,
      organizer_name: user.displayName,
      organizer_email: user.email,
      organizer_photoURL: user.photoURL,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_server_root}/all-vol-need-posts`,
        postData
      );
      navigate("/my-volunteer-need-posts");
      toast.success("posted successfully");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <form className="my-14 w-11/12 max-w-8xl mx-auto" onSubmit={handleAddPost}>
      <Helmet>
        <title> KindConnect | Add volunteer need posts</title>
      </Helmet>
      <h3 className="font-bold text-xl mb-5">Add volunteer need post</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Organizer Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            defaultValue={user.displayName}
            disabled
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Organizer Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            defaultValue={user.email}
            disabled
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail URL</span>
          </label>
          <input
            type="text"
            name="thumbnail_url"
            className="input input-bordered w-full"
            placeholder="www.thumbnailurl.com"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="post_title"
            className="input input-bordered w-full"
            placeholder="volunteer need for what"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="description"
            placeholder="type your description here..."
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <CreatableSelect
            required
            isClearable
            onChange={(selectedOption) => setCategory(selectedOption.value)}
            options={options}
            styles={{
              option: (base) => ({
                ...base,
                backgroundColor: "#FFFFFF",
                color: "#2b2b2b",
              }),
              control: (base) => ({
                ...base,
                backgroundColor: "transparent",
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: "#FFFFFF",
              }),
              singleValue: (base) => ({
                ...base,
                color: "inherit",
              }),
            }}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">No of Volunteer Needed</span>
          </label>
          <input
            type="number"
            name="volunteers_needed"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <DatePicker
            selected={deadline}
            onChange={(date) => setDeadline(date)}
            minDate={new Date()}
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <button className="btn btn-primary mt-5">Post Now</button>
    </form>
  );
};

export default AddVolNeedPost;
