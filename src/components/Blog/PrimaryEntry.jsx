import "./PrimaryEntry.scss";

function PrimaryEntry({ item }) {

  return (
    <>
      <div className="blog-content-big">
        <div className="blog-content-big-content">
          <img src={item.img} alt="" />
          <div className="text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="239"
              height="178"
              viewBox="0 0 239 178"
              fill="none"
            >
              <path
                d="M20.9239 86.4107C7.35257 76.9511 2.65667 63.5775 2.98998 47.4995C3.80054 8.40048 65.7396 2.63763 93.9597 2.35088C136.033 1.92335 232.668 12.2706 237.135 70.4441C239.264 98.1735 218.377 112.472 193.969 120.894C163.97 131.245 71.164 145.73 56.9902 117.5C50.7717 105.114 65.6505 95.8387 79.4902 92.9995C105.702 87.6221 202.792 92.5897 202.792 117.5C202.792 134 184.987 151.866 169.49 158.5C163.649 161 130.118 169.5 130.118 155.911C130.118 146.665 149.709 144.604 156.99 144C180.007 142.089 221.796 145.747 223.371 176.848"
                stroke="#DC5326"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
            <p>{item.desc}</p>
            {item.cta && (
              <button>
                <a href={item.link} target="_blank">Ver más...</a>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PrimaryEntry;
