import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectStories } from "../features/stories/storiesSlice";

const StoriesList = () => {
  const stories = useSelector(selectStories);
  return (
    <div id="stories" className="column">
      {stories && stories.length
        ? stories.map((story) => (
            <div
              className="story"
              key={`map of stories in stories list${story.id}`}
            >
              <Link to={`/stories/${story.id}`}>
                <h3>{story.title}</h3>
              </Link>
              <Link to={`/authors/${story.author.id}`}>
                <p>{story.author.name}</p>
              </Link>
              <hr />
            </div>
          ))
        : null}
    </div>
  );
};

export default StoriesList;
