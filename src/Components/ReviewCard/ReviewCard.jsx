
const ReviewCard = ({ data }) => {
  const { title, description, img } = data;
  return (
    <div className="m-2">
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
