import Heading from "./Headiing";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={title[0].toUpperCase() + title.slice(1)} />
      <p>{body[0].toUpperCase() + body.slice(1)}</p>
    </>
  );
}

export default PostInfo;
