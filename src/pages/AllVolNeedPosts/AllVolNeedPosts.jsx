import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import VolNeedCard from "../../components/VolNeedCard";
import { useState } from "react";

import { Helmet } from "react-helmet";

const AllVolNeedPosts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("all");

  const { data: allPosts, isLoading } = useQuery({
    queryKey: ["AllVolNeedPosts", searchValue, category],
    queryFn: async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_server_root
        }/all-vol-need-posts?search=${searchValue}&category=${category}`
      );
      return data;
    },
  });

  return (
    <div className="my-14 w-11/12 max-w-8xl mx-auto">
      <Helmet>
        <title> KindConnect | All volunteer request posts</title>
      </Helmet>
      <div className="md:flex justify-between items-center">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-4xl">
          Explore Volunteer Opportunities
        </h2>
        <div className="flex gap-3 md:gap-5 items-center mt-5 md:mt-0">
          <select
            className="select select-bordered w-full max-w-[150px]"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option selected value="all">
              All Category
            </option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Social Service">Social Service</option>
            <option value="Animal Welfare">Animal Welfare</option>
          </select>
          <div className="flex items-center gap-1 md:gap-3 lg:gap-5 w-full">
            <label className="input input-bordered flex items-center gap-2 pr-0 w-full">
              <input
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                className="grow w-full"
                placeholder="search by title.."
              />
            </label>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center mt-20">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : allPosts.length > 0 ? (
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3"
          }
        >
          {allPosts.map((post) => (
            <VolNeedCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-10"> No data found..</p>
      )}
    </div>
  );
};

export default AllVolNeedPosts;
