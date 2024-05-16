import { useState } from "react";

export default function CommentForm() {
  const [allComments, setAllComments] = useState([]);
  const [userComment, setUserComment] = useState({
    userName: "",
    comment: "",
  });

  function handleComment(e) {
    setUserComment({
      ...userComment,
      [e.target.id]: e.target.value,
    });
  }

  function resetForm() {
    setUserComment({
      userName: "",
      comment: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(userComment);
    setAllComments([userComment, ...allComments]);
    console.log(allComments);
    resetForm();
  }

  return (
    <>
      <div className="flex flex-row">
        <img
          src="/assets/images/profile-user.png"
          alt=""
          className="ml-6 mt-4 h-9 w-9 rounded-full bg-[#787878]"
        />
        <form className="flex w-full flex-col" onSubmit={handleSubmit}>
          <label htmlFor="userName">
            <input
              type="text"
              id="userName"
              name="userName"
              value={userComment.userName}
              onChange={handleComment}
              className="mb-2 ml-6 mr-auto w-[100px] border-b border-b-[#787878] bg-transparent text-base text-white focus:border-b-2 focus:border-b-white focus:outline-none"
              placeholder="Name..."
            />
          </label>
          <label htmlFor="comment">
            <input
              type="text"
              id="comment"
              name="comment"
              value={userComment.comment}
              onChange={handleComment}
              className="mb-4 ml-6 mr-auto w-[70%] border-b border-b-[#787878] bg-transparent text-base text-white focus:border-b-2 focus:border-b-white focus:outline-none"
              placeholder="Add a comment..."
            />
          </label>
          <button
            type="submit"
            className="ml-6 w-20 rounded-full bg-[#272727] py-1 text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <ul className="ml-20 mt-6 flex flex-col text-white">
        {allComments.map((ele, i) => {
          return (
            <li key={i} className="mb-1">
              <div className="flex flex-col">
                <div className="">
                  <span className="items-center rounded-full border bg-[#7d7d7d] px-1 py-[1px] align-middle text-sm font-normal">
                    {`@${ele.userName}`}
                  </span>
                </div>
                <span className="ml-1 mt-1 text-base">{`${ele.comment}`}</span>
              </div>
              <div className="mb-6 flex">
                <img
                  src="/assets/images/Like_logo.png"
                  alt="like logo"
                  className="mr-6 mt-3 h-5 w-5"
                />
                <img
                  src="/assets/images/dislike-logo.png"
                  alt="like logo"
                  className="mt-3 h-5 w-5"
                />
                <span className="ml-6 mt-2">Reply</span>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
