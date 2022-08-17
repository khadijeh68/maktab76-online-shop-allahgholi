import "../../index.css";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const getPage = (e) => {
    const num = e.currentTarget.value;
    console.log(num);
  };
  return (
    <div>
      <ul className="d-flex flex-row-reverse justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="li mx-3">
            <a onClick={(e) => getPage(e)} className="text-decoration-none">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
