const Post = (props) => {
  const { title, description, url, votes, writer_avatar_url, post_image_url } =
    props;
  return (
    <li>
      <div className="postGeneralDiv displayFlex">
        <img src={post_image_url} className="postMainImg"></img>

        <div className="postVotesDiv">
          <button id="btnAdd"></button>

          <p>{votes}</p>

          <button id="btnSubstract"></button>
        </div>
        <div className="postTextDiv">
          <a href={url}>
            <h2>{title}</h2>
          </a>
          <p>{description}</p>
        </div>
      </div>
      <div className="displayFlex postWriterDivContainer">
        <div className="postWriterDiv displayFlex">
          <p>Escrito por: </p>
          <img src={writer_avatar_url} className="postWriterImg"></img>
        </div>
      </div>
    </li>
  );
};

export default Post;
