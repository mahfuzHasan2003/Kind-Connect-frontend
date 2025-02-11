import { useEffect, useState } from "react";
import TableRowToShowData from "../../components/TableRowToShowData";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Fade } from "react-awesome-reveal";

const MyVolReqPost = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userVolReqPosts, setUserVolReqPosts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const { data } = await axiosSecure.get(
      `/to-be-vol-req?email=${user.email}`
    );
    setUserVolReqPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="my-14 w-11/12 max-w-8xl mx-auto">
      <Helmet>
        <title> KindConnect | My volunteer request posts</title>
      </Helmet>
      <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl mb-5">
        All volunteer request applied by me
      </h2>
      <Fade delay={500}>
        <div className="overflow-x-auto">
          <table className="table table-xs md:table-md lg:table-lg">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th className="hidden md:block">
                  {pathname === "/my-volunteer-request-posts"
                    ? "Status"
                    : "Vol.. Needed"}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userVolReqPosts.length > 0 ? (
                userVolReqPosts.map((appliedPost, idx) => (
                  <TableRowToShowData
                    key={appliedPost._id}
                    post={appliedPost}
                    index={idx}
                    fetchData={fetchData}
                  />
                ))
              ) : (
                <tr>
                  <td></td>
                  <td colSpan="100%" className="text-center">
                    No Data Here..
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Fade>
    </div>
  );
};

export default MyVolReqPost;
