import axios from "axios";
import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";

const TableRowToShowData = ({ post, index, fetchData }) => {
  const { pathname } = useLocation();
  const modalRef = useRef();
  const {
    _id,
    organizer_name,
    organizer_email,
    thumbnail_url,
    post_title,
    volunteers_needed,
    req_status,
    location,
    deadline,
    category,
    description,
  } = post;
  const [newDeadline, setNewDeadline] = useState(deadline);
  const [newCategory, setNewCategory] = useState(category);

  const options = [
    { value: "Healthcare", label: "Healthcare" },
    { value: "Education", label: "Education" },
    { value: "Social Service", label: "Social Service" },
    { value: "Animal Welfare", label: "Animal Welfare" },
  ];

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const newThumbnailURL = e.target.thumbnail_url.value;
    const newPostTitle = e.target.post_title.value;
    const newDescription = e.target.description.value;
    const newLocation = e.target.location.value;
    const newVolNeeded = parseInt(e.target.volunteers_needed.value);
    const editedData = {
      thumbnail_url: newThumbnailURL,
      post_title: newPostTitle,
      volunteers_needed: newVolNeeded,
      location: newLocation,
      deadline: newDeadline,
      category: newCategory,
      description: newDescription,
    };
    try {
      axios.patch(
        `${import.meta.env.VITE_server_root}/vol-need-post/${_id}`,
        editedData
      );
      modalRef.current.close();
      fetchData();
      toast.success("Successfully updated");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  const handleDeletePost = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(
            `${import.meta.env.VITE_server_root}/vol-need-post/${_id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          fetchData();
        }
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  const handleCancelReq = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(
            `${import.meta.env.VITE_server_root}/to-be-vol-req/${_id}`
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your request/post has been deleted.",
            icon: "success",
          });
          fetchData();
        }
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar hidden md:block">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail_url} alt="Post thumbnail" />
            </div>
          </div>
          <div>
            <div className="font-bold">{post_title}</div>
            <div className="text-xs md:text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">
        {pathname === "/my-volunteer-request-posts"
          ? req_status
          : volunteers_needed}
      </td>
      <td className="*:m-1">
        {pathname === "/my-volunteer-request-posts" ? (
          <button
            className="btn btn-error btn-xs md:btn-sm"
            onClick={handleCancelReq}
          >
            cancel
          </button>
        ) : (
          <>
            <button
              className="btn btn-warning btn-xs md:btn-sm"
              onClick={() => {
                modalRef.current.showModal();
              }}
            >
              <FiEdit />
            </button>
            <button
              className="btn btn-error btn-xs md:btn-sm"
              onClick={handleDeletePost}
            >
              <FaTrash />
            </button>
          </>
        )}
      </td>

      {/* Modal */}
      <dialog
        id="edit_vol_need_post"
        className="modal modal-middle"
        ref={modalRef}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit your volunteer need post</h3>
          <div className="mt-5">
            <form
              method="dialog"
              className="flex flex-col gap-2"
              onSubmit={handleUpdatePost}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail URL</span>
                </label>
                <input
                  type="text"
                  name="thumbnail_url"
                  className="input input-bordered w-full"
                  defaultValue={thumbnail_url}
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
                  defaultValue={post_title}
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
                  defaultValue={description}
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <CreatableSelect
                  isClearable
                  defaultInputValue={newCategory}
                  onChange={(selectedOption) =>
                    setNewCategory(selectedOption.value)
                  }
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
                  options={options}
                  className="text-neutral"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  defaultValue={location}
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
                  placeholder="how many volunteer needed?"
                  defaultValue={volunteers_needed}
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <DatePicker
                  selected={newDeadline}
                  onChange={(date) => setNewDeadline(date)}
                  minDate={new Date()}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="flex gap-3 mt-5 justify-end">
                <button
                  className="btn"
                  type="reset"
                  onClick={() => modalRef.current.close()}
                >
                  Close
                </button>
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </tr>
  );
};

export default TableRowToShowData;
